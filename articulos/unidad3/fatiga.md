## 1. Fundamentos de la fatiga

**MSc. Ing. Edén A. Capcha — Universidad Nacional de Ingeniería, FIM.**

Los criterios de falla estática se desarrollan en la Unidad 2.

### Fundamentos de fatiga

### Naturaleza cíclica de las cargas

La figura siguiente muestra una probeta sometida a una carga cíclica y la variación del esfuerzo entre sus valores extremos.

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="graficas k/probeta grafica.png" alt="Naturaleza cíclica de las cargas" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Naturaleza cíclica de las cargas.</em></p>
</div>


### Fallas por fatiga

Las figuras siguientes muestran las zonas de iniciación de la grieta, propagación progresiva y rotura final.

<!-- IMAGEN PDF: pág. 31, figura 2. Guardar en imagenes_pdf/fig-p31-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p31-02.png" alt="Marcas de playa y zonas de rotura súbita" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 31, figura 2</strong><p>Marcas de playa y zonas de rotura súbita</p><p><code>imagenes_pdf/fig-p31-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 32, figura 1. Guardar en imagenes_pdf/fig-p32-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p32-01.png" alt="Inicio y propagación de grieta; zona de falla final" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 32, figura 1</strong><p>Inicio y propagación de grieta; zona de falla final</p><p><code>imagenes_pdf/fig-p32-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 32, figura 2. Guardar en imagenes_pdf/fig-p32-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p32-02.png" alt="Iniciación, propagación y rotura final de una barra" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 32, figura 2</strong><p>Iniciación, propagación y rotura final de una barra</p><p><code>imagenes_pdf/fig-p32-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 32, figura 3. Guardar en imagenes_pdf/fig-p32-03.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p32-03.png" alt="Fotografía de una superficie de fractura por fatiga" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 32, figura 3</strong><p>Fotografía de una superficie de fractura por fatiga</p><p><code>imagenes_pdf/fig-p32-03.png</code></p>
</div>

