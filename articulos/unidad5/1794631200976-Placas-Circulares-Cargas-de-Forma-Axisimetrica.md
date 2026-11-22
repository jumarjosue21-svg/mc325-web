## 1. Placas Circulares con Carga Axisimétrica

![Figura 1: Placa circular con carga axisimétrica modelada calculada usando el método del elemento finito.](placas_circulares_figura_01_png.png)

Figura 1: Placa circular con carga axisimétrica modelada calculada usando el método del elemento finito.

Una carga es **axisimétrica** cuando su distribución no cambia al girar alrededor del centro de la placa. Por ejemplo, una presión uniforme aplicada a toda la superficie es axisimétrica. Bajo esta condición, y siempre que la placa y sus apoyos también presenten simetría de revolución, basta con conocer la distancia al centro para describir la deformación. En lugar de estudiar la deflexión en función de dos coordenadas, se estudia cómo varía al avanzar desde el centro hacia el borde.

La imagen muestra el resultado de un modelo de elementos finitos. Las flechas representan la acción transversal sobre la superficie y la geometría deformada permite observar que la placa se curva bajo la carga. El análisis que sigue busca describir ese mismo comportamiento mediante ecuaciones de equilibrio, curvatura y flexión.

### 1.1. Curvaturas en una placa circular

$$ \frac{1}{r_n} = -\frac{d^2 w}{dr^2} = \frac{d\varphi}{dr} $$

$$ \frac{1}{r_t} = -\frac{1}{r}\frac{dw}{dr} = \frac{\varphi}{r} $$

<script type="text/tikz">
\begin{tikzpicture}[x=0.0195cm,y=-0.0195cm,>=latex,line cap=round,line join=round]
  % Figura 2. Perfil radial de una placa circular deformada.
  % Geometria trazada directamente sobre las coordenadas de la imagen original (506 x 525).
  \path[use as bounding box] (0,0) rectangle (506,525);
  \tikzset{
    eje/.style={draw=black,line width=0.86pt},
    perfil/.style={draw=black,line width=1.40pt},
    guia/.style={draw=black,line width=0.88pt},
    cota/.style={draw=black,line width=0.72pt,dash pattern=on 3pt off 2pt},
    marca/.style={draw=black,line width=0.83pt}
  }

  % Eje horizontal de la placa sin deformar; eje vertical por O-B-z.
  \draw[eje] (27,357) -- (476,357);
  \draw[eje] (273,25) -- (273,511);

  % Placa deformada: perfil concavo, con flecha maxima junto al eje de simetria.
  \draw[perfil] (70,357)
    .. controls (113,388) and (160,416) .. (196,421)
    .. controls (226,426) and (255,430) .. (275,430)
    .. controls (355,430) and (424,391) .. (474,357);

  % Apoyos esquematicos en los bordes de la seccion radial.
  \draw[marca] (51,382) -- (70,357) -- (86,381);
  \draw[marca] (460,380) -- (474,357) -- (491,381);

  % Dos rectas auxiliares convergentes en B, trazadas hasta el perfil deformado.
  \draw[guia] (136,403) -- (273,68);
  \draw[guia] (196,421) -- (273,27);

  % Proyecciones verticales de los puntos que delimitan dr y r.
  \draw[guia] (136,404) -- (136,490);
  \draw[guia] (196,422) -- (196,489);

  % Cotas radiales inferiores (con flechas opuestas en sus extremos).
  \draw[cota,<->] (136,485) -- (195,485);
  \draw[cota,<->] (198,485) -- (271,485);

  % Flecha transversal de la placa entre eje sin deformar y perfil deformado.
  \draw[cota,<->] (242,365) -- (242,421);

  % Indicaciones graficas del giro phi entre el eje y las rectas auxiliares.
  \draw[guia,->] (204,274) -- (228,281);
  \draw[guia,->] (297,283) -- (274,291);

  % Letras de la imagen: ubicacion y nomenclatura original.
  \node[font=\Large,anchor=west,inner sep=0pt] at (283,23) {$B$};
  \node[font=\Large,anchor=west,inner sep=0pt] at (282,340) {$O$};
  \node[font=\large,anchor=east,inner sep=0pt] at (263,289) {$\varphi$};
  \node[font=\Large,anchor=west,inner sep=0pt] at (279,385) {$w$};
  \node[font=\Large,anchor=east,inner sep=0pt] at (189,451) {$A$};
  \node[font=\Large,anchor=west,inner sep=0pt] at (3,363) {$r$};
  \node[font=\Large,anchor=north,inner sep=0pt] at (165,494) {$dr$};
  \node[font=\Large,anchor=north,inner sep=0pt] at (235,494) {$r$};
  \node[font=\Large,anchor=north,inner sep=0pt] at (282,497) {$z$};
\end{tikzpicture}
</script>

Figura 2: Esquema de la deflexión y del giro de una sección radial de la placa circular.

