/* Navegación de tarjetas reutilizable para los artículos de tablas.
   Se usa delegación porque el lector reemplaza su contenido al cambiar capítulo. */
(function () {
    'use strict';
    const selector = '.pcr-widget[data-placas-carousel]';

    function seleccionar(widget, indice, desplazar) {
        const pestanas = Array.from(widget.querySelectorAll('[role="tab"][data-case]'));
        const paneles = Array.from(widget.querySelectorAll('[role="tabpanel"][data-case-panel]'));
        const limite = pestanas.length;
        if (!limite) return;
        const siguiente = Math.min(limite - 1, Math.max(0, indice));
        pestanas.forEach((pestana, i) => {
            const activo = i === siguiente;
            pestana.classList.toggle('is-active', activo);
            pestana.setAttribute('aria-selected', String(activo));
            pestana.tabIndex = activo ? 0 : -1;
        });
        paneles.forEach((panel, i) => {
            const activo = i === siguiente;
            panel.classList.toggle('is-active', activo);
            panel.setAttribute('aria-hidden', String(!activo));
            if ('inert' in panel) panel.inert = !activo;
        });
        const previo = widget.querySelector('[data-placas-step="-1"]');
        const proximo = widget.querySelector('[data-placas-step="1"]');
        if (previo) previo.disabled = siguiente === 0;
        if (proximo) proximo.disabled = siguiente === limite - 1;
        const progreso = widget.querySelector('.pcr-position');
        if (progreso) progreso.textContent = (siguiente + 1) + ' de ' + limite;
        const pestana = pestanas[siguiente];
        const carril = pestana.parentElement;
        // Solo se desplaza la tira horizontal, evitando saltos verticales imprevistos.
        const limites = carril.getBoundingClientRect();
        const posicion = pestana.getBoundingClientRect();
        const ajuste = posicion.left < limites.left + 6
            ? posicion.left - limites.left - 10
            : posicion.right > limites.right - 6
                ? posicion.right - limites.right + 10 : 0;
        if (ajuste) carril.scrollLeft += ajuste;
        if (desplazar) widget.scrollIntoView({block: 'start', behavior: 'smooth'});
        const panel = paneles[siguiente];
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function' && panel) {
            window.MathJax.typesetPromise([panel]).catch(function (error) {
                console.warn('No se pudo actualizar una ecuación de la tabla:', error);
            });
        }
    }

    document.addEventListener('click', function (e) {
        const button = e.target.closest('.pcr-widget button');
        if (!button) return;
        const widget = button.closest(selector);
        if (!widget) return;
        const activo = widget.querySelector('[role="tab"][aria-selected="true"]');
        const actual = activo ? Number(activo.dataset.case) : 0;
        if (button.matches('[data-case]')) seleccionar(widget, Number(button.dataset.case), false);
        else if (button.matches('[data-placas-step]')) seleccionar(widget, actual + Number(button.dataset.placasStep), true);
    });

    document.addEventListener('keydown', function (e) {
        const actual = e.target.closest('.pcr-widget [role="tab"]');
        if (!actual) return;
        const widget = actual.closest(selector);
        if (!widget) return;
        const paso = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!paso && e.key !== 'Home' && e.key !== 'End') return;
        e.preventDefault();
        const pestanas = Array.from(widget.querySelectorAll('[role="tab"][data-case]'));
        const indice = e.key === 'Home' ? 0 : e.key === 'End' ? pestanas.length-1 : (Number(actual.dataset.case) + paso + pestanas.length) % pestanas.length;
        seleccionar(widget, indice, false);
        pestanas[indice].focus({preventScroll: true});
    });
}());