<div class="fatiga-modern-card">
<style>
.fatiga-modern-card {
max-width: 740px;
margin: 25px auto;
background: #ffffff;
border: 1px solid #cbd5e1;
border-radius: 12px;
padding: 20px;
font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
color: #1e293b;
box-sizing: border-box;
}
.fmc-header {
text-align: center;
margin-bottom: 16px;
}
.fmc-title {
font-size: 1.15rem;
font-weight: 700;
color: #5c1d1d;
margin: 0 0 4px 0;
}
.fmc-subtitle {
font-size: 0.85rem;
color: #64748b;
margin: 0;
}
.fmc-tabs {
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 4px;
margin-bottom: 16px;
}
@media (max-width: 650px) {
.fmc-tabs { grid-template-columns: repeat(3, 1fr); }
}
.fmc-tab-label {
background: #f1f5f9;
border: 1px solid #e2e8f0;
border-radius: 6px;
padding: 8px 4px;
font-size: 0.72rem;
font-weight: 600;
color: #475569;
text-align: center;
cursor: pointer;
transition: all 0.2s ease;
user-select: none;
}
.fmc-tab-label:hover {
background: #e2e8f0;
color: #1e293b;
}
.fmc-radio {
display: none;
}
.fmc-viewport {
background: #f8fafc;
border: 1px solid #e2e8f0;
border-radius: 10px;
padding: 16px;
min-height: 240px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
box-sizing: border-box;
overflow: hidden;
}
.fmc-slide {
display: none;
width: 100%;
text-align: center;
animation: fmcFade 0.3s ease-in-out;
}
@keyframes fmcFade {
from { opacity: 0; transform: translateY(4px); }
to { opacity: 1; transform: translateY(0); }
}
#tab1:checked ~ .fmc-tabs label[for="tab1"],
#tab2:checked ~ .fmc-tabs label[for="tab2"],
#tab3:checked ~ .fmc-tabs label[for="tab3"],
#tab4:checked ~ .fmc-tabs label[for="tab4"],
#tab5:checked ~ .fmc-tabs label[for="tab5"] {
background: #fef2f2;
color: #991b1b;
border-color: #ef4444;
box-shadow: 0 2px 5px rgba(239, 68, 68, 0.12);
}
#tab1:checked ~ .fmc-viewport #slide1,
#tab2:checked ~ .fmc-viewport #slide2,
#tab3:checked ~ .fmc-viewport #slide3,
#tab4:checked ~ .fmc-viewport #slide4,
#tab5:checked ~ .fmc-viewport #slide5 {
display: block;
}
.fmc-svg-box {
max-width: 100%;
width: 100%;
height: auto;
display: block;
margin: 0 auto;
}
.real-photo-layout {
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
width: 100%;
box-sizing: border-box;
}
@media (max-width: 650px) {
.real-photo-layout { flex-wrap: wrap; }
}
.photo-pin-container {
position: relative;
display: inline-block;
flex-shrink: 0;
}
.real-photo-proportional {
width: 260px;
height: auto;
border-radius: 8px;
border: 2px solid #334155;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
display: block;
}
.pin {
position: absolute;
width: 16px;
height: 16px;
border-radius: 50%;
border: 2px solid #ffffff;
transform: translate(-50%, -50%);
box-shadow: 0 2px 6px rgba(0,0,0,0.4);
cursor: pointer;
animation: pulsePin 2s infinite;
}
@keyframes pulsePin {
0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}
.pin-1 { background: #dc2626; top: 78%; left: 30%; }
.pin-2 { background: #2563eb; top: 52%; left: 48%; }
.pin-3 { background: #475569; top: 25%; left: 72%; }
</style>

<input type="radio" name="fmc-group" id="tab1" class="fmc-radio" checked>
<input type="radio" name="fmc-group" id="tab2" class="fmc-radio">
<input type="radio" name="fmc-group" id="tab3" class="fmc-radio">
<input type="radio" name="fmc-group" id="tab4" class="fmc-radio">
<input type="radio" name="fmc-group" id="tab5" class="fmc-radio">

<div class="fmc-header">
<h4 class="fmc-title">Fases de la Falla por Fatiga en Elementos Mecánicos</h4>
<p class="fmc-subtitle">Haz clic en las pestañas para inspeccionar cada etapa del proceso</p>
</div>

<div class="fmc-tabs">
<label class="fmc-tab-label" for="tab1">1. Iniciación</label>
<label class="fmc-tab-label" for="tab2">2. Propagación</label>
<label class="fmc-tab-label" for="tab3">3. Rotura Súbita</label>
<label class="fmc-tab-label" for="tab4">4. Cara de Fractura</label>
<label class="fmc-tab-label" for="tab5">5. Evidencia Real</label>
</div>

<div class="fmc-viewport">
<!-- SLIDE 1: INICIACIÓN -->
<div class="fmc-slide" id="slide1">
<svg class="fmc-svg-box" viewBox="0 0 500 150" width="100%" height="auto">
<rect x="100" y="35" width="300" height="80" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<line x1="100" y1="75" x2="400" y2="75" stroke="#475569" stroke-width="1" stroke-dasharray="6,4"/>
<path d="M 150,12 L 150,30 M 143,24 L 150,31 L 157,24" stroke="#dc2626" stroke-width="2.5" fill="none"/>
<path d="M 150,138 L 150,120 M 143,126 L 150,119 L 157,126" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M 350,12 L 350,30 M 343,24 L 350,31 L 357,24" stroke="#dc2626" stroke-width="2.5" fill="none"/>
<path d="M 350,138 L 350,120 M 343,126 L 350,119 L 357,126" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M 250,35 L 250,48" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
<circle cx="250" cy="35" r="4.5" fill="#ef4444"/>
<text x="250" y="24" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Defecto / Rayadura Superficial</text>
</svg>
</div>

<!-- SLIDE 2: PROPAGACIÓN -->
<div class="fmc-slide" id="slide2">
<svg class="fmc-svg-box" viewBox="0 0 500 150" width="100%" height="auto">
<rect x="100" y="35" width="300" height="80" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<line x1="100" y1="75" x2="400" y2="75" stroke="#475569" stroke-width="1" stroke-dasharray="6,4"/>
<path d="M 241,35 Q 250,46 259,35 M 237,35 Q 250,55 263,35 M 233,35 Q 250,65 267,35 M 229,35 Q 250,78 271,35" fill="none" stroke="#1e293b" stroke-width="1.5"/>
<path d="M 250,35 L 250,82" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
<circle cx="250" cy="35" r="4.5" fill="#ef4444"/>
<text x="250" y="24" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Propagación con arcos concéntricos ("Playas de fatiga")</text>
</svg>
</div>

<!-- SLIDE 3: ROTURA SÚBITA -->
<div class="fmc-slide" id="slide3">
<svg class="fmc-svg-box" viewBox="0 0 500 150" width="100%" height="auto">
<rect x="70" y="35" width="200" height="80" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<rect x="290" y="38" width="200" height="80" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2" transform="rotate(3 290 75)"/>
<polyline points="275,70 268,79 280,88 270,98 277,108" fill="none" stroke="#7f1d1d" stroke-width="3"/>
<text x="250" y="20" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">¡Colapso Catastrófico Final!</text>
</svg>
</div>

<!-- SLIDE 4: CARA DE FRACTURA TRANSVERSAL -->
<div class="fmc-slide" id="slide4">
<svg class="fmc-svg-box" viewBox="0 0 500 180" width="100%" height="auto">
<circle cx="250" cy="90" r="55" fill="#cbd5e1" stroke="#334155" stroke-width="2.5"/>
<path d="M 205,65 Q 250,45 295,65 Q 295,85 250,85 Q 205,85 205,65 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
<path d="M 230,135 Q 250,125 270,135" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M 215,125 Q 250,110 285,125" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M 200,112 Q 250,95 300,112" fill="none" stroke="#2563eb" stroke-width="2"/>
<circle cx="250" cy="142" r="4" fill="#dc2626"/>
<line x1="250" y1="142" x2="250" y2="165" stroke="#dc2626" stroke-width="1.5"/>
<text x="250" y="175" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">1. Origen / Muesca superficial</text>
<line x1="285" y1="115" x2="355" y2="115" stroke="#2563eb" stroke-width="1.5"/>
<text x="360" y="118" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="start">2. Playas de Fatiga</text>
<line x1="250" y1="55" x2="155" y2="55" stroke="#475569" stroke-width="1.5"/>
<text x="150" y="58" font-size="10" font-weight="bold" fill="#475569" text-anchor="end">3. Rotura Súbita</text>
</svg>
</div>

<!-- SLIDE 5: FOTO REAL DE LABORATORIO CON PINES -->
<div class="fmc-slide" id="slide5">
<div class="real-photo-layout">
<div class="photo-pin-container">
<img class="real-photo-proportional" src="fatiga-real.jpg" alt="Superficie de fractura por fatiga" />
<div class="pin pin-1" title="1. Origen de la fisura"></div>
<div class="pin pin-2" title="2. Playas de fatiga"></div>
<div class="pin pin-3" title="3. Rotura rápida"></div>
</div>
<div style="flex: 1; min-width: 220px; text-align: left; display: flex; flex-direction: column; gap: 6px;">
<div style="background:#fef2f2; border:1px solid #fca5a5; padding:6px 10px; border-radius:6px; font-size:0.82rem;">
<strong style="color:#dc2626;">● 1. Origen:</strong> Concentrador de tensiones donde inicia la microfisura.
</div>
<div style="background:#eff6ff; border:1px solid #93c5fd; padding:6px 10px; border-radius:6px; font-size:0.82rem;">
<strong style="color:#2563eb;">● 2. Playas de Fatiga:</strong> Marcas concéntricas de avance progresivo.
</div>
<div style="background:#f1f5f9; border:1px solid #94a3b8; padding:6px 10px; border-radius:6px; font-size:0.82rem;">
<strong style="color:#475569;">● 3. Rotura Rápida:</strong> Zona rugosa final por sobrecarga.
</div>
</div>
</div>
</div>
</div>
</div>

### Ensayos para evaluar la fatiga

La máquina de flexión rotativa de alta velocidad R.R. Moore funciona con velocidades de 500 a 10 000 rpm y permite aplicar un momento flector de hasta 200 lb·in. Otras máquinas utilizan motores de velocidad constante de 1750 rpm. En una probeta pulida se requiere aproximadamente medio día para alcanzar $10^6$ ciclos y unos 40 días para $10^8$ ciclos. Una serie de ensayos con distintos pesos y probetas semejantes proporciona los datos de fatiga.

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="graficas k/maquina RR.png" alt="Máquina R.R. Moore" style="max-width:100%;height:auto;background:white;">
<img src="graficas k/probeta.png" alt="Probeta estándar y ciclo de esfuerzo" style="max-width:100%;height:auto;background:white;">
<p><em>máquina, probeta y ciclo de esfuerzo.</em></p>
</div>

Video demostrativo: https://www.youtube.com/watch?v=K2pUIuu1CxM

## 2. Métodos para evaluar la vida a fatiga

### Método del esfuerzo–vida

Las curvas esfuerzo–vida relacionan la resistencia a fatiga con el número de ciclos hasta la falla. Se presentan los datos típicos y las curvas para diferentes materiales.

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-1.png" alt="Curva esfuerzo–vida y regiones de vida" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Curva esfuerzo–vida y regiones de vida.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-2.png" alt="Bandas esfuerzo–vida de aleaciones de aluminio" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Bandas esfuerzo–vida de aleaciones de aluminio.</em></p>
</div>


<!-- PDF, pág. 35, figura 2 -->
<div style="border:2px dashed #94a3b8;padding:24px;text-align:center;"><strong>Espacio reservado — PDF, página 35, figura 2</strong><p>Curvas esfuerzo–vida de acero y aleación de aluminio</p><p><code>imagenes_pdf/fig-p35-02.png</code></p></div>


### Método deformación–vida


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/imagen-4.png" alt="Bucle de histéresis y componentes de deformación" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Bucle de histéresis y componentes de deformación.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-5.png" alt="Curvas de deformación elástica, plástica y total" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Curvas de deformación elástica, plástica y total.</em></p>
</div>


La amplitud total se descompone en sus contribuciones elástica y plástica:

$$
\frac{\Delta\varepsilon}{2}=\frac{\Delta\varepsilon_e}{2}+\frac{\Delta\varepsilon_p}{2}
$$

$$
\frac{\Delta\varepsilon_p}{2}=\varepsilon_f'(2N)^c,
\qquad \frac{\Delta\varepsilon_e}{2}=\frac{\sigma_f'}{E}(2N)^b
$$

**Ecuación de Manson–Coffin**

$$
\frac{\Delta\varepsilon}{2}=\frac{\sigma_f'}{E}(2N)^b+\varepsilon_f'(2N)^c
$$

## 3. Límite de resistencia a la fatiga

### Datos experimentales y relación empírica

La gráfica siguiente muestra los datos experimentales que sustentan la estimación del límite de resistencia a fatiga de una probeta de acero en función de su resistencia última a la tensión.

<!-- IMAGEN PDF: pág. 37, figura 1. Guardar en imagenes_pdf/fig-p37-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p37-01.png" alt="Datos experimentales del límite de fatiga frente a la resistencia última" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 37, figura 1</strong><p>Datos experimentales del límite de fatiga frente a la resistencia última</p><p><code>imagenes_pdf/fig-p37-01.png</code></p>
</div>


$$
S'_e=\begin{cases}
0.5S_{ut}, & S_{ut}\leq 200\ \text{ksi}\ (1400\ \text{MPa}),\\
100\ \text{ksi}, & S_{ut}>200\ \text{ksi}\ (1400\ \text{MPa}).
\end{cases}
$$

### Límites de resistencia a la fatiga de otros materiales

<!-- IMAGEN PDF: pág. 38, figura 1. Guardar en imagenes_pdf/fig-p38-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p38-01.png" alt="Tabla de límites aproximados de resistencia a fatiga de materiales" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 38, figura 1</strong><p>Tabla de límites aproximados de resistencia a fatiga de materiales</p><p><code>imagenes_pdf/fig-p38-01.png</code></p>
</div>


<a id="hierro-fundido-gris"></a>
La tabla siguiente presenta las siguientes estimaciones para probetas con cargas completamente invertidas. En la tabla ($S_u$ corresponde a la resistencia última).

| Carga | Material | Resistencia a la fatiga | Condición de $S_u$ |
| --- | --- | --- | --- |
| Flexión invertida | Aceros | $S'_e=0.5S_u$ | Menor que 1400 MPa (200 ksi) |
| Flexión invertida | Aceros | $S'_e=700$ MPa (100 ksi) | Mayor o igual a 1400 MPa (200 ksi) |
| Flexión invertida | Hierros | $S'_e=0.4S_u$ | Menor que 400 MPa (60 ksi) |
| Flexión invertida | Hierros | $S'_e=160$ MPa (24 ksi) | Mayor o igual a 400 MPa (60 ksi) |
| Flexión invertida | Aluminios | $S'_n=0.4S_u$ | Menor que 330 MPa (48 ksi) |
| Flexión invertida | Aluminios | $S'_n=130$ MPa (19 ksi) | Mayor o igual a 330 MPa (48 ksi) |
| Flexión invertida | Aleaciones de cobre | $S'_n=0.4S_u$ | Menor que 280 MPa (40 ksi) |
| Flexión invertida | Aleaciones de cobre | $S'_n=100$ MPa (14 ksi) | Mayor o igual a 280 MPa (40 ksi) |
| Axial | Aceros | $S'_e=0.45S_u$ | — |
| Torsión | Aceros | $S'_{es}=0.29S_u$ | — |
| Torsión | Hierros | $S'_{es}=0.32S_u$ | — |
| Torsión | Aleaciones de cobre | $S'_{es}=0.22S_u$ | — |

Para aceros, la misma tabla indica $S_{us}=0.67S_u$ y $S_{ys}=0.577S_y$.

### Resistencia a la fatiga del hierro fundido gris

La tabla presenta las resistencias de los materiales. El número ASTM identifica la resistencia mínima a tracción expresada en ksi. $S_{su}$ se presenta como módulo de rotura por cortante.

| ASTM | $S_{ut}$ (ksi) | $S_{uc}$ (ksi) | $S_{su}$ (ksi) | $E$ (Mpsi) | Torsión (ksi) | $S_e$ (ksi) |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 20 | 22 | 83 | 26 | 9.6--14 | 3.9--5.6 | 10 |
| 25 | 26 | 97 | 32 | 11.5--14.8 | 4.6--6.0 | 11.5 |
| 30 | 31 | 109 | 40 | 13--16.4 | 5.2--6.6 | 14 |
| 35 | 36.5 | 124 | 48.5 | 14.5--17.2 | 5.8--6.9 | 16 |
| 40 | 42.5 | 140 | 57 | 16--20 | 6.4--7.8 | 18.5 |
| 50 | 52.5 | 164 | 73 | 18.8--22.8 | 7.2--8.0 | 21.5 |
| 60 | 62.5 | 187.5 | 88.5 | 20.4--23.5 | 7.8--8.5 | 24.5 |

## 4. Estimación de la resistencia a la fatiga y curvas S–N


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-1.png" alt="Curva esfuerzo–vida" style="max-width:100%;height:auto;background:white;">
<p><em>curva esfuerzo–vida empleada en la deducción.</em></p>
</div>


A partir de la ecuación de Manson–Coffin:

$$
\frac{\Delta\varepsilon_e}{2}=\frac{\sigma_f'}{E}(2N)^b
\quad\Longrightarrow\quad
\frac{\Delta\varepsilon_e E}{2}=\sigma_f'(2N)^b
$$

Identificando $S_f'=\Delta\varepsilon_e E/2$:

$$
S_f'=\sigma_f'(2N)^b.
$$

Para aceros con dureza Brinell $H_B<500$:

$$
\sigma_f'=S_{ut}+50\ \text{ksi}
\qquad\text{o}\qquad
\sigma_f'=S_{ut}+345\ \text{MPa}.
$$

### Deducción del exponente b

Si se conoce $S'_e$ y el número de ciclos $N_e$:

$$
S'_e=\sigma_f'(2N_e)^b
\quad\Longrightarrow\quad (2N_e)^b=\frac{S'_e}{\sigma_f'}
$$

$$
b=\frac{\log(S'_e/\sigma_f')}{\log(2N_e)}=-\frac{\log(\sigma_f'/S'_e)}{\log(2N_e)}.
$$

Para el caso de acero con $N_e=10^6$ y $S'_e=0.5S_{ut}$, usando ksi:

$$
b=-\frac{\log[(S_{ut}+50)/(0.50S_{ut})]}{\log(2N_e)}.
$$

### Factor de reducción f

Para $N=10^3$ ciclos:

$$
fS_{ut}=\sigma_f'(2000)^b
\quad\Longrightarrow\quad f=\frac{\sigma_f'(2000)^b}{S_{ut}}.
$$

<!-- IMAGEN PDF: pág. 41, figura 1. Guardar en imagenes_pdf/fig-p41-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p41-01.png" alt="Factor f en función de la resistencia última del acero" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 41, figura 1</strong><p>Factor f en función de la resistencia última del acero</p><p><code>imagenes_pdf/fig-p41-01.png</code></p>
</div>


### Ecuación de la curva esfuerzo–vida

Conocido el factor $f$, se plantean $S_f=aN^b$ y las condiciones:

$$
fS_{ut}=a(10^3)^b,\qquad S_e=a(10^6)^b.
$$

Resolviendo el sistema:

$$
a=\frac{(fS_{ut})^2}{S_e},\qquad b=-\frac13\log\left(\frac{fS_{ut}}{S_e}\right).
$$

Para esfuerzos completamente invertidos:

$$
N=\left(\frac{\sigma_{inv}}{a}\right)^{1/b}.
$$

### Ejercicio de aplicación

Acero rolado en caliente de $S_{ut}=90\ \text{ksi}$. Estimar el límite de resistencia a fatiga en viga rotatoria a $10^6$ ciclos, la resistencia a fatiga para $10^4$ ciclos y la vida esperada de una probeta pulida sometida a un esfuerzo completamente invertido de 55 ksi.

## 5. Factores de modificación del límite de resistencia a la fatiga

<a id="relacion-de-marin"></a>
### Relación de Marin

El límite de fatiga de probeta se corrige para representar las condiciones del componente mediante la relación de Marin:

$$
S_e=k_a k_b k_c k_d k_e k_f S_e'.
$$

Los factores representan acabado superficial ($k_a$), tamaño ($k_b$), tipo de carga ($k_c$), temperatura ($k_d$), confiabilidad ($k_e$) y efectos varios ($k_f$). Se multiplican por el límite de probeta $S_e'$ para obtener el límite corregido $S_e$. El uso de cada factor y sus correlaciones depende del material y de las condiciones de diseño.

<a id="acabado-superficial"></a>
### Acabado superficial

Una correlación empírica es $k_a=aS_{ut}^{b}$. Los coeficientes dependen del acabado y de las unidades de $S_{ut}$:

| Acabado | $a$ ($S_{ut}$ en ksi) | $a$ ($S_{ut}$ en MPa) | $b$ |
| --- | ---: | ---: | ---: |
| Esmerilado | 1.34 | 1.58 | $-0.085$ |
| Maquinado o laminado en frío | 2.70 | 4.51 | $-0.265$ |
| Laminado en caliente | 14.4 | 57.7 | $-0.718$ |
| Como sale de forja | 39.9 | 272 | $-0.995$ |

Se debe usar el par de coeficientes correspondiente a un solo sistema de unidades; no se combinan coeficientes de ksi con valores de resistencia en MPa ni a la inversa.

<a id="tamano"></a>
### Tamaño

Para flexión y torsión, usando el diámetro equivalente $d$:

$$
k_b=\begin{cases}
0.879d^{-0.107},&0.11\leq d\leq2\ \text{pulg},\\
0.91d^{-0.157},&2<d\leq10\ \text{pulg},\\
1.24d^{-0.107},&2.79\leq d\leq51\ \text{mm},\\
1.51d^{-0.157},&51<d\leq254\ \text{mm}.
\end{cases}
$$

Para carga axial se toma $k_b=1$. Las expresiones son correlaciones aproximadas y válidas en los intervalos indicados. 


<!-- IMAGEN PDF: pág. 44, figura 1. Guardar en imagenes_pdf/fig-p44-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p44-01.png" alt="Geometrías y diámetros equivalentes para el factor de tamaño" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 44, figura 1</strong><p>Geometrías y diámetros equivalentes para el factor de tamaño</p><p><code>imagenes_pdf/fig-p44-01.png</code></p>
</div>

<a id="tipo-de-carga"></a>
### Tipo de carga

Los valores tabulados para el factor de carga son:

| Tipo de carga | $k_c$ |
| --- | ---: |
| Flexión | 1.00 |
| Carga axial | 0.85 |
| Torsión | 0.59 |

Estos valores forman parte del método empírico presentado y no sustituyen resultados de ensayos de fatiga cuando el material o el modo de carga difieren de las hipótesis.


<!-- IMAGEN PDF: pág. 45, figura 1. Guardar en imagenes_pdf/fig-p45-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p45-01.png" alt="Expresión original del factor de carga; datos ya digitalizados arriba" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 45, figura 1</strong><p>Expresión original del factor de carga; datos ya digitalizados arriba</p><p><code>imagenes_pdf/fig-p45-01.png</code></p>
</div>

<a id="temperatura"></a>
### Temperatura

En unidades inglesas, una estimación polinómica del factor de temperatura es:

$$
\begin{aligned}
k_d={}&0.975+0.432(10^{-3})T_F-0.115(10^{-5})T_F^2+0.104(10^{-8})T_F^3\\
&-0.595(10^{-12})T_F^4,\qquad70\leq T_F\leq1000\ ^\circ\mathrm{F}.
\end{aligned}
$$

Otra estimación usa la razón entre resistencia a la temperatura de operación y a temperatura ambiente, $k_d=S_T/S_{RT}$:

| $T$ ($^\circ$C) | $S_T/S_{RT}$ | $T$ ($^\circ$F) | $S_T/S_{RT}$ |
| ---: | ---: | ---: | ---: |
| 20 | 1.000 | 70 | 1.000 |
| 50 | 1.010 | 100 | 1.008 |
| 100 | 1.020 | 200 | 1.020 |
| 150 | 1.025 | 300 | 1.024 |
| 200 | 1.020 | 400 | 1.018 |
| 250 | 1.000 | 500 | 0.995 |
| 300 | 0.975 | 600 | 0.963 |
| 350 | 0.943 | 700 | 0.927 |
| 400 | 0.900 | 800 | 0.872 |
| 450 | 0.843 | 900 | 0.797 |
| 500 | 0.768 | 1000 | 0.698 |
| 550 | 0.672 | 1100 | 0.567 |
| 600 | 0.549 |  |  |

El polinomio solo se indica para hasta $1000\ ^\circ$F; los valores de la tabla hasta $1100\ ^\circ$F no amplían automáticamente su intervalo de validez. 


<!-- IMAGEN PDF: pág. 45, figura 2. Guardar en imagenes_pdf/fig-p45-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p45-02.png" alt="Tabla original de temperatura; datos ya digitalizados arriba" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 45, figura 2</strong><p>Tabla original de temperatura; datos ya digitalizados arriba</p><p><code>imagenes_pdf/fig-p45-02.png</code></p>
</div>

<a id="confiabilidad-y-efectos-varios"></a>
### Confiabilidad y efectos varios

La aproximación para el factor de confiabilidad es $k_e=1-0.08z_a$. Los valores tabulados son:

| Confiabilidad (%) | $z_a$ | $k_e$ |
| ---: | ---: | ---: |
| 50 | 0 | 1.000 |
| 90 | 1.288 | 0.897 |
| 95 | 1.645 | 0.868 |
| 99 | 2.326 | 0.814 |
| 99.9 | 3.091 | 0.753 |
| 99.99 | 3.719 | 0.702 |
| 99.999 | 4.265 | 0.659 |
| 99.9999 | 4.753 | 0.620 |

El factor $k_f$ agrupa efectos no considerados en los otros factores, por ejemplo, condiciones ambientales. Depende del ambiente y de datos experimentales; si no se dispone de información adicional, se adopta $k_f=1$. 



## 6. Factor geométrico de concentración de esfuerzos (Kt)

Los cambios geométricos perturban el flujo de esfuerzos y generan valores locales superiores al esfuerzo nominal. Para carga estática o para caracterizar la solución elástica de la geometría se definen:

$$
K_t=\frac{\sigma_{\max}}{\sigma_{\mathrm{nom}}},\qquad
K_{ts}=\frac{\tau_{\max}}{\tau_{\mathrm{nom}}}.
$$

Los factores teóricos dependen de la geometría y de la forma de carga; se obtienen de análisis elástico, tablas o gráficas. 



<div class="kt-img-card">
<style>
.kt-img-card {
max-width: 100%;
margin: 25px auto;
background: #ffffff;
border: 1px solid #cbd5e1;
border-radius: 12px;
padding: 20px;
font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
color: #1e293b;
box-sizing: border-box;
text-align: left;
}
.kt-img-header {
margin-bottom: 14px;
}
.kt-img-title {
font-size: 1.15rem;
font-weight: 700;
color: #5c1d1d;
margin: 0 0 4px 0;
}
.kt-img-subtitle {
font-size: 0.85rem;
color: #64748b;
margin: 0;
}
.kt-img-grid {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 4px;
margin-bottom: 16px;
}
@media (max-width: 700px) {
.kt-img-grid { grid-template-columns: repeat(3, 1fr); }
}
.kt-img-tab {
background: #f1f5f9;
border: 1px solid #e2e8f0;
border-radius: 6px;
padding: 6px 2px;
font-size: 0.78rem;
font-weight: 600;
color: #475569;
text-align: center;
cursor: pointer;
transition: all 0.2s ease;
user-select: none;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.kt-img-tab:hover {
background: #e2e8f0;
color: #1e293b;
}
.kt-img-radio {
display: none;
}
.kt-img-viewport {
background: #f8fafc;
border: 1px solid #e2e8f0;
border-radius: 10px;
padding: 16px;
min-height: 300px;
box-sizing: border-box;
}
.kt-img-slide {
display: none;
width: 100%;
text-align: center;
animation: ktImgFade 0.3s ease-in-out;
}
@keyframes ktImgFade {
from { opacity: 0; transform: translateY(4px); }
to { opacity: 1; transform: translateY(0); }
}
#kimg3:checked ~ .kt-img-grid label[for="kimg3"],
#kimg4:checked ~ .kt-img-grid label[for="kimg4"],
#kimg5:checked ~ .kt-img-grid label[for="kimg5"],
#kimg6:checked ~ .kt-img-grid label[for="kimg6"],
#kimg7:checked ~ .kt-img-grid label[for="kimg7"],
#kimg8:checked ~ .kt-img-grid label[for="kimg8"],
#kimg9:checked ~ .kt-img-grid label[for="kimg9"],
#kimg10:checked ~ .kt-img-grid label[for="kimg10"],
#kimg11:checked ~ .kt-img-grid label[for="kimg11"],
#kimg12:checked ~ .kt-img-grid label[for="kimg12"],
#kimg13:checked ~ .kt-img-grid label[for="kimg13"],
#kimg14:checked ~ .kt-img-grid label[for="kimg14"] {
background: #fef2f2;
color: #991b1b;
border-color: #ef4444;
box-shadow: 0 2px 5px rgba(239, 68, 68, 0.12);
}
#kimg3:checked ~ .kt-img-viewport #kslide-img3,
#kimg4:checked ~ .kt-img-viewport #kslide-img4,
#kimg5:checked ~ .kt-img-viewport #kslide-img5,
#kimg6:checked ~ .kt-img-viewport #kslide-img6,
#kimg7:checked ~ .kt-img-viewport #kslide-img7,
#kimg8:checked ~ .kt-img-viewport #kslide-img8,
#kimg9:checked ~ .kt-img-viewport #kslide-img9,
#kimg10:checked ~ .kt-img-viewport #kslide-img10,
#kimg11:checked ~ .kt-img-viewport #kslide-img11,
#kimg12:checked ~ .kt-img-viewport #kslide-img12,
#kimg13:checked ~ .kt-img-viewport #kslide-img13,
#kimg14:checked ~ .kt-img-viewport #kslide-img14 {
display: block;
}
.kt-graphic-img {
max-width: 100%;
height: auto;
max-height: none;
border-radius: 6px;
border: 1px solid #cbd5e1;
background: #ffffff;
display: block;
margin: 0 auto;
}
.kt-img-caption {
font-size: 0.9rem;
font-weight: 700;
color: #1e293b;
margin-bottom: 10px;
text-align: left;
}
</style>

<input type="radio" name="kimg-group" id="kimg3" class="kt-img-radio" checked>
<input type="radio" name="kimg-group" id="kimg4" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg5" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg6" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg7" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg8" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg9" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg10" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg11" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg12" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg13" class="kt-img-radio">
<input type="radio" name="kimg-group" id="kimg14" class="kt-img-radio">

<div class="kt-img-header">
<h4 class="kt-img-title">Ábacos y Geometrías de Concentración de Esfuerzos ($K_t, K_{ts}$)</h4>
<p class="kt-img-subtitle">Gráficas oficiales de referencia para discontinuidades geométricas</p>
</div>

<div class="kt-img-grid">
<label class="kt-img-tab" for="kimg3" title="Agujero Tracción">Aguj. Trac.</label>
<label class="kt-img-tab" for="kimg4" title="Agujero Flexión">Aguj. Flex.</label>
<label class="kt-img-tab" for="kimg5" title="Entalla Tracción">Ent. Trac.</label>
<label class="kt-img-tab" for="kimg6" title="Entalla Flexión">Ent. Flex.</label>
<label class="kt-img-tab" for="kimg7" title="Hombro Tracción">Hom. Trac.</label>
<label class="kt-img-tab" for="kimg8" title="Hombro Flexión">Hom. Flex.</label>
<label class="kt-img-tab" for="kimg9" title="Eje Tracción">Eje Trac.</label>
<label class="kt-img-tab" for="kimg10" title="Eje Torsión">Eje Tors.</label>
<label class="kt-img-tab" for="kimg11" title="Eje Flexión">Eje Flex.</label>
<label class="kt-img-tab" for="kimg12" title="Cilindro Agujero">Cil. Aguj.</label>
<label class="kt-img-tab" for="kimg13" title="Redonda Tracción">Red. Trac.</label>
<label class="kt-img-tab" for="kimg14" title="Redonda Flexión">Red. Flex.</label>
</div>

<div class="kt-img-viewport">

<div class="kt-img-slide" id="kslide-img3">
<div class="kt-img-caption">3. Barra en tensión o compresión simple con un agujero transversal</div>
<img src="graficas k/grafica_3.png" alt="Barra en tensión o compresión simple con un agujero transversal" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img4">
<div class="kt-img-caption">4. Barra rectangular con un agujero transversal en flexión</div>
<img src="graficas k/grafica_4.png" alt="Barra rectangular con un agujero transversal en flexión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img5">
<div class="kt-img-caption">5. Barra rectangular con entallas en tensión o compresión simple</div>
<img src="graficas k/grafica_5.png" alt="Barra rectangular con entallas en tensión o compresión simple" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img6">
<div class="kt-img-caption">6. Barra rectangular con entallas en flexión</div>
<img src="graficas k/grafica_6.png" alt="Barra rectangular con entallas en flexión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img7">
<div class="kt-img-caption">7. Barra rectangular con radio de acuerdo en tensión o compresión simple</div>
<img src="graficas k/grafica_7.png" alt="Barra rectangular con radio de acuerdo en tensión o compresión simple" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img8">
<div class="kt-img-caption">8. Barra rectangular con radio de acuerdo en flexión</div>
<img src="graficas k/grafica_8.png" alt="Barra rectangular con radio de acuerdo en flexión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img9">
<div class="kt-img-caption">9. Eje redondo con radio de acuerdo en tensión</div>
<img src="graficas k/grafica_9.png" alt="Eje redondo con radio de acuerdo en tensión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img10">
<div class="kt-img-caption">10. Eje redondo con radio de acuerdo en torsión</div>
<img src="graficas k/grafica_10.png" alt="Eje redondo con radio de acuerdo en torsión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img11">
<div class="kt-img-caption">11. Eje redondo con radio de acuerdo en flexión</div>
<img src="graficas k/grafica_11.png" alt="Eje redondo con radio de acuerdo en flexión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img12">
<div class="kt-img-caption">12. Eje redondo en flexión con un agujero transversal</div>
<img src="graficas k/grafica_12.png" alt="Eje redondo en flexión con un agujero transversal" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img13">
<div class="kt-img-caption">13. Barra redonda ranurada en tensión</div>
<img src="graficas k/grafica_13.png" alt="Barra redonda ranurada en tensión" class="kt-graphic-img">
</div>

<div class="kt-img-slide" id="kslide-img14">
<div class="kt-img-caption">14. Barra redonda ranurada en flexión</div>
<img src="graficas k/grafica_14.png" alt="Barra redonda ranurada en flexión" class="kt-graphic-img">
</div>

</div>
</div>

## 7. Factor de concentración de esfuerzos por fatiga (Kf) y sensibilidad a la entalla

Se define:

$$
\sigma_{max}=K_f\sigma_0,\qquad \tau_{max}=K_{fs}\tau_0
$$

$$
K_f=\frac{\text{esfuerzo máximo en la pieza de prueba con muesca}}{\text{esfuerzo en la pieza de prueba sin muesca}}.
$$

$$
\begin{aligned}
q&=\frac{K_f-1}{K_t-1}, & K_f&=1+q(K_t-1),\\
q_s&=\frac{K_{fs}-1}{K_{ts}-1}, & K_{fs}&=1+q_s(K_{ts}-1).
\end{aligned}
$$

En general, $0\leq q\leq1$: $q=0$ representa material insensible a la entalla, mientras que $q=1$ implica $K_f=K_t$. De manera análoga se interpreta $q_s$ para cortante. 

Una estimación de Neuber presentada para aceros es:

$$
K_f=1+\frac{K_t-1}{1+\sqrt{a/r}},
$$

donde $r$ es el radio de la raíz y $\sqrt a$ es una constante del material. Para $S_{ut}$ en ksi y $\sqrt a$ en $\sqrt{\mathrm{pulg}}$:

$$
\begin{aligned}
\sqrt{a}_{\text{axial/flexión}}={}&0.246-3.08(10^{-3})S_{ut}+1.51(10^{-5})S_{ut}^2-2.67(10^{-8})S_{ut}^3,\\
\sqrt{a}_{\text{torsión}}={}&0.190-2.51(10^{-3})S_{ut}+1.35(10^{-5})S_{ut}^2-2.67(10^{-8})S_{ut}^3.
\end{aligned}
$$

Estas correlaciones requieren las unidades indicadas y no deben usarse directamente con MPa o mm sin una conversión válida.


<div class="q-img-card">
<style>
.q-img-card {
max-width: 100%;
margin: 25px auto;
background: #ffffff;
border: 1px solid #cbd5e1;
border-radius: 12px;
padding: 20px;
font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
color: #1e293b;
box-sizing: border-box;
text-align: left;
}
.q-img-header {
margin-bottom: 14px;
}
.q-img-title {
font-size: 1.15rem;
font-weight: 700;
color: #5c1d1d;
margin: 0 0 4px 0;
}
.q-img-subtitle {
font-size: 0.85rem;
color: #64748b;
margin: 0;
}
.q-img-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 6px;
margin-bottom: 16px;
}
@media (max-width: 550px) {
.q-img-grid { grid-template-columns: 1fr; }
}
.q-img-tab {
background: #f1f5f9;
border: 1px solid #e2e8f0;
border-radius: 6px;
padding: 8px 10px;
font-size: 0.8rem;
font-weight: 600;
color: #475569;
text-align: center;
cursor: pointer;
transition: all 0.2s ease;
user-select: none;
}
.q-img-tab:hover {
background: #e2e8f0;
color: #1e293b;
}
.q-img-radio {
display: none;
}
.q-img-viewport {
background: #f8fafc;
border: 1px solid #e2e8f0;
border-radius: 10px;
padding: 16px;
min-height: 300px;
box-sizing: border-box;
}
.q-img-slide {
display: none;
width: 100%;
text-align: center;
animation: qImgFade 0.3s ease-in-out;
}
@keyframes qImgFade {
from { opacity: 0; transform: translateY(4px); }
to { opacity: 1; transform: translateY(0); }
}
#qimg1:checked ~ .q-img-grid label[for="qimg1"],
#qimg2:checked ~ .q-img-grid label[for="qimg2"] {
background: #fef2f2;
color: #991b1b;
border-color: #ef4444;
box-shadow: 0 2px 5px rgba(239, 68, 68, 0.12);
}
#qimg1:checked ~ .q-img-viewport #qslide-img1,
#qimg2:checked ~ .q-img-viewport #qslide-img2 {
display: block;
}
.q-graphic-img {
max-width: 100%;
height: auto;
max-height: none;
border-radius: 6px;
border: 1px solid #cbd5e1;
background: #ffffff;
display: block;
margin: 0 auto;
}
.q-img-caption {
font-size: 0.9rem;
font-weight: 700;
color: #1e293b;
margin-bottom: 10px;
text-align: left;
}
</style>

<input type="radio" name="qimg-group" id="qimg1" class="q-img-radio" checked>
<input type="radio" name="qimg-group" id="qimg2" class="q-img-radio">

<div class="q-img-header">
<h4 class="q-img-title">Factor de sensibilidad a la muesca</h4>
<p class="q-img-subtitle">Indica qué tan susceptible es el material a ciertos factores de concentración de esfuerzos</p>
</div>

<div class="q-img-grid">
<label class="q-img-tab" for="qimg1" title="Factor q Axial">1. Factor $q$ axial o flexionante</label>
<label class="q-img-tab" for="qimg2" title="Factor q Torsión">2. Factor $q$ torsión</label>
</div>

<div class="q-img-viewport">
<div class="q-img-slide" id="qslide-img1">
<div class="q-img-caption">1. Factor $q$ para esfuerzo axial o flexionante</div>
<img src="graficas k/grafica_1.png" alt="Factor q para esfuerzo axial o flexionante" class="q-graphic-img">
</div>

<div class="q-img-slide" id="qslide-img2">
<div class="q-img-caption">2. Factor $q$ para esfuerzos de torsión</div>
<img src="graficas k/grafica_2.png" alt="Factor q para esfuerzos de torsión" class="q-graphic-img">
</div>
</div>
</div>



## 8. Esfuerzo medio y esfuerzo alternante


<!-- IMAGEN PDF: pág. 53, figura 1. Guardar en imagenes_pdf/fig-p53-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p53-01.png" alt="Ejemplo de esfuerzo fluctuante irregular" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 53, figura 1</strong><p>Ejemplo de esfuerzo fluctuante irregular</p><p><code>imagenes_pdf/fig-p53-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 53, figura 2. Guardar en imagenes_pdf/fig-p53-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p53-02.png" alt="Ejemplo de esfuerzo fluctuante sinusoidal" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 53, figura 2</strong><p>Ejemplo de esfuerzo fluctuante sinusoidal</p><p><code>imagenes_pdf/fig-p53-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 53, figura 3. Guardar en imagenes_pdf/fig-p53-03.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p53-03.png" alt="Esfuerzo fluctuante no sinusoidal" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 53, figura 3</strong><p>Esfuerzo fluctuante no sinusoidal</p><p><code>imagenes_pdf/fig-p53-03.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 53, figura 4. Guardar en imagenes_pdf/fig-p53-04.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p53-04.png" alt="Ciclo fluctuante con esfuerzo medio positivo" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 53, figura 4</strong><p>Ciclo fluctuante con esfuerzo medio positivo</p><p><code>imagenes_pdf/fig-p53-04.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 53, figura 5. Guardar en imagenes_pdf/fig-p53-05.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p53-05.png" alt="Ciclo con esfuerzo mínimo igual a cero" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 53, figura 5</strong><p>Ciclo con esfuerzo mínimo igual a cero</p><p><code>imagenes_pdf/fig-p53-05.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 54, figura 1. Guardar en imagenes_pdf/fig-p54-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p54-01.png" alt="Ciclo con esfuerzo medio nulo" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 54, figura 1</strong><p>Ciclo con esfuerzo medio nulo</p><p><code>imagenes_pdf/fig-p54-01.png</code></p>
</div>


### Definiciones y ecuaciones de los esfuerzos

$$
\sigma_m=\frac{\sigma_{max}+\sigma_{min}}2,\qquad
\sigma_a=\frac{\sigma_{max}-\sigma_{min}}2,
\qquad \sigma_r=\sigma_{max}-\sigma_{min}=2\sigma_a.
$$

$$
R=\frac{\sigma_{min}}{\sigma_{max}},\qquad A=\frac{\sigma_a}{\sigma_m}.
$$

<div style="max-width: 720px; margin: 25px auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08); color: #1e293b; text-align: left;">
<div style="margin-bottom: 14px; text-align: left;">
<h4 style="font-size: 1.1rem; font-weight: 700; color: #5c1d1d; margin: 0 0 4px 0;">Tipos de Ciclos de Esfuerzo en Fatiga</h4>
<p style="font-size: 0.82rem; color: #64748b; margin: 0;">Representación temporal de las condiciones cíclicas fundamentales</p>
</div>
<div style="display: flex; flex-direction: column; gap: 16px;">

<!-- GRÁFICO 1: Esfuerzo Fluctuante General -->
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
<div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">1. Esfuerzo Fluctuante General</div>
<svg viewBox="0 0 500 180" width="100%" height="auto" style="display: block;">
<!-- Ejes Coordenados -->
<line x1="60" y1="15" x2="60" y2="150" stroke="#1e293b" stroke-width="1.5"/>
<line x1="50" y1="150" x2="475" y2="150" stroke="#1e293b" stroke-width="1.5"/>
<text x="24" y="85" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle" transform="rotate(-90 24,85)">Esfuerzo</text>
<text x="45" y="158" font-size="11" font-style="italic" fill="#1e293b">O</text>
<text x="435" y="165" font-size="11" fill="#1e293b">Tiempo</text>

<!-- Línea de Esfuerzo Medio (Sigma_m) en y = 75 -->
<line x1="70" y1="75" x2="420" y2="75" stroke="#1e293b" stroke-width="1" stroke-dasharray="5,4"/>

<!-- Onda Sinusoidal con cierre final suave y natural -->
<path d="M 70,75 Q 87,35 105,35 Q 122,35 140,75 Q 157.5,115 175,115 Q 192.5,115 210,75 Q 227,35 245,35 Q 262,35 280,75 Q 297.5,115 315,115 Q 332.5,115 350,75 Q 367.5,35 385,35 Q 402.5,35 420,75" fill="none" stroke="#1e293b" stroke-width="2"/>

<!-- Líneas de referencia horizontales -->
<line x1="70" y1="35" x2="120" y2="35" stroke="#94a3b8" stroke-width="0.8"/>
<line x1="140" y1="115" x2="280" y2="115" stroke="#94a3b8" stroke-width="0.8"/>

<!-- Cota Sigma Máx reubicada a la altura de la referencia celeste (x = 105) -->
<line x1="105" y1="35" x2="105" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="105,35 102,41 108,41" fill="#1e293b"/>
<polygon points="105,150 102,144 108,144" fill="#1e293b"/>
<text x="99" y="96" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">σmáx</text>

<!-- Cota Sigma Mín (desde valle y=115 hasta y=150) -->
<line x1="325" y1="115" x2="325" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="325,115 322,121 328,121" fill="#1e293b"/>
<polygon points="325,150 322,144 328,144" fill="#1e293b"/>
<text x="319" y="136" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">σmín</text>

<!-- Cota Sigma Amplitud superior (de línea media y=75 a cresta y=35) -->
<line x1="175" y1="35" x2="175" y2="75" stroke="#1e293b" stroke-width="1"/>
<polygon points="175,35 172,41 178,41" fill="#1e293b"/>
<polygon points="175,75 172,69 178,69" fill="#1e293b"/>
<text x="182" y="58" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Sigma Amplitud inferior (de línea media y=75 a valle y=115) -->
<line x1="245" y1="75" x2="245" y2="115" stroke="#1e293b" stroke-width="1"/>
<polygon points="245,75 242,81 248,81" fill="#1e293b"/>
<polygon points="245,115 242,109 248,109" fill="#1e293b"/>
<text x="252" y="98" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Sigma Medio (σm) en el lado derecho (desde y=75 hasta y=150) -->
<line x1="365" y1="75" x2="365" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="365,75 362,81 368,81" fill="#1e293b"/>
<polygon points="365,150 362,144 368,144" fill="#1e293b"/>
<text x="359" y="116" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">σm</text>

<!-- Cota Rango / Delta Sigma (σr) desplazada a la derecha -->
<line x1="440" y1="35" x2="440" y2="115" stroke="#1e293b" stroke-width="1"/>
<polygon points="440,35 437,41 443,41" fill="#1e293b"/>
<polygon points="440,115 437,109 443,109" fill="#1e293b"/>
<text x="447" y="78" font-size="11" font-weight="bold" fill="#1e293b">σr</text>
</svg>
</div>

<!-- GRÁFICO 2: Esfuerzo Pulsante desde Cero (σmín = 0) -->
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
<div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">2. Esfuerzo Pulsante desde Cero (σmín = 0)</div>
<svg viewBox="0 0 500 180" width="100%" height="auto" style="display: block;">
<!-- Ejes Coordenados -->
<line x1="60" y1="15" x2="60" y2="150" stroke="#1e293b" stroke-width="1.5"/>
<line x1="50" y1="150" x2="475" y2="150" stroke="#1e293b" stroke-width="1.5"/>
<text x="24" y="85" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle" transform="rotate(-90 24,85)">Esfuerzo</text>
<text x="45" y="158" font-size="11" font-style="italic" fill="#1e293b">O</text>
<text x="435" y="165" font-size="11" fill="#1e293b">Tiempo</text>
<text x="145" y="165" font-size="11" font-weight="bold" fill="#1e293b">σmín = 0</text>

<!-- Línea de Esfuerzo Medio (Sigma_m) en y = 92.5 -->
<line x1="70" y1="92.5" x2="420" y2="92.5" stroke="#1e293b" stroke-width="1" stroke-dasharray="5,4"/>

<!-- Onda Sinusoidal con valles tangentes al eje de tiempo en y=150 y cierre final suave -->
<path d="M 70,92.5 Q 87,35 105,35 Q 122,35 140,92.5 Q 157.5,150 175,150 Q 192.5,150 210,92.5 Q 227,35 245,35 Q 262,35 280,92.5 Q 297.5,150 315,150 Q 332.5,150 350,92.5 Q 367.5,35 385,35 Q 402.5,35 420,92.5" fill="none" stroke="#1e293b" stroke-width="2"/>

<!-- Líneas de referencia horizontales -->
<line x1="70" y1="35" x2="120" y2="35" stroke="#94a3b8" stroke-width="0.8"/>

<!-- Cota Sigma Máx reubicada a la altura de la referencia celeste (x = 105) -->
<line x1="105" y1="35" x2="105" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="105,35 102,41 108,41" fill="#1e293b"/>
<polygon points="105,150 102,144 108,144" fill="#1e293b"/>
<text x="99" y="96" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">σmáx</text>

<!-- Cota Sigma Amplitud superior (de línea media y=92.5 a cresta y=35) -->
<line x1="175" y1="35" x2="175" y2="92.5" stroke="#1e293b" stroke-width="1"/>
<polygon points="175,35 172,41 178,41" fill="#1e293b"/>
<polygon points="175,92.5 172,86.5 178,86.5" fill="#1e293b"/>
<text x="182" y="66" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Sigma Amplitud inferior (de línea media y=92.5 al eje en y=150) -->
<line x1="245" y1="92.5" x2="245" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="245,92.5 242,98.5 248,98.5" fill="#1e293b"/>
<polygon points="245,150 242,144 248,144" fill="#1e293b"/>
<text x="252" y="124" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Sigma Medio (σm) en el lado derecho (desde y=92.5 hasta y=150) -->
<line x1="365" y1="92.5" x2="365" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="365,92.5 362,98.5 368,98.5" fill="#1e293b"/>
<polygon points="365,150 362,144 368,144" fill="#1e293b"/>
<text x="359" y="124" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">σm</text>

<!-- Cota Rango / Delta Sigma (σr) desplazada a la derecha -->
<line x1="440" y1="35" x2="440" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="440,35 437,41 443,41" fill="#1e293b"/>
<polygon points="440,150 437,144 443,144" fill="#1e293b"/>
<text x="447" y="96" font-size="11" font-weight="bold" fill="#1e293b">σr</text>
</svg>
</div>

<!-- GRÁFICO 3: Esfuerzo Completamente Invertido (σm = 0) -->
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
<div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">3. Esfuerzo Completamente Invertido (σm = 0)</div>
<svg viewBox="0 0 500 180" width="100%" height="auto" style="display: block;">
<!-- Ejes Coordenados -->
<line x1="60" y1="15" x2="60" y2="165" stroke="#1e293b" stroke-width="1.5"/>
<line x1="50" y1="90" x2="475" y2="90" stroke="#1e293b" stroke-width="1.5"/>
<text x="53" y="25" font-size="12" font-weight="bold" fill="#1e293b">+</text>
<text x="53" y="155" font-size="12" font-weight="bold" fill="#1e293b">−</text>
<text x="24" y="93" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle" transform="rotate(-90 24,93)">Esfuerzo</text>
<text x="45" y="93" font-size="11" font-style="italic" fill="#1e293b" text-anchor="middle">O</text>
<text x="435" y="82" font-size="11" fill="#1e293b">Tiempo</text>
<text x="220" y="165" font-size="11" font-weight="bold" fill="#1e293b">σm = 0</text>

<!-- Onda Sinusoidal simétrica centrada en el eje O (y = 90) con cierre final suave -->
<path d="M 70,90 Q 87,30 105,30 Q 122,30 140,90 Q 157.5,150 175,150 Q 192.5,150 210,90 Q 227,30 245,30 Q 262,30 280,90 Q 297.5,150 315,150 Q 332.5,150 350,90 Q 367.5,30 385,30 Q 402.5,30 420,90" fill="none" stroke="#1e293b" stroke-width="2"/>

<!-- Líneas de referencia horizontales -->
<line x1="70" y1="30" x2="120" y2="30" stroke="#94a3b8" stroke-width="0.8"/>
<line x1="140" y1="150" x2="280" y2="150" stroke="#94a3b8" stroke-width="0.8"/>

<!-- Cota Sigma Amplitud superior (de línea central y=90 a cresta y=30) -->
<line x1="175" y1="30" x2="175" y2="90" stroke="#1e293b" stroke-width="1"/>
<polygon points="175,30 172,36 178,36" fill="#1e293b"/>
<polygon points="175,90 172,84 178,84" fill="#1e293b"/>
<text x="182" y="63" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Sigma Amplitud inferior (de línea central y=90 a valle y=150) -->
<line x1="245" y1="90" x2="245" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="245,90 242,96 248,96" fill="#1e293b"/>
<polygon points="245,150 242,144 248,144" fill="#1e293b"/>
<text x="252" y="123" font-size="11" font-weight="bold" fill="#1e293b">σa</text>

<!-- Cota Rango / Delta Sigma (σr) desplazada a la derecha -->
<line x1="440" y1="30" x2="440" y2="150" stroke="#1e293b" stroke-width="1"/>
<polygon points="440,30 437,36 443,36" fill="#1e293b"/>
<polygon points="440,150 437,144 443,144" fill="#1e293b"/>
<text x="447" y="93" font-size="11" font-weight="bold" fill="#1e293b">σr</text>
</svg>
</div>

</div>
</div>

## 9. Curvas esfuerzo–vida y curvas de vida constante

### Curvas esfuerzo–vida para esfuerzos alternantes

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-3.png" alt="Curvas esfuerzo–vida para varios esfuerzos medios" style="max-width:100%;height:auto;background:white;">
<p><em>familia de curvas esfuerzo–vida para diferentes esfuerzos medios.</em></p>
</div>


### Curvas de vida constante

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-6.png" alt="Curvas de vida constante para diferentes números de ciclos" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Curvas de vida constante para diferentes números de ciclos.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-7.png" alt="Datos normalizados de esfuerzo alternante y medio" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Datos normalizados de esfuerzo alternante y medio.</em></p>
</div>


## 10. Diagramas y criterios de falla por fatiga

<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-8.png" alt="Diagrama de Goodman con esfuerzos máximo y mínimo" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Diagrama de Goodman con esfuerzos máximo y mínimo.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-9.png" alt="Diagrama de Goodman con curvas de vida y razones de carga" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Diagrama de Goodman con curvas de vida y razones de carga.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-10.png" alt="Comparación general de los criterios y línea de Langer" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Comparación general de los criterios y línea de Langer.</em></p>
</div>


<div style="text-align:center;margin:22px auto;max-width:940px;">
<img src="grafica_curvaSN/grafica-11.png" alt="Regiones de seguridad, vida y fluencia" style="max-width:100%;height:auto;background:white;border-radius:6px;">
<p><em>Regiones de seguridad, vida y fluencia.</em></p>
</div>


### Línea de Langer y criterio de Soderberg

En el primer cuadrante del diagrama, la línea de carga se escribe como $S_a=rS_m$, con $r=\sigma_a/\sigma_m$. La recta de Langer corresponde a $S_a+S_m=S_y$. Soderberg une $S_e$ con $S_y$ en los ejes respectivos; su ecuación se obtiene de esa recta del gráfico.

$$
\frac{S_a}{S_e}+\frac{S_m}{S_y}=1,
\qquad n_y=\frac{S_y}{\sigma_a+\sigma_m}.
$$

<div style="max-width:650px;margin:20px auto;text-align:center;">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM4MCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPjxnIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj48dGV4dCB4PSIzMDAiIHk9IjMwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzVjMWQxZCI+U29kZXJiZXJnPC90ZXh0PjxsaW5lIHgxPSI2OCIgeTE9IjMxMCIgeDI9IjU0My4yIiB5Mj0iMzEwIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSI2OCIgeTI9IjQwLjMwMDAwMDAwMDAwMDAxIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NDMuMiIgeT0iMzUwLjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPs+DbTwvdGV4dD48dGV4dCB4PSI0MS42IiB5PSI0OS4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj7Pg2E8L3RleHQ+PHRleHQgeD0iNTcuMCIgeT0iMzMzLjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPjA8L3RleHQ+PGxpbmUgeDE9IjY4IiB5MT0iMTA3LjAiIHgyPSIzNzYuMCIgeTI9IjMxMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIvPjx0ZXh0IHg9IjE0Ny4yIiB5PSIxMzguOSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5MYW5nZXI8L3RleHQ+PHBvbHlsaW5lIHBvaW50cz0iNjguMDAsMTk5LjgwIDcxLjA4LDIwMC45MCA3NC4xNiwyMDIuMDAgNzcuMjQsMjAzLjExIDgwLjMyLDIwNC4yMSA4My40MCwyMDUuMzEgODYuNDgsMjA2LjQxIDg5LjU2LDIwNy41MSA5Mi42NCwyMDguNjIgOTUuNzIsMjA5LjcyIDk4LjgwLDIxMC44MiAxMDEuODgsMjExLjkyIDEwNC45NiwyMTMuMDIgMTA4LjA0LDIxNC4xMyAxMTEuMTIsMjE1LjIzIDExNC4yMCwyMTYuMzMgMTE3LjI4LDIxNy40MyAxMjAuMzYsMjE4LjUzIDEyMy40NCwyMTkuNjQgMTI2LjUyLDIyMC43NCAxMjkuNjAsMjIxLjg0IDEzMi42OCwyMjIuOTQgMTM1Ljc2LDIyNC4wNCAxMzguODQsMjI1LjE1IDE0MS45MiwyMjYuMjUgMTQ1LjAwLDIyNy4zNSAxNDguMDgsMjI4LjQ1IDE1MS4xNiwyMjkuNTUgMTU0LjI0LDIzMC42NiAxNTcuMzIsMjMxLjc2IDE2MC40MCwyMzIuODYgMTYzLjQ4LDIzMy45NiAxNjYuNTYsMjM1LjA2IDE2OS42NCwyMzYuMTcgMTcyLjcyLDIzNy4yNyAxNzUuODAsMjM4LjM3IDE3OC44OCwyMzkuNDcgMTgxLjk2LDI0MC41NyAxODUuMDQsMjQxLjY4IDE4OC4xMiwyNDIuNzggMTkxLjIwLDI0My44OCAxOTQuMjgsMjQ0Ljk4IDE5Ny4zNiwyNDYuMDggMjAwLjQ0LDI0Ny4xOSAyMDMuNTIsMjQ4LjI5IDIwNi42MCwyNDkuMzkgMjA5LjY4LDI1MC40OSAyMTIuNzYsMjUxLjU5IDIxNS44NCwyNTIuNzAgMjE4LjkyLDI1My44MCAyMjIuMDAsMjU0LjkwIDIyNS4wOCwyNTYuMDAgMjI4LjE2LDI1Ny4xMCAyMzEuMjQsMjU4LjIxIDIzNC4zMiwyNTkuMzEgMjM3LjQwLDI2MC40MSAyNDAuNDgsMjYxLjUxIDI0My41NiwyNjIuNjEgMjQ2LjY0LDI2My43MiAyNDkuNzIsMjY0LjgyIDI1Mi44MCwyNjUuOTIgMjU1Ljg4LDI2Ny4wMiAyNTguOTYsMjY4LjEyIDI2Mi4wNCwyNjkuMjMgMjY1LjEyLDI3MC4zMyAyNjguMjAsMjcxLjQzIDI3MS4yOCwyNzIuNTMgMjc0LjM2LDI3My42MyAyNzcuNDQsMjc0Ljc0IDI4MC41MiwyNzUuODQgMjgzLjYwLDI3Ni45NCAyODYuNjgsMjc4LjA0IDI4OS43NiwyNzkuMTQgMjkyLjg0LDI4MC4yNSAyOTUuOTIsMjgxLjM1IDI5OS4wMCwyODIuNDUgMzAyLjA4LDI4My41NSAzMDUuMTYsMjg0LjY1IDMwOC4yNCwyODUuNzYgMzExLjMyLDI4Ni44NiAzMTQuNDAsMjg3Ljk2IDMxNy40OCwyODkuMDYgMzIwLjU2LDI5MC4xNiAzMjMuNjQsMjkxLjI3IDMyNi43MiwyOTIuMzcgMzI5LjgwLDI5My40NyAzMzIuODgsMjk0LjU3IDMzNS45NiwyOTUuNjcgMzM5LjA0LDI5Ni43OCAzNDIuMTIsMjk3Ljg4IDM0NS4yMCwyOTguOTggMzQ4LjI4LDMwMC4wOCAzNTEuMzYsMzAxLjE4IDM1NC40NCwzMDIuMjkgMzU3LjUyLDMwMy4zOSAzNjAuNjAsMzA0LjQ5IDM2My42OCwzMDUuNTkgMzY2Ljc2LDMwNi42OSAzNjkuODQsMzA3LjgwIDM3Mi45MiwzMDguOTAgMzc2LjAwLDMxMC4wMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIyNjFmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM3Ni4wIiB5MT0iMzEzLjc3IiB4Mj0iMzc2LjAiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjM3Ni4wIiB5PSIzMzEuNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlN5PC90ZXh0PjxsaW5lIHgxPSI2Mi43MiIgeTE9IjE5OS44IiB4Mj0iNzMuMjgiIHkyPSIxOTkuOCIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iNTQuOCIgeT0iMjAzLjI4IiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TZTwvdGV4dD48bGluZSB4MT0iNjIuNzIiIHkxPSIxMDcuMCIgeDI9IjczLjI4IiB5Mj0iMTA3LjAiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjU0LjgiIHk9IjExMC40ODAwMDAwMDAwMDAwMiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzI2MzY0YSI+U3k8L3RleHQ+PC9nPjwvc3ZnPg==" alt="Diagrama individual de Soderberg" style="width:100%;height:auto;">
<p><em>Gráfico esquemático de las fronteras de falla. Proporciones ilustrativas, no a escala de un material específico.</em></p>
</div>


<div style="max-width:650px;margin:20px auto;text-align:center;">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM4MCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPjxnIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj48dGV4dCB4PSIzMDAiIHk9IjMwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzVjMWQxZCI+TGFuZ2VyPC90ZXh0PjxsaW5lIHgxPSI2OCIgeTE9IjMxMCIgeDI9IjU0My4yIiB5Mj0iMzEwIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSI2OCIgeTI9IjQwLjMwMDAwMDAwMDAwMDAxIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NDMuMiIgeT0iMzUwLjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPs+DbTwvdGV4dD48dGV4dCB4PSI0MS42IiB5PSI0OS4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj7Pg2E8L3RleHQ+PHRleHQgeD0iNTcuMCIgeT0iMzMzLjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPjA8L3RleHQ+PHBvbHlsaW5lIHBvaW50cz0iNjguMDAsMTA3LjAwIDcxLjA4LDEwOS4wMyA3NC4xNiwxMTEuMDYgNzcuMjQsMTEzLjA5IDgwLjMyLDExNS4xMiA4My40MCwxMTcuMTUgODYuNDgsMTE5LjE4IDg5LjU2LDEyMS4yMSA5Mi42NCwxMjMuMjQgOTUuNzIsMTI1LjI3IDk4LjgwLDEyNy4zMCAxMDEuODgsMTI5LjMzIDEwNC45NiwxMzEuMzYgMTA4LjA0LDEzMy4zOSAxMTEuMTIsMTM1LjQyIDExNC4yMCwxMzcuNDUgMTE3LjI4LDEzOS40OCAxMjAuMzYsMTQxLjUxIDEyMy40NCwxNDMuNTQgMTI2LjUyLDE0NS41NyAxMjkuNjAsMTQ3LjYwIDEzMi42OCwxNDkuNjMgMTM1Ljc2LDE1MS42NiAxMzguODQsMTUzLjY5IDE0MS45MiwxNTUuNzIgMTQ1LjAwLDE1Ny43NSAxNDguMDgsMTU5Ljc4IDE1MS4xNiwxNjEuODEgMTU0LjI0LDE2My44NCAxNTcuMzIsMTY1Ljg3IDE2MC40MCwxNjcuOTAgMTYzLjQ4LDE2OS45MyAxNjYuNTYsMTcxLjk2IDE2OS42NCwxNzMuOTkgMTcyLjcyLDE3Ni4wMiAxNzUuODAsMTc4LjA1IDE3OC44OCwxODAuMDggMTgxLjk2LDE4Mi4xMSAxODUuMDQsMTg0LjE0IDE4OC4xMiwxODYuMTcgMTkxLjIwLDE4OC4yMCAxOTQuMjgsMTkwLjIzIDE5Ny4zNiwxOTIuMjYgMjAwLjQ0LDE5NC4yOSAyMDMuNTIsMTk2LjMyIDIwNi42MCwxOTguMzUgMjA5LjY4LDIwMC4zOCAyMTIuNzYsMjAyLjQxIDIxNS44NCwyMDQuNDQgMjE4LjkyLDIwNi40NyAyMjIuMDAsMjA4LjUwIDIyNS4wOCwyMTAuNTMgMjI4LjE2LDIxMi41NiAyMzEuMjQsMjE0LjU5IDIzNC4zMiwyMTYuNjIgMjM3LjQwLDIxOC42NSAyNDAuNDgsMjIwLjY4IDI0My41NiwyMjIuNzEgMjQ2LjY0LDIyNC43NCAyNDkuNzIsMjI2Ljc3IDI1Mi44MCwyMjguODAgMjU1Ljg4LDIzMC44MyAyNTguOTYsMjMyLjg2IDI2Mi4wNCwyMzQuODkgMjY1LjEyLDIzNi45MiAyNjguMjAsMjM4Ljk1IDI3MS4yOCwyNDAuOTggMjc0LjM2LDI0My4wMSAyNzcuNDQsMjQ1LjA0IDI4MC41MiwyNDcuMDcgMjgzLjYwLDI0OS4xMCAyODYuNjgsMjUxLjEzIDI4OS43NiwyNTMuMTYgMjkyLjg0LDI1NS4xOSAyOTUuOTIsMjU3LjIyIDI5OS4wMCwyNTkuMjUgMzAyLjA4LDI2MS4yOCAzMDUuMTYsMjYzLjMxIDMwOC4yNCwyNjUuMzQgMzExLjMyLDI2Ny4zNyAzMTQuNDAsMjY5LjQwIDMxNy40OCwyNzEuNDMgMzIwLjU2LDI3My40NiAzMjMuNjQsMjc1LjQ5IDMyNi43MiwyNzcuNTIgMzI5LjgwLDI3OS41NSAzMzIuODgsMjgxLjU4IDMzNS45NiwyODMuNjEgMzM5LjA0LDI4NS42NCAzNDIuMTIsMjg3LjY3IDM0NS4yMCwyODkuNzAgMzQ4LjI4LDI5MS43MyAzNTEuMzYsMjkzLjc2IDM1NC40NCwyOTUuNzkgMzU3LjUyLDI5Ny44MiAzNjAuNjAsMjk5Ljg1IDM2My42OCwzMDEuODggMzY2Ljc2LDMwMy45MSAzNjkuODQsMzA1Ljk0IDM3Mi45MiwzMDcuOTcgMzc2LjAwLDMxMC4wMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIyNjFmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM3Ni4wIiB5MT0iMzEzLjc3IiB4Mj0iMzc2LjAiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjM3Ni4wIiB5PSIzMzEuNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlN5PC90ZXh0PjxsaW5lIHgxPSI2Mi43MiIgeTE9IjEwNy4wIiB4Mj0iNzMuMjgiIHkyPSIxMDcuMCIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iNTQuOCIgeT0iMTEwLjQ4MDAwMDAwMDAwMDAyIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TeTwvdGV4dD48L2c+PC9zdmc+" alt="Diagrama individual de Langer" style="width:100%;height:auto;">
<p><em>Gráfico esquemático de las fronteras de falla. Proporciones ilustrativas, no a escala de un material específico.</em></p>
</div>


### Cuadros de fórmulas de criterios de falla por fatiga

Los cuadros presentan tres combinaciones. Primera combinación: intersección con la frontera de fatiga. Segunda: intersección con Langer. Tercera: intersección entre ambas fronteras, que determina $r_{crit}=S_a/S_m$. Para el primer cuadrante, cuando existe una intersección interior y $0<S_e<S_y<S_{ut}$, las desigualdades se deducen de las ecuaciones de los cuadros: con $r<r_{crit}$ gobierna Langer y con $r>r_{crit}$ gobierna la frontera de fatiga. En igualdad ambas coinciden. Para evitar ambigüedad, se comparan los factores de seguridad y se adopta el menor.

<style>
.crit-cards-wrapper {
max-width: 780px;
margin: 25px auto;
display: flex;
flex-direction: column;
gap: 22px;
font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}
.crit-box {
background: #ffffff;
border: 1px solid #cbd5e1;
border-left: 5px solid #7f1d1d;
border-radius: 12px;
padding: 20px;
box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
color: #1e293b;
}
.crit-box-header {
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #e2e8f0;
padding-bottom: 10px;
margin-bottom: 14px;
flex-wrap: wrap;
gap: 8px;
}
.crit-box-title {
font-size: 1.12rem;
font-weight: 700;
color: #5c1d1d;
margin: 0;
}
.crit-table {
width: 100%;
border-collapse: collapse;
font-size: 0.88rem;
}
.crit-table th {
background: #f8fafc;
color: #334155;
font-weight: 700;
text-align: left;
padding: 10px 12px;
border: 1px solid #cbd5e1;
}
.crit-table td {
padding: 10px 12px;
border: 1px solid #cbd5e1;
vertical-align: middle;
line-height: 1.6;
}
.crit-table tr:nth-child(even) td {
background: #fcfcfd;
}
.crit-sf-row td {
background: #fef2f2 !important;
border-top: 2px solid #ef4444;
}
</style>


#### Goodman modificado

<div style="max-width:650px;margin:20px auto;text-align:center;">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM4MCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPjxnIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj48dGV4dCB4PSIzMDAiIHk9IjMwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzVjMWQxZCI+R29vZG1hbiBtb2RpZmljYWRvPC90ZXh0PjxsaW5lIHgxPSI2OCIgeTE9IjMxMCIgeDI9IjU0My4yIiB5Mj0iMzEwIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSI2OCIgeTI9IjQwLjMwMDAwMDAwMDAwMDAxIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NDMuMiIgeT0iMzUwLjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPs+DbTwvdGV4dD48dGV4dCB4PSI0MS42IiB5PSI0OS4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj7Pg2E8L3RleHQ+PHRleHQgeD0iNTcuMCIgeT0iMzMzLjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPjA8L3RleHQ+PGxpbmUgeDE9IjY4IiB5MT0iMTA3LjAiIHgyPSIzNzYuMCIgeTI9IjMxMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIvPjx0ZXh0IHg9IjE0Ny4yIiB5PSIxMzguOSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5MYW5nZXI8L3RleHQ+PHBvbHlsaW5lIHBvaW50cz0iNjguMDAsMTk5LjgwIDcyLjQwLDIwMC45MCA3Ni44MCwyMDIuMDAgODEuMjAsMjAzLjExIDg1LjYwLDIwNC4yMSA5MC4wMCwyMDUuMzEgOTQuNDAsMjA2LjQxIDk4LjgwLDIwNy41MSAxMDMuMjAsMjA4LjYyIDEwNy42MCwyMDkuNzIgMTEyLjAwLDIxMC44MiAxMTYuNDAsMjExLjkyIDEyMC44MCwyMTMuMDIgMTI1LjIwLDIxNC4xMyAxMjkuNjAsMjE1LjIzIDEzNC4wMCwyMTYuMzMgMTM4LjQwLDIxNy40MyAxNDIuODAsMjE4LjUzIDE0Ny4yMCwyMTkuNjQgMTUxLjYwLDIyMC43NCAxNTYuMDAsMjIxLjg0IDE2MC40MCwyMjIuOTQgMTY0LjgwLDIyNC4wNCAxNjkuMjAsMjI1LjE1IDE3My42MCwyMjYuMjUgMTc4LjAwLDIyNy4zNSAxODIuNDAsMjI4LjQ1IDE4Ni44MCwyMjkuNTUgMTkxLjIwLDIzMC42NiAxOTUuNjAsMjMxLjc2IDIwMC4wMCwyMzIuODYgMjA0LjQwLDIzMy45NiAyMDguODAsMjM1LjA2IDIxMy4yMCwyMzYuMTcgMjE3LjYwLDIzNy4yNyAyMjIuMDAsMjM4LjM3IDIyNi40MCwyMzkuNDcgMjMwLjgwLDI0MC41NyAyMzUuMjAsMjQxLjY4IDIzOS42MCwyNDIuNzggMjQ0LjAwLDI0My44OCAyNDguNDAsMjQ0Ljk4IDI1Mi44MCwyNDYuMDggMjU3LjIwLDI0Ny4xOSAyNjEuNjAsMjQ4LjI5IDI2Ni4wMCwyNDkuMzkgMjcwLjQwLDI1MC40OSAyNzQuODAsMjUxLjU5IDI3OS4yMCwyNTIuNzAgMjgzLjYwLDI1My44MCAyODguMDAsMjU0LjkwIDI5Mi40MCwyNTYuMDAgMjk2LjgwLDI1Ny4xMCAzMDEuMjAsMjU4LjIxIDMwNS42MCwyNTkuMzEgMzEwLjAwLDI2MC40MSAzMTQuNDAsMjYxLjUxIDMxOC44MCwyNjIuNjEgMzIzLjIwLDI2My43MiAzMjcuNjAsMjY0LjgyIDMzMi4wMCwyNjUuOTIgMzM2LjQwLDI2Ny4wMiAzNDAuODAsMjY4LjEyIDM0NS4yMCwyNjkuMjMgMzQ5LjYwLDI3MC4zMyAzNTQuMDAsMjcxLjQzIDM1OC40MCwyNzIuNTMgMzYyLjgwLDI3My42MyAzNjcuMjAsMjc0Ljc0IDM3MS42MCwyNzUuODQgMzc2LjAwLDI3Ni45NCAzODAuNDAsMjc4LjA0IDM4NC44MCwyNzkuMTQgMzg5LjIwLDI4MC4yNSAzOTMuNjAsMjgxLjM1IDM5OC4wMCwyODIuNDUgNDAyLjQwLDI4My41NSA0MDYuODAsMjg0LjY1IDQxMS4yMCwyODUuNzYgNDE1LjYwLDI4Ni44NiA0MjAuMDAsMjg3Ljk2IDQyNC40MCwyODkuMDYgNDI4LjgwLDI5MC4xNiA0MzMuMjAsMjkxLjI3IDQzNy42MCwyOTIuMzcgNDQyLjAwLDI5My40NyA0NDYuNDAsMjk0LjU3IDQ1MC44MCwyOTUuNjcgNDU1LjIwLDI5Ni43OCA0NTkuNjAsMjk3Ljg4IDQ2NC4wMCwyOTguOTggNDY4LjQwLDMwMC4wOCA0NzIuODAsMzAxLjE4IDQ3Ny4yMCwzMDIuMjkgNDgxLjYwLDMwMy4zOSA0ODYuMDAsMzA0LjQ5IDQ5MC40MCwzMDUuNTkgNDk0LjgwLDMwNi42OSA0OTkuMjAsMzA3LjgwIDUwMy42MCwzMDguOTAgNTA4LjAwLDMxMC4wMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIyNjFmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM3Ni4wIiB5MT0iMzEzLjc3IiB4Mj0iMzc2LjAiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjM3Ni4wIiB5PSIzMzEuNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlN5PC90ZXh0PjxsaW5lIHgxPSI1MDgiIHkxPSIzMTMuNzciIHgyPSI1MDgiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjUwOCIgeT0iMzMxLjc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TdXQ8L3RleHQ+PGxpbmUgeDE9IjYyLjcyIiB5MT0iMTk5LjgiIHgyPSI3My4yOCIgeTI9IjE5OS44IiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NC44IiB5PSIyMDMuMjgiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlNlPC90ZXh0PjxsaW5lIHgxPSI2Mi43MiIgeTE9IjEwNy4wIiB4Mj0iNzMuMjgiIHkyPSIxMDcuMCIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iNTQuOCIgeT0iMTEwLjQ4MDAwMDAwMDAwMDAyIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TeTwvdGV4dD48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSIyOTUuMDk2Nzc0MTkzNTQ4NCIgeTI9IjI1Ni42Nzc0MTkzNTQ4Mzg3IiBzdHJva2U9IiMwZDY0NzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+PGNpcmNsZSBjeD0iMjk1LjA5Njc3NDE5MzU0ODQiIGN5PSIyNTYuNjc3NDE5MzU0ODM4NyIgcj0iNC41IiBmaWxsPSIjMGQ2NDczIi8+PHRleHQgeD0iMzE0Ljg5Njc3NDE5MzU0ODM3IiB5PSIyMzkuMjc3NDE5MzU0ODM4NyIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5yIGNyw610aWNvPC90ZXh0PjwvZz48L3N2Zz4=" alt="Diagrama individual de Goodman modificado" style="width:100%;height:auto;">
<p><em>Gráfico esquemático de las fronteras de falla. Proporciones ilustrativas, no a escala de un material específico.</em></p>
</div>

<div class="crit-box">
<div class="crit-box-header">
<h4 class="crit-box-title">1. Criterio de Goodman</h4>
</div>
<table class="crit-table">
<thead>
<tr>
<th style="width: 24%;">Combinación</th>
<th style="width: 34%;">Sistema de ecuaciones</th>
<th style="width: 42%;">Solución analítica ($S_a, S_m, r_{\mathrm{crit}}$)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Frontera Goodman + Línea de carga)</span></td>
<td>$$\frac{S_a}{S_e} + \frac{S_m}{S_{ut}} = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \frac{r\,S_e\,S_{ut}}{r\,S_{ut} + S_e}$$<br>$$S_m = \frac{S_a}{r}$$</td>
</tr>
<tr>
<td><strong>Segunda combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Recta de fluencia + Línea de carga)</span></td>
<td>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \frac{r\,S_y}{1 + r}$$<br>$$S_m = \frac{S_y}{1 + r}$$</td>
</tr>
<tr>
<td><strong>Tercera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Intersección Goodman + Fluencia)</span></td>
<td>$$\frac{S_a}{S_e} + \frac{S_m}{S_{ut}} = 1$$<br>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$</td>
<td>$$S_m = \frac{(S_y - S_e)\,S_{ut}}{S_{ut} - S_e}$$<br>$$S_a = S_y - S_m, \qquad r_{\mathrm{crit}} = \frac{S_a}{S_m}$$</td>
</tr>
<tr class="crit-sf-row">
<td><strong>Factor de seguridad</strong></td>
<td colspan="2">$$n_f = \frac{1}{\dfrac{\sigma_a}{S_e} + \dfrac{\sigma_m}{S_{ut}}}$$</td>
</tr>
</tbody>
</table>
</div>

