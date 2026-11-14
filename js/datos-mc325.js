/* MC325 — Fuente publicada en GitHub + borradores en el navegador.
 * Cuando llegue Firebase, solo hay que sustituir este adaptador de datos.
 * NUNCA guarda automáticamente los borradores en GitHub.
 */
(function (global) {
  'use strict';
  const URLS = Object.freeze({
    eventos: 'data/eventos.json',
    articulos: 'data/articulos.json',
    documentos: 'data/documentos.json',
    unidades: 'data/unidades.json'
  });
  const KEYS = Object.freeze({
    eventos: 'mc325_borrador_eventos_v1',
    articulos: 'mc325_borrador_articulos_v1',
    documentos: 'mc325_borrador_documentos_v1',
    unidades: 'mc325_borrador_unidades_v1'
  });
  const bases = {};
  // No compartir referencias de objetos entre el estado publicado y el editor.
  // De lo contrario, renombrar una unidad/artículo alteraría la base en memoria
  // y podría hacer que el cambio pareciera idéntico al contenido publicado.
  const clonar = (items) => items.map(item => ({...item}));
  const props = {
    eventos: ['id','start','end','allDay','title','tipo','horaLimite','desc'],
    articulos: ['id','unidad','titulo','orden'],
    documentos: ['id','ubicacion','titulo','descripcion','nombreArchivo','tamano','fechaRegistro','revisionArchivo','tipo','orden'],
    unidades: ['id','nombre']
  };
  function hashTexto(texto) {
    let h=2166136261;
    for (let i=0;i<texto.length;i++) {h^=texto.charCodeAt(i);h=Math.imul(h,16777619);}
    return (h>>>0).toString(16);
  }
  function firma(items) {
    const texto = JSON.stringify(items);
    let h = 2166136261;
    for (let i = 0; i < texto.length; i++) {
      h ^= texto.charCodeAt(i);
      h = Math.imul(h,16777619);
    }
    return (h >>> 0).toString(16);
  }
  function compararContenido(tipo, a, b) {
    if (a.length !== b.length) return false;
    const ordenado=(lista)=>{
      const elementos=lista.map(x=>{
        const valores=props[tipo].map(k=>Object.prototype.hasOwnProperty.call(x,k)?x[k]:null);
        // No comparamos rutas: son asignadas por GitHub al publicar nuevos archivos.
        // Una revisión calculada del Markdown sí detecta ediciones del contenido.
        if(tipo==='articulos') valores.push(x.revision || (typeof x.contenido==='string' ? hashTexto(x.contenido) : null));
        return valores;
      });
      // El orden de las unidades se conserva: mover una unidad ES un cambio.
      if(tipo!=='unidades') elementos.sort((x,y)=>String(x[0]).localeCompare(String(y[0])));
      return elementos;
    };
    return JSON.stringify(ordenado(a))===JSON.stringify(ordenado(b));
  }
  async function publicado(tipo) {
    if (!URLS[tipo]) throw new Error('Tipo de datos desconocido: '+tipo);
    const respuesta = await fetch(URLS[tipo], { cache: 'no-store' });
    if (!respuesta.ok) throw new Error('No se pudo cargar '+URLS[tipo]+' (HTTP '+respuesta.status+').');
    const items = await respuesta.json();
    if (!Array.isArray(items)) throw new Error(URLS[tipo]+' debe contener una lista JSON.');
    bases[tipo] = items;
    return items;
  }
  async function leer(tipo) {
    const base = await publicado(tipo);
    let borrador;
    try { borrador = JSON.parse(localStorage.getItem(KEYS[tipo]) || 'null'); }
    catch (e) { throw new Error('El borrador local de '+tipo+' es inválido; conserva una copia antes de borrarlo.'); }
    if (!borrador) return { items: clonar(base), publicado: base, esBorrador: false };
    if (!Array.isArray(borrador.items)) throw new Error('El borrador local de '+tipo+' no contiene una lista válida.');
    if (borrador.base === firma(base)) {
      if (compararContenido(tipo,base,borrador.items)) {
        localStorage.removeItem(KEYS[tipo]);
        return {items:clonar(base), publicado:base, esBorrador:false};
      }
      return {items:clonar(borrador.items), publicado:base, esBorrador:true};
    }
    // Después de hacer commit/push, lo publicado puede coincidir con el
    // borrador anterior aunque hayan cambiado las rutas de artículos/PDF.
    if (compararContenido(tipo,base,borrador.items)) {
      localStorage.removeItem(KEYS[tipo]);
      return {items:clonar(base), publicado:base, esBorrador:false};
    }
    // Nunca pisar un borrador viejo ni el trabajo de otro compañero.
    throw new Error('Los '+tipo+' de GitHub cambiaron desde que se creó el borrador. '+
      'El borrador sigue intacto en este navegador. Respalda/reconcilia los datos antes de editar o publicar.');
  }
  function guardar(tipo,items) {
    if (!bases[tipo]) throw new Error('Primero debes cargar los '+tipo+' publicados.');
    if (!Array.isArray(items)) throw new Error('Los datos deben ser una lista.');
    if (compararContenido(tipo,bases[tipo],items)) {
      localStorage.removeItem(KEYS[tipo]);
    } else {
      localStorage.setItem(KEYS[tipo],JSON.stringify({base:firma(bases[tipo]),items,fecha:new Date().toISOString()}));
    }
    global.dispatchEvent(new CustomEvent('mc325-datos-actualizados',{detail:{tipo}}));
  }
  function estado(tipo) {
    return Boolean(localStorage.getItem(KEYS[tipo]));
  }
  global.MC325Datos = Object.freeze({ leer, publicado, guardar, estado, URLS, KEYS });
})(window);
