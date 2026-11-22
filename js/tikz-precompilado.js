/* MC325: TikZ complejo precompilado, integrado como SVG en el DOM (no <img>). */
(function () {
    'use strict';
    const LIMITE = 65536;
    const SVG = 'http://www.w3.org/2000/svg';
    const XLINK = 'http://www.w3.org/1999/xlink';
    const XMLNS = 'http://www.w3.org/2000/xmlns/';
    const etiquetas = new Set('svg g defs path use rect circle ellipse line polyline polygon clipPath mask pattern linearGradient radialGradient stop symbol title desc'.split(' '));
    const atributos = new Set('id viewBox width height x y x1 y1 x2 y2 cx cy r rx ry d points transform fill fill-rule fill-opacity stroke stroke-width stroke-opacity stroke-linecap stroke-linejoin stroke-miterlimit stroke-dasharray stroke-dashoffset opacity clip-path clip-rule clipPathUnits mask maskUnits maskContentUnits patternUnits patternContentUnits patternTransform gradientUnits gradientTransform spreadMethod offset stop-color stop-opacity fx fy fr preserveAspectRatio'.split(' '));
    const normalizar = codigo => codigo.replace(/\r\n?/g, '\n').replace(/^[ \t\n]+|[ \t\n]+$/g, '');
    const bytes = codigo => new TextEncoder().encode(normalizar(codigo));
    const esPesado = codigo => bytes(codigo).length > LIMITE;
    let secuencia = 0;
    async function clave(codigo) {
        const digest = await crypto.subtle.digest('SHA-256', bytes(codigo));
        return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
    }
    // Live Server inyecta su propio script de recarga antes de </svg>.
    // Retirarlo antes del análisis XML; nunca ejecutar código recibido.
    function quitarRecargaLiveServer(texto) {
        return texto.replace(/<!--\s*Code injected by live-server\s*-->\s*<script\s*>([\s\S]*?)<\/script>\s*(?=<\/svg>\s*$)/i, (bloque, codigo) => {
            if (/WebSocket/.test(codigo) && /Live reload enabled/.test(codigo) && /location\.reload/.test(codigo)) return '';
            return bloque;
        });
    }
    function integrar(texto) {
        texto = quitarRecargaLiveServer(texto);
        const doc = new DOMParser().parseFromString(texto, 'image/svg+xml');
        const raiz = doc.documentElement;
        if (doc.doctype || doc.querySelector('parsererror') || raiz.namespaceURI !== SVG || raiz.localName !== 'svg' || !raiz.hasAttribute('viewBox')) throw new Error('SVG inválido');
        const nodos = [raiz, ...raiz.querySelectorAll('*')];
        const prefijo = 'mc325-tikz-' + (++secuencia) + '-';
        const ids = new Map();
        for (const nodo of nodos) {
            if (nodo.namespaceURI !== SVG || !etiquetas.has(nodo.localName)) throw new Error('Elemento SVG no permitido: ' + nodo.localName);
            const id = nodo.getAttribute('id');
            if (id !== null) {
                if (ids.has(id)) throw new Error('Identificador SVG duplicado');
                ids.set(id, prefijo + ids.size);
            }
        }
        function referencia(id) {
            if (!ids.has(id)) throw new Error('Referencia SVG no local');
            return '#' + ids.get(id);
        }
        for (const nodo of nodos) {
            for (const a of Array.from(nodo.attributes)) {
                const nombre = a.localName, valor = a.value;
                if (a.namespaceURI === XMLNS) continue;
                if (nombre === 'href' && (a.namespaceURI === XLINK || !a.namespaceURI)) {
                    if (nodo.localName !== 'use' || !valor.startsWith('#')) throw new Error('Enlace SVG no permitido');
                    nodo.setAttributeNS(a.namespaceURI, a.name, referencia(valor.slice(1)));
                    continue;
                }
                if (a.namespaceURI || !atributos.has(nombre)) throw new Error('Atributo SVG no permitido: ' + a.name);
                if (nombre === 'id') { nodo.setAttribute('id', ids.get(valor)); continue; }
                // Cairo usa colores, números y referencias url(#id); nunca URLs externas.
                if (/url\s*\(/i.test(valor)) {
                    const local = /^url\(\s*#([^\s()]+)\s*\)$/i.exec(valor);
                    if (!local || !['fill','stroke','clip-path','mask'].includes(nombre)) throw new Error('Recurso SVG no local');
                    nodo.setAttribute(nombre, 'url(' + referencia(local[1]) + ')');
                } else if (/[\\]/.test(valor)) throw new Error('Escape SVG no permitido');
            }
        }
        const svg = document.importNode(raiz, true);
        svg.classList.add('tikz-precompilado');
        svg.setAttribute('role', 'img');
        svg.setAttribute('aria-label', 'Diagrama vectorial del artículo');
        svg.setAttribute('focusable', 'false');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        return svg;
    }
    async function mostrar(contenedor, codigo) {
        const aviso = document.createElement('p');
        aviso.className = 'tikz-aviso';
        aviso.setAttribute('role', 'status');
        aviso.textContent = 'Cargando figura vectorial…';
        contenedor.replaceChildren(aviso);
        const vigente = () => contenedor.isConnected && aviso.parentNode === contenedor;
        const noDisponible = (error) => {
            if (!vigente()) return;
            aviso.textContent = 'No se pudo cargar esta figura precompilada. Comprueba la publicación de GitHub Actions o los archivos locales.';
            aviso.title = error && error.message ? error.message : 'Error desconocido';
        };
        try {
            const id = await clave(codigo);
            if (!vigente()) return;
            const url = new URL('assets/tikz-precompilado/v1/' + id + '.svg', document.baseURI);
            if (url.origin !== location.origin) throw new Error('Origen no permitido');
            const respuesta = await fetch(url, {cache:'no-cache', mode:'same-origin', redirect:'error'});
            if (!respuesta.ok) throw new Error('HTTP ' + respuesta.status);
            const texto = await respuesta.text();
            if (!vigente()) return;
            const svg = integrar(texto);
            if (vigente()) contenedor.replaceChildren(svg);
        } catch (error) {
            console.warn('MC325: no se pudo insertar el gráfico precompilado.', error);
            noDisponible(error);
        }
    }
    window.MC325Tikz = {esPesado, clave, mostrar};
})();