En estas relaciones, $w$ representa la deflexión transversal, $r$ es la distancia medida desde el centro de la placa y $\varphi$ es el giro de una sección radial. Los símbolos $r_n$ y $r_t$ representan los radios de curvatura en las direcciones radial y tangencial, respectivamente; no deben confundirse con la coordenada radial $r$.

La primera relación mide cómo cambia la pendiente de la superficie cuando nos desplazamos radialmente. Si dos puntos cercanos tienen pendientes distintas, la superficie presenta curvatura en esa dirección. Por eso aparece la segunda derivada de la deflexión. La segunda relación describe la curvatura en la dirección circunferencial: a una misma distancia del centro, el giro de la superficie también influye en cómo se curva la placa alrededor de la circunferencia.

El signo negativo que aparece delante de las derivadas de $w$ responde a la convención de giro adoptada. En particular, el giro se relaciona con el cambio de deflexión mediante $\varphi = -dw/dr$. Así se pueden expresar las curvaturas directamente en función del giro, tal como indican las igualdades anteriores.

---

### 1.2. Relación entre los momentos radiales y circunferenciales

$$ M_r = -D\left(\frac{d^2 w}{dr^2} + \frac{\nu}{r}\frac{dw}{dr}\right) = D\left(\frac{d\varphi}{dr} + \frac{\nu}{r}\varphi\right) $$

$$ M_t = -D\left(\frac{1}{r}\frac{dw}{dr} + \nu\frac{d^2 w}{dr^2}\right) = D\left(\frac{\varphi}{r} + \nu\frac{d\varphi}{dr}\right) $$

Los momentos $M_r$ y $M_t$ se denominan, respectivamente, **momento radial** y **momento tangencial o circunferencial**. El primero describe la flexión asociada a una sección orientada radialmente; el segundo, la flexión vinculada con la dirección que rodea el centro de la placa. Ambos son momentos por unidad de longitud.

La letra $D$ representa la rigidez flexional de la placa y $\nu$ es el coeficiente de Poisson del material. En cada ecuación aparecen dos términos de curvatura porque la deformación en una dirección también influye en el momento de la otra. Esa relación entre direcciones se incorpora mediante $\nu$.

Obsérvese que las fórmulas ofrecen dos formas de trabajar: mediante derivadas de la deflexión $w$ o mediante el giro $\varphi$. Más adelante se utilizarán ambas expresiones para llegar a la ecuación de equilibrio.

<script type="text/tikz">
\begin{tikzpicture}[x=0.014cm,y=-0.014cm,line cap=rect,line join=miter]
  \path[use as bounding box] (0,0) rectangle (972,340);
  \definecolor{azulMom}{RGB}{13,15,242}
  \definecolor{rojoQ}{RGB}{239,0,0}
  \definecolor{azulRay}{RGB}{105,179,233}
  \definecolor{grisEje}{RGB}{85,85,85}

  % Seccion radial de la placa; el elemento diferencial ocupa 450 <= x <= 618.
  \draw[black,line width=0.7pt] (308,159) -- (928,159) -- (928,227) -- (308,227) -- cycle;
  \begin{scope}
    \clip (450,159) rectangle (618,227);
    \foreach \k in {380,389,...,650}{
      \draw[azulRay,line width=0.36pt] (\k,230) -- ({\k+72},158);
    }
  \end{scope}
  \draw[black,line width=1.15pt] (450,159) -- (450,227);
  \draw[black,line width=1.15pt] (618,159) -- (618,227);
  % Eje radial de referencia, mostrado discontinuo como en la figura original.
  \draw[grisEje,line width=0.65pt,dash pattern=on 8pt off 7pt] (158,193) -- (930,193);

  % Par de momentos radiales, flechas curvas en azul con extremos abiertos.
  \draw[azulMom,line width=2.1pt] (444,222)
    .. controls (405,224) and (394,205) .. (395,184)
    .. controls (396,164) and (415,150) .. (442,150);
  \draw[azulMom,line width=2.0pt] (420,141) -- (443,150) -- (422,155);
  \draw[azulMom,line width=2.1pt] (626,222)
    .. controls (664,224) and (672,205) .. (672,184)
    .. controls (671,165) and (657,152) .. (626,150);
  \draw[azulMom,line width=2.0pt] (648,141) -- (625,150) -- (648,156);

  % Fuerzas cortantes: al inicio del elemento y al final del elemento.
  \draw[rojoQ,line width=2.25pt] (450,226) -- (450,60);
  \draw[rojoQ,line width=1.8pt] (450,60) -- (440,108) -- (450,99) -- (460,108) -- cycle;
  \draw[rojoQ,line width=2.25pt] (618,160) -- (618,324);
  \draw[rojoQ,line width=1.8pt] (607,278) -- (618,325) -- (629,278);

  % Cotas radiales. Las proyecciones y las puntas son rectilineas.
  \draw[black,line width=0.75pt] (450,230) -- (450,280);
  \draw[black,line width=0.75pt] (618,230) -- (618,282);
  \draw[black,line width=0.75pt] (928,230) -- (928,282);
  \draw[black,line width=0.8pt] (450,267) -- (618,267);
  \fill[black] (450,267) -- (469,262) -- (469,272) -- cycle;
  \fill[black] (618,267) -- (599,262) -- (599,272) -- cycle;
  \draw[black,line width=0.8pt] (618,267) -- (928,267);
  \fill[black] (618,267) -- (637,262) -- (637,272) -- cycle;
  \fill[black] (928,267) -- (909,262) -- (909,272) -- cycle;

  % Rotulos originales: M_r, Q y longitudes r, dr.
  \node[text=azulMom,anchor=west,inner sep=0pt,font=\fontsize{22}{25}\selectfont] at (16,119)
    {$M_r+(\partial M_r/\partial r)\,dr$};
  \node[text=azulMom,anchor=west,inner sep=0pt,font=\fontsize{21}{24}\selectfont] at (655,128) {$M_r$};
  \node[text=rojoQ,anchor=north,inner sep=0pt,font=\fontsize{23}{26}\selectfont] at (469,0)
    {$Q+(\partial Q/\partial r)\,dr$};
  \node[text=rojoQ,anchor=west,inner sep=0pt,font=\fontsize{24}{26}\selectfont] at (630,310) {$Q$};
  \node[text=rojoQ,anchor=west,inner sep=0pt,font=\fontsize{24}{26}\selectfont] at (128,213) {$r$};
  \node[text=black,anchor=base,inner sep=0pt,font=\fontsize{19}{22}\selectfont] at (503,258) {$dr$};
  \node[text=black,anchor=base,inner sep=0pt,font=\fontsize{19}{22}\selectfont] at (759,258) {$r$};
