## 1. Presencia de Placas en Aplicaciones de Ingeniería

Las placas planas son elementos de área sin curvatura usadas para la transmisión de cargas transversales actuantes en su plano a otros elementos de soporte como pórticos o columnas. Su uso es universal apareciendo en casi todas las aplicaciones de ingeniería tales como, en la construcción de plataformas petroleras, especialmente usadas para la fabricación de cubiertas de grandes luces que soportan grandes cargas.

![Uso de placas planas en plataformas petroleras marinas](pag_01_img_02_Image146.jpg)

![Uso de placas planas en plataformas petroleras marinas](pag_01_img_03_Image147.jpg)

Figura 1: Uso de placas planas en la fabricación de plataformas petroleras marinas.

En estas plataformas, las cubiertas reciben el peso de equipos, tuberías y otros elementos que se instalan sobre ellas. La placa lleva esas cargas hacia las vigas y demás componentes que la sostienen. No basta con estudiar únicamente el peso aplicado: también importa cómo está apoyada la cubierta y qué distancia existe entre los apoyos, porque ambos aspectos influyen en su deformación.

![Placas planas en la cubierta de una embarcación naviera](pag_01_img_04_Image148.jpg)

Figura 2: Uso de placas planas usadas en la fabricación de la cubierta de embarcaciones navieras.

Otra de las aplicaciones más frecuentes es la fabricación de embarcaciones navieras dedicadas al traslado de mercancías, aplicaciones militares o en general para embarcaciones con diferentes usos.

![Embarcación y detalle transversal de las placas del casco y cubierta](pag_02_img_01_Image150.png)

![Embarcación y detalle transversal de las placas del casco y cubierta](pag_02_img_02_Image152.png)

Figura 3: Sección transversal típica de una embarcación y las placas planas usadas para la construcción de cubierta y el casco.

En el corte transversal pueden distinguirse las láminas que forman el casco y los elementos de refuerzo que las acompañan. Las láminas reciben presiones y otras cargas; los refuerzos proporcionan líneas de apoyo. Así, una misma estructura combina el trabajo de placas con el de vigas y marcos. Las zonas curvas del casco requieren un tratamiento geométrico distinto al de una placa inicialmente plana.

![Placas de las alas y paneles de piso de una aeronave](pag_03_img_01_Image154.png)

![Placas de las alas y paneles de piso de una aeronave](pag_03_img_02_Image155.png)

Figura 4: Construcción del chasis de un aeroplano usando placas curvas sobre pórticos curvos y sistema de placas planas como sistema de pisos.

En una aeronave se distinguen los paneles exteriores, que pueden ser curvos, y los paneles de piso, que pueden idealizarse como placas planas. En ambos casos, las piezas trabajan junto con los elementos longitudinales y transversales que las sostienen. El modelo de placa plana de este capítulo resulta apropiado para regiones que, antes de deformarse, pueden considerarse planas.

![Chasis de automóvil y paneles que trabajan como placas](pag_04_img_01_Image157.png)

![Chasis de automóvil y paneles que trabajan como placas](pag_04_img_02_Image158.png)

Figura 5: Chasis de automóvil y paneles que trabajan como placas.

En la figura también aparecen paneles de una carrocería y su relación con los miembros de soporte. La forma del panel y sus conexiones determinan qué partes se pueden estudiar mediante una idealización de placa. Conviene reconocer primero el elemento real y después elegir el modelo mecánico que represente su comportamiento.

![Encofrados y losas de concreto armado](pag_05_img_01_Image160.jpg)

![Encofrados y losas de concreto armado](pag_05_img_02_Image161.jpg)

Figura 6: Encofrados planos para el colado de losas planas de concreto armado y sistemas de losas planas.

![Sistemas de losas apoyadas sobre vigas y sobre ábacos](pag_05_img_03_Image162.png)

![Sistemas de losas apoyadas sobre vigas y sobre ábacos](pag_05_img_04_Image164.png)

Figura 7: Placas planas usadas como sistemas de piso en edificaciones a) con sistemas de vigas y b) con sistemas de ábacos.

En la primera configuración de la figura 7, las vigas delimitan regiones de losa y aportan soporte a lo largo de sus bordes. En la segunda, los apoyos se conectan directamente con la losa a través de zonas ensanchadas, llamadas ábacos. Las dos configuraciones transmiten cargas hacia las columnas, pero no tienen las mismas condiciones de apoyo. Esa diferencia será importante cuando se establezcan las condiciones de contorno del problema.

---

## 2. Idealización de las Placas para el Análisis

Una placa plana es un elemento estructural que se caracteriza geométricamente porque dos de sus dimensiones (longitud y ancho) son considerablemente mayores que la tercera (espesor), lo que permite considerarla como un elemento bidimensional o de área.

