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
  global.MC325EjerciciosDatos = { CLAVE, RUTA_DATOS, RUTA_UNIDADES,
    clonar, obtenerLocales, guardarLocales, combinar, obtenerPublicados, obtenerUnidades,
    guardarCambio, eliminarCambio, limpiarBorradores, ponerArchivo, leerArchivo, obtenerMarkdown, crearID };
})(window);
