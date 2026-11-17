/* MC325 — Carrusel de fondos fotográficos a pantalla completa, no etiquetas <img>.
   Integración sobre la portada existente; no modifica contenidos ni otros módulos. */
(() => {
  'use strict';
  const slides = [
    {
      number: 1,
      unitId: 'unidad1',
      title: 'Esfuerzos',
      image: 'assets/carrusel-unidad-1.webp',
      description: 'Comprende cómo actúan las fuerzas internas en los elementos estructurales y cómo se originan los esfuerzos ante diferentes cargas.',
      detail: 'Una introducción a los esfuerzos normales y cortantes, y a su relación con la resistencia de los materiales.',
      tags: ['Esfuerzos normales', 'Esfuerzos cortantes', 'Comportamiento estructural']
    },
    {
      number: 2,
      unitId: 'unidad3',
      title: 'Criterios de Falla y Fatiga',
      image: 'assets/carrusel-unidad-2.webp',
      description: 'Comprende por qué fallan los elementos mecánicos y cómo influyen las cargas repetidas en su vida útil.',
      detail: 'Estudia los criterios de resistencia estática y el comportamiento de los materiales sometidos a esfuerzos variables o cíclicos.',
      tags: ['Criterios de falla', 'Fatiga', 'Diseño seguro']
    },
    {
      number: 3,
      unitId: 'unidad4',
      title: 'Elementos Curvos',
      image: 'assets/carrusel-unidad-3.webp',
      description: 'Analiza los esfuerzos y deformaciones en arcos, vigas curvas y otros miembros de geometría no recta.',
      detail: 'Explora el comportamiento de las estructuras curvas frente a cargas y momentos, incluyendo sus esfuerzos internos.',
      tags: ['Vigas curvas', 'Arcos', 'Esfuerzos internos']
    },
    {
      number: 4,
      unitId: 'unidad5',
      title: 'Placas Planas',
      image: 'assets/carrusel-unidad-4.webp',
      description: 'Conoce cómo se deforman las placas delgadas y cómo se distribuyen sus esfuerzos bajo cargas transversales.',
      detail: 'Introduce el análisis de placas rectangulares y circulares, sus condiciones de apoyo y los conceptos de flexión.',
      tags: ['Flexión de placas', 'Deflexiones', 'Distribución de esfuerzos']
    },
    {
      number: 5,
      unitId: 'unidad6',
      title: 'Cilindros de Pared Gruesa y Volantes',
      image: 'assets/carrusel-unidad-5.webp',
      description: 'Estudia el comportamiento mecánico de cilindros sometidos a presión y de elementos que trabajan en rotación.',
      detail: 'Revisa la distribución de tensiones en recipientes de pared gruesa y las aplicaciones de los elementos rotativos.',
      tags: ['Presión interna', 'Tensiones radiales', 'Volantes']
    },
    {
      number: 6,
      unitId: 'unidad7',
      title: 'Vigas de Sección Variable',
      image: 'assets/carrusel-unidad-6.webp',
      description: 'Analiza vigas cuya sección transversal cambia a lo largo del elemento y sus aplicaciones estructurales.',
      detail: 'Conoce cómo las variaciones de geometría afectan la resistencia y la deformación de las vigas bajo carga.',
      tags: ['Sección variable', 'Flexión', 'Aplicaciones estructurales']
    }
  ];
  const delay = 10000;
  const section = document.querySelector('.mc325-landing-section');
  const oldGrid = section?.querySelector('.mc325-topics');
  if (!oldGrid) return;
  const root = document.createElement('div');
  root.className = 'mc325-carousel mc325-carousel-banner';
  root.setAttribute('role', 'region');
  root.setAttribute('aria-label', 'Principales temas de Resistencia de Materiales II');
  root.setAttribute('aria-roledescription', 'carrusel');
  root.tabIndex = 0;
  root.innerHTML = `
    <div class="mc325-carousel-photo is-visible" aria-hidden="true"></div>
    <div class="mc325-carousel-photo" aria-hidden="true"></div>
    <div class="mc325-carousel-overlay" aria-hidden="true"></div>
    <div class="mc325-carousel-copy">
      <span class="mc325-carousel-kicker"></span>
      <h3 class="mc325-carousel-title"></h3>
      <p class="mc325-carousel-description"></p>
      <a class="mc325-carousel-link" href="materiales.html?unidad=unidad1">Explorar unidad <span aria-hidden="true">→</span></a>
    </div>
    <div class="mc325-carousel-bottom">
      <div class="mc325-carousel-dots" role="group" aria-label="Cambiar de tema"></div>
    </div>
    <div class="mc325-carousel-nav">
      <button type="button" class="mc325-carousel-arrow mc325-carousel-prev" aria-label="Tema anterior">&#10094;</button>
      <button type="button" class="mc325-carousel-arrow mc325-carousel-next" aria-label="Tema siguiente">&#10095;</button>
    </div>
    <span class="mc325-carousel-sr" aria-live="polite" aria-atomic="true"></span>
  `;
  oldGrid.replaceWith(root);
  const subtitle = section.querySelector('.mc325-landing-heading p');
  if (subtitle) subtitle.textContent = 'Descubre los temas del curso y accede directamente a cada unidad.';
  const el = {
    photos: [...root.querySelectorAll('.mc325-carousel-photo')],
    kicker: root.querySelector('.mc325-carousel-kicker'),
    title: root.querySelector('.mc325-carousel-title'),
    desc: root.querySelector('.mc325-carousel-description'),
    link: root.querySelector('.mc325-carousel-link'),
    dots: root.querySelector('.mc325-carousel-dots'),
    sr: root.querySelector('.mc325-carousel-sr')
  };
  const dotButtons = slides.map((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'mc325-carousel-dot';
    dot.setAttribute('aria-label', `Mostrar unidad ${slide.number}: ${slide.title}`);
    dot.addEventListener('click', () => show(i, true));
    el.dots.append(dot);
    return dot;
  });
  slides.slice(1).forEach(s => { const preload = new Image(); preload.src = s.image; });
  let active = 0;
  let visibleLayer = 0;
  let timer;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  function restartClock() {
    window.clearTimeout(timer);
    if (!reduceMotion && !document.hidden) {
      timer = window.setTimeout(() => show((active + 1) % slides.length), delay);
    }
  }
  function show(index, manual = false, initial = false) {
    active = (index + slides.length) % slides.length;
    const s = slides[active];
    // Fondo CSS con dos capas: una difuminada para rellenar y otra nítida
    // a tamaño completo para conservar el foco principal sin recortarlo.
    // Dos elementos permiten la transición sin parpadeos.
    const nextLayer = initial ? visibleLayer : 1 - visibleLayer;
    // La unidad Esfuerzos necesita un encuadre propio para mostrar ambos anclajes.
    el.photos[nextLayer].classList.toggle('mc325-carousel-unit1', s.number === 1);
    el.photos[nextLayer].style.backgroundImage = `url("${s.image}")`;
    if (!initial) {
      el.photos[nextLayer].classList.add('is-visible');
      el.photos[visibleLayer].classList.remove('is-visible');
      visibleLayer = nextLayer;
    }
    el.kicker.textContent = `UNIDAD ${String(s.number).padStart(2,'0')} · RESISTENCIA DE MATERIALES II`;
    el.title.textContent = s.title;
    el.desc.textContent = s.description;
    el.link.href = `materiales.html?unidad=${s.unitId}`;
    el.link.setAttribute('aria-label', `Explorar unidad ${s.number}: ${s.title}`);
    dotButtons.forEach((dot,i) => {
      dot.classList.toggle('is-current',i===active);
      dot.setAttribute('aria-pressed',String(i===active));
    });
    if (manual) el.sr.textContent = `Unidad ${s.number}: ${s.title}`;
    restartClock();
  }
  root.querySelector('.mc325-carousel-prev').addEventListener('click', () => show(active-1,true));
  root.querySelector('.mc325-carousel-next').addEventListener('click', () => show(active+1,true));
  root.addEventListener('keydown',event => {
    if (event.target.closest('a,button')) return;
    if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    show(active+(event.key==='ArrowRight'?1:-1),true);
  });
  document.addEventListener('visibilitychange',restartClock);
  show(0,false,true);
})();
