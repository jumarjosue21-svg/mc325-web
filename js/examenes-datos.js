/* MC325 — Exámenes Pasados. GitHub Pages publica el JSON;
 * la edición y los archivos nuevos permanecen en ESTE navegador hasta exportarlos.
 * No hay autenticación ni subida directa al servidor desde esta web estática.
 */
(function (global) {
  'use strict';
  const CLAVE='mc325_examenes_borradores_v1';
  const BASE='data/examenes.json';
  const DB='mc325_examenes_archivos_v1', STORE='archivos';
  const clone=o=>JSON.parse(JSON.stringify(o));
  async function publicados() {
    const r=await fetch(BASE,{cache:'no-store'});
    if(!r.ok)throw new Error(`No se pudo leer ${BASE}: HTTP ${r.status}`);
    const v=await r.json();
    if(!Array.isArray(v))throw new Error(`${BASE} debe contener una lista JSON.`);
    return v;
  }
  function local() {
    try {
      const o=JSON.parse(localStorage.getItem(CLAVE)||'null')||{};
      return {base:typeof o.base==='string'?o.base:null,
        cambios:o.cambios&&typeof o.cambios==='object'&&!Array.isArray(o.cambios)?o.cambios:{},
        eliminados:Array.isArray(o.eliminados)?o.eliminados:[]};
    } catch {throw new Error('El borrador local está dañado. Haz una copia antes de limpiarlo.');}
  }
  function escribir(v){localStorage.setItem(CLAVE,JSON.stringify(v));}
  function existeConflicto(publicados,v=local()){return !!v.base&&v.base!==JSON.stringify(publicados);}
  function combinar(publicados,v=local()) {
    const m=new Map(publicados.filter(e=>e&&e.id).map(e=>[String(e.id),clone(e)]));
    Object.entries(v.cambios).forEach(([id,e])=>{if(e&&typeof e==='object')m.set(id,clone(e));});
    v.eliminados.forEach(id=>m.delete(String(id)));
    return [...m.values()];
  }
  function guardar(item,publicados){
    const v=local();if(!v.base)v.base=JSON.stringify(publicados);
    v.cambios[String(item.id)]=clone(item);
    v.eliminados=v.eliminados.filter(id=>String(id)!==String(item.id));escribir(v);
  }
  function eliminar(id,publicados){
    const v=local();if(!v.base)v.base=JSON.stringify(publicados);
    delete v.cambios[String(id)];
    if(publicados.some(e=>String(e.id)===String(id))&&!v.eliminados.includes(String(id)))v.eliminados.push(String(id));
    escribir(v);
  }
  function limpiar(){localStorage.removeItem(CLAVE);}
  function abrirDB(){return new Promise((resolve,reject)=>{
    if(!global.indexedDB)return reject(new Error('El navegador no admite IndexedDB.'));
    const q=indexedDB.open(DB,1);
    q.onupgradeneeded=()=>{if(!q.result.objectStoreNames.contains(STORE))q.result.createObjectStore(STORE);};
    q.onsuccess=()=>resolve(q.result);
    q.onerror=()=>reject(q.error||new Error('Fallo al abrir IndexedDB.'));
  });}
  async function guardarArchivo(id,file){
    const db=await abrirDB();return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite');
      tx.objectStore(STORE).put({blob:file,nombre:file.name||'archivo',tipo:file.type||''},String(id));
      tx.oncomplete=()=>{db.close();resolve();};
      tx.onerror=()=>{db.close();reject(tx.error);};
    });
  }
  async function leerArchivo(id){
    const db=await abrirDB();return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly'),q=tx.objectStore(STORE).get(String(id));
      q.onsuccess=()=>{db.close();resolve(q.result||null);};
      q.onerror=()=>{db.close();reject(q.error);};
    });
  }
  function id(){return global.crypto?.randomUUID?.()||`ex-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;}
  function rutaSegura(r,tipo){
    if(typeof r!=='string')return false;
    const dirs={markdown:'articulos',imagen:'enunciados',pdf:'pdfs'};
    const ext={markdown:'md',imagen:'(?:jpg|jpeg|png|webp)',pdf:'pdf'};
    if(!dirs[tipo])return false;
    return new RegExp(`^examenes/${dirs[tipo]}/[a-zA-Z0-9_.-]+\\.${ext[tipo]}$`,'i').test(r);
  }
  async function markdown(item){
    if(typeof item.contenido==='string')return item.contenido;
    if(!rutaSegura(item.ruta,'markdown'))throw new Error('La ruta Markdown no es válida.');
    const r=await fetch(item.ruta,{cache:'no-store'});
    if(!r.ok)throw new Error(`No se pudo leer el artículo: HTTP ${r.status}`);
    return r.text();
  }
  /* Empaqueta un registro para su publicación o para entregar un aporte ZIP. */
  async function empaquetar(item,zip,original=null){
    const out=clone(item),ident=String(item.id).replace(/[^a-zA-Z0-9_-]/g,'-');
    if(!ident)throw new Error('ID de examen inválido.');
    if(out.formato==='web'){
      if(typeof out.contenido==='string'){
        const ruta=rutaSegura(original?.ruta,'markdown')?original.ruta:`examenes/articulos/${ident}.md`;
        zip.file(ruta,out.contenido);out.ruta=ruta;
      } else if(!rutaSegura(out.ruta,'markdown'))throw new Error('Falta el artículo Markdown de '+out.titulo);
      if(out.imagenLocalId){
        const archivo=await leerArchivo(out.imagenLocalId);
        if(!archivo?.blob)throw new Error('Falta la imagen del enunciado de '+out.titulo);
        const extension=String(archivo.nombre).split('.').pop().toLowerCase();
        if(!['png','jpg','jpeg','webp'].includes(extension))throw new Error('Formato de imagen inválido.');
        const ruta=`examenes/enunciados/${ident}.${extension}`;
        zip.file(ruta,archivo.blob);out.enunciadoRuta=ruta;
      }
      if(out.enunciadoRuta&&!rutaSegura(out.enunciadoRuta,'imagen'))throw new Error('Ruta de imagen antigua inválida.');
      // PDF del enunciado opcional: el artículo puede contener el examen completo.
      if(out.pdfEnunciadoLocalId){
        const archivo=await leerArchivo(out.pdfEnunciadoLocalId);
        if(!archivo?.blob)throw new Error('Falta el PDF del enunciado de '+out.titulo);
        const ruta=`examenes/pdfs/${ident}-enunciado.pdf`;
        zip.file(ruta,archivo.blob);out.enunciadoPdfRuta=ruta;
      }
      if(out.enunciadoPdfRuta&&!rutaSegura(out.enunciadoPdfRuta,'pdf'))throw new Error('Ruta del PDF del enunciado inválida.');
      out.solucionPdfRuta=null;
    } else if(out.formato==='pdf'){
      for(const [campoLocal,campoRuta,sufijo] of [
        ['pdfEnunciadoLocalId','enunciadoPdfRuta','enunciado'],
        ['pdfSolucionLocalId','solucionPdfRuta','solucion']]){
        if(out[campoLocal]){
          const archivo=await leerArchivo(out[campoLocal]);
          if(!archivo?.blob)throw new Error('Falta el PDF '+sufijo+' de '+out.titulo);
          const ruta=`examenes/pdfs/${ident}-${sufijo}.pdf`;
          zip.file(ruta,archivo.blob);out[campoRuta]=ruta;
        }
        if(out[campoRuta]&&!rutaSegura(out[campoRuta],'pdf'))throw new Error('Ruta PDF inválida.');
      }
      if(!out.enunciadoPdfRuta&&!out.solucionPdfRuta)throw new Error('Falta un PDF en '+out.titulo);
      out.ruta=null;out.enunciadoRuta=null;
    } else throw new Error('Formato de examen no admitido.');
    delete out.contenido;delete out.imagenLocalId;
    delete out.pdfEnunciadoLocalId;delete out.pdfSolucionLocalId;
    return out;
  }
  global.MC325ExamenesDatos={CLAVE,BASE,clone,publicados,local,combinar,guardar,eliminar,limpiar,
    existeConflicto,guardarArchivo,leerArchivo,id,rutaSegura,markdown,empaquetar};
})(window);