**Condiciones de aplicación** (primer cuadrante, intersección interior):

- $r<r_{crit}$: segunda combinación (Langer), $n=n_y$.
- $r=r_{crit}$: ambas fronteras coinciden sobre la línea de carga.
- $r>r_{crit}$: primera combinación (criterio de fatiga), $n=n_f$.


#### Gerber

<div style="max-width:650px;margin:20px auto;text-align:center;">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM4MCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPjxnIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj48dGV4dCB4PSIzMDAiIHk9IjMwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzVjMWQxZCI+R2VyYmVyPC90ZXh0PjxsaW5lIHgxPSI2OCIgeTE9IjMxMCIgeDI9IjU0My4yIiB5Mj0iMzEwIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSI2OCIgeTI9IjQwLjMwMDAwMDAwMDAwMDAxIiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NDMuMiIgeT0iMzUwLjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPs+DbTwvdGV4dD48dGV4dCB4PSI0MS42IiB5PSI0OS4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj7Pg2E8L3RleHQ+PHRleHQgeD0iNTcuMCIgeT0iMzMzLjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPjA8L3RleHQ+PGxpbmUgeDE9IjY4IiB5MT0iMTA3LjAiIHgyPSIzNzYuMCIgeTI9IjMxMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIvPjx0ZXh0IHg9IjE0Ny4yIiB5PSIxMzguOSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5MYW5nZXI8L3RleHQ+PHBvbHlsaW5lIHBvaW50cz0iNjguMDAsMTk5LjgwIDcyLjQwLDE5OS44MSA3Ni44MCwxOTkuODQgODEuMjAsMTk5LjkwIDg1LjYwLDE5OS45OCA5MC4wMCwyMDAuMDggOTQuNDAsMjAwLjIwIDk4LjgwLDIwMC4zNCAxMDMuMjAsMjAwLjUxIDEwNy42MCwyMDAuNjkgMTEyLjAwLDIwMC45MCAxMTYuNDAsMjAxLjEzIDEyMC44MCwyMDEuMzkgMTI1LjIwLDIwMS42NiAxMjkuNjAsMjAxLjk2IDEzNC4wMCwyMDIuMjggMTM4LjQwLDIwMi42MiAxNDIuODAsMjAyLjk4IDE0Ny4yMCwyMDMuMzcgMTUxLjYwLDIwMy43OCAxNTYuMDAsMjA0LjIxIDE2MC40MCwyMDQuNjYgMTY0LjgwLDIwNS4xMyAxNjkuMjAsMjA1LjYzIDE3My42MCwyMDYuMTUgMTc4LjAwLDIwNi42OSAxODIuNDAsMjA3LjI1IDE4Ni44MCwyMDcuODMgMTkxLjIwLDIwOC40NCAxOTUuNjAsMjA5LjA3IDIwMC4wMCwyMDkuNzIgMjA0LjQwLDIxMC4zOSAyMDguODAsMjExLjA4IDIxMy4yMCwyMTEuODAgMjE3LjYwLDIxMi41NCAyMjIuMDAsMjEzLjMwIDIyNi40MCwyMTQuMDggMjMwLjgwLDIxNC44OSAyMzUuMjAsMjE1LjcxIDIzOS42MCwyMTYuNTYgMjQ0LjAwLDIxNy40MyAyNDguNDAsMjE4LjMyIDI1Mi44MCwyMTkuMjQgMjU3LjIwLDIyMC4xOCAyNjEuNjAsMjIxLjEzIDI2Ni4wMCwyMjIuMTIgMjcwLjQwLDIyMy4xMiAyNzQuODAsMjI0LjE0IDI3OS4yMCwyMjUuMTkgMjgzLjYwLDIyNi4yNiAyODguMDAsMjI3LjM1IDI5Mi40MCwyMjguNDYgMjk2LjgwLDIyOS42MCAzMDEuMjAsMjMwLjc2IDMwNS42MCwyMzEuOTMgMzEwLjAwLDIzMy4xNCAzMTQuNDAsMjM0LjM2IDMxOC44MCwyMzUuNjAgMzIzLjIwLDIzNi44NyAzMjcuNjAsMjM4LjE2IDMzMi4wMCwyMzkuNDcgMzM2LjQwLDI0MC44MSAzNDAuODAsMjQyLjE2IDM0NS4yMCwyNDMuNTQgMzQ5LjYwLDI0NC45NCAzNTQuMDAsMjQ2LjM2IDM1OC40MCwyNDcuODAgMzYyLjgwLDI0OS4yNyAzNjcuMjAsMjUwLjc2IDM3MS42MCwyNTIuMjcgMzc2LjAwLDI1My44MCAzODAuNDAsMjU1LjM1IDM4NC44MCwyNTYuOTMgMzg5LjIwLDI1OC41MyAzOTMuNjAsMjYwLjE1IDM5OC4wMCwyNjEuNzkgNDAyLjQwLDI2My40NSA0MDYuODAsMjY1LjE0IDQxMS4yMCwyNjYuODUgNDE1LjYwLDI2OC41OCA0MjAuMDAsMjcwLjMzIDQyNC40MCwyNzIuMTAgNDI4LjgwLDI3My45MCA0MzMuMjAsMjc1LjcyIDQzNy42MCwyNzcuNTYgNDQyLjAwLDI3OS40MiA0NDYuNDAsMjgxLjMwIDQ1MC44MCwyODMuMjEgNDU1LjIwLDI4NS4xNCA0NTkuNjAsMjg3LjA5IDQ2NC4wMCwyODkuMDYgNDY4LjQwLDI5MS4wNiA0NzIuODAsMjkzLjA3IDQ3Ny4yMCwyOTUuMTEgNDgxLjYwLDI5Ny4xNyA0ODYuMDAsMjk5LjI2IDQ5MC40MCwzMDEuMzYgNDk0LjgwLDMwMy40OSA0OTkuMjAsMzA1LjY0IDUwMy42MCwzMDcuODEgNTA4LjAwLDMxMC4wMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIyNjFmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM3Ni4wIiB5MT0iMzEzLjc3IiB4Mj0iMzc2LjAiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjM3Ni4wIiB5PSIzMzEuNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlN5PC90ZXh0PjxsaW5lIHgxPSI1MDgiIHkxPSIzMTMuNzciIHgyPSI1MDgiIHkyPSIzMDYuMjMiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjUwOCIgeT0iMzMxLjc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TdXQ8L3RleHQ+PGxpbmUgeDE9IjYyLjcyIiB5MT0iMTk5LjgiIHgyPSI3My4yOCIgeTI9IjE5OS44IiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NC44IiB5PSIyMDMuMjgiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlNlPC90ZXh0PjxsaW5lIHgxPSI2Mi43MiIgeTE9IjEwNy4wIiB4Mj0iNzMuMjgiIHkyPSIxMDcuMCIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iNTQuOCIgeT0iMTEwLjQ4MDAwMDAwMDAwMDAyIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TeTwvdGV4dD48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSIyMzIuMDM5NTc1NzA3NjY3MSIgeTI9IjIxNS4xMTY5OTMwODAwNTMzNiIgc3Ryb2tlPSIjMGQ2NDczIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPjxjaXJjbGUgY3g9IjIzMi4wMzk1NzU3MDc2NjcxIiBjeT0iMjE1LjExNjk5MzA4MDA1MzM2IiByPSI0LjUiIGZpbGw9IiMwZDY0NzMiLz48dGV4dCB4PSIyNTEuODM5NTc1NzA3NjY3MSIgeT0iMTk3LjcxNjk5MzA4MDA1MzM2IiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPnIgY3LDrXRpY288L3RleHQ+PC9nPjwvc3ZnPg==" alt="Diagrama individual de Gerber" style="width:100%;height:auto;">
<p><em>Gráfico esquemático de las fronteras de falla. Proporciones ilustrativas, no a escala de un material específico.</em></p>
</div>

