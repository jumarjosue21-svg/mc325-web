/* MC325 · Navegación híbrida v8
 * Un solo catálogo contextual: no hay estado de desplegables ni árboles
 * guardados entre páginas. El contenido proviene de las fuentes originales.
 * No reemplaza filtros, lectores ni datos publicados del curso.
 */
(()=>{
  'use strict';
  const file=location.pathname.split('/').pop()||'index.html';
  const area={'materiales.html':'articulos','ejercicios.html':'ejercicios','examenes.html':'examenes'}[file]||null;
  const nav=document.querySelector('.mc325-side-nav');
  if(!nav || nav.dataset.hybridMounted || ![...nav.querySelectorAll(':scope > .mc325-menu-heading')].some(x=>x.textContent.includes('CONTENIDO PÚBLICO')))return;
  nav.dataset.hybridMounted='true';
  document.documentElement.classList.add('mc325-hybrid-mode');
  const $=id=>document.getElementById(id);
  const en=encodeURIComponent;
  const tipos={pc:'Prácticas Calificadas',parcial:'Exámenes Parciales',final:'Exámenes Finales',sustitutorio:'Exámenes Sustitutorios'};
  const S={unidades:[],items:[],unidad:null,item:null,tipo:null,ciclo:null,pc:null,ready:false,signature:''};
  const htmlTag=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=String(text);return x;};
  const esc=s=>String(s??'');
  const isWeb=o=>{
    const f=String(o.formato||'').toLowerCase(),ruta=String(o.ruta||'').toLowerCase().split(/[?#]/)[0];
    return f!=='pdf'&&!ruta.endsWith('.pdf')&&(f===''&&ruta===''||['web','markdown','latex','md','md+latex'].includes(f)||/\.(?:md|markdown)$/.test(ruta));
  };
  const unique=arr=>[...new Set(arr)];
  const restyle=(item,selected)=>{item.classList.toggle('is-current',!!selected);if(selected)item.setAttribute('aria-current','page');else item.removeAttribute('aria-current');};
  const idKey=o=>String(o?.id??'');
  const sidebar=nav.closest('.mc325-side,.sidebar')||nav;
  const scrollKey='mc325-lateral-scroll-v1';
  let wantedScroll=0, allowScrollSave=false;
  try {const x=Number(sessionStorage.getItem(scrollKey));wantedScroll=Number.isFinite(x)&&x>0?x:0;}catch(_){}
  function saveScroll(){if(!allowScrollSave)return;try{sessionStorage.setItem(scrollKey,String(Math.round(sidebar.scrollTop)));}catch(_){}}
  function restoreScroll(){
    // Un menú compacto puede tener menos altura. Nunca grabar el scroll
    // temporalmente limitado como preferencia del usuario.
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      sidebar.scrollTop=Math.min(wantedScroll,Math.max(0,sidebar.scrollHeight-sidebar.clientHeight));
      setTimeout(()=>{allowScrollSave=true;},150);
    }));
  }
  sidebar.addEventListener('scroll',saveScroll,{passive:true});
  window.addEventListener('pagehide',saveScroll);
  const outerHeader=(label,href,icon,active)=>{
    const a=htmlTag('a','mc325-menu-link mc325-hybrid-head'+(active?' is-current':''));
    a.href=href;a.innerHTML=`<i class="${icon}" aria-hidden="true"></i><span></span>`;
    a.querySelector('span').textContent=label;
    if(active)a.setAttribute('aria-current','page');
    return a;
  };
  function createEntry(text,href,kind,props={},active=false){
    const a=htmlTag('a','mc325-hybrid-entry'+(active?' is-current':''));
    const icons={unit:'fa-solid fa-book-open',type:'fa-solid fa-folder-open',cycle:'fa-regular fa-calendar',pc:'fa-regular fa-file-lines',item:'fa-regular fa-file-lines'};
    if(icons[kind]){const i=htmlTag('i',icons[kind]);i.setAttribute('aria-hidden','true');a.append(i);}
    a.append(htmlTag('span','',text));
    a.href=href;a.dataset.hybridKind=kind;
    Object.entries(props).forEach(([k,v])=>{if(v!==null&&v!==undefined)a.dataset[k]=String(v);});
    if(active)a.setAttribute('aria-current','page');
    return a;
  }
  const makeSection=(label,href,icon,active,cls)=>{
    const section=htmlTag('div','mc325-hybrid-section'+(active?' is-active':'')+' '+cls);
    section.append(outerHeader(label,href,icon,active));
    if(active)section.append(htmlTag('div','mc325-hybrid-subtree'));
    return section;
  };
  const element={};
  function mount(){
    const art=nav.querySelector('details.mc325-side-group:not(.mc325-group-uni)')||nav.querySelector('a[href="materiales.html"]');
    const ex=nav.querySelector('a[href="ejercicios.html"]');
    const uni=nav.querySelector('.mc325-group-uni');
    const activeArt=area==='articulos',activeEx=area==='ejercicios',activeExam=area==='examenes';
    if(art){const n=makeSection('Artículos','materiales.html','fa-solid fa-book-open',activeArt,'mc325-hybrid-articles');art.replaceWith(n);element.art=n;}
    if(ex){const n=makeSection('Ejercicios Resueltos','ejercicios.html','fa-solid fa-list-check',activeEx,'mc325-hybrid-exercises');ex.replaceWith(n);element.ex=n;}
    if(uni){
      // El espacio UNI sigue visible (según el rol), pero sin un segundo
      // desplegable que varíe de altura durante la navegación.
      const replacement=htmlTag('div','mc325-hybrid-uni');
      const title=htmlTag('div','mc325-hybrid-uni-heading');
      title.innerHTML='<i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Curso MC325</span>';
      replacement.append(title);
      const links=htmlTag('div','mc325-hybrid-uni-links');
      [...uni.querySelectorAll(':scope > .mc325-side-submenu > *')].forEach(el=>links.append(el));
      replacement.append(links);uni.replaceWith(replacement);
      const examLink=links.querySelector('a[href="examenes.html"]');
      if(examLink){const exSection=makeSection('Exámenes Pasados','examenes.html','fa-regular fa-file-pdf',activeExam,'mc325-hybrid-exams');examLink.replaceWith(exSection);element.em=exSection;}
    }
  }
  mount();
  const lists=()=>element[area==='articulos'?'art':area==='ejercicios'?'ex':'em']?.querySelector('.mc325-hybrid-subtree');
  function ensureVisible(kind){
    const node=lists()?.querySelector(`[data-hybrid-kind="${kind}"]`);
    if(node)return node;return null;
  }
  function activeReader(){
    const id=area==='articulos'?'vista-lectura-articulo':area==='ejercicios'?'ex-lector':'em-lector';
    const r=$(id);return Boolean(r && !r.hidden && getComputedStyle(r).display!=='none');
  }
  const signature=()=>[S.unidad,S.item,S.tipo,S.ciclo,S.pc].map(v=>v??'').join('|');
  function syncSelection(){
    if(!area||!S.ready)return;
    const before=signature();
    if(area==='articulos'){
      if(activeReader()){
        const title=$('lectura-titulo')?.textContent?.trim();
        const list=S.items.filter(x=>x.titulo===title);
        const found=list.find(x=>idKey(x)===S.item)||(list.length===1?list[0]:null);
        if(found){S.item=idKey(found);S.unidad=found.unidad;}
      }else{
        S.item=null;
        const buttons=[...document.querySelectorAll('#botones-filtro-unidades button')];
        const idx=buttons.findIndex(b=>b.classList.contains('active'));
        if(idx>=0)S.unidad=S.unidades[idx]?.id??null;
        else if(document.querySelector('.filter-buttons >button.active'))S.unidad=null;
      }
    }else if(area==='ejercicios'){
      if(activeReader()){
        const title=$('ex-lector-titulo')?.textContent?.trim();
        const list=S.items.filter(x=>x.titulo===title);
        const found=list.find(x=>idKey(x)===S.item)||(list.length===1?list[0]:null);
        if(found){S.item=idKey(found);S.unidad=found.unidad;}
      }else{
        S.item=null;const filter=$('ex-filtro-unidad')?.value;
        if(filter)S.unidad=filter==='todas'?null:filter;
      }
    }else{
      if(activeReader()){
        const title=$('em-lector-titulo')?.textContent?.trim(),meta=$('em-lector-meta')?.textContent||'';
        const matches=S.items.filter(x=>x.titulo===title && meta.includes(x.ciclo));
        const found=matches.find(x=>idKey(x)===S.item)||(matches.length===1?matches[0]:null);
        if(found){S.item=idKey(found);S.tipo=found.tipo;S.ciclo=found.ciclo;S.pc=found.pc?String(found.pc):null;}
      }else if(!$('em-modal') || $('em-modal').hidden){
        S.item=null;
        const ciclo=$('em-ciclos')?.querySelector('button.active')?.dataset.ciclo;
        const checks=[...document.querySelectorAll('[data-tipo]:checked')].map(x=>x.dataset.tipo);
        const pcs=[...document.querySelectorAll('[data-pc]:checked')].map(x=>String(x.dataset.pc));
        const selected=unique([...checks,...(pcs.length?['pc']:[])]);
        S.tipo=selected.length===1?selected[0]:null;
        S.ciclo=ciclo && ciclo!=='todos'?ciclo:null;
        S.pc=S.tipo==='pc'&&pcs.length===1?pcs[0]:null;
      }
    }
    if(signature()!==before)render();
    // Si cambió solo el elemento elegido dentro del mismo grupo, también
    // actualizar el resaltado, sin recrear toda la barra.
    else highlight();
  }
  function makeEmpty(message){return htmlTag('span','mc325-hybrid-empty',message);}
  function ordered(arr){return [...arr].sort((a,b)=>(Number(a.orden??1e9)-Number(b.orden??1e9))||String(a.titulo).localeCompare(String(b.titulo),'es',{numeric:true}));}
  function render(){
    const parent=lists();if(!parent)return;
    const nodes=[];
    if(area==='articulos'||area==='ejercicios'){
      const art=area==='articulos';
      nodes.push(createEntry(art?'Todos los artículos':'Todos los ejercicios',art?'materiales.html':'ejercicios.html','all',{},!S.unidad&&!S.item));
      S.unidades.forEach((u,i)=>{
        const chosen=S.unidad===u.id,href=art?'materiales.html?unidad='+en(u.id):'ejercicios.html?unidad='+en(u.id);
        nodes.push(createEntry(`Unidad ${i+1}. ${u.nombre}`,href,'unit',{unit:u.id},chosen&&!S.item));
        if(!chosen)return;
        const subt=htmlTag('div','mc325-hybrid-leaves');
        const arr=ordered(S.items.filter(x=>x.unidad===u.id));
        arr.forEach(item=>{
          const dest=art?'materiales.html?articulo='+en(item.id):'ejercicios.html?ejercicio='+en(item.id);
          subt.append(createEntry(item.titulo||'Sin título',dest,'item',{unit:u.id,item:item.id},S.item===idKey(item)));
        });
        if(!arr.length)subt.append(makeEmpty(art?'Sin artículos publicados':'Sin ejercicios publicados'));
        nodes.push(subt);
      });
    }else{
      nodes.push(createEntry('Todos los exámenes','examenes.html','all',{},!S.tipo&&!S.item));
      for(const [tipo,nombre] of Object.entries(tipos)){
        const chosen=S.tipo===tipo;
        nodes.push(createEntry(nombre,'examenes.html?navtipo='+en(tipo),'type',{type:tipo},chosen&&!S.ciclo&&!S.item));
        if(!chosen)continue;
        const yearBox=htmlTag('div','mc325-hybrid-leaves');
        const years=unique(S.items.map(x=>x.ciclo).filter(x=>/^\d{4}-[12]$/.test(x))).sort((a,b)=>b.localeCompare(a));
        for(const year of years){
          const active=S.ciclo===year;
          const opts=new URLSearchParams({navtipo:tipo,navciclo:year});
          yearBox.append(createEntry(year,'examenes.html?'+opts,'cycle',{type:tipo,cycle:year},active&&!S.pc&&!S.item));
          if(!active)continue;
          const match=S.items.filter(x=>x.tipo===tipo&&x.ciclo===year);
          const examBox=htmlTag('div','mc325-hybrid-leaves');
          if(tipo==='pc'){
            for(let i=1;i<=4;i++){
              const p=String(i),sel=S.pc===p;
              const url=new URLSearchParams({navtipo:tipo,navciclo:year,navpc:p});
              examBox.append(createEntry('PC'+p,'examenes.html?'+url,'pc',{type:tipo,cycle:year,pc:p},sel&&!S.item));
              if(!sel)continue;
              const leaves=htmlTag('div','mc325-hybrid-leaves');
              const ex=ordered(match.filter(x=>Number(x.pc)===i));
              for(const e of ex){const u=new URLSearchParams({...Object.fromEntries(url),examen:String(e.id)});
                leaves.append(createEntry(e.titulo||'Examen','examenes.html?'+u,'item',{type:tipo,cycle:year,pc:p,item:e.id},S.item===idKey(e)));
              }
              if(!ex.length)leaves.append(makeEmpty('Sin exámenes registrados'));
              examBox.append(leaves);
            }
          }else{
            for(const e of ordered(match)){
              const u=new URLSearchParams({navtipo:tipo,navciclo:year,examen:String(e.id)});
              examBox.append(createEntry(e.titulo||'Examen','examenes.html?'+u,'item',{type:tipo,cycle:year,item:e.id},S.item===idKey(e)));
            }
            if(!match.length)examBox.append(makeEmpty('Sin exámenes registrados'));
          }
          yearBox.append(examBox);
        }
        if(!years.length)yearBox.append(makeEmpty('No hay ciclos registrados'));
        nodes.push(yearBox);
      }
    }
    parent.replaceChildren(...nodes);highlight();
  }
  function highlight(){
    const parent=lists();if(!parent)return;
    const active=[...parent.querySelectorAll('.mc325-hybrid-entry.is-current')];
    active.forEach(x=>x.setAttribute('aria-current','page'));
  }
  // Aplicar filtros nativos: no duplicamos los sistemas de lectura o búsqueda.
  function navMaterial(unit=null,id=null){
    if(!id&&activeReader())window.cerrarVistaLectura?.();
    if(unit){
      const idx=S.unidades.findIndex(x=>x.id===unit);
      const btn=[...document.querySelectorAll('#botones-filtro-unidades button')][idx];
      if(btn)btn.click();
    }else if(!id){document.querySelector('.filter-buttons >button')?.click();}
    S.unidad=unit;S.item=id?String(id):null;render();
    if(id && typeof window.abrirVistaLectura==='function')window.abrirVistaLectura(id);
  }
  function navExercise(unit=null,id=null){
    if(!id&&activeReader())$('ex-volver')?.click();
    const filter=$('ex-filtro-unidad');if(filter){filter.value=unit||'todas';filter.dispatchEvent(new Event('change',{bubbles:true}));}
    const search=$('ex-buscar');if(search?.value){search.value='';search.dispatchEvent(new Event('input',{bubbles:true}));}
    S.unidad=unit;S.item=id?String(id):null;render();
    if(id){
      const selector='#ex-lista-unificada .ex-card';
      const row=[...document.querySelectorAll(selector)].find(x=>x.dataset.ejercicio===String(id));
      const b=row?.querySelector('[data-accion="leer"]');if(b)b.click();
      else setTimeout(()=>{const r=[...document.querySelectorAll('#ex-lista-unificada .ex-card')].find(x=>x.dataset.ejercicio===String(id));r?.querySelector('[data-accion="leer"]')?.click();},450);
    }
  }
  function navExam(tipo=null,ciclo=null,pc=null,id=null){
    if(activeReader())$('em-volver')?.click();
    const yearBtn=[...document.querySelectorAll('#em-ciclos button')].find(b=>b.dataset.ciclo===(ciclo||'todos'));
    yearBtn?.click();
    const all=[...document.querySelectorAll('[data-pc],[data-tipo]')];
    all.forEach(c=>{c.checked=!tipo || (tipo==='pc'&&c.hasAttribute('data-pc')&&(!pc||String(c.dataset.pc)===String(pc))) || (tipo===c.dataset.tipo);});
    if(all.length)all[0].dispatchEvent(new Event('change',{bubbles:true}));
    S.tipo=tipo;S.ciclo=ciclo;S.pc=pc;S.item=id?String(id):null;render();
    if(!id)return;
    const row=[...document.querySelectorAll(`#em-lista-${tipo} .em-row`)].find(e=>e.querySelector(`[data-id="${CSS.escape(String(id))}"]`));
    if(row){if(row.hidden)document.querySelector(`#em-lista-${tipo} .em-expander button`)?.click();
      const b=row.querySelector('button[data-accion="solucion"]');if(b&&!b.disabled)b.click();else row.scrollIntoView({block:'center',behavior:'smooth'});
    }else{setTimeout(()=>{const r=[...document.querySelectorAll(`#em-lista-${tipo} .em-row`)].find(e=>e.querySelector(`[data-id="${CSS.escape(String(id))}"]`));r?.querySelector('button[data-accion="solucion"]:not(:disabled)')?.click();},500);}
  }
  // Solo interceptamos dentro del catálogo actual; en otras páginas se usan
  // enlaces HTML normales y se conserva el comportamiento de GitHub Pages.
  nav.addEventListener('click',e=>{
    const a=e.target.closest('.mc325-hybrid-entry');if(!a || !nav.contains(a) || !area || !S.ready)return;
    e.preventDefault();const d=a.dataset,k=d.hybridKind;
    if(area==='articulos'){
      if(k==='all')navMaterial();else if(k==='unit')navMaterial(d.unit);else if(k==='item')navMaterial(d.unit,d.item);
    }else if(area==='ejercicios'){
      if(k==='all')navExercise();else if(k==='unit')navExercise(d.unit);else if(k==='item')navExercise(d.unit,d.item);
    }else if(area==='examenes'){
      if(k==='all')navExam();else if(k==='type')navExam(d.type);else if(k==='cycle')navExam(d.type,d.cycle);
      else if(k==='pc')navExam(d.type,d.cycle,d.pc);else if(k==='item')navExam(d.type,d.cycle,d.pc,d.item);
    }
  });
  async function adapter(name,path){
    if(window[name])return;
    await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=path;script.onload=resolve;script.onerror=()=>reject(Error('No se cargó '+path));document.head.append(script);});
  }
  async function fetchData(){
    if(!area)return;
    if(area==='articulos'){
      await adapter('MC325Datos','js/datos-mc325.js');
      const [u,a]=await Promise.all([window.MC325Datos.leer('unidades'),window.MC325Datos.leer('articulos')]);
      return {unidades:u.items.filter(x=>x.id!=='silabo'),items:(a.items||[]).filter(isWeb)};
    }
    if(area==='ejercicios'){
      await adapter('MC325EjerciciosDatos','js/ejercicios-datos.js');
      const D=window.MC325EjerciciosDatos,[u,p]=await Promise.all([D.obtenerUnidades(),D.obtenerPublicados()]);
      return {unidades:u,items:D.combinar(p).filter(isWeb)};
    }
    await adapter('MC325ExamenesDatos','js/examenes-datos.js');
    const D=window.MC325ExamenesDatos,p=await D.publicados();
    return {unidades:[],items:D.combinar(p).filter(isWeb)};
  }
  let timer=null;const debounce=(fn,delay=100)=>{clearTimeout(timer);timer=setTimeout(fn,delay);};
  async function reload(){
    try{
      const data=await fetchData();if(!data)return;
      const fingerprint=JSON.stringify(data.unidades.map(u=>[u.id,u.nombre]))+JSON.stringify(data.items.map(x=>[x.id,x.unidad,x.titulo,x.ciclo,x.pc,x.tipo,x.formato]));
      if(fingerprint!==S.signature){S.unidades=data.unidades;S.items=data.items;S.signature=fingerprint;S.ready=true;}
      syncSelection();render();
    }catch(e){console.warn('MC325: no se pudo actualizar el menú híbrido:',e);}
  }
  function observe(){
    const roots=area==='articulos'?[$('grupos-unidades'),$('botones-filtro-unidades'),$('vista-lectura-articulo'),$('lectura-titulo')]:
      area==='ejercicios'?[$('ex-lista-unificada'),$('ex-filtro-unidad'),$('ex-lector'),$('ex-lector-titulo')]:
      [$('em-listas'),$('em-ciclos'),$('em-tipos'),$('em-lector'),$('em-lector-titulo')];
    const obs=new MutationObserver(muts=>{
      if(muts.some(m=>m.type==='childList' && (m.target.closest?.('#grupos-unidades,#ex-lista-unificada,#em-listas'))))debounce(reload,160);
      else debounce(syncSelection,90);
    });
    roots.filter(Boolean).forEach(x=>obs.observe(x,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style','hidden'],characterData:true}));
    document.addEventListener('click',e=>{if(!e.target.closest('.mc325-side'))setTimeout(syncSelection,120);},true);
    document.addEventListener('change',e=>{if(e.target.closest('#em-tipos')||e.target.matches('#ex-filtro-unidad'))setTimeout(syncSelection,60);},true);
    window.addEventListener('mc325-datos-actualizados',()=>debounce(reload,150));
    window.addEventListener('storage',e=>{if(/mc325_.*(?:borrador|cambios)/.test(e.key||''))debounce(reload,150);});
  }
  async function init(){
    if(!area){restoreScroll();return;}
    await reload();
    // Entradas por enlace desde otras páginas o desde el carrusel.
    const p=new URLSearchParams(location.search);
    if(area==='articulos'){
      const id=p.get('articulo'),unit=p.get('unidad');
      if(id){const a=S.items.find(x=>idKey(x)===id);if(a){S.item=id;S.unidad=a.unidad;render();}}
      else if(unit&&S.unidades.some(x=>x.id===unit)){S.unidad=unit;navMaterial(unit);}
    }else if(area==='ejercicios'){
      const id=p.get('ejercicio'),unit=p.get('unidad');
      if(id){const x=S.items.find(e=>idKey(e)===id);if(x)navExercise(x.unidad,id);}
      else if(unit&&S.unidades.some(x=>x.id===unit))navExercise(unit);
    }else{
      const tipo=p.get('navtipo'),ciclo=p.get('navciclo'),pc=p.get('navpc'),id=p.get('examen');
      if(tipo&&Object.hasOwn(tipos,tipo))navExam(tipo,ciclo,pc,id);
    }
    observe();restoreScroll();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
