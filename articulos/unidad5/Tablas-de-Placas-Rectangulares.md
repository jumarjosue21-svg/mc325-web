## 1. Tabla 18-16. Deflexiones y fuerzas internas en placas rectangulares

La Tabla 18-16 reúne expresiones para placas rectangulares sometidas a distintas cargas y condiciones de borde. Se conservan los números de caso, la notación, los coeficientes y las restricciones de aplicación de la fuente original (páginas 1073 a 1084). Los esquemas son recortes de las ilustraciones originales.

### 1.1. Notación

- $w$: deflexión de la placa.
- $E$: módulo de elasticidad.
- $\nu$: coeficiente de Poisson.
- $h$: espesor de la placa.
- $D$: rigidez a flexión.
- $W_T$: carga concentrada total.
- $p_1$: carga uniformemente distribuida.
- $L, L_y$: dimensiones de la placa en las direcciones $x$ e $y$.
- $M_x,M_y$: momentos flectores por unidad de longitud.
- $Q_x,Q_y$: fuerzas cortantes por unidad de longitud.
- $V_x,V_y$: fuerzas cortantes equivalentes por unidad de longitud.

$$
D=\frac{Eh^3}{12(1-\nu^2)},\qquad
\alpha=\frac{L_y}{L},\qquad
\beta=\frac{L}{L_y}.
$$