Desde el punto de vista funcional, las placas están diseñadas para soportar cargas aplicadas perpendicularmente a su plano medio, tales como cargas puntuales, cargas distribuidas de forma arbitraria, momentos flectores aplicados en el borde, o incluso acciones indirectas como gradientes de temperatura entre sus caras, entre otras posibilidades.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.86]
    \definecolor{plateBlue}{RGB}{186,228,250}
    \definecolor{midGrey}{RGB}{228,228,228}
    \definecolor{loadPink}{RGB}{246,178,178}
    \definecolor{loadRed}{RGB}{152,28,26}
    \definecolor{axisBlue}{RGB}{28,42,130}

    \begin{scope}[shift={(0,0)}]
        \fill[plateBlue] (0.00, 0.56) -- (4.40, 0.56) -- (6.60, 2.01) -- (2.20, 2.01) -- cycle;
        \fill[white] (0.00, 0.00) -- (4.40, 0.00) -- (4.40, 0.56) -- (0.00, 0.56) -- cycle;
        \fill[white] (4.40, 0.00) -- (6.60, 1.45) -- (6.60, 2.01) -- (4.40, 0.56) -- cycle;

        \draw[dashed, line width=0.65pt, black!70] (2.20, 1.45) -- (2.20, 2.01);
        \draw[dashed, line width=0.65pt, black!70] (0.00, 0.00) -- (2.20, 1.45) -- (6.60, 1.45);
        \draw[dashed, line width=0.65pt, black!70] (0.00, 0.28) -- (2.20, 1.73) -- (6.60, 1.73);

        \draw[line width=0.65pt, black!65] (0.00, 0.28) -- (4.40, 0.28) -- (6.60, 1.73);

        \draw[line width=1.15pt, black] (0.00, 0.56) -- (4.40, 0.56) -- (6.60, 2.01) -- (2.20, 2.01) -- cycle;
        \draw[line width=1.15pt, black] (0.00, 0.56) -- (0.00, 0.00) -- (4.40, 0.00) -- (6.60, 1.45) -- (6.60, 2.01);
        \draw[line width=1.15pt, black] (4.40, 0.00) -- (4.40, 0.56);

        \fill[white] (1.84, 1.00) rectangle (2.12, 1.42);
        \node[text=axisBlue] at (1.98, 1.21) {$\mathsf{P}$};
        \draw[-latex, line width=1.15pt, loadRed] (2.16, 1.90) -- (2.16, 0.96);

        \fill[loadPink] (3.20, 2.50) .. controls (3.45, 2.42) and (3.85, 2.48) .. (4.10, 2.66)
            -- (4.10, 1.50) .. controls (3.85, 1.32) and (3.45, 1.30) .. (3.20, 1.42) -- cycle;

        \fill[white] (3.20, 2.50) .. controls (3.45, 2.42) and (3.85, 2.48) .. (4.10, 2.66)
            .. controls (4.05, 2.82) and (3.55, 2.72) .. (3.20, 2.50) -- cycle;
        \draw[line width=1.1pt, loadRed] (3.20, 2.50) .. controls (3.45, 2.42) and (3.85, 2.48) .. (4.10, 2.66)
            .. controls (4.05, 2.82) and (3.55, 2.72) .. (3.20, 2.50);

        \draw[line width=1.0pt, loadRed] (3.20, 1.42) .. controls (3.45, 1.30) and (3.85, 1.32) .. (4.10, 1.50);

        \draw[-latex, line width=0.95pt, loadRed] (3.20, 2.50) -- (3.20, 1.40);
        \draw[-latex, line width=0.95pt, loadRed] (3.35, 2.46) -- (3.35, 1.35);
        \draw[-latex, line width=0.95pt, loadRed] (3.50, 2.45) -- (3.50, 1.33);
        \draw[-latex, line width=0.95pt, loadRed] (3.65, 2.47) -- (3.65, 1.34);
        \draw[-latex, line width=0.95pt, loadRed] (3.80, 2.51) -- (3.80, 1.37);
        \draw[-latex, line width=0.95pt, loadRed] (3.95, 2.57) -- (3.95, 1.42);
        \draw[-latex, line width=0.95pt, loadRed] (4.10, 2.66) -- (4.10, 1.49);

        \node[text=axisBlue] at (2.98, 2.44) {$\mathsf{w}$};
    \end{scope}

    \begin{scope}[shift={(7.35,0)}]
        \fill[white] (0.00, 0.56) -- (4.40, 0.56) -- (6.60, 2.01) -- (2.20, 2.01) -- cycle;
        \fill[white] (0.00, 0.00) -- (4.40, 0.00) -- (6.60, 1.45) -- (6.60, 2.01) -- (4.40, 0.56) -- (0.00, 0.56) -- cycle;
        \fill[midGrey] (0.00, 0.28) -- (4.40, 0.28) -- (6.60, 1.73) -- (2.20, 1.73) -- cycle;

        \draw[dashed, line width=0.65pt, black!70] (2.20, 1.45) -- (2.20, 2.01);
        \draw[dashed, line width=0.65pt, black!70] (0.00, 0.00) -- (2.20, 1.45) -- (6.60, 1.45);
        \draw[dashed, line width=0.65pt, black!70] (0.00, 0.28) -- (2.20, 1.73) -- (6.60, 1.73);

        \draw[line width=0.65pt, black!65] (0.00, 0.28) -- (4.40, 0.28) -- (6.60, 1.73);

        \draw[line width=1.15pt, black] (0.00, 0.56) -- (4.40, 0.56) -- (6.60, 2.01) -- (2.20, 2.01) -- cycle;
        \draw[line width=1.15pt, black] (0.00, 0.56) -- (0.00, 0.00) -- (4.40, 0.00) -- (6.60, 1.45) -- (6.60, 2.01);
        \draw[line width=1.15pt, black] (4.40, 0.00) -- (4.40, 0.56);

        \draw[-latex, line width=1.15pt, loadRed] (6.60, 1.73) -- (7.48, 1.73);
        \node[text=axisBlue] at (7.32, 1.50) {$\mathsf{x}$};

        \draw[-latex, line width=1.15pt, loadRed] (0.00, 0.28) -- (-0.75, -0.21);
        \node[text=axisBlue] at (-0.45, -0.25) {$\mathsf{y}$};

        \draw[-latex, line width=1.15pt, loadRed] (2.28, 1.32) -- (2.28, 0.36);
        \node[text=axisBlue] at (2.44, 0.74) {$\mathsf{z}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 8: Placa plana sujeta a la acción de cargas transversales y elección del plano medio como origen del sistema de coordenadas.

Para describir una placa se escogen normalmente las coordenadas $x$ e $y$ sobre su plano medio y la coordenada $z$ a través del espesor. El plano medio se encuentra a igual distancia de las dos caras cuando la placa tiene espesor constante. Trabajar con ese plano simplifica el problema: en lugar de describir el desplazamiento de cada punto del sólido, se busca principalmente la deflexión de una superficie.

Al igual que en el caso de las vigas, las placas están sometidas a un sistema de fuerzas internas, entre las cuales predominan los momentos flectores y las fuerzas cortantes. No obstante, en placas delgadas —aquellas cuyo espesor es pequeño en comparación con sus otras dimensiones— el comportamiento estructural está gobernado principalmente por los momentos flectores, siendo las fuerzas cortantes relativamente despreciables en el análisis clásico. En consecuencia, la deflexión observada en este tipo de placas se debe, en esencia, a los efectos de flexión inducidos por la carga transversal aplicada.

![Deformación de placa por carga transversal uniformemente distribuida](pag_06_img_02_Image175.jpg)

Figura 9: Deformada de una placa plana sometida a la acción de una carga uniformemente transversal.

La deformada muestra que los puntos de la placa no se desplazan todos la misma distancia. Cerca de los apoyos, la deflexión suele estar limitada; en el interior puede alcanzar valores mayores. Por eso se estudia la deflexión como una función de la posición. En el modelo clásico de placas delgadas se desprecia la contribución de la deformación por cortante a esa deflexión, pero no significa que las fuerzas cortantes internas sean siempre nulas.

---

## 3. Curvatura en Placas

La principal característica geométrica de una placa plana sujeta a la acción de cargas transversales a su plano es la curvatura de la misma. Esta propiedad se puede estudiar recordando que el caso unidimensional, la curvatura es el cambio instantáneo de la pendiente por unidad de cambio de la longitud de arco. En el caso mas general de las placas planas, la deflexión y por tanto la pendiente en un punto es una función de dos variables, si se usa un sistema de coordenadas cartesianos, se tiene que:

$$
\omega=\omega(x,y)
$$

<script type="text/tikz">
\begin{tikzpicture}[scale=1.0, >=latex, line cap=round, line join=round]

  % Placa rectangular sombreada (compatible con modo claro y oscuro)
  \fill[blue!30!cyan!20, fill opacity=0.45] (0.00, 0.00) rectangle (6.40, 3.60);
  \draw[line width=0.95pt] (0.00, 0.00) rectangle (6.40, 3.60);

  % Ejes coordenados x (horizontal derecha) y y (vertical abajo)
  \draw[line width=0.80pt, blue!45!cyan!75!black, ->] (-0.28, 3.60) -- (7.25, 3.60);
  \draw[line width=0.80pt, blue!45!cyan!75!black, ->] (0.00, 3.92) -- (0.00, -0.78);
  \node[anchor=south east, font=\itshape] at (-0.06, 3.70) {$o$};
  \node[anchor=west, font=\itshape] at (7.28, 3.60) {$x$};
  \node[anchor=east, font=\itshape] at (-0.08, -0.72) {$y$};

  % Curvas de nivel cerradas de la deflexion w(x,y)
  % Contorno exterior
  \draw[line width=0.70pt, blue!25!black]
    (0.62, 1.85)
    .. controls (0.65, 2.55) and (1.60, 2.95) .. (2.65, 3.00)
    .. controls (3.65, 3.04) and (4.45, 3.25) .. (5.05, 3.22)
    .. controls (5.75, 3.18) and (6.02, 2.85) .. (5.92, 2.15)
    .. controls (5.84, 1.50) and (5.68, 0.72) .. (5.05, 0.62)
    .. controls (4.20, 0.48) and (3.25, 0.64) .. (2.10, 0.66)
    .. controls (1.15, 0.68) and (0.60, 0.95) .. (0.62, 1.85);

  % Contorno intermedio
  \draw[line width=0.70pt, blue!25!black]
    (1.52, 1.65)
    .. controls (1.58, 2.10) and (2.15, 2.38) .. (2.78, 2.48)
    .. controls (3.42, 2.58) and (4.10, 2.55) .. (4.48, 2.72)
    .. controls (4.88, 2.65) and (5.38, 2.52) .. (5.40, 2.12)
    .. controls (5.42, 1.72) and (4.88, 1.25) .. (4.25, 1.08)
    .. controls (3.55, 0.90) and (2.90, 0.98) .. (2.35, 1.28)
    .. controls (1.95, 1.48) and (1.48, 1.45) .. (1.52, 1.65);

  % Contorno interior
  \draw[line width=0.70pt, blue!25!black]
    (3.32, 1.88)
    .. controls (3.35, 2.08) and (3.72, 2.04) .. (3.92, 2.22)
    .. controls (4.25, 2.32) and (4.68, 2.12) .. (4.62, 1.82)
    .. controls (4.55, 1.55) and (4.15, 1.44) .. (3.75, 1.55)
    .. controls (3.45, 1.64) and (3.30, 1.72) .. (3.32, 1.88);

  % Proyecciones discontinuas desde el punto hacia los ejes x e y
  \draw[line width=0.75pt, blue!50!cyan!75!black, dashed] (2.85, 3.60) -- (2.85, 2.03);
  \draw[line width=0.75pt, blue!50!cyan!75!black, dashed] (0.00, 1.90) -- (2.72, 1.90);

  % Lineas de referencia verdes paralelas a los ejes x e y
  \draw[line width=0.80pt, green!40!black] (2.98, 1.90) -- (7.05, 1.90);
  \draw[line width=0.80pt, green!40!black] (2.85, 1.77) -- (2.85, -0.58);

  % Direccion t (morado discontinuo, perpendicular a n)
  \draw[line width=0.75pt, blue!45!magenta!75, dashed] (2.89, 2.03) -- (3.74, 4.65);
  \node[anchor=east, color=blue!45!magenta!85!black, font=\itshape] at (3.54, 4.42) {$t$};

  % Direccion n (flecha roja + prolongacion morada discontinua)
  \draw[line width=1.40pt, red, ->] (2.98, 1.86) -- (5.47, 1.05);
  \draw[line width=0.75pt, blue!45!magenta!75, dashed] (5.47, 1.05) -- (7.37, 0.43);
  \node[anchor=north, color=blue!45!magenta!85!black, font=\itshape] at (7.12, 0.36) {$n$};

  % Arco del angulo theta
  \draw[line width=0.85pt, red] (3.75, 1.90) arc (0:-18:0.90);
  \node[anchor=west] at (3.78, 1.72) {$\theta$};

  % Punto de evaluacion (circulo hueco)
  \fill[white] (2.85, 1.90) circle (0.13);
  \draw[line width=1.05pt, blue!55!black] (2.85, 1.90) circle (0.13);

\end{tikzpicture}
</script>

Figura 10: Variación de la deflexión en una dirección específica $n$.

La figura representa una placa vista desde arriba. Las curvas cerradas permiten imaginar puntos que tienen un mismo valor de deflexión. Si partimos de un punto y avanzamos en distintas direcciones, la deflexión puede variar de forma diferente. Para medir esa variación se usa una dirección $n$ que forma un ángulo $\theta$ con el eje $x$.

La deflexión de una placa plana es una función de dos variables por lo que su variación en una dirección arbitraria tiene la siguiente forma:

$$ d\omega = \frac{\partial\omega}{\partial x}\,dx + \frac{\partial\omega}{\partial y}\,dy $$

Si se está interesado en medir el cambio que sufre una función en una dirección particular, esta puede ser medida de acuerdo con la siguiente expresión:

$$ \frac{\partial\omega}{\partial n} = \frac{\partial\omega}{\partial x}\frac{\partial x}{\partial n} + \frac{\partial\omega}{\partial y}\frac{\partial y}{\partial n} $$

Con el cambio de coordenadas:

$$ x = n\cos\theta, \qquad y = n\operatorname{sen}\theta $$

Por tanto:

$$ \frac{\partial x}{\partial n} = \cos\theta, \qquad \frac{\partial y}{\partial n} = \operatorname{sen}\theta $$

Luego:

$$ \frac{\partial\omega}{\partial n} = \cos\theta\frac{\partial\omega}{\partial x} + \operatorname{sen}\theta\frac{\partial\omega}{\partial y} $$

La última igualdad sale de sustituir las dos derivadas del cambio de coordenadas en la expresión anterior. En otras palabras, el cambio de deflexión que se mide siguiendo $n$ reúne las variaciones que tiene la placa en $x$ e $y$, según la orientación elegida.

El cambio de la deflexión en una dirección arbitraria puede ser interpretado como el ángulo que la superficie que define la deflexión gira en esa dirección particular, por lo que ahora se denominará a este giro en dirección $n$.

Además de medir el cambio de la deflexión en una dirección dada, es de interés medir el cambio del giro; en ese caso esta puede ser medida a partir de la siguiente expresión:

$$ \begin{aligned}
\frac{\partial}{\partial n}\left(\frac{\partial\omega}{\partial n}\right)
&= \cos\theta\left[\frac{\partial}{\partial x}\left(\frac{\partial\omega}{\partial n}\right)\frac{\partial x}{\partial n} + \frac{\partial}{\partial y}\left(\frac{\partial\omega}{\partial n}\right)\frac{\partial y}{\partial n}\right] \\[8pt]
&\quad + \operatorname{sen}\theta\left[\frac{\partial}{\partial x}\left(\frac{\partial\omega}{\partial n}\right)\frac{\partial x}{\partial n} + \frac{\partial}{\partial y}\left(\frac{\partial\omega}{\partial n}\right)\frac{\partial y}{\partial n}\right]
\end{aligned} $$

Finalmente:

$$ \begin{aligned}
\frac{\partial^2\omega}{\partial n^2}
&= \cos\theta\left(\cos\theta\frac{\partial^2\omega}{\partial x^2} + \operatorname{sen}\theta\frac{\partial^2\omega}{\partial x\partial y}\right) \\[8pt]
&\quad + \operatorname{sen}\theta\left(\cos\theta\frac{\partial^2\omega}{\partial y\partial x} + \operatorname{sen}\theta\frac{\partial^2\omega}{\partial y^2}\right)
\end{aligned} $$

Recordando las siguientes identidades trigonométricas de ángulo doble:

$$ \cos^2\theta = \frac{1+\cos(2\theta)}{2}, \qquad \operatorname{sen}^2\theta = \frac{1-\cos(2\theta)}{2}, \qquad \operatorname{sen}(2\theta) = 2\operatorname{sen}\theta\cos\theta $$

Sustituyendo en la expresión de la curvatura en dirección $n$, se tiene lo siguiente:

$$ \begin{aligned}
\frac{\partial^2\omega}{\partial n^2}
&= \left(\frac{1+\cos(2\theta)}{2}\right)\frac{\partial^2\omega}{\partial x^2} + \left(\frac{1-\cos(2\theta)}{2}\right)\frac{\partial^2\omega}{\partial y^2} \\[8pt]
&\quad + \operatorname{sen}(2\theta)\frac{\partial^2\omega}{\partial y\partial x}
\end{aligned} $$

$$ \begin{aligned}
\frac{\partial^2\omega}{\partial n^2}
&= \frac{1}{2}\left(\frac{\partial^2\omega}{\partial x^2} + \frac{\partial^2\omega}{\partial y^2}\right) + \frac{1}{2}\left(\frac{\partial^2\omega}{\partial x^2} - \frac{\partial^2\omega}{\partial y^2}\right)\cos(2\theta) \\[8pt]
&\quad + \frac{\partial^2\omega}{\partial y\partial x}\operatorname{sen}(2\theta)
\end{aligned} $$

Definiendo las curvaturas en direcciones $x$, $y$, $n$ y la curvatura torsional:

$$ \begin{aligned}
K_x &= \frac{\partial^2\omega}{\partial x^2}, \qquad K_y = \frac{\partial^2\omega}{\partial y^2}, \\[8pt]
K_{xy} &= \frac{\partial^2\omega}{\partial x\partial y} = \frac{\partial^2\omega}{\partial y\partial x}, \qquad K_n = \frac{\partial^2\omega}{\partial n^2}
\end{aligned} $$

Entonces:

$$ K_n = \left(\frac{K_x+K_y}{2}\right) + \left(\frac{K_x-K_y}{2}\right)\cos(2\theta) + K_{xy}\operatorname{sen}(2\theta) $$

Esta relación muestra claramente que las curvaturas se transforman de acuerdo con las leyes de transformación de los tensores, lo que demuestra su naturaleza tensorial.

Para comprender esta afirmación, fijémonos en que $K_x$, $K_y$ y $K_{xy}$ describen la curvatura de una **misma** superficie, pero respecto de direcciones concretas. Si elegimos otra dirección $n$, no cambia la forma física de la placa: cambia la componente de curvatura que estamos midiendo. La expresión anterior indica exactamente cómo combinar las tres componentes conocidas para obtenerla. Esta dependencia del ángulo, con términos en $\cos(2\theta)$ y $\operatorname{sen}(2\theta)$, es la misma forma de transformación que aparece al expresar un tensor de segundo orden en ejes girados. No es necesario memorizar aquí una matriz nueva: la transformación ya está contenida en la fórmula de $K_n$.

$$ \frac{\partial}{\partial t}\left(\frac{\partial w}{\partial n}\right) = -\cos\theta\frac{\partial}{\partial t}\left(\frac{\partial w}{\partial x}\right) + \operatorname{sen}\theta\frac{\partial}{\partial t}\left(\frac{\partial w}{\partial y}\right) $$

$$ \begin{aligned}
\frac{\partial^2 w}{\partial t\partial n}
&= \cos\theta\left[\frac{\partial}{\partial x}\left(\frac{\partial w}{\partial x}\right)\frac{\partial x}{\partial t} + \frac{\partial}{\partial y}\left(\frac{\partial w}{\partial x}\right)\frac{\partial y}{\partial t}\right] \\[8pt]
&\quad + \operatorname{sen}\theta\left[\frac{\partial}{\partial x}\left(\frac{\partial w}{\partial y}\right)\frac{\partial x}{\partial t} + \frac{\partial}{\partial y}\left(\frac{\partial w}{\partial y}\right)\frac{\partial y}{\partial t}\right]
\end{aligned} $$

$$ \begin{aligned}
\frac{\partial^2 w}{\partial t\partial n}
&= \cos\theta\left[\frac{\partial x}{\partial t}\frac{\partial^2 w}{\partial x^2} + \frac{\partial y}{\partial t}\frac{\partial^2 w}{\partial y\partial x}\right] \\[8pt]
&\quad + \operatorname{sen}\theta\left[\frac{\partial x}{\partial t}\frac{\partial^2 w}{\partial x\partial y} + \frac{\partial y}{\partial t}\frac{\partial^2 w}{\partial y^2}\right]
\end{aligned} $$

$$ x = t\operatorname{sen}\theta, \qquad y = -t\cos\theta $$

$$ \frac{\partial x}{\partial t} = \operatorname{sen}\theta, \qquad \frac{\partial y}{\partial t} = -\cos\theta $$

$$ \begin{aligned}
\frac{\partial^2 w}{\partial t\partial n}
&= \cos\theta\left(\operatorname{sen}\theta\frac{\partial^2 w}{\partial x^2} - \cos\theta\frac{\partial^2 w}{\partial y\partial t}\right) \\[8pt]
&\quad + \operatorname{sen}\theta\left(\operatorname{sen}\theta\frac{\partial^2 w}{\partial x\partial y} + \cos\theta\frac{\partial^2 w}{\partial y^2}\right)
\end{aligned} $$

$$ \frac{\partial^2 w}{\partial t\partial n} = \frac{1}{2}\frac{\partial^2 w}{\partial x^2}\operatorname{sen}(2\theta) - \frac{1}{2}\frac{\partial^2 w}{\partial y^2}\operatorname{sen}(2\theta) = \left(\frac{k_x-k_y}{2}\right)\operatorname{sen}(2\theta) $$

Aquí se están relacionando los cambios de pendiente medidos en dos direcciones distintas, $n$ y $t$. La derivada mixta indica cuánto varía la pendiente en una dirección cuando avanzamos en la otra. Al elegir una orientación diferente, las curvaturas que intervienen también cambian. Las operaciones se basan nuevamente en la regla de la cadena y en las relaciones trigonométricas del ángulo $\theta$.

---

## 4. Momentos y las Curvaturas

<script type="text/tikz">
\begin{tikzpicture}[scale=0.92, >=latex, line cap=round, line join=round]

  % =========================================================
  % ELEMENTO IZQUIERDO: PARALELEPIPEDO (dx x dy x h)
  % =========================================================
  \begin{scope}[shift={(0.00, 0.00)}]

    % Aristas ocultas posteriores (base y arista vertical trasera)
    \draw[line width=0.60pt, gray!75, dashed] (0.00, 0.00) -- (1.30, 0.78) -- (3.90, 0.78);
    \draw[line width=0.60pt, gray!75, dashed] (1.30, 0.78) -- (1.30, 4.38);

    % Elemento diferencial a distancia z (tapa superior a-b-c-d y espesor dz)
    \fill[blue!22!gray!38, fill opacity=0.65]
      (0.00, 0.75) -- (2.60, 0.75) -- (3.90, 1.53) -- (1.30, 1.53) -- cycle;
    \fill[blue!55!gray!85, fill opacity=0.85]
      (0.00, 0.61) -- (2.60, 0.61) -- (2.60, 0.75) -- (0.00, 0.75) -- cycle;
    \fill[blue!55!gray!85, fill opacity=0.85]
      (2.60, 0.61) -- (3.90, 1.39) -- (3.90, 1.53) -- (2.60, 0.75) -- cycle;
    \draw[line width=0.60pt, gray!70, dashed] (0.00, 0.61) -- (1.30, 1.39) -- (3.90, 1.39);
    \draw[line width=0.65pt, gray!85!black]
      (0.00, 0.75) -- (1.30, 1.53) -- (3.90, 1.53);
    \draw[line width=0.70pt, blue!35!black]
      (0.00, 0.75) -- (2.60, 0.75) -- (3.90, 1.53)
      (0.00, 0.61) -- (2.60, 0.61) -- (3.90, 1.39);

    % Plano neutro (superficie intermedia gris)
    \fill[gray!55, fill opacity=0.72]
      (0.00, 1.80) -- (2.60, 1.80) -- (3.90, 2.58) -- (1.30, 2.58) -- cycle;
    \draw[line width=0.70pt, gray!75!black]
      (0.00, 1.80) -- (2.60, 1.80) -- (3.90, 2.58) -- (1.30, 2.58) -- cycle;

    % Cara superior celeste
    \fill[cyan!40!blue!25, fill opacity=0.75]
      (0.00, 3.60) -- (2.60, 3.60) -- (3.90, 4.38) -- (1.30, 4.38) -- cycle;

    % Contorno estructural visible del elemento
    \draw[line width=0.95pt]
      (0.00, 0.00) -- (2.60, 0.00) -- (2.60, 3.60) -- (0.00, 3.60) -- cycle;
    \draw[line width=0.95pt]
      (0.00, 3.60) -- (1.30, 4.38) -- (3.90, 4.38) -- (2.60, 3.60);
    \draw[line width=0.95pt]
      (2.60, 0.00) -- (3.90, 0.78) -- (3.90, 4.38);

    % Cota dx (superior)
    \draw[line width=0.50pt, gray!80!black] (1.37, 4.42) -- (1.86, 4.71);
    \draw[line width=0.50pt, gray!80!black] (3.97, 4.42) -- (4.46, 4.71);
    \draw[line width=0.55pt, <->] (1.71, 4.63) -- (4.31, 4.63);
    \node[anchor=south, font=\sffamily\small] at (3.01, 4.66) {dx};

    % Cota dy (izquierda superior)
    \draw[line width=0.50pt, gray!80!black] (-0.08, 3.60) -- (-0.75, 3.60);
    \draw[line width=0.50pt, gray!80!black] (1.22, 4.38) -- (0.55, 4.38);
    \draw[line width=0.55pt, ->] (-0.12, 3.86) -- (-0.55, 3.60);
    \draw[line width=0.55pt, ->] (0.32, 4.12) -- (0.75, 4.38);
    \node[font=\sffamily\small] at (0.10, 4.00) {dy};

    % Cotas h/2 (derecha)
    \draw[line width=0.50pt, gray!80!black] (3.98, 4.38) -- (4.76, 4.38);
    \draw[line width=0.50pt, gray!80!black] (3.98, 2.58) -- (4.76, 2.58);
    \draw[line width=0.50pt, gray!80!black] (3.98, 0.78) -- (4.76, 0.78);
    \draw[line width=0.55pt, ->] (4.58, 3.74) -- (4.58, 4.38);
    \draw[line width=0.55pt, ->] (4.58, 3.22) -- (4.58, 2.58);
    \node[font=\sffamily\small] at (4.58, 3.48) {h/2};
    \draw[line width=0.55pt, ->] (4.58, 1.94) -- (4.58, 2.58);
    \draw[line width=0.55pt, ->] (4.58, 1.42) -- (4.58, 0.78);
    \node[font=\sffamily\small] at (4.58, 1.68) {h/2};

    % Cotas z y dz (izquierda inferior)
    \draw[line width=0.50pt, gray!80!black] (-0.08, 1.80) -- (-0.76, 1.80);
    \draw[line width=0.50pt, gray!80!black] (-0.08, 0.75) -- (-0.76, 0.75);
    \draw[line width=0.50pt, gray!80!black] (-0.08, 0.61) -- (-0.76, 0.61);
    \draw[line width=0.55pt, ->] (-0.58, 1.46) -- (-0.58, 1.80);
    \draw[line width=0.55pt, ->] (-0.58, 1.09) -- (-0.58, 0.75);
    \node[font=\sffamily\small] at (-0.58, 1.28) {z};
    \draw[line width=0.55pt, ->] (-0.58, 0.34) -- (-0.58, 0.61);
    \draw[line width=0.50pt] (-0.58, 0.42) -- (-0.72, 0.42);
    \node[anchor=east, font=\sffamily\small] at (-0.68, 0.56) {dz};

    % Etiquetas de vertices y plano neutro (n, a, b, c, d)
    \node[anchor=east, font=\sffamily\small] at (-0.06, 1.98) {n};
    \node[anchor=east, font=\sffamily\small] at (2.52, 1.98) {n};
    \node[anchor=west, font=\sffamily\small] at (3.94, 2.74) {n};
    \node[anchor=east, font=\sffamily\small] at (-0.06, 0.92) {a};
    \node[anchor=west, font=\sffamily\small] at (2.64, 0.45) {b};
    \node[anchor=west, font=\sffamily\small] at (3.94, 1.44) {c};
    \node[anchor=west, font=\sffamily\small] at (1.36, 1.38) {d};

  \end{scope}

  % =========================================================
  % ELEMENTO DERECHO: PRISMA TRIANGULAR CORTADO (a-d-c)
  % =========================================================
  \begin{scope}[shift={(6.80, 0.00)}]

    % Aristas ocultas posteriores
    \draw[line width=0.60pt, gray!75, dashed] (0.00, 0.00) -- (1.30, 0.78) -- (3.90, 0.78);
    \draw[line width=0.60pt, gray!75, dashed] (1.30, 0.78) -- (1.30, 4.38);

    % Elemento diferencial triangular a distancia z (a-d-c) y banda de espesor dz
    \fill[blue!22!gray!38, fill opacity=0.65]
      (0.00, 0.75) -- (1.30, 1.53) -- (3.90, 1.53) -- cycle;
    \draw[line width=0.60pt, gray!70, dashed] (0.00, 0.61) -- (1.30, 1.39) -- (3.90, 1.39);
    \draw[line width=0.65pt, gray!85!black]
      (0.00, 0.75) -- (1.30, 1.53) -- (3.90, 1.53);
    \draw[line width=0.70pt, gray!80!black]
      (0.00, 0.75) -- (3.90, 1.53)
      (0.00, 0.61) -- (3.90, 1.39);

    % Plano neutro triangular (superficie intermedia gris)
    \fill[gray!55, fill opacity=0.72]
      (0.00, 1.80) -- (1.30, 2.58) -- (3.90, 2.58) -- cycle;
    \draw[line width=0.70pt, gray!75!black]
      (0.00, 1.80) -- (1.30, 2.58) -- (3.90, 2.58) -- cycle;

    % Cara superior triangular celeste
    \fill[cyan!40!blue!25, fill opacity=0.75]
      (0.00, 3.60) -- (1.30, 4.38) -- (3.90, 4.38) -- cycle;

    % Contorno estructural visible de la cuna triangular
    \draw[line width=0.95pt]
      (0.00, 0.00) -- (3.90, 0.78) -- (3.90, 4.38) -- (0.00, 3.60) -- cycle;
    \draw[line width=0.95pt]
      (0.00, 3.60) -- (1.30, 4.38) -- (3.90, 4.38);

    % Cota dx (superior)
    \draw[line width=0.50pt, gray!80!black] (1.37, 4.42) -- (1.86, 4.71);
    \draw[line width=0.50pt, gray!80!black] (3.97, 4.42) -- (4.46, 4.71);
    \draw[line width=0.55pt, <->] (1.71, 4.63) -- (4.31, 4.63);
    \node[anchor=south, font=\sffamily\small] at (3.01, 4.66) {dx};

    % Cota dy (izquierda superior)
    \draw[line width=0.50pt, gray!80!black] (-0.08, 3.60) -- (-0.75, 3.60);
    \draw[line width=0.50pt, gray!80!black] (1.22, 4.38) -- (0.55, 4.38);
    \draw[line width=0.55pt, ->] (-0.12, 3.86) -- (-0.55, 3.60);
    \draw[line width=0.55pt, ->] (0.32, 4.12) -- (0.75, 4.38);
    \node[font=\sffamily\small] at (0.10, 4.00) {dy};

    % Cotas h/2 (derecha)
    \draw[line width=0.50pt, gray!80!black] (3.98, 4.38) -- (4.76, 4.38);
    \draw[line width=0.50pt, gray!80!black] (3.98, 2.58) -- (4.76, 2.58);
    \draw[line width=0.50pt, gray!80!black] (3.98, 0.78) -- (4.76, 0.78);
    \draw[line width=0.55pt, ->] (4.58, 3.74) -- (4.58, 4.38);
    \draw[line width=0.55pt, ->] (4.58, 3.22) -- (4.58, 2.58);
    \node[font=\sffamily\small] at (4.58, 3.48) {h/2};
    \draw[line width=0.55pt, ->] (4.58, 1.94) -- (4.58, 2.58);
    \draw[line width=0.55pt, ->] (4.58, 1.42) -- (4.58, 0.78);
    \node[font=\sffamily\small] at (4.58, 1.68) {h/2};

    % Cotas z y dz (izquierda inferior)
    \draw[line width=0.50pt, gray!80!black] (-0.08, 1.80) -- (-0.76, 1.80);
    \draw[line width=0.50pt, gray!80!black] (-0.08, 0.75) -- (-0.76, 0.75);
    \draw[line width=0.50pt, gray!80!black] (-0.08, 0.61) -- (-0.76, 0.61);
    \draw[line width=0.55pt, ->] (-0.58, 1.46) -- (-0.58, 1.80);
    \draw[line width=0.55pt, ->] (-0.58, 1.09) -- (-0.58, 0.75);
    \node[font=\sffamily\small] at (-0.58, 1.28) {z};
    \draw[line width=0.55pt, ->] (-0.58, 0.34) -- (-0.58, 0.61);
    \draw[line width=0.50pt] (-0.58, 0.42) -- (-0.72, 0.42);
    \node[anchor=east, font=\sffamily\small] at (-0.68, 0.56) {dz};

    % Etiquetas de vertices y plano neutro (n, a, c, d)
    \node[anchor=east, font=\sffamily\small] at (-0.06, 1.98) {n};
    \node[anchor=west, font=\sffamily\small] at (3.94, 2.74) {n};
    \node[anchor=east, font=\sffamily\small] at (-0.06, 0.92) {a};
    \node[anchor=west, font=\sffamily\small] at (3.94, 1.44) {c};
    \node[anchor=west, font=\sffamily\small] at (1.36, 1.38) {d};

  \end{scope}

\end{tikzpicture}
</script>

Figura 11: Elemento de la placa en la que se observa el eje neutro y un elemento ubicado a $z$ unidades de este.

En la figura se ha separado un elemento pequeño de la placa. La superficie situada a mitad del espesor se utiliza como referencia, mientras que un punto ubicado a la distancia $z$ puede experimentar desplazamientos distintos. Las capas que quedan a un lado y otro del plano medio se alargan o acortan por la flexión. Este es el mismo principio geométrico utilizado en vigas, ahora en dos direcciones.

$$ U_x = z\frac{\partial w}{\partial x}, \qquad U_y = z\frac{\partial w}{\partial y}, \qquad U_z = -w $$

$$ \varepsilon_x = \frac{\partial u_x}{\partial x} = z\frac{\partial^2 w}{\partial x^2}, \qquad \varepsilon_y = \frac{\partial u_y}{\partial y} = z\frac{\partial^2 w}{\partial y^2} $$

$$ \gamma_{xy} = \left(\frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x}\right) = 2z\frac{\partial^2 w}{\partial x\partial y} $$