<div class="crit-box">
<div class="crit-box-header">
<h4 class="crit-box-title">2. Criterio de falla Gerber</h4>
</div>
<table class="crit-table">
<thead>
<tr>
<th style="width: 24%;">Combinación</th>
<th style="width: 34%;">Sistema de ecuaciones</th>
<th style="width: 42%;">Solución analítica ($S_a, S_m, r_{\mathrm{crit}}$)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Parábola Gerber + Línea de carga)</span></td>
<td>$$\frac{S_a}{S_e} + \left(\frac{S_m}{S_{ut}}\right)^2 = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \frac{r^2 S_{ut}^2}{2S_e}\left[-1 + \sqrt{1 + \left(\frac{2S_e}{r\,S_{ut}}\right)^2}\right]$$<br>$$S_m = \frac{S_a}{r}$$</td>
</tr>
<tr>
<td><strong>Segunda combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Recta de fluencia + Línea de carga)</span></td>
<td>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \frac{r\,S_y}{1 + r}$$<br>$$S_m = \frac{S_y}{1 + r}$$</td>
</tr>
<tr>
<td><strong>Tercera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Intersección Gerber + Fluencia)</span></td>
<td>$$\frac{S_a}{S_e} + \left(\frac{S_m}{S_{ut}}\right)^2 = 1$$<br>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$</td>
<td>$$S_m = \frac{S_{ut}^2}{2S_e}\left[1 - \sqrt{1 + \left(\frac{2S_e}{S_{ut}}\right)^2\left(1 - \frac{S_y}{S_e}\right)}\right]$$<br>$$S_a = S_y - S_m, \qquad r_{\mathrm{crit}} = \frac{S_a}{S_m}$$</td>
</tr>
<tr class="crit-sf-row">
<td><strong>Factor de seguridad</strong></td>
<td colspan="2">$$n_f = \frac{1}{2}\left(\frac{S_{ut}}{\sigma_m}\right)^2\frac{\sigma_a}{S_e}\left[-1 + \sqrt{1 + \left(\frac{2\sigma_m S_e}{S_{ut}\sigma_a}\right)^2}\right]$$</td>
</tr>
</tbody>
</table>
</div>