<script type="text/tikz">
\begin{tikzpicture}[x=0.017cm,y=-0.017cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, Figura 1: geometria de la placa y resultantes de flexion.
  % Trazado vectorial del esquema original; coordenadas en una reticula 563 x 836.
  \path[use as bounding box] (0,0) rectangle (563,820);
  \tikzset{
    eje/.style={draw=black,line width=1.90pt},
    esquema/.style={draw=black,line width=2.15pt},
    franja/.style={draw=black,line width=2.25pt},
    flecha/.style={draw=black,line width=1.95pt,->},
    momento/.style={draw=black,line width=2.05pt,->},
    cota/.style={draw=black,line width=1.50pt,<->},
    referencia/.style={draw=black,line width=1.45pt}
  }

  % (a) Placa rectangular y dimensiones L, L_y.
  \draw[esquema] (75,31) rectangle (348,141);
  \draw[flecha] (348,31) -- (443,31);
  \node[anchor=west,inner sep=0pt,font=\large] at (451,31) {$x$};
  \draw[referencia] (348,141) -- (414,141);
  \draw[cota] (390,33) -- (390,138);
  \node[anchor=west,inner sep=2pt,font=\large] at (397,87) {$L_y$};
  \draw[referencia] (75,141) -- (75,207);
  \draw[referencia] (348,141) -- (348,210);
  \draw[cota] (77,179) -- (346,179);
  \node[fill=white,inner sep=3pt,font=\large] at (211,179) {$L$};
  \draw[flecha] (75,141) -- (75,236);
  \node[anchor=north,inner sep=0pt,font=\large] at (74,242) {$y$};

  % (b) Flexion en una seccion x-z.
  \draw[flecha] (75,325) -- (496,325);
  \node[anchor=west,inner sep=0pt,font=\large] at (504,326) {$x$};
  \draw[flecha] (75,325) -- (75,406);
  \node[anchor=north,inner sep=0pt,font=\large] at (73,410) {$z$};
  % Perfil y espesor de la placa flectada: contornos curvos y extremos planos.
  \draw[franja] (168,393)
    .. controls (234,421) and (308,440) .. (369,437)
    -- (367,460)
    .. controls (287,461) and (215,442) .. (157,416) -- cycle;
  % Esfuerzo cortante y momento en el extremo izquierdo.
  \draw[flecha] (143,438) -- (143,377);
  \node[anchor=south west,inner sep=0pt,font=\large] at (152,372) {$V_x$};
  \draw[momento] (121,423) .. controls (92,421) and (91,400) .. (105,384)
    .. controls (113,376) and (123,377) .. (130,377);
  \node[anchor=north,inner sep=0pt,font=\large] at (113,424) {$M_x$};
  % Cortante y momento en el extremo derecho.
  \draw[flecha] (378,426) -- (378,491);
  \node[anchor=north,inner sep=0pt,font=\large] at (381,497) {$V_x$};
  \draw[momento] (410,481) .. controls (438,458) and (421,438) .. (391,431);
  \node[anchor=south,inner sep=0pt,font=\large] at (401,418) {$M_x$};
  % Flecha transversal y angulo de giro en el borde.
  \draw[referencia] (380,445) -- (533,445);
  \draw[referencia] (368,438) -- (540,492);
  \draw[flecha] (445,326) -- (445,445);
  \node[anchor=south east,inner sep=0pt,font=\large] at (443,394) {$w$};
  \draw[referencia] (505,445) .. controls (506,459) and (503,472) .. (495,479);
  \node[anchor=west,inner sep=0pt,font=\large] at (524,481) {$\theta$};

  % (c) Flexion en una seccion y-z.
  \draw[flecha] (75,585) -- (491,585);
  \node[anchor=west,inner sep=0pt,font=\large] at (499,585) {$y$};
  \draw[flecha] (75,585) -- (75,681);
  \node[anchor=north,inner sep=0pt,font=\large] at (74,687) {$z$};
  \draw[franja] (168,664)
    .. controls (227,687) and (303,706) .. (367,707)
    -- (367,733)
    .. controls (292,730) and (222,709) .. (157,690) -- cycle;
  \draw[flecha] (144,692) -- (144,639);
  \node[anchor=south west,inner sep=0pt,font=\large] at (153,634) {$V_y$};
  \draw[momento] (124,688) .. controls (91,686) and (92,656) .. (130,646);
  \node[anchor=north,inner sep=0pt,font=\large] at (118,697) {$M_y$};
  \draw[flecha] (377,699) -- (377,765);
  \node[anchor=north,inner sep=0pt,font=\large] at (379,772) {$V_y$};
  \draw[momento] (402,750) .. controls (432,733) and (429,705) .. (392,700);
  \node[anchor=south,inner sep=0pt,font=\large] at (406,688) {$M_y$};
\end{tikzpicture}
</script>

Figura 1: Geometría de la placa y convenciones de flexión y cortante utilizadas en la Tabla 18-16.

### 1.2. Casos de apoyo y carga

<div class="pcr-widget" data-placas-carousel aria-label="Tabla 18-16">
<div class="pcr-widget-top"><span class="pcr-kicker">TABLA 18-16</span><span class="pcr-widget-help">Selecciona un caso o utiliza las flechas</span></div>
<div class="pcr-tabs" role="tablist" aria-label="Casos de la Tabla 18-16">
<button type="button" role="tab" id="pcr16-tab1" aria-controls="pcr16-panel1" aria-selected="true" tabindex="0" class="pcr-tab is-active" data-case="0" title="Caso 1. Cuatro bordes simplemente apoyados; carga uniforme">Caso 1</button>
<button type="button" role="tab" id="pcr16-tab2" aria-controls="pcr16-panel2" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="1" title="Caso 2. Cuatro bordes simplemente apoyados; carga concentrada">Caso 2</button>
<button type="button" role="tab" id="pcr16-tab3" aria-controls="pcr16-panel3" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="2" title="Caso 3. Cuatro bordes simplemente apoyados; carga en un pequeño círculo central">Caso 3</button>
<button type="button" role="tab" id="pcr16-tab4" aria-controls="pcr16-panel4" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="3" title="Caso 4. Tres bordes simplemente apoyados y uno libre; carga uniforme">Caso 4</button>
<button type="button" role="tab" id="pcr16-tab5" aria-controls="pcr16-panel5" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="4" title="Caso 5. Tres bordes empotrados y uno libre; carga uniforme">Caso 5</button>
<button type="button" role="tab" id="pcr16-tab6" aria-controls="pcr16-panel6" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="5" title="Caso 6. Cuatro bordes simplemente apoyados; carga linealmente variable">Caso 6</button>
<button type="button" role="tab" id="pcr16-tab7" aria-controls="pcr16-panel7" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="6" title="Caso 7. Dos bordes simplemente apoyados y dos empotrados; carga linealmente variable">Caso 7</button>
<button type="button" role="tab" id="pcr16-tab8" aria-controls="pcr16-panel8" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="7" title="Caso 8. Cuatro bordes empotrados; carga linealmente variable">Caso 8</button>
<button type="button" role="tab" id="pcr16-tab9" aria-controls="pcr16-panel9" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="8" title="Caso 9. Dos bordes simplemente apoyados y dos con apoyos flexibles; carga uniforme">Caso 9</button>
<button type="button" role="tab" id="pcr16-tab10" aria-controls="pcr16-panel10" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="9" title="Caso 10. Cuatro bordes empotrados; carga uniforme">Caso 10</button>
<button type="button" role="tab" id="pcr16-tab11" aria-controls="pcr16-panel11" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="10" title="Caso 11. Dos bordes simplemente apoyados y dos libres; carga uniforme">Caso 11</button>
</div>
<div class="pcr-viewport">
<section role="tabpanel" id="pcr16-panel1" aria-labelledby="pcr16-tab1" aria-hidden="false" class="pcr-panel is-active" data-case-panel="0"><div class="pcr-panel-heading">Caso 1. Cuatro bordes simplemente apoyados; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, figura 2: placa simplemente apoyada bajo carga uniforme.
  % Redibujo vectorial de los dos esquemas originales.
  \path[use as bounding box] (22,-4) rectangle (505,485);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    eje/.style={draw=black,line width=1.90pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.45pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Elevacion: carga p_1 sobre placa con dos apoyos simples.
  \node[font=\Large,inner sep=0pt,anchor=south] at (218,37) {$p_1$};
  \draw[contorno] (75,48) -- (369,48);
  \draw[contorno] (75,112) -- (369,112);
  % Triangulos de apoyo: vertice en los extremos de la placa.
  \draw[apoyo,fill=white] (75,112) -- (63,137) -- (87,137) -- cycle;
  \draw[apoyo,fill=white] (369,112) -- (357,137) -- (381,137) -- cycle;
  % Las seis flechas representan la carga transversal uniforme.
  \draw[carga] (75,48) -- (75,109);
  \draw[carga] (134,48) -- (134,109);
  \draw[carga] (193,48) -- (193,109);
  \draw[carga] (252,48) -- (252,109);
  \draw[carga] (311,48) -- (311,109);
  \draw[carga] (369,48) -- (369,109);
  \draw[eje] (375,112) -- (441,112);
  \node[anchor=west,font=\large,inner sep=1pt] at (450,112) {$x$};
  \draw[eje] (75,143) -- (75,197);
  \node[anchor=west,font=\large,inner sep=0pt] at (92,181) {$z,w$};

  % (b) Planta rectangular, linea interior discontinua, origen y ejes.
  \node[font=\large,anchor=east,inner sep=1pt] at (64,239) {$0$};
  \draw[contorno] (76,246) rectangle (367,364);
  \draw[interior] (85,255) rectangle (357,353);
  \draw[eje] (367,246) -- (475,246);
  \node[font=\large,anchor=west,inner sep=1pt] at (484,246) {$x$};
  \draw[eje] (76,364) -- (76,444);
  \node[font=\large,anchor=north,inner sep=0pt] at (76,453) {$y$};

  % Cotas L_y y L con extensiones y doble sentido.
  \draw[auxiliar] (367,246) -- (433,246);
  \draw[auxiliar] (367,364) -- (433,364);
  \draw[dimension] (410,249) -- (410,361);
  \node[fill=white,inner sep=3pt,font=\large] at (420,305) {$L_y$};
  \draw[auxiliar] (367,364) -- (367,433);
  \draw[dimension] (79,401) -- (365,401);
  \node[fill=white,inner sep=3pt,font=\large] at (219,401) {$L$};
\end{tikzpicture}
</script><figcaption>Figura 2: Caso 1, placa simplemente apoyada con carga uniformemente distribuida $p_1$.</figcaption></figure><div class="pcr-panel-body"><p>La deflexión y los momentos flectores se determinan mediante las series:</p>
<div class="pcr-math">$$
w=\frac{16p_1L^4}{\pi^6 D}
\sum_{m=1,3,5,\ldots}\sum_{n=1,3,5,\ldots}
\frac{\sin(n\pi x/L)\sin(m\pi y/L_y)}{mn(n^2/L^2+m^2/L_y^2)^2}.
$$</div>
<div class="pcr-math">$$
M_x=\frac{16p_1L^2}{\pi^4}
\sum_{m=1,3,5,\ldots}\sum_{n=1,3,5,\ldots}
\gamma_1\frac{\sin(n\pi x/L)\sin(m\pi y/L_y)}{mn(n^2+m^2/\alpha^2)^2}.
$$</div>
<div class="pcr-math">$$
M_y=\frac{16p_1L^2}{\pi^4}
\sum_{m=1,3,5,\ldots}\sum_{n=1,3,5,\ldots}
\gamma_2\frac{\sin(n\pi x/L)\sin(m\pi y/L_y)}{mn(n^2+m^2/\alpha^2)^2}.
$$</div>
<div class="pcr-math">$$
\gamma_1=n^2+\nu\frac{m^2}{\alpha^2},\qquad
\gamma_2=\frac{m^2}{\alpha^2}+\nu n^2.
$$</div>
<p>Los valores máximos tabulados son:</p>
<div class="pcr-math">$$
\begin{aligned}
w_{\max}=w_{\mathrm{centro}}&=c_1\frac{p_1L^4}{Eh^3},\\
(M_x)_{\max}&=c_2p_1L^2\quad(\mathrm{centro}),\\
(M_y)_{\max}&=c_3p_1L^2\quad(\mathrm{centro}),\\
(Q_x)_{\max}&=c_4p_1L\quad(x=0,L),\\
(Q_y)_{\max}&=c_5p_1L_y\quad(y=0,L_y),\\
(V_x)_{\max}&=c_6p_1L,\\
(V_y)_{\max}&=c_7p_1L_y,\\
R_0&=c_8p_1LL_y\quad(\mathrm{esquinas}).
\end{aligned}
$$</div>
<p>Para $\nu=0.3$, los coeficientes de la tabla son:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=0.1421+0.08204\beta-0.3985\beta^2+0.219\beta^3,\\
c_2&=0.1247+0.05524\beta-0.2762\beta^2+0.1441\beta^3,\\
c_3&=0.03726-0.01504\beta+0.1028\beta^2-0.07756\beta^3,\\
c_4&=0.4967+0.1686\beta-0.6849\beta^2+0.3976\beta^3,\\
c_5&=-0.0007805+0.3679\beta+0.04574\beta^2-0.07488\beta^3,\\
c_6&=0.4983+0.02879\beta+0.004425\beta^2-0.1137\beta^3,\\
c_7&=-0.003591+0.5091\beta+0.05874\beta^2-0.1445\beta^3,\\
c_8&=-0.003545+0.1179\beta-0.02755\beta^2-0.02202\beta^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel2" aria-labelledby="pcr16-tab2" aria-hidden="true" class="pcr-panel" data-case-panel="1"><div class="pcr-panel-heading">Caso 2. Cuatro bordes simplemente apoyados; carga concentrada</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, Figura 3: placa simplemente apoyada con carga concentrada W_T.
  % Los dos esquemas y sus anotaciones conservan la disposicion original.
  \path[use as bounding box] (44,-5) rectangle (568,452);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    eje/.style={draw=black,line width=1.90pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.45pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Alzado: carga puntual W_T y dos apoyos simples.
  \draw[contorno] (90,100) -- (374,100);
  \draw[apoyo,fill=white] (90,100) -- (79,125) -- (101,125) -- cycle;
  \draw[apoyo,fill=white] (374,100) -- (362,125) -- (386,125) -- cycle;
  \draw[carga] (179,40) -- (179,98);
  \node[font=\Large,anchor=south,inner sep=0pt] at (200,38) {$W_T$};
  \draw[eje] (393,100) -- (469,100);
  \node[font=\large,anchor=west,inner sep=1pt] at (480,100) {$x$};
  \draw[eje] (90,134) -- (90,191);
  \node[font=\large,anchor=west,inner sep=1pt] at (103,171) {$z,w$};

  % (b) Planta: contorno, linea interior discontinua y ejes.
  \draw[contorno] (90,235) rectangle (376,354);
  \draw[interior] (100,245) rectangle (365,345);
  \draw[eje] (90,294) -- (539,294);
  \node[font=\large,anchor=west,inner sep=1pt] at (545,294) {$x$};
  \node[font=\large,anchor=east,inner sep=1pt] at (74,291) {$0$};
  \draw[eje] (90,354) -- (90,430);

  % Ubicacion de la carga concentrada: distancia a y distancia b.
  \fill (174,283) circle (4pt);
  \draw[auxiliar] (174,284) -- (174,340);
  \draw[dimension] (92,329) -- (172,329);
  \node[fill=white,inner sep=2pt,font=\large] at (131,327) {$a$};
  \draw[auxiliar] (174,283) -- (214,283);
  \draw[carga] (214,306) -- (214,283);
  \node[font=\large,anchor=south,inner sep=1pt] at (214,279) {$b$};

  % La cota vertical se distribuye en L_y/2 a cada lado del eje x.
  \draw[auxiliar] (376,235) -- (454,235);
  \draw[auxiliar] (376,354) -- (483,354);
  \draw[carga] (213,196) -- (213,234);
  \draw[carga] (418,196) -- (418,234);
  \draw[carga] (468,262) -- (468,292);
  \draw[carga] (418,316) -- (418,295);
  \draw[carga] (468,380) -- (468,354);
  \node[font=\large,anchor=west,inner sep=1pt] at (383,267) {$L_y/2$};
  \node[font=\large,anchor=west,inner sep=1pt] at (438,317) {$L_y/2$};

  % Longitud total de la placa.
  \draw[auxiliar] (90,354) -- (90,411);
  \draw[auxiliar] (376,354) -- (376,412);
  \draw[dimension] (92,389) -- (374,389);
  \node[fill=white,inner sep=3pt,font=\large] at (233,389) {$L$};
\end{tikzpicture}
</script><figcaption>Figura 3: Caso 2, carga $W_T$ aplicada en $(a,b)$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
w=\frac{4W_T}{D\pi^4LL_y}
\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
\frac{\sin(n\pi a/L)\sin(m\pi b/L_y)\sin(n\pi x/L)\sin(m\pi y/L_y)}{(n^2/L^2+m^2/L_y^2)^2}.
$$</div>
<p>La tabla incluye también la siguiente expresión alternativa:</p>
<div class="pcr-math">$$
\begin{aligned}
w={}&\frac{W_TL^2}{D\pi^3}\sum_{n=1}^{\infty}
\Bigg(1+\beta_n\coth\beta_n
-\frac{\beta_n y_1}{L_y}\coth\frac{\beta_n y_1}{L_y}
-\frac{\beta_n b_1}{L_y}\coth\frac{\beta_n b_1}{L_y}\Bigg)\\
&\times\frac{\sinh(\beta_n b_1/L_y)\sinh(\beta_n y_1/L_y)
\sin(n\pi a/L)\sin(n\pi x/L)}{n^3\sinh\beta_n},
\qquad \beta_n=\frac{n\pi L_y}{L}.
\end{aligned}
$$</div>
<p>Las variables auxiliares dependen de la posición del punto de observación:</p>
<div class="pcr-math">$$
\begin{cases}
y_1=L_y-y,\quad b_1=b,& y\geq b,\\
y_1=y,\quad b_1=L_y-b,& y<b.
\end{cases}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel3" aria-labelledby="pcr16-tab3" aria-hidden="true" class="pcr-panel" data-case-panel="2"><div class="pcr-panel-heading">Caso 3. Cuatro bordes simplemente apoyados; carga en un pequeño círculo central</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, Figura 4: placa simplemente apoyada.
  % Una carga W_T se distribuye sobre un area CIRCULAR de radio r_0.
  % La zona sombreada en planta es un disco, no una franja rectangular.
  \path[use as bounding box] (37,-2) rectangle (502,385);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.50pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.50pt,dash pattern=on 6pt off 4pt},
    rayado/.style={draw=black,line width=0.90pt}
  }

  % (a) Planta de la placa rectangular.
  \draw[contorno] (62,22) rectangle (352,142);
  \draw[interior] (74,31) rectangle (342,132);

  % Superficie circular cargada, centrada en la placa, diametro 2r_0.
  \draw[contorno,fill=white] (207,82) circle (23);
  \begin{scope}
    \clip (207,82) circle (22);
    \draw[rayado] (169,102) -- (220,51);
    \draw[rayado] (178,111) -- (229,60);
    \draw[rayado] (187,120) -- (238,69);
    \draw[rayado] (196,129) -- (247,78);
    \draw[rayado] (205,138) -- (256,87);
  \end{scope}
  % Flechas que señalan los extremos del diametro del circulo.
  \draw[carga] (156,82) -- (180,82);
  \draw[carga] (258,82) -- (234,82);
  \node[font=\Large,anchor=west,inner sep=1pt] at (255,57) {$2r_0$};

  % Dimensiones originales L y L_y.
  \draw[auxiliar] (352,22) -- (426,22);
  \draw[auxiliar] (352,142) -- (426,142);
  \draw[dimension] (396,26) -- (396,138);
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (403,82) {$L_y$};
  \draw[auxiliar] (62,142) -- (62,210);
  \draw[auxiliar] (352,142) -- (352,210);
  \draw[dimension] (66,175) -- (348,175);
  \node[font=\Large,fill=white,inner sep=2pt] at (207,175) {$L$};

  % (b) Elevacion: resultante de la carga circular y apoyos simples.
  \draw[contorno] (62,328) -- (357,328);
  \draw[apoyo,fill=white] (62,328) -- (51,354) -- (75,354) -- cycle;
  \draw[apoyo,fill=white] (357,328) -- (345,354) -- (369,354) -- cycle;
  % Vista frontal estrictamente bidimensional: pequeña zona cargada,
  % sin volumen, como en la ilustracion original.
  \draw[contorno] (193,296) -- (193,263) -- (221,263) -- (221,296);
  % Dos flechas centradas bajo la zona cargada y separadas de forma moderada.
  \draw[carga] (201,286) -- (201,326);
  \draw[carga] (213,286) -- (213,326);
  \node[font=\Large,anchor=south,inner sep=1pt] at (207,252) {$W_T$};
\end{tikzpicture}
</script><figcaption>Figura 4: Caso 3, carga total $W_T$ distribuida en un círculo de radio $r_0$.</figcaption></figure><div class="pcr-panel-body"><p>En el centro de la placa:</p>
<div class="pcr-math">$$
w_{\max}=k_1\frac{W_TL_y^2}{Eh^3},\qquad
\sigma_{\max}=\frac{3W_T}{2\pi h^2}\left[(1+\nu)\ln\frac{2L_y}{\pi r_e}+k_2\right].
$$</div>
<div class="pcr-math">$$
r_e=\begin{cases}
\sqrt{1.6r_0^2+h^2}-0.675h,&r_0<0.5h,\\
r_0,&r_0>0.5h.
\end{cases}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
k_1&=0.1851+0.06342\alpha-0.1643\alpha^2+0.04232\alpha^3,\\
k_2&=0.9998+0.5195\alpha-1.29\alpha^2+0.2042\alpha^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel4" aria-labelledby="pcr16-tab4" aria-hidden="true" class="pcr-panel" data-case-panel="3"><div class="pcr-panel-heading">Caso 4. Tres bordes simplemente apoyados y uno libre; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, figura 5. Tres bordes simplemente apoyados y uno libre.
  % Disposicion de las vistas segun el documento original.
  \path[use as bounding box] (10,-5) rectangle (518,294);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.50pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.50pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Vista de frente: carga uniforme cerrada en el primer y ultimo vector.
  % Sus extremos se alinean con los lados izquierdo y derecho de la planta.
  \draw[auxiliar] (160,32) -- (384,32);
  \draw[contorno] (160,71) -- (384,71);
  \foreach \x in {160,205,250,295,340,384}{
    \draw[carga] (\x,32) -- (\x,71);
  }
  \node[font=\Large,anchor=south,inner sep=1pt] at (272,28) {$p_1$};
  \draw[apoyo,fill=white] (384,71) -- (372,92) -- (396,92) -- cycle;

  % (b) Vista lateral izquierda: carga cerrada, apoyos y altura alineados
  % con la parte superior e inferior de la placa en planta.
  \draw[auxiliar] (55,115) -- (94,115);
  \draw[auxiliar] (55,214) -- (94,214);
  \draw[contorno] (55,115) -- (55,214);
  \draw[contorno] (94,115) -- (94,214);
  \foreach \y in {115,148,181,214}{
    \draw[carga] (55,\y) -- (94,\y);
  }
  \draw[apoyo,fill=white] (94,115) -- (118,104) -- (118,126) -- cycle;
  \draw[apoyo,fill=white] (94,214) -- (118,203) -- (118,225) -- cycle;
  \node[font=\Large,anchor=east] at (47,166) {$p_1$};

  % (c) Planta rectangular. Lado izquierdo sin linea discontinua.
  \draw[contorno] (160,115) rectangle (384,214);
  \draw[interior] (172,124) -- (373,124) -- (373,205) -- (172,205);
  \node[font=\Large,anchor=east,inner sep=2pt] at (153,116) {$0$};

  % Eje x y cota L_y, conservando la composicion de la referencia.
  \draw[carga] (385,115) -- (462,115);
  \node[font=\Large,anchor=west] at (474,117) {$x$};
  \draw[auxiliar] (384,214) -- (445,214);
  \draw[dimension] (426,119) -- (426,210);
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (435,164) {$L_y$};

  % Cota L y eje y, con lineas de proyeccion discretas.
  \draw[auxiliar] (384,214) -- (384,268);
  \draw[dimension] (166,247) -- (378,247);
  \node[font=\Large,fill=white,inner sep=2pt] at (272,247) {$L$};
  \draw[carga] (160,217) -- (160,267);
  \node[font=\Large,anchor=north] at (160,273) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 5: Caso 4, placa con un borde libre y tres simplemente apoyados.</figcaption></figure><div class="pcr-panel-body"><p>Para $\nu=0.15$:</p>
<div class="pcr-math">$$
\begin{aligned}
(M_x)_{x=L/2,\;y=L_y/2}&=c_1p_1L_y^2,\\
(M_y)_{x=L/2,\;y=L_y/2}&=c_2p_1L_y^2,\\
(M_y)_{x=0,\;y=L_y/2}&=c_3p_1L_y^2.
\end{aligned}
$$</div>
<div class="pcr-math">$$
c_1=\begin{cases}
-2.7975+16.537\beta^{1/2}-36.423\beta+35.523\beta^{3/2}-12.913\beta^2,&0.3\le\beta<0.8,\\
-0.2714+0.6371\beta^{1/2}-0.4533\beta+0.1021\beta^{3/2},&0.8\le\beta\le2.0.
\end{cases}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
c_2&=0.1448-0.7829\beta^{1/2}+1.415\beta-0.9113\beta^{3/2}+0.2039\beta^2,\\
c_3&=0.2558-1.3186\beta^{1/2}+2.6532\beta-1.9313\beta^{3/2}+0.4817\beta^2.
\end{aligned}
$$</div>
<p>Los ajustes de $c_2$ y $c_3$ corresponden a $0.3\leq\beta\leq2.0$.</p>
</div></section>
<section role="tabpanel" id="pcr16-panel5" aria-labelledby="pcr16-tab5" aria-hidden="true" class="pcr-panel" data-case-panel="4"><div class="pcr-panel-heading">Caso 5. Tres bordes empotrados y uno libre; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, Figura 6: tres bordes empotrados, uno libre.
  % Vistas y cotas segun la figura original; sin lineas interiores punteadas.
  \path[use as bounding box] (4,-18) rectangle (513,319);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    carga/.style={draw=black,line width=2.0pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    empotramiento/.style={draw=black,line width=1.8pt},
    rayado/.style={draw=black,line width=1.15pt}
  }

  % (a) Vista frontal: p_1 distribuida uniformemente, contorno cerrado.
  % El empotramiento se encuentra a la derecha, coincidiendo con x=L.
  \draw[contorno] (175,30) -- (417,30) -- (417,74) -- (175,74);
  \foreach \x in {175,223,272,320,368,417}{
    \draw[carga] (\x,30) -- (\x,74);
  }
  \node[font=\Large,anchor=south,inner sep=1pt] at (296,22) {$p_1$};
  \draw[empotramiento] (417,73) -- (417,130);
  \foreach \yy in {78,92,106,120}{
    \draw[rayado] (417,\yy) -- (431,\yy-14);
  }

  % (b) Vista lateral izquierda: carga p_1 cerrada con apoyo empotrado.
  % Coincide en altura con la planta.
  \draw[contorno] (48,132) -- (96,132) -- (96,233) -- (48,233) -- cycle;
  \foreach \yy in {132,165.7,199.3,233}{
    \draw[carga] (48,\yy) -- (96,\yy);
  }
  % El empotramiento lateral se indica por las dos secciones rayadas.
  \draw[empotramiento] (96,132) -- (121,132);
  \draw[empotramiento] (96,233) -- (121,233);
  \foreach \xx in {101,114,127}{
    \draw[rayado] (\xx,132) -- (\xx-11,118);
    \draw[rayado] (\xx,233) -- (\xx+11,247);
  }
  \node[font=\Large,anchor=east,inner sep=1pt] at (38,184) {$p_1$};

  % (c) Planta: contorno de la placa sin trazos discontinuos.
  \draw[contorno] (175,132) rectangle (417,233);
  \node[font=\Large,anchor=east,inner sep=3pt] at (167,133) {$0$};

  % Ejes x, y y cotas L, L_y.
  \draw[carga] (419,132) -- (478,132);
  \node[font=\Large,anchor=west] at (487,133) {$x$};
  \draw[auxiliar] (417,233) -- (469,233);
  \draw[dimension] (450,136) -- (450,229);
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (457,183) {$L_y$};
  \draw[auxiliar] (417,233) -- (417,282);
  \draw[dimension] (179,267) -- (413,267);
  \node[font=\Large,fill=white,inner sep=2pt] at (296,267) {$L$};
  \draw[carga] (175,237) -- (175,299);
  \node[font=\Large,anchor=north,inner sep=1pt] at (175,304) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 6: Caso 5, placa con tres bordes empotrados y uno libre.</figcaption></figure><div class="pcr-panel-body"><p>Con $\nu=0.15$:</p>
<div class="pcr-math">$$
\begin{aligned}
(M_x)_{L/2,\;L_y/2}&=c_1p_1L_y^2,\\
(M_y)_{L/2,\;L_y/2}&=c_2p_1L_y^2,\\
(M_y)_{0,\;L_y/2}&=c_3p_1L_y^2,\\
(M_x)_{L,\;L_y/2}&=c_4p_1L^2,\\
(M_y)_{L/2,\;0,L_y}&=c_5p_1L_y^2,\\
(M_y)_{0,\;0,L_y}&=c_6p_1L_y^2.
\end{aligned}
$$</div>
<div class="pcr-math">$$
c_1=\begin{cases}
-0.01247+0.05532\alpha-0.04778\alpha^2+0.01519\alpha^3-0.001687\alpha^4,&1.25<\alpha\leq3.3,\\
-0.006967+0.01615\alpha+0.01147\alpha^2-0.01205\alpha^3,&0.5\leq\alpha\leq1.25.
\end{cases}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
c_2&=0.05474-0.03243\alpha+0.006359\alpha^2-0.0003985\alpha^3,\\
c_3&=0.03724+0.02528\alpha-0.02263\alpha^2+0.003719\alpha^3,\\
c_4&=-0.006349+0.02708\alpha-0.09165\alpha^2+0.01488\alpha^3,\\
c_5&=-0.1062+0.04391\alpha-0.00235\alpha^2-0.0007418\alpha^3,\\
c_6&=-0.06827-0.04205\alpha+0.02756\alpha^2-0.003528\alpha^3.
\end{aligned}
$$</div>
<p>Los coeficientes $c_2,\ldots,c_6$ están tabulados para $0.5\leq\alpha\leq3.3$.</p>
</div></section>
<section role="tabpanel" id="pcr16-panel6" aria-labelledby="pcr16-tab6" aria-hidden="true" class="pcr-panel" data-case-panel="5"><div class="pcr-panel-heading">Caso 6. Cuatro bordes simplemente apoyados; carga linealmente variable</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16. Figura 7: placa rectangular simplemente apoyada
  % en sus cuatro bordes con carga linealmente variable (triangular).
  \path[use as bounding box] (-9,-12) rectangle (528,324);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.50pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Alzado: distribucion triangular p_1, maxima a la izquierda
  % y nula en el apoyo derecho. Contorno de la carga cerrado.
  \draw[contorno] (180,24) -- (435,95) -- (180,95) -- cycle;
  \draw[carga] (180,25) -- (180,95);
  \draw[carga] (230,38) -- (230,95);
  \draw[carga] (280,52) -- (280,95);
  \draw[carga] (330,66) -- (330,95);
  \draw[carga] (380,80) -- (380,95);
  \node[font=\Large,anchor=south,inner sep=1pt] at (151,22) {$p_1$};
  % Apoyos simples en los extremos.
  \draw[apoyo,fill=white] (180,95) -- (169,117) -- (191,117) -- cycle;
  \draw[apoyo,fill=white] (435,95) -- (424,117) -- (446,117) -- cycle;

  % (b) Vista lateral, con carga p_1 uniforme en esta direccion.
  % Coincide en altura con la planta y utiliza dos apoyos simples.
  \draw[contorno] (48,132) rectangle (101,230);
  \draw[carga] (48,151) -- (101,151);
  \draw[carga] (48,181) -- (101,181);
  \draw[carga] (48,211) -- (101,211);
  \draw[apoyo,fill=white] (101,142) -- (124,131) -- (124,153) -- cycle;
  \draw[apoyo,fill=white] (101,220) -- (124,209) -- (124,231) -- cycle;
  \node[font=\Large,anchor=east,inner sep=2pt] at (37,183) {$p_1$};

  % (c) Vista en planta: placa rectangular y contorno interior punteado.
  \draw[contorno] (180,132) rectangle (435,230);
  \draw[interior] (191,141) rectangle (425,220);

  % Coordenadas y cotas como en el grafico original.
  \draw[carga] (437,132) -- (501,132);
  \node[font=\Large,anchor=west,inner sep=1pt] at (507,133) {$x$};
  \draw[auxiliar] (435,132) -- (486,132);
  \draw[auxiliar] (435,230) -- (486,230);
  \draw[dimension] (468,136) -- (468,226);
  \node[font=\Large,fill=white,inner sep=2pt,anchor=west] at (475,181) {$L_y$};
  \draw[auxiliar] (180,230) -- (180,278);
  \draw[auxiliar] (435,230) -- (435,278);
  \draw[dimension] (184,255) -- (431,255);
  \node[font=\Large,fill=white,inner sep=2pt] at (307,255) {$L$};
  \draw[carga] (180,233) -- (180,296);
  \node[font=\Large,anchor=north,inner sep=0pt] at (180,300) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 7: Caso 6, carga triangular $p_1$.</figcaption></figure><div class="pcr-panel-body"><p>Si $L/L_y<1$:</p>
<div class="pcr-math">$$
\begin{aligned}
(M_x)_{L/2,\;L_y/2}&=c_1p_1L^2,\\
(M_x)_{\max}&=c_2p_1L^2,\\
(M_y)_{L/2,\;L_y/2}&=c_3p_1L^2,\\
(M_y)_{\max}&=c_4p_1L^2.
\end{aligned}
$$</div>
<p>Si $L/L_y\geq1$, se reemplaza $p_1L^2$ por $p_1L_y^2$. El caso está tabulado con $\nu=0.15$.</p>
<p>Para $0.5\leq\beta\leq1.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=0.08438-0.06242\beta-0.03592\beta^2+0.03239\beta^3,\\
c_2&=0.085096-0.0635\beta-0.02495\beta^2+0.02498\beta^3,\\
c_3&=0.01873+0.07069\beta-0.02985\beta^2+0.003716\beta^3,\\
c_4&=0.01756-0.05004\beta-0.1028\beta^2+0.05186\beta^3.
\end{aligned}
$$</div>
<p>Para $1.0<\beta\leq2.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=-0.003636+0.05639\beta-0.04352\beta^2+0.009206\beta^3,\\
c_2&=-0.01872+0.07831\beta-0.04657\beta^2+0.008649\beta^3,\\
c_3&=-0.04394+0.08744\beta-0.03008\beta^2+0.004946\beta^3,\\
c_4&=-0.01646+0.02599\beta+0.01385\beta^2+0.004938\beta^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel7" aria-labelledby="pcr16-tab7" aria-hidden="true" class="pcr-panel" data-case-panel="6"><div class="pcr-panel-heading">Caso 7. Dos bordes simplemente apoyados y dos empotrados; carga linealmente variable</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Tabla 18-16, Figura 8: dos bordes simplemente apoyados
  % y dos bordes empotrados. Distribucion linealmente variable.
  \path[use as bounding box] (-9,-13) rectangle (528,325);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.5pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Vista frontal: carga triangular p_1 de mayor a menor.
  % El contorno se cierra contra la linea de la placa.
  \draw[contorno] (180,24) -- (435,95) -- (180,95) -- cycle;
  \draw[carga] (180,24) -- (180,95);
  \draw[carga] (236,40) -- (236,95);
  \draw[carga] (292,55) -- (292,95);
  \draw[carga] (348,71) -- (348,95);
  \draw[auxiliar] (385,81) -- (385,95);
  \node[font=\Large,anchor=south,inner sep=1pt] at (160,21) {$p_1$};
  \draw[apoyo,fill=white] (180,95) -- (169,117) -- (191,117) -- cycle;
  \draw[apoyo,fill=white] (435,95) -- (424,117) -- (446,117) -- cycle;

  % (b) Vista lateral izquierda: carga uniforme y ambos extremos empotrados.
  % Las rayas oblicuas representan empotramientos, NO apoyos triangulares.
  \draw[contorno] (48,132) rectangle (101,230);
  \draw[carga] (48,153) -- (101,153);
  \draw[carga] (48,181) -- (101,181);
  \draw[carga] (48,209) -- (101,209);
  \draw[auxiliar] (78,132) -- (130,132);
  \draw[auxiliar] (78,230) -- (130,230);
  \foreach \x in {79,95,111}{
    \draw[auxiliar] (\x,119) -- (\x+11,132);
    \draw[auxiliar] (\x,230) -- (\x+11,243);
  }

  % (c) Planta rectangular. Solo los bordes laterales interiores
  % aparecen a trazos; los bordes superior e inferior son continuos.
  \draw[contorno] (180,132) rectangle (435,230);
  \draw[interior] (191,142) -- (191,220);
  \draw[interior] (424,142) -- (424,220);

  % Ejes y dimensiones L, L_y conforme al original.
  \draw[carga] (438,132) -- (501,132);
  \node[font=\Large,anchor=west,inner sep=1pt] at (507,132) {$x$};
  \draw[auxiliar] (435,132) -- (486,132);
  \draw[auxiliar] (435,230) -- (486,230);
  \draw[dimension] (468,136) -- (468,226);
  \node[font=\Large,fill=white,inner sep=2pt,anchor=west] at (475,181) {$L_y$};
  \draw[auxiliar] (180,230) -- (180,279);
  \draw[auxiliar] (435,230) -- (435,279);
  \draw[dimension] (184,255) -- (431,255);
  \node[font=\Large,fill=white,inner sep=2pt] at (307,255) {$L$};
  \draw[carga] (180,233) -- (180,296);
  \node[font=\Large,anchor=north,inner sep=0pt] at (180,300) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 8: Caso 7, combinación de apoyos simples y empotramientos.</figcaption></figure><div class="pcr-panel-body"><p>Si $\beta=L/L_y<1$:</p>
<div class="pcr-math">$$
\begin{aligned}
-(M_y)_{\max}&=c_1p_1L^2,\\
(M_x)_{L/2,\;0,L_y}&=c_2p_1L^2,\\
(M_x)_{\max}&=c_3p_1L^2,\\
(M_x)_{L/2,\;L_y/2}&=c_4p_1L^2,\\
(M_y)_{\max}&=c_5p_1L^2,\\
(M_y)_{L/2,\;L_y/2}&=c_6p_1L^2.
\end{aligned}
$$</div>
<p>Si $\beta\geq1$, se sustituye $p_1L^2$ por $p_1L_y^2$. Se considera $\nu=0.15$.</p>
<p>Para $0.5\leq\beta\leq1.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=-0.0947+0.09607\beta-0.0758\beta^2+0.03702\beta^3,\\
c_2&=-0.07833+0.01816\beta+0.04384\beta^2-0.01853\beta^3,\\
c_3&=0.147-0.3292\beta+0.286\beta^2-0.09076\beta^3,\\
c_4&=0.120-0.218\beta+0.1254\beta^2-0.01945\beta^3,\\
c_5&=-0.04249+0.196\beta-0.2114\beta^2+0.07222\beta^3,\\
c_6&=-0.04249+0.196\beta-0.2114\beta^2+0.07222\beta^3.
\end{aligned}
$$</div>
<p>Para $1.0<\beta\leq2.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=-0.001352-0.04739\beta+0.01262\beta^2-0.001445\beta^3,\\
c_2&=0.01942-0.09533\beta+0.04973\beta^2-0.008762\beta^3,\\
c_3&=-0.005903+0.04346\beta-0.03065\beta^2+0.00615\beta^3,\\
c_4&=0.02255-0.01713\beta+0.001814\beta^2+0.0006693\beta^3,\\
c_5&=-0.0156+0.04088\beta-0.01164\beta^2+0.00638\beta^3,\\
c_6&=-0.02249+0.06271\beta-0.03123\beta^2+0.005338\beta^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel8" aria-labelledby="pcr16-tab8" aria-hidden="true" class="pcr-panel" data-case-panel="7"><div class="pcr-panel-heading">Caso 8. Cuatro bordes empotrados; carga linealmente variable</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Figura 9 de la Tabla 18-16: cuatro lados empotrados,
  % carga triangular (linealmente variable) en la direccion x.
  \path[use as bounding box] (-7,-17) rectangle (531,326);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    empotramiento/.style={draw=black,line width=1.85pt},
    rayado/.style={draw=black,line width=1.25pt}
  }

  % (a) Perfil superior: carga triangular p_1 que termina en cero.
  % Cerrar el diagrama de carga contra la linea de la placa.
  \draw[contorno] (184,22) -- (445,96) -- (184,96) -- cycle;
  \draw[carga] (184,22) -- (184,96);
  \draw[carga] (238,37.3) -- (238,96);
  \draw[carga] (293,52.9) -- (293,96);
  \draw[carga] (348,68.5) -- (348,96);
  \draw[auxiliar] (403,84.1) -- (403,96);
  \node[font=\Large,anchor=south,inner sep=1pt] at (158,22) {$p_1$};

  % Ambos extremos del alzado estan empotrados (NO apoyos triangulares).
  \draw[empotramiento] (184,43) -- (184,101);
  \draw[empotramiento] (445,60) -- (445,101);
  \foreach \yy in {55,73,91}{
    \draw[rayado] (184,\yy) -- (170,\yy+15);
  }
  \foreach \yy in {64,82,100}{
    \draw[rayado] (445,\yy) -- (458,\yy-15);
  }

  % (b) Vista lateral izquierda: tres vectores de carga p_1.
  % Las lineas rayadas indican los bordes empotrados superior e inferior.
  \draw[contorno] (48,135) rectangle (101,235);
  \foreach \yy in {154,183,212}{\draw[carga] (48,\yy) -- (101,\yy);}
  \draw[empotramiento] (48,135) -- (118,135);
  \draw[empotramiento] (48,235) -- (118,235);
  \foreach \xx in {58,76,94,112}{
    \draw[rayado] (\xx-13,121) -- (\xx,135);
    \draw[rayado] (\xx-13,235) -- (\xx,249);
  }
  \node[font=\Large,anchor=east,inner sep=1pt] at (37,184) {$p_1$};

  % (c) Planta: contorno completamente continuo, sin lineas interiores.
  \draw[contorno] (184,135) rectangle (445,235);

  % Ejes y dimensiones de la figura original.
  \draw[carga] (447,135) -- (503,135);
  \node[font=\Large,anchor=west,inner sep=1pt] at (507,136) {$x$};
  \draw[auxiliar] (445,135) -- (487,135);
  \draw[auxiliar] (445,235) -- (487,235);
  \draw[dimension] (472,139) -- (472,231);
  \node[font=\Large,fill=white,inner sep=2pt,anchor=west] at (479,185) {$L_y$};
  \draw[auxiliar] (184,235) -- (184,286);
  \draw[auxiliar] (445,235) -- (445,286);
  \draw[dimension] (188,261) -- (441,261);
  \node[font=\Large,fill=white,inner sep=2pt] at (315,261) {$L$};
  \draw[carga] (184,239) -- (184,302);
  \node[font=\Large,anchor=north,inner sep=0pt] at (184,308) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 9: Caso 8, carga linealmente variable con los cuatro bordes empotrados.</figcaption></figure><div class="pcr-panel-body"><p>Si $\beta=L/L_y<1$:</p>