$$ \gamma_{xz} = \frac{1}{2}\left(\frac{\partial u_x}{\partial z} + \frac{\partial u_z}{\partial x}\right) = \frac{1}{2}\left(\frac{\partial w}{\partial x} - \frac{\partial w}{\partial x}\right) = 0 $$

$$ \gamma_{yz} = \frac{1}{2}\left(\frac{\partial u_y}{\partial z} + \frac{\partial u_z}{\partial y}\right) = \frac{1}{2}\left(\frac{\partial w}{\partial y} - \frac{\partial w}{\partial y}\right) = 0 $$

Al sustituir los desplazamientos en las relaciones de deformación, aparecen derivadas segundas de $w$. Esto indica que las deformaciones de flexión dependen de la curvatura. También aparece el factor $z$: en el plano medio, donde $z=0$, esas deformaciones normales se anulan. Las dos últimas igualdades muestran la hipótesis cinemática de que no hay deformación transversal por cortante en esta teoría.

De la ley de Hooke generalizada se tiene:

$$ \varepsilon_x = \frac{\sigma_x}{E} - \nu\frac{\sigma_y}{E}, \qquad \varepsilon_y = \frac{\sigma_y}{E} - \nu\frac{\sigma_x}{E} $$

$$ \sigma_x - \nu\sigma_y = E\varepsilon_x, \qquad \sigma_y - \nu\sigma_x = E\varepsilon_y $$

$$ \sigma_x(1-\nu^2) = E(\varepsilon_x + \nu\varepsilon_y) \quad\Rightarrow\quad \sigma_x = \frac{E}{1-\nu^2}(\varepsilon_x + \nu\varepsilon_y) $$

$$ \sigma_y = \frac{E}{1-\nu^2}(\varepsilon_y + \nu\varepsilon_x) $$

Estas ecuaciones permiten calcular los esfuerzos cuando se conocen las deformaciones. El coeficiente $\nu$ aparece porque una deformación en una dirección influye también en la respuesta de la dirección perpendicular. Por eso, a diferencia de una relación uniaxial sencilla, cada esfuerzo normal depende de dos deformaciones.

En términos de las deflexiones:

$$ \sigma_x = \frac{E}{1-\nu^2}\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right)z $$

$$ \sigma_y = \frac{E}{1-\nu^2}\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right)z $$

Además:

$$ \tau_{xy} = G\gamma_{xy} $$

$$ \tau_{xy} = Gz\,2\frac{\partial^2 w}{\partial x\partial y} = \frac{E}{1+\nu}z\frac{\partial^2 w}{\partial x\partial y} $$

Esta última relación introduce el esfuerzo cortante que actúa dentro del plano de la placa. En la expresión, $G$ representa el módulo de rigidez al corte. La derivada mixta muestra que este esfuerzo aparece cuando la superficie presenta un cambio de pendiente combinado en $x$ e $y$.

Integrando a lo largo de la sección:

$$ M_x = \frac{E}{1-\nu^2}\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right)\int_{-h/2}^{h/2} z\,dz $$

$$ M_x = \frac{Eh^3}{12(1-\nu^2)}\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right) = D\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right) $$

$$ M_y = \int_{-h/2}^{h/2}\sigma_y z\,dz = \frac{E}{1-\nu^2}\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right)\int_{-h/2}^{h/2} z^2\,dz $$

$$ M_y = \frac{Eh^3}{12(1-\nu^2)}\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right) = D\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right) $$

$$ M_{xy} = \int_{-h/2}^{h/2}\tau_{xy} z\,dz = \frac{E}{1+\nu}\frac{\partial^2 w}{\partial x\partial y}\int_{-h/2}^{h/2} z^2\,dz $$

$$ M_{xy} = \frac{Eh^3}{12(1-\nu^2)}(1+\nu)\frac{\partial^2 w}{\partial x\partial y} = D(1+\nu)\frac{\partial^2 w}{\partial x\partial y} $$

Al integrar los esfuerzos a través del espesor se obtienen las resultantes que representan la flexión y la torsión. En estas expresiones aparece la rigidez flexional $D$, definida mediante $E$, $h$ y $\nu$. La presencia de $h^3$ significa que un aumento del espesor produce un cambio importante en la rigidez a flexión.

<script type="text/tikz">
\begin{tikzpicture}[scale=1.05, >=latex, line cap=round, line join=round]

  % Ejes coordenados o, x (derecha) y y (abajo)
  \draw[line width=0.85pt, ->] (0.00, 4.10) -- (6.20, 4.10);
  \draw[line width=0.85pt, ->] (0.00, 4.10) -- (0.00, 0.00);
  \node[anchor=south east, font=\sffamily\small] at (-0.04, 4.12) {o};
  \node[anchor=north, font=\sffamily\small] at (6.12, 4.02) {x};
  \node[anchor=west, font=\sffamily\small] at (0.08, 0.14) {y};

  % Elemento triangular d-c-a
  \fill[gray!42, fill opacity=0.72] (1.85, 2.65) -- (5.15, 2.65) -- (1.85, 1.15) -- cycle;
  \draw[line width=1.10pt] (1.85, 2.65) -- (5.15, 2.65) -- (1.85, 1.15) -- cycle;

  % Etiquetas de los vertices d, c, a
  \node[anchor=south east, font=\sffamily\small] at (1.82, 2.68) {d};
  \node[anchor=south west, font=\sffamily\small] at (5.18, 2.66) {c};
  \node[anchor=north east, font=\sffamily\small] at (1.84, 1.12) {a};

  % Cota dx (superior)
  \draw[line width=0.50pt, gray!80!black] (1.85, 2.72) -- (1.85, 3.74);
  \draw[line width=0.50pt, gray!80!black] (5.15, 2.72) -- (5.15, 3.74);
  \draw[line width=0.55pt, <->] (1.85, 3.64) -- (5.15, 3.64);
  \node[anchor=south, font=\sffamily\small] at (2.60, 3.68) {dx};

  % Cota dy (izquierda)
  \draw[line width=0.50pt, gray!80!black] (1.78, 2.65) -- (0.72, 2.65);
  \draw[line width=0.50pt, gray!80!black] (1.78, 1.15) -- (0.72, 1.15);
  \draw[line width=0.55pt, ->] (0.82, 2.40) -- (0.82, 2.65);
  \draw[line width=0.55pt, ->] (0.82, 2.02) -- (0.82, 1.15);
  \node[font=\sffamily\small] at (0.82, 2.21) {dy};

  % Angulo alfa en el vertice a
  \draw[line width=0.55pt, <->] (2.51, 1.45) arc (24.44:90.00:0.72);
  \node[font=\small] at (2.18, 1.62) {$\alpha$};

  % Esfuerzos actuantes (flechas rojo oscuro)
  % Esfuerzo normal superior sigma_y
  \draw[line width=1.00pt, red!65!black, ->] (3.50, 2.65) -- (3.50, 3.45);
  \node[anchor=west, font=\small] at (3.56, 3.34) {$\sigma_{\mathsf{y}}$};

  % Esfuerzo normal izquierdo sigma_x
  \draw[line width=1.00pt, red!65!black, ->] (1.85, 1.90) -- (1.02, 1.90);
  \node[anchor=north, font=\small] at (1.22, 1.84) {$\sigma_{\mathsf{x}}$};

  % Esfuerzo normal sobre la cara inclinada (etiquetado sigma_y segun referencia)
  \draw[line width=1.00pt, red!65!black, ->] (3.50, 1.90) -- (3.86, 1.10);
  \node[anchor=west, font=\small] at (3.78, 1.38) {$\sigma_{\mathsf{y}}$};

  % Esfuerzo cortante tau_nt sobre la cara inclinada
  \draw[line width=1.00pt, red!65!black, ->] (3.53, 1.83) -- (2.71, 1.46);
  \node[anchor=north, font=\small] at (2.94, 1.46) {$\tau_{\mathsf{nt}}$};

  % Direcciones unitarias n y t (flechas azul grisaceo)
  \draw[line width=0.85pt, blue!45!gray, ->] (3.96, 0.88) -- (4.28, 0.19);
  \node[anchor=west, font=\sffamily\small] at (4.32, 0.25) {n};

  \draw[line width=0.85pt, blue!45!gray, ->] (1.66, 0.97) -- (0.88, 0.62);
  \node[anchor=north east, font=\sffamily\small] at (0.86, 0.62) {t};

\end{tikzpicture}
</script>