**Condiciones de aplicación** (primer cuadrante, intersección interior):

- $r<r_{crit}$: segunda combinación (Langer), $n=n_y$.
- $r=r_{crit}$: ambas fronteras coinciden sobre la línea de carga.
- $r>r_{crit}$: primera combinación (criterio de fatiga), $n=n_f$.


#### ASME elíptico

<div style="max-width:650px;margin:20px auto;text-align:center;">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM4MCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIvPjxnIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj48dGV4dCB4PSIzMDAiIHk9IjMwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzVjMWQxZCI+QVNNRSBlbMOtcHRpY288L3RleHQ+PGxpbmUgeDE9IjY4IiB5MT0iMzEwIiB4Mj0iNTQzLjIiIHkyPSIzMTAiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjxsaW5lIHgxPSI2OCIgeTE9IjMxMCIgeDI9IjY4IiB5Mj0iNDAuMzAwMDAwMDAwMDAwMDEiIHN0cm9rZT0iIzI2MzY0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjx0ZXh0IHg9IjU0My4yIiB5PSIzNTAuNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzI2MzY0YSI+z4NtPC90ZXh0Pjx0ZXh0IHg9IjQxLjYiIHk9IjQ5LjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPs+DYTwvdGV4dD48dGV4dCB4PSI1Ny4wIiB5PSIzMzMuMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzI2MzY0YSI+MDwvdGV4dD48bGluZSB4MT0iNjgiIHkxPSIxMDcuMCIgeDI9IjM3Ni4wIiB5Mj0iMzEwIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNyA1Ii8+PHRleHQgeD0iMTQ3LjIiIHk9IjEzOC45IiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPkxhbmdlcjwvdGV4dD48cG9seWxpbmUgcG9pbnRzPSI2OC4wMCwxOTkuODAgNzEuMDgsMTk5LjgxIDc0LjE2LDE5OS44MiA3Ny4yNCwxOTkuODUgODAuMzIsMTk5Ljg5IDgzLjQwLDE5OS45NCA4Ni40OCwyMDAuMDAgODkuNTYsMjAwLjA3IDkyLjY0LDIwMC4xNSA5NS43MiwyMDAuMjUgOTguODAsMjAwLjM1IDEwMS44OCwyMDAuNDcgMTA0Ljk2LDIwMC42MCAxMDguMDQsMjAwLjc0IDExMS4xMiwyMDAuODkgMTE0LjIwLDIwMS4wNSAxMTcuMjgsMjAxLjIyIDEyMC4zNiwyMDEuNDAgMTIzLjQ0LDIwMS42MCAxMjYuNTIsMjAxLjgxIDEyOS42MCwyMDIuMDMgMTMyLjY4LDIwMi4yNiAxMzUuNzYsMjAyLjUwIDEzOC44NCwyMDIuNzUgMTQxLjkyLDIwMy4wMiAxNDUuMDAsMjAzLjMwIDE0OC4wOCwyMDMuNTkgMTUxLjE2LDIwMy44OSAxNTQuMjQsMjA0LjIxIDE1Ny4zMiwyMDQuNTQgMTYwLjQwLDIwNC44OCAxNjMuNDgsMjA1LjIzIDE2Ni41NiwyMDUuNTkgMTY5LjY0LDIwNS45NyAxNzIuNzIsMjA2LjM3IDE3NS44MCwyMDYuNzcgMTc4Ljg4LDIwNy4xOSAxODEuOTYsMjA3LjYyIDE4NS4wNCwyMDguMDcgMTg4LjEyLDIwOC41MyAxOTEuMjAsMjA5LjAwIDE5NC4yOCwyMDkuNDkgMTk3LjM2LDIwOS45OSAyMDAuNDQsMjEwLjUxIDIwMy41MiwyMTEuMDQgMjA2LjYwLDIxMS41OSAyMDkuNjgsMjEyLjE1IDIxMi43NiwyMTIuNzMgMjE1Ljg0LDIxMy4zMyAyMTguOTIsMjEzLjk0IDIyMi4wMCwyMTQuNTYgMjI1LjA4LDIxNS4yMSAyMjguMTYsMjE1Ljg3IDIzMS4yNCwyMTYuNTUgMjM0LjMyLDIxNy4yNSAyMzcuNDAsMjE3Ljk2IDI0MC40OCwyMTguNzAgMjQzLjU2LDIxOS40NSAyNDYuNjQsMjIwLjIzIDI0OS43MiwyMjEuMDIgMjUyLjgwLDIyMS44NCAyNTUuODgsMjIyLjY4IDI1OC45NiwyMjMuNTQgMjYyLjA0LDIyNC40MiAyNjUuMTIsMjI1LjMzIDI2OC4yMCwyMjYuMjYgMjcxLjI4LDIyNy4yMSAyNzQuMzYsMjI4LjE5IDI3Ny40NCwyMjkuMjAgMjgwLjUyLDIzMC4yNCAyODMuNjAsMjMxLjMwIDI4Ni42OCwyMzIuNDAgMjg5Ljc2LDIzMy41MiAyOTIuODQsMjM0LjY4IDI5NS45MiwyMzUuODggMjk5LjAwLDIzNy4xMSAzMDIuMDgsMjM4LjM4IDMwNS4xNiwyMzkuNjkgMzA4LjI0LDI0MS4wNCAzMTEuMzIsMjQyLjQ0IDMxNC40MCwyNDMuODggMzE3LjQ4LDI0NS4zOCAzMjAuNTYsMjQ2LjkzIDMyMy42NCwyNDguNTMgMzI2LjcyLDI1MC4yMSAzMjkuODAsMjUxLjk1IDMzMi44OCwyNTMuNzcgMzM1Ljk2LDI1NS42NyAzMzkuMDQsMjU3LjY2IDM0Mi4xMiwyNTkuNzUgMzQ1LjIwLDI2MS45NiAzNDguMjgsMjY0LjMxIDM1MS4zNiwyNjYuODEgMzU0LjQ0LDI2OS40OSAzNTcuNTIsMjcyLjQwIDM2MC42MCwyNzUuNTkgMzYzLjY4LDI3OS4xNCAzNjYuNzYsMjgzLjIxIDM2OS44NCwyODguMDcgMzcyLjkyLDI5NC40NSAzNzYuMDAsMzEwLjAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjI2MWYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzc2LjAiIHkxPSIzMTMuNzciIHgyPSIzNzYuMCIgeTI9IjMwNi4yMyIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iMzc2LjAiIHk9IjMzMS43NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzI2MzY0YSI+U3k8L3RleHQ+PGxpbmUgeDE9IjYyLjcyIiB5MT0iMTk5LjgiIHgyPSI3My4yOCIgeTI9IjE5OS44IiBzdHJva2U9IiMyNjM2NGEiIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1NC44IiB5PSIyMDMuMjgiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPlNlPC90ZXh0PjxsaW5lIHgxPSI2Mi43MiIgeTE9IjEwNy4wIiB4Mj0iNzMuMjgiIHkyPSIxMDcuMCIgc3Ryb2tlPSIjMjYzNjRhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHRleHQgeD0iNTQuOCIgeT0iMTEwLjQ4MDAwMDAwMDAwMDAyIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMjYzNjRhIj5TeTwvdGV4dD48bGluZSB4MT0iNjgiIHkxPSIzMTAiIHgyPSIyMzUuNzg4MTQ2Mjc5OTQ5NSIgeTI9IjIxNy41ODc2NDE4NjYzMzA0IiBzdHJva2U9IiMwZDY0NzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+PGNpcmNsZSBjeD0iMjM1Ljc4ODE0NjI3OTk0OTUiIGN5PSIyMTcuNTg3NjQxODY2MzMwNCIgcj0iNC41IiBmaWxsPSIjMGQ2NDczIi8+PHRleHQgeD0iMjU1LjU4ODE0NjI3OTk0OTUiIHk9IjIwMC4xODc2NDE4NjYzMzA0IiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMyNjM2NGEiPnIgY3LDrXRpY288L3RleHQ+PC9nPjwvc3ZnPg==" alt="Diagrama individual de ASME elíptico" style="width:100%;height:auto;">
<p><em>Gráfico esquemático de las fronteras de falla. Proporciones ilustrativas, no a escala de un material específico.</em></p>
</div>

