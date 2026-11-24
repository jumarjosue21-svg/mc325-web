/* MC325 · Exámenes Pasados: catálogo público + borradores locales. */
(()=>{
  'use strict';
  const D=window.MC325ExamenesDatos;
  const $=id=>document.getElementById(id);
  const TIPOS=['pc','parcial','final','sustitutorio'];
  const NOMBRES={pc:'Práctica Calificada',parcial:'Examen Parcial',final:'Examen Final',sustitutorio:'Examen Sustitutorio'};
  const S={publicados:[],items:[],docente:false,editando:null,rol:null,ciclo:'todos',expandido:{},aporteId:null,modalUrl:null,modalFoco:null,modalOverflow:null};
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm=x=>String(x??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const validTipo=x=>TIPOS.includes(x);
  const cicloNum=x=>{const m=/^(\d{4})-([12])$/.exec(x||'');return m?Number(m[1])*10+Number(m[2]):0;};
  const fechaNum=x=>Number.isFinite(Date.parse(x))?Date.parse(x):0;
  const fechaBonita=x=>x&&!Number.isNaN(Date.parse(x))?new Date(x).toLocaleDateString('es-PE',{year:'numeric',month:'short',day:'2-digit'}):'Sin fecha';
  function mensaje(t,error=false){const b=$('em-mensaje');b.textContent=t;b.classList.toggle('em-error',error);b.hidden=!t;}
  function hayCambios(){const v=D.local();return Object.keys(v.cambios).length>0||v.eliminados.length>0;}
  function refrescar(){S.items=D.combinar(S.publicados);render();}
  function ordenar(a,b){
    const ao=Number.isFinite(a.orden)?a.orden:null,bo=Number.isFinite(b.orden)?b.orden:null;
    if(ao!==null&&bo!==null&&ao!==bo)return ao-bo;
    if(ao!==null&&bo===null)return 1; // Aportes nuevos aún sin posición: primero por fecha
    if(ao===null&&bo!==null)return -1;
    return cicloNum(b.ciclo)-cicloNum(a.ciclo)||fechaNum(b.fecha)-fechaNum(a.fecha)||String(a.titulo).localeCompare(String(b.titulo),'es');
  }
  function gruposVisibles(){
    const p=[...document.querySelectorAll('[data-pc]:checked')].map(x=>Number(x.dataset.pc));
    const tipos=[...document.querySelectorAll('[data-tipo]:checked')].map(x=>x.dataset.tipo);
    if(p.length)tipos.push('pc');
    const q=norm($('em-buscar').value);
    return Object.fromEntries(TIPOS.map(tipo=>[tipo,S.items.filter(e=>validTipo(e.tipo)&&e.tipo===tipo&&
      (S.ciclo==='todos'||e.ciclo===S.ciclo)&&tipos.includes(tipo)&&
      (tipo!=='pc'||p.includes(Number(e.pc)))&&
      (!q||norm([e.titulo,e.descripcion,e.ciclo,e.autor,NOMBRES[tipo],tipo==='pc'?'PC'+e.pc:''].join(' ')).includes(q))
    ).sort(ordenar)]));
  }
  function renderCiclos(){
    const caja=$('em-ciclos');
    const ciclos=[...new Set(S.items.map(e=>String(e.ciclo||'')).filter(x=>/^\d{4}-[12]$/.test(x)))].sort((a,b)=>cicloNum(b)-cicloNum(a));
    if(S.ciclo!=='todos'&&!ciclos.includes(S.ciclo))S.ciclo='todos';
    caja.replaceChildren();
    for(const ciclo of ['todos',...ciclos]){
      const b=document.createElement('button');b.type='button';b.dataset.ciclo=ciclo;
      b.textContent=ciclo==='todos'?'Todos los ciclos':ciclo;b.classList.toggle('active',S.ciclo===ciclo);
      b.setAttribute('aria-pressed',String(S.ciclo===ciclo));b.addEventListener('click',()=>{S.ciclo=ciclo;render();});
      caja.appendChild(b);
    }
  }
  // Misma ficha y jerarquía de botones que la sección de Ejercicios Resueltos.
  function fila(e,index,total){
    const div=document.createElement('article');
    div.className='ex-card em-row';
    div.hidden=index>=3&&!S.expandido[e.tipo];
    const tienePdfEnunciado=!!(e.pdfEnunciadoLocalId||D.rutaSegura(e.enunciadoPdfRuta,'pdf'));
    const tieneImagenAntigua=e.formato==='web'&&!!(e.imagenLocalId||D.rutaSegura(e.enunciadoRuta,'imagen'));
    const tieneEnunciado=tienePdfEnunciado||tieneImagenAntigua;
    const tieneSolucion=e.formato==='pdf'&&!!(e.pdfSolucionLocalId||D.rutaSegura(e.solucionPdfRuta,'pdf'));
    const tieneDocumentoPdf=tienePdfEnunciado||tieneSolucion;
    const esWeb=e.formato==='web';
    const etiquetaTipo=e.tipo==='pc'?`PC${esc(e.pc)}`:esc(NOMBRES[e.tipo]);
    const titulo=esc(e.titulo);
    const accionSolucion=esWeb||tieneDocumentoPdf?' data-accion="solucion" data-id="'+esc(e.id)+'" role="button" tabindex="0"':'';
    div.innerHTML=`<div class="ex-fileicon ex-format-${esWeb?'web':'pdf'}"><i class="fa-solid ${esWeb?'fa-book-open':'fa-file-pdf'}" aria-hidden="true"></i><span>${esWeb?'WEB':'PDF'}</span></div>
      <div class="ex-card-body">
        <div class="ex-tags"><span class="ex-tag ${e.origen==='estudiante'?'ex-tag-aporte':'ex-tag-clase'}">${e.origen==='estudiante'?'Aporte estudiantil':'Archivo docente'}</span><span class="ex-tag ex-tag-level">${etiquetaTipo}</span><span class="ex-tag em-cycle-tag">${esc(e.ciclo)}</span></div>
        <h4 class="ex-card-title" ${accionSolucion}>${titulo}</h4>
        <p class="ex-card-desc">${esc(e.descripcion||(esWeb?'Solución desarrollada en Markdown + LaTeX':'Documento PDF'))}</p>
        <div class="ex-meta">${esc(e.autor||'Sin autor')} · ${fechaBonita(e.fecha)}</div>
      </div>
      <div class="ex-card-actions em-row-actions">
        <button type="button" class="ex-btn ex-btn-mini ex-btn-preview" data-accion="enunciado" data-id="${esc(e.id)}" ${tieneEnunciado?'':'disabled title="Sin enunciado disponible"'}><i class="fa-regular ${tienePdfEnunciado?'fa-file-pdf':'fa-image'}" aria-hidden="true"></i> Enunciado</button>
        <button type="button" class="ex-btn ex-btn-mini" data-accion="solucion" data-id="${esc(e.id)}" ${esWeb||tieneDocumentoPdf?'':'disabled title="Sin documento PDF disponible"'}>${esWeb?'Leer solución':'Ver PDF'}</button>
        ${S.docente?`<div class="em-admin-row"><button type="button" class="ex-btn ex-btn-subtle ex-btn-mini" title="Subir posición" aria-label="Subir ${titulo}" data-accion="arriba" data-id="${esc(e.id)}" ${index===0?'disabled':''}><i class="fa-solid fa-arrow-up"></i></button><button type="button" class="ex-btn ex-btn-subtle ex-btn-mini" title="Bajar posición" aria-label="Bajar ${titulo}" data-accion="abajo" data-id="${esc(e.id)}" ${index===total-1?'disabled':''}><i class="fa-solid fa-arrow-down"></i></button><button type="button" class="ex-btn ex-btn-subtle ex-btn-mini" data-accion="editar" data-id="${esc(e.id)}"><i class="fa-solid fa-pen"></i> Editar</button><button type="button" class="ex-btn ex-btn-danger ex-btn-mini" data-accion="eliminar" data-id="${esc(e.id)}" aria-label="Eliminar ${titulo}"><i class="fa-solid fa-trash"></i></button></div>`:''}
      </div>`;
    return div;
  }
  function render(){
    renderCiclos();
    const grupos=gruposVisibles();let total=0;
    for(const tipo of TIPOS){
      const e=grupos[tipo],dest=$('em-lista-'+tipo),grupo=$('em-grupo-'+tipo);
      dest.replaceChildren();total+=e.length;
      $('em-count-'+tipo).textContent=`${e.length} ${e.length===1?'examen':'exámenes'}`;
      const activo=tipo==='pc'?[...document.querySelectorAll('[data-pc]')].some(x=>x.checked):document.querySelector(`[data-tipo="${tipo}"]`).checked;
      grupo.hidden=!activo;
      if(!activo)continue;
      if(!e.length){const p=document.createElement('p');p.className='ex-empty';p.textContent='No hay exámenes registrados para esta selección.';dest.appendChild(p);continue;}
      e.forEach((item,i)=>dest.appendChild(fila(item,i,e.length)));
      if(e.length>3){
        const footer=document.createElement('div');footer.className='em-expander';
        const boton=document.createElement('button');boton.type='button';
        const actualizar=()=>{
          const on=!!S.expandido[tipo];boton.innerHTML=on?'<i class="fa-solid fa-chevron-up"></i> Mostrar menos':'<i class="fa-solid fa-chevron-down"></i> Ver todos ('+e.length+')';
          boton.setAttribute('aria-expanded',String(on));
          dest.querySelectorAll('.em-row').forEach((r,i)=>{r.hidden=i>=3&&!on;});
        };
        boton.addEventListener('click',()=>{S.expandido[tipo]=!S.expandido[tipo];actualizar();});
        footer.appendChild(boton);dest.appendChild(footer);actualizar();
      }
    }
    $('em-sin-filtros').hidden=total!==0;
    $('em-docente-panel').hidden=!S.docente;
    $('em-docente').innerHTML=S.docente?'<i class="fa-solid fa-lock-open"></i> Cerrar Modo Docente':'<i class="fa-solid fa-lock"></i> Modo Docente';
    $('em-docente').setAttribute('aria-pressed',String(S.docente));
    $('em-aportar').innerHTML=S.docente?'<i class="fa-solid fa-plus"></i> Subir examen':'<i class="fa-solid fa-file-circle-plus"></i> Aportar examen';
    $('em-aportar').setAttribute('aria-label',S.docente?'Registrar un examen como docente':'Aportar un examen como visitante');
    $('em-descartar').disabled=!hayCambios();
  }
  function actualizarChecks(){
    const pcs=[...document.querySelectorAll('[data-pc]')];
    $('em-tipo-pc').checked=pcs.every(x=>x.checked);
    $('em-tipo-pc').indeterminate=pcs.some(x=>x.checked)&&!pcs.every(x=>x.checked);
    const otros=[...document.querySelectorAll('[data-tipo]')];
    $('em-todos-tipos').checked=pcs.every(x=>x.checked)&&otros.every(x=>x.checked);
    $('em-todos-tipos').indeterminate=!$('em-todos-tipos').checked&&(pcs.some(x=>x.checked)||otros.some(x=>x.checked));
  }
  function formato(){
    const pdf=$('em-formato').value==='pdf';
    $('em-pdf-campos').hidden=!pdf;$('em-web-campos').hidden=pdf;
    $('em-pdf-ayuda').hidden=!pdf;
    $('em-contenido').required=!pdf;
    // El enunciado PDF es opcional: puede estar integrado en el mismo artículo.
    $('em-pdf-enunciado-web').required=false;
  }
  function tipoForm(){ $('em-pc-wrap').hidden=$('em-tipo').value!=='pc'; }
  function cerrarEditor(){S.editando=null;S.rol=null;$('em-editor').hidden=true;$('em-form').reset();}
  async function abrirEditor(rol='estudiante',e=null){
    if(e&&!S.docente)return;
    // El rol se deriva siempre del modo actual: evita mostrar instrucciones de alumnos al docente.
    rol=S.docente?'docente':'estudiante';
    S.rol=rol;S.editando=e?.id||null;$('em-form').reset();
    $('em-editor-title').textContent=e?'Editar examen':rol==='docente'?'Registrar examen':'Aportar examen';
    const ayuda=$('em-editor-ayuda');
    ayuda.hidden=false;
    ayuda.textContent=rol==='docente'
      ?'Registro docente: los archivos y cambios se guardarán como borradores en este navegador. Para que los vean los alumnos, usa «Preparar publicación» e incorpora el ZIP a GitHub.'
      :'Aporte de alumno o visitante: al guardar se generará un borrador local. Descarga su ZIP y entrégalo al docente o delegado; no se publicará automáticamente y no podrás editarlo desde esta interfaz.';
    $('em-guardar').innerHTML=rol==='docente'
      ?'<i class="fa-solid fa-floppy-disk" aria-hidden="true"></i> Guardar examen (borrador)'
      :'<i class="fa-solid fa-file-arrow-up" aria-hidden="true"></i> Guardar y preparar aporte';
    $('em-tipo').value=e?.tipo||'pc';$('em-pc').value=String(e?.pc||1);
    $('em-ciclo').value=e?.ciclo||'2026-2';$('em-autor').value=e?.autor||'';
    $('em-titulo').value=e?.titulo||'';$('em-descripcion').value=e?.descripcion||'';
    $('em-formato').value=e?.formato||'pdf';
    $('em-actual-enunciado-pdf').textContent=e&&(e.enunciadoPdfRuta||e.pdfEnunciadoLocalId)?'Ya existe un enunciado PDF. Si no eliges otro, se conserva.':'';
    $('em-actual-solucion-pdf').textContent=e&&(e.solucionPdfRuta||e.pdfSolucionLocalId)?'Ya existe una solución PDF. Si no eliges otra, se conserva.':'';
    $('em-actual-enunciado-web').textContent=e&&(e.enunciadoPdfRuta||e.pdfEnunciadoLocalId)
      ?'Ya existe un PDF del enunciado. Si no eliges otro, se conserva.'
      :e&&(e.enunciadoRuta||e.imagenLocalId)
        ?'Este examen antiguo tiene una imagen. Adjunta un PDF para sustituirla y mostrar todas sus páginas.'
        :'Opcional: si el enunciado ya figura en el Markdown + LaTeX, no necesitas un PDF separado.';
    tipoForm();formato();
    $('em-editor').hidden=false;$('em-aporte-resultado').hidden=true;
    if(e?.formato==='web'){
      $('em-contenido').value='Cargando desarrollo...';
      try{$('em-contenido').value=await D.markdown(e);}catch(err){$('em-contenido').value='';mensaje(err.message,true);}
    }
    $('em-editor').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function comprobarArchivo(file,tipo){
    if(!file)return;
    const img=tipo==='imagen',max=(img?8:25)*1024*1024;
    if(file.size>max||file.size===0)throw new Error(`Archivo demasiado grande o vacío (máx. ${img?8:25} MB).`);
    if(img){if(!/\.(png|jpe?g|webp)$/i.test(file.name)||!['image/png','image/jpeg','image/webp'].includes(file.type))throw new Error('La imagen debe ser PNG, JPG o WebP.');}
    else if(!/\.pdf$/i.test(file.name)||file.type&&!['application/pdf','application/octet-stream'].includes(file.type))throw new Error('Se requiere un archivo PDF.');
  }
  async function guardarForm(ev){
    ev.preventDefault();
    const rol=S.rol;if(!rol||(rol==='docente'&&!S.docente)||(S.editando&&!S.docente))return;
    const anterior=S.items.find(x=>x.id===S.editando)||null;
    const id=anterior?.id||D.id(),tipo=$('em-tipo').value,elCiclo=$('em-ciclo').value.trim();
    const pdf=$('em-formato').value==='pdf';
    if(!validTipo(tipo)||!/^\d{4}-[12]$/.test(elCiclo))return mensaje('Selecciona un tipo y un ciclo válido, por ejemplo 2026-2.',true);
    const archivoEnunciado=$('em-pdf-enunciado').files[0],archivoSolucion=$('em-pdf-solucion').files[0],archivoEnunciadoWeb=$('em-pdf-enunciado-web').files[0];
    try{comprobarArchivo(archivoEnunciado,'pdf');comprobarArchivo(archivoSolucion,'pdf');comprobarArchivo(archivoEnunciadoWeb,'pdf');}
    catch(err){return mensaje(err.message,true);}
    const formatoNuevo=$('em-formato').value,igual=anterior?.formato===formatoNuevo;
    const item={id,tipo,pc:tipo==='pc'?Number($('em-pc').value):null,ciclo:elCiclo,
      titulo:$('em-titulo').value.trim(),descripcion:$('em-descripcion').value.trim(),autor:$('em-autor').value.trim(),
      origen:anterior?.origen||(rol==='docente'?'docente':'estudiante'),formato:formatoNuevo,
      fecha:anterior?.fecha||new Date().toISOString(),
      ...(Number.isFinite(anterior?.orden)?{orden:anterior.orden}:{}),
      ruta:igual?anterior?.ruta||null:null,contenido:null,
      enunciadoRuta:igual?anterior?.enunciadoRuta||null:null,imagenLocalId:igual?anterior?.imagenLocalId||null:null,
      // Enunciado PDF se reutiliza si cambia la solución de PDF a web o viceversa.
      enunciadoPdfRuta:anterior?.enunciadoPdfRuta||null,pdfEnunciadoLocalId:anterior?.pdfEnunciadoLocalId||null,
      solucionPdfRuta:igual?anterior?.solucionPdfRuta||null:null,pdfSolucionLocalId:igual?anterior?.pdfSolucionLocalId||null:null};
    if(!item.titulo||!item.autor)return mensaje('Completa título y autor.',true);
    if(pdf){
      if(!archivoEnunciado&&!archivoSolucion&&!item.enunciadoPdfRuta&&!item.solucionPdfRuta&&!item.pdfEnunciadoLocalId&&!item.pdfSolucionLocalId)return mensaje('Adjunta al menos el PDF del enunciado o el de la solución.',true);
      item.contenido=null;item.ruta=null;item.enunciadoRuta=null;item.imagenLocalId=null;
    } else {
      item.contenido=$('em-contenido').value.trim();
      if(!item.contenido)return mensaje('Escribe el contenido del examen en Markdown + LaTeX.',true);
      // El PDF del enunciado pertenece a ambos formatos: PDF y Markdown + LaTeX.
      // Se conserva al editar o al cambiar entre ambos formatos.
      item.solucionPdfRuta=null;item.pdfSolucionLocalId=null;
      if(archivoEnunciadoWeb){item.enunciadoRuta=null;item.imagenLocalId=null;}
    }
    $('em-guardar').disabled=true;
    try{
      const archivos=pdf
        ?[[archivoEnunciado,'pdfEnunciadoLocalId','pdf-enunciado'],[archivoSolucion,'pdfSolucionLocalId','pdf-solucion']]
        :[[archivoEnunciadoWeb,'pdfEnunciadoLocalId','pdf-enunciado']];
      for(const [file,campo,prefijo] of archivos){
        if(!file)continue;
        const key=`${prefijo}-${id}`;await D.guardarArchivo(key,file);item[campo]=key;
      }
      D.guardar(item,S.publicados);
      cerrarEditor();refrescar();
      if(rol==='estudiante'){
        S.aporteId=id;$('em-aporte-resultado').hidden=false;
        mensaje('Aporte guardado localmente. Descarga su ZIP y envíalo al docente/delegado. No se ha publicado en el sitio.');
        $('em-aporte-resultado').scrollIntoView({behavior:'smooth',block:'start'});
      } else mensaje('Examen guardado como borrador local. Utiliza «Preparar publicación» para llevarlo a GitHub.');
    }catch(err){mensaje('No se pudo guardar: '+err.message,true);}finally{$('em-guardar').disabled=false;}
  }
  function mover(id,delta){
    if(!S.docente)return;
    const e=S.items.find(x=>x.id===id);if(!e)return;
    // Se reordena únicamente dentro de la sección y los filtros visibles.
    const grupo=gruposVisibles()[e.tipo],i=grupo.findIndex(x=>x.id===id),j=i+delta;
    if(i<0||j<0||j>=grupo.length)return;
    [grupo[i],grupo[j]]=[grupo[j],grupo[i]];
    // Posiciones persistentes a nivel de sección; no se eliminan registros al filtrar.
    const global=S.items.filter(x=>x.tipo===e.tipo).sort(ordenar);
    const posiciones=grupo.map(x=>global.findIndex(y=>y.id===x.id));
    const nuevos=[...global];posiciones.sort((a,b)=>a-b).forEach((pos,k)=>{nuevos[pos]=grupo[k];});
    try{nuevos.forEach((x,k)=>D.guardar({...x,orden:k},S.publicados));refrescar();mensaje('Orden actualizado como borrador. Se publicará al exportar el ZIP.');}
    catch(err){mensaje(err.message,true);}
  }
  function borrar(id){
    if(!S.docente)return;
    const e=S.items.find(x=>x.id===id);if(!e||!confirm(`¿Eliminar «${e.titulo}» del catálogo?`))return;
    D.eliminar(id,S.publicados);refrescar();mensaje('Examen eliminado del borrador. El catálogo público no cambia hasta publicar.');
  }
  async function abrirDocumento(e,tipo){
    try{
      const soloPdfEnunciado=tipo==='solucion'&&e.formato==='pdf'&&!e.pdfSolucionLocalId&&!D.rutaSegura(e.solucionPdfRuta,'pdf');
      const imagen=tipo==='enunciado'&&!e.pdfEnunciadoLocalId&&!D.rutaSegura(e.enunciadoPdfRuta,'pdf')&&e.formato==='web';
      const localId=imagen?e.imagenLocalId:(tipo==='enunciado'||soloPdfEnunciado)?e.pdfEnunciadoLocalId:e.pdfSolucionLocalId;
      const ruta=imagen?e.enunciadoRuta:(tipo==='enunciado'||soloPdfEnunciado)?e.enunciadoPdfRuta:e.solucionPdfRuta;
      let url=ruta,esBlob=false;
      if(localId){const o=await D.leerArchivo(localId);if(!o?.blob)throw new Error('No se encontró el archivo guardado en este navegador.');url=URL.createObjectURL(o.blob);esBlob=true;}
      else if(!D.rutaSegura(ruta,imagen?'imagen':'pdf'))throw new Error('No hay archivo publicado o la ruta no es válida.');
      const node=document.createElement(imagen?'img':'iframe');
      if(imagen)node.alt=`Enunciado antiguo de ${e.titulo}`;else node.title=`PDF completo (todas las páginas): ${e.titulo}`;
      node.src=url;abrirModal(`${soloPdfEnunciado?'Documento PDF':tipo==='enunciado'?'Enunciado':'Solución'} · ${e.titulo}`,node);
      if(esBlob)S.modalUrl=url;
    }catch(err){mensaje(err.message,true);}
  }
  function abrirModal(titulo,nodo){cerrarModal();S.modalFoco=document.activeElement;$('em-modal-title').textContent=titulo;$('em-modal-body').replaceChildren(nodo);S.modalOverflow=document.body.style.overflow;$('em-modal').hidden=false;document.body.style.overflow='hidden';$('em-modal-cerrar').focus();}
  function cerrarModal(){if($('em-modal').hidden)return;$('em-modal').hidden=true;document.body.style.overflow=S.modalOverflow||'';$('em-modal-body').replaceChildren();if(S.modalUrl)URL.revokeObjectURL(S.modalUrl);S.modalUrl=null;if(S.modalFoco?.isConnected)S.modalFoco.focus({preventScroll:true});}
  // Lector Markdown + MathJax + TikZJax.
  // Los bloques TikZ se extraen ANTES de pasar el HTML por DOMPurify:
  // DOMPurify debe seguir prohibiendo scripts ejecutables de los aportes.
  function prepararCodigoTikz(codigo){
    // Normalización completa homologada con Ejercicios Resueltos y Material del Curso.
    return codigo
      .replace(/^[ \t]*%.*$/gm,'')
      .replace(/([^\\])%.*$/gm,'$1')
      .replace(/\\boldsymbol\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,'$1')
      .replace(/\\dfrac\s*\{/g,'\\frac{')
      .replace(/\\text\s*\{/g,'\\mathrm{')
      .replace(/\$\\val\$/g,'\\val')
      .replace(/\$([^$]+)\$/g,(_,formula)=>'$'+formula
        .replace(/(\d)\.(\d)/g,'$1\\mbox{.}$2')
        .replace(/\//g,'\\mbox{/}')+'$')
      .trim();
  }
  function renderMarkdown(md,contenedor){
    contenedor.replaceChildren();
    if(!window.marked||!window.DOMPurify){
      const p=document.createElement('pre');p.textContent=md;contenedor.appendChild(p);return;
    }
    const dibujos=[],bloques=[],inline=[];
    // Los marcadores son los únicos HTML generados para las figuras.
    // El fuente TikZ real queda fuera del proceso Markdown/DOMPurify.
    let raw=String(md).replace(/<script\s+type=["']text\/tikz["']([^>]*)>([\s\S]*?)<\/script>/gi,(_,attrs,codigo)=>{
      const claseReal=/\bdata-real\b/i.test(attrs)?' tikz-real':'';
      const indice=dibujos.push(prepararCodigoTikz(codigo))-1;
      return `\n\n<div class="tikz-figure${claseReal}" data-em-tikz="${indice}"></div>\n\n`;
    });
    raw=raw.replace(/\$\$([\s\S]+?)\$\$/g,(_,tex)=>`\n\n<div class="ex-mathblock" data-em-math="${bloques.push(tex)-1}"></div>\n\n`);
    raw=raw.replace(/\$((?:\\.|[^$\n])+?)\$/g,(_,tex)=>`EMINLINEFORMULA${inline.push(tex)-1}FIN`);
    contenedor.innerHTML=window.DOMPurify.sanitize(window.marked.parse(raw),{
      USE_PROFILES:{html:true},ADD_ATTR:['data-em-math','data-em-tikz'],
      FORBID_TAGS:['script','iframe','object','embed','style'],FORBID_ATTR:['style']
    });
    contenedor.querySelectorAll('[data-em-math]').forEach(el=>{
      el.textContent=`$$${bloques[Number(el.dataset.emMath)]}$$`;
      el.removeAttribute('data-em-math');
    });
    const walk=document.createTreeWalker(contenedor,NodeFilter.SHOW_TEXT),nodes=[];
    while(walk.nextNode())if(walk.currentNode.nodeValue.includes('EMINLINEFORMULA'))nodes.push(walk.currentNode);
    nodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(/EMINLINEFORMULA(\d+)FIN/g,(_,i)=>`$${inline[Number(i)]}$`);});
    contenedor.querySelectorAll('a').forEach(a=>{
      if(!/^https?:$/i.test(a.protocol))a.removeAttribute('href');
      else {a.target='_blank';a.rel='noopener noreferrer';}
    });
    contenedor.querySelectorAll('img').forEach(img=>{
      img.loading='lazy';
      img.alt=img.alt||'Ilustración del examen';
    });
    contenedor.querySelectorAll('p').forEach(p=>{
      if(/^Figura\s+(?:(?:N(?:[.º°]|o\.?)?|N[úu]mero)\s*)?\d/i.test(p.textContent.trim()))p.classList.add('article-caption');
    });
    // Reconstruimos exclusivamente scripts inertes de tipo text/tikz,
    // sin volver a introducir HTML arbitrario de los aportantes.
    contenedor.querySelectorAll('[data-em-tikz]').forEach(figure=>{
      const i=Number(figure.getAttribute('data-em-tikz'));
      figure.removeAttribute('data-em-tikz');
      if(!dibujos[i])return;
      const script=document.createElement('script');
      script.type='text/tikz';
      script.textContent=dibujos[i];
      figure.appendChild(script);
    });
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([contenedor]).catch(console.warn);
    // Mismo disparador usado en materiales.html para TikZJax v1.
    // Sus fuentes se insertaron después del onload inicial de la página.
    if(dibujos.length && typeof window.onload==='function'){
      setTimeout(()=>{if(contenedor.isConnected)window.onload();},60);
    }
  }
  function cambiarVista(vista){
    $('em-vista-lista').hidden=vista!=='lista';
    $('em-lector').hidden=vista!=='lector';
    // La vista lectora reemplaza el catálogo completo, no se agrega debajo de él.
    const main=document.querySelector('.content-area');
    main.scrollTo?.({top:0,behavior:'instant'});
  }
  // Índice jerárquico: comparte el patrón visual y de navegación de materiales.html.
  let titulosIndice = [];
  let indiceActivoId = '';
  let scrollIndicePendiente = false;
  const enlacesIndice = new Map();

  function desplegarGrupo(grupo, abierto){
    if(!grupo)return;
    grupo.classList.toggle('toc-expanded',abierto);
    const boton=grupo.querySelector('.toc-expand');
    if(boton)boton.setAttribute('aria-expanded',String(abierto));
  }
  function activarIndice(id){
    const enlace=enlacesIndice.get(id);
    if(!enlace)return;
    enlacesIndice.forEach((a,clave)=>{
      const activo=clave===id;
      a.classList.toggle('is-active',activo);
      if(activo)a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
    // Contraer los otros apartados solo cuando se cambia de sección.
    if(indiceActivoId!==id){
      const grupoActivo=enlace.closest('.toc-section');
      $('em-indice-links').querySelectorAll('.toc-section').forEach(grupo=>{
        desplegarGrupo(grupo,grupo===grupoActivo);
      });
      indiceActivoId=id;
    }
  }
  function navegarIndice(nodo){
    if(!nodo)return;
    activarIndice(nodo.id);
    nodo.scrollIntoView({
      behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',
      block:'start'
    });
  }
  function actualizarIndiceScroll(){
    scrollIndicePendiente=false;
    if($('em-lector').hidden||!titulosIndice.length)return;
    const zona=document.querySelector('.content-area');
    const umbral=zona.getBoundingClientRect().top+115;
    let activo=titulosIndice[0].id;
    for(const titulo of titulosIndice){
      if(titulo.getBoundingClientRect().top<=umbral)activo=titulo.id;
      else break;
    }
    activarIndice(activo);
  }
  function crearIndice(){
    const destino=$('em-indice-links'),indice=$('em-lector-indice');
    destino.replaceChildren();
    enlacesIndice.clear();
    indiceActivoId='';
    titulosIndice=[...$('em-lector-contenido').querySelectorAll('h2,h3')];
    indice.hidden=titulosIndice.length===0;
    if(!titulosIndice.length)return;
    const existeH2=titulosIndice.some(t=>t.tagName==='H2');
    const lista=document.createElement('ul');
    lista.className='toc-sections';
    let grupoActual=null;
    titulosIndice.forEach((titulo,i)=>{
      titulo.id=`em-seccion-${i}`;
      const principal=titulo.tagName==='H2'||!existeH2||!grupoActual;
      const enlace=document.createElement('a');
      enlace.className='toc-link';
      enlace.href='#'+titulo.id;
      enlace.textContent=titulo.textContent.trim();
      enlace.addEventListener('click',ev=>{ev.preventDefault();navegarIndice(titulo);});
      enlacesIndice.set(titulo.id,enlace);
      if(principal){
        grupoActual=document.createElement('li');
        grupoActual.className='toc-section';
        const fila=document.createElement('div');
        fila.className='toc-section-row';
        fila.appendChild(enlace);
        grupoActual.appendChild(fila);
        lista.appendChild(grupoActual);
      } else {
        let hijos=grupoActual.querySelector('.toc-children');
        if(!hijos){
          hijos=document.createElement('ul');
          hijos.className='toc-children';
          const boton=document.createElement('button');
          boton.type='button';boton.className='toc-expand';
          boton.setAttribute('aria-label','Mostrar u ocultar subapartados');
          boton.setAttribute('aria-expanded','false');
          const icono=document.createElement('i');
          icono.className='fa-solid fa-chevron-right';
          icono.setAttribute('aria-hidden','true');
          boton.appendChild(icono);
          const grupo=grupoActual;
          boton.addEventListener('click',()=>{
            const nuevo=!grupo.classList.contains('toc-expanded');
            destino.querySelectorAll('.toc-section').forEach(g=>desplegarGrupo(g,g===grupo&&nuevo));
          });
          grupoActual.querySelector('.toc-section-row').appendChild(boton);
          grupoActual.appendChild(hijos);
        }
        enlace.classList.add('toc-sub-link');
        const li=document.createElement('li');li.appendChild(enlace);hijos.appendChild(li);
      }
    });
    destino.appendChild(lista);
    activarIndice(titulosIndice[0].id);
  }
  // Secuencias de lectura independientes por tipo. PC1, PC2, PC3 y PC4
  // se tratan como categorías distintas; PDF nunca entra en el recorrido.
  // Se conservan todos los ciclos de la misma categoría, aunque el catálogo
  // esté filtrado a uno, para facilitar el repaso histórico de evaluaciones.
  function claveNavegacionWeb(e){
    if(!e||!validTipo(e.tipo))return null;
    if(e.tipo==='pc'){
      const practica=Number(e.pc);
      return [1,2,3,4].includes(practica)?`pc-${practica}`:null;
    }
    return e.tipo;
  }
  function vecinosNavegacionWeb(e){
    const clave=claveNavegacionWeb(e);
    if(!clave||e.formato!=='web')return {anterior:null,siguiente:null,clave:null};
    const lista=S.items.filter(item=>item.formato==='web'&&claveNavegacionWeb(item)===clave).sort(ordenar);
    const index=lista.findIndex(item=>String(item.id)===String(e.id));
    if(index<0)return {anterior:null,siguiente:null,clave};
    return {anterior:lista[index-1]||null,siguiente:lista[index+1]||null,clave};
  }
  let vecinoWebAnterior=null,vecinoWebSiguiente=null,solicitudLecturaWeb=0;
  function actualizarNavegacionWeb(e){
    const panel=$('em-nav-web');
    const {anterior,siguiente,clave}=vecinosNavegacionWeb(e);
    vecinoWebAnterior=anterior;vecinoWebSiguiente=siguiente;
    panel.hidden=!anterior&&!siguiente;
    $('em-nav-anterior').hidden=!anterior;
    $('em-nav-siguiente').hidden=!siguiente;
    if(panel.hidden)return;
    $('em-nav-descripcion').textContent='Continúa repasando soluciones de exámenes de otros ciclos.';
    if(anterior){
      $('em-nav-anterior-destino').textContent=`${anterior.ciclo} · ${anterior.titulo}`;
      $('em-nav-anterior').title=`Abrir: ${anterior.titulo}`;
    }
    if(siguiente){
      $('em-nav-siguiente-destino').textContent=`${siguiente.ciclo} · ${siguiente.titulo}`;
      $('em-nav-siguiente').title=`Abrir: ${siguiente.titulo}`;
    }
  }
  async function abrirSolucionWeb(e){
    const solicitud=++solicitudLecturaWeb;
    cambiarVista('lector');
    $('em-lector-titulo').textContent=e.titulo;
    $('em-lector-meta').textContent=`${e.ciclo} · ${e.tipo==='pc'?'PC'+e.pc:NOMBRES[e.tipo]} · ${e.autor||'Sin autor'} · ${fechaBonita(e.fecha)}`;
    const out=$('em-lector-contenido');out.textContent='Cargando desarrollo...';
    $('em-lector-indice').hidden=true;
    $('em-nav-web').hidden=true;
    vecinoWebAnterior=null;vecinoWebSiguiente=null;
    try{
      const markdown=await D.markdown(e);
      // Evita que una respuesta antigua reemplace un examen abierto después.
      if(solicitud!==solicitudLecturaWeb)return;
      renderMarkdown(markdown,out);
      crearIndice();
      actualizarNavegacionWeb(e);
      if(window.MathJax?.typesetPromise && !$('em-lector-indice').hidden){
        window.MathJax.typesetPromise([$('em-indice-links')]).catch(console.warn);
      }
    }catch(err){
      if(solicitud===solicitudLecturaWeb){out.textContent='No se pudo abrir: '+err.message;$('em-nav-web').hidden=true;}
    }
  }
  function volver(){solicitudLecturaWeb++;$('em-nav-web').hidden=true;cambiarVista('lista');}
  async function exportarAporte(){
    const e=S.items.find(x=>x.id===S.aporteId);if(!e)return mensaje('No se ha encontrado el aporte local.',true);
    if(!window.JSZip)return mensaje('Falta la biblioteca ZIP (lib/jszip.min.js).',true);
    $('em-descargar-aporte').disabled=true;
    try{
      const zip=new JSZip(),item=await D.empaquetar(e,zip);
      zip.file('aporte-examen.json',JSON.stringify(item,null,2)+'\n');
      zip.file('LEEME.txt','APORTE DE EXAMEN MC325\n\nEste ZIP NO se publica automáticamente. Entrégalo al delegado/docente.\nEl docente puede usar Importar aporte ZIP en Exámenes Pasados, luego Preparar publicación para GitHub.\n');
      const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE'});
      descargar(blob,`aporte-examen-${e.ciclo}-${e.id.slice(0,8)}.zip`);
      mensaje('Paquete ZIP creado. Entrégalo al delegado o docente para que pueda publicarlo.');
    }catch(err){mensaje('No se pudo generar el ZIP: '+err.message,true);}finally{$('em-descargar-aporte').disabled=false;}
  }
  function descargar(blob,nombre){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=nombre;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);}
  async function importarArchivo(file){
    if(!S.docente||!file)return;
    if(!/\.zip$/i.test(file.name)||file.size>65*1024*1024)return mensaje('Selecciona un ZIP de aporte de hasta 65 MB.',true);
    try{
      if(!window.JSZip)throw new Error('Biblioteca JSZip no disponible.');
      const zip=await JSZip.loadAsync(file),meta=zip.file('aporte-examen.json');
      if(!meta)throw new Error('El ZIP no contiene aporte-examen.json.');
      const raw=await meta.async('string');if(raw.length>100000)throw new Error('Metadatos demasiado extensos.');
      const e=JSON.parse(raw);
      if(!e||!validTipo(e.tipo)||!['pdf','web'].includes(e.formato)||!/^\d{4}-[12]$/.test(e.ciclo)||
         !String(e.titulo||'').trim()||!String(e.autor||'').trim()||(e.tipo==='pc'&&![1,2,3,4].includes(Number(e.pc))))throw new Error('Los datos del aporte no son válidos.');
      const id=D.id(),item={id,origen:'estudiante',tipo:e.tipo,pc:e.tipo==='pc'?Number(e.pc):null,
        ciclo:e.ciclo,titulo:String(e.titulo).slice(0,180),descripcion:String(e.descripcion||'').slice(0,300),
        autor:String(e.autor).slice(0,100),formato:e.formato,fecha:e.fecha&&Number.isFinite(Date.parse(e.fecha))?e.fecha:new Date().toISOString(),
        ruta:null,enunciadoRuta:null,enunciadoPdfRuta:null,solucionPdfRuta:null};
      const recuperar=async(r,tipo,limite)=>{
        if(!r)return null;if(!D.rutaSegura(r,tipo))throw new Error('Ruta de archivo no permitida en aporte.');
        const z=zip.file(r);if(!z)throw new Error('Falta '+r);
        // Verificar tamaño descomprimido sin extraer archivos ajenos.
        if(z._data?.uncompressedSize>limite)throw new Error('Archivo demasiado grande en el ZIP.');
        const blob=await z.async('blob');if(blob.size>limite)throw new Error('Archivo demasiado grande.');
        return new File([blob],r.split('/').pop(),{type:tipo==='imagen'?(r.endsWith('.png')?'image/png':r.endsWith('.webp')?'image/webp':'image/jpeg'):'application/pdf'});
      };
      if(e.formato==='web'){
        if(!D.rutaSegura(e.ruta,'markdown'))throw new Error('Falta Markdown del aporte.');
        const z=zip.file(e.ruta);if(!z||z._data?.uncompressedSize>2*1024*1024)throw new Error('Markdown ausente o demasiado extenso.');
        item.contenido=await z.async('string');
        if(!item.contenido.trim())throw new Error('El Markdown del aporte está vacío.');
        if(item.contenido.length>2*1024*1024)throw new Error('Markdown demasiado extenso.');
        // Enunciado PDF opcional. Se admite también la imagen de ZIP antiguos.
        const pdf=await recuperar(e.enunciadoPdfRuta,'pdf',25*1024*1024);
        if(pdf){const key=`pdf-enunciado-${id}`;await D.guardarArchivo(key,pdf);item.pdfEnunciadoLocalId=key;}
        const image=await recuperar(e.enunciadoRuta,'imagen',8*1024*1024);
        if(image&&!pdf){const key=`imagen-${id}`;await D.guardarArchivo(key,image);item.imagenLocalId=key;}
      } else {
        for(const [ruta,campo,sufijo] of [[e.enunciadoPdfRuta,'pdfEnunciadoLocalId','pdf-enunciado'],[e.solucionPdfRuta,'pdfSolucionLocalId','pdf-solucion']]){
          const pdf=await recuperar(ruta,'pdf',25*1024*1024);
          if(pdf){const key=`${sufijo}-${id}`;await D.guardarArchivo(key,pdf);item[campo]=key;}
        }
        if(!item.pdfEnunciadoLocalId&&!item.pdfSolucionLocalId)throw new Error('El aporte no contiene archivos PDF.');
      }
      D.guardar(item,S.publicados);refrescar();mensaje('Aporte importado como borrador docente. Compruébalo y prepara su publicación en GitHub.');
    }catch(err){mensaje('No se pudo importar el aporte: '+err.message,true);}
  }
  function fechaLocal(s){
    if(!s)return new Date(NaN);
    // Las fechas sin zona se interpretan como hora del curso, igual que Calendario.
    if(typeof s==='string'){
      const m=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(s);
      if(m)return new Date(Number(m[1]),Number(m[2])-1,Number(m[3]),Number(m[4]||0),Number(m[5]||0),Number(m[6]||0));
    }
    return new Date(s);
  }
  async function proximo(){
    const caja=$('em-proximo');
    try{
      const eventos=(await window.MC325Datos.leer('eventos')).items;
      const ahora=new Date();
      const candidatos=eventos.filter(e=>e?.tipo==='examen'&&e.start&& !Number.isNaN(fechaLocal(e.start).getTime()))
        .filter(e=>{
          const inicio=fechaLocal(e.start);
          if(e.end)return fechaLocal(e.end).getTime()>=ahora.getTime();
          if(e.allDay!==false||!String(e.start).includes('T'))return new Date(inicio.getFullYear(),inicio.getMonth(),inicio.getDate()+1).getTime()>ahora.getTime();
          return inicio.getTime()>=ahora.getTime();
        }).sort((a,b)=>fechaLocal(a.start)-fechaLocal(b.start));
      caja.replaceChildren();
      if(!candidatos.length){caja.innerHTML='<p>No hay próximos exámenes registrados en el calendario.</p><a href="calendario.html">Abrir calendario</a>';return;}
      const e=candidatos[0],fecha=fechaLocal(e.start),mes=fecha.toLocaleDateString('es-PE',{month:'short'}).replace('.','').toUpperCase();
      const h= e.allDay===false&&String(e.start).includes('T')?fecha.toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit',hour12:false}):null;
      const fin=e.end?fechaLocal(e.end).toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit',hour12:false}):null;
      const detalle=h?`Horario: ${h}${fin?' – '+fin:''}`:'Todo el día';
      caja.innerHTML=`<div class="activity-item"><div class="date-box"><span>${esc(mes)}</span><strong>${fecha.getDate()}</strong></div><div class="act-info"><h4>${esc(e.title||'Examen')}</h4><p>${esc(detalle)} · ${fecha.getFullYear()}</p></div></div><a href="calendario.html">Ver calendario completo</a>`;
    }catch(err){caja.innerHTML=`<p>No fue posible consultar el calendario: ${esc(err.message)}</p><a href="calendario.html">Abrir calendario</a>`;}
  }
  async function iniciar(){
    $('em-docente').addEventListener('click',()=>{
      S.docente=!S.docente;
      // Cambiar de modo cierra el formulario y los resultados propios del modo anterior.
      cerrarEditor();
      cambiarVista('lista');
      $('em-aporte-resultado').hidden=true;
      mensaje('');
      render();
    });
    $('em-aportar').addEventListener('click',()=>abrirEditor(S.docente?'docente':'estudiante'));
    $('em-agregar').addEventListener('click',()=>abrirEditor('docente'));
    $('em-cerrar-editor').addEventListener('click',cerrarEditor);
    $('em-cancelar').addEventListener('click',cerrarEditor);
    $('em-cerrar-aporte').addEventListener('click',()=>{$('em-aporte-resultado').hidden=true;});
    $('em-formato').addEventListener('change',formato);$('em-tipo').addEventListener('change',tipoForm);
    $('em-form').addEventListener('submit',guardarForm);$('em-buscar').addEventListener('input',render);
    $('em-volver').addEventListener('click',volver);$('em-modal-cerrar').addEventListener('click',cerrarModal);
    $('em-nav-anterior').addEventListener('click',()=>{if(vecinoWebAnterior)abrirSolucionWeb(vecinoWebAnterior);});
    $('em-nav-siguiente').addEventListener('click',()=>{if(vecinoWebSiguiente)abrirSolucionWeb(vecinoWebSiguiente);});
    $('em-indice-inicio').addEventListener('click',()=>navegarIndice($('em-lector-titulo')));
    document.querySelector('.content-area').addEventListener('scroll',()=>{
      if(!scrollIndicePendiente){
        scrollIndicePendiente=true;
        requestAnimationFrame(actualizarIndiceScroll);
      }
    },{passive:true});
    $('em-descargar-aporte').addEventListener('click',exportarAporte);
    $('em-importar').addEventListener('change',async ev=>{await importarArchivo(ev.target.files[0]);ev.target.value='';});
    $('em-descartar').addEventListener('click',()=>{
      if(!S.docente||!confirm('¿Descartar TODOS los borradores locales de exámenes, incluso aportes aún no publicados?'))return;
      D.limpiar();refrescar();mensaje('Se descartaron los cambios locales; no se alteró GitHub.');
    });
    $('em-listas').addEventListener('keydown',ev=>{
      if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches('.ex-card-title[data-accion]')){
        ev.preventDefault();ev.target.click();
      }
    });
    $('em-listas').addEventListener('click',ev=>{
      const b=ev.target.closest('[data-accion]');if(!b)return;
      const e=S.items.find(x=>String(x.id)===b.dataset.id);if(!e)return;
      const a=b.dataset.accion;
      if(a==='enunciado')abrirDocumento(e,'enunciado');
      if(a==='solucion')e.formato==='web'?abrirSolucionWeb(e):abrirDocumento(e,'solucion');
      if(a==='editar')abrirEditor('docente',e);
      if(a==='eliminar')borrar(e.id);
      if(a==='arriba'||a==='abajo')mover(e.id,a==='arriba'?-1:1);
    });
    $('em-tipo-pc').addEventListener('change',ev=>{document.querySelectorAll('[data-pc]').forEach(x=>x.checked=ev.target.checked);actualizarChecks();render();});
    $('em-todos-tipos').addEventListener('change',ev=>{document.querySelectorAll('#em-tipos input:not(#em-todos-tipos)').forEach(x=>x.checked=ev.target.checked);actualizarChecks();render();});
    document.querySelectorAll('[data-pc], [data-tipo]').forEach(x=>x.addEventListener('change',()=>{actualizarChecks();render();}));
    try{S.publicados=await D.publicados();refrescar();
      const conflict=D.existeConflicto(S.publicados);
      if(conflict)mensaje('Atención: el repositorio cambió desde que se creó este borrador. No prepares una publicación hasta conciliar los datos.',true);
      else if(hayCambios())mensaje('Hay exámenes o cambios guardados solo en este navegador. No aparecen en GitHub Pages para otros visitantes.');
    }catch(err){S.publicados=[];refrescar();mensaje('No se pudo cargar data/examenes.json: '+err.message+'. Abre el proyecto con Live Server.',true);}
    proximo();
  }
  document.addEventListener('DOMContentLoaded',iniciar);
})();