<div class="pcr-math">$$
\begin{aligned}
(M_x)_{0,\;L_y/2}&=c_1p_1L^2,\\
(M_x)_{L,\;L_y/2}&=c_2p_1L^2,\\
-(M_y)_{\max}&=c_3p_1L^2,\\
(M_y)_{L/2,\;0,L_y}&=c_4p_1L^2,\\
(M_x)_{\max}&=c_5p_1L^2,\\
(M_x)_{L/2,\;L_y/2}&=c_6p_1L^2,\\
(M_y)_{\max}&=c_7p_1L^2,\\
(M_y)_{L/2,\;L_y/2}&=c_8p_1L^2.
\end{aligned}
$$</div>
<p>Si $\beta\geq1$, se sustituye $p_1L^2$ por $p_1L_y^2$. Se considera $\nu=0.15$.</p>
<p>Para $0.5\leq\beta\leq1.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=-0.03596-0.08083\beta+0.1319\beta^2-0.04816\beta^3,\\
c_2&=-0.01030-0.116\beta+0.1791\beta^2-0.07038\beta^3,\\
c_3&=-0.02636-0.004588\beta-0.009978\beta^2+0.01388\beta^3,\\
c_4&=-0.02993+0.01295\beta-0.02866\beta^2+0.02036\beta^3,\\
c_5&=0.0261-0.00459\beta-0.01879\beta^2+0.007399\beta^3,\\
c_6&=0.01218+0.05503\beta-0.09913\beta^2+0.04073\beta^3,\\
c_7&=0.03321-0.1267\beta+0.1792\beta^2-0.07687\beta^3,\\
c_8&=-0.005465+0.003079\beta+0.03526\beta^2-0.02409\beta^3.
\end{aligned}
$$</div>
<p>Para $1.0<\beta\leq2.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
c_1&=0.02841-0.1064\beta+0.0549\beta^2-0.01001\beta^3,\\
c_2&=0.005924-0.05511\beta+0.03986\beta^2-0.00827\beta^3,\\
c_3&=0.03386-0.08143\beta+0.02145\beta^2-0.0008475\beta^3,\\
c_4&=0.04529-0.1128\beta+0.04949\beta^2-0.007329\beta^3,\\
c_5&=-0.00482+0.03546\beta-0.02663\beta^2+0.006204\beta^3,\\
c_6&=-0.00233+0.03325\beta-0.02862\beta^2+0.006528\beta^3,\\
c_7&=-0.01682+0.02965\beta-0.002959\beta^2-0.001043\beta^3,\\
c_8&=-0.03277+0.06381\beta-0.02579\beta^2+0.003542\beta^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel9" aria-labelledby="pcr16-tab9" aria-hidden="true" class="pcr-panel" data-case-panel="8"><div class="pcr-panel-heading">Caso 9. Dos bordes simplemente apoyados y dos con apoyos flexibles; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  % Figura 10, Tabla 18-16: dos lados simplemente apoyados y dos
  % bordes sostenidos por vigas flexibles de rigidez EI. L_y = L.
  \path[use as bounding box] (-12,-13) rectangle (538,467);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.50pt,dash pattern=on 6pt off 4pt},
    resorte/.style={draw=black,line width=2.00pt},
    muro/.style={draw=black,line width=1.85pt}
  }

  % (a) Alzado superior: carga uniforme y apoyos simples en los extremos.
  \draw[contorno] (186,101) -- (395,101);
  \draw[contorno] (186,50) -- (395,50);
  \foreach \xx in {186,255.7,325.3,395}{\draw[carga] (\xx,50) -- (\xx,101);}
  \draw[apoyo,fill=white] (186,101) -- (175,126) -- (197,126) -- cycle;
  \draw[apoyo,fill=white] (395,101) -- (384,126) -- (406,126) -- cycle;
  \node[font=\Large,anchor=south,inner sep=1pt] at (290,44) {$p_1$};

  % (b) Vista lateral izquierda: carga uniforme y dos vigas flexibles EI.
  \draw[contorno] (46,148) rectangle (102,350);
  \foreach \yy in {185,229,273,317}{\draw[carga] (46,\yy) -- (102,\yy);}
  \node[font=\Large,anchor=east,inner sep=1pt] at (35,251) {$p_1$};

  % Apoyos elastos esquematizados con resortes horizontales, arriba y abajo.
  % Las dos rayas de anclaje indican la estructura fija.
  \draw[resorte] (102,148) -- (108,148)
    .. controls (112,148) and (111,124) .. (117,129)
    .. controls (124,136) and (120,163) .. (128,161)
    .. controls (134,160) and (132,128) .. (138,129)
    .. controls (145,131) and (143,148) .. (151,148);
  \draw[resorte] (102,350) -- (108,350)
    .. controls (112,350) and (111,374) .. (117,369)
    .. controls (124,362) and (120,335) .. (128,337)
    .. controls (134,338) and (132,370) .. (138,369)
    .. controls (145,367) and (143,350) .. (151,350);
  \draw[muro] (151,126) -- (151,171);
  \draw[muro] (151,329) -- (151,375);
  \foreach \yy in {135,153,171}{\draw[auxiliar] (151,\yy) -- (165,\yy-15);}
  \foreach \yy in {336,354,372}{\draw[auxiliar] (151,\yy) -- (165,\yy-15);}
  \node[font=\Large,anchor=east,inner sep=1pt] at (82,116) {$EI$};
  \draw[auxiliar] (87,119) -- (111,140);

  % (c) Planta cuadrada de lados L_y=L. Bordes interiores discontinuos.
  % Se conservan tambien las dos lineas punteadas EXTERIORES
  % que distinguen los bordes con vigas de apoyo flexible.
  \draw[contorno] (186,148) rectangle (395,350);
  \draw[interior] (197,160) -- (384,160) -- (384,338) -- (197,338) -- cycle;
  \draw[interior] (197,137) -- (384,137);
  \draw[interior] (197,361) -- (384,361);
  \node[font=\Large,anchor=east,inner sep=2pt] at (178,148) {$0$};

  % Ejes y medidas: L_y = L, L y sentido +y hacia abajo.
  \draw[carga] (396,148) -- (477,148);
  \node[font=\Large,anchor=west,inner sep=1pt] at (484,148) {$x$};
  \draw[auxiliar] (395,148) -- (477,148);
  \draw[auxiliar] (395,350) -- (477,350);
  \draw[dimension] (447,152) -- (447,346);
  \node[font=\Large,fill=white,inner sep=2pt,anchor=west] at (455,249) {$L_y=L$};
  \draw[auxiliar] (186,350) -- (186,410);
  \draw[auxiliar] (395,350) -- (395,410);
  \draw[dimension] (191,389) -- (390,389);
  \node[font=\Large,fill=white,inner sep=2pt] at (291,389) {$L$};
  \draw[carga] (186,366) -- (186,439);
  \node[font=\Large,anchor=north,inner sep=0pt] at (186,443) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 10: Caso 9, apoyos de borde mediante vigas de rigidez $EI$.</figcaption></figure><div class="pcr-panel-body"><p>La tabla corresponde a $L_y=L$, $\nu=0.3$ y $EI$ igual a la rigidez de las vigas de apoyo:</p>