<div class="crit-box">
<div class="crit-box-header">
<h4 class="crit-box-title">3. Criterio de falla de ASME (ASME-elíptica)</h4>
</div>
<table class="crit-table">
<thead>
<tr>
<th style="width: 24%;">Combinación</th>
<th style="width: 34%;">Sistema de ecuaciones</th>
<th style="width: 42%;">Solución analítica ($S_a, S_m, r_{\mathrm{crit}}$)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Elipse ASME + Línea de carga)</span></td>
<td>$$\left(\frac{S_a}{S_e}\right)^2 + \left(\frac{S_m}{S_y}\right)^2 = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \sqrt{\frac{r^2 S_e^2 S_y^2}{S_e^2 + r^2 S_y^2}}$$<br>$$S_m = \frac{S_a}{r}$$</td>
</tr>
<tr>
<td><strong>Segunda combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Recta de fluencia + Línea de carga)</span></td>
<td>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$<br>$$r = \frac{S_a}{S_m}$$</td>
<td>$$S_a = \frac{r\,S_y}{1 + r}$$<br>$$S_m = \frac{S_y}{1 + r}$$</td>
</tr>
<tr>
<td><strong>Tercera combinación</strong><br><span style="font-size:0.78rem; color:#64748b;">(Intersección ASME + Fluencia)</span></td>
<td>$$\left(\frac{S_a}{S_e}\right)^2 + \left(\frac{S_m}{S_y}\right)^2 = 1$$<br>$$\frac{S_a}{S_y} + \frac{S_m}{S_y} = 1$$</td>
<td>$$S_a = \frac{2\,S_y\,S_e^2}{S_e^2 + S_y^2}$$<br>$$S_m = S_y - S_a, \qquad r_{\mathrm{crit}} = \frac{S_a}{S_m}$$</td>
</tr>
<tr class="crit-sf-row">
<td><strong>Factor de seguridad</strong></td>
<td colspan="2">$$n_f = \sqrt{\frac{1}{\left(\dfrac{\sigma_a}{S_e}\right)^2 + \left(\dfrac{\sigma_m}{S_y}\right)^2}}$$</td>
</tr>
</tbody>
</table>
</div>

