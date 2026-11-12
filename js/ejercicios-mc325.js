/* MC325 · Interfaz de Ejercicios Resueltos
   Las operaciones de escritura son SOLO locales hasta disponer de Firebase.
   El botón Modo Docente NO constituye autorización de servidor.
 */
(function () {
  'use strict';
  const D = window.MC325EjerciciosDatos;
  const $ = id => document.getElementById(id);
  const NIVELES = {basico:'Básico',intermedio:'Intermedio',avanzado:'Avanzado'};
  const estado = {
    publicados: [], unidades: [], ejercicios: [], admin: false,
    editorRol: null, editandoId: null, seleccionadoId: null,
    modalUrl: null, modalReturnFocus: null, bodyOverflow: null
  };
  const escapar = (v) => String(v ?? '').replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalizar = texto => String(texto ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').replace(/\s+/g,' ').trim();
  const rutaImagenValida = ruta => typeof ruta === 'string' && /^ejercicios\/enunciados\/[a-zA-Z0-9_.-]+\.(png|jpe?g|webp)$/i.test(ruta);
  const rutaPdfValida = ruta => typeof ruta === 'string' && /^ejercicios\/pdfs\/[a-zA-Z0-9_.-]+\.pdf$/i.test(ruta);
  const tieneEnunciado = e => e.formato === 'web' && Boolean(e.enunciadoLocalId || rutaImagenValida(e.enunciadoRuta));
  function setEstado(t, error=false) { $('ex-estado').textContent = t; $('ex-estado').classList.toggle('ex-error',error); }
  function nombreUnidad(id) { const idx=estado.unidades.findIndex(u=>u.id === id); return idx<0?'Unidad sin clasificar':`Unidad ${idx+1}: ${estado.unidades[idx].nombre}`; }
  function formatoFecha(valor) { if(!valor) return 'Fecha no indicada'; const fecha=new Date(valor); return Number.isNaN(fecha.getTime())?'Fecha no indicada':fecha.toLocaleDateString('es-PE',{day:'2-digit',month:'short',year:'numeric'}); }
  function cambiarVista(vista) {
    $('ex-lista').hidden=vista!=='lista'; $('ex-lector').hidden=vista!=='lector';
    if (vista!=='lector') estado.seleccionadoId=null;
    document.querySelector('.content-area').scrollTo?.({top:0,behavior:'smooth'});
  }
  function actualizar() { estado.ejercicios=D.combinar(estado.publicados); renderizar(); }
  function crearCard(e) {
    const esWeb=e.formato==='web';
    const icono=esWeb?'fa-book-open':'fa-file-pdf';
    const etiqueta=esWeb?'WEB':'PDF';
    const clase=esWeb?'web':'pdf';
    const titulo=escapar(e.titulo);
    const detalles=escapar(e.descripcion || (esWeb?'Solución paso a paso en Markdown + LaTeX':'Documento PDF con enunciado y solución'));
    return `<article class="ex-card" data-ejercicio="${escapar(e.id)}">
      <div class="ex-fileicon ex-format-${clase}"><i class="fa-solid ${icono}" aria-hidden="true"></i><span>${etiqueta}</span></div>
      <div class="ex-card-body">
        <div class="ex-tags"><span class="ex-tag ${e.origen==='clase'?'ex-tag-clase':'ex-tag-aporte'}">${e.origen==='clase'?'Hecho en clase':'Aporte estudiantil'}</span><span class="ex-tag ex-tag-level">${NIVELES[e.dificultad]||'Sin nivel'}</span></div>
        <h4 class="ex-card-title" data-accion="leer" data-id="${escapar(e.id)}" role="button" tabindex="0">${titulo}</h4>
        <p class="ex-card-desc">${detalles}</p>
        <div class="ex-meta">${escapar(e.autor||'Sin autor')} · ${formatoFecha(e.fecha)}</div>
      </div>
      <div class="ex-card-actions">
        ${estado.admin?`<button class="ex-btn ex-btn-subtle ex-btn-mini" type="button" data-accion="editar" data-id="${escapar(e.id)}" title="Editar ejercicio"><i class="fa-solid fa-pen"></i> Editar</button><button class="ex-btn ex-btn-danger ex-btn-mini" type="button" data-accion="borrar" data-id="${escapar(e.id)}" title="Eliminar ejercicio"><i class="fa-solid fa-trash"></i></button>`:''}
        ${esWeb?`<button class="ex-btn ex-btn-mini ex-btn-preview" type="button" data-accion="enunciado" data-id="${escapar(e.id)}" ${tieneEnunciado(e)?'':'disabled title="Este ejercicio no tiene imagen del enunciado"'}><i class="fa-regular fa-image" aria-hidden="true"></i> Enunciado</button>`:''}
        <button class="ex-btn ex-btn-mini" type="button" data-accion="leer" data-id="${escapar(e.id)}">${esWeb?'Leer solución':'Ver PDF'}</button>
      </div>
    </article>`;
  }
  function listarGrupo(origen, contenedor) {
    const terminos=normalizar($('ex-buscar').value).split(' ').filter(Boolean);
    const unidad=$('ex-filtro-unidad').value;
    const dificultad=$('ex-filtro-dificultad').value;
    const orden=$('ex-orden').value;
    const arr=estado.ejercicios.filter(e=>e.origen===origen && (unidad==='todas'||e.unidad===unidad) && (dificultad==='todas'||e.dificultad===dificultad) && terminos.every(t => normalizar(`${e.titulo} ${e.descripcion||''} ${e.autor||''} ${nombreUnidad(e.unidad)} ${NIVELES[e.dificultad]||''}`).includes(t)));
    arr.sort((a,b)=>orden==='titulo'?String(a.titulo).localeCompare(String(b.titulo),'es'):orden==='antiguos'?Date.parse(a.fecha||0)-Date.parse(b.fecha||0):Date.parse(b.fecha||0)-Date.parse(a.fecha||0));
    $(origen==='clase'?'ex-count-clase':'ex-count-estudiantes').textContent=`${arr.length} ${arr.length===1?'ejercicio':'ejercicios'}`;
    if (!arr.length) {
      contenedor.innerHTML=`<p class="ex-empty">${origen==='clase'?'No hay ejercicios de clase que coincidan con los filtros.':'Todavía no hay aportes de estudiantes que coincidan con los filtros.'}</p>`;
      return;
    }
    const ids=[...new Set(arr.map(e=>e.unidad))].sort((a,b)=>estado.unidades.findIndex(u=>u.id===a)-estado.unidades.findIndex(u=>u.id===b));
    contenedor.innerHTML=ids.map(id=>`<div class="ex-unit-head">${escapar(nombreUnidad(id))}</div>${arr.filter(e=>e.unidad===id).map(crearCard).join('')}`).join('');
  }
  function renderizar() {
    $('ex-stat-total').textContent=estado.ejercicios.length;
    $('ex-stat-clase').textContent=estado.ejercicios.filter(e=>e.origen==='clase').length;
    $('ex-stat-estudiantes').textContent=estado.ejercicios.filter(e=>e.origen==='estudiante').length;
    listarGrupo('clase',$('ex-lista-clase'));
    listarGrupo('estudiante',$('ex-lista-estudiantes'));
    const visibles = [...document.querySelectorAll('#ex-lista-clase .ex-card, #ex-lista-estudiantes .ex-card')].length;
    const filtrando = Boolean($('ex-buscar').value.trim() || $('ex-filtro-unidad').value !== 'todas' || $('ex-filtro-dificultad').value !== 'todas');
    $('ex-resultados').textContent = filtrando
      ? visibles ? `Mostrando ${visibles} de ${estado.ejercicios.length} ejercicios.` : 'No hay ejercicios que coincidan con la búsqueda o los filtros.'
      : '';
  }
  function rellenarUnidades() {
    const filtro=$('ex-filtro-unidad').value, editor=$('ex-unidad').value;
    $('ex-filtro-unidad').innerHTML='<option value="todas">Todas las unidades</option>';
    $('ex-unidad').innerHTML='';
    estado.unidades.forEach((u,i)=>{
      const f=document.createElement('option'); f.value=u.id;f.textContent=`Unidad ${i+1}: ${u.nombre}`;
      $('ex-filtro-unidad').appendChild(f);$('ex-unidad').appendChild(f.cloneNode(true));
    });
    $('ex-filtro-unidad').value=estado.unidades.some(u=>u.id===filtro)?filtro:'todas';
    if (estado.unidades.some(u=>u.id===editor)) $('ex-unidad').value=editor;
  }
  function alternarAdmin() {
    estado.admin=!estado.admin;
    $('ex-admin').hidden=!estado.admin;
    $('ex-btn-docente').innerHTML=estado.admin?'<i class="fa-solid fa-lock-open"></i> Cerrar Modo Docente':'<i class="fa-solid fa-lock"></i> Modo Docente';
    if (!estado.admin && estado.editorRol==='clase') cerrarEditor();
    if (!estado.admin && estado.editandoId!==null) cerrarEditor();
    renderizar();
  }
  function alternarFormato() {
    const web=$('ex-formato').value==='web';
    $('ex-campo-web').hidden=!web; $('ex-campo-enunciado').hidden=!web; $('ex-campo-pdf').hidden=web;
    $('ex-contenido').required=web;$('ex-archivo').required=false;
  }
  function cerrarEditor() {
    $('ex-editor').hidden=true; estado.editorRol=null; estado.editandoId=null;
    $('ex-form').reset(); $('ex-imagen-actual').hidden=true;
    $('ex-quitar-imagen-contenedor').hidden=true; alternarFormato();
  }
  function abrirEditor(rol='estudiante') {
    if (rol==='clase'&&!estado.admin) return;
    estado.editorRol=rol;estado.editandoId=null;
    $('ex-form').reset();
    $('ex-imagen-actual').hidden=true; $('ex-quitar-imagen-contenedor').hidden=true;
    $('ex-editor').hidden=false;
    $('ex-editor-titulo').textContent=rol==='clase'?'Agregar ejercicio hecho en clase':'Publicar ejercicio resuelto';
    $('ex-guardar').innerHTML='<i class="fa-solid fa-floppy-disk"></i> Guardar ejercicio (borrador)';
    $('ex-autor').value=rol==='clase'?'Docente':'';
    $('ex-pdf-actual').textContent='PDF de hasta 25 MB que contenga el enunciado y la solución.';
    if (estado.unidades.length) $('ex-unidad').value=estado.unidades[0].id;
    alternarFormato();$('ex-editor').scrollIntoView({behavior:'smooth',block:'start'});
    $('ex-titulo').focus({preventScroll:true});
  }
  async function editar(id) {
    if (!estado.admin) return;
    const e=estado.ejercicios.find(x=>String(x.id)===String(id));if(!e)return;
    abrirEditor(e.origen);
    estado.editandoId=e.id;
    $('ex-editor-titulo').textContent=`Editar ejercicio: ${e.titulo}`;
    $('ex-guardar').innerHTML='<i class="fa-solid fa-floppy-disk"></i> Guardar cambios (borrador)';
    $('ex-titulo').value=e.titulo||'';
    $('ex-unidad').value=e.unidad;
    $('ex-autor').value=e.autor||'';
    $('ex-descripcion').value=e.descripcion||'';
    $('ex-dificultad').value=NIVELES[e.dificultad]?e.dificultad:'intermedio';
    $('ex-formato').value=e.formato==='pdf'?'pdf':'web';
    alternarFormato();
    $('ex-pdf-actual').textContent=`${e.formato==='pdf'?'Se conserva el PDF actual si no seleccionas uno nuevo.':'Selecciona un PDF para sustituir la versión web.'} Máx. 25 MB.`;
    if(e.formato==='web') {
      if(tieneEnunciado(e)) {
        $('ex-imagen-actual').hidden=false;
        $('ex-imagen-actual').textContent='Este ejercicio ya tiene imagen del enunciado. Si no seleccionas otra, se conservará la existente.';
        $('ex-quitar-imagen-contenedor').hidden=false;
      }
      $('ex-contenido').value='Cargando artículo...';
      try { $('ex-contenido').value=await D.obtenerMarkdown(e); }
      catch(err) { $('ex-contenido').value='';alert('No se pudo abrir el Markdown existente: '+err.message); }
    }
    $('ex-editor').scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function guardar(e) {
    e.preventDefault();
    if (!estado.unidades.length) return alert('No se pueden guardar ejercicios sin unidades configuradas.');
    const id=estado.editandoId||D.crearID();
    const anterior=estado.ejercicios.find(x=>String(x.id)===String(id));
    if(estado.editandoId&&!estado.admin)return;
    if(estado.editorRol==='clase'&&!estado.admin)return;
    const formato=$('ex-formato').value;
    const titulo=$('ex-titulo').value.trim();const autor=$('ex-autor').value.trim();
    const contenido=$('ex-contenido').value.trim(); const archivo=$('ex-archivo').files[0];
    const imagen=$('ex-imagen-enunciado').files[0];
    if(formato==='web' && imagen && (
      imagen.size>8*1024*1024 || !/\.(jpg|jpeg|png|webp)$/i.test(imagen.name) ||
      !['image/jpeg','image/png','image/webp'].includes(imagen.type)
    )) return alert('La imagen del enunciado debe ser JPG, PNG o WebP y no superar 8 MB.');
    if (!titulo||!autor) return alert('Completa el título y el autor.');
    if(formato==='web'&&!contenido) return alert('Escribe el enunciado y el desarrollo en Markdown + LaTeX.');
    if(formato==='pdf') {
      if (!archivo && !(anterior&&anterior.formato==='pdf'&&(anterior.ruta||anterior.archivoLocalId))) return alert('Selecciona un archivo PDF.');
      if(archivo && (archivo.size>25*1024*1024 || (!/\.pdf$/i.test(archivo.name) && archivo.type!=='application/pdf'))) return alert('Solo se admiten archivos PDF de hasta 25 MB.');
    }
    const registro = {
      id, origen: anterior?anterior.origen:estado.editorRol==='clase'?'clase':'estudiante',
      unidad:$('ex-unidad').value, titulo, descripcion:$('ex-descripcion').value.trim(),
      autor, dificultad:$('ex-dificultad').value, formato,
      fecha:anterior?.fecha || new Date().toISOString(),
      ruta:anterior?.ruta||null,
      archivoLocalId: formato==='pdf'?(anterior?.formato==='pdf'?anterior.archivoLocalId||null:null):null,
      enunciadoRuta: formato==='web' && anterior?.formato==='web' ? anterior.enunciadoRuta||null : null,
      enunciadoLocalId: formato==='web' && anterior?.formato==='web' ? anterior.enunciadoLocalId||null : null
    };
    if(formato==='web') {
      registro.contenido=contenido;
      if(imagen) {
        const imagenId=`enunciado-${id}`;
        try { await D.ponerArchivo(imagenId,imagen); registro.enunciadoLocalId=imagenId; }
        catch(err) { return alert('No se pudo guardar la imagen del enunciado: '+err.message); }
      } else if($('ex-quitar-imagen').checked) {
        registro.enunciadoRuta=null; registro.enunciadoLocalId=null;
      }
    }
    if(formato==='pdf'&&archivo){
      const archivoId=`ejercicio-${id}`;
      try { await D.ponerArchivo(archivoId,archivo);registro.archivoLocalId=archivoId; }
      catch(err){ return alert('No se pudo almacenar el PDF en este navegador: '+err.message); }
    }
    try {D.guardarCambio(registro,estado.publicados);} catch(err){return alert('No se pudo guardar el ejercicio: '+err.message);}
    actualizar();cerrarEditor();setEstado('Ejercicio guardado localmente. Para hacerlo público es necesario exportarlo y subir los archivos a GitHub.');
    cambiarVista('lista');
  }
  function borrar(id) {
    if (!estado.admin) return;
    const e=estado.ejercicios.find(x=>String(x.id)===String(id));
    if(!e || !confirm(`¿Retirar el ejercicio «${e.titulo}»? Se preparará su eliminación al exportar a GitHub.`))return;
    D.eliminarCambio(id,estado.publicados); actualizar();setEstado('El ejercicio se ha retirado del borrador local. Para retirar su versión pública, exporta los cambios.');
  }
  function renderMarkdownSegura(md, contenedor) {
    contenedor.replaceChildren();
    if(!window.marked || !window.DOMPurify) {const pre=document.createElement('pre');pre.textContent=md;contenedor.appendChild(pre);return;}
    const bloques=[];const lineas=[];
    let preparado=String(md).replace(/\$\$([\s\S]+?)\$\$/g,(_match,tex)=>{
      const i=bloques.push(tex)-1;return `\n\n<div class="ex-mathblock" data-ex-math="${i}"></div>\n\n`;
    });
    preparado=preparado.replace(/\$((?:\\.|[^$\n])+?)\$/g,(_match,tex)=>`EXINLINEFORMULA${lineas.push(tex)-1}FIN`);
    const html=window.marked.parse(preparado);
    contenedor.innerHTML=window.DOMPurify.sanitize(html,{USE_PROFILES:{html:true},FORBID_TAGS:['style','script','iframe','object','embed'],FORBID_ATTR:['style']});
    contenedor.querySelectorAll('[data-ex-math]').forEach(el=>{
      const idx=Number(el.dataset.exMath);if(Number.isInteger(idx)&&idx>=0&&idx<bloques.length)el.textContent=`$$${bloques[idx]}$$`;
    });
    const walk=document.createTreeWalker(contenedor,NodeFilter.SHOW_TEXT);const nodos=[];
    while(walk.nextNode())if(walk.currentNode.nodeValue.includes('EXINLINEFORMULA'))nodos.push(walk.currentNode);
    nodos.forEach(nodo=>{nodo.nodeValue=nodo.nodeValue.replace(/EXINLINEFORMULA(\d+)FIN/g,(match,i)=>lineas[Number(i)]===undefined?match:`$${lineas[Number(i)]}$`);});
    contenedor.querySelectorAll('a').forEach(a=>{if(a.href?.startsWith('javascript:'))a.removeAttribute('href');else if(a.href){a.target='_blank';a.rel='noopener noreferrer';}});
    contenedor.querySelectorAll('img').forEach(img=>{img.loading='lazy';img.alt=img.alt||'Ilustración del ejercicio';});
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([contenedor]).catch(console.warn);
  }
  function crearIndice() {
    const nodos=[...$('ex-lector-contenido').querySelectorAll('h2, h3')];const aside=$('ex-lector-indice');
    if(!nodos.length){aside.hidden=true;return;}
    aside.hidden=false;$('ex-indice-links').replaceChildren();
    nodos.forEach((n,i)=>{n.id=`ex-seccion-${i}`;const a=document.createElement('a');a.href=`#${n.id}`;a.textContent=n.textContent;a.style.paddingLeft=n.tagName==='H3'?'15px':'5px';a.onclick=(ev)=>{ev.preventDefault();n.scrollIntoView({behavior:'smooth',block:'start'});};$('ex-indice-links').appendChild(a);});
  }
  // Visor común: el PDF nunca desplaza la página de ejercicios, se abre en una ventana.
  function cerrarModal() {
    const modal=$('ex-modal'); if(modal.hidden)return;
    modal.hidden=true;
    $('ex-modal-contenido').replaceChildren();
    if(estado.modalUrl){ URL.revokeObjectURL(estado.modalUrl); estado.modalUrl=null; }
    document.body.style.overflow=estado.bodyOverflow||'';
    if(estado.modalReturnFocus?.isConnected) estado.modalReturnFocus.focus({preventScroll:true});
    estado.modalReturnFocus=null;
  }
  function mostrarModal(titulo,contenido){
    cerrarModal();
    estado.modalReturnFocus=document.activeElement;
    estado.bodyOverflow=document.body.style.overflow;
    $('ex-modal-titulo').textContent=titulo;
    $('ex-modal-contenido').replaceChildren(contenido);
    $('ex-modal').hidden=false;
    document.body.style.overflow='hidden';
    $('ex-modal-cerrar').focus();
  }
  async function abrirPdf(e){
    try {
      let url=e.ruta;
      if(e.archivoLocalId){
        const archivo=await D.leerArchivo(e.archivoLocalId);
        if(!archivo?.blob)throw new Error('No se encontró el PDF guardado localmente.');
        url=URL.createObjectURL(archivo.blob);
      } else if(!rutaPdfValida(url)) throw new Error('La ruta del PDF no es válida.');
      if(!url)throw new Error('Este ejercicio no tiene un PDF disponible.');
      const iframe=document.createElement('iframe');
      iframe.title=`Visor PDF: ${e.titulo}`;
      iframe.src=url;
      mostrarModal(e.titulo,iframe);
      if(url.startsWith('blob:'))estado.modalUrl=url;
    } catch(err){alert('No se pudo abrir el PDF: '+err.message);}
  }
  async function abrirEnunciado(e){
    if(!tieneEnunciado(e))return;
    try {
      let url=e.enunciadoRuta;
      if(e.enunciadoLocalId){
        const img=await D.leerArchivo(e.enunciadoLocalId);
        if(!img?.blob)throw new Error('No se encontró la imagen del enunciado.');
        url=URL.createObjectURL(img.blob);
      } else if(!rutaImagenValida(url)) throw new Error('Ruta de imagen no válida.');
      const imagen=document.createElement('img');
      imagen.alt=`Enunciado completo de ${e.titulo}`;
      imagen.src=url;
      mostrarModal(`Enunciado · ${e.titulo}`,imagen);
      if(url.startsWith('blob:'))estado.modalUrl=url;
    } catch(err){alert('No se pudo abrir el enunciado: '+err.message);}
  }
  async function abrirLector(id) {
    const e=estado.ejercicios.find(x=>String(x.id)===String(id));if(!e)return;
    if(e.formato==='pdf'){await abrirPdf(e);return;}
    estado.seleccionadoId=e.id;
    cambiarVista('lector');
    $('ex-lector-titulo').textContent=e.titulo;
    $('ex-lector-meta').textContent=`${nombreUnidad(e.unidad)} · ${NIVELES[e.dificultad]||''} · ${e.origen==='clase'?'Hecho en clase':'Aporte de estudiante'} · ${e.autor||'Sin autor'} · ${formatoFecha(e.fecha)}`;
    const out=$('ex-lector-contenido');out.replaceChildren();out.textContent='Cargando ejercicio...';$('ex-lector-indice').hidden=true;
    try {renderMarkdownSegura(await D.obtenerMarkdown(e),out);crearIndice();}
    catch(err){out.textContent='No se pudo abrir el ejercicio: '+err.message;}
  }
  function delegarClick(ev) {
    const el=ev.target.closest('[data-accion]');if(!el)return;
    const {accion,id}=el.dataset;
    if(accion==='leer')abrirLector(id);
    else if(accion==='enunciado') {
      const e=estado.ejercicios.find(x=>String(x.id)===String(id));
      if(e) abrirEnunciado(e);
    }
    else if(accion==='editar')editar(id);
    else if(accion==='borrar')borrar(id);
  }
  async function iniciar(){
    $('ex-btn-docente').addEventListener('click',alternarAdmin);
    $('ex-btn-publicar').addEventListener('click',()=>abrirEditor('estudiante'));
    $('ex-btn-clase').addEventListener('click',()=>abrirEditor('clase'));
    $('ex-editor-cerrar').addEventListener('click',cerrarEditor);
    $('ex-cancelar').addEventListener('click',cerrarEditor);
    $('ex-formato').addEventListener('change',alternarFormato);
    $('ex-form').addEventListener('submit',guardar);
    $('ex-volver').addEventListener('click',()=>cambiarVista('lista'));
    $('ex-modal-cerrar').addEventListener('click',cerrarModal);
    $('ex-limpiar-busqueda').addEventListener('click',()=>{
      $('ex-buscar').value=''; renderizar(); $('ex-buscar').focus();
    });
    $('ex-lista-clase').addEventListener('click',delegarClick);
    $('ex-lista-estudiantes').addEventListener('click',delegarClick);
    document.addEventListener('keydown',ev=>{
      if(ev.key!=='Enter'||!ev.target.matches('.ex-card-title[data-accion]'))return;
      ev.preventDefault();abrirLector(ev.target.dataset.id);
    });
    ['ex-buscar','ex-filtro-unidad','ex-filtro-dificultad','ex-orden'].forEach(id=>$(id).addEventListener(id==='ex-buscar'?'input':'change',renderizar));
    try {estado.publicados=await D.obtenerPublicados();}
    catch(err){setEstado(`No se pudieron cargar los ejercicios publicados: ${err.message}. Abre la página con Live Server y verifica data/ejercicios.json.`,true);estado.publicados=[];}
    try {estado.unidades=await D.obtenerUnidades();if(!estado.unidades.length)throw new Error('No hay unidades definidas.');}
    catch(err){setEstado(`No se pudieron cargar las unidades desde data/unidades.json: ${err.message}`,true);estado.unidades=[];}
    rellenarUnidades();actualizar();
    if(estado.unidades.length)setEstado('Los materiales del repositorio están disponibles. Las nuevas aportaciones quedan como borradores locales hasta su publicación.');
  }
  document.addEventListener('DOMContentLoaded',iniciar);
})();