<div class="pcr-math">$$
\begin{aligned}
w_{\max}=w_{\mathrm{centro}}&=c_1\frac{p_1L^4}{D},\\
(M_x)_{\max}&=c_2p_1L^2\quad(\mathrm{centro}),\\
(M_y)_{\max}&=c_3p_1L^2\quad(\mathrm{centro}),\\
\eta&=\frac{EI}{LD}\geq0.
\end{aligned}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
c_1&=0.004037+\frac{0.003975}{1+\eta}-\frac{0.003862}{(1+\eta)^2}+\frac{0.008931}{(1+\eta)^3},\\
c_2&=0.04756+\frac{0.0356}{1+\eta}-\frac{0.05788}{(1+\eta)^2}+\frac{0.1001}{(1+\eta)^3},\\
c_3&=0.04759-\frac{0.00504}{1+\eta}-\frac{0.05026}{(1+\eta)^2}+\frac{0.03471}{(1+\eta)^3}.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel10" aria-labelledby="pcr16-tab10" aria-hidden="true" class="pcr-panel" data-case-panel="9"><div class="pcr-panel-heading">Caso 10. Cuatro bordes empotrados; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  \path[use as bounding box] (0,0) rectangle (520,320);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->}
  }

  % (a) Vista superior/frontal: carga uniforme con empotramientos en ambos extremos.
  \draw[contorno] (180,18) -- (420,18) -- (420,65) -- (180,65) -- cycle;
  \foreach \x in {200,240,280,320,360,400}{\draw[carga] (\x,18) -- (\x,65);} 
  \node[font=\Large,anchor=south] at (300,10) {$p_1$};
  \foreach \y in {20,33,46,59}{\draw[auxiliar] (169,\y) -- (180,\y+11);} 
  \foreach \y in {20,33,46,59}{\draw[auxiliar] (420,\y+11) -- (431,\y);} 

  % Dimension L bajo la franja superior.
  \draw[dimension] (184,84) -- (416,84);
  \node[font=\Large,fill=white,inner sep=2pt] at (300,84) {$L$};

  % (b) Vista lateral izquierda con carga uniforme y empotramientos superior/inferior.
  \draw[contorno] (48,122) rectangle (95,224);
  \foreach \y in {144,173,202}{\draw[carga] (48,\y) -- (90,\y);} 
  \node[font=\Large,anchor=east] at (36,172) {$p_1$};
  \draw[auxiliar] (95,122) -- (126,122);
  \draw[auxiliar] (95,224) -- (126,224);
  \foreach \x in {96,108,120}{\draw[auxiliar] (\x,111) -- (\x+11,122); \draw[auxiliar] (\x,224) -- (\x+11,235);} 

  % (c) Planta con origen y lineas medias L/2 y L_y/2.
  \draw[contorno] (180,118) rectangle (420,247);
  \draw[contorno] (180,183) -- (420,183);
  \draw[contorno] (300,183) -- (300,247);
  \node[font=\Large,anchor=east] at (171,122) {$0$};

  % Eje x desde el punto medio del borde derecho.
  \draw[carga] (420,183) -- (500,183);
  \node[font=\Large,anchor=west] at (506,183) {$x$};

  % Cotas verticales L_y/2 arriba y abajo del eje x.
  \draw[dimension] (468,122) -- (468,181);
  \draw[dimension] (468,185) -- (468,245);
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (476,152) {$L_y/2$};
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (476,214) {$L_y/2$};
  \draw[auxiliar] (420,118) -- (485,118);
  \draw[auxiliar] (420,247) -- (485,247);

  % Cotas horizontales L/2 y L/2 abajo.
  \draw[auxiliar] (180,247) -- (180,292);
  \draw[auxiliar] (300,247) -- (300,292);
  \draw[auxiliar] (420,247) -- (420,292);
  \draw[dimension] (184,278) -- (296,278);
  \draw[dimension] (304,278) -- (416,278);
  \node[font=\Large,fill=white,inner sep=1.5pt] at (240,278) {$L/2$};
  \node[font=\Large,fill=white,inner sep=1.5pt] at (360,278) {$L/2$};

  % Eje y hacia abajo desde el punto medio inferior.
  \draw[carga] (300,247) -- (300,305);
  \node[font=\Large,anchor=north] at (300,308) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 11: Caso 10, placa con cuatro bordes empotrados.</figcaption></figure><div class="pcr-panel-body"><p>Con $\nu=0.3$ y $1.0\leq\alpha\leq2.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