Figura 12: Esfuerzos actuantes en una superficie orientada sobre los ejes coordenados.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.88]
    \definecolor{plateTop}{RGB}{224,221,212}
    \definecolor{plateLeft}{RGB}{200,196,186}
    \definecolor{plateRight}{RGB}{182,178,168}
    \definecolor{stressRed}{RGB}{198,38,26}

    \begin{scope}[shift={(0,0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.75pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.85pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.85pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.85pt, black] (1.10, -1.70) -- (1.10, -2.06);

        \draw[stressRed, line width=0.7pt] (-2.85, -0.41) -- (-1.15, 0.34) -- (-1.97, 0.70) -- (-3.67, -0.05) -- cycle;
        \draw[stressRed, line width=0.7pt] (-3.67, -0.05) -- (-2.85, -0.23);
        \draw[stressRed, line width=0.7pt] (-1.97, 0.70) -- (-1.15, 0.52);
        \foreach \s in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({-2.85 + 1.70*\s}, {-0.41 + 0.75*\s}) -- ({-3.67 + 1.70*\s}, {-0.05 + 0.75*\s});
        }
        \fill[white] (-2.85, -0.41) -- (-1.15, 0.34) -- (-1.15, 0.70) -- (-2.85, -0.05) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.85, -0.41) -- (-1.15, 0.34) -- (-1.15, 0.70) -- (-2.85, -0.05) -- cycle;
        \draw[stressRed, line width=0.65pt] (-2.85, -0.23) -- (-1.15, 0.52);
        \fill[white] (-2.85, -0.05) -- (-1.15, 0.70) -- (-0.33, 0.34) -- (-2.03, -0.41) -- cycle;
        \draw[stressRed, line width=0.75pt] (-2.85, -0.05) -- (-1.15, 0.70) -- (-0.33, 0.34) -- (-2.03, -0.41) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.85, -0.23) -- (-2.03, -0.41);
        \foreach \s in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({-2.85 + 1.70*\s}, {-0.05 + 0.75*\s}) -- ({-2.03 + 1.70*\s}, {-0.41 + 0.75*\s});
        }
        \node[stressRed, font=\large] at (-0.35, 0.78) {$\sigma_{xx}$};

        \draw[stressRed, line width=0.7pt] (0.95, 0.29) -- (3.75, -0.86) -- (4.55, -0.51) -- (1.75, 0.64) -- cycle;
        \draw[stressRed, line width=0.7pt] (1.75, 0.64) -- (0.95, 0.47);
        \draw[stressRed, line width=0.7pt] (4.55, -0.51) -- (3.75, -0.68);
        \foreach \t in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({0.95 + 2.80*\t}, {0.29 - 1.15*\t}) -- ({1.75 + 2.80*\t}, {0.64 - 1.15*\t});
        }
        \fill[white] (0.95, 0.29) -- (3.75, -0.86) -- (3.75, -0.50) -- (0.95, 0.65) -- cycle;
        \draw[stressRed, line width=0.7pt] (0.95, 0.29) -- (3.75, -0.86) -- (3.75, -0.50) -- (0.95, 0.65) -- cycle;
        \draw[stressRed, line width=0.65pt] (0.95, 0.47) -- (3.75, -0.68);
        \fill[white] (0.95, 0.65) -- (3.75, -0.50) -- (2.95, -0.85) -- (0.15, 0.30) -- cycle;
        \draw[stressRed, line width=0.75pt] (0.95, 0.65) -- (3.75, -0.50) -- (2.95, -0.85) -- (0.15, 0.30) -- cycle;
        \draw[stressRed, line width=0.7pt] (3.75, -0.68) -- (2.95, -0.85);
        \foreach \t in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({0.95 + 2.80*\t}, {0.65 - 1.15*\t}) -- ({0.15 + 2.80*\t}, {0.30 - 1.15*\t});
        }
        \node[stressRed, font=\large] at (0.62, 0.78) {$\sigma_{yy}$};

        \draw[stressRed, line width=0.7pt] (-3.45, -1.66) -- (-2.65, -1.13);
        \draw[stressRed, line width=0.75pt] (-2.65, -1.31) -- (0.15, -2.46) -- (-0.65, -2.81) -- (-3.45, -1.66) -- cycle;
        \foreach \t in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({-2.65 + 2.80*\t}, {-1.31 - 1.15*\t}) -- ({-3.45 + 2.80*\t}, {-1.66 - 1.15*\t});
        }
        \fill[white] (-2.65, -1.31) -- (0.15, -2.46) -- (0.15, -2.10) -- (-2.65, -0.95) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.65, -1.31) -- (0.15, -2.46) -- (0.15, -2.10) -- (-2.65, -0.95) -- cycle;
        \draw[stressRed, line width=0.65pt] (-2.65, -1.13) -- (0.15, -2.28);
        \fill[white] (-2.65, -0.95) -- (0.15, -2.10) -- (0.95, -1.75) -- (-1.85, -0.60) -- cycle;
        \draw[stressRed, line width=0.75pt] (-2.65, -0.95) -- (0.15, -2.10) -- (0.95, -1.75) -- (-1.85, -0.60) -- cycle;
        \draw[stressRed, line width=0.7pt] (-0.65, -2.81) -- (0.15, -2.28) -- (0.95, -1.75);
        \foreach \t in {0.0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({-2.65 + 2.80*\t}, {-0.95 - 1.15*\t}) -- ({-1.85 + 2.80*\t}, {-0.60 - 1.15*\t});
        }
        \node[stressRed, font=\large] at (-3.25, -0.78) {$\sigma_{yy}$};

        \draw[stressRed, line width=0.7pt] (4.67, -2.12) -- (3.85, -1.58);
        \draw[stressRed, line width=0.75pt] (3.85, -1.76) -- (2.15, -2.51) -- (2.97, -2.87) -- (4.67, -2.12) -- cycle;
        \foreach \s in {0.0, 0.2, 0.4, 0.6, 0.8, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({3.85 - 1.70*\s}, {-1.76 - 0.75*\s}) -- ({4.67 - 1.70*\s}, {-2.12 - 0.75*\s});
        }
        \fill[white] (3.85, -1.76) -- (2.15, -2.51) -- (2.15, -2.15) -- (3.85, -1.40) -- cycle;
        \draw[stressRed, line width=0.7pt] (3.85, -1.76) -- (2.15, -2.51) -- (2.15, -2.15) -- (3.85, -1.40) -- cycle;
        \draw[stressRed, line width=0.65pt] (3.85, -1.58) -- (2.15, -2.33);
        \fill[white] (3.85, -1.40) -- (2.15, -2.15) -- (1.33, -1.79) -- (3.03, -1.04) -- cycle;
        \draw[stressRed, line width=0.75pt] (3.85, -1.40) -- (2.15, -2.15) -- (1.33, -1.79) -- (3.03, -1.04) -- cycle;
        \draw[stressRed, line width=0.7pt] (2.97, -2.87) -- (2.15, -2.33) -- (1.33, -1.79);
        \foreach \s in {0.0, 0.2, 0.4, 0.6, 0.8, 1.0} {
            \draw[-latex, stressRed, line width=0.65pt] ({3.85 - 1.70*\s}, {-1.40 - 0.75*\s}) -- ({3.03 - 1.70*\s}, {-1.04 - 0.75*\s});
        }
        \node[stressRed, font=\large] at (2.10, -2.95) {$\sigma_{xx}$};
    \end{scope}

    \begin{scope}[shift={(4.45, 1.55)}]
        \draw[-latex, line width=0.95pt, black] (0,0) -- (-1.00, -0.45) node[left=-1pt] {$y$};
        \draw[-latex, line width=0.95pt, black] (0,0) -- (0.00, -0.98) node[below] {$z$};
        \draw[-latex, line width=0.95pt, black] (0,0) -- (1.08, -0.48) node[right=-1pt] {$x$};
    \end{scope}

    \begin{scope}[shift={(8.45, 0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.75pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.85pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.85pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.85pt, black] (1.10, -1.70) -- (1.10, -2.06);

        \foreach \s in {0.18, 0.50, 0.82} {
            \pgfmathsetmacro{\cx}{-2.38 + 1.70*\s}
            \pgfmathsetmacro{\cy}{-0.44 + 0.75*\s}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx - 0.27}, {\cy - 0.12}) -- ({\cx + 0.27}, {\cy + 0.12});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=-140:145, samples=24]
                ({\cx - 0.15*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (-2.75, 0.12) {$M_{xx}^{0}$};

        \foreach \s in {0.18, 0.50, 0.82} {
            \pgfmathsetmacro{\cx}{1.58 + 1.70*\s}
            \pgfmathsetmacro{\cy}{-2.20 + 0.75*\s}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx + 0.27}, {\cy + 0.12}) -- ({\cx - 0.27}, {\cy - 0.12});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=45:330, samples=24]
                ({\cx - 0.15*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (3.15, -2.25) {$M_{xx}^{0}$};

        \foreach \t in {0.12, 0.31, 0.50, 0.69, 0.88} {
            \pgfmathsetmacro{\cx}{0.65 + 2.80*\t}
            \pgfmathsetmacro{\cy}{0.32 - 1.15*\t}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx - 0.26}, {\cy + 0.107}) -- ({\cx + 0.26}, {\cy - 0.107});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=140:-145, samples=24]
                ({\cx + 0.15*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (3.35, -0.05) {$M_{yy}^{0}$};

        \foreach \t in {0.12, 0.31, 0.50, 0.69, 0.88} {
            \pgfmathsetmacro{\cx}{-2.35 + 2.80*\t}
            \pgfmathsetmacro{\cy}{-1.02 - 1.15*\t}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx + 0.26}, {\cy - 0.107}) -- ({\cx - 0.26}, {\cy + 0.107});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=-140:145, samples=24]
                ({\cx - 0.15*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (-1.55, -2.05) {$M_{yy}^{0}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 13: Distribución de esfuerzos normales y los momentos resultantes.

Los esfuerzos normales cambian con la distancia al plano medio, por lo que los esfuerzos de las capas superiores e inferiores producen un momento resultante. Los esquemas muestran el paso desde una distribución de esfuerzos sobre las caras laterales hasta una representación mediante momentos por unidad de longitud.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.88]
    \definecolor{plateTop}{RGB}{224,221,212}
    \definecolor{plateLeft}{RGB}{200,196,186}
    \definecolor{plateRight}{RGB}{182,178,168}
    \definecolor{stressRed}{RGB}{198,38,26}

    % =========================================================
    % PLACA IZQUIERDA: ESFUERZOS CORTANTES EN EL PLANO XY
    % =========================================================
    \begin{scope}[shift={(0,0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.75pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.85pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.85pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.85pt, black] (1.10, -1.70) -- (1.10, -2.06);

        % --- 1. Cara superior izquierda (tau_xy) ---
        \draw[stressRed, line width=0.7pt] (-1.572, -0.239) -- (-2.108, -0.018) -- (-1.504, 0.248) -- (-0.968, 0.028) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.108, 0.162) -- (-1.504, 0.248);
        \draw[-latex, stressRed, line width=0.68pt] (-1.572, -0.239) -- (-0.968, 0.028);
        \draw[-latex, stressRed, line width=0.68pt] (-1.840, -0.128) -- (-1.236, 0.138);
        \draw[-latex, stressRed, line width=0.68pt] (-2.108, -0.018) -- (-1.504, 0.248);
        \fill[white] (-1.572, 0.121) -- (-2.108, 0.342) -- (-2.108, -0.018) -- (-1.572, -0.239) -- cycle;
        \draw[stressRed, line width=0.7pt] (-1.572, 0.121) -- (-2.108, 0.342) -- (-2.108, -0.018) -- (-1.572, -0.239) -- cycle;
        \draw[stressRed, line width=0.65pt] (-1.572, -0.059) -- (-2.108, 0.162);
        \fill[white] (-1.572, 0.121) -- (-2.108, 0.342) -- (-2.712, 0.075) -- (-2.175, -0.145) -- cycle;
        \draw[stressRed, line width=0.75pt] (-1.572, 0.121) -- (-2.108, 0.342) -- (-2.712, 0.075) -- (-2.175, -0.145) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.175, -0.145) -- (-1.572, -0.059) -- (-0.968, 0.028);
        \draw[-latex, stressRed, line width=0.68pt] (-1.572, 0.121) -- (-2.175, -0.145);
        \draw[-latex, stressRed, line width=0.68pt] (-1.840, 0.232) -- (-2.444, -0.035);
        \draw[-latex, stressRed, line width=0.68pt] (-2.108, 0.342) -- (-2.712, 0.075);
        \node[stressRed, font=\large] at (-2.05, 0.68) {$\tau_{xy}$};

        % --- 2. Cara superior derecha (tau_yx = tau_xy) ---
        \draw[stressRed, line width=0.7pt] (2.114, -0.420) -- (2.644, -0.186) -- (1.960, 0.095) -- (1.429, -0.139) -- cycle;
        \draw[stressRed, line width=0.7pt] (2.644, -0.006) -- (1.960, 0.095);
        \draw[-latex, stressRed, line width=0.68pt] (2.114, -0.420) -- (1.429, -0.139);
        \draw[-latex, stressRed, line width=0.68pt] (2.379, -0.303) -- (1.694, -0.022);
        \draw[-latex, stressRed, line width=0.68pt] (2.644, -0.186) -- (1.960, 0.095);
        \fill[white] (2.114, -0.060) -- (2.644, 0.174) -- (2.644, -0.186) -- (2.114, -0.420) -- cycle;
        \draw[stressRed, line width=0.7pt] (2.114, -0.060) -- (2.644, 0.174) -- (2.644, -0.186) -- (2.114, -0.420) -- cycle;
        \draw[stressRed, line width=0.65pt] (2.114, -0.240) -- (2.644, -0.006);
        \fill[white] (2.114, -0.060) -- (2.644, 0.174) -- (3.329, -0.107) -- (2.798, -0.341) -- cycle;
        \draw[stressRed, line width=0.75pt] (2.114, -0.060) -- (2.644, 0.174) -- (3.329, -0.107) -- (2.798, -0.341) -- cycle;
        \draw[stressRed, line width=0.7pt] (2.798, -0.341) -- (2.114, -0.240) -- (1.429, -0.139);
        \draw[-latex, stressRed, line width=0.68pt] (2.114, -0.060) -- (2.798, -0.341);
        \draw[-latex, stressRed, line width=0.68pt] (2.379, 0.057) -- (3.063, -0.224);
        \draw[-latex, stressRed, line width=0.68pt] (2.644, 0.174) -- (3.329, -0.107);
        \node[stressRed, font=\large] at (2.45, 0.56) {$\tau_{yx} = \tau_{xy}$};

        % --- 3. Cara inferior izquierda (tau_yx = tau_xy) ---
        \draw[stressRed, line width=0.7pt] (-1.014, -1.800) -- (-1.544, -2.034) -- (-0.860, -2.315) -- (-0.329, -2.081) -- cycle;
        \draw[-latex, stressRed, line width=0.68pt] (-1.014, -1.800) -- (-0.329, -2.081);
        \draw[-latex, stressRed, line width=0.68pt] (-1.279, -1.917) -- (-0.594, -2.198);
        \draw[-latex, stressRed, line width=0.68pt] (-1.544, -2.034) -- (-0.860, -2.315);
        \fill[white] (-1.014, -1.440) -- (-1.544, -1.674) -- (-1.544, -2.034) -- (-1.014, -1.800) -- cycle;
        \draw[stressRed, line width=0.7pt] (-1.014, -1.440) -- (-1.544, -1.674) -- (-1.544, -2.034) -- (-1.014, -1.800) -- cycle;
        \draw[stressRed, line width=0.65pt] (-1.014, -1.620) -- (-1.544, -1.854);
        \fill[white] (-1.014, -1.440) -- (-1.544, -1.674) -- (-2.229, -1.393) -- (-1.698, -1.159) -- cycle;
        \draw[stressRed, line width=0.75pt] (-1.014, -1.440) -- (-1.544, -1.674) -- (-2.229, -1.393) -- (-1.698, -1.159) -- cycle;
        \draw[stressRed, line width=0.7pt] (-2.229, -1.393) -- (-1.544, -1.854) -- (-0.860, -2.315);
        \draw[stressRed, line width=0.7pt] (-1.014, -1.620) -- (-0.329, -2.081);
        \draw[-latex, stressRed, line width=0.68pt] (-1.014, -1.440) -- (-1.698, -1.159);
        \draw[-latex, stressRed, line width=0.68pt] (-1.279, -1.557) -- (-1.963, -1.276);
        \draw[-latex, stressRed, line width=0.68pt] (-1.544, -1.674) -- (-2.229, -1.393);
        \node[stressRed, font=\large] at (-1.65, -2.62) {$\tau_{yx} = \tau_{xy}$};

        % --- 4. Cara inferior derecha (tau_xy) ---
        \draw[stressRed, line width=0.7pt] (2.672, -1.981) -- (3.208, -2.202) -- (2.604, -2.468) -- (2.068, -2.248) -- cycle;
        \draw[-latex, stressRed, line width=0.68pt] (2.672, -1.981) -- (2.068, -2.248);
        \draw[-latex, stressRed, line width=0.68pt] (2.940, -2.092) -- (2.336, -2.358);
        \draw[-latex, stressRed, line width=0.68pt] (3.208, -2.202) -- (2.604, -2.468);
        \fill[white] (2.672, -1.621) -- (3.208, -1.842) -- (3.208, -2.202) -- (2.672, -1.981) -- cycle;
        \draw[stressRed, line width=0.7pt] (2.672, -1.621) -- (3.208, -1.842) -- (3.208, -2.202) -- (2.672, -1.981) -- cycle;
        \draw[stressRed, line width=0.65pt] (2.672, -1.801) -- (3.208, -2.022);
        \fill[white] (2.672, -1.621) -- (3.208, -1.842) -- (3.812, -1.575) -- (3.275, -1.355) -- cycle;
        \draw[stressRed, line width=0.75pt] (2.672, -1.621) -- (3.208, -1.842) -- (3.812, -1.575) -- (3.275, -1.355) -- cycle;
        \draw[stressRed, line width=0.7pt] (3.812, -1.575) -- (3.208, -2.022) -- (2.604, -2.468);
        \draw[stressRed, line width=0.7pt] (2.672, -1.801) -- (2.068, -2.248);
        \draw[-latex, stressRed, line width=0.68pt] (2.672, -1.621) -- (3.275, -1.355);
        \draw[-latex, stressRed, line width=0.68pt] (2.940, -1.732) -- (3.544, -1.465);
        \draw[-latex, stressRed, line width=0.68pt] (3.208, -1.842) -- (3.812, -1.575);
        \node[stressRed, font=\large] at (3.35, -2.55) {$\tau_{xy}$};
    \end{scope}

    % =========================================================
    % SISTEMA DE EJES COORDENADOS (x, y, z)
    % =========================================================
    \begin{scope}[shift={(4.45, 1.55)}]
        \draw[-latex, line width=0.95pt, black] (0,0) -- (-1.00, -0.45) node[left=-1pt] {$y$};
        \draw[-latex, line width=0.95pt, black] (0,0) -- (0.00, -0.98) node[below] {$z$};
        \draw[-latex, line width=0.95pt, black] (0,0) -- (1.08, -0.48) node[right=-1pt] {$x$};
    \end{scope}

    % =========================================================
    % PLACA DERECHA: MOMENTOS TORSORES EQUIVALENTES
    % =========================================================
    \begin{scope}[shift={(8.45, 0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.75pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.75pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.85pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.85pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.85pt, black] (1.10, -1.70) -- (1.10, -2.06);

        % --- 1. Borde superior izquierdo (M_xy^0, flechas hacia +x) ---
        \draw[dotted, stressRed, line width=0.7pt] (-0.684, 0.475) -- (-2.792, -0.455);
        \foreach \s in {-0.02, 0.24, 0.50, 0.76, 1.02} {
            \pgfmathsetmacro{\cx}{-0.888 - 1.70*\s}
            \pgfmathsetmacro{\cy}{0.385 - 0.75*\s}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx - 0.278}, {\cy + 0.114}) -- ({\cx + 0.278}, {\cy - 0.114});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=45:330, samples=24]
                ({\cx + 0.14*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (-2.25, 0.72) {$M_{xy}^{0}$};

        % --- 2. Borde inferior derecho (M_xy^0, flechas hacia -x) ---
        \draw[dotted, stressRed, line width=0.7pt] (3.874, -1.397) -- (1.766, -2.327);
        \foreach \s in {-0.02, 0.24, 0.50, 0.76, 1.02} {
            \pgfmathsetmacro{\cx}{3.670 - 1.70*\s}
            \pgfmathsetmacro{\cy}{-1.487 - 0.75*\s}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx + 0.278}, {\cy - 0.114}) -- ({\cx - 0.278}, {\cy + 0.114});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=330:45, samples=24]
                ({\cx + 0.14*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (3.35, -2.65) {$M_{xy}^{0}$};

        % --- 3. Borde superior derecho (M_yx^0, flechas hacia -y) ---
        \draw[dotted, stressRed, line width=0.7pt] (0.822, 0.430) -- (3.734, -0.766);
        \foreach \t in {0.08, 0.29, 0.50, 0.71, 0.92} {
            \pgfmathsetmacro{\cx}{0.878 + 2.80*\t}
            \pgfmathsetmacro{\cy}{0.407 - 1.15*\t}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx - 0.274}, {\cy - 0.121}) -- ({\cx + 0.274}, {\cy + 0.121});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=330:45, samples=24]
                ({\cx + 0.14*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (2.85, 0.44) {$M_{yx}^{0}$};

        % --- 4. Borde inferior izquierdo (M_yx^0 = M_xy^0, flechas hacia +y) ---
        \draw[dotted, stressRed, line width=0.7pt] (-2.616, -1.086) -- (0.296, -2.282);
        \foreach \t in {0.08, 0.29, 0.50, 0.71, 0.92} {
            \pgfmathsetmacro{\cx}{-2.560 + 2.80*\t}
            \pgfmathsetmacro{\cy}{-1.109 - 1.15*\t}
            \draw[-latex, stressRed, line width=0.85pt] ({\cx + 0.274}, {\cy + 0.121}) -- ({\cx - 0.274}, {\cy - 0.121});
            \draw[-latex, stressRed, line width=0.8pt] plot[domain=-150:135, samples=24]
                ({\cx + 0.14*cos(\x)}, {\cy + 0.33*sin(\x)});
        }
        \node[stressRed, font=\large] at (-2.15, -2.75) {$M_{yx}^{0} = M_{xy}^{0}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 14: Efecto de los esfuerzos cortantes actuantes en el plano $xy$ como torsores.

Los esfuerzos cortantes dibujados sobre las caras laterales tienen direcciones que producen torsión. Por ello se representan mediante los momentos torsores correspondientes. Al analizar un elemento pequeño de placa es necesario incluir tanto estos momentos como los de flexión.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.88]
    \definecolor{plateTop}{RGB}{224,221,212}
    \definecolor{plateLeft}{RGB}{200,196,186}
    \definecolor{plateRight}{RGB}{182,178,168}
    \definecolor{stressRed}{RGB}{198,38,26}

    % =========================================================
    % PLACA IZQUIERDA: DISTRIBUCION PARABOLICA (tau_xz, tau_yz)
    % =========================================================
    \begin{scope}[shift={(0,0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.68pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.68pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.68pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.82pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.82pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.82pt, black] (1.10, -1.70) -- (1.10, -2.06);

        % --- 1. Cara superior izquierda (tau_xz: 7 parabolas simetricas, flecha hacia arriba) ---
        \draw[stressRed, line width=0.50pt] (-0.352, 0.484) -- (-2.052, -0.266);
        \draw[stressRed, line width=0.50pt] (-0.352, 0.184) -- (-2.052, -0.566);
        \foreach \i in {0,1,2,3,4,5,6} {
            \pgfmathsetmacro{\s}{\i/6.0}
            \pgfmathsetmacro{\bx}{-0.352 - 1.70*\s}
            \pgfmathsetmacro{\by}{0.184 - 0.75*\s}
            \pgfmathsetmacro{\ax}{\bx - 0.056}
            \draw[stressRed, line width=0.45pt] (\bx, \by) -- (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.52pt] (\bx, \by)
                .. controls ({\bx - 0.155}, {\by + 0.084}) and ({\bx - 0.155}, {\by + 0.216}) ..
                (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.40pt] (\ax, {\by + 0.055}) -- (\ax, {\by + 0.220});
            \fill[stressRed] (\ax, {\by + 0.245}) -- ({\ax - 0.019}, {\by + 0.185}) -- ({\ax + 0.019}, {\by + 0.185}) -- cycle;
        }
        \node[stressRed, font=\large] at (-1.58, 0.50) {$\tau_{xz}$};

        % --- 2. Cara superior derecha (tau_yz: 13 parabolas simetricas, flecha hacia arriba) ---
        \draw[stressRed, line width=0.50pt] (0.348, 0.493) -- (3.148, -0.657);
        \draw[stressRed, line width=0.50pt] (0.348, 0.193) -- (3.148, -0.957);
        \foreach \i in {0,1,2,3,4,5,6,7,8,9,10,11,12} {
            \pgfmathsetmacro{\t}{\i/12.0}
            \pgfmathsetmacro{\bx}{0.348 + 2.80*\t}
            \pgfmathsetmacro{\by}{0.193 - 1.15*\t}
            \pgfmathsetmacro{\ax}{\bx + 0.051}
            \draw[stressRed, line width=0.42pt] (\bx, \by) -- (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.50pt] (\bx, \by)
                .. controls ({\bx + 0.141}, {\by + 0.084}) and ({\bx + 0.141}, {\by + 0.216}) ..
                (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.38pt] (\ax, {\by + 0.055}) -- (\ax, {\by + 0.220});
            \fill[stressRed] (\ax, {\by + 0.245}) -- ({\ax - 0.018}, {\by + 0.185}) -- ({\ax + 0.018}, {\by + 0.185}) -- cycle;
        }
        \node[stressRed, font=\large] at (2.28, 0.36) {$\tau_{yz}$};

        % --- 3. Cara inferior izquierda (tau_yz: 13 parabolas simetricas, flecha hacia abajo) ---
        \draw[stressRed, line width=0.50pt] (-2.048, -0.783) -- (0.752, -1.933);
        \draw[stressRed, line width=0.50pt] (-2.048, -1.083) -- (0.752, -2.233);
        \foreach \i in {0,1,2,3,4,5,6,7,8,9,10,11,12} {
            \pgfmathsetmacro{\t}{\i/12.0}
            \pgfmathsetmacro{\bx}{-2.048 + 2.80*\t}
            \pgfmathsetmacro{\by}{-1.083 - 1.15*\t}
            \pgfmathsetmacro{\ax}{\bx - 0.051}
            \draw[stressRed, line width=0.42pt] (\bx, \by) -- (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.50pt] (\bx, \by)
                .. controls ({\bx - 0.141}, {\by + 0.084}) and ({\bx - 0.141}, {\by + 0.216}) ..
                (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.38pt] (\ax, {\by + 0.245}) -- (\ax, {\by + 0.080});
            \fill[stressRed] (\ax, {\by + 0.055}) -- ({\ax - 0.018}, {\by + 0.115}) -- ({\ax + 0.018}, {\by + 0.115}) -- cycle;
        }
        \node[stressRed, font=\large] at (-1.45, -1.92) {$\tau_{yz}$};

        % --- 4. Cara inferior derecha (tau_xz: 7 parabolas simetricas, flecha hacia abajo) ---
        \draw[stressRed, line width=0.50pt] (3.152, -1.174) -- (1.452, -1.924);
        \draw[stressRed, line width=0.50pt] (3.152, -1.474) -- (1.452, -2.224);
        \foreach \i in {0,1,2,3,4,5,6} {
            \pgfmathsetmacro{\s}{\i/6.0}
            \pgfmathsetmacro{\bx}{3.152 - 1.70*\s}
            \pgfmathsetmacro{\by}{-1.474 - 0.75*\s}
            \pgfmathsetmacro{\ax}{\bx + 0.056}
            \draw[stressRed, line width=0.45pt] (\bx, \by) -- (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.52pt] (\bx, \by)
                .. controls ({\bx + 0.155}, {\by + 0.084}) and ({\bx + 0.155}, {\by + 0.216}) ..
                (\bx, {\by + 0.30});
            \draw[stressRed, line width=0.40pt] (\ax, {\by + 0.245}) -- (\ax, {\by + 0.080});
            \fill[stressRed] (\ax, {\by + 0.055}) -- ({\ax - 0.019}, {\by + 0.115}) -- ({\ax + 0.019}, {\by + 0.115}) -- cycle;
        }
        \node[stressRed, font=\large] at (3.15, -1.98) {$\tau_{xz}$};
    \end{scope}

    % =========================================================
    % SISTEMA DE EJES COORDENADOS (x, y, z)
    % =========================================================
    \begin{scope}[shift={(4.35, 1.50)}]
        \draw[-latex, line width=0.85pt, black] (0,0) -- (-0.96, -0.43) node[left=-1pt] {$y$};
        \draw[-latex, line width=0.85pt, black] (0,0) -- (0.00, -0.94) node[below] {$z$};
        \draw[-latex, line width=0.85pt, black] (0,0) -- (1.02, -0.45) node[right=-1pt] {$x$};
    \end{scope}

    % =========================================================
    % PLACA DERECHA: FUERZAS CORTANTES RESULTANTES (Q_x, Q_y)
    % =========================================================
    \begin{scope}[shift={(8.30, 0)}]
        \fill[plateTop] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \fill[plateLeft] (-1.70, -0.55) -- (1.10, -1.70) -- (1.10, -2.06) -- (-1.70, -0.91) -- cycle;
        \fill[plateRight] (1.10, -1.70) -- (2.80, -0.95) -- (2.80, -1.31) -- (1.10, -2.06) -- cycle;

        \draw[densely dashed, line width=0.68pt, black!80] (0.00, 0.20) -- (0.00, -0.16);
        \draw[densely dashed, line width=0.68pt, black!80] (0.00, -0.16) -- (2.80, -1.31);
        \draw[densely dashed, line width=0.68pt, black!80] (0.00, -0.16) -- (-1.70, -0.91);

        \draw[line width=0.82pt, black] (0.00, 0.20) -- (2.80, -0.95) -- (1.10, -1.70) -- (-1.70, -0.55) -- cycle;
        \draw[line width=0.82pt, black] (-1.70, -0.55) -- (-1.70, -0.91) -- (1.10, -2.06) -- (2.80, -1.31) -- (2.80, -0.95);
        \draw[line width=0.82pt, black] (1.10, -1.70) -- (1.10, -2.06);

        % --- 1. Borde superior izquierdo (Q_x: 8 flechas esbeltas hacia arriba) ---
        \draw[stressRed, line width=0.62pt] (-0.333, 0.197) -- (-2.033, -0.553);
        \draw[stressRed, line width=0.62pt] (-0.333, 0.737) -- (-2.033, -0.013);
        \foreach \i in {0,1,2,3,4,5,6,7} {
            \pgfmathsetmacro{\s}{\i/7.0}
            \pgfmathsetmacro{\bx}{-0.333 - 1.70*\s}
            \pgfmathsetmacro{\by}{0.197 - 0.75*\s}
            \draw[stressRed, line width=0.58pt] (\bx, \by) -- (\bx, {\by + 0.45});
            \fill[stressRed] (\bx, {\by + 0.54}) -- ({\bx - 0.032}, {\by + 0.425}) -- ({\bx + 0.032}, {\by + 0.425}) -- cycle;
        }
        \node[stressRed, font=\large] at (-2.48, 0.04) {$Q_{x}$};

        % --- 2. Borde superior derecho (Q_y: 9 flechas esbeltas hacia arriba) ---
        \draw[stressRed, line width=0.62pt] (0.329, 0.205) -- (3.129, -0.945);
        \draw[stressRed, line width=0.62pt] (0.329, 0.745) -- (3.129, -0.405);
        \foreach \i in {0,1,2,3,4,5,6,7,8} {
            \pgfmathsetmacro{\t}{\i/8.0}
            \pgfmathsetmacro{\bx}{0.329 + 2.80*\t}
            \pgfmathsetmacro{\by}{0.205 - 1.15*\t}
            \draw[stressRed, line width=0.58pt] (\bx, \by) -- (\bx, {\by + 0.45});
            \fill[stressRed] (\bx, {\by + 0.54}) -- ({\bx - 0.032}, {\by + 0.425}) -- ({\bx + 0.032}, {\by + 0.425}) -- cycle;
        }
        \node[stressRed, font=\large] at (3.55, -0.62) {$Q_{y}$};

        % --- 3. Borde inferior izquierdo (Q_y: 9 flechas esbeltas hacia abajo) ---
        \draw[stressRed, line width=0.62pt] (-2.029, -0.895) -- (0.771, -2.045);
        \draw[stressRed, line width=0.62pt] (-2.029, -1.435) -- (0.771, -2.585);
        \foreach \i in {0,1,2,3,4,5,6,7,8} {
            \pgfmathsetmacro{\t}{\i/8.0}
            \pgfmathsetmacro{\bx}{-2.029 + 2.80*\t}
            \pgfmathsetmacro{\by}{-0.895 - 1.15*\t}
            \draw[stressRed, line width=0.58pt] (\bx, \by) -- (\bx, {\by - 0.45});
            \fill[stressRed] (\bx, {\by - 0.54}) -- ({\bx - 0.032}, {\by - 0.425}) -- ({\bx + 0.032}, {\by - 0.425}) -- cycle;
        }
        \node[stressRed, font=\large] at (-1.12, -2.28) {$Q_{y}$};

        % --- 4. Borde inferior derecho (Q_x: 8 flechas esbeltas hacia abajo) ---
        \draw[stressRed, line width=0.62pt] (3.133, -1.287) -- (1.433, -2.037);
        \draw[stressRed, line width=0.62pt] (3.133, -1.827) -- (1.433, -2.577);
        \foreach \i in {0,1,2,3,4,5,6,7} {
            \pgfmathsetmacro{\s}{\i/7.0}
            \pgfmathsetmacro{\bx}{3.133 - 1.70*\s}
            \pgfmathsetmacro{\by}{-1.287 - 0.75*\s}
            \draw[stressRed, line width=0.58pt] (\bx, \by) -- (\bx, {\by - 0.45});
            \fill[stressRed] (\bx, {\by - 0.54}) -- ({\bx - 0.032}, {\by - 0.425}) -- ({\bx + 0.032}, {\by - 0.425}) -- cycle;
        }
        \node[stressRed, font=\large] at (2.70, -2.48) {$Q_{x}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 15: Distribución de esfuerzos de corte producidos por la fuerza cortante.

La figura 15 separa los esfuerzos cortantes distribuidos por el espesor de sus fuerzas resultantes $Q_x$ y $Q_y$. Estas fuerzas se utilizarán para escribir las ecuaciones de equilibrio del elemento de placa.

---

## 5. Ecuación de Equilibrio en Placas

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.95, line cap=round, line join=round]
    \definecolor{plateTop}{RGB}{172,222,250}
    \definecolor{diagBlue}{RGB}{192,208,232}
    \definecolor{momBlue}{RGB}{18,38,176}
    \definecolor{momGreen}{RGB}{8,136,52}
    \definecolor{shearRed}{RGB}{178,16,16}

    % --- 1. Cara superior celeste ---
    \fill[plateTop] (0.00, 3.48) -- (3.20, 3.48) -- (4.66, 4.34) -- (1.46, 4.34) -- cycle;

    % --- 2. Aristas ocultas posteriores ---
    \draw[line width=0.65pt, black!80, dash pattern=on 6pt off 4pt] (1.46, 4.34) -- (1.46, 0.86);
    \draw[line width=0.65pt, black!80, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (1.46, 0.86) -- (4.66, 0.86);

    % --- 3. Diagonales constructivas de las caras frontal y derecha ---
    \draw[line width=0.55pt, diagBlue] (0.00, 0.00) -- (3.20, 3.48);
    \draw[line width=0.55pt, diagBlue] (0.00, 3.48) -- (3.20, 0.00);
    \draw[line width=0.55pt, diagBlue] (3.20, 0.00) -- (4.66, 4.34);
    \draw[line width=0.55pt, diagBlue] (3.20, 3.48) -- (4.66, 0.86);

    % --- 4. Contorno del plano medio (z = 0) ---
    \draw[line width=0.60pt, black!85]
        (0.00, 1.74) -- (3.20, 1.74) -- (4.66, 2.60) -- (1.46, 2.60) -- cycle;

    % --- 5. Contorno estructural visible del prisma ---
    \draw[line width=1.10pt, black] (0.00, 0.00) -- (3.20, 0.00) -- (3.20, 3.48) -- (0.00, 3.48) -- cycle;
    \draw[line width=1.10pt, black] (0.00, 3.48) -- (1.46, 4.34) -- (4.66, 4.34) -- (3.20, 3.48);
    \draw[line width=1.10pt, black] (3.20, 0.00) -- (4.66, 0.86) -- (4.66, 4.34);

    % --- 6. Cotas dx y dy ---
    % Cota dx (superior trasera)
    \draw[line width=0.50pt, black!80] (1.55, 4.39) -- (2.08, 4.71);
    \draw[line width=0.50pt, black!80] (4.75, 4.39) -- (5.28, 4.71);
    \draw[line width=0.55pt, black!85, <->] (1.91, 4.60) -- (5.11, 4.60);
    \node[anchor=south, font=\sffamily] at (3.51, 4.66) {dx};

    % Cota dy (superior izquierda)
    \draw[line width=0.50pt, black!80] (-0.12, 3.48) -- (-0.86, 3.48);
    \draw[line width=0.50pt, black!80] (1.34, 4.34) -- (0.60, 4.34);
    \draw[line width=0.55pt, black!85, ->] (-0.19, 3.77) -- (-0.68, 3.48);
    \draw[line width=0.55pt, black!85, ->] (0.29, 4.05) -- (0.78, 4.34);
    \node[font=\sffamily] at (0.05, 3.91) {dy};

    % --- 7. Vectores en el centro de la cara frontal Pf = (1.60, 1.74) ---
    % Momento flector (flecha azul horizontal izquierda, doble punta)
    \draw[-latex, line width=1.60pt, momBlue] (1.60, 1.74) -- (0.28, 1.74);
    \draw[-latex, line width=1.60pt, momBlue] (1.60, 1.74) -- (0.60, 1.74);

    % Momento torsor (flecha verde oblicua abajo-izquierda, doble punta)
    \draw[-latex, line width=1.60pt, momGreen] (1.60, 1.74) -- (0.256, 0.948);
    \draw[-latex, line width=1.60pt, momGreen] (1.60, 1.74) -- (0.532, 1.111);

    % Fuerza cortante (flecha roja vertical abajo, punta simple)
    \draw[-latex, line width=1.65pt, shearRed] (1.60, 1.74) -- (1.60, 0.62);
    \fill[shearRed] (1.60, 1.74) circle (0.045);

    % --- 8. Vectores en el centro de la cara derecha Pr = (3.93, 2.17) ---
    % Momento flector (flecha verde oblicua sobre cara derecha, doble punta)
    \draw[-latex, line width=1.60pt, momGreen] (4.481, 2.495) -- (3.200, 1.740);
    \draw[-latex, line width=1.60pt, momGreen] (4.481, 2.495) -- (3.476, 1.902);

    % Momento torsor (flecha azul horizontal derecha, doble punta)
    \draw[-latex, line width=1.60pt, momBlue] (3.93, 2.17) -- (5.49, 2.17);
    \draw[-latex, line width=1.60pt, momBlue] (3.93, 2.17) -- (5.17, 2.17);

    % Fuerza cortante (flecha roja vertical abajo, punta simple)
    \draw[-latex, line width=1.65pt, shearRed] (3.93, 2.17) -- (3.93, 1.05);
    \fill[shearRed] (3.93, 2.17) circle (0.045);

    % --- 9. Lineas de llamada discontinuas y etiquetas (lado izquierdo) ---
    \draw[line width=0.55pt, black!80, densely dashed]
        (-0.28, 2.52) .. controls (0.35, 2.38) and (0.78, 2.10) .. (1.06, 1.76);
    \node[anchor=east, momBlue, font=\sffamily] at (-0.34, 2.52)
        {$\mathsf{M_x + {\displaystyle \frac{\partial M_x}{\partial x}} dx}$};

    \draw[line width=0.55pt, black!80, densely dashed]
        (-0.28, 1.48) .. controls (0.32, 1.62) and (0.85, 1.60) .. (1.24, 1.53);
    \node[anchor=east, momGreen, font=\sffamily] at (-0.34, 1.48)
        {$\mathsf{M_{xy} + {\displaystyle \frac{\partial M_{xy}}{\partial x}} dx}$};

    \draw[line width=0.55pt, black!80, densely dashed]
        (-0.28, 0.45) .. controls (0.38, 0.14) and (1.12, 0.28) .. (1.57, 0.90);
    \node[anchor=east, shearRed, font=\sffamily] at (-0.34, 0.45)
        {$\mathsf{Q_x + {\displaystyle \frac{\partial Q_x}{\partial x}} dx}$};

    % --- 10. Lineas de llamada discontinuas y etiquetas (lado derecho) ---
    \draw[line width=0.55pt, black!80, densely dashed]
        (5.62, 3.28) .. controls (5.00, 3.20) and (4.55, 2.84) .. (4.26, 2.37);
    \node[anchor=west, momGreen, font=\sffamily] at (5.68, 3.28)
        {$\mathsf{M_x + {\displaystyle \frac{\partial M_x}{\partial x}} dx}$};

    \node[anchor=west, black, font=\sffamily] at (5.68, 2.17)
        {$\mathsf{M_{xy} + {\displaystyle \frac{\partial M_{xy}}{\partial x}} dx}$};

    \draw[line width=0.55pt, black!80, densely dashed]
        (5.62, 1.18) .. controls (4.98, 1.24) and (4.40, 1.44) .. (3.96, 1.74);
    \node[anchor=west, shearRed, font=\sffamily] at (5.68, 1.18)
        {$\mathsf{Q_x + {\displaystyle \frac{\partial Q_x}{\partial x}} dx}$};
\end{tikzpicture}
</script>

Figura 16: Diagrama de cuerpo libre de un elemento de placa sujeta a fuerzas cortantes y momentos flectores.

En el diagrama se representa una porción muy pequeña de la placa, de lados $dx$ y $dy$. Sobre sus bordes actúan momentos y cortantes, mientras que la carga transversal distribuida actúa sobre su superficie. Las acciones en bordes opuestos son ligeramente distintas porque pueden variar de un punto a otro. Esa diferencia se expresa mediante derivadas.

El equilibrio en dirección $z$ brinda una relación entre las cortantes en $x$ e $y$ y la carga distribuida. Esta es una ecuación análoga a la obtenida en la teoría de vigas que relaciona la derivada de las cortantes y la carga distribuida.

$$ \frac{\partial Q_x}{\partial x}\,dx\,dy + \frac{\partial Q_y}{\partial y}\,dy\,dx + q\,dx\,dy = 0 $$

$$ \frac{\partial Q_x}{\partial x} + \frac{\partial Q_y}{\partial y} + q = 0 $$

La segunda expresión se obtiene dividiendo la primera entre el área diferencial $dx\,dy$. Su significado es que la variación conjunta de las fuerzas cortantes debe equilibrar la carga transversal que actúa sobre la placa.

Ya que cualquier elemento diferencial debe estar en equilibrio, los momentos flectores deben estar en equilibrio en cada una de las direcciones, esto nos lleva a las siguientes expresiones:

$$ \frac{\partial M_{xy}}{\partial x}\,dx\,dy - \frac{\partial M_y}{\partial y}\,dy\,dx + Q_y\,dx\,dy = 0 $$

$$ \frac{\partial M_{xy}}{\partial x} - \frac{\partial M_y}{\partial y} + Q_y = 0 $$

En dirección transversal, se obtiene lo siguiente:

$$ \frac{\partial M_{yx}}{\partial y} + \frac{\partial M_x}{\partial x} - Q_x = 0 $$

Derivando la primera expresión con respecto de $x$ y derivando la segunda expresión con respecto de $y$ sumando, se obtiene la siguiente expresión:

$$ \frac{\partial^2 M_x}{\partial x^2} - \frac{\partial^2 M_{xy}}{\partial x\partial y} + \frac{\partial Q_y}{\partial x} = 0 $$

$$ \frac{\partial^2 M_y}{\partial y^2} - \frac{\partial^2 M_{yx}}{\partial y\partial x} + \frac{\partial Q_x}{\partial y} = 0 $$

Dado que se cumple que $M_{xy} = M_{yx}$, como consecuencia de que los esfuerzos cortantes cruzados son iguales, es decir, $\tau_{xy} = \tau_{yx}$, se obtiene la siguiente expresión:

$$ \frac{\partial^2 M_x}{\partial x^2} - 2\frac{\partial^2 M_{xy}}{\partial x\partial y} + \frac{\partial^2 M_y}{\partial y^2} + \frac{\partial Q_y}{\partial x} + \frac{\partial Q_x}{\partial y} = 0 $$

Finalmente se obtiene una relación entre los momentos flectores actuantes en un punto del elemento y la carga transversal distribuida. Note que existe una similitud en la forma que existe entre los momentos flectores y la carga distribuida.

$$ \frac{\partial^2 M_x}{\partial x^2} + 2\frac{\partial^2 M_{xy}}{\partial x\partial y} + \frac{\partial^2 M_y}{\partial y^2} = -q $$

Ahora, recordando la relación que existe entre los momentos flectores y las curvaturas en el caso de placas, es posible expresar la ecuación anterior en función de las deflexiones, al estilo de la teoría de vigas de Bernoulli. Así, las relaciones entre los momentos en $x$ e $y$ y las curvaturas tienen las siguientes expresiones:

$$ M_x = -D\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right) $$

$$ M_y = -D\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right) $$

$$ M_{xy} = -M_{yx} = D(1-\nu)\frac{\partial^2 w}{\partial x\partial y} $$

Finalmente, sustituyendo estas relaciones en la ecuación de equilibrio obtenida, se tiene la ecuación diferencial de cuarto orden que relaciona las deflexiones de la losa y la carga uniformemente distribuida sobre la losa:

$$ \frac{\partial^4 w}{\partial x^4} + 2\frac{\partial^4 w}{\partial x^2\partial y^2} + \frac{\partial^4 w}{\partial y^4} = \frac{q}{D} $$

$$ \Delta\Delta w = \frac{q}{D} $$

$$ \Delta w = \frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2} $$

Para resolver un problema con esta ecuación no basta con conocer la carga $q$. También debemos saber cómo está sostenida la placa. Las condiciones de apoyo proporcionarán la información adicional necesaria para determinar la función $w(x,y)$. La expresión $\Delta\Delta w$ es una forma abreviada de la ecuación con derivadas de cuarto orden.

---

## 6. Momentos Internos

Una vez obtenida la deflexión como función de las coordenadas del plano medio de la placa analizada, los momentos flectores en las direcciones $x$ e $y$ pueden determinarse mediante las siguientes ecuaciones:

$$ M_x = -D\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right) $$

$$ M_y = -D\left(\frac{\partial^2 w}{\partial y^2} + \nu\frac{\partial^2 w}{\partial x^2}\right) $$

El momento flector de torsión actuante en los planos de corte $x$ e $y$ se puede obtener a través de las siguientes expresiones:

$$ M_{xy} = -M_{yx} = D(1-\nu)\frac{\partial^2 w}{\partial x\partial y} $$

Estas relaciones se aplican después de encontrar $w(x,y)$. Primero se deriva la deflexión respecto de las coordenadas indicadas y luego se multiplica por la rigidez flexional. Los momentos obtenidos son resultantes por unidad de longitud de la placa.

---

## 7. Cortantes Internos

Las fuerzas cortantes en placas pueden obtenerse a partir de las relaciones diferenciales entre los momentos flectores y las cortantes establecidas anteriormente para cada componente; a continuación, se muestran estas relaciones:

$$ \frac{\partial M_{yx}}{\partial y} + \frac{\partial M_x}{\partial x} - Q_x = 0 $$

$$ \frac{\partial M_{xy}}{\partial x} - \frac{\partial M_y}{\partial y} + Q_y = 0 $$

Sustituyendo las expresiones de los momentos flectores, se obtienen fórmulas que vinculan las fuerzas cortantes con las deflexiones de la placa:

$$ Q_x = \frac{\partial M_{yx}}{\partial y} + \frac{\partial M_x}{\partial x} = -D\frac{\partial}{\partial x}\left(\frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2}\right) $$

$$ Q_y = \frac{\partial M_y}{\partial y} - \frac{\partial M_{xy}}{\partial x} = -D\frac{\partial}{\partial y}\left(\frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2}\right) $$

Estas expresiones se pueden reescribir de forma compacta en función del laplaciano de las deflexiones y de la rigidez flexional:

$$ Q_x = -D\frac{\partial}{\partial x}(\Delta w), \qquad Q_y = -D\frac{\partial}{\partial y}(\Delta w) $$

La diferencia entre estas fórmulas y las de los momentos es el orden de derivación. Para calcular $Q_x$ y $Q_y$ a partir de la deflexión se requieren derivadas de tercer orden. Al igual que los momentos, estas fuerzas se expresan por unidad de longitud de borde.

Finalmente, debido a las hipótesis realizadas para el desarrollo de la teoría presentada, la distribución de esfuerzos cortantes en el peralte de la placa es parabólica, y el máximo esfuerzo cortante se obtiene en el eje de la losa. Las expresiones para el máximo cortante se muestran a continuación:

$$ (\tau_{xz})_{\max} = \frac{3Q_x}{2h}, \qquad (\tau_{yz})_{\max} = \frac{3Q_y}{2h} $$

El factor $3/2$ corresponde a la relación entre el valor máximo de una distribución parabólica y su valor medio a través del espesor. Aquí $h$ es el espesor de la placa. Por ello, una misma resultante cortante produce un mayor esfuerzo cuando actúa en una sección de menor espesor.

---

## 8. Reacciones Distribuidas y Reacciones Puntuales

Las condiciones de contorno para el caso de una losa con borde libre se han expresado en tres condiciones independientes, estas condiciones fueron inicialmente propuestas por Poisson; sin embargo, Kirchhoff, reformuló este conjunto de expresiones y estableció que estas son matemáticamente equivalentes a dos condiciones

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.84, line cap=round, line join=round]
    \definecolor{plateTop}{RGB}{230,230,230}
    \definecolor{elemCyan}{RGB}{173,221,247}
    \definecolor{elemPurp}{RGB}{206,204,230}
    \definecolor{momGreen}{RGB}{12,132,56}
    \definecolor{momRed}{RGB}{152,20,24}
    \definecolor{momBlue}{RGB}{44,122,196}

    % --- 1. Cara superior gris de la placa ---
    \fill[plateTop] (0.00, 0.78) -- (5.40, 0.78) -- (9.30, 3.03) -- (3.90, 3.03) -- cycle;

    % --- 2. Elementos diferenciales en la cara lateral derecha ---
    % Elemento celeste (frontal, ancho dy)
    \fill[elemCyan] (6.668, 0.731) -- (7.350, 1.125) -- (7.350, 1.905) -- (6.668, 1.511) -- cycle;
    % Elemento lila (posterior, ancho dy)
    \fill[elemPurp] (7.350, 1.125) -- (8.033, 1.519) -- (8.033, 2.299) -- (7.350, 1.905) -- cycle;

    % Diagonales internas (X) de ambos elementos diferenciales
    \draw[line width=0.50pt, black!70] (6.668, 0.731) -- (7.350, 1.905);
    \draw[line width=0.50pt, black!70] (6.668, 1.511) -- (7.350, 1.125);
    \draw[line width=0.50pt, black!70] (7.350, 1.125) -- (8.033, 2.299);
    \draw[line width=0.50pt, black!70] (7.350, 1.905) -- (8.033, 1.519);

    % Aristas verticales de los elementos diferenciales
    \draw[line width=0.65pt, black!80] (6.668, 0.731) -- (6.668, 1.511);
    \draw[line width=0.65pt, black!80] (7.350, 1.125) -- (7.350, 1.905);
    \draw[line width=0.65pt, black!80] (8.033, 1.519) -- (8.033, 2.299);

    % --- 3. Aristas ocultas posteriores y ejes internos (discontinuos) ---
    \draw[line width=0.60pt, black!75, dash pattern=on 6pt off 4pt] (3.90, 3.03) -- (3.90, 2.25);
    \draw[line width=0.60pt, black!75, dash pattern=on 6pt off 4pt] (3.90, 2.25) -- (9.30, 2.25);
    \draw[line width=0.60pt, black!75, dash pattern=on 6pt off 4pt] (3.90, 2.25) -- (0.00, 0.00);

    % --- 4. Contorno visible de la placa ---
    \draw[line width=0.80pt, black!85] (0.00, 0.78) -- (5.40, 0.78) -- (9.30, 3.03) -- (3.90, 3.03) -- cycle;
    \draw[line width=0.80pt, black!85] (0.00, 0.78) -- (0.00, 0.00) -- (5.40, 0.00) -- (9.30, 2.25) -- (9.30, 3.03);
    \draw[line width=0.80pt, black!85] (5.40, 0.00) -- (5.40, 0.78);

    % --- 5. Ejes coordenados externos (x, y, z) ---
    % Eje x (horizontal derecha)
    \draw[-latex, line width=0.80pt, black] (9.30, 2.25) -- (12.40, 2.25);
    \node[anchor=north, font=\itshape] at (12.28, 2.16) {$x$};

    % Eje y (oblicuo abajo-izquierda)
    \draw[-latex, line width=0.80pt, black] (0.00, 0.00) -- (-1.52, -0.88);
    \node[anchor=south, font=\itshape] at (-1.30, -0.52) {$y$};

    % Eje z (vertical abajo desde el origen posterior)
    \draw[-latex, line width=0.80pt, black] (3.90, 2.25) -- (3.90, -1.05);
    \node[anchor=west, font=\itshape] at (4.00, -0.88) {$z$};

    % --- 6. Cotas a, b y dy ---
    % Cota a (superior)
    \draw[line width=0.50pt, black!75] (3.90, 3.11) -- (3.90, 3.71);
    \draw[line width=0.50pt, black!75] (9.30, 3.11) -- (9.30, 3.71);
    \draw[<->, line width=0.55pt, black!85] (3.90, 3.58) -- (9.30, 3.58);
    \node[anchor=south, font=\sffamily] at (6.60, 3.62) {a};

    % Cota b (izquierda superior)
    \draw[line width=0.50pt, black!75] (0.00, 0.86) -- (0.00, 1.46);
    \draw[->, line width=0.55pt, black!85] (1.73, 2.33) -- (0.00, 1.33);
    \draw[->, line width=0.55pt, black!85] (2.17, 2.58) -- (3.90, 3.58);
    \node[font=\sffamily] at (1.95, 2.46) {b};

    % Cota dy (debajo del elemento lila)
    \draw[line width=0.50pt, black!75] (8.033, 1.479) -- (8.033, 1.040);
    \draw[line width=0.50pt, black!80] (7.350, 0.785) -- (8.033, 1.179);
    \draw[->, line width=0.55pt, black!85] (6.960, 0.560) -- (7.350, 0.785);
    \draw[->, line width=0.55pt, black!85] (8.423, 1.404) -- (8.033, 1.179);
    \node[font=\sffamily] at (7.86, 0.74) {dy};

    % --- 7. Vectores de momento torsor y fuerzas cortantes equivalentes ---
    % Momento torsor (Mxy)dy (flecha verde doble punta desde centro del elemento lila)
    \draw[-latex, line width=1.40pt, momGreen] (7.691, 1.712) -- (9.241, 1.712);
    \draw[-latex, line width=1.40pt, momGreen] (7.691, 1.712) -- (8.911, 1.712);
    \node[anchor=west, black, font=\sffamily] at (9.32, 1.712) {(Mxy)dy};

    % Par equivalente rojo oscuro (Mxy arriba y Mxy abajo en el elemento lila)
    \draw[-latex, line width=1.35pt, momRed] (8.033, 2.299) -- (8.033, 3.540);
    \node[anchor=west, momRed, font=\sffamily] at (8.12, 3.30) {Mxy};

    \draw[-latex, line width=1.35pt, momRed] (7.350, 1.125) -- (7.350, -0.125);
    \node[anchor=west, momRed, font=\sffamily] at (7.44, 0.08) {Mxy};

    % Par equivalente azul (elemento celeste adyacente)
    \draw[-latex, line width=1.35pt, momBlue] (7.350, 1.905) -- (7.350, 3.155);
    \node[anchor=east, momBlue, font=\sffamily] at (7.22, 2.66)
        {$\mathsf{M_{xy} + {\displaystyle \frac{\partial M_{xy}}{\partial x}} dx}$};

    \draw[-latex, line width=1.35pt, momBlue] (6.668, 0.731) -- (6.668, -0.519);
    \node[anchor=north, momBlue, font=\sffamily] at (6.20, -0.58)
        {$\mathsf{M_{xy} + {\displaystyle \frac{\partial M_{xy}}{\partial x}} dx}$};
