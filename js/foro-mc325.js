/* MC325 · Foro de Consultas · Prototipo local.
 * Un repositorio de datos aislado facilita sustituir localStorage por Firestore.
 * IMPORTANTE: esto NO sincroniza mensajes entre visitantes de GitHub Pages.
 */
(() => {
  'use strict';
  const CLAVE_FORO = 'foro_mc325_v1';
  const CLAVE_USUARIO = 'foro_mc325_visitante_v1';
  const LIMITE_POR_PAGINA = 10;
  const $ = (id) => document.getElementById(id);

  const html = (valor) => String(valor ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const idNuevo = () => (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const simple = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const fecha = (s) => { const d = new Date(s); return isNaN(d.getTime()) ? '' : new Intl.DateTimeFormat('es-PE',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(d); };
  const corto = (s,n=170) => s.length > n ? s.slice(0,n-1).trimEnd()+'…' : s;
  const ahora = () => new Date().toISOString();
  const msg = (s) => window.alert(s);

  // Aislamiento del acceso a los datos: esta clase se sustituirá por Firebase.
  class RepositorioForoLocal {
    async listar() {
      const crudo = localStorage.getItem(CLAVE_FORO);
      if (!crudo) return [];
      const arr = JSON.parse(crudo);
      if (!Array.isArray(arr)) throw new Error('Formato de consultas inválido');
      return arr;
    }
    async guardar(preguntas) { localStorage.setItem(CLAVE_FORO, JSON.stringify(preguntas)); }
  }
  const repo = new RepositorioForoLocal();
  let preguntas = [];
  let categorias = [{id:'general',nombre:'General'},{id:'examenes',nombre:'Exámenes'}];
  let usuario = null;
  let filtro = 'todas';
  let unidadFiltro = 'todas';
  let busqueda = '';
  let orden = 'actividad';
  let visible = LIMITE_POR_PAGINA;
  let preguntaAbierta = null;
  let edicionPregunta = null;
  let edicionRespuesta = null;

  function recuperarUsuario() {
    try { usuario = JSON.parse(localStorage.getItem(CLAVE_USUARIO)); } catch { /* sesión corrupta */ }
    if (!usuario || typeof usuario.id !== 'string') usuario = { id:idNuevo(), alias:'' };
    return usuario;
  }
  function guardarAlias(nombre) {
    usuario.alias = nombre;
    try { localStorage.setItem(CLAVE_USUARIO, JSON.stringify(usuario)); } catch { /* sin almacenamiento */ }
    $('foro-autor').value = nombre;
    $('foro-respuesta-autor').value = nombre;
  }
  function esPropio(obj) { return Boolean(usuario && obj && obj.autorId === usuario.id); }

  async function cargarUnidades() {
    // El listado es opcional: si no existe aún, el foro sigue funcionando.
    try {
      const r = await fetch('data/unidades.json', {cache:'no-store'});
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const valores = await r.json();
      if (!Array.isArray(valores)) throw new Error('Formato no válido');
      const lista = valores.filter(u => u && typeof u.id === 'string' && u.id !== 'silabo')
        .map((u,i) => ({id:u.id,nombre:`Unidad ${i+1}: ${u.nombre || 'Sin título'}`}));
      categorias = [...lista,{id:'examenes',nombre:'Exámenes'},{id:'general',nombre:'General'}];
    } catch (e) {
      categorias = [
        {id:'unidad1',nombre:'Unidad 1'},{id:'unidad2',nombre:'Unidad 2'},
        {id:'unidad3',nombre:'Unidad 3'},{id:'unidad4',nombre:'Unidad 4'},
        {id:'examenes',nombre:'Exámenes'},{id:'general',nombre:'General'}
      ];
    }
    // Un tema antiguo puede apuntar a una unidad que ya se eliminó.
    for (const p of preguntas) if (!categorias.some(c=>c.id===p.unidad)) categorias.push({id:p.unidad,nombre:'Unidad anterior'});
    const selects = [$('foro-unidad-pregunta'),$('foro-filtro-unidad')];
    selects.forEach((s,i) => {
      const antes = s.value;
      s.replaceChildren();
      if (i===1) s.add(new Option('Todas las unidades','todas'));
      for (const c of categorias) s.add(new Option(c.nombre,c.id));
      s.value = [...s.options].some(o=>o.value===antes) ? antes : (i===1 ? 'todas' : 'general');
    });
  }
  const etiquetaUnidad = id => categorias.find(c=>c.id===id)?.nombre || (id || 'General');
  const respuestas = p => Array.isArray(p.respuestas) ? p.respuestas : [];
  const estado = p => p.resuelta ? 'resuelta' : (respuestas(p).length ? 'respondida' : 'abierta');
  const nombreEstado = p => p.resuelta ? 'Resuelta' : (respuestas(p).length ? 'Respondida' : 'Sin responder');

  async function persistir(mutacion) {
    const anterior = JSON.stringify(preguntas);
    try {
      mutacion();
      await repo.guardar(preguntas);
      return true;
    } catch (e) {
      preguntas = JSON.parse(anterior);
      console.error(e);
      msg('No se pudo guardar. Es posible que se haya llenado el almacenamiento del navegador; intenta usar una imagen más pequeña.');
      return false;
    }
  }

  // Imagen opcional comprimida para las pruebas con localStorage.
  async function convertirImagen(archivo) {
    if (!archivo) return null;
    if (!['image/jpeg','image/png','image/webp'].includes(archivo.type)) throw new Error('Selecciona una imagen JPG, PNG o WEBP.');
    if (archivo.size > 4*1024*1024) throw new Error('La imagen no puede superar 4 MB.');
    const data = await new Promise((resolver,rechazar) => {
      const lector = new FileReader(); lector.onload = () => resolver(lector.result); lector.onerror = () => rechazar(new Error('No se pudo leer la imagen.')); lector.readAsDataURL(archivo);
    });
    const imagen = await new Promise((resolver,rechazar) => {
      const img = new Image(); img.onload = () => resolver(img); img.onerror = () => rechazar(new Error('La imagen no pudo abrirse.')); img.src = data;
    });
    const limite = 1200, escala = Math.min(1,limite/Math.max(imagen.naturalWidth,imagen.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1,Math.round(imagen.naturalWidth*escala));
    canvas.height = Math.max(1,Math.round(imagen.naturalHeight*escala));
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('El navegador no pudo procesar la imagen.');
    ctx.fillStyle = 'white'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(imagen,0,0,canvas.width,canvas.height);
    const comprimida = canvas.toDataURL('image/jpeg',.76);
    if (comprimida.length > 850000) throw new Error('La imagen sigue siendo demasiado grande. Prueba con una más pequeña.');
    return comprimida;
  }
  function insertarImagen(destino, cadena) {
    if (typeof cadena !== 'string' || !/^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(cadena)) return;
    const img = document.createElement('img'); img.src = cadena; img.alt = 'Imagen adjunta al mensaje'; img.className = 'foro-post-image'; img.loading = 'lazy';
    destino.append(img);
  }

  function pintarContadores() {
    $('foro-total-consultas').textContent = preguntas.length;
    $('foro-total-pendientes').textContent = preguntas.filter(p=>!p.resuelta).length;
    $('foro-total-resueltas').textContent = preguntas.filter(p=>p.resuelta).length;
  }
  function filtrarOrdenar() {
    const encontrados = preguntas.filter(p => {
      if (filtro === 'sin-responder' && (p.resuelta || respuestas(p).length !== 0)) return false;
      if (filtro === 'resueltas' && !p.resuelta) return false;
      if (filtro === 'mias' && !esPropio(p)) return false;
      if (unidadFiltro !== 'todas' && p.unidad !== unidadFiltro) return false;
      if (busqueda && !simple([p.titulo,p.cuerpo,p.autor,etiquetaUnidad(p.unidad)].join(' ')).includes(simple(busqueda))) return false;
      return true;
    });
    encontrados.sort((a,b)=>{
      if (orden==='respuestas') return respuestas(b).length-respuestas(a).length || new Date(b.creada)-new Date(a.creada);
      return new Date(orden==='recientes'?b.creada:(b.actualizada||b.creada)) - new Date(orden==='recientes'?a.creada:(a.actualizada||a.creada));
    });
    return encontrados;
  }
  function renderizarLista() {
    pintarContadores();
    const lista = $('foro-lista'), items = filtrarOrdenar();
    $('foro-conteo').textContent = `${items.length} ${items.length===1?'consulta':'consultas'}`;
    lista.replaceChildren();
    if (!items.length) {
      lista.innerHTML = `<div class="foro-empty"><i class="fa-regular fa-comments"></i><h4>${preguntas.length?'No hay consultas con estos filtros':'Todavía no hay consultas publicadas'}</h4><p>${preguntas.length?'Cambia la búsqueda o los filtros para ver otros resultados.':'Haz la primera pregunta para comenzar a construir el foro del curso.'}</p></div>`;
    }
    for (const p of items.slice(0,visible)) {
      const e = document.createElement('div'); e.className='foro-row';
      e.innerHTML = `
        <div class="foro-avatar" aria-hidden="true">${html((p.autor||'A').trim().slice(0,1).toUpperCase())}</div>
        <div class="foro-row-main">
          <div class="foro-tags"><span class="foro-tag ${estado(p)}">${nombreEstado(p)}</span><span class="foro-tag unidad">${html(etiquetaUnidad(p.unidad))}</span></div>
          <button type="button" class="foro-row-title" data-abrir="${html(p.id)}">${html(p.titulo)}</button>
          <p>${html(corto(p.cuerpo.replace(/\s+/g,' ').trim()))}${p.imagen?' · 📎 Imagen adjunta':''}</p>
          <div class="foro-row-meta">${html(p.autor)} · ${html(fecha(p.creada))}</div>
        </div>
        <div class="foro-row-stats"><div><strong>${respuestas(p).length}</strong><span>respuestas</span></div><div><strong>${p.vistas||0}</strong><span>vistas</span></div></div>`;
      lista.append(e);
    }
    $('foro-ver-mas').hidden = items.length <= visible;
  }

  function cambiarVista(hilo) {
    $('foro-vista-lista').hidden = Boolean(hilo);
    $('foro-vista-hilo').hidden = !hilo;
    if (hilo) $('foro-vista-hilo').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function abrirComposer(id=null) {
    const p = id ? preguntas.find(x=>x.id===id) : null;
    if (id && (!p || !esPropio(p))) return;
    edicionPregunta = p?.id || null;
    cambiarVista(false);
    $('foro-composer').hidden = false;
    $('foro-composer-titulo').innerHTML = p ? '<i class="fa-regular fa-pen-to-square"></i> Editar consulta' : '<i class="fa-regular fa-pen-to-square"></i> Publicar una consulta';
    $('foro-guardar-pregunta').textContent = p ? 'Guardar cambios' : 'Publicar consulta';
    $('foro-autor').value = p?.autor || usuario.alias || '';
    $('foro-unidad-pregunta').value = p?.unidad || 'general';
    $('foro-titulo').value = p?.titulo || '';
    $('foro-cuerpo').value = p?.cuerpo || '';
    $('foro-imagen').value = '';
    $('foro-imagen-nota').textContent = p?.imagen ? 'La imagen anterior se conserva si no eliges otra.' : 'JPG, PNG o WEBP, máximo 4 MB.';
    $('foro-composer').scrollIntoView({behavior:'smooth',block:'start'});
    $('foro-titulo').focus({preventScroll:true});
  }
  function cerrarComposer() { $('foro-composer').hidden=true; edicionPregunta=null; $('foro-form-pregunta').reset(); }
  async function guardarPregunta(e) {
    e.preventDefault();
    const autor=$('foro-autor').value.trim(), titulo=$('foro-titulo').value.trim(), cuerpo=$('foro-cuerpo').value.trim(), unidad=$('foro-unidad-pregunta').value;
    if (autor.length<2 || titulo.length<6 || cuerpo.length<15) return msg('Completa tu alias, un título y una explicación de la duda.');
    let imagen=null;
    try { imagen=await convertirImagen($('foro-imagen').files[0]); } catch (err) { return msg(err.message); }
    const id = edicionPregunta || idNuevo();
    const existente=edicionPregunta ? preguntas.find(p=>p.id===id && esPropio(p)) : null;
    if (edicionPregunta && !existente) return msg('No se encontró la consulta a editar.');
    const ok=await persistir(()=>{
      if (existente) Object.assign(existente,{titulo,autor,cuerpo,unidad,imagen:imagen||existente.imagen||null,actualizada:ahora()});
      else preguntas.push({id,unidad,titulo,cuerpo,imagen,autor,autorId:usuario.id,creada:ahora(),actualizada:ahora(),resuelta:false,vistas:0,respuestas:[]});
    });
    if (!ok) return;
    guardarAlias(autor); cerrarComposer(); renderizarLista();
    await abrirHilo(id);
  }
  async function abrirHilo(id) {
    const p=preguntas.find(x=>x.id===id); if (!p) return;
    preguntaAbierta=id; edicionRespuesta=null;
    if (await persistir(()=>{p.vistas=(Number(p.vistas)||0)+1;})) renderizarLista();
    renderizarHilo(); cambiarVista(true);
  }
  function renderizarHilo() {
    const p=preguntas.find(x=>x.id===preguntaAbierta);
    if (!p) { cambiarVista(false); return; }
    const cont=$('foro-detalle-pregunta'); cont.replaceChildren();
    cont.innerHTML=`<div class="foro-post-top">
      <div class="foro-avatar" aria-hidden="true">${html((p.autor||'A').slice(0,1).toUpperCase())}</div>
      <div class="foro-post-content"><div class="foro-tags"><span class="foro-tag ${estado(p)}">${nombreEstado(p)}</span><span class="foro-tag unidad">${html(etiquetaUnidad(p.unidad))}</span></div>
      <h2>${html(p.titulo)}</h2><div class="foro-post-meta">Publicado por ${html(p.autor)} · ${html(fecha(p.creada))} · ${Number(p.vistas)||0} vistas</div></div></div>`;
    const cuerpo=document.createElement('div'); cuerpo.className='foro-prose'; cuerpo.textContent=p.cuerpo; cont.append(cuerpo);
    insertarImagen(cont,p.imagen);
    if (esPropio(p)) {
      const acciones=document.createElement('div'); acciones.className='foro-post-actions';
      acciones.innerHTML=`<button type="button" class="btn-outline" data-accion="resolver">${p.resuelta?'Reabrir consulta':'Marcar como resuelta'}</button><button type="button" class="btn-outline" data-accion="editar-pregunta">Editar</button><button type="button" class="btn-outline" data-accion="borrar-pregunta">Eliminar</button>`;
      cont.append(acciones);
    }
    const lista=$('foro-respuestas-lista'); lista.replaceChildren();
    $('foro-respuestas-titulo').textContent = `Respuestas (${respuestas(p).length})`;
    if (!respuestas(p).length) lista.innerHTML='<p class="foro-no-respuestas">Todavía no hay respuestas. Puedes aportar la primera explicación.</p>';
    for (const r of respuestas(p)) {
      const e=document.createElement('article'); e.className='foro-respuesta';
      e.innerHTML=`<div class="foro-respuesta-cabecera"><div class="foro-avatar" aria-hidden="true">${html((r.autor||'A').slice(0,1).toUpperCase())}</div><div><strong>${html(r.autor)}</strong><br><small>${html(fecha(r.creada))}</small></div></div>`;
      const texto=document.createElement('div'); texto.className='foro-prose'; texto.textContent=r.cuerpo; e.append(texto);
      insertarImagen(e,r.imagen);
      if (esPropio(r)) {
        const acciones=document.createElement('div'); acciones.className='foro-respuesta-actions';
        acciones.innerHTML=`<button type="button" class="btn-outline" data-accion="editar-respuesta" data-id="${html(r.id)}">Editar</button><button type="button" class="btn-outline" data-accion="borrar-respuesta" data-id="${html(r.id)}">Eliminar</button>`;
        e.append(acciones);
      }
      lista.append(e);
    }
    renderizarMatematicas([cont,lista]);
  }
  function renderizarMatematicas(contenedores) {
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise(contenedores).catch(err=>console.warn('MathJax:',err));
  }
  function editarRespuesta(id) {
    const p=preguntas.find(x=>x.id===preguntaAbierta); const r=respuestas(p).find(x=>x.id===id && esPropio(x)); if (!r) return;
    edicionRespuesta=r.id; $('foro-respuesta-autor').value=r.autor; $('foro-respuesta-texto').value=r.cuerpo; $('foro-respuesta-imagen').value='';
    $('foro-publicar-respuesta').textContent='Guardar cambios'; $('foro-cancelar-respuesta').hidden=false;
    $('foro-form-respuesta').scrollIntoView({behavior:'smooth',block:'center'});
  }
  function cancelarEdicionRespuesta() { edicionRespuesta=null; $('foro-form-respuesta').reset(); $('foro-respuesta-autor').value=usuario.alias||''; $('foro-cancelar-respuesta').hidden=true; $('foro-publicar-respuesta').textContent='Publicar respuesta'; }
  async function guardarRespuesta(e) {
    e.preventDefault(); const p=preguntas.find(x=>x.id===preguntaAbierta); if (!p) return;
    const autor=$('foro-respuesta-autor').value.trim(), cuerpo=$('foro-respuesta-texto').value.trim();
    if (autor.length<2 || cuerpo.length<2) return msg('Indica tu alias y escribe la respuesta.');
    let imagen=null;
    try { imagen=await convertirImagen($('foro-respuesta-imagen').files[0]); } catch (err) {return msg(err.message);}
    const r=edicionRespuesta ? respuestas(p).find(x=>x.id===edicionRespuesta && esPropio(x)) : null;
    if (edicionRespuesta && !r) return msg('No se encontró tu respuesta.');
    const ok=await persistir(()=>{
      if (r) Object.assign(r,{autor,cuerpo,imagen:imagen||r.imagen||null,editada:ahora()});
      else { if (!Array.isArray(p.respuestas)) p.respuestas=[]; p.respuestas.push({id:idNuevo(),autor,autorId:usuario.id,cuerpo,imagen,creada:ahora()}); }
      p.actualizada=ahora();
    });
    if (!ok) return;
    guardarAlias(autor); cancelarEdicionRespuesta(); renderizarHilo(); renderizarLista();
  }
  async function acciónHilo(accion,id) {
    const p=preguntas.find(x=>x.id===preguntaAbierta); if (!p) return;
    if (accion==='editar-pregunta') return abrirComposer(p.id);
    if (accion==='resolver' && esPropio(p)) {
      if (await persistir(()=>{p.resuelta=!p.resuelta;p.actualizada=ahora();})) {renderizarHilo();renderizarLista();} return;
    }
    if (accion==='borrar-pregunta' && esPropio(p)) {
      if (!window.confirm('¿Eliminar esta consulta y todas sus respuestas?')) return;
      if (await persistir(()=>{preguntas=preguntas.filter(x=>x.id!==p.id);})) {preguntaAbierta=null;cambiarVista(false);renderizarLista();} return;
    }
    const r=respuestas(p).find(x=>x.id===id && esPropio(x)); if (!r) return;
    if (accion==='editar-respuesta') return editarRespuesta(id);
    if (accion==='borrar-respuesta') {
      if (!window.confirm('¿Eliminar tu respuesta?')) return;
      if (await persistir(()=>{p.respuestas=p.respuestas.filter(x=>x.id!==id);p.actualizada=ahora();})) {renderizarHilo();renderizarLista();}
    }
  }
  function configurarEventos() {
    $('foro-btn-nueva').addEventListener('click',()=>abrirComposer());
    $('foro-cerrar-composer').addEventListener('click',cerrarComposer);
    $('foro-cancelar-form').addEventListener('click',cerrarComposer);
    $('foro-form-pregunta').addEventListener('submit',guardarPregunta);
    $('foro-form-respuesta').addEventListener('submit',guardarRespuesta);
    $('foro-volver-lista').addEventListener('click',()=>{preguntaAbierta=null;cancelarEdicionRespuesta();cambiarVista(false);renderizarLista();});
    $('foro-cancelar-respuesta').addEventListener('click',cancelarEdicionRespuesta);
    $('foro-filtro-unidad').addEventListener('change',e=>{unidadFiltro=e.target.value;visible=LIMITE_POR_PAGINA;renderizarLista();});
    $('foro-buscar').addEventListener('input',e=>{busqueda=e.target.value.trim();visible=LIMITE_POR_PAGINA;renderizarLista();});
    $('foro-orden').addEventListener('change',e=>{orden=e.target.value;renderizarLista();});
    $('foro-ver-mas').addEventListener('click',()=>{visible+=LIMITE_POR_PAGINA;renderizarLista();});
    $('foro-vista-lista').addEventListener('click',e=>{
      const btn=e.target.closest('[data-abrir]');if (btn) abrirHilo(btn.dataset.abrir);
      const f=e.target.closest('[data-foro-filtro]');if (!f) return;
      filtro=f.dataset.foroFiltro;visible=LIMITE_POR_PAGINA;
      document.querySelectorAll('[data-foro-filtro]').forEach(b=>{b.classList.toggle('active',b===f);b.setAttribute('aria-pressed',String(b===f));});
      renderizarLista();
    });
    $('foro-vista-hilo').addEventListener('click',e=>{
      const btn=e.target.closest('[data-accion]'); if (btn) acciónHilo(btn.dataset.accion,btn.dataset.id);
    });
    window.addEventListener('storage',e=>{
      if (e.key===CLAVE_FORO && !document.hidden) {
        repo.listar().then(datos=>{preguntas=datos;renderizarLista();if (preguntaAbierta) renderizarHilo();}).catch(console.error);
      }
    });
  }
  async function iniciar() {
    recuperarUsuario();
    $('foro-autor').value = usuario.alias || '';
    $('foro-respuesta-autor').value = usuario.alias || '';
    configurarEventos();
    try { preguntas=await repo.listar(); } catch(e) { console.error(e); msg('No se pudieron cargar las consultas guardadas.'); preguntas=[]; }
    await cargarUnidades();
    renderizarLista();
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar,{once:true});
  else iniciar();
})();