w_{\max}=w_{\mathrm{centro}}&=c_1\frac{p_1L^4}{Eh^3},\\
(M_x)_{x=0,\;y=0}&=c_2p_1L^2,\\
(M_y)_{x=0,\;y=0}&=c_3p_1L^2,\\
(M_x)_{x=L/2,\;y=0}&=-c_4p_1L^2,\\
(M_y)_{x=0,\;y=L_y/2}&=-c_5p_1L^2.
\end{aligned}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
c_1&=-0.06479+0.1327\alpha-0.0665\alpha^2+0.01162\alpha^3,\\
c_2&=-0.07859+0.1748\alpha-0.09038\alpha^2+0.01652\alpha^3,\\
c_3&=0.0009449+0.04083\alpha-0.0212\alpha^2+0.001949\alpha^3,\\
c_4&=-0.03425+0.1083\alpha-0.02085\alpha^2-0.002018\alpha^3,\\
c_5&=0.4247+0.002192\alpha+0.01065\alpha^2-0.003921\alpha^3.
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr16-panel11" aria-labelledby="pcr16-tab11" aria-hidden="true" class="pcr-panel" data-case-panel="10"><div class="pcr-panel-heading">Caso 11. Dos bordes simplemente apoyados y dos libres; carga uniforme</div><figure class="pcr-figure"><script type="text/tikz">
\begin{tikzpicture}[x=0.019cm,y=-0.019cm,>=latex,line cap=round,line join=round]
  \path[use as bounding box] (0,0) rectangle (520,320);
  \tikzset{
    contorno/.style={draw=black,line width=2.15pt},
    apoyo/.style={draw=black,line width=1.95pt},
    carga/.style={draw=black,line width=1.95pt,->},
    auxiliar/.style={draw=black,line width=1.45pt},
    dimension/.style={draw=black,line width=1.55pt,<->},
    interior/.style={draw=black,line width=1.5pt,dash pattern=on 6pt off 4pt}
  }

  % (a) Vista superior: carga uniforme con apoyos simples en ambos extremos.
  \draw[contorno] (172,24) -- (430,24);
  \draw[auxiliar] (172,24) -- (430,24) -- (430,5) -- (172,5) -- cycle;
  \foreach \x in {190,232,274,316,358,400}{\draw[carga] (\x,5) -- (\x,24);} 
  \node[font=\Large,anchor=south] at (300,0) {$p_1$};
  \draw[apoyo,fill=white] (172,24) -- (161,48) -- (183,48) -- cycle;
  \draw[apoyo,fill=white] (430,24) -- (419,48) -- (441,48) -- cycle;

  % (b) Vista lateral izquierda: carga uniforme, sin apoyos laterales.
  \draw[contorno] (48,128) rectangle (95,221);
  \foreach \y in {147,174,201}{\draw[carga] (48,\y) -- (90,\y);} 
  \node[font=\Large,anchor=east] at (36,174) {$p_1$};

  % (c) Planta: solo dos bordes laterales interiores punteados.
  \draw[contorno] (172,118) rectangle (430,222);
  \draw[interior] (183,128) -- (183,212);
  \draw[interior] (418,128) -- (418,212);
  \node[font=\Large,anchor=east] at (164,124) {$0$};
  \draw[carga] (430,118) -- (501,118);
  \node[font=\Large,anchor=west] at (506,119) {$x$};
  \draw[auxiliar] (430,118) -- (480,118);
  \draw[auxiliar] (430,222) -- (480,222);
  \draw[dimension] (466,122) -- (466,218);
  \node[font=\Large,fill=white,inner sep=1.5pt,anchor=west] at (474,170) {$L_y$};
  \draw[auxiliar] (172,222) -- (172,275);
  \draw[auxiliar] (430,222) -- (430,275);
  \draw[dimension] (176,252) -- (426,252);
  \node[font=\Large,fill=white,inner sep=1.5pt] at (301,252) {$L$};
  \draw[carga] (172,222) -- (172,286);
  \node[font=\Large,anchor=north] at (172,291) {$y$};
