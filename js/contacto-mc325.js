/* MC325 — Contacto editable. No requiere Firebase hasta la etapa de publicación real.
   Los borradores son locales. Los datos compartidos vienen de data/contacto.json.
   Los contactos ocultos se excluyen del archivo publicado para preservar su privacidad. */
(function () {
  'use strict';

  const DATA_URL = 'data/contacto.json';
  const STORAGE_KEY = 'mc325_contacto_borrador_v1';
  const FALLBACK = {
    version: 1,
    docente: { nombre: 'Ing. Capcha Molina, Eden', correo: '', celular: '', mostrarCorreo: false, mostrarCelular: false },
    delegado: { nombre: '', correo: '', celular: '', mostrarCorreo: false, mostrarCelular: false },
    curso: { nombre: 'MC325 · Resistencia de Materiales II', ciclo: '2026 - 2', horario: 'Lun · Mié · Vie, 09:00 – 11:00' }
  };

  function str(value, limit) { return String(value == null ? '' : value).trim().slice(0, limit || 300); }
  function normalizeProfile(value, original) {
    const p = value && typeof value === 'object' ? value : {};
    return {
      nombre: str(p.nombre == null ? original.nombre : p.nombre, 130),
      correo: str(p.correo, 160),
      celular: str(p.celular, 40),
      mostrarCorreo: p.mostrarCorreo === true,
      mostrarCelular: p.mostrarCelular === true
    };
  }
  function normalize(value) {
    const v = value && typeof value === 'object' ? value : {};
    const c = v.curso && typeof v.curso === 'object' ? v.curso : {};
    return {
      version: 1,
      docente: normalizeProfile(v.docente, FALLBACK.docente),
      delegado: normalizeProfile(v.delegado, FALLBACK.delegado),
      curso: {
        nombre: str(c.nombre == null ? FALLBACK.curso.nombre : c.nombre, 150),
        ciclo: str(c.ciclo == null ? FALLBACK.curso.ciclo : c.ciclo, 65),
        horario: str(c.horario == null ? FALLBACK.curso.horario : c.horario, 240)
      }
    };
  }
  function publicData(value) {
    const d = normalize(value);
    ['docente', 'delegado'].forEach(role => {
      if (!d[role].mostrarCorreo) d[role].correo = '';
      if (!d[role].mostrarCelular) d[role].celular = '';
    });
    return d;
  }
  function signature(data) { return JSON.stringify(publicData(data)); }
  function readLocal() {
    try {
      const entry = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return entry && typeof entry === 'object' && entry.data ? entry : null;
    } catch (error) { console.warn('Borrador de contacto ilegible:', error); return null; }
  }
  function copy(data) { return normalize(JSON.parse(JSON.stringify(data))); }
  const state = { published: normalize(FALLBACK), current: normalize(FALLBACK), local: null, error: '', conflict: false };

  async function load() {
    try {
      const response = await fetch(DATA_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error('HTTP ' + response.status + ': ' + DATA_URL);
      const json = await response.json();
      state.published = normalize(json);
    } catch (error) {
      state.error = 'No se pudo leer data/contacto.json. Usa Live Server y comprueba que el archivo esté en data/. Detalle: ' + error.message;
      state.published = copy(FALLBACK);
    }
    state.local = readLocal();
    state.conflict = false;
    if (state.local) {
      state.local.data = normalize(state.local.data);
      if (signature(state.local.data) === signature(state.published)) {
        localStorage.removeItem(STORAGE_KEY);
        state.local = null;
      } else if (state.local.base !== signature(state.published)) {
        state.conflict = true;
      }
    }
    state.current = state.local ? copy(state.local.data) : copy(state.published);
    return state;
  }
  const ready = load();
  function isPending() { return signature(state.current) !== signature(state.published); }
  function save(section, value) {
    if (state.error) throw new Error('No puedes guardar hasta que data/contacto.json cargue correctamente.');
    if (state.conflict) throw new Error('Hay cambios en el repositorio desde que comenzaste el borrador. Actualiza y revisa antes de guardar.');
    if (!['docente', 'delegado', 'curso'].includes(section)) throw new Error('Sección desconocida.');
    const updated = copy(state.current);
    updated[section] = value;
    state.current = publicData(updated);
    if (isPending()) {
      state.local = { base: signature(state.published), data: copy(state.current) };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.local));
    } else {
      state.local = null;
      localStorage.removeItem(STORAGE_KEY);
    }
    return copy(state.current);
  }
  function discard() {
    localStorage.removeItem(STORAGE_KEY);
    state.local = null;
    state.conflict = false;
    state.current = copy(state.published);
    return copy(state.current);
  }
  window.MC325Contacto = {
    ready, getState: () => ({ ...state, published: copy(state.published), current: copy(state.current) }),
    getExportData: () => {
      if (state.error) throw new Error(state.error);
      if (state.conflict) throw new Error('Los datos públicos cambiaron. Vuelve a cargar los datos y reconcilia los borradores antes de exportar.');
      if (!isPending()) throw new Error('No hay modificaciones pendientes de publicar.');
      return publicData(state.current);
    },
    isPending, save, discard, normalize, publicData
  };

  if (!document.body || !document.body.hasAttribute('data-contacto-mc325')) return;
  const byId = id => document.getElementById(id);
  const text = (id, value) => { const node = byId(id); if (node) node.textContent = value; };
  const setHidden = (id, hidden) => { const node = byId(id); if (node) node.hidden = hidden; };
  const setHref = (id, url) => { const node = byId(id); if (node) node.href = url; };
  const showMessage = (message, isError) => {
    const node = byId('contacto-mensaje');
    if (!node) return;
    node.textContent = message;
    node.classList.toggle('contacto-error', !!isError);
    node.hidden = false;
  };
  const hideMessage = () => setHidden('contacto-mensaje', true);
  const getPhoneDigits = phone => {
    let digits = str(phone, 40).replace(/\D/g, '');
    if (digits.length === 9 && digits.startsWith('9')) digits = '51' + digits;
    return digits;
  };
  function initials(name, fallback) {
    const words = str(name).replace(/^(ing\.?|ingeniero|dra?\.?|prof\.?|mg\.?|msc\.?|dr\.?|lic\.?)\s+/ig, '').split(/[\s,]+/).filter(Boolean);
    if (!words.length) return fallback;
    return (words.length > 1 ? words[0][0] + words[1][0] : words[0][0]).toUpperCase();
  }
  function renderProfile(role) {
    const p = state.current[role];
    text(role + '-nombre-publico', p.nombre || (role === 'docente' ? 'Docente por asignar' : 'Delegado por asignar'));
    text(role + '-avatar-publico', initials(p.nombre, role === 'docente' ? 'D' : 'D'));
    const emailShown = p.mostrarCorreo && !!p.correo;
    const phoneShown = p.mostrarCelular && !!p.celular;
    setHidden(role + '-correo-publico', !emailShown);
    setHidden(role + '-celular-publico', !phoneShown);
    setHidden(role + '-separador-correo', !emailShown);
    setHidden(role + '-separador-celular', !phoneShown);
    if (emailShown) {
      text(role + '-texto-correo', p.correo);
      setHref(role + '-btn-correo', 'mailto:' + encodeURIComponent(p.correo).replace(/%40/g, '@'));
    }
    if (phoneShown) {
      text(role + '-texto-celular', p.celular);
      const digits = getPhoneDigits(p.celular);
      setHref(role + '-btn-llamar', 'tel:+' + digits);
      setHref(role + '-btn-whatsapp', 'https://wa.me/' + digits);
    }
  }
  function render() {
    renderProfile('docente');
    renderProfile('delegado');
    text('contacto-curso-nombre-publico', state.current.curso.nombre);
    text('contacto-curso-ciclo-publico', state.current.curso.ciclo);
    text('contacto-curso-horario-publico', state.current.curso.horario);
    text('contacto-sidebar-docente', state.current.docente.nombre || 'Docente por asignar');
    text('contacto-sidebar-ciclo', state.current.curso.ciclo);
    text('delegado-descripcion-publica', 'Delegado del curso · Ciclo ' + state.current.curso.ciclo);
    if (state.error) showMessage(state.error, true);
    else if (state.conflict) showMessage('Tu borrador se creó antes de una actualización de GitHub. No se puede publicar ni sobrescribir: respalda tus datos y descarta el borrador si deseas empezar con la versión nueva.', true);
    else if (isPending()) showMessage('Cambios guardados en este navegador (borrador). Para que todos los vean, usa «Preparar publicación para GitHub».', false);
    else hideMessage();
  }
  function populate(formId, section) {
    const form = byId(formId);
    const data = state.current[section];
    Array.from(form.elements).forEach(control => {
      if (!control.name || !(control.name in data)) return;
      if (control.type === 'checkbox') control.checked = data[control.name];
      else control.value = data[control.name];
    });
  }
  function populateAll() {
    populate('contacto-form-docente', 'docente');
    populate('contacto-form-delegado', 'delegado');
    populate('contacto-form-curso', 'curso');
  }
  function formData(form, section) {
    const result = {};
    if (section === 'curso') {
      ['nombre', 'ciclo', 'horario'].forEach(key => { result[key] = str(form.elements.namedItem(key).value, key === 'horario' ? 240 : 150); });
      if (!result.nombre || !result.ciclo || !result.horario) throw new Error('Completa los tres datos de Información del Curso.');
      return result;
    }
    result.nombre = str(form.elements.namedItem('nombre').value, 130);
    result.mostrarCorreo = form.elements.namedItem('mostrarCorreo').checked;
    result.mostrarCelular = form.elements.namedItem('mostrarCelular').checked;
    // El archivo JSON se publica en GitHub: NO conservar datos ocultos en datos públicos.
    result.correo = result.mostrarCorreo ? str(form.elements.namedItem('correo').value, 160) : '';
    result.celular = result.mostrarCelular ? str(form.elements.namedItem('celular').value, 40) : '';
    if (!result.nombre) throw new Error('Indica el nombre de ' + (section === 'docente' ? 'docente' : 'delegado') + '.');
    if (result.mostrarCorreo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.correo)) throw new Error('Para mostrar el correo, introduce una dirección válida.');
    if (result.mostrarCelular && (getPhoneDigits(result.celular).length < 10 || getPhoneDigits(result.celular).length > 15)) throw new Error('Para mostrar el celular, escribe un número válido con prefijo internacional; por ejemplo, +51 999 999 999.');
    return result;
  }

  const admin = byId('contacto-admin-panel');
  byId('contacto-toggle-admin').addEventListener('click', () => {
    admin.hidden = !admin.hidden;
    byId('contacto-toggle-admin').setAttribute('aria-expanded', String(!admin.hidden));
    if (!admin.hidden) populateAll();
  });
  ['docente', 'delegado', 'curso'].forEach(section => {
    const form = byId('contacto-form-' + section);
    form.addEventListener('submit', event => {
      event.preventDefault();
      try {
        save(section, formData(form, section));
        render();
        populateAll();
        showMessage('Cambios de ' + (section === 'curso' ? 'Información del Curso' : section) + ' guardados como borrador. Aún falta exportarlos para GitHub.', false);
      } catch (error) { showMessage(error.message, true); }
    });
    byId('contacto-cancelar-' + section).addEventListener('click', () => {
      populate(form.id, section);
      showMessage('Formulario restaurado al último estado guardado; no se han realizado cambios.', false);
    });
  });
  byId('contacto-descartar-borrador').addEventListener('click', () => {
    if (!isPending() && !state.conflict) return;
    if (!confirm('¿Descartar TODAS las modificaciones locales de Contacto? Esta acción no se puede deshacer.')) return;
    discard(); render(); populateAll();
  });
  ready.then(() => { render(); populateAll(); });
})();