\end{tikzpicture}
</script>

Figura 3: Equilibrio entre momentos radiales y fuerza cortante en un elemento diferencial de la placa circular.

<script type="text/tikz">
\begin{tikzpicture}[x=0.015cm,y=-0.015cm,line join=round,line cap=round]
  % Figura 4. Sector anular diferencial; coordenadas tomadas del esquema.
  \path[use as bounding box] (0,0) rectangle (852,335);
  \definecolor{hatchBlue}{RGB}{86,163,237}
  \definecolor{markRed}{RGB}{230,0,0}
  \definecolor{edgeBlack}{RGB}{18,18,18}
  \definecolor{axisGray}{RGB}{85,85,85}

  % Fondo blanco y contorno del sector completo.
  \fill[white] (0,0) rectangle (852,335);
  \draw[edgeBlack,line width=0.68pt]
    (228,21) -- (828,175) -- (228,328);
  \draw[edgeBlack,line width=0.75pt]
    (228,21) .. controls (201,110) and (202,239) .. (228,328);

  % Rayado azul recortado matematicamente al sector abcd.
  % Cada raya se dibuja como segmento y NO usa \clip:
  % el renderizador TikZ de la web no respeta ese recorte.
  \draw[hatchBlue,line width=0.48pt] (364.95,58.05) -- (366.55,56.45);
  \draw[hatchBlue,line width=0.48pt] (360.70,71.30) -- (373.67,58.33);
  \draw[hatchBlue,line width=0.48pt] (357.52,83.48) -- (380.78,60.22);
  \draw[hatchBlue,line width=0.48pt] (355.06,94.94) -- (387.89,62.11);
  \draw[hatchBlue,line width=0.48pt] (353.11,105.89) -- (395.00,64.00);
  \draw[hatchBlue,line width=0.48pt] (351.58,116.42) -- (402.11,65.89);
  \draw[hatchBlue,line width=0.48pt] (350.37,126.63) -- (409.23,67.77);
  \draw[hatchBlue,line width=0.48pt] (349.45,136.55) -- (416.34,69.66);
  \draw[hatchBlue,line width=0.48pt] (348.77,146.23) -- (423.45,71.55);
  \draw[hatchBlue,line width=0.48pt] (348.32,155.68) -- (430.56,73.44);
  \draw[hatchBlue,line width=0.48pt] (348.07,164.93) -- (437.68,75.32);
  \draw[hatchBlue,line width=0.48pt] (348.00,174.00) -- (444.79,77.21);
  \draw[hatchBlue,line width=0.48pt] (348.11,182.89) -- (451.90,79.10);
  \draw[hatchBlue,line width=0.48pt] (348.38,191.62) -- (459.01,80.99);
  \draw[hatchBlue,line width=0.48pt] (348.81,200.19) -- (466.12,82.88);
  \draw[hatchBlue,line width=0.48pt] (349.39,208.61) -- (473.24,84.76);
  \draw[hatchBlue,line width=0.48pt] (350.12,216.88) -- (480.35,86.65);
  \draw[hatchBlue,line width=0.48pt] (350.99,225.01) -- (487.46,88.54);
  \draw[hatchBlue,line width=0.48pt] (352.01,232.99) -- (494.57,90.43);
  \draw[hatchBlue,line width=0.48pt] (353.17,240.83) -- (501.68,92.32);
  \draw[hatchBlue,line width=0.48pt] (354.47,248.53) -- (508.80,94.20);
  \draw[hatchBlue,line width=0.48pt] (355.92,256.08) -- (515.91,96.09);
  \draw[hatchBlue,line width=0.48pt] (357.53,263.47) -- (523.02,97.98);
  \draw[hatchBlue,line width=0.48pt] (359.28,270.72) -- (523.86,106.14);
  \draw[hatchBlue,line width=0.48pt] (361.19,277.81) -- (521.45,117.55);
  \draw[hatchBlue,line width=0.48pt] (363.27,284.73) -- (519.67,128.33);
  \draw[hatchBlue,line width=0.48pt] (365.52,291.48) -- (518.34,138.66);
  \draw[hatchBlue,line width=0.48pt] (376.89,289.11) -- (517.39,148.61);
  \draw[hatchBlue,line width=0.48pt] (388.74,286.26) -- (516.75,158.25);
  \draw[hatchBlue,line width=0.48pt] (400.60,283.40) -- (516.38,167.62);
  \draw[hatchBlue,line width=0.48pt] (412.45,280.55) -- (516.25,176.75);
  \draw[hatchBlue,line width=0.48pt] (424.31,277.69) -- (516.35,185.65);
  \draw[hatchBlue,line width=0.48pt] (436.16,274.84) -- (516.67,194.33);
  \draw[hatchBlue,line width=0.48pt] (448.01,271.99) -- (517.19,202.81);
  \draw[hatchBlue,line width=0.48pt] (459.87,269.13) -- (517.91,211.09);
  \draw[hatchBlue,line width=0.48pt] (471.72,266.28) -- (518.83,219.17);
  \draw[hatchBlue,line width=0.48pt] (483.57,263.43) -- (519.96,227.04);
  \draw[hatchBlue,line width=0.48pt] (495.43,260.57) -- (521.30,234.70);
  \draw[hatchBlue,line width=0.48pt] (507.28,257.72) -- (522.85,242.15);
  \draw[hatchBlue,line width=0.48pt] (519.14,254.86) -- (524.64,249.36);

  % Límites gruesos a,b,c,d (dibujados sobre el rayado).
  \draw[edgeBlack,line width=2.15pt]
    (365,55) .. controls (341,119) and (341,226) .. (365,293);
  \draw[edgeBlack,line width=2.15pt]
    (365,55) -- (527,98);
  \draw[edgeBlack,line width=2.15pt]
    (365,293) -- (527,254);
  \draw[edgeBlack,line width=2.10pt]
    (527,98) .. controls (514,144) and (514,211) .. (527,254);

  % Eje radial punteado; pasa por el centro del elemento.
  \draw[axisGray,line width=0.82pt,dash pattern=on 44pt off 11pt on 2pt off 10pt]
    (27,175) -- (828,175);

  % Apertura angular \Theta, con las flechas hacia los bordes radiales.
  \draw[edgeBlack,line width=0.82pt]
    (670,134) -- (663,175) -- (670,215);
  \fill[edgeBlack] (670,134) -- (664,147) -- (673,146) -- cycle;
  \fill[edgeBlack] (670,215) -- (665,201) -- (674,204) -- cycle;

  % Letras y símbolos del esquema original.
  \node[text=markRed,font=\fontsize{37}{42}\selectfont,
        anchor=base,inner sep=0pt] at (359,42) {$b$};
  \node[text=markRed,font=\fontsize{37}{42}\selectfont,
        anchor=base,inner sep=0pt] at (530,92) {$c$};
  \node[text=markRed,font=\fontsize{37}{42}\selectfont,
        anchor=base,inner sep=0pt] at (359,325) {$a$};
  \node[text=markRed,font=\fontsize{37}{42}\selectfont,
        anchor=base,inner sep=0pt] at (533,294) {$d$};
  \node[text=markRed,font=\fontsize{39}{43}\selectfont,
        anchor=base,inner sep=0pt] at (43,207) {$r$};
  \node[text=edgeBlack,font=\fontsize{27}{32}\selectfont,
        anchor=center,fill=white,inner sep=0.5pt] at (642,174) {$\Theta$};
