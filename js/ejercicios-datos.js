/* MC325 · Repositorio provisional de ejercicios.
 * GitHub Pages sirve los datos publicados; los cambios locales son borradores.
 * Sustituible en el futuro por Firestore sin rehacer la interfaz.
 */
(function (global) {
  'use strict';
  const CLAVE = 'mc325_ejercicios_borradores_v1';
  const DB_NOMBRE = 'mc325_ejercicios_archivos_v1';
  const STORE = 'archivos';
  const RUTA_DATOS = 'data/ejercicios.json';
  const RUTA_UNIDADES = 'data/unidades.json';

  function clonar(valor) { return JSON.parse(JSON.stringify(valor)); }
  function obtenerLocales() {
    try {
      const raw = JSON.parse(localStorage.getItem(CLAVE) || '{}');
      return {
        cambios: raw && typeof raw.cambios === 'object' && !Array.isArray(raw.cambios) ? raw.cambios : {},
        eliminados: Array.isArray(raw.eliminados) ? raw.eliminados : [],
        base: typeof raw.base === 'string' ? raw.base : null
      };
    } catch (err) {
      console.warn('No se pudieron leer los borradores:', err);
      return { cambios: {}, eliminados: [], base: null };
    }
  }
  function guardarLocales(estado) { localStorage.setItem(CLAVE, JSON.stringify(estado)); }
  function iniciarCambios(publicados) {
    const local = obtenerLocales();
    if (!local.base) local.base = JSON.stringify(publicados);
    return local;
  }
  function combinar(publicados, local = obtenerLocales()) {
    const mapa = new Map();
    (publicados || []).forEach(e => { if (e && e.id) mapa.set(String(e.id), clonar(e)); });
    for (const [id, e] of Object.entries(local.cambios)) if (e && typeof e === 'object') mapa.set(id, clonar(e));
    (local.eliminados || []).forEach(id => mapa.delete(String(id)));
    return [...mapa.values()];
  }
  async function pedirJSON(ruta, fallback) {
    const response = await fetch(ruta, { cache: 'no-store' });
    if (!response.ok) {
      if (response.status === 404 && fallback !== undefined) return fallback;
      throw new Error(`No se pudo abrir ${ruta}: HTTP ${response.status}`);
    }
    const json = await response.json();
    if (!Array.isArray(json)) throw new Error(`Formato incorrecto en ${ruta}: debe ser un arreglo JSON.`);
    return json;
  }
  async function obtenerPublicados() { return pedirJSON(RUTA_DATOS, []); }
  async function obtenerUnidades() {
    const u = await pedirJSON(RUTA_UNIDADES);
    return u.filter(x => x && x.id && x.nombre && x.id !== 'silabo').map(x => ({id:String(x.id),nombre:String(x.nombre)}));
  }
  function guardarCambio(ejercicio, publicados) {
    const local = iniciarCambios(publicados);
    local.cambios[String(ejercicio.id)] = clonar(ejercicio);
    local.eliminados = local.eliminados.filter(id => String(id) !== String(ejercicio.id));
    guardarLocales(local);
  }
  function eliminarCambio(id, publicados) {
    const local = iniciarCambios(publicados);
    delete local.cambios[String(id)];
    if (publicados.some(x => String(x.id) === String(id))) {
      if (!local.eliminados.includes(String(id))) local.eliminados.push(String(id));
    }
    guardarLocales(local);
  }
  function limpiarBorradores() { localStorage.removeItem(CLAVE); }
  function abrirBD() {
    return new Promise((res, rej) => {
      if (!('indexedDB' in global)) return rej(new Error('Este navegador no admite IndexedDB.'));
      const solicitud = indexedDB.open(DB_NOMBRE, 1);
      solicitud.onupgradeneeded = () => { if (!solicitud.result.objectStoreNames.contains(STORE)) solicitud.result.createObjectStore(STORE); };
      solicitud.onsuccess = () => res(solicitud.result);
      solicitud.onerror = () => rej(solicitud.error || new Error('Error al abrir IndexedDB'));
    });
  }
  async function ponerArchivo(id, archivo) {
    const db = await abrirBD();
    return new Promise((res, rej) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put({ blob: archivo, nombre: archivo.name || 'archivo', tipo: archivo.type || 'application/octet-stream' }, String(id));
      tx.oncomplete = () => { db.close(); res(); };
      tx.onerror = () => { db.close(); rej(tx.error || new Error('Error al almacenar el archivo')); };
    });
  }
  async function leerArchivo(id) {
    const db = await abrirBD();
    return new Promise((res, rej) => {
      const tx = db.transaction(STORE, 'readonly');
      const q = tx.objectStore(STORE).get(String(id));
      q.onsuccess = () => { db.close(); res(q.result || null); };
      q.onerror = () => { db.close(); rej(q.error || new Error('Error al leer el archivo')); };
    });
  }
  async function obtenerMarkdown(ejercicio) {
    if (typeof ejercicio.contenido === 'string') return ejercicio.contenido;
    if (!ejercicio.ruta) throw new Error('Este ejercicio no tiene archivo Markdown.');
    const resp = await fetch(ejercicio.ruta, { cache: 'no-store' });
    if (!resp.ok) throw new Error(`No se pudo abrir ${ejercicio.ruta}: HTTP ${resp.status}`);
    return resp.text();
  }
  function crearID() {
    if (global.crypto && crypto.randomUUID) return crypto.randomUUID();
    return `ej-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
  }
  // El navegador conserva los borradores después de descargar un ZIP.
  // Cuando su contenido YA aparece en el repositorio, se debe reconciliar
  // automáticamente la base, sin borrar ningún aporte aún no publicado.
  const CLAVE_EXPORTACIONES = 'mc325_ejercicios_exportaciones_v2';
  const camposComparables = ['id','origen','unidad','titulo','descripcion','autor','formato','fecha'];
  const normalizar = v => {
    if (Array.isArray(v)) return v.map(normalizar);
    if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalizar(v[k])]));
    return v;
  };
  const iguales = (a,b) => JSON.stringify(normalizar(a)) === JSON.stringify(normalizar(b));
  const indice = items => new Map((items || []).filter(x=>x && x.id != null).map(x=>[String(x.id),x]));
  const rutaLocalSegura = ruta => typeof ruta === 'string' &&
    /^ejercicios\/(articulos|pdfs|enunciados)\/[a-zA-Z0-9_.-]+\.(md|pdf|png|jpg|jpeg|webp)$/i.test(ruta);
  function cargarExportaciones() {
    try {
      const dato = JSON.parse(localStorage.getItem(CLAVE_EXPORTACIONES) || '{}');
      return dato && typeof dato === 'object' && !Array.isArray(dato) ? dato : {};
    } catch (_) {return {};}
  }
  async function hashBytes(datos) {
    const bytes = datos instanceof ArrayBuffer ? datos : await new Blob([datos]).arrayBuffer();
    if (global.crypto?.subtle) {
      const digest=await global.crypto.subtle.digest('SHA-256',bytes);
      return 'sha256:'+Array.from(new Uint8Array(digest),x=>x.toString(16).padStart(2,'0')).join('');
    }
    // Respaldo para navegadores sin WebCrypto (el proyecto suele abrirse en localhost).
    let n=2166136261;
    for(const x of new Uint8Array(bytes)){n^=x;n=Math.imul(n,16777619);}
    return 'fnv:'+String(n>>>0)+':'+bytes.byteLength;
  }
  async function hashTexto(texto) {return hashBytes(new TextEncoder().encode(texto));}
  async function coincideArchivo(ruta, hashEsperado) {
    if(!rutaLocalSegura(ruta) || !hashEsperado) return false;
    try {
      const r=await fetch(ruta,{cache:'no-store'});
      return r.ok && await hashBytes(await r.arrayBuffer()) === hashEsperado;
    } catch (_) {return false;}
  }
  async function coincideBorradorPublicado(borrador, publicado) {
    if (!borrador || !publicado) return false;
    if (!camposComparables.every(k=>String(borrador[k]??'')===String(publicado[k]??''))) return false;
    if (!rutaLocalSegura(publicado.ruta)) return false;
    if (borrador.formato==='web') {
      if(typeof borrador.contenido === 'string') {
        if(!await coincideArchivo(publicado.ruta,await hashTexto(borrador.contenido)))return false;
      } else if(borrador.ruta!==publicado.ruta)return false;
      if(borrador.enunciadoLocalId) {
        try {
          const adjunto=await leerArchivo(borrador.enunciadoLocalId);
          if(!adjunto?.blob || !await coincideArchivo(publicado.enunciadoRuta,await hashBytes(await adjunto.blob.arrayBuffer())))return false;
        } catch (_) {return false;}
      } else if ((borrador.enunciadoRuta||null)!==(publicado.enunciadoRuta||null)) return false;
    } else if(borrador.formato==='pdf') {
      if(borrador.archivoLocalId) {
        try {
          const adjunto=await leerArchivo(borrador.archivoLocalId);
          if(!adjunto?.blob || !await coincideArchivo(publicado.ruta,await hashBytes(await adjunto.blob.arrayBuffer())))return false;
        } catch (_) {return false;}
      } else if(borrador.ruta!==publicado.ruta) return false;
    }
    return true;
  }
  // Recordar QUÉ versión incluía el último ZIP. Solo se usará cuando el
  // archivo correspondiente aparezca en data/ejercicios.json. Descargar
  // el ZIP, por sí solo, no confirma publicación ni elimina borradores.
  function registrarExportacion(instantanea) {
    const previas=cargarExportaciones();
    for(const [id, entrada] of Object.entries(instantanea?.cambios||{})) {
      const lista=Array.isArray(previas[id])?previas[id]:[];
      previas[id]=[entrada,...lista].slice(0,4);
    }
    for(const id of instantanea?.eliminados||[]) {
      const lista=Array.isArray(previas[String(id)])?previas[String(id)]:[];
      previas[String(id)]=[{eliminado:true},...lista].slice(0,4);
    }
    localStorage.setItem(CLAVE_EXPORTACIONES,JSON.stringify(previas));
  }
  async function coincideInstantanea(instantanea, publicado) {
    if(!instantanea || instantanea.eliminado)return !publicado && !!instantanea?.eliminado;
    if(!publicado || !iguales(instantanea.registro,publicado)) return false;
    if(instantanea.hashContenido && !await coincideArchivo(publicado.ruta,instantanea.hashContenido))return false;
    if(instantanea.hashArchivo && !await coincideArchivo(publicado.ruta,instantanea.hashArchivo))return false;
    if(instantanea.hashImagen && !await coincideArchivo(publicado.enunciadoRuta,instantanea.hashImagen))return false;
    return true;
  }
  async function reconciliarPublicados(publicados) {
    const local=obtenerLocales();
    const cambios=local.cambios||{};
    const eliminados=local.eliminados||[];
    const ids=[...new Set([...Object.keys(cambios),...eliminados.map(String)])];
    if(!ids.length) {
      // Cuando no hay borradores se puede refrescar sin perder trabajo.
      if (local.base!==JSON.stringify(publicados)) {
        local.base=JSON.stringify(publicados);
        guardarLocales(local);
      }
      return {local,conflictos:[],confirmados:0};
    }
    let base=null;
    try {const parseado=JSON.parse(local.base||'null');if(Array.isArray(parseado))base=parseado;} catch(_) { /* sin base fiable */ }
    const viejos=indice(base), actuales=indice(publicados),historial=cargarExportaciones();
    const conflictos=[];
    const confirmados=[];
    for(const id of ids) {
      const antes=viejos.get(id), ahora=actuales.get(id), editado=Object.prototype.hasOwnProperty.call(cambios,id);
      const nombre=cambios[id]?.titulo||ahora?.titulo||antes?.titulo||id;
      const exportaciones=Array.isArray(historial[id])?historial[id]:[];
      const reconocido=editado
        ? await coincideBorradorPublicado(cambios[id],ahora)
        : !ahora;
      if(reconocido) {confirmados.push(id);continue;}
      let publicadoPorMi=false;
      for(const exp of exportaciones) {
        if(await coincideInstantanea(exp,ahora)) {publicadoPorMi=true;break;}
      }
      // Si el ejercicio de referencia no cambió, se puede seguir trabajando.
      // Si cambió, admitirlo únicamente cuando coincide con un ZIP exportado
      // desde ESTE navegador, sin ocultar ediciones ajenas al mismo ID.
      if(!iguales(antes,ahora) && !publicadoPorMi)
        conflictos.push('«'+nombre+'» (modificado o incorporado desde otra versión)');
    }
    for(const id of confirmados) {
      delete cambios[id];
      local.eliminados=local.eliminados.filter(x=>String(x)!==id);
      delete historial[id];
    }
    // Con las operaciones restantes reconciliadas, refrescar la base.
    // Si existe conflicto real, mantener la base original para protección.
    if(!conflictos.length)local.base=JSON.stringify(publicados);
    if(confirmados.length || !conflictos.length)guardarLocales(local);
    if(confirmados.length)localStorage.setItem(CLAVE_EXPORTACIONES,JSON.stringify(historial));
    return {local,conflictos,confirmados:confirmados.length};
  }
  global.MC325EjerciciosDatos = { CLAVE, RUTA_DATOS, RUTA_UNIDADES,
    clonar, obtenerLocales, guardarLocales, combinar, obtenerPublicados, obtenerUnidades,
    guardarCambio, eliminarCambio, limpiarBorradores, ponerArchivo, leerArchivo, obtenerMarkdown, crearID,
    reconciliarPublicados, registrarExportacion, hashTexto, hashBytes };
})(window);