\end{tikzpicture}
</script><figcaption>Figura 12: Caso 11, dos bordes simplemente apoyados y dos libres.</figcaption></figure><div class="pcr-panel-body"><p>Con $\nu=0.3$ y $0\leq\beta\leq2.0$:</p>
<div class="pcr-math">$$
\begin{aligned}
w_{L/2,\;L_y/2}&=c_1\frac{p_1L^4}{D},\\
w_{L/2,\;0,L_y}&=c_2\frac{p_1L^4}{D},\\
(M_x)_{L/2,\;L_y/2}&=c_3p_1L^2,\\
(M_y)_{L/2,\;L_y/2}&=c_4p_1L^2,\\
(M_x)_{L/2,\;0,L_y}&=c_5p_1L^2.
\end{aligned}
$$</div>
<div class="pcr-math">$$
\begin{aligned}
c_1&=0.01302-0.0007094\beta+0.001017\beta^2-0.0002372\beta^3,\\
c_2&=0.01522+0.0000742\beta-0.0001711\beta^2-0.000033\beta^3,\\
c_3&=0.125-0.003249\beta+0.0002489\beta^2+0.0005003\beta^3,\\
c_4&=0.0375+0.01038\beta-0.02955\beta^2+0.008767\beta^3,\\
c_5&=0.133+0.0006847\beta-0.001652\beta^2-0.0002326\beta^3.
\end{aligned}
$$</div>
<hr />
</div></section>
</div>
<div class="pcr-controls"><button type="button" class="pcr-arrow" data-placas-step="-1" disabled aria-label="Ir al caso anterior"><span aria-hidden="true">←</span> Anterior</button><span class="pcr-position" aria-live="polite" aria-atomic="true">1 de 11</span><button type="button" class="pcr-arrow" data-placas-step="1" aria-label="Ir al caso siguiente">Siguiente <span aria-hidden="true">→</span></button></div></div>