**Condiciones de aplicación** (primer cuadrante, intersección interior):

- $r<r_{crit}$: segunda combinación (Langer), $n=n_y$.
- $r=r_{crit}$: ambas fronteras coinciden sobre la línea de carga.
- $r>r_{crit}$: primera combinación (criterio de fatiga), $n=n_f$.


## 11. Torsión y combinación de esfuerzos fluctuantes

### Criterios de falla por fatiga para cargas de torsión

$$
S_u=0.67S_{ut},\qquad S_{sy}=0.577S_y.
$$

<!-- IMAGEN PDF: pág. 60, figura 1. Guardar en imagenes_pdf/fig-p60-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p60-01.png" alt="Curvas de vida constante" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 60, figura 1</strong><p>Curvas de vida constante</p><p><code>imagenes_pdf/fig-p60-01.png</code></p>
</div>


El esfuerzo completamente reversible a partir del esfuerzo medio y variable:

$$
\sigma_{ar}=\frac{\sigma_a}{1-\sigma_m/S_{ut}}.
$$

### Combinación de flexión, carga axial y torsión

Para combinar flexión, carga axial y torsión mediante energía de distorsión, se estiman las amplitudes y esfuerzos medios equivalentes:

$$
\begin{aligned}
\sigma_a'&=\sqrt{\left[K_{f,b}\sigma_{a0,b}+K_{f,x}\sigma_{a0,x}\right]^2
+3\left[K_{fs}\tau_{a0}\right]^2},\\
\sigma_m'&=\sqrt{\left[K_{f,b}\sigma_{m0,b}+K_{f,x}\sigma_{m0,x}\right]^2
+3\left[K_{fs}\tau_{m0}\right]^2}.
\end{aligned}
$$