\end{tikzpicture}
</script>

Figura 4: Sector anular diferencial utilizado para establecer el equilibrio de una placa circular.

Los dos esquemas representan pequeñas porciones de la placa. En el primero se comparan los momentos y la fuerza cortante que actúan en secciones radiales vecinas, separadas por una distancia $dr$. En el segundo se muestra un sector de forma anular, que permite visualizar cómo cambian esas acciones al considerar un elemento curvo. El ángulo dibujado para representar la apertura del sector es un ángulo geométrico; no debe confundirse con el giro de la superficie utilizado en las ecuaciones de curvatura.

Del equilibrio entre momentos y fuerzas cortantes nos brinda la ecuación diferencial de equilibrio:

$$ M_r + \frac{dM_r}{dr}\cdot r - M_t + Qr = 0 $$

Esta expresión se obtiene al exigir que la suma de los momentos sobre el pequeño elemento sea nula. El término que contiene $dM_r/dr$ tiene en cuenta que el momento radial puede variar de un radio a otro. El momento circunferencial $M_t$ interviene porque el elemento pertenece a una superficie curva, y $Q$ representa la fuerza cortante transversal por unidad de longitud de circunferencia. La distancia $r$ aparece como parte de la geometría y de los brazos de las acciones consideradas.

Sustituyendo los momentos flectores radiales y transversales en función del giro de las secciones se tiene:

$$ \frac{d^2\varphi}{dr^2} + \frac{1}{r}\frac{d\varphi}{dr} - \frac{\varphi}{r^2} = -\frac{Q}{D} $$

La sustitución consiste en reemplazar $M_r$ y $M_t$ por las relaciones obtenidas anteriormente y después reunir los términos que contienen $\varphi$, su primera derivada y su segunda derivada. De ese modo, los momentos dejan de ser incógnitas independientes: todo queda expresado mediante el giro radial y la fuerza cortante.

Esta expresión es equivalente a la siguiente ecuación diferencial:

$$ \frac{d}{dr}\left[\frac{1}{r}\frac{d}{dr}(r\varphi)\right] = -\frac{Q}{D} $$

La forma con derivadas agrupadas resulta especialmente útil cuando se necesita integrar. No representa una ecuación distinta: al desarrollar las derivadas del miembro izquierdo se recuperan los mismos términos de la ecuación anterior.

También es posible colocar los momentos flectores en función de las deflexiones transversales de la placa:

$$ \frac{d^3 w}{dr^3} + \frac{1}{r}\frac{d^2 w}{dr^2} - \frac{1}{r^2}\frac{dw}{dr} = \frac{Q}{D} $$

En esta expresión ya no aparece el giro $\varphi$. Se ha utilizado su relación con la pendiente de la superficie para que la ecuación dependa únicamente de $w$. Esto es importante porque, al resolver un problema de placas, normalmente se busca primero la deflexión y luego se calculan los giros, los momentos y los esfuerzos.

De forma parecida al caso anterior, esta ecuación diferencial se puede escribir en la siguiente forma:

$$ \frac{d}{dr}\left[\frac{1}{r}\frac{d}{dr}\left(r\frac{dw}{dr}\right)\right] = \frac{Q}{D} $$

Además, si se considera una carga distribuida de forma axisimétrica, la cortante a una distancia $r$ del centro de la placa puede encontrarse de la siguiente forma:

$$ Q\,2\pi r = \int_0^r q\,2\pi r\,dr $$

Para entender esta igualdad, imaginemos que aislamos la parte de la placa comprendida entre el centro y una circunferencia de radio $r$. La carga distribuida actúa sobre toda esa superficie. La fuerza cortante $Q$ aparece alrededor del contorno, cuya longitud es $2\pi r$. La integral permite sumar las cargas que actúan desde el centro hasta la circunferencia considerada. Esta forma de equilibrio vincula la carga aplicada con la cortante interna que debe transmitir la placa.

Sustituyendo esta expresión se obtiene una ecuación que vincula la deflexión en función de la carga distribuida transversal sobre la placa:

$$ r\frac{d}{dr}\left[\frac{1}{r}\frac{d}{dr}\left(r\frac{dw}{dr}\right)\right] = \frac{1}{D}\int_0^r q\,s\,ds $$

La letra $s$ representa aquí la distancia radial que se utiliza dentro de la integral. Se integra desde el centro hasta el valor de $r$ que se desea estudiar. Esta manera de escribir la ecuación es útil porque la carga puede depender de la posición radial.

Derivando y usando el teorema fundamental del cálculo se obtiene la siguiente ecuación diferencial de cuarto orden que vincula las derivadas radiales de la deflexión de la placa con la carga distribuida uniformemente:

$$ \frac{1}{r}\frac{d}{dr}\left\{r\frac{d}{dr}\left[\frac{1}{r}\frac{d}{dr}\left(r\frac{dw}{dr}\right)\right]\right\} = \frac{q}{D} $$

El miembro izquierdo contiene derivadas sucesivas de la deflexión radial. Aunque la expresión se vea extensa, su finalidad es reunir en una sola ecuación la geometría de la placa, su rigidez y la carga transversal. Una vez conocida la distribución de $q$, todavía deben establecerse las condiciones del centro y del borde para obtener una solución concreta.

