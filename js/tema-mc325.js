/* MC325 - Tema visual compartido en todas las páginas.
   El modo claro es el predeterminado. No afecta documentos ni borradores. */
(function () {
  'use strict';
  var KEY = 'mc325-preferencia-tema';
  var root = document.documentElement;
  var ICON_MOON = '<svg class="mc325-theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.985 12.486A9 9 0 0 1 11.514 3.015 9 9 0 1 0 20.985 12.486Z"/></svg>';
  var ICON_SUN = '<svg class="mc325-theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';

  function readPreference() {
    try { return window.localStorage.getItem(KEY) === 'oscuro'; }
    catch (_) { return false; }
  }

  function paint(dark) {
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    root.style.colorScheme = dark ? 'dark' : 'light';
    var button = document.getElementById('mc325-theme-toggle');
    if (!button) return;
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Modo oscuro activado; cambiar a modo claro' : 'Modo claro activado; cambiar a modo oscuro');
    button.title = dark ? 'Modo oscuro activo · Cambiar a claro' : 'Modo claro activo · Cambiar a oscuro';
    var icon = button.querySelector('.mc325-theme-icon');
    if (icon) icon.outerHTML = dark ? ICON_MOON : ICON_SUN;
  }

  // Ejecutado en <head>, antes de que se dibuje el contenido.
  paint(readPreference());

  function toggle() {
    var dark = root.getAttribute('data-theme') !== 'dark';
    try { window.localStorage.setItem(KEY, dark ? 'oscuro' : 'claro'); }
    catch (_) { /* Si el navegador bloquea el almacenamiento, se mantiene en esta página. */ }
    paint(dark);
  }

  function mount() {
    if (document.getElementById('mc325-theme-toggle')) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.id = 'mc325-theme-toggle';
    button.className = 'mc325-theme-toggle';
    button.innerHTML = ICON_SUN;
    button.addEventListener('click', toggle);

    var navbar = document.querySelector('.navbar');
    if (navbar) {
      var right = navbar.querySelector('.nav-right');
      if (!right) {
        right = document.createElement('div');
        right.className = 'nav-right mc325-theme-actions';
        navbar.appendChild(right);
      }
      right.insertBefore(button, right.firstChild);
    } else {
      button.classList.add('mc325-theme-floating');
      document.body.appendChild(button);
    }
    paint(root.getAttribute('data-theme') === 'dark');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
  window.addEventListener('pageshow', function () { paint(readPreference()); });
  window.addEventListener('storage', function (event) {
    if (event.key === KEY || event.key === null) paint(readPreference());
  });
})();