## 12. Figuras de ejercicios y datos de materiales

### Figuras de los ejercicios

Los ejercicios resueltos se encuentran en su módulo independiente.

<!-- IMAGEN PDF: pág. 61, figura 1. Guardar en imagenes_pdf/fig-p61-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p61-01.png" alt="Problema 1: eje AISI 1020 estirado en frío" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 61, figura 1</strong><p>Problema 1: eje AISI 1020 estirado en frío</p><p><code>imagenes_pdf/fig-p61-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 61, figura 2. Guardar en imagenes_pdf/fig-p61-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p61-02.png" alt="Problema 2: eje AISI 1040 con fuerzas F1 y F2" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 61, figura 2</strong><p>Problema 2: eje AISI 1040 con fuerzas F1 y F2</p><p><code>imagenes_pdf/fig-p61-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 62, figura 1. Guardar en imagenes_pdf/fig-p62-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p62-01.png" alt="Problema 3: eje AISI 1095" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 62, figura 1</strong><p>Problema 3: eje AISI 1095</p><p><code>imagenes_pdf/fig-p62-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 62, figura 2. Guardar en imagenes_pdf/fig-p62-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p62-02.png" alt="Problema 4: barra con agujero y carga axial" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 62, figura 2</strong><p>Problema 4: barra con agujero y carga axial</p><p><code>imagenes_pdf/fig-p62-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 63, figura 1. Guardar en imagenes_pdf/fig-p63-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p63-01.png" alt="Problema 5: eslabón con concentradores de esfuerzos" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 63, figura 1</strong><p>Problema 5: eslabón con concentradores de esfuerzos</p><p><code>imagenes_pdf/fig-p63-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 63, figura 2. Guardar en imagenes_pdf/fig-p63-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p63-02.png" alt="Problema 6: eje A sometido a fuerzas a través del eje B" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 63, figura 2</strong><p>Problema 6: eje A sometido a fuerzas a través del eje B</p><p><code>imagenes_pdf/fig-p63-02.png</code></p>
</div>


### Datos de materiales para consulta

<a id="aceros-al-carbono"></a>
#### Aceros al carbono

HR significa laminado en caliente y CD, estirado en frío. Las resistencias últimas y de fluencia son datos útiles para las estimaciones de probeta y los criterios de fatiga incluidos en este apunte.

| UNS | AISI/SAE | Proceso | $S_{ut}$ (MPa) | $S_y$ (MPa) | Elongación en 2 pulg. (%) | Reducción de área (%) | HB |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: |
| G10060 | 1006 | HR | 300 | 170 | 30 | 55 | 86 |
| G10060 | 1006 | CD | 330 | 280 | 20 | 45 | 95 |
| G10100 | 1010 | HR | 320 | 180 | 28 | 50 | 95 |
| G10100 | 1010 | CD | 370 | 300 | 20 | 40 | 105 |
| G10150 | 1015 | HR | 340 | 190 | 28 | 50 | 101 |
| G10150 | 1015 | CD | 390 | 320 | 20 | 50 | 105 |
| G10180 | 1018 | HR | 400 | 220 | 25 | 50 | 116 |
| G10180 | 1018 | CD | 440 | 370 | 15 | 40 | 126 |
| G10200 | 1020 | HR | 380 | 210 | 25 | 50 | 111 |
| G10200 | 1020 | CD | 470 | 390 | 15 | 40 | 132 |
| G10300 | 1030 | HR | 470 | 260 | 20 | 42 | 137 |
| G10300 | 1030 | CD | 520 | 440 | 12 | 35 | 149 |
| G10350 | 1035 | HR | 500 | 270 | 18 | 40 | 143 |
| G10350 | 1035 | CD | 550 | 460 | 12 | 35 | 163 |
| G10400 | 1040 | HR | 520 | 290 | 18 | 40 | 153 |
| G10400 | 1040 | CD | 590 | 490 | 12 | 35 | 170 |
| G10450 | 1045 | HR | 570 | 310 | 16 | 40 | 163 |
| G10450 | 1045 | CD | 630 | 530 | 12 | 35 | 179 |
| G10500 | 1050 | HR | 620 | 340 | 15 | 35 | 173 |
| G10500 | 1050 | CD | 690 | 580 | 10 | 30 | 185 |
| G10600 | 1060 | HR | 680 | 370 | 12 | 30 | 201 |
| G10800 | 1080 | HR | 770 | 420 | 10 | 25 | 229 |
| G10950 | 1095 | HR | 830 | 460 | 10 | 25 | 248 |


<!-- IMAGEN PDF: pág. 65, figura 1. Guardar en imagenes_pdf/fig-p65-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p65-01.png" alt="Tabla de propiedades de aceros" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 65, figura 1</strong><p>Tabla de propiedades de aceros</p><p><code>imagenes_pdf/fig-p65-01.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 65, figura 2. Guardar en imagenes_pdf/fig-p65-02.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p65-02.png" alt="Tabla de propiedades de aceros (continuación)" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 65, figura 2</strong><p>Tabla de propiedades de aceros (continuación)</p><p><code>imagenes_pdf/fig-p65-02.png</code></p>
</div>


<!-- IMAGEN PDF: pág. 66, figura 1. Guardar en imagenes_pdf/fig-p66-01.png. Sustituir el bloque reservado por: <img src="imagenes_pdf/fig-p66-01.png" alt="Tabla adicional de propiedades de aceros" style="max-width:100%;height:auto;"> -->
<div style="border:2px dashed #94a3b8;border-radius:8px;padding:24px;margin:20px auto;max-width:940px;text-align:center;">
<strong>Espacio reservado — PDF, página 66, figura 1</strong><p>Tabla adicional de propiedades de aceros</p><p><code>imagenes_pdf/fig-p66-01.png</code></p>
</div>


<a id="formulario-final-de-fatiga"></a>
## 13. Formulario general de fatiga

Esta sección reúne las relaciones principales en formato de consulta. $\sigma_a$ y $\sigma_m$ son la amplitud y el esfuerzo medio aplicados; $S_a$ y $S_m$ son coordenadas de una frontera de diseño. Para carga proporcional se define $r=\sigma_a/\sigma_m=S_a/S_m$, de modo que $S_a=rS_m$. Se supone esfuerzo medio de tracción y se verifica por separado la fluencia estática.

### 1. Esfuerzo medio y esfuerzo alternante

$$
\begin{aligned}
\sigma_m&=\frac{\sigma_{\max}+\sigma_{\min}}{2}, &
\sigma_a&=\frac{\sigma_{\max}-\sigma_{\min}}{2},\\
\Delta\sigma&=\sigma_{\max}-\sigma_{\min}=2\sigma_a, &
R&=\frac{\sigma_{\min}}{\sigma_{\max}}.
\end{aligned}
$$

### 2. Curvas de vida, resistencia de probeta y Manson–Coffin

$$
S_e'\approx0.5S_{ut}\quad(S_{ut}\leq200\ \text{ksi, para muchos aceros}),\qquad
S_f=aN^b.
$$

Manson–Coffin:

$$
\frac{\Delta\varepsilon}{2}
=\frac{\sigma_f'}{E}(2N)^b+\varepsilon_f'(2N)^c,
\qquad
S_f'=\frac{\Delta\varepsilon_e E}{2}=\sigma_f'(2N)^b.
$$

Estimación de $\sigma_f'$ ($H_B < 500$), exponente $b$ y factor $f$ ($N=10^3$):

$$
\sigma_f'=S_{ut}+50\ \text{ksi}\;(S_{ut}+345\ \text{MPa}),\qquad
b=-\frac{\log(\sigma_f'/S_e')}{\log(2N_e)},\qquad
f=\frac{\sigma_f'(2000)^b}{S_{ut}}.
$$

Con los puntos $(10^3,fS_{ut})$ y $(10^6,S_e)$:

$$
a=\frac{(fS_{ut})^2}{S_e},\qquad
b=-\frac{1}{3}\log_{10}\left(\frac{fS_{ut}}{S_e}\right),\qquad
N=\left(\frac{\sigma_{\mathrm{inv}}}{a}\right)^{\frac{1}{b}}.
$$

### 3. Límite corregido del componente

$$
S_e=k_a k_b k_c k_d k_e k_f S_e'.
$$

$$
k_a=aS_{ut}^{b},\qquad
k_e=1-0.08z_a,\qquad
k_d=\frac{S_T}{S_{RT}}\ \text{(cuando se use la razón tabulada)}.
$$

Para flexión/torsión, el factor $k_b$ depende del diámetro equivalente y del intervalo de unidades; para carga axial, $k_b=1$. Factores de carga tabulados: flexión $k_c=1.00$, axial $k_c=0.85$, torsión $k_c=0.59$.

### 4. Entallas y concentración por fatiga

$$
\begin{aligned}
K_t&=\frac{\sigma_{\max}}{\sigma_{\mathrm{nom}}}, &
K_{ts}&=\frac{\tau_{\max}}{\tau_{\mathrm{nom}}},\\
q&=\frac{K_f-1}{K_t-1}, &
K_f&=1+q(K_t-1),\\
q_s&=\frac{K_{fs}-1}{K_{ts}-1}, &
K_{fs}&=1+q_s(K_{ts}-1).
\end{aligned}
$$

Estimación de Neuber para aceros:

$$
K_f=1+\frac{K_t-1}{1+\sqrt{a/r}}.
$$

### 5. Criterios de fatiga

Para una intersección interior en el primer cuadrante, $r<r_{crit}$ corresponde a Langer y $r>r_{crit}$ al criterio de fatiga. En la intersección coinciden. Se adopta el menor entre $n_f$ y $n_y$.

$$
n_y=\frac{S_y}{\sigma_a+\sigma_m}.
$$

**Goodman:**

$$
\frac{S_a}{S_e}+\frac{S_m}{S_{ut}}=1,\qquad
n_f=\frac{1}{\dfrac{\sigma_a}{S_e}+\dfrac{\sigma_m}{S_{ut}}}.
$$

Intersección de Goodman con la línea de carga $r=S_a/S_m$ (1.ª combinación):

$$
S_a=\frac{rS_eS_{ut}}{rS_{ut}+S_e},\qquad
S_m=\frac{S_a}{r}.
$$

Intersección de Goodman con fluencia (3.ª combinación):

$$
S_m=\frac{(S_y-S_e)S_{ut}}{S_{ut}-S_e},\qquad
S_a=S_y-S_m,\qquad r_{\mathrm{crit}}=\frac{S_a}{S_m}.
$$

**Gerber:**

$$
\frac{S_a}{S_e}+\left(\frac{S_m}{S_{ut}}\right)^2=1,
\qquad
n_f=\frac{1}{2}\left(\frac{S_{ut}}{\sigma_m}\right)^2\frac{\sigma_a}{S_e}\left[-1+\sqrt{1+\left(\frac{2\sigma_m S_e}{S_{ut}\sigma_a}\right)^2}\right].
$$

Intersección de Gerber con la línea de carga $r=S_a/S_m$ (1.ª combinación):

$$
S_a=\frac{r^2S_{ut}^2}{2S_e}
\left[-1+\sqrt{1+\left(\frac{2S_e}{rS_{ut}}\right)^2}\right],
\qquad S_m=\frac{S_a}{r}.
$$

Intersección de Gerber con fluencia (3.ª combinación):

$$
S_m=\frac{S_{ut}^2}{2S_e}
\left[1-\sqrt{1+\left(\frac{2S_e}{S_{ut}}\right)^2
\left(1-\frac{S_y}{S_e}\right)}\right],
\qquad S_a=S_y-S_m,\qquad r_{\mathrm{crit}}=\frac{S_a}{S_m}.
$$

**ASME (ASME-elíptica):**

$$
\left(\frac{S_a}{S_e}\right)^2+\left(\frac{S_m}{S_y}\right)^2=1,
\qquad
n_f=\sqrt{\frac{1}{\left(\dfrac{\sigma_a}{S_e}\right)^2+\left(\dfrac{\sigma_m}{S_y}\right)^2}}.
$$

Intersección de ASME con la línea de carga $r=S_a/S_m$ (1.ª combinación):

$$
S_a=\sqrt{\frac{r^2S_e^2S_y^2}{S_e^2+r^2S_y^2}},\qquad
S_m=\frac{S_a}{r}.
$$

Intersección de ASME con fluencia (3.ª combinación):

$$
S_a=\frac{2S_yS_e^2}{S_e^2+S_y^2},\qquad
S_m=S_y-S_a,\qquad r_{\mathrm{crit}}=\frac{S_a}{S_m}.
$$

**Línea de fluencia con carga proporcional (2.ª combinación común):**

$$
\frac{S_a}{S_y}+\frac{S_m}{S_y}=1 \quad\Longrightarrow\quad S_a=\frac{rS_y}{1+r},\qquad S_m=\frac{S_y}{1+r}.
$$

### 6. Torsión y combinación de modos

$$
S_{su}\approx0.67S_{ut},\qquad S_{sy}\approx0.577S_y.
$$

Amplitud completamente reversible equivalente según Goodman:

$$
\sigma_{ar}=\frac{\sigma_a}{1-\sigma_m/S_{ut}},
\qquad 1-\frac{\sigma_m}{S_{ut}}>0.
$$

Esfuerzos equivalentes combinados:

$$
\begin{aligned}
\sigma_a' &= \sqrt{\left[(K_f)_{\text{flexión}}(\sigma_{a0})_{\text{flexión}} + (K_f)_{\text{axial}}(\sigma_{a0})_{\text{axial}}\right]^2 + 3\left[(K_{fs})_{\text{torsión}}(\tau_{a0})_{\text{torsión}}\right]^2},\\[6pt]
\sigma_m' &= \sqrt{\left[(K_f)_{\text{flexión}}(\sigma_{m0})_{\text{flexión}} + (K_f)_{\text{axial}}(\sigma_{m0})_{\text{axial}}\right]^2 + 3\left[(K_{fs})_{\text{torsión}}(\tau_{m0})_{\text{torsión}}\right]^2}.
\end{aligned}
$$

Se sustituyen $\sigma_a'$ y $\sigma_m'$ en el criterio de fatiga escogido y se comprueba por separado la fluencia bajo el máximo instantáneo.