La integración de esta ecuación diferencial junto con las condiciones de contorno apropiadas nos permitirá encontrar la deflexión como una función del radio.

---

## 2. Caso de Placas Circulares Uniformemente Cargadas

Si la carga distribuida sobre la placa circular es uniforme se puede obtener el cortante a una distancia radial $r$ como:

$$ 2\pi r Q = \pi r^2 q $$

$$ Q = \frac{qr}{2} $$

Aquí $q$ es una intensidad de carga constante por unidad de superficie. La resultante que actúa dentro del círculo de radio $r$ se obtiene multiplicando $q$ por el área $\pi r^2$. Esa resultante se equilibra con la cortante que se distribuye sobre la circunferencia de longitud $2\pi r$. Por eso la cortante crece proporcionalmente con el radio: cuanto mayor sea el círculo que aislamos, mayor será la carga total contenida en él.

Sustituyendo esta en la ecuación de tercer grado, se tiene:

$$ \frac{d}{dr}\left[\frac{1}{r}\frac{d}{dr}\left(r\frac{dw}{dr}\right)\right] = \frac{qr}{2D} $$

Integrando con respecto del radio, se tiene lo siguiente:

$$ \frac{1}{r}\frac{d}{dr}\left(r\frac{dw}{dr}\right) = \frac{qr^2}{4D} + C_1 $$

La constante $C_1$ aparece porque se ha realizado una integración. Su valor no se conoce todavía; dependerá de las condiciones que deba cumplir la placa. La carga $q$ y la rigidez $D$ son constantes en este caso, por lo que pueden mantenerse fuera de las operaciones de derivación e integración.

Multiplicando por $r$ e integrando, se tiene la siguiente expresión:

$$ r\frac{dw}{dr} = \frac{qr^4}{16D} + C_1 r^2 + C_2 $$

$$ \frac{dw}{dr} = \frac{qr^3}{16D} + \frac{C_1 r}{2} + \frac{C_2}{r} $$

Al multiplicar por $r$ se elimina el denominador que acompaña a la derivada agrupada. Después de integrar vuelve a aparecer una constante, $C_2$. La segunda igualdad permite reconocer la pendiente radial de la placa: cada término contribuye a la variación de la deflexión con respecto a $r$.

Finalmente, integrando se obtiene la ecuación de las deflexiones radiales para una placa circular:

$$ w = \frac{qr^4}{64D} + \frac{C_1 r^2}{4} + C_2\log\frac{r}{a} + C_3 $$

Esta es una solución general para el caso de carga uniforme antes de imponer las restricciones particulares. Las constantes $C_1$, $C_2$ y $C_3$ quedan por determinar. El término logarítmico aparece al integrar $1/r$ y se escribe con el cociente $r/a$, que no tiene unidades. El símbolo $a$ representa el radio exterior de la placa.

Ahora se estudiarán distintas condiciones de contorno. Se empezará con el caso de placa circular con bordes empotrados.

---

### 2.1. Placas circulares con bordes empotrados

En una placa empotrada, el borde exterior no puede desplazarse transversalmente ni girar. Además, para una placa circular completa y una carga axisimétrica, el comportamiento debe ser regular en el centro: allí no puede aparecer una pendiente infinita ni una dirección radial privilegiada. Estas condiciones permitirán hallar las constantes de integración sin cambiar la solución general obtenida.

Empezaremos imponiendo una condición sobre los giros de la placa, es decir, sobre la primera derivada radial de la deflexión. En este caso, los giros en los extremos de la placa deberán ser iguales a cero, es decir:

$$ \left(\frac{qr^3}{16D} + \frac{C_1 r}{2} + \frac{C_2}{r}\right)_{r=0} = 0 $$

$$ \left(\frac{qr^3}{16D} + \frac{C_1 r}{2} + \frac{C_2}{r}\right)_{r=a} = 0 $$

Es importante distinguir las dos posiciones. En $r = a$ se encuentra el borde empotrado y, por tanto, se impone que su giro sea nulo. En $r = 0$ se encuentra el centro de la placa, que no es otro empotramiento: la condición expresa que la deformada debe ser simétrica y mantenerse finita allí. Esto explica por qué se consideran ambas posiciones al resolver las constantes.

La primera ecuación no deja opción:

$$ C_2 = 0 $$

El término $C_2/r$ no puede mantenerse en el centro, porque crecería sin límite cuando $r$ se aproxima a cero, salvo que su coeficiente sea nulo. Al establecer $C_2 = 0$ desaparece también el término logarítmico de la deflexión.

La segunda ecuación nos muestra que:

$$ C_1 = -\frac{qa^2}{8D} $$

Esta constante se obtiene sustituyendo $r = a$ y $C_2 = 0$ en la condición de giro del borde. Una vez encontrado su valor, la pendiente radial queda completamente determinada.

Finalmente, se tienen los giros:

