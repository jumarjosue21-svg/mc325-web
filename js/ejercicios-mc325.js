/* MC325 · Interfaz de Ejercicios Resueltos
   Las operaciones de escritura son SOLO locales hasta disponer de Firebase.
   El botón Modo Docente NO constituye autorización de servidor.
 */
(function () {
  'use strict';
  const D = window.MC325EjerciciosDatos;
  const $ = id => document.getElementById(id);
  const estado = {
    publicados: [], unidades: [], ejercicios: [], admin: false,
    editorRol: null, editandoId: null, seleccionadoId: null,
    modalUrl: null, modalReturnFocus: null, bodyOverflow: null,
    recorridoDesdeCurso: false, lecturaVersion: 0
  };
  // Contexto de la visita desde un capítulo. Nunca usamos URLs de terceros:
  // el destino se construye exclusivamente como materiales.html?articulo=ID.
  const paramsVisita = new URLSearchParams(window.location.search);
  const ejercicioDeOrigen = paramsVisita.get('ejercicio');
  const capituloOrigen = paramsVisita.get('capituloOrigen');
  const capituloSiguiente = paramsVisita.get('siguienteCapitulo');
  const cambiaUnidad = paramsVisita.get('siguienteUnidad') === '1';
  const idValido = v => typeof v === 'string' && v.length > 0 && v.length <= 160 && /^[a-zA-Z0-9_-]+$/.test(v);
  function configurarRecorrido(sufijo, ejercicioId) {
    const nav = $(`mc325-recorrido-${sufijo}`);
    if (!nav) return;
    const corresponde = idValido(capituloOrigen) && (
      String(ejercicioId) === ejercicioDeOrigen ||
      (sufijo === 'lector' && estado.recorridoDesdeCurso && ejercicioId !== null)
    );
    nav.hidden = !corresponde;
    if (!corresponde) return;
    $(`mc325-volver-${sufijo}`).href = `materiales.html?articulo=${encodeURIComponent(capituloOrigen)}`;
    const siguiente = $(`mc325-siguiente-${sufijo}`);
    siguiente.hidden = !idValido(capituloSiguiente);
    if (!siguiente.hidden) {
      siguiente.href = `materiales.html?articulo=${encodeURIComponent(capituloSiguiente)}`;
      siguiente.querySelector('span').textContent = sufijo === 'lector'
        ? (cambiaUnidad ? 'Siguiente unidad del curso' : 'Siguiente capítulo de teoría')
        : (cambiaUnidad ? 'Siguiente unidad del curso' : 'Siguiente capítulo');
    }
  }
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
    if (vista!=='lector') {
      estado.seleccionadoId=null;
      estado.recorridoDesdeCurso=false;
      estado.lecturaVersion++;
      configurarNavegacionEjercicios(null);
      configurarRecorrido('lector', null);
    }
    document.querySelector('.content-area').scrollTo?.({top:0,behavior:'smooth'});
  }
  function actualizar() { estado.ejercicios=D.combinar(estado.publicados); renderizar(); }
  function crearCard(e, indiceUnidad, totalUnidad, bloqueadoPorBusqueda=false) {
    const esWeb=e.formato==='web';
    const icono=esWeb?'fa-book-open':'fa-file-pdf';
    const etiqueta=esWeb?'WEB':'PDF';
    const clase=esWeb?'web':'pdf';
    const titulo=escapar(e.titulo);
    const detalles=escapar(e.descripcion || (esWeb?'Solución paso a paso en Markdown + LaTeX':'Documento PDF con enunciado y solución'));
    return `<article class="ex-card" data-ejercicio="${escapar(e.id)}">
      <div class="ex-fileicon ex-format-${clase}"><i class="fa-solid ${icono}" aria-hidden="true"></i><span>${etiqueta}</span></div>
      <div class="ex-card-body">
        <div class="ex-tags"><span class="ex-tag ${e.origen==='clase'?'ex-tag-clase':'ex-tag-aporte'}">${e.origen==='clase'?'Hecho en clase':'Aporte estudiantil'}</span></div>
        <h4 class="ex-card-title" data-accion="leer" data-id="${escapar(e.id)}" role="button" tabindex="0">${titulo}</h4>
        <p class="ex-card-desc">${detalles}</p>
        <div class="ex-meta">${escapar(e.autor||'Sin autor')} · ${formatoFecha(e.fecha)}</div>
      </div>
      <div class="ex-card-actions">
        ${estado.admin?`<div class="ex-mover-ejercicio" role="group" aria-label="Cambiar el orden de ${titulo}">
          <button class="ex-mover-btn" type="button" data-accion="subir" data-id="${escapar(e.id)}" aria-label="Subir ${titulo}" title="Subir este ejercicio" ${indiceUnidad<=0 || bloqueadoPorBusqueda?'disabled':''}><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
          <button class="ex-mover-btn" type="button" data-accion="bajar" data-id="${escapar(e.id)}" aria-label="Bajar ${titulo}" title="Bajar este ejercicio" ${indiceUnidad>=totalUnidad-1 || bloqueadoPorBusqueda?'disabled':''}><i class="fa-solid fa-arrow-down" aria-hidden="true"></i></button>
        </div><button class="ex-btn ex-btn-subtle ex-btn-mini" type="button" data-accion="editar" data-id="${escapar(e.id)}" title="Editar ejercicio"><i class="fa-solid fa-pen"></i> Editar</button><button class="ex-btn ex-btn-danger ex-btn-mini" type="button" data-accion="borrar" data-id="${escapar(e.id)}" title="Eliminar ejercicio"><i class="fa-solid fa-trash"></i></button>`:''}
        ${esWeb?`<button class="ex-btn ex-btn-mini ex-btn-preview" type="button" data-accion="enunciado" data-id="${escapar(e.id)}" ${tieneEnunciado(e)?'':'disabled title="Este ejercicio no tiene imagen del enunciado"'}><i class="fa-regular fa-image" aria-hidden="true"></i> Enunciado</button>`:''}
        <button class="ex-btn ex-btn-mini" type="button" data-accion="leer" data-id="${escapar(e.id)}">${esWeb?'Leer solución':'Ver PDF'}</button>
      </div>
    </article>`;
  }
  // El orden editorial se guarda por unidad (WEB y PDF juntos).
  // Los ejercicios antiguos sin "orden" conservan inicialmente el criterio
  // previo de fecha más reciente; los nuevos se añaden al final de la unidad
  // cuando ya existe un orden manual.
  const fechaEjercicio = e => Date.parse(e.fecha||0)||0;
  const posicionEditorial = e => Number.isSafeInteger(e.orden) && e.orden>=0 ? e.orden : Number.MAX_SAFE_INTEGER;
  function compararOrdenEditorial(a,b) {
    return posicionEditorial(a)-posicionEditorial(b)
      || fechaEjercicio(b)-fechaEjercicio(a)
      || String(a.id).localeCompare(String(b.id));
  }
  function ordenarEjercicios(arr) {
    const orden=$('ex-orden').value;
    return arr.sort((a,b)=>orden==='titulo'
      ? String(a.titulo).localeCompare(String(b.titulo),'es')
      : orden==='antiguos'
        ? fechaEjercicio(a)-fechaEjercicio(b)
        : orden==='recientes'
          ? fechaEjercicio(b)-fechaEjercicio(a)
          : compararOrdenEditorial(a,b));
  }
  // Las flechas funcionan exclusivamente dentro de la misma unidad.
  // Guardar solo los registros cuya posición cambió evita alterar ejercicios
  // de otras unidades y conserva Markdown/PDF/enunciados sin reescribirlos.
  function moverEjercicio(id, desplazamiento) {
    if(!estado.admin || ![-1,1].includes(desplazamiento))return;
    const ejercicio=estado.ejercicios.find(e=>String(e.id)===String(id));
    if(!ejercicio)return;
    if($('ex-buscar').value.trim()) {
      setEstado('Limpia la búsqueda antes de cambiar el orden de los ejercicios.',true);
      return;
    }
    const grupo=estado.ejercicios.filter(e=>e.unidad===ejercicio.unidad).sort(compararOrdenEditorial);
    const actual=grupo.findIndex(e=>String(e.id)===String(id));
    const destino=actual+desplazamiento;
    if(actual<0 || destino<0 || destino>=grupo.length)return;
    [grupo[actual],grupo[destino]]=[grupo[destino],grupo[actual]];
    // Si el resto no tenía orden explícito, basta numerar el tramo hasta
    // el elemento movido. Así se evitan borradores y conflictos innecesarios
    // sobre los demás ejercicios de la unidad.
    const limite=Math.max(actual,destino);
    const hayColisiones=grupo.some((e,i)=>i>limite && posicionEditorial(e)<=limite);
    const fin=hayColisiones?grupo.length-1:limite;
    try {
      // Una sola escritura en localStorage: evita guardar parcialmente
      // una reordenación y resulta más rápido con artículos largos.
      const local=D.obtenerLocales();
      if(!local.base)local.base=JSON.stringify(estado.publicados);
      for(let i=0;i<=fin;i++) {
        if(posicionEditorial(grupo[i])!==i) {
          const idCambio=String(grupo[i].id);
          local.cambios[idCambio]=D.clonar({...grupo[i],orden:i});
          local.eliminados=local.eliminados.filter(x=>String(x)!==idCambio);
        }
      }
      D.guardarLocales(local);
    } catch(err) {
      setEstado('No se pudo guardar el orden: '+err.message,true);
      return;
    }
    $('ex-orden').value='personalizado';
    actualizar();
    setEstado(`Orden actualizado en ${nombreUnidad(ejercicio.unidad)}. Es un borrador local: publícalo desde «Preparar cambios para GitHub».`);
  }
  function unidadesEnOrden(arr) {
    const ordenUnidad=new Map(estado.unidades.map((u,i)=>[u.id,i]));
    return [...new Set(arr.map(e=>e.unidad))].sort((a,b)=>
      (ordenUnidad.get(a)??Number.MAX_SAFE_INTEGER)-(ordenUnidad.get(b)??Number.MAX_SAFE_INTEGER)
      || String(a).localeCompare(String(b),'es'));
  }
  // Incluye solamente artículos Markdown + LaTeX, incluso cuando se llega
  // desde el enlace de un capítulo o el listado tiene una búsqueda activa.
  // Los PDF nunca forman parte de la secuencia.
  function secuenciaEjerciciosWeb() {
    const web=ordenarEjercicios(estado.ejercicios.filter(e=>e.formato==='web'));
    return unidadesEnOrden(web).flatMap(unidad=>web.filter(e=>e.unidad===unidad));
  }
  function configurarNavegacionEjercicios(ejercicio) {
    const nav=$('mc325-nav-ejercicios');
    const anteriorBtn=$('mc325-ej-anterior');
    const siguienteBtn=$('mc325-ej-siguiente');
    nav.hidden=true;
    anteriorBtn.hidden=true; siguienteBtn.hidden=true;
    delete anteriorBtn.dataset.ejercicioId;
    delete siguienteBtn.dataset.ejercicioId;
    if (!ejercicio || ejercicio.formato!=='web') return;
    const secuencia=secuenciaEjerciciosWeb();
    const indice=secuencia.findIndex(e=>String(e.id)===String(ejercicio.id));
    if (indice<0) return;
    const anterior=indice>0?secuencia[indice-1]:null;
    const siguiente=indice+1<secuencia.length?secuencia[indice+1]:null;
    nav.hidden=!anterior&&!siguiente;
    if (anterior) {
      anteriorBtn.hidden=false;
      anteriorBtn.dataset.ejercicioId=String(anterior.id);
      anteriorBtn.querySelector('span').textContent=anterior.unidad===ejercicio.unidad?'Ejercicio anterior':'Ejercicio de la unidad anterior';
      anteriorBtn.title=anterior.titulo;
    }
    if (siguiente) {
      siguienteBtn.hidden=false;
      siguienteBtn.dataset.ejercicioId=String(siguiente.id);
      siguienteBtn.querySelector('span').textContent=siguiente.unidad===ejercicio.unidad?'Siguiente ejercicio':'Ejercicio de la siguiente unidad';
      siguienteBtn.title=siguiente.titulo;
    }
  }
  // Vista única: se mezclan los dos orígenes y se agrupan exclusivamente por unidad.
  // Se conserva el campo origen para mostrar la etiqueta de cada ejercicio.
  function listarEjercicios() {
    const terminos=normalizar($('ex-buscar').value).split(' ').filter(Boolean);
    const unidad=$('ex-filtro-unidad').value;
    const arr=estado.ejercicios.filter(e=>
      (unidad==='todas'||e.unidad===unidad) &&
      terminos.every(t => normalizar(`${e.titulo} ${e.descripcion||''} ${e.autor||''} ${nombreUnidad(e.unidad)}`).includes(t))
    );
    ordenarEjercicios(arr);
    $('ex-count-total').textContent=`${arr.length} ${arr.length===1?'ejercicio':'ejercicios'}`;
    const contenedor=$('ex-lista-unificada');
    if (!arr.length) {
      contenedor.innerHTML='<p class="ex-empty">No hay ejercicios que coincidan con la búsqueda o la unidad seleccionada.</p>';
      return 0;
    }
    const ids=unidadesEnOrden(arr);
    const buscando=Boolean($('ex-buscar').value.trim()) || $('ex-orden').value!=='personalizado';
    contenedor.innerHTML=ids.map(id=>{
      const grupoCompleto=estado.ejercicios.filter(e=>e.unidad===id).sort(compararOrdenEditorial);
      const posiciones=new Map(grupoCompleto.map((e,i)=>[String(e.id),i]));
      return `<div class="ex-unit-head">${escapar(nombreUnidad(id))}</div>${arr.filter(e=>e.unidad===id)
        .map(e=>crearCard(e,posiciones.get(String(e.id)),grupoCompleto.length,buscando)).join('')}`;
    }).join('');
    return arr.length;
  }
  function renderizar() {
    $('ex-stat-total').textContent=estado.ejercicios.length;
    $('ex-stat-web').textContent=estado.ejercicios.filter(e=>e.formato==='web').length;
    $('ex-stat-pdf').textContent=estado.ejercicios.filter(e=>e.formato==='pdf').length;
    const visibles=listarEjercicios();
    const filtrando=Boolean($('ex-buscar').value.trim() || $('ex-filtro-unidad').value !== 'todas');
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
    if(estado.admin) $('ex-orden').value='personalizado';
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
      autor, formato,
      fecha:anterior?.fecha || new Date().toISOString(),
      ...(anterior?.unidad===$('ex-unidad').value && posicionEditorial(anterior)!==Number.MAX_SAFE_INTEGER ? {orden:anterior.orden} : {}),
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
    const bloquesTikz=[];const bloques=[];const lineas=[];
    let preparado=String(md).replace(/<script\s+type=["']text\/tikz["'][^>]*>([\s\S]*?)<\/script>/gi,(_match,codigoTikz)=>{
      const codigoLimpio=codigoTikz
        .replace(/^[ \t]*%.*$/gm,'')
        .replace(/([^\\])%.*$/gm,'$1')
        .replace(/\\boldsymbol\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,'$1')
        .replace(/\\dfrac\s*\{/g,'\\frac{')
        .replace(/\\text\s*\{/g,'\\mathrm{')
        .replace(/\$\\val\$/g,'\\val')
        .replace(/\$([^$]+)\$/g,(_,formulaTikz)=>'$'+formulaTikz.replace(/(\d)\.(\d)/g,'$1\\mbox{.}$2').replace(/\//g,'\\mbox{/}')+'$')
        .trim();
      const idx=bloquesTikz.push(codigoLimpio)-1;
      return `\n\n<div class="tikz-figure" data-ex-tikz="${idx}"></div>\n\n`;
    });
    preparado=preparado.replace(/\$\$([\s\S]+?)\$\$/g,(_match,tex)=>{
      const i=bloques.push(tex)-1;return `\n\n<div class="ex-mathblock" data-ex-math="${i}"></div>\n\n`;
    });
    preparado=preparado.replace(/\$((?:\\.|[^$\n])+?)\$/g,(_match,tex)=>`EXINLINEFORMULA${lineas.push(tex)-1}FIN`);
    const html=window.marked.parse(preparado);
    contenedor.innerHTML=window.DOMPurify.sanitize(html,{USE_PROFILES:{html:true},ADD_ATTR:['data-ex-tikz','data-ex-math'],FORBID_TAGS:['style','script','iframe','object','embed'],FORBID_ATTR:['style']});
    contenedor.querySelectorAll('[data-ex-math]').forEach(el=>{
      const idx=Number(el.dataset.exMath);if(Number.isInteger(idx)&&idx>=0&&idx<bloques.length)el.textContent=`$$${bloques[idx]}$$`;
    });
    const walk=document.createTreeWalker(contenedor,NodeFilter.SHOW_TEXT);const nodos=[];
    while(walk.nextNode())if(walk.currentNode.nodeValue.includes('EXINLINEFORMULA'))nodos.push(walk.currentNode);
    nodos.forEach(nodo=>{nodo.nodeValue=nodo.nodeValue.replace(/EXINLINEFORMULA(\d+)FIN/g,(match,i)=>lineas[Number(i)]===undefined?match:`$${lineas[Number(i)]}$`);});
    contenedor.querySelectorAll('a').forEach(a=>{if(a.href?.startsWith('javascript:'))a.removeAttribute('href');else if(a.href){a.target='_blank';a.rel='noopener noreferrer';}});
    contenedor.querySelectorAll('img').forEach(img=>{img.loading='lazy';img.alt=img.alt||'Ilustración del ejercicio';});
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([contenedor]).catch(console.warn);
    contenedor.querySelectorAll('[data-ex-tikz]').forEach(el=>{
      const idx=Number(el.dataset.exTikz);
      el.removeAttribute('data-ex-tikz');
      const codigo=bloquesTikz[idx];
      if(!codigo)return;
      const scriptTikz=document.createElement('script');
      scriptTikz.type='text/tikz';
      scriptTikz.textContent=codigo;
      el.appendChild(scriptTikz);
    });
    if(bloquesTikz.length>0 && typeof window.onload==='function'){
      setTimeout(()=>{ window.onload(); },60);
    }
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
  function mostrarModal(titulo,contenido,ejercicioId=null){
    cerrarModal();
    estado.modalReturnFocus=document.activeElement;
    estado.bodyOverflow=document.body.style.overflow;
    $('ex-modal-titulo').textContent=titulo;
    $('ex-modal-contenido').replaceChildren(contenido);
    configurarRecorrido('pdf', ejercicioId); // No aparece al abrir una imagen de enunciado.
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
      mostrarModal(e.titulo,iframe,e.id);
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
    const version=++estado.lecturaVersion;
    cambiarVista('lector');
    configurarNavegacionEjercicios(e);
    configurarRecorrido('lector', e.id);
    $('ex-lector-titulo').textContent=e.titulo;
    $('ex-lector-meta').textContent=`${nombreUnidad(e.unidad)} · ${e.origen==='clase'?'Hecho en clase':'Aporte de estudiante'} · ${e.autor||'Sin autor'} · ${formatoFecha(e.fecha)}`;
    const out=$('ex-lector-contenido');out.replaceChildren();out.textContent='Cargando ejercicio...';$('ex-lector-indice').hidden=true;
    try {
      const markdown=await D.obtenerMarkdown(e);
      if (version!==estado.lecturaVersion || String(estado.seleccionadoId)!==String(e.id)) return;
      renderMarkdownSegura(markdown,out);crearIndice();
    } catch(err) {
      if (version===estado.lecturaVersion) out.textContent='No se pudo abrir el ejercicio: '+err.message;
    }
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
    else if(accion==='subir'||accion==='bajar')moverEjercicio(id,accion==='subir'?-1:1);
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
    // Controles propios de Ejercicios: coexisten con la continuación del curso.
    for (const id of ['mc325-ej-anterior','mc325-ej-siguiente']) {
      $(id).addEventListener('click',ev=>{
        const destino=ev.currentTarget.dataset.ejercicioId;
        if (destino) abrirLector(destino);
      });
    }
    $('ex-modal-cerrar').addEventListener('click',cerrarModal);
    $('ex-limpiar-busqueda').addEventListener('click',()=>{
      $('ex-buscar').value=''; renderizar(); $('ex-buscar').focus();
    });
    $('ex-lista-unificada').addEventListener('click',delegarClick);
    document.addEventListener('keydown',ev=>{
      if(ev.key!=='Enter'||!ev.target.matches('.ex-card-title[data-accion]'))return;
      ev.preventDefault();abrirLector(ev.target.dataset.id);
    });
    ['ex-buscar','ex-filtro-unidad','ex-orden'].forEach(id=>$(id).addEventListener(id==='ex-buscar'?'input':'change',renderizar));
    try {estado.publicados=await D.obtenerPublicados();
      // Eliminar del estado local únicamente lo ya confirmado en el repositorio.
      await D.reconciliarPublicados(estado.publicados);
    }
    catch(err){setEstado(`No se pudieron cargar los ejercicios publicados: ${err.message}. Abre la página con Live Server y verifica data/ejercicios.json.`,true);estado.publicados=[];}
    try {estado.unidades=await D.obtenerUnidades();if(!estado.unidades.length)throw new Error('No hay unidades definidas.');}
    catch(err){setEstado(`No se pudieron cargar las unidades desde data/unidades.json: ${err.message}`,true);estado.unidades=[];}
    rellenarUnidades();actualizar();
    if(estado.unidades.length)setEstado('Los materiales del repositorio están disponibles. Las nuevas aportaciones quedan como borradores locales hasta su publicación.');
    // Enlace directo desde el botón «Ejercicios del capítulo» de Materiales.
    // Usa el mismo ID para ejercicios WEB (lector) y PDF (visor modal).
    const ejercicioSolicitado=new URLSearchParams(window.location.search).get('ejercicio');
    if (ejercicioSolicitado) {
      const encontrado=estado.ejercicios.find(e=>String(e.id)===ejercicioSolicitado);
      if(encontrado) {
        estado.recorridoDesdeCurso=idValido(capituloOrigen) && String(encontrado.id)===ejercicioDeOrigen;
        await abrirLector(encontrado.id);
      }
      else setEstado('El ejercicio vinculado no está disponible. Puede que aún no se haya publicado o que haya sido eliminado.',true);
    }
  }
  document.addEventListener('DOMContentLoaded',iniciar);
})();