\end{tikzpicture}
</script>

Figura 17: Equivalencia entre los momentos torsores y las fuerzas cortantes equivalentes.

En el borde libre no basta con observar las fuerzas cortantes que aparecen directamente en las caras del elemento. Los momentos torsores también pueden representarse mediante pares de fuerzas verticales equivalentes. Al sumar las contribuciones de muchos elementos consecutivos, esas fuerzas generan una resultante adicional a lo largo del borde.

Considere un elemento infinitesimal de longitud $dy$ en el borde $x = a$. Sobre este elemento actúa un momento torsor $M_{xy}\,dy$ (donde $M_{xy}$ es el momento por unidad de longitud). Este momento torsor puede ser reemplazado por dos fuerzas verticales, una fuerza $+M_{xy}$ aplicada en un extremo del elemento ($y$) y una fuerza $-M_{xy}$ aplicada en el otro extremo ($y + dy$), como muestra la Figura 17. Estas fuerzas generan un par equivalente al momento torsor original:

$$ \mathrm{Par} = M_{xy} \times dy $$

Ahora considere dos elementos consecutivos a lo largo del borde: elemento 1 (en $y$), en su extremo derecho ($y + dy$) tiene una fuerza $-M_{xy}(y)$ (hacia abajo); elemento 2 (en $y + dy$), en su extremo izquierdo ($y + dy$) tiene una fuerza $+M_{xy}(y + dy)$ (hacia arriba). La fuerza neta vertical en el punto $y + dy$ es:

$$ M_{xy}(y + dy) - M_{xy}(y) $$

La fuerza por unidad de longitud en el borde analizado se puede obtener dividiendo la fuerza neta por la longitud diferencial $dy$; en el límite, se tiene la fuerza cortante transversal por unidad de longitud:

$$ Q'_x = \lim_{dy\to 0}\frac{M_{xy}(y + dy) - M_{xy}(y)}{dy} = \frac{\partial M_{xy}}{\partial y} $$

$$ Q'_x = -\frac{\partial M_{xy}}{\partial y} $$

La fuerza cortante distribuida en los apoyos viene dada por la superposición de la fuerza cortante $Q_x$ y la cortante distribuida equivalente producto del momento torsor evaluado en $x = a$. Es decir, viene dada por la siguiente suma:

$$ Q'_x = -\left(\frac{\partial M_{xy}}{\partial y}\right)_{x=a} $$

$$ V_x = \left(Q_x - \frac{\partial M_{xy}}{\partial y}\right)_{x=a} = 0 $$

El término $V_x$ reúne dos efectos: la cortante transversal $Q_x$ y la acción equivalente debida a la variación del momento torsor a lo largo del borde. Si el borde está libre de fuerzas aplicadas, esa resultante debe anularse. La orientación y el signo dependen de la convención empleada en los diagramas.

Sustituyendo las expresiones obtenidas anteriormente para la fuerza cortante y el momento torsor en función de las deflexiones, se tienen las siguientes expresiones:

$$ \left[\frac{\partial^3 w}{\partial x^3} + (2 - \nu)\frac{\partial^3 w}{\partial x\partial y^2}\right]_{x=a} = 0 $$

Además, el momento flector a lo largo de este eje también deberá ser igual a cero en el caso de borde libre, es decir:

$$ \left.\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right)\right|_{x=a} = 0 $$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.88, line cap=round, line join=round]
    \definecolor{plateGray}{RGB}{230,230,230}
    \definecolor{reactRed}{RGB}{152,20,24}
    \definecolor{reactBlue}{RGB}{44,122,196}

    % --- 1. Losa rectangular en perspectiva ---
    \fill[plateGray] (0.00, 0.00) -- (6.00, 0.00) -- (8.86, 1.66) -- (2.86, 1.66) -- cycle;
    \draw[line width=1.10pt, black] (0.00, 0.00) -- (6.00, 0.00) -- (8.86, 1.66) -- (2.86, 1.66) -- cycle;

    % --- 2. Ejes coordenados x e y (puntas huecas segun referencia) ---
    \draw[line width=0.65pt, black] (8.86, 1.66) -- (10.05, 1.66);
    \draw[line width=0.95pt, black] (10.35, 1.66) -- (9.97, 1.745) -- (10.05, 1.66) -- (9.97, 1.575) -- cycle;
    \node[anchor=north, font=\itshape] at (10.22, 1.54) {$x$};

    \draw[line width=0.65pt, black] (0.00, 0.00) -- (-1.427, -0.828);
    \draw[line width=0.95pt, black] (-1.687, -0.979) -- (-1.315, -0.862) -- (-1.427, -0.828) -- (-1.401, -0.715) -- cycle;
    \node[anchor=south, font=\itshape] at (-1.54, -0.66) {$y$};

    % --- 3. Cotas a y b ---
    % Cota a (borde superior)
    \draw[line width=0.50pt, black!80] (2.86, 1.72) -- (2.86, 2.24);
    \draw[<->, line width=0.55pt, black!85] (2.86, 2.12) -- (8.86, 2.12);
    \node[anchor=south, font=\sffamily] at (5.86, 2.18) {a};

    % Cota b (borde izquierdo)
    \draw[line width=0.50pt, black!80] (0.00, 0.06) -- (0.00, 0.58);
    \draw[->, line width=0.55pt, black!85] (1.24, 1.18) -- (0.00, 0.46);
    \draw[->, line width=0.55pt, black!85] (1.62, 1.40) -- (2.86, 2.12);
    \node[font=\sffamily] at (1.43, 1.29) {b};

    % --- 4. Reacciones puntuales en las esquinas ---
    % Esquina (x=a; y=0): flecha roja hacia arriba
    \draw[-latex, line width=1.40pt, reactRed] (8.86, 1.66) -- (8.86, 2.74);
    \node[anchor=west, reactRed, font=\sffamily] at (8.94, 2.52)
        {$\mathsf{(Mxy)_{x=a;\;y=0}}$};

    % Esquina (x=0; y=b): flecha azul hacia abajo
    \draw[-latex, line width=1.40pt, reactBlue] (0.00, 0.00) -- (0.00, -1.08);
    \node[anchor=west, reactBlue, font=\sffamily] at (0.10, -0.92)
        {$\mathsf{(Myx)_{x=0;\;y=b}}$};

    % Esquina (x=a; y=b): flecha roja hacia abajo
    \draw[-latex, line width=1.40pt, reactRed] (6.00, 0.00) -- (6.00, -1.08);
    \node[anchor=west, reactRed, font=\sffamily] at (6.10, -0.88)
        {$\mathsf{(Mxy)_{x=a;\;y=b}}$};

    % Esquina (x=a; y=b): flecha azul hacia arriba + linea de llamada
    \draw[-latex, line width=1.40pt, reactBlue] (6.00, 0.00) -- (6.00, 1.08);
    \draw[line width=0.55pt, black!80, densely dashed]
        (6.04, 0.72) .. controls (6.52, 0.80) and (7.05, 0.62) .. (7.58, 0.44);
    \node[anchor=west, reactBlue, font=\sffamily] at (7.60, 0.44)
        {$\mathsf{(Myx)_{x=a;\;y=b}}$};