$$ \varphi = -\frac{dw}{dr} = \frac{qr}{16D}(a^2 - r^2) $$

La expresión muestra que el giro es nulo en el centro, donde $r = 0$, y también en el borde, donde $r = a$. Entre esas dos posiciones sí puede haber giro. Es una consecuencia de la forma que adopta la superficie al deformarse sin perder la simetría circular.

La deflexión tiene una constante de integración aún por determinar. Esta se determina recordando que la deflexión en el borde es igual a cero, es decir:

$$ w = \frac{qr^4}{64D} - \frac{qa^2 r^2}{32D} + C_3 $$

$$ \frac{qa^4}{64D} - \frac{qa^4}{32D} + C_3 = 0 $$

$$ C_3 = \frac{qa^4}{64D} $$

Hasta este punto se había impuesto que el borde no girase, pero faltaba exigir que tampoco se desplazara. Al sustituir $r = a$ en la ecuación de deflexión y hacer $w = 0$, se obtiene el valor de $C_3$. Con ello se satisfacen las dos restricciones del empotramiento.

Finalmente, se tiene que la deflexión es:

$$ w = \frac{q}{64D}(a^2 - r^2)^2 $$

La deflexión depende de la posición radial. El factor $(a^2 - r^2)^2$ vale cero en el borde y aumenta hacia el centro. Para una carga y una rigidez dadas, la placa tiene así una deformada que depende únicamente de la distancia al centro. El resultado también muestra que una mayor rigidez flexional $D$ reduce las deflexiones, mientras que una mayor carga $q$ las aumenta.

La deflexión máxima se da cuando $r = 0$, es decir:

$$ w_{\max} = \frac{qa^4}{64D} $$

El valor máximo se encuentra en el centro porque allí el término geométrico alcanza su mayor valor. El radio aparece elevado a la cuarta potencia en el resultado, de modo que una placa de mayor tamaño puede presentar una deflexión considerablemente más grande si la carga y la rigidez permanecen iguales.

Finalmente, los momentos en dirección radial y tangencial pueden calcularse sustituyendo la deflexión en las ecuaciones del momento radial y tangencial:

$$ M_r = \frac{q}{16}\left[a^2(1 + \nu) - r^2(3 + \nu)\right] $$

$$ M_t = \frac{q}{16}\left[a^2(1 + \nu) - r^2(1 + 3\nu)\right] $$

Para llegar a estas relaciones se utilizan las derivadas primera y segunda de la deflexión en las fórmulas de los momentos. Los dos resultados comparten un término que depende de $a^2(1 + \nu)$, pero los términos que contienen $r^2$ no son iguales. Por ello, los momentos radial y tangencial cambian de distinta manera al avanzar desde el centro hasta el borde.

Los momentos de empotramiento tangencial y radial se obtienen cuando $r = a$, es decir:

$$ (M_r)_{r=a} = -\frac{qa^2}{8}, \qquad (M_t)_{r=a} = -\frac{\nu qa^2}{8} $$

Estos valores corresponden al borde exterior de la placa. El signo negativo, de acuerdo con la convención utilizada, indica que los momentos allí actúan en sentido opuesto a los valores positivos representados en otras zonas de la superficie. El momento tangencial depende además del coeficiente de Poisson $\nu$.

Mientras que los momentos radial y tangencial en el centro de la placa circular se pueden encontrar así:

$$ M_r = M_t = \frac{qa^2}{16}(1 + \nu) $$

En el centro, $r = 0$, desaparecen los términos que contienen $r^2$. Por eso ambos momentos toman el mismo valor. Esta igualdad es coherente con la simetría: exactamente en el centro no existe una dirección radial que se distinga mecánicamente de otra dirección del plano.

Los esfuerzos radiales máximos se pueden encontrar a partir de estas expresiones, encontrando que:

$$ (\sigma_r)_{\max} = -\frac{6 M_r}{h^2} = \frac{3}{4}\frac{qa^2}{h^2} $$

En esta relación, $h$ es el espesor de la placa. El esfuerzo de flexión se relaciona con el momento mediante el factor $6/h^2$, habitual cuando se considera la distribución lineal de esfuerzos normales a través de una sección rectangular de ancho unitario. El valor mostrado utiliza el momento radial correspondiente al borde empotrado. El resultado permite ver que, para las mismas cargas y dimensiones en planta, el esfuerzo aumenta cuando disminuye el espesor.

Finalmente, se muestra la variación del esfuerzo radial y tangencial:

