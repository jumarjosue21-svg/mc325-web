/* MC325 — Preparación unificada (Ejercicios, Exámenes, Recursos y Contacto).
 * Comparte un único ZIP con Calendario/Materiales sin modificar el estado local.
 * La publicación real continúa realizándose desde GitHub Desktop.
 */
(function (global) {
  'use strict';

  const D = global.MC325EjerciciosDatos;
  const E = global.MC325ExamenesDatos;
  const R = global.MC325Recursos;
  const C = global.MC325Contacto;
  const nombres = ['ejercicios','examenes','recursos','contacto'];
  const rutaEjercicio = ruta => typeof ruta === 'string' && /^ejercicios\/(articulos|pdfs|enunciados)\/[a-zA-Z0-9_.-]+\.(md|pdf|png|jpe?g|webp)$/i.test(ruta) &&
    !ruta.split('/').some(segmento => !segmento || segmento === '..' || segmento === '.');
  const rutaImagenEjercicio = ruta => rutaEjercicio(ruta) && /^ejercicios\/enunciados\/[a-zA-Z0-9_.-]+\.(png|jpe?g|webp)$/i.test(ruta);
  const slug = valor => String(valor || 'ejercicio').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_.-]/g, '-').replace(/-{2,}/g, '-').slice(0, 95);
  const rutasExamen = item => [item.ruta, item.enunciadoRuta, item.enunciadoPdfRuta, item.solucionPdfRuta].filter(Boolean);
  const rutaExamen = ruta => E.rutaSegura(ruta, 'markdown') || E.rutaSegura(ruta, 'imagen') || E.rutaSegura(ruta, 'pdf');
  const nCambios = estado => Object.keys(estado.cambios).length + estado.eliminados.length;
  const serial = valor => JSON.stringify(valor, null, 2) + '\n';
  const conflicto = (etiqueta) => new Error('Hay cambios incompatibles en '+etiqueta+'. Actualiza el repositorio y concilia los borradores antes de generar el ZIP. No se alteró ningún borrador.');

  async function leerEstado() {
    if (!D || !E || !R || !C) throw new Error('No se cargaron los módulos de Ejercicios, Exámenes, Recursos o Contacto.');
    const [ejPublicados, exPublicados] = await Promise.all([D.obtenerPublicados(), E.publicados()]);
    const ejLocales = D.obtenerLocales();
    const exLocales = E.local();
    await Promise.all([R.ready, C.ready]);
    const recursos = R.getState();
    const contacto = C.getState();
    const cantidades = {
      ejercicios: nCambios(ejLocales),
      examenes: nCambios(exLocales),
      recursos: Number(Boolean(recursos.pending)),
      contacto: Number(Boolean(C.isPending()))
    };
    const errores = [];
    if (cantidades.ejercicios && ejLocales.base && ejLocales.base !== JSON.stringify(ejPublicados)) errores.push('Ejercicios Resueltos');
    if (cantidades.examenes && E.existeConflicto(exPublicados, exLocales)) errores.push('Exámenes Pasados');
    if (recursos.error) errores.push('Recursos: ' + recursos.error);
    if (recursos.pending && recursos.conflict) errores.push('Recursos Adicionales');
    if (contacto.error) errores.push('Contacto: '+contacto.error);
    if (cantidades.contacto && contacto.conflict) errores.push('Contacto');
    const borradoresCrudos={
      recursos:localStorage.getItem('mc325_recursos_borrador_v1'),
      contacto:localStorage.getItem('mc325_contacto_borrador_v1')
    };
    return {ejPublicados, exPublicados, ejLocales, exLocales, recursos, contacto, cantidades, errores,borradoresCrudos};
  }

  async function adjuntarEjercicios(zip, base, retirados) {
    const actual = await D.obtenerPublicados();
    if (JSON.stringify(actual) !== JSON.stringify(base.ejPublicados)) throw conflicto('Ejercicios Resueltos');
    const locales = D.obtenerLocales();
    if (JSON.stringify(locales) !== JSON.stringify(base.ejLocales)) throw new Error('Los borradores de ejercicios cambiaron mientras preparabas la publicación. Reinténtalo.');
    if (locales.base && locales.base !== JSON.stringify(actual)) throw conflicto('Ejercicios Resueltos');
    const anteriores = new Map(actual.map(e => [String(e.id), e]));
    const final = D.combinar(actual, locales);
    const propuestos = new Set();
    for (const e of final) {
      const original = anteriores.get(String(e.id));
      const modificado = Object.prototype.hasOwnProperty.call(locales.cambios, String(e.id));
      if (modificado) {
        if (e.formato === 'web') {
          if (typeof e.contenido === 'string') {
            const ruta = original?.formato === 'web' && rutaEjercicio(original.ruta) && /\.md$/i.test(original.ruta)
              ? original.ruta : `ejercicios/articulos/${slug(e.id)}.md`;
            zip.file(ruta, e.contenido); e.ruta = ruta;
          } else if (!e.ruta) throw new Error('Falta el contenido Markdown de «'+e.titulo+'».');
        } else if (e.formato === 'pdf') {
          if (e.archivoLocalId) {
            const archivo = await D.leerArchivo(e.archivoLocalId);
            if (!archivo?.blob) throw new Error('Falta el PDF local de «'+e.titulo+'».');
            const ruta = `ejercicios/pdfs/${slug(e.id)}-${slug(archivo.nombre).replace(/\.pdf$/i,'')}.pdf`;
            zip.file(ruta, archivo.blob); e.ruta = ruta;
          } else if (!e.ruta) throw new Error('Falta un PDF para «'+e.titulo+'».');
        } else throw new Error('Formato de ejercicio no admitido: '+e.formato);
      }
      if (e.formato === 'web' && modificado && e.enunciadoLocalId) {
        const archivo = await D.leerArchivo(e.enunciadoLocalId);
        if (!archivo?.blob) throw new Error('Falta la imagen del enunciado de «'+e.titulo+'».');
        const ext = (archivo.nombre || '').split('.').pop().toLowerCase();
        if (!['png','jpg','jpeg','webp'].includes(ext)) throw new Error('Formato de imagen no admitido para «'+e.titulo+'».');
        e.enunciadoRuta = `ejercicios/enunciados/${slug(e.id)}.${ext}`;
        zip.file(e.enunciadoRuta, archivo.blob);
      }
      if (e.formato !== 'web') e.enunciadoRuta = null;
      if (e.ruta && !rutaEjercicio(e.ruta)) throw new Error('Ruta del ejercicio no válida: '+e.ruta);
      if (e.enunciadoRuta && !rutaImagenEjercicio(e.enunciadoRuta)) throw new Error('Ruta de imagen no válida: '+e.enunciadoRuta);
      if (original?.ruta && original.ruta !== e.ruta && rutaEjercicio(original.ruta)) propuestos.add(original.ruta);
      if (original?.enunciadoRuta && original.enunciadoRuta !== e.enunciadoRuta && rutaImagenEjercicio(original.enunciadoRuta)) propuestos.add(original.enunciadoRuta);
      delete e.dificultad;
      delete e.contenido; delete e.archivoLocalId; delete e.enunciadoLocalId;
    }
    for (const id of locales.eliminados) {
      const viejo = anteriores.get(String(id));
      if (viejo?.ruta && rutaEjercicio(viejo.ruta)) propuestos.add(viejo.ruta);
      if (viejo?.enunciadoRuta && rutaImagenEjercicio(viejo.enunciadoRuta)) propuestos.add(viejo.enunciadoRuta);
    }
    const usados = new Set(final.flatMap(e => [e.ruta,e.enunciadoRuta]).filter(Boolean));
    for (const ruta of propuestos) if (!usados.has(ruta)) retirados.add(ruta);
    zip.file('data/ejercicios.json', serial(final));
  }

  async function adjuntarExamenes(zip, base, retirados) {
    const publicados = await E.publicados();
    if (JSON.stringify(publicados) !== JSON.stringify(base.exPublicados)) throw conflicto('Exámenes Pasados');
    const locales = E.local();
    if (JSON.stringify(locales) !== JSON.stringify(base.exLocales)) throw new Error('Los borradores de exámenes cambiaron mientras se exportaban. Reinténtalo.');
    if (E.existeConflicto(publicados, locales)) throw conflicto('Exámenes Pasados');
    const mapa = new Map(publicados.map(e => [String(e.id),e]));
    const resultado=[],propuestos=new Set();
    for (const e of E.combinar(publicados, locales)) {
      const original = mapa.get(String(e.id));
      const modificado = Object.prototype.hasOwnProperty.call(locales.cambios, String(e.id));
      const listo = modificado ? await E.empaquetar(e, zip, original) : E.clone(e);
      for (const ruta of rutasExamen(original || {})) if (!rutasExamen(listo).includes(ruta) && rutaExamen(ruta)) propuestos.add(ruta);
      resultado.push(listo);
    }
    for (const id of locales.eliminados) {
      const previo = mapa.get(String(id));
      if (previo) rutasExamen(previo).filter(rutaExamen).forEach(r => propuestos.add(r));
    }
    const usados = new Set(resultado.flatMap(rutasExamen));
    for (const ruta of propuestos) if (!usados.has(ruta)) retirados.add(ruta);
    zip.file('data/examenes.json',serial(resultado));
  }

  async function adjuntarTodo(zip, previo, retirados) {
    // Releer justo antes de empaquetar. Una pestaña paralela puede cambiar los borradores.
    const actual = await leerEstado();
    for (const tipo of ['recursos','contacto']) {
      if (actual.borradoresCrudos[tipo] !== previo.borradoresCrudos[tipo])
        throw new Error('El borrador de '+tipo+' cambió desde que abriste esta pantalla. Actualiza y vuelve a preparar el ZIP.');
    }
    for (const nombre of nombres) {
      if (actual.cantidades[nombre] !== previo.cantidades[nombre])
        throw new Error('Los cambios de '+nombre+' variaron durante la exportación. Actualiza la página y reinténtalo.');
    }
    if (actual.errores.length) throw conflicto(actual.errores.join(', '));
    if (actual.cantidades.ejercicios) await adjuntarEjercicios(zip,previo,retirados);
    if (actual.cantidades.examenes) await adjuntarExamenes(zip,previo,retirados);
    if (actual.cantidades.recursos) {
      const json = await R.verifyLatest();
      zip.file('data/recursos.json',serial(json));
    }
    if (actual.cantidades.contacto) {
      // getExportData elimina correo/celular marcados como privados.
      const datos = C.getExportData();
      zip.file('data/contacto.json',serial(datos));
    }
    return actual.cantidades;
  }

  global.MC325PublicacionExtras = Object.freeze({leerEstado,adjuntarTodo});
})(window);