## 2. Tabla 18-17. Respuesta de placas rectangulares con cuatro lados simplemente apoyados

Esta tabla establece primero las ecuaciones de respuesta general de una placa rectangular simplemente apoyada en sus cuatro bordes y, después, los parámetros $a_{mn}$ para 13 distribuciones de carga (páginas 1085 a 1087 de la fuente). Se mantiene la nomenclatura empleada en la tabla.

### 2.1. Notación y rigidez de la placa

- $w$: deflexión.
- $\theta,\theta_y$: giros respecto de líneas paralelas a las direcciones $y$ y $x$.
- $M_x,M_y,M_{xy}$: momentos flectores y momento torsor por unidad de longitud.
- $V_x,V_y$: fuerzas cortantes equivalentes por unidad de longitud.
- $L,L_y$: dimensiones de la placa.
- $h$: espesor; $E$: módulo de elasticidad; $\nu$: coeficiente de Poisson.
- $a_{mn}$: parámetro correspondiente al tipo de carga aplicado.

$$
D=\frac{Eh^3}{12(1-\nu^2)},\qquad
K_{mn}=\frac{a_{mn}}{D\pi^4\left[(n^2/L^2)+(m^2/L_y^2)\right]^2},
\qquad n,m=1,2,3,\ldots
$$

### 2.2. Expresiones generales de respuesta

**Deflexión**

$$
w=\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\sin\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y}.
$$

**Giros**

$$
\begin{aligned}
\theta&=-\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\frac{n\pi}{L}\cos\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y},\\
\theta_y&=\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\frac{m\pi}{L_y}\sin\frac{n\pi x}{L}\cos\frac{m\pi y}{L_y}.
\end{aligned}
$$

**Momentos flectores**

$$
\begin{aligned}
M_x&=\pi^2D\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\left[\left(\frac{n}{L}\right)^2+\nu\left(\frac{m}{L_y}\right)^2\right]
\sin\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y},\\
M_y&=\pi^2D\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\left[\left(\frac{m}{L_y}\right)^2+\nu\left(\frac{n}{L}\right)^2\right]
\sin\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y}.
\end{aligned}
$$

**Momento torsor**

$$
M_{xy}=\pi^2D(1-\nu)\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}
K_{mn}\frac{mn}{LL_y}
\cos\frac{n\pi x}{L}\cos\frac{m\pi y}{L_y}.
$$

**Fuerzas cortantes equivalentes**

$$
\begin{aligned}
V_x={}&\pi^3D\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}K_{mn}
\left[\left(\frac{n}{L}\right)^3+(2-\nu)\frac{n}{L}\left(\frac{m}{L_y}\right)^2\right]
\cos\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y},\\
V_y={}&\pi^3D\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}K_{mn}
\left[\left(\frac{m}{L_y}\right)^3+(2-\nu)\frac{m}{L_y}\left(\frac{n}{L}\right)^2\right]
\sin\frac{n\pi x}{L}\cos\frac{m\pi y}{L_y}.
\end{aligned}
$$

### 2.3. Distribuciones de carga