<script type="text/tikz">
\begin{tikzpicture}[x=0.018cm,y=-0.018cm,>=latex,line cap=round,line join=round,font=\normalsize]
  % Figura 5: esfuerzos radial y tangencial a lo largo de la placa.
  % Coordenadas tomadas de los contornos originales (761 x 486 px).
  \path[use as bounding box] (-10,-18) rectangle (766,483);

  % Ejes: centro O (127,235), borde r=a (599,235).
  \draw[black,line width=0.95pt] (127,45) -- (127,466);
  \draw[black,line width=1.05pt] (127,466) -- (599,466);
  \draw[black,line width=1.05pt] (599,121) -- (599,467);
  \draw[black,line width=0.88pt] (55,235) -- (738,235);
  \foreach \x in {174,221,269,316,363,410,457,504,551}{
    \draw[black,line width=0.70pt] (\x,228) -- (\x,244);
  }

  % Las dos curvas originales se trazan con sendas curvas de Bezier.
  % Ambas parten de (127,80), y llegan a (599,466) y (599,286).
  % Cruces aproximados con el eje: r/a=0.628 y r/a=0.827.
  \draw[black,line width=1.45pt]
    (127,80) .. controls (284,80) and (442,214) .. (599,466);
  \draw[black,line width=1.30pt]
    (127,80) .. controls (284,80) and (442,183) .. (599,286);

  % Origen, coordenadas e identificacion de curvas.
  \node[anchor=south,inner sep=1pt,scale=1.12] at (127,38) {$\sigma_r;\ \sigma_t$};
  \node[anchor=north east,inner sep=1pt] at (124,238) {$O$};
  \node[anchor=south east,inner sep=1pt] at (120,482) {$O_1$};
  \node[anchor=north,inner sep=2pt,scale=1.05] at (362,250) {$0.5$};
  \node[anchor=north,inner sep=1pt,scale=1.00] at (591,250) {$1$};
  \node[anchor=south,inner sep=2pt,scale=1.03] at (435,224) {$0.628$};
  \node[anchor=south,inner sep=2pt,scale=1.03] at (531,224) {$0.827$};
  \node[anchor=west,inner sep=2pt,scale=1.04] at (379,187) {$\sigma_r$};
  \node[anchor=west,inner sep=2pt,scale=1.04] at (410,154) {$\sigma_t$};

  % Relacion r/a, con flecha de sentido positivo.
  \node[anchor=south,inner sep=0pt,scale=1.15] at (256,298) {$\frac{r}{a}$};
  \draw[-latex,line width=0.85pt] (281,304) -- (345,304);

  % Cota de ordenada positiva en el origen.
  \draw[dashed,line width=0.84pt] (68,80) -- (68,235);
  \draw[-latex,line width=0.80pt] (68,99) -- (68,82);
  \draw[-latex,line width=0.80pt] (68,215) -- (68,234);
  \draw[line width=0.75pt] (56,80) -- (125,80);
  \draw[line width=0.75pt] (56,235) -- (125,235);
  \fill[white] (0,119) rectangle (125,194);
  \node[anchor=east,inner sep=3pt,scale=1.23] at (121,157) {$\frac{3(1+\nu)qa^2}{8h^2}$};

  % Cotas negativas del lado derecho de la grafica.
  \draw[line width=0.75pt] (600,286) -- (655,286);
  \draw[line width=0.70pt] (601,466) -- (739,466);
  \draw[dashed,line width=0.86pt] (724,237) -- (724,466);
  \draw[-latex,line width=0.80pt] (724,253) -- (724,236);
  \draw[-latex,line width=0.80pt] (724,449) -- (724,466);
  \draw[dashed,line width=0.85pt] (647,237) -- (647,286);
  \draw[-latex,line width=0.75pt] (647,253) -- (647,238);
  \draw[-latex,line width=0.75pt] (647,271) -- (647,285);
  \draw[dashed,line width=0.85pt] (615,238) .. controls (617,267) and (627,283) .. (647,285);
  \node[anchor=center,scale=1.17,inner sep=1pt] at (654,195) {$-\frac{3}{4}\nu\frac{qa^2}{h^2}$};
  \node[anchor=center,scale=1.17,inner sep=1pt] at (683,352) {$-\frac{3}{4}\frac{qa^2}{h^2}$};
\end{tikzpicture}
</script>

Figura 5: Variación de los esfuerzos radial y tangencial a lo largo del radio de una placa circular empotrada.

El eje horizontal del gráfico corresponde al cociente $r/a$: en $r/a = 0$ estamos en el centro y en $r/a = 1$ se encuentra el borde. Las curvas $\sigma_r$ y $\sigma_t$ representan los esfuerzos radial y tangencial. Ambas comienzan con el mismo valor en el centro, pero disminuyen a ritmos distintos a medida que aumenta el radio. Los valores señalados aproximadamente como $0.628$ y $0.827$ indican dónde cada curva cruza el eje horizontal para el caso representado. Al llegar al empotramiento, los esfuerzos asociados a la flexión son negativos según la convención del gráfico.

---

## 3. Referencias

1. Timoshenko, S., & Woinowsky-Krieger, S. (1959). *Theory of plates and shells* (2nd ed.). McGraw-Hill.
2. Ugural, A. C. (2018). *Stresses in plates and shells* (3rd ed.). CRC Press.
