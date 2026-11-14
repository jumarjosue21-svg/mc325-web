/* MC325 · Recursos Adicionales: borradores locales y catálogo público estático.
 * Modo Docente es una interfaz de prueba, NO autenticación ni autorización real.
 * Publicación con GitHub se realiza solo tras exportar JSON, Commit y Push.
 */
(() => {
  'use strict';
  const DRAFT_KEY = 'mc325_recursos_borrador_v1';
  const CATEGORIES = Object.freeze({
    bibliografia: { title: 'Bibliografía Recomendada', icon: 'fa-solid fa-book-open', singular: 'referencia', action: 'Consultar', types: ['Libro','Referencia','Artículo','Manual'] },
    enlaces: { title: 'Enlaces de Interés', icon: 'fa-solid fa-link', singular: 'enlace', action: 'Abrir', types: ['Web','Video','Herramienta'] },
    software: { title: 'Software Útil', icon: 'fa-solid fa-gear', singular: 'programa', action: 'Sitio oficial', types: ['Software','Herramienta','Guía'] }
  });
  const CATEGORY_IDS = Object.keys(CATEGORIES);
  const $ = id => document.getElementById(id);
  const clone = x => JSON.parse(JSON.stringify(x));
  let published = [], items = [], baseHash = '', conflict = false, loadError = '', admin = false, editingId = null;
  let resolveReady;
  const ready = new Promise(resolve => { resolveReady = resolve; });

  function safeUrl(value) {
    const s = String(value || '').trim();
    if (!s) return '';
    try {
      const u = new URL(s);
      return ['http:', 'https:'].includes(u.protocol) ? u.href : '';
    } catch { return ''; }
  }
  function normalize(data) {
    const list = Array.isArray(data) ? data : data && Array.isArray(data.recursos) ? data.recursos : null;
    if (!list) throw new Error('data/recursos.json no contiene la lista "recursos".');
    const ids = new Set();
    return list.map((a, index) => {
      if (!a || !CATEGORIES[a.categoria]) throw new Error('Categoría inválida en el recurso ' + (index + 1));
      const id = String(a.id || '').trim();
      if (!id || ids.has(id)) throw new Error('ID vacío o duplicado en el recurso ' + (index + 1));
      ids.add(id);
      return {
        id,
        categoria: a.categoria,
        tipo: String(a.tipo || CATEGORIES[a.categoria].types[0]).trim().slice(0,40),
        titulo: String(a.titulo || '').trim().slice(0,180),
        descripcion: String(a.descripcion || '').trim().slice(0,350),
        url: safeUrl(a.url)
      };
    });
  }
  // La comparación conserva el orden de los registros, incluso si solo se cambian las flechas.
  const serialize = x => JSON.stringify(x);
  function hash(text) {
    let h = 2166136261;
    for (let i=0; i<text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h,16777619); }
    return (h>>>0).toString(16);
  }
  const hashItems = list => hash(serialize(list));
  const pending = () => serialize(items) !== serialize(published);
  function message(text, kind='info') {
    const e = $('recursos-estado');
    if (!e) return;
    e.textContent = text;
    e.className = 'recursos-estado ' + kind;
    e.hidden = !text;
  }
  function persist() {
    if (!pending()) {
      localStorage.removeItem(DRAFT_KEY);
      conflict = false;
      message('Los recursos coinciden con la versión publicada.', 'info');
    } else {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({baseHash, recursos: items}));
      message(conflict ? 'Tus borradores están guardados, pero el catálogo publicado cambió. Resuelve el conflicto antes de exportar.' : 'Borrador guardado solo en este navegador. Para publicarlo para todos, utiliza «Preparar publicación».', conflict ? 'error' : 'ok');
    }
    render();
  }
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function smallButton(label, icon, click, disable=false) {
    const b = el('button','recursos-icon-action');
    b.type='button'; b.title = label; b.setAttribute('aria-label',label); b.disabled=disable;
    const i=el('i',icon); i.setAttribute('aria-hidden','true'); b.appendChild(i);
    b.addEventListener('click',click);
    return b;
  }
  function iconClass(a) {
    if (a.categoria === 'bibliografia') return a.tipo==='Referencia' || a.tipo==='Artículo' ? 'fa-solid fa-book-bookmark' : 'fa-solid fa-book';
    if (a.categoria === 'enlaces') return a.tipo==='Video' ? 'fa-solid fa-play' : a.tipo==='Herramienta' ? 'fa-solid fa-calculator' : 'fa-solid fa-link';
    return a.titulo.toLowerCase().includes('ansys') ? 'fa-solid fa-cubes' : 'fa-solid fa-laptop-code';
  }
  function render() {
    for (const id of CATEGORY_IDS) {
      const box = $('lista-recursos-' + id);
      if (!box) continue;
      box.replaceChildren();
      const group = items.filter(x=>x.categoria===id);
      $('contador-recursos-' + id).textContent = group.length + ' ' + (group.length===1 ? CATEGORIES[id].singular : CATEGORIES[id].singular + 's');
      if (!group.length) { box.appendChild(el('p','recursos-vacio','Todavía no hay recursos en esta sección.')); continue; }
      group.forEach((a,i) => {
        const row = el('div','exam-row recursos-fila');
        const labelWrap = el('div','col-examen');
        const iconAndText = el('div','file-icon-text');
        const iconBox = el('div','icon-box-resource border-red');
        const icon = el('i',iconClass(a)); icon.setAttribute('aria-hidden','true'); iconBox.appendChild(icon);
        const detail = el('div','file-details');
        detail.appendChild(el('h4','',a.titulo));
        detail.appendChild(el('p','',a.descripcion));
        iconAndText.append(iconBox,detail); labelWrap.appendChild(iconAndText);
        const type = el('div','col-tipo'); type.appendChild(el('span','tag tag-resource',a.tipo));
        const actions = el('div','col-archivos recursos-acciones');
        if (admin) {
          const adminActions = el('div','recursos-gestion-fila');
          adminActions.append(
            smallButton('Subir «'+a.titulo+'»', 'fa-solid fa-arrow-up',()=>move(a.id,-1), i===0),
            smallButton('Bajar «'+a.titulo+'»', 'fa-solid fa-arrow-down',()=>move(a.id,1), i===group.length-1),
            smallButton('Editar «'+a.titulo+'»', 'fa-solid fa-pen',()=>edit(a.id)),
            smallButton('Eliminar «'+a.titulo+'»', 'fa-solid fa-trash',()=>remove(a.id))
          );
          actions.appendChild(adminActions);
        }
        if (a.url) {
          const link = el('a','btn-solid recursos-abrir',CATEGORIES[id].action);
          link.href=a.url; link.target='_blank'; link.rel='noopener noreferrer';
          link.title='Abrir recurso externo en otra pestaña';
          actions.appendChild(link);
        } else {
          const pending = el('span','recursos-sin-enlace','Enlace pendiente');
          pending.title='El docente todavía no ha agregado la dirección del recurso';
          actions.appendChild(pending);
        }
        row.append(labelWrap,type,actions); box.appendChild(row);
      });
    }
    const panel = $('recursos-admin');
    if (panel) panel.hidden = !admin;
    const adminButton = $('btn-modo-docente-recursos');
    if (adminButton) {
      adminButton.innerHTML = '<i class="fa-solid fa-' + (admin?'unlock':'lock') + '"></i> ' + (admin?'Salir de Modo Docente':'Modo Docente');
      adminButton.setAttribute('aria-pressed',String(admin));
    }
    const publish = $('recursos-publicacion');
    if (publish) publish.hidden = !admin;
    const discard = $('recursos-descartar');
    if (discard) discard.disabled = !pending();
  }
  function move(id,delta) {
    if (!admin) return;
    const record = items.find(x=>x.id===id);
    if (!record) return;
    const same = items.filter(x=>x.categoria===record.categoria);
    const at = same.findIndex(x=>x.id===id), swap=same[at+delta];
    if (!swap) return;
    const i = items.findIndex(x=>x.id===id), j=items.findIndex(x=>x.id===swap.id);
    [items[i],items[j]] = [items[j],items[i]];
    persist();
  }
  function resetForm() {
    editingId=null;
    $('form-recurso').reset();
    $('recurso-categoria').value='bibliografia';
    typesForCategory();
    $('recursos-form-title').textContent='Añadir recurso';
    $('recursos-submit').textContent='Guardar recurso (borrador)';
    $('recursos-cancelar').hidden=true;
  }
  function typesForCategory(preferred) {
    const id = $('recurso-categoria').value;
    const select = $('recurso-tipo'); select.replaceChildren();
    (CATEGORIES[id] || CATEGORIES.bibliografia).types.forEach(t=> {
      const o=el('option','',t); o.value=t; select.appendChild(o);
    });
    if (preferred && [...select.options].some(o=>o.value===preferred)) select.value=preferred;
  }
  function edit(id) {
    if (!admin) return;
    const r=items.find(x=>x.id===id); if(!r)return;
    resetForm(); editingId=r.id;
    $('recurso-categoria').value=r.categoria; typesForCategory(r.tipo);
    $('recurso-titulo').value=r.titulo;
    $('recurso-descripcion').value=r.descripcion;
    $('recurso-url').value=r.url;
    $('recursos-form-title').textContent='Editar recurso existente';
    $('recursos-submit').textContent='Guardar cambios';
    $('recursos-cancelar').hidden=false;
    $('recursos-editor').open=true;
    $('recursos-editor').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function remove(id) {
    if (!admin) return;
    const r=items.find(x=>x.id===id);
    if (!r || !confirm('¿Eliminar «'+r.titulo+'» de la página? El cambio quedará pendiente de publicación.')) return;
    items=items.filter(x=>x.id!==id);
    if (editingId===id) resetForm();
    persist();
  }
  function submit(e) {
    e.preventDefault(); if (!admin) return;
    const category=$('recurso-categoria').value, type=$('recurso-tipo').value;
    const title=$('recurso-titulo').value.trim(), description=$('recurso-descripcion').value.trim();
    const rawUrl=$('recurso-url').value.trim(), url=safeUrl(rawUrl);
    if (!CATEGORIES[category] || !title || !type || (rawUrl && !url)) {
      alert('Revisa los datos. La dirección debe empezar por https:// o http://.'); return;
    }
    if (!rawUrl && !editingId) {
      alert('Para añadir un recurso nuevo debes proporcionar su enlace. Los ejemplos antiguos sin enlace se pueden completar desde Editar.'); return;
    }
    if (editingId) {
      const index=items.findIndex(x=>x.id===editingId); if (index<0)return;
      const existing=items[index];
      const updated={...existing,categoria:category,tipo:type,titulo:title,descripcion:description,url};
      if (existing.categoria!==category) { items.splice(index,1);items.push(updated); }
      else items[index]=updated;
    } else {
      let id;
      do { id='recurso-'+(typeof crypto!=='undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now()+'-'+Math.random().toString(36).slice(2)); }
      while(items.some(x=>x.id===id));
      items.push({id,categoria:category,tipo:type,titulo:title,descripcion:description,url});
    }
    resetForm();$('recursos-editor').open=false;
    persist();
  }
  function discard() {
    if (!admin || !pending()) return;
    if (!confirm('¿Descartar todos los cambios locales de Recursos y recuperar la versión publicada en este navegador?'))return;
    localStorage.removeItem(DRAFT_KEY);
    conflict=false;items=clone(published);resetForm();render();
    message('Se restauró la versión publicada de Recursos.', 'info');
  }
  function exportState() {
    return {
      current: {version:1,recursos:clone(items)},
      published: {version:1,recursos:clone(published)},
      pending: pending(), conflict, error: loadError, baseHash,
      publishedHash:hashItems(published)
    };
  }
  async function verifyLatest() {
    const response=await fetch('data/recursos.json?revision='+Date.now(),{cache:'no-store'});
    if(!response.ok)throw new Error('No se pudo comprobar data/recursos.json (HTTP '+response.status+').');
    const now=normalize(await response.json());
    if (hashItems(now)!==baseHash) throw new Error('El catálogo del repositorio cambió desde que creaste el borrador. Actualiza y concilia los cambios antes de publicar.');
    if (conflict) throw new Error('El borrador se generó a partir de una versión anterior del catálogo. Debes conciliarlo antes de exportar.');
    if (!pending()) throw new Error('No hay cambios pendientes.');
    return {version:1,recursos:clone(items)};
  }
  window.MC325Recursos = {ready,getState:exportState,verifyLatest};
  async function boot() {
    try {
      const response=await fetch('data/recursos.json',{cache:'no-store'});
      if(!response.ok)throw new Error('No se pudo cargar data/recursos.json (HTTP '+response.status+').');
      published=normalize(await response.json());
      items=clone(published);baseHash=hashItems(published);
      try {
        const draft=JSON.parse(localStorage.getItem(DRAFT_KEY)||'null');
        if(draft && Array.isArray(draft.recursos)) {
          items=normalize(draft.recursos);
          conflict=draft.baseHash!==baseHash;
          if (pending()) message(conflict?'Se detectó un borrador creado sobre una versión anterior. Conserva una copia y concilia los datos antes de publicar.':'Hay cambios guardados como borrador local en este navegador.',conflict?'error':'ok');
          else localStorage.removeItem(DRAFT_KEY);
        }
      } catch(e) { message('No se pudo recuperar el borrador local: '+e.message,'error'); }
      if ($('btn-modo-docente-recursos')) {
        $('btn-modo-docente-recursos').addEventListener('click',()=>{ admin=!admin; if(!admin){resetForm();$('recursos-editor').open=false;}render(); });
        $('recurso-categoria').addEventListener('change',()=>typesForCategory());
        $('form-recurso').addEventListener('submit',submit);
        $('recursos-cancelar').addEventListener('click',resetForm);
        $('recursos-descartar').addEventListener('click',discard);
        resetForm(); render();
      }
    } catch(e) {
      loadError=e.message;
      message('No se pudieron cargar los recursos: '+e.message+' Abre el proyecto desde Live Server y comprueba que existe data/recursos.json.','error');
      if ($('btn-modo-docente-recursos')) $('btn-modo-docente-recursos').disabled=true;
    } finally { resolveReady(); }
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