\end{tikzpicture}
</script>

Figura 18: Reacciones puntuales actuantes en las esquinas de una losa rectangular sometida a carga distribuida.

La figura muestra fuerzas concentradas en las esquinas. Aunque las acciones que se han estudiado a lo largo de los bordes se distribuyen por unidad de longitud, en un vértice se encuentran dos bordes y pueden aparecer contribuciones que no se compensan del mismo modo que en sus tramos interiores.

La reacción puntual ocurrida en las cuatro esquinas de la placa sometida a una carga distribuida transversal puede calcularse evaluando el momento torsor en las esquinas respectivas. Por simetría esta puede calcularse evaluando estos valores en $x = a$, $y = b$:

$$ R = 2(M_{xy})_{x=a,\,y=a} = 2D(1-\nu)\left(\frac{\partial^2 w}{\partial x\partial y}\right)_{x=a,\,y=a} $$

La expresión relaciona la reacción concentrada con el momento torsor evaluado en la esquina. Para usarla es necesario conocer previamente la deflexión $w(x,y)$ y obtener su derivada mixta en el punto indicado. La existencia y el sentido de la reacción dependen de las restricciones reales de esa esquina.

---

## 9. Condiciones de Contorno

Para que la ecuación diferencial que describe el comportamiento de la placa sea resoluble y admita una solución única, es necesario acompañarla con las condiciones de contorno correspondientes. De acuerdo con la teoría de placas, dichas condiciones pueden clasificarse en dos tipos fundamentales: condiciones de Dirichlet, que imponen el valor de la función (desplazamiento transversal), y condiciones de Neumann (o de von Neumann), que imponen valores sobre las derivadas de la función, es decir, sobre las razones de cambio (como pendientes o momentos).

Las condiciones de contorno que deben aplicarse al problema dependen de las condiciones físicas de apoyo de la placa que se desea modelar. En la teoría de losas, al igual que en la teoría de vigas, se reconocen tres tipos fundamentales de condiciones de contorno: empotramiento, apoyo simple y borde libre, tal como se ilustran en las figuras siguientes.

La misma carga y las mismas dimensiones pueden producir deflexiones distintas si cambia la forma en que está sujeta la placa. Por eso se identifica primero cada borde: algunos impiden el desplazamiento, otros impiden también el giro y otros no transmiten acciones de apoyo.

### 9.1. Apoyo empotrado

Un apoyo empotrado corresponde a una condición física en la que la losa se encuentra rígidamente confinada dentro de un soporte de elevada rigidez, el cual restringe por completo todos sus grados de libertad tanto traslacionales como rotacionales. Es decir, la losa no puede desplazarse ni girar en dicho borde, tal como se muestra en la imagen siguiente.

Bajo estas condiciones, si el borde empotrado está definido por la ecuación $x = a$, entonces la deflexión vertical $w(a,y)$ será necesariamente igual a cero, y el giro en dirección normal al borde, representado por $\partial w(a,y)/\partial x$, también será igual a cero:

$$ \left.\omega\right|_{x=a} = 0 $$

$$ \left.\frac{\partial\omega}{\partial x}\right|_{x=a} = 0 $$

<script type="text/tikz">
\begin{tikzpicture}[scale=0.90, line cap=round, line join=round]
    \definecolor{plateLav}{RGB}{206,204,230}
    \definecolor{hatchLav}{RGB}{186,188,228}

    % --- 1. Achurado manual de la seccion del muro empotrado ---
    \begin{scope}
        \clip (0.00, 0.00) -- (1.90, 0.00) -- (1.90, 1.04) -- (1.22, 1.04)
            -- (1.22, 1.76) -- (1.90, 1.76) -- (1.90, 2.82) -- (0.00, 2.82) -- cycle;
        \foreach \k in {-1.90,-1.80,...,2.90} {
            \draw[line width=0.40pt, hatchLav] (0.00, \k) -- (2.10, {\k + 2.10});
        }
    \end{scope}

    % --- 2. Cara frontal de la placa empotrada (relleno lila suave) ---
    \fill[plateLav] (1.22, 1.04) -- (7.70, 1.04) -- (7.70, 1.76) -- (1.22, 1.76) -- cycle;

    % --- 3. Contorno del muro de empotramiento ---
    % Seccion frontal
    \draw[line width=0.90pt, black]
        (0.00, 0.00) -- (1.90, 0.00) -- (1.90, 1.04) -- (1.22, 1.04)
        -- (1.22, 1.76) -- (1.90, 1.76) -- (1.90, 2.82) -- (0.00, 2.82) -- cycle;
    % Cara superior del muro y arista vertical trasera visible
    \draw[line width=0.90pt, black]
        (0.00, 2.82) -- (2.25, 4.12) -- (4.15, 4.12) -- (1.90, 2.82);
    \draw[line width=0.90pt, black] (4.15, 4.12) -- (4.15, 3.06);
    % Arista inferior derecha del muro (visible hasta intersectar la placa)
    \draw[line width=0.90pt, black] (1.90, 0.00) -- (3.70, 1.04);

    % --- 4. Contorno de la placa (cara frontal, superior y lateral derecha) ---
    % Ranura de empotramiento reforzada
    \draw[line width=1.15pt, black] (1.90, 1.04) -- (1.22, 1.04) -- (1.22, 1.76) -- (1.90, 1.76);
    % Cuerpo de la placa
    \draw[line width=0.90pt, black]
        (1.22, 1.04) -- (7.70, 1.04) -- (7.70, 1.76) -- (1.22, 1.76);
    \draw[line width=0.90pt, black]
        (1.90, 1.76) -- (4.15, 3.06) -- (9.95, 3.06) -- (7.70, 1.76);
    \draw[line width=0.90pt, black]
        (7.70, 1.04) -- (9.95, 2.34) -- (9.95, 3.06);
\end{tikzpicture}
</script>

Figura 19: Placa con borde empotrado.

En el empotramiento se imponen dos condiciones diferentes. La primera evita que la placa suba o baje en el borde; la segunda impide que allí cambie su inclinación normal. La restricción del giro es lo que diferencia este apoyo del simple.

---

### 9.2. Apoyo simple

Un apoyo simple es aquel que restringe únicamente la deflexión transversal del extremo de la losa, pero permite libremente el giro del elemento en ese borde. En la figura siguiente se presenta una representación idealizada de este tipo de condición de apoyo, aplicada al caso de losas planas.

Una característica fundamental de este tipo de apoyo es que el momento flector en el borde apoyado es igual a cero, debido a que el giro no está restringido. Es decir, al no existir impedimento rotacional, no se generan momentos resistentes en el borde. Las expresiones matemáticas que describen esta condición física se indican a continuación:

$$ \left.\omega\right|_{x=a} = 0 $$

$$ \left.\left(\frac{\partial^2 w}{\partial x^2} + \nu\frac{\partial^2 w}{\partial y^2}\right)\right|_{x=a} = 0 $$

<script type="text/tikz">
\begin{tikzpicture}[scale=0.90, line cap=round, line join=round]
    \definecolor{plateLav}{RGB}{152,152,204}
    \definecolor{hatchLav}{RGB}{186,188,228}

    % --- 1. Achurado manual de la seccion del apoyo con ranura en V ---
    \begin{scope}
        \clip (0.00, 0.00) -- (1.88, 0.00) -- (1.88, 0.66) -- (1.48, 1.37)
            -- (1.88, 2.08) -- (1.88, 2.76) -- (0.00, 2.76) -- cycle;
        \foreach \k in {-1.90,-1.80,...,2.90} {
            \draw[line width=0.40pt, hatchLav] (0.00, \k) -- (2.10, {\k + 2.10});
        }
    \end{scope}

    % --- 2. Cara frontal de la placa biselada (relleno lila medio) ---
    \fill[plateLav]
        (1.48, 1.37) -- (2.40, 1.72) -- (7.72, 1.72) -- (7.72, 1.02) -- (2.40, 1.02) -- cycle;

    % --- 3. Contorno del apoyo con ranura en V ---
    % Seccion frontal
    \draw[line width=0.90pt, black]
        (0.00, 0.00) -- (1.88, 0.00) -- (1.88, 0.66) -- (1.48, 1.37)
        -- (1.88, 2.08) -- (1.88, 2.76) -- (0.00, 2.76) -- cycle;
    % Cara superior del apoyo y borde trasero de la ranura en V
    \draw[line width=0.90pt, black]
        (0.00, 2.76) -- (2.25, 4.06) -- (4.13, 4.06) -- (1.88, 2.76);
    \draw[line width=0.90pt, black] (4.13, 4.06) -- (4.13, 3.38) -- (3.73, 2.67);
    % Aristas oblicuas de la ranura superior y linea de apoyo articulado
    \draw[line width=0.90pt, black] (1.88, 2.08) -- (4.13, 3.38);
    \draw[line width=0.90pt, black] (1.48, 1.37) -- (3.73, 2.67);
    % Aristas oblicuas inferiores del apoyo (visibles bajo la placa)
    \draw[line width=0.90pt, black] (1.88, 0.66) -- (2.503, 1.020);
    \draw[line width=0.90pt, black] (1.88, 0.00) -- (3.645, 1.020);

    % --- 4. Contorno de la placa biselada ---
    \draw[line width=0.90pt, black]
        (1.48, 1.37) -- (2.40, 1.72) -- (7.72, 1.72) -- (7.72, 1.02) -- (2.40, 1.02) -- cycle;
    % Bisel superior y superficie plana superior de la placa
    \draw[line width=0.90pt, black] (2.40, 1.72) -- (4.65, 3.02);
    \draw[line width=0.90pt, black] (3.73, 2.67) -- (4.65, 3.02) -- (9.97, 3.02) -- (7.72, 1.72);
    % Cara lateral derecha de la placa
    \draw[line width=0.90pt, black] (7.72, 1.02) -- (9.97, 2.32) -- (9.97, 3.02);
\end{tikzpicture}
</script>

Figura 20: Placa con apoyo simple.

Aquí la deflexión sigue siendo nula sobre el apoyo, pero la pendiente puede ser distinta de cero. La segunda ecuación corresponde al momento de flexión asociado al borde. De esta manera, la placa puede girar localmente sin que el apoyo aplique un momento resistente idealizado.

---

### 9.3. Borde libre

La tercera condición básica de apoyo en placas planas corresponde al borde libre. Esta condición no impone restricciones directas sobre los grados de libertad (desplazamientos), es decir, no existen condiciones de Dirichlet propiamente dichas. Sin embargo, sí establece condiciones sobre las fuerzas internas, específicamente los cortantes y momentos flectores, los cuales deben anularse a lo largo del borde libre. En este caso, dichas funciones toman valores iguales a cero, tal como se indica a continuación:

$$ \left.M_x\right|_{x=a} = 0 $$

$$ \left.M_{xy}\right|_{x=a} = 0 $$

$$ \left.Q_x\right|_{x=a} = 0 $$

<script type="text/tikz">
\begin{tikzpicture}[scale=0.88, line cap=round, line join=round]
    \definecolor{plateLav}{RGB}{152,152,204}

    % --- 1. Cara frontal de la placa libre (relleno lila medio) ---
    \fill[plateLav] (0.00, 0.00) -- (7.60, 0.00) -- (7.60, 0.85) -- (0.00, 0.85) -- cycle;

    % --- 2. Contorno completo de la placa ---
    \draw[line width=1.00pt, black] (0.00, 0.00) -- (7.60, 0.00) -- (7.60, 0.85) -- (0.00, 0.85) -- cycle;
    \draw[line width=1.00pt, black] (0.00, 0.85) -- (3.03, 2.66) -- (10.63, 2.66) -- (7.60, 0.85);
    \draw[line width=1.00pt, black] (7.60, 0.00) -- (10.63, 1.81) -- (10.63, 2.66);
\end{tikzpicture}
</script>

Figura 21: Placa con borde libre.

Un borde libre puede desplazarse y girar sin una restricción directa impuesta por un apoyo. Las condiciones se expresan entonces mediante las acciones que actúan sobre él. Al estudiar un borde libre en la formulación de Kirchhoff también debe tenerse presente la cortante equivalente $V_x$ desarrollada en la sección 8, que reúne la cortante y la contribución del momento torsor.

---

## 10. Analogía entre la Teoría de Placas y la Teoría de Vigas

Como se ha señalado a lo largo del desarrollo de la teoría de placas, existen evidentes paralelismos entre la teoría de vigas de Bernoulli y la teoría de placas formulada por Kirchhoff. En efecto, esta última puede considerarse como una extensión o generalización natural de la teoría de vigas de Bernoulli, ya que ambas comparten hipótesis fundamentales en su formulación, tales como la suposición de secciones planas que permanecen planas y normales a la superficie media después de la deformación. A continuación, se muestran resumidas las ecuaciones más importantes:

| Función | Teoría de placas | Teoría de vigas |
| :--- | :--- | :--- |
| Cortantes | $\dfrac{\partial Q_x}{\partial x}+\dfrac{\partial Q_y}{\partial y}+q=0$ | $\dfrac{\partial Q}{\partial x}+q=0$ |
| Momentos y cortantes | $\dfrac{\partial M_x}{\partial x}+\dfrac{\partial M_{yx}}{\partial y}-Q_x=0$ | $\dfrac{\partial M}{\partial x}-Q=0$ |
| Relación de momentos y curvaturas | $M_x=-D\left(\dfrac{\partial^2 w}{\partial x^2}+\nu\dfrac{\partial^2 w}{\partial y^2}\right)$<br>$M_y=-D\left(\dfrac{\partial^2 w}{\partial y^2}+\nu\dfrac{\partial^2 w}{\partial x^2}\right)$<br>$M_{xy}=-M_{yx}=D(1-\nu)\dfrac{\partial^2 w}{\partial x\partial y}$ | $M=EI\dfrac{\partial^2 w}{\partial x^2}$ |
| Relación entre la deflexión y la carga distribuida | $\dfrac{\partial^4 w}{\partial x^4}+2\dfrac{\partial^4 w}{\partial x^2\partial y^2}+\dfrac{\partial^4 w}{\partial y^4}=\dfrac{q}{D}$ | $\dfrac{\partial^4 w}{\partial x^4}=\dfrac{q}{EI}$ |

En una viga, la deflexión se describe principalmente en función de una coordenada, mientras que en una placa intervienen dos. Por eso las ecuaciones de placas incluyen derivadas respecto de $x$ e $y$ y un momento torsor adicional. La relación entre carga, cortante, momento y deformación sigue el mismo razonamiento de equilibrio y flexión que se aprende en la teoría de vigas, pero extendido a una superficie.

---

## 11. Solución de Navier para Losas Apoyadas

Si la carga distribuida se puede expresar como una función de dos variables arbitraria, es posible realizar un tratamiento previo de esta función y aprovechar los resultados obtenidos anteriormente usando el principio de superposición. Siguiendo esa lógica, sea $q$ la carga distribuida sobre la losa:

$$ q = f(x,y) $$

Es posible representar esta función arbitraria como una combinación lineal del producto de senos en dirección $x$ y en dirección $y$, tal como se muestra a continuación:

$$ f(x,y) = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty} a_{mn}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right) $$

En una placa rectangular, $a$ y $b$ representan las longitudes de sus lados; $m$ y $n$ son índices enteros. Cada producto de senos describe una forma de variación de la carga sobre la superficie. Los coeficientes $a_{mn}$ indican cuánto participa cada una de esas formas en la carga que se quiere representar.

Esta expresión cumple de forma automática con las condiciones de contorno del problema analizado, pues es cero en los apoyos y también cumple con la condición de momentos cero en los apoyos; basta con realizar la diferenciación y sustituir los valores respectivos.

Como se puede apreciar, la única incógnita resultan ser los coeficientes de cada término, pero estos se pueden encontrar de forma práctica recordando las propiedades de las funciones ortogonales. A continuación, se presentan tales propiedades:

