/* MC325: navegación por perfiles para la INTEGRACIÓN DE PRUEBA.
   Sin backend: esto NO es autenticación ni control real de acceso a archivos.
   Mantiene intactos los motores preexistentes para JSON/Markdown/PDF. */
(function(){
  'use strict';
  const ROLE_KEY='mc325-integracion-demo-rol';
  const QUEUE_KEY='mc325-integracion-demo-propuestas';
  const roles=['public','student','admin'];
  const file=(location.pathname.split('/').pop()||'index.html');
  const restricted=new Set(['examenes.html','apuntes.html','calendario.html','contacto.html']);
  const adminOnly=new Set(['revision.html','publicar-cambios.html','publicar-contacto.html','publicar-ejercicios.html','publicar-examenes.html','publicar-recursos.html']);
  function getRole(){try {const r=sessionStorage.getItem(ROLE_KEY)||'public'; return roles.includes(r)?r:'public';}catch(e){return 'public';}}
  const role=getRole();document.documentElement.setAttribute('data-mc325-role',role);
  // Redirección solo de interfaz, no autorización de seguridad.
  if((restricted.has(file)&&role==='public') || (adminOnly.has(file)&&role!=='admin')){
    location.replace('acceso.html?volver='+encodeURIComponent(file));return;
  }
  const isStudent=role==='student',isAdmin=role==='admin',member=role!=='public';
  const LABELS={public:'Visitante público',student:'Estudiante UNI · demo',admin:'Administrador · demo'};
  function esc(t){return String(t??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function toast(t){let node=document.getElementById('mc325-flash');if(!node){node=document.createElement('div');node.id='mc325-flash';node.className='mc325-flash';node.setAttribute('role','status');document.body.appendChild(node);}node.textContent=t;node.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>{node.hidden=true;},4100);}
  function readQueue(){try{const q=JSON.parse(localStorage.getItem(QUEUE_KEY)||'[]');return Array.isArray(q)?q:[];}catch(_){return []}}
  function writeQueue(q){try{localStorage.setItem(QUEUE_KEY,JSON.stringify(q));return true;}catch(e){toast('No se pudo guardar en este navegador.');return false;}}
  function urlFromReturn(){const q=new URLSearchParams(location.search).get('volver');return q&&/^(materiales|ejercicios|examenes|apuntes|recursos|calendario|contacto|foro|revision)\.html$/.test(q)?q:null;}
  function switchRole(next){if(!roles.includes(next))return;try{sessionStorage.setItem(ROLE_KEY,next);}catch(_){toast('El navegador impidió guardar el perfil demo.');return;}
    const desired=urlFromReturn(); location.href=next==='public'?'index.html':(desired&&(!adminOnly.has(desired)||next==='admin')?desired:(next==='admin'?'revision.html':'examenes.html'));
  }
  function mountAccount(){const btn=document.getElementById('mc325-account'),menu=document.getElementById('mc325-account-menu');if(!btn||!menu)return;
    const label=btn.querySelector('.mc325-profile-label');if(label)label.textContent=role==='public'?'Acceso UNI':role==='student'?'Estudiante UNI':'Administrador';
    const notice=member?'<small>Perfil de prueba: sin autenticación real</small>':'<small>Visita pública · libre consulta</small>';
    menu.innerHTML=notice+'<a href="index.html"><i class="fa-solid fa-house"></i> Ir a la portada</a>'+(member?'<a href="examenes.html"><i class="fa-solid fa-graduation-cap"></i> Espacio académico MC325</a>':'<a href="acceso.html"><i class="fa-solid fa-arrow-right-to-bracket"></i> Simular ingreso UNI</a>')+(isAdmin?'<a href="revision.html"><i class="fa-solid fa-clipboard-check"></i> Revisar aportes</a>':'')+'<a href="acceso.html"><i class="fa-solid fa-repeat"></i> Cambiar perfil de prueba</a>'+(member?'<button type="button" data-mc325-switch-role="public"><i class="fa-solid fa-right-from-bracket"></i> Salir de la vista UNI</button>':'');
    btn.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;btn.setAttribute('aria-expanded',String(open));});
    document.addEventListener('click',(e)=>{if(!e.target.closest('.mc325-profile')){menu.hidden=true;btn.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){menu.hidden=true;btn.setAttribute('aria-expanded','false');}});
  }
  function mountMobileMenu(){const b=document.getElementById('mc325-mobile-nav-toggle');if(!b)return; b.addEventListener('click',()=>{
    const side=document.querySelector('.mc325-side');if(side){const open=side.classList.toggle('is-visible');b.setAttribute('aria-expanded',String(open));b.querySelector('i').className=open?'fa-solid fa-xmark':'fa-solid fa-bars';}else{const nav=document.querySelector('.mc325-toplinks');if(nav){const open=nav.classList.toggle('mc325-mobile-top-open');b.setAttribute('aria-expanded',String(open));}} });
  }
  function mountSearch(){const input=document.getElementById('mc325-site-search');if(!input)return;const routes=[['artículo','materiales.html'],['teoría','materiales.html'],['fatiga','materiales.html?unidad=unidad3'],['placas','materiales.html?unidad=unidad5'],['curvas','materiales.html?unidad=unidad4'],['cilindros','materiales.html?unidad=unidad6'],['vigas','materiales.html?unidad=unidad7'],['ejercicio','ejercicios.html'],['recurso','recursos.html'],['libro','recursos.html'],['foro','foro.html'],['examen','examenes.html'],['apunte','apuntes.html'],['calendario','calendario.html']]; input.addEventListener('keydown',(e)=>{if(e.key!=='Enter')return;const s=input.value.trim().toLowerCase();if(!s)return;const match=routes.find(r=>s.includes(r[0]));if(match)location.href=match[1];else toast('Prueba buscando un tema como placas, fatiga, ejercicios o recursos.');});}
  function fixMaterialUnit(){if(file!=='materiales.html')return; const target=new URLSearchParams(location.search).get('unidad');if(!/^unidad[0-9]+$/.test(target||''))return;
    // Esperar el renderizado original asíncrono de data/unidades.json.
    const attempt=()=>{const node=document.getElementById('grupo-'+target);if(!node)return false;const buttons=[...document.querySelectorAll('#botones-filtro-unidades button')];const pos=[...document.querySelectorAll('#grupos-unidades .file-group')].indexOf(node);
      if(typeof window.filtrarUnidades==='function'&&buttons[pos])window.filtrarUnidades(target,buttons[pos]);node.scrollIntoView({block:'start'});return true;};
    if(attempt())return;let count=0;const timer=setInterval(()=>{if(attempt()||++count>50)clearInterval(timer);},150);
  }
  function setupContextActions(){if(!document.querySelector('.content-area'))return;
    // Nunca se añade un botón general: cada acción se ubica en la página correspondiente.
    const h=document.querySelector('.page-header');
    function appendButtons(actions){if(!h||!actions.length)return;const box=document.createElement('div');box.className='mc325-context-wrap mc325-page-actions';box.innerHTML=actions.join('');
      // Materiales ya trae sus botones en el HTML de esta integración.
      if(file==='materiales.html')return;
      if(file==='recursos.html'){const header=document.querySelector('.recursos-cabecera');if(header)header.appendChild(box);else h.appendChild(box);}
      else h.appendChild(box);
    }
    const p=(what,title)=>`<button type="button" class="mc325-context-action" data-mc325-propose="${what}"><i class="fa-solid fa-plus"></i> ${title}</button>`;
    const a=(what,title)=>`<button type="button" class="mc325-context-action" data-mc325-native="${what}"><i class="fa-solid fa-plus"></i> ${title}</button>`;
    if(file==='recursos.html')appendButtons(isAdmin?[a('recursos','Añadir recurso')]:isStudent?[p('recursos','Sugerir recurso')]:[]);
    if(file==='apuntes.html'){
      // Sustituye el enlace de prueba; el formulario genérico de propuesta es la nueva acción por página.
      document.querySelectorAll('button.btn-full-width.mc325-propose').forEach(b=>b.classList.add('mc325-file-hidden'));
      appendButtons(member?[p('apuntes',isAdmin?'Añadir apunte':'Subir apunte')]:[]);
    }
    if(file==='calendario.html'&&isAdmin)appendButtons([a('calendario','Añadir evento')]);
    if(file==='contacto.html'&&isAdmin)appendButtons([a('contacto','Editar información')]);
    // Ayuda para moderación local, no reemplaza las exportaciones ya existentes.
    if(isAdmin&&file==='ejercicios.html'){
      const b=document.getElementById('ex-btn-docente'); if(b)b.title='Activar las herramientas originales de edición de clase';
    }
  }
  function activateNative(which){
    if(!isAdmin){toast('Esta herramienta de edición es exclusiva de la vista de administración.');return;}
    if(which==='articulos'){
      const p=document.getElementById('admin-panel-materiales');if(p&&p.style.display==='none'&&typeof window.toggleAdminMateriales==='function')window.toggleAdminMateriales();
      const d=document.getElementById('panel-articulos');if(d){d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'});}return;
    }
    if(which==='recursos'){
      const p=document.getElementById('recursos-admin');if(p&&p.hidden)document.getElementById('btn-modo-docente-recursos')?.click();
      const d=document.getElementById('recursos-editor');if(d){d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'});}return;
    }
    if(which==='calendario'){const p=document.getElementById('admin-panel');if(p&&p.style.display==='none'&&typeof window.toggleAdminPanel==='function')window.toggleAdminPanel();document.getElementById('event-title')?.focus();return;}
    if(which==='contacto'){const p=document.getElementById('contacto-admin-panel');if(p&&p.hidden)document.getElementById('contacto-toggle-admin')?.click();p?.scrollIntoView({block:'start',behavior:'smooth'});return;}
  }
  const sectionNames={articulos:'Artículo del Curso',apuntes:'Apunte o cuaderno',recursos:'Recurso adicional',ejercicios:'Ejercicio resuelto',examenes:'Examen anterior'};
  function proposeForm(section){if(!member)return location.href='acceso.html';if(!sectionNames[section])return;
    const old=document.getElementById('mc325-contrib-modal');if(old)old.remove();
    const modal=document.createElement('div');modal.className='mc325-contrib-modal';modal.id='mc325-contrib-modal';modal.innerHTML=`<div class="mc325-contrib-card" role="dialog" aria-modal="true" aria-labelledby="mc325-form-heading"><button type="button" class="mc325-close" data-mc325-close aria-label="Cerrar formulario"><i class="fa-solid fa-xmark"></i></button><h2 id="mc325-form-heading">${isAdmin?'Añadir':'Proponer'} ${esc(sectionNames[section].toLowerCase())}</h2><p>${isAdmin?'Borrador de administración local. Para publicar se usa el flujo original de exportación.':'Esta propuesta queda pendiente de revisión en este navegador. No se envía al equipo docente ni a ningún servidor.'}</p><form id="mc325-contrib-form"><label for="mc325-form-title">Título</label><input id="mc325-form-title" name="title" required maxlength="100" placeholder="Título descriptivo"><label for="mc325-form-unit">Unidad</label><select id="mc325-form-unit" name="unit"><option value="unidad1">Unidad 1: Esfuerzos</option><option value="unidad3">Unidad 2: Falla y fatiga</option><option value="unidad4">Unidad 3: Elementos curvos</option><option value="unidad5">Unidad 4: Placas planas</option><option value="unidad6">Unidad 5: Cilindros y volantes</option><option value="unidad7">Unidad 6: Vigas variables</option></select><label for="mc325-form-desc">Descripción o contenido</label><textarea id="mc325-form-desc" name="description" maxlength="2000" placeholder="Resumen de la propuesta o texto inicial"></textarea><label for="mc325-form-file">Archivo adjunto (opcional, solo nombre en esta prueba)</label><input id="mc325-form-file" type="file" name="file" accept=".pdf,.md,.txt,.doc,.docx,.zip,.jpg,.jpeg,.png"><p class="mc325-form-help">Los archivos no se guardan ni se envían: el prototipo registra solo su nombre. Para una entrega real será necesaria la base de datos y el almacenamiento del servidor.</p><div class="mc325-form-actions"><button type="button" class="mc325-context-action secondary" data-mc325-close>Cancelar</button><button type="submit" class="mc325-context-action">${isAdmin?'Guardar borrador (demo)':'Enviar a revisión (demo)'}</button></div></form></div>`;
    modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-mc325-close]'))modal.remove();});document.body.appendChild(modal);modal.querySelector('input').focus();
    modal.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const title=String(f.get('title')||'').trim();if(!title)return;
      const fileObj=f.get('file'); const q=readQueue();q.push({id:String(Date.now())+Math.random().toString(36).slice(2,6),title:title.slice(0,100),section,unit:String(f.get('unit')||''),description:String(f.get('description')||'').slice(0,2000),fileName:fileObj&&fileObj.name?fileObj.name:'',status:isAdmin?'Borrador':'Pendiente',date:new Date().toISOString()});
      if(writeQueue(q)){modal.remove();toast('Guardado solo en este navegador. Para publicar será necesario el sistema real.');}
    });
  }
  function setupReviewPage(){if(file!=='revision.html'||!isAdmin)return;const container=document.getElementById('mc325-review-list');if(!container)return;
    function render(){const q=readQueue();document.getElementById('mc325-review-count').textContent=q.length+' solicitudes locales';
      if(!q.length){container.innerHTML='<div class="mc325-review-item"><p>No hay propuestas registradas en este navegador. Prueba una aportación desde Artículos, Apuntes o Recursos en la vista de estudiante.</p></div>';return;}
      container.replaceChildren();for(const item of q.slice().reverse()){
        const row=document.createElement('article');row.className='mc325-review-item';const st=String(item.status||'Pendiente');const label=st.toLowerCase();row.innerHTML=`<h3>${esc(item.title)} <span class="mc325-status-chip ${label}">${esc(st)}</span></h3><p><strong>Sección:</strong> ${esc(item.section)} · <strong>Unidad:</strong> ${esc(item.unit||'—')}</p><p>${esc(item.description||'Sin descripción')}</p>${item.fileName?'<p><i class="fa-regular fa-file"></i> Archivo anunciado: '+esc(item.fileName)+' (no guardado)</p>':''}<div class="mc325-review-actions"></div>`;
        const actions=row.querySelector('.mc325-review-actions');for(const [act,text] of [['Aprobado','Aprobar propuesta'],['Rechazado','Rechazar'],['Pendiente','Devolver a pendiente']]){const b=document.createElement('button');b.type='button';b.className='mc325-context-action'+(act!=='Aprobado'?' secondary':'');b.textContent=text;b.addEventListener('click',()=>{item.status=act;writeQueue(q);render();toast('Estado actualizado SOLO localmente. No se ha publicado contenido.');});actions.appendChild(b);}
        container.appendChild(row);
      }
    }
    document.getElementById('mc325-export-queue')?.addEventListener('click',()=>{const payload=JSON.stringify(readQueue(),null,2);const blob=new Blob([payload],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='propuestas-mc325-local.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});render();
  }
  function mountNavHighlight(){const map={'index.html':'index.html','materiales.html':'materiales.html','ejercicios.html':'ejercicios.html','acerca.html':'acerca.html'};document.querySelectorAll('.mc325-toplinks a').forEach(a=>{if(a.getAttribute('href')===map[file])a.setAttribute('aria-current','page');});}
  document.addEventListener('click',e=>{
    const r=e.target.closest('[data-mc325-switch-role]');if(r){e.preventDefault();switchRole(r.dataset.mc325SwitchRole);return;}
    const b=e.target.closest('[data-mc325-propose]');if(b){e.preventDefault();proposeForm(b.dataset.mc325Propose);return;}
    const n=e.target.closest('[data-mc325-native]');if(n){e.preventDefault();activateNative(n.dataset.mc325Native);return;}
  });

  function mountSharedFooter(){
    let footer=document.querySelector('.mc325-main-footer');
    if(!footer){
      footer=document.createElement('footer');
      footer.className='mc325-main-footer';
      footer.innerHTML='<strong>Universidad Nacional de Ingeniería · Facultad de Ingeniería Mecánica</strong><span>MC325 · 2026</span>';
      document.body.appendChild(footer);
    }else{
      const strong=footer.querySelector('strong')||document.createElement('strong');
      const span=footer.querySelector('span')||document.createElement('span');
      strong.textContent='Universidad Nacional de Ingeniería · Facultad de Ingeniería Mecánica';
      span.textContent='MC325 · 2026';
      if(!strong.parentNode) footer.appendChild(strong);
      if(!span.parentNode) footer.appendChild(span);
    }
  }
  function init(){if(member)document.querySelector('.mc325-group-uni')?.setAttribute('open','');mountAccount();mountMobileMenu();mountSearch();mountNavHighlight();setupContextActions();fixMaterialUnit();setupReviewPage();mountSharedFooter();
    if(member&&file!=='acceso.html'){let tag=document.createElement('span');tag.className='mc325-demo-label';tag.textContent='DEMO · sin autenticación';const right=document.querySelector('.mc325-topbar .nav-right');if(right)right.appendChild(tag);}
    if(file==='acceso.html')document.querySelectorAll('[data-mc325-switch-role]').forEach(e=>e.title='Cambiar perfil de muestra; no es un inicio de sesión real');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