<div class="pcr-widget" data-placas-carousel aria-label="Tabla 18-17">
<div class="pcr-widget-top"><span class="pcr-kicker">TABLA 18-17</span><span class="pcr-widget-help">Selecciona un caso o utiliza las flechas</span></div>
<div class="pcr-tabs" role="tablist" aria-label="Casos de la Tabla 18-17">
<button type="button" role="tab" id="pcr17-tab1" aria-controls="pcr17-panel1" aria-selected="true" tabindex="0" class="pcr-tab is-active" data-case="0" title="Carga 1. Carga uniforme en toda la placa">Carga 1</button>
<button type="button" role="tab" id="pcr17-tab2" aria-controls="pcr17-panel2" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="1" title="Carga 2. Carga linealmente variable">Carga 2</button>
<button type="button" role="tab" id="pcr17-tab3" aria-controls="pcr17-panel3" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="2" title="Carga 3. Carga uniforme sobre una región rectangular">Carga 3</button>
<button type="button" role="tab" id="pcr17-tab4" aria-controls="pcr17-panel4" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="3" title="Carga 4. Carga variable sobre una región rectangular">Carga 4</button>
<button type="button" role="tab" id="pcr17-tab5" aria-controls="pcr17-panel5" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="4" title="Carga 5. Fuerza lineal por unidad de longitud">Carga 5</button>
<button type="button" role="tab" id="pcr17-tab6" aria-controls="pcr17-panel6" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="5" title="Carga 6. Fuerza lineal sobre un segmento rectangular">Carga 6</button>
<button type="button" role="tab" id="pcr17-tab7" aria-controls="pcr17-panel7" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="6" title="Carga 7. Fuerza lineal sobre una trayectoria inclinada">Carga 7</button>
<button type="button" role="tab" id="pcr17-tab8" aria-controls="pcr17-panel8" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="7" title="Carga 8. Fuerza concentrada en un punto">Carga 8</button>
<button type="button" role="tab" id="pcr17-tab9" aria-controls="pcr17-panel9" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="8" title="Carga 9. Cuatro fuerzas concentradas">Carga 9</button>
<button type="button" role="tab" id="pcr17-tab10" aria-controls="pcr17-panel10" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="9" title="Carga 10. Momento lineal distribuido">Carga 10</button>
<button type="button" role="tab" id="pcr17-tab11" aria-controls="pcr17-panel11" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="10" title="Carga 11. Momento concentrado">Carga 11</button>
<button type="button" role="tab" id="pcr17-tab12" aria-controls="pcr17-panel12" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="11" title="Carga 12. Momento concentrado en una dirección inclinada">Carga 12</button>
<button type="button" role="tab" id="pcr17-tab13" aria-controls="pcr17-panel13" aria-selected="false" tabindex="-1" class="pcr-tab" data-case="12" title="Carga 13. Distribución arbitraria de carga transversal">Carga 13</button>
</div>
<div class="pcr-viewport">
<section role="tabpanel" id="pcr17-panel1" aria-labelledby="pcr17-tab1" aria-hidden="false" class="pcr-panel is-active" data-case-panel="0"><div class="pcr-panel-heading">Carga 1. Carga uniforme en toda la placa</div><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{16p_1}{\pi^2mn},\qquad m,n=1,3,5,\ldots
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel2" aria-labelledby="pcr17-tab2" aria-hidden="true" class="pcr-panel" data-case-panel="1"><div class="pcr-panel-heading">Carga 2. Carga linealmente variable</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_02.png" alt="Esquema original de la Tabla 18-17, carga 2" loading="lazy"><figcaption>Figura 13: Carga 2, distribución linealmente variable.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=(-1)^n\frac{8L}{mn\pi}\frac{\Delta p}{\Delta\ell},
\qquad m=1,3,5,\ldots,\quad n=1,2,3,\ldots
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel3" aria-labelledby="pcr17-tab3" aria-hidden="true" class="pcr-panel" data-case-panel="2"><div class="pcr-panel-heading">Carga 3. Carga uniforme sobre una región rectangular</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_03.png" alt="Esquema original de la Tabla 18-17, carga 3" loading="lazy"><figcaption>Figura 14: Carga 3, región cargada delimitada por $a_1,a_2,b_1,b_2$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{4p_1}{mn\pi^2}
\left(\cos\frac{n\pi a_1}{L}-\cos\frac{n\pi a_2}{L}\right)
\left(\cos\frac{m\pi b_1}{L_y}-\cos\frac{m\pi b_2}{L_y}\right).
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel4" aria-labelledby="pcr17-tab4" aria-hidden="true" class="pcr-panel" data-case-panel="3"><div class="pcr-panel-heading">Carga 4. Carga variable sobre una región rectangular</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_04.png" alt="Esquema original de la Tabla 18-17, carga 4" loading="lazy"><figcaption>Figura 15: Carga 4, distribución variable en la región indicada.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
\begin{aligned}
a_{mn}={}&\frac{4}{nm\pi^2}\frac{\Delta p}{\Delta\ell}
\left(\cos\frac{m\pi b_1}{L_y}-\cos\frac{m\pi b_2}{L_y}\right)\\
&\times\left[(a_1-a_2)\cos\frac{n\pi a_2}{L}
+\frac{L}{n\pi}\left(\sin\frac{n\pi a_2}{L}-\sin\frac{n\pi a_1}{L}\right)\right].
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel5" aria-labelledby="pcr17-tab5" aria-hidden="true" class="pcr-panel" data-case-panel="4"><div class="pcr-panel-heading">Carga 5. Fuerza lineal por unidad de longitud</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_05.png" alt="Fuerza lineal W en una placa rectangular" loading="lazy"><figcaption>Figura 16: Carga 5, fuerza lineal $W$ localizada en $x=a$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{8W}{\pi Lm}\sin\frac{n\pi a}{L},
\qquad m=1,3,5,\ldots,\quad n=1,2,3,\ldots
$$</div>
<p>Si la fuerza lineal se extiende entre $y=b_1$ y $y=b_2$, se emplea:</p>
<div class="pcr-math">$$
a_{mn}=\frac{4W}{m\pi L}\sin\frac{n\pi a}{L}
\left(\cos\frac{m\pi b_1}{L_y}-\cos\frac{m\pi b_2}{L_y}\right).
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel6" aria-labelledby="pcr17-tab6" aria-hidden="true" class="pcr-panel" data-case-panel="5"><div class="pcr-panel-heading">Carga 6. Fuerza lineal sobre un segmento rectangular</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_06.png" alt="Fuerza lineal aplicada en región rectangular" loading="lazy"><figcaption>Figura 17: Carga 6, carga lineal distribuida según los límites $a_1,a_2,b_1,b_2$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
\begin{aligned}
a_{mn}={}&\frac{4W}{LL_y}\Bigg[
\frac{L_y}{m\pi}\left(\sin\frac{n\pi a_1}{L}+\sin\frac{n\pi a_2}{L}\right)
\left(\cos\frac{m\pi b_1}{L_y}-\cos\frac{m\pi b_2}{L_y}\right)\\
&+\frac{L}{n\pi}\left(\cos\frac{n\pi a_1}{L}-\cos\frac{n\pi a_2}{L}\right)
\left(\sin\frac{m\pi b_1}{L_y}+\sin\frac{m\pi b_2}{L_y}\right)
\Bigg].
\end{aligned}
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel7" aria-labelledby="pcr17-tab7" aria-hidden="true" class="pcr-panel" data-case-panel="6"><div class="pcr-panel-heading">Carga 7. Fuerza lineal sobre una trayectoria inclinada</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_07.png" alt="Fuerza lineal inclinada descrita por x=c1+c2y" loading="lazy"><figcaption>Figura 18: Carga 7, fuerza lineal sobre $x=c_1+c_2y$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
\begin{aligned}
a_{mn}={}&\frac{2W}{LL_yc_3}
\Bigg\{\left[\sin\left(c_3b_2-\frac{n\pi c_1}{L}\right)-\sin\left(c_3b_1-\frac{n\pi c_1}{L}\right)\right]\\
&-\left[\sin\left(c_4b_2+\frac{n\pi c_1}{L}\right)-\sin\left(c_4b_1+\frac{n\pi c_1}{L}\right)\right]\Bigg\},
\end{aligned}
$$</div>
<div class="pcr-math">$$
c_3=\frac{m\pi L-n\pi c_2L_y}{LL_y},\qquad
c_4=\frac{m\pi L+n\pi c_2L_y}{LL_y}.
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel8" aria-labelledby="pcr17-tab8" aria-hidden="true" class="pcr-panel" data-case-panel="7"><div class="pcr-panel-heading">Carga 8. Fuerza concentrada en un punto</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_08.png" alt="Fuerza concentrada WT aplicada en el punto a b" loading="lazy"><figcaption>Figura 19: Carga 8, fuerza puntual $W_T$ en $(a,b)$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{4W_T}{LL_y}\sin\frac{n\pi a}{L}\sin\frac{m\pi b}{L_y}.
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel9" aria-labelledby="pcr17-tab9" aria-hidden="true" class="pcr-panel" data-case-panel="8"><div class="pcr-panel-heading">Carga 9. Cuatro fuerzas concentradas</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_09.png" alt="Cuatro fuerzas concentradas en posiciones simétricas" loading="lazy"><figcaption>Figura 20: Carga 9, fuerzas puntuales $W_T$ ubicadas simétricamente.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{4W_T}{LL_y}
\left(\sin\frac{n\pi a_1}{L}+\sin\frac{n\pi a_2}{L}\right)
\left(\sin\frac{m\pi b_1}{L_y}+\sin\frac{m\pi b_2}{L_y}\right).
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel10" aria-labelledby="pcr17-tab10" aria-hidden="true" class="pcr-panel" data-case-panel="9"><div class="pcr-panel-heading">Carga 10. Momento lineal distribuido</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_10.png" alt="Momento lineal C sobre un segmento" loading="lazy"><figcaption>Figura 21: Carga 10, momento lineal $C$ por unidad de longitud.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=-\frac{4nC}{mL^2}\cos\frac{n\pi a}{L}
\left(\cos\frac{m\pi b_1}{L_y}-\cos\frac{m\pi b_2}{L_y}\right).
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel11" aria-labelledby="pcr17-tab11" aria-hidden="true" class="pcr-panel" data-case-panel="10"><div class="pcr-panel-heading">Carga 11. Momento concentrado</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_11.png" alt="Momento concentrado CT aplicado en un punto" loading="lazy"><figcaption>Figura 22: Carga 11, momento concentrado $C_T$ en $(a,b)$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=-\frac{4nC_T}{L^2L_y}\cos\frac{n\pi a}{L}\sin\frac{m\pi b}{L_y}.
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel12" aria-labelledby="pcr17-tab12" aria-hidden="true" class="pcr-panel" data-case-panel="11"><div class="pcr-panel-heading">Carga 12. Momento concentrado en una dirección inclinada</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_12.png" alt="Momento concentrado CT con orientación inclinada" loading="lazy"><figcaption>Figura 23: Carga 12, momento $C_T$ orientado según la dirección indicada en el esquema.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{4\pi C_T}{LL_y}
\frac{\displaystyle \frac{c_2m}{L_y}\cos\frac{m\pi b}{L_y}\sin\frac{n\pi a}{L}
+\frac{n}{L}\sin\frac{m\pi b}{L_y}\cos\frac{n\pi a}{L}}
{(1+c_2^2)^{1/2}}.
$$</div>
</div></section>
<section role="tabpanel" id="pcr17-panel13" aria-labelledby="pcr17-tab13" aria-hidden="true" class="pcr-panel" data-case-panel="12"><div class="pcr-panel-heading">Carga 13. Distribución arbitraria de carga transversal</div><figure class="pcr-figure"><img src="tabla_rect_18_17_caso_13.png" alt="Carga transversal distribuida arbitraria pz(x,y)" loading="lazy"><figcaption>Figura 24: Carga 13, distribución transversal general $p_z(x,y)$.</figcaption></figure><div class="pcr-panel-body"><div class="pcr-math">$$
a_{mn}=\frac{4}{LL_y}\int_0^L\int_0^{L_y}
p_z(x,y)\sin\frac{n\pi x}{L}\sin\frac{m\pi y}{L_y}\,dx\,dy.
$$</div>
</div></section>
</div>
<div class="pcr-controls"><button type="button" class="pcr-arrow" data-placas-step="-1" disabled aria-label="Ir al caso anterior"><span aria-hidden="true">←</span> Anterior</button><span class="pcr-position" aria-live="polite" aria-atomic="true">1 de 13</span><button type="button" class="pcr-arrow" data-placas-step="1" aria-label="Ir al caso siguiente">Siguiente <span aria-hidden="true">→</span></button></div></div>

**Fuente de las tablas:** *Table 18-16, Deflections and Internal Forces of Rectangular Plates*, páginas 1073–1084, y *Table 18-17, Response of Rectangular Plates with Four Sides Simply Supported*, páginas 1085–1087, según el documento proporcionado. Las expresiones y los esquemas corresponden a esa fuente.