$$ \int_0^b \sin\left(\frac{n\pi y}{b}\right)\sin\left(\frac{n'\pi y}{b}\right)dy = \frac{b}{2} \quad\text{cuando } n = n' $$

$$ \int_0^b \sin\left(\frac{n\pi y}{b}\right)\sin\left(\frac{n'\pi y}{b}\right)dy = 0 \quad\text{cuando } n \ne n' $$

La ortogonalidad significa que, al multiplicar e integrar dos funciones seno de índices distintos, el resultado se anula. Esto permite separar un coeficiente concreto de todos los demás: al integrar, desaparecen los términos que no comparten su índice.

Multiplicando la ecuación de interés por la función $\sin(n'\pi y / b)$ a ambos lados e integrando de $0$ a $b$, se tiene la siguiente expresión:

$$ \int_0^b f(x,y)\sin\left(\frac{n'\pi y}{b}\right)dy = \sum_{m=1}^{\infty} a_{mn'}\frac{b}{2}\sin\left(\frac{m\pi x}{a}\right) $$

Si esta expresión se multiplica ahora por la función $\sin(m'\pi y / b)$, se obtiene una expresión que brinda los coeficientes buscados en función de una integral doble:

$$ \int_0^a\int_0^b f(x,y)\sin\left(\frac{m'\pi x}{a}\right)\sin\left(\frac{n'\pi y}{b}\right)dx\,dy = \frac{ab}{4}a_{m'n'} $$

Finalmente, despejando se tiene la expresión general de los coeficientes del desarrollo en series trigonométricas:

$$ a_{m'n'} = \frac{4}{ab}\int_0^a\int_0^b f(x,y)\sin\left(\frac{m'\pi x}{a}\right)\sin\left(\frac{n'\pi y}{b}\right)dx\,dy $$

El proceso consta de dos integraciones: una recorre la longitud de la placa y la otra su ancho. La carga aparece dentro de la integral, de modo que la expresión sirve para cargas que varíen con la posición. Con los coeficientes calculados se puede reconstruir la carga en forma de serie.

El problema puede reducirse a resolver infinitas ecuaciones diferenciales de segundo orden, de la siguiente forma:

$$ \frac{\partial^4 w}{\partial x^4} + 2\frac{\partial^4 w}{\partial x^2\partial y^2} + \frac{\partial^4 w}{\partial y^4} = \frac{q_0}{D}\sin\!\left(\tfrac{m\pi x}{a}\right)\sin\!\left(\tfrac{n\pi y}{b}\right), \qquad \forall m,n \in \mathbb{N} $$

Y debido a la linealidad de la ecuación diferencial analizada, la solución del problema será la sumatoria de las soluciones parciales de cada una de las ecuaciones diferenciales. Sea $w_{m,n}$ la solución asociada a la ecuación diferencial correspondiente a estos enteros; entonces, la solución general será la sumatoria de estas, es decir:

$$ w = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty} w_{m,n} $$

La superposición puede utilizarse porque la ecuación es lineal respecto de $w$. Si se encuentra la respuesta de la placa a cada término de la carga, la suma de esas respuestas permite obtener la respuesta a la carga representada por la serie completa.

Pero la solución de la ecuación diferencial analizada fue resuelta anteriormente para el caso más general, y tiene la siguiente forma:

$$ w_{m,n} = \frac{q_0}{\pi^4 D\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right) $$

Finalmente, la solución general de la deflexión de una placa plana con apoyos simples sometida a una carga distribuida arbitraria se puede expresar de la siguiente forma:

$$ w = \frac{1}{\pi^4 D}\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}\frac{a_{mn}}{\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right) $$

Así, el problema se reduce al cálculo de ciertas integrales que dependen de la función de carga y de funciones senoidales, algo que siempre es posible, incluso mediante el uso de métodos numéricos.

---

### 11.1. Ejemplo: Caso de una carga uniformemente distribuida

Sea una placa rectangular simplemente apoyada en sus cuatro extremos sometida a una carga distribuida uniformemente de intensidad $q_0$:

$$ f(x,y) = q_0 $$

Con la finalidad de aplicar el método de Navier, se deben calcular los coeficientes de la serie trigonométrica de acuerdo con las expresiones deducidas anteriormente. Estos coeficientes se obtienen de la siguiente integral:

$$ A_{mn} = \frac{1}{ab}\int_0^a\int_0^b q_0\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right)dx\,dy $$

La intensidad $q_0$ es constante en toda la superficie y puede sacarse fuera de la integral. Esto permite separar el cálculo en una integral respecto de $x$ y otra respecto de $y$:

$$ A_{mn} = \frac{4q_0}{ab}\int_0^a\int_0^b \sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right)dx\,dy $$

$$ A_{mn} = \frac{4q_0}{ab}\int_0^a \sin\left(\frac{m\pi x}{a}\right)dx \int_0^b \sin\left(\frac{n\pi y}{b}\right)dy $$

$$ A_{mn} = \frac{4q_0}{ab}\left[\cos\left(\frac{m\pi x}{a}\right)\frac{a}{m\pi}\right]_0^a \left[\cos\left(\frac{n\pi y}{b}\right)\frac{b}{n\pi}\right]_0^b $$

$$ A_{mn} = \frac{4q_0 ab}{abmn\pi^2}\left.\cos\left(\frac{m\pi x}{a}\right)\right|_0^a \left.\cos\left(\frac{n\pi y}{b}\right)\right|_0^b $$

$$ A_{mn} = \frac{4q_0}{mn\pi^2}[\cos(m\pi) - 1][\cos(n\pi) - 1] $$

$$ A_{mn} = \frac{169q_0}{mn\pi^2},\quad m,n\text{ impares}; \qquad A_{mn} = 0,\quad m\text{ o }n\text{ pares} $$

La deflexión de la placa rectangular se puede obtener sustituyendo estos coeficientes en la serie trigonométrica, obteniendo:

$$ \omega = \frac{1}{\pi^4 D}\cdot\frac{16q_0}{\pi^2}\sum_m\sum_n \frac{1}{\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right) $$

$$ \omega = \frac{16q_0}{\pi^6 D}\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}\frac{1}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right) $$

$$ x = \frac{a}{2}, \qquad y = \frac{b}{2} $$

$$ \omega = \frac{16q_0}{\pi^6 D}\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}\frac{1}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi}{2}\right)\sin\left(\frac{n\pi}{2}\right) $$

Las dos últimas expresiones corresponden a evaluar la serie en el centro geométrico de la placa. En ese punto se reemplazan $x$ por $a/2$ e $y$ por $b/2$; por eso los argumentos de los senos pasan a ser múltiplos de $\pi/2$.

#### Cálculo de los momentos flectores en dirección X

$$ \frac{\partial^2\omega}{\partial x^2} = \frac{16q_0}{\pi^6 D}\sum_m\sum_n \left(\frac{m\pi}{a}\right)^2\frac{1}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\!\left(\tfrac{m\pi x}{a}\right)\sin\!\left(\tfrac{n\pi y}{b}\right) $$

$$ \frac{\partial^2\omega}{\partial y^2} = \frac{16q_0}{\pi^6 D}\sum_m\sum_n \left(\frac{n\pi}{b}\right)^2\frac{1}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\!\left(\tfrac{m\pi x}{a}\right)\sin\!\left(\tfrac{n\pi y}{b}\right) $$

$$ \frac{\partial^2\omega}{\partial x^2} + \nu\frac{\partial^2\omega}{\partial y^2} = \frac{16q_0}{\pi^6 D}\sum_m\sum_n \frac{\pi^2}{mn}\frac{\left(\frac{m^2}{a^2}+\nu\frac{n^2}{b^2}\right)}{\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\!\left(\tfrac{m\pi x}{a}\right)\sin\!\left(\tfrac{n\pi y}{b}\right) $$

$$ M_x = -\frac{16q_0}{\pi^4}\sum_m\sum_n \frac{\left(\frac{m^2}{a^2}+\nu\frac{n^2}{b^2}\right)}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\!\left(\tfrac{m\pi x}{a}\right)\sin\!\left(\tfrac{n\pi y}{b}\right) $$

$$ x = \frac{a}{2}, \qquad y = \frac{b}{2} $$

$$ (M_x)_{\max} = -\frac{16q_0}{\pi^4}\sum_m\sum_n \frac{\left(\frac{m^2}{a^2}+\nu\frac{n^2}{b^2}\right)}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\!\left(\tfrac{m\pi}{2}\right)\sin\!\left(\tfrac{n\pi}{2}\right) $$

#### Cálculo de los momentos flectores en dirección Y

$$ M_y = D\left(\frac{\partial^2\omega}{\partial y^2} + \nu\frac{\partial^2\omega}{\partial x^2}\right) $$

$$ M_y = -\frac{16q_0}{\pi^4 D}\sum_m\sum_n \frac{\left(\nu\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)}{mn\left(\frac{m^2}{a^2}+\frac{n^2}{b^2}\right)^2}\sin\left(\frac{m\pi}{2}\right)\sin\left(\frac{n\pi}{2}\right) $$

Las expresiones de los momentos se obtienen a partir de las curvaturas de la placa, de modo que el cálculo exige derivar la serie de deflexión. Cuando se trabaja con una serie truncada, cada término incluido aporta una parte de la respuesta. Cuantos más términos se conserven, mejor puede representarse la distribución, siempre que la serie converja en la región evaluada.

---

## 12. Método Solución de Levy

El método de Levy es aplicable a losas rectangulares que tienen apoyos simples en dos caras opuestas, mientras que las caras restantes pueden estar sometidas a diferentes condiciones de contorno.

En el método de Navier se utilizaron funciones seno en las dos direcciones, lo cual resulta adecuado cuando los cuatro lados tienen apoyos simples. Aquí se aprovechan los apoyos simples de dos lados opuestos y se deja una función por determinar en la otra dirección. Así pueden estudiarse otras combinaciones de condiciones de borde.

Sea la ecuación diferencial que gobierna el comportamiento de una placa con las condiciones dadas:

$$ \frac{\partial^4 w}{\partial x^4} + 2\frac{\partial^4 w}{\partial x^2\partial y^2} + \frac{\partial^4 w}{\partial y^4} = \frac{q}{D} $$

El método parte de la suposición de que la deflexión $w$ puede ser descompuesta en dos partes $w_1$ y $w_2$:

$$ w = w_1 + w_2 $$

La primera parte es una solución particular que representa la deflexión de una franja de losa paralela al eje $x$; esta solución particular tiene la forma:

$$ w_1 = \frac{q}{24D}(x^4 - 2ax^3 + a^3 x) $$

El término $w_1$ depende solamente de $x$ y representa una solución particular de la ecuación con carga. Al añadir $w_2$ se puede ajustar la respuesta para satisfacer las condiciones que faltan en los bordes. La descomposición no significa que la placa se divida físicamente en dos partes: se trata de dos funciones que, al sumarse, forman la deflexión buscada.

Una vez que se tiene una solución particular, la solución complementaria debe satisfacer la siguiente ecuación homogénea:

$$ \frac{\partial^4 w_2}{\partial x^4} + 2\frac{\partial^4 w_2}{\partial x^2\partial y^2} + \frac{\partial^4 w_2}{\partial y^4} = 0 $$

La carga ya está incluida en $w_1$. Por eso, en la ecuación de $w_2$ el miembro derecho es cero. El objetivo de la solución complementaria es completar la forma de la deflexión sin agregar una carga distinta a la que se está analizando.

La solución complementaria puede suponerse como la superposición de funciones seno que se anulan en los apoyos multiplicadas por funciones de $y$, tal como se muestra a continuación:

$$ w_2 = \sum_{m=1}^{\infty} Y_m(y)\sin\left(\frac{m\pi x}{a}\right) \qquad\text{con } m = 1, 3, 5, \ldots $$

Cada seno se anula en los dos lados donde $x = 0$ y $x = a$. La función $Y_m(y)$ queda por determinar y permite adaptar la deflexión a las condiciones de los otros bordes. Esta es la diferencia práctica respecto de la serie doble de Navier.

Sustituyendo esta expresión en la ecuación diferencial homogénea, se obtiene:

$$ \sum_{m=1}^{\infty}\left(Y_m^{IV} - 2\frac{m^2\pi^2}{a^2}Y_m'' + \frac{m^4\pi^4}{a^4}Y_m\right)\sin\left(\frac{m\pi x}{a}\right) = 0 $$

Esto implica que el término dentro del paréntesis debe ser igual a cero, es decir:

$$ Y_m^{IV} - 2\frac{m^2\pi^2}{a^2}Y_m'' + \frac{m^4\pi^4}{a^4}Y_m = 0 $$

La ecuación de la placa se convierte así en una ecuación diferencial para cada función $Y_m$. Las derivadas indicadas con primas corresponden a derivadas respecto de $y$. Se resuelve una ecuación para cada valor del índice $m$ y luego se reúnen los resultados mediante la suma.

La solución general de esta ecuación se obtiene como una combinación lineal de funciones seno y coseno, además del producto de funciones lineales por el seno y el coseno, tal como se muestra a continuación:

$$ \begin{aligned}
Y_m = \frac{qa^4}{D}\Bigl[
&\phantom{+\;} A_m\cosh\!\left(\tfrac{m\pi y}{a}\right) + B_m\tfrac{m\pi y}{a}\sinh\!\left(\tfrac{m\pi y}{a}\right) \\[8pt]
&+\; C_m\sinh\!\left(\tfrac{m\pi y}{a}\right) + D_m\tfrac{m\pi y}{a}\cosh\!\left(\tfrac{m\pi y}{a}\right)
\Bigr]
\end{aligned} $$

Las funciones $\cosh$ y $\sinh$ se llaman coseno hiperbólico y seno hiperbólico. Aparecen al resolver la ecuación diferencial correspondiente a $Y_m$; su forma es distinta de la de los senos que se utilizaron para satisfacer los apoyos en la dirección $x$. Los coeficientes $A_m$, $B_m$, $C_m$ y $D_m$ deben determinarse con las condiciones del problema.

Debido a que el problema analizado es simétrico con respecto al eje $y$, y a que se está estudiando una losa simplemente apoyada, los términos impares de la solución deben desaparecer, es decir, $C_m = 0$ y $D_m = 0$. Así, la solución general del problema es:

$$ \begin{aligned}
w &= \frac{q}{24D}(x^4 - 2ax^3 + a^3 x) \\[8pt]
&\quad + \frac{qa^4}{D}\sum_{m=1}^{\infty}\left[A_m\cosh\!\left(\tfrac{m\pi y}{a}\right) + B_m\tfrac{m\pi y}{a}\sinh\!\left(\tfrac{m\pi y}{a}\right)\right]\sin\!\left(\tfrac{m\pi x}{a}\right)
\end{aligned} $$

Las otras dos constantes de integración se pueden obtener aplicando las condiciones de contorno para los extremos siguientes, es decir:

$$ w = 0, \qquad \frac{\partial^2 w}{\partial y^2} = 0 $$

Estas condiciones expresan que, en los bordes considerados, la deflexión es nula y también se anula la curvatura que interviene en la relación con el momento de apoyo. Al sustituirlas se obtienen ecuaciones para los coeficientes de cada término de la serie.

Para poder hacer esto, es conveniente expresar la solución particular del problema como una serie de senos. Esto da como resultado la siguiente expresión:

$$ \frac{q}{24D}(x^4 - 2ax^3 + a^3 x) = \frac{4qa^4}{\pi^5 D}\sum_{m=1}^{\infty}\frac{1}{m^5}\sin\left(\frac{m\pi x}{a}\right) $$

Sustituyendo esta expresión en la deflexión se tiene:

$$ w = \frac{qa^4}{D}\sum_{m=1}^{\infty}\left[\frac{4}{\pi^5 m^5} + A_m\cosh\!\left(\tfrac{m\pi y}{a}\right) + B_m\tfrac{m\pi y}{a}\sinh\!\left(\tfrac{m\pi y}{a}\right)\right]\sin\!\left(\tfrac{m\pi x}{a}\right) $$

Expresar todos los términos mediante los mismos senos permite aplicar una condición de borde a cada modo por separado. Es la misma idea de ortogonalidad utilizada antes, ahora para calcular las constantes que aparecen en la solución complementaria.

Al aplicar las condiciones de contorno cuando $y = b$, se requerirá darle el siguiente nombre a esta expresión:

$$ \frac{m\pi b}{2a} = \alpha_m $$

Sustituyendo las expresiones dadas se obtiene un sistema de ecuaciones algebraicas en el que las variables son los coeficientes $A_m$ y $B_m$:

$$ \frac{4}{\pi^5 m^5} + A_m\cosh(\alpha_m) + \alpha_m B_m\sinh(\alpha_m) = 0 $$

$$ (A_m + 2B_m)\cosh(\alpha_m) + \alpha_m B_m\sinh(\alpha_m) = 0 $$

El parámetro $\alpha_m$ reúne el índice $m$ y las dimensiones $a$ y $b$. Así se evita repetir la misma fracción en cada término del sistema. Las dos ecuaciones proporcionan la información necesaria para determinar $A_m$ y $B_m$ en cada modo.

Resolviendo este sistema se obtienen los coeficientes:

$$ A_m = -\frac{2(\alpha_m\tanh\alpha_m + 2)}{\pi^5 m^5\cosh\alpha_m} $$

$$ B_m = \frac{2}{\pi^5 m^5\cosh\alpha_m} $$

Sustituyendo estos resultados en la serie se obtiene lo siguiente:

$$ \begin{aligned}
w = \frac{4qa^4}{\pi^5 D}\sum_{m=1,3,5,\ldots}^{\infty}\frac{1}{m^5}\Biggl[
&\phantom{+\;} 1 - \frac{\alpha_m\tanh\alpha_m + 2}{2\cosh\alpha_m}\cosh\!\left(\tfrac{2\alpha_m y}{b}\right) \\[8pt]
&+\; \frac{\alpha_m}{2\cosh\alpha_m}\frac{2y}{b}\sinh\!\left(\tfrac{2\alpha_m y}{b}\right)
\Biggr]\sin\!\left(\tfrac{m\pi x}{a}\right)
\end{aligned} $$

La deflexión máxima se da en el centro de la placa, es decir cuando $x = a/2$ y $y = 0$:

$$ w_{\max} = \frac{4qa^4}{\pi^5 D}\sum_{m=1,3,5,\ldots}^{\infty}\frac{(-1)^{(m-1)/2}}{m^5}\left(1 - \frac{\alpha_m\tanh\alpha_m + 2}{2\cosh\alpha_m}\right) $$

Para evaluar la serie en el centro se sustituye $x = a/2$ e $y = 0$. En particular, la función seno de la dirección $x$ alterna de signo cuando se consideran índices impares sucesivos. La deflexión máxima se obtiene sumando las contribuciones de esos términos.

Separando el segundo término de la expresión obtenemos una serie que nos da la deflexión máxima en el centro de la placa:

$$ w_{\max} = \frac{5}{384}\frac{qa^4}{D} - \frac{4qa^4}{\pi^5 D}\sum_{m=1,3,5,\ldots}^{\infty}\frac{(-1)^{(m-1)/2}}{m^5}\cdot\frac{\alpha_m\tanh\alpha_m + 2}{2\cosh\alpha_m} $$

La primera parte de esta expresión depende de $qa^4/D$. La segunda contiene una serie que modifica esa contribución de acuerdo con las dimensiones de la placa y la forma en que se satisfacen sus condiciones de borde.

Para el caso de una placa cuadrada y tomando los siguientes términos, se tiene que:

$$ \alpha_1 = \frac{\pi}{2}, \qquad \alpha_3 = \frac{3\pi}{2} $$

$$ w_{\max} = \frac{5}{384}\frac{qa^4}{D} - \frac{4qa^4}{\pi^5 D}(0.68562 - 0.00025 + \cdots) = 0.00406\frac{qa^4}{D} $$

El resultado está expresado mediante un coeficiente numérico multiplicado por $qa^4/D$. Para una placa con dimensiones, material, espesor y carga conocidos, basta evaluar esa relación con unidades coherentes.
