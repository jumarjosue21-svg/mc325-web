<!-- INICIO CONTENIDO ARTICULO 6 -->
> **Resumen.** Se presenta el análisis de vigas de sección variable, es decir, con rigidez a la flexión $EI(x)$ no constante, mediante la integración sucesiva de la cadena carga–cortante–momento–giro–deflexión. Se desarrollan las relaciones diferenciales de la viga, la integración numérica con la regla del trapecio y la determinación del giro inicial, y el método de integración gráfica con el tratamiento de escalas. Al final se resuelven tres problemas: una viga simplemente apoyada con carga triangular (integración numérica, con su tabla de resultados y sus diagramas) y dos voladizos de sección variable (Problemas 35 y 36), una viga troncocónica con carga concentrada y una viga rectangular de altura variable con carga uniforme y concentrada. En los voladizos se determina la sección del esfuerzo normal máximo, el giro y la deflexión del extremo libre, y cuántas veces son mayores respecto de una viga de sección constante igual a la máxima. Resultados: en el Problema 35 el esfuerzo máximo aparece en $x = 3L/4$ y las razones son $2$, $3$ y $5$; en el Problema 36 aparece en $x = 0,4L$ y las razones son $1,05$, $2,08$ y $2,91$. El contenido se basa en las notas de clase «Elementos de sección variable» de Resistencia de Materiales II (Facultad de Ingeniería Mecánica, Universidad Nacional de Ingeniería, Lima, Perú).

## 1. Introducción

En las vigas prismáticas la rigidez a la flexión $EI$ es constante y las deflexiones se obtienen integrando en forma cerrada las relaciones diferenciales de la viga. Cuando la sección cambia a lo largo del eje, $I = I(x)$, el cociente $M/EI(x)$ deja de ser un polinomio simple y su doble integración rara vez tiene una expresión analítica cómoda. Las notas de clase [1] resuelven esta dificultad integrando punto a punto, de forma numérica o gráfica. Además, el esfuerzo normal máximo no tiene por qué estar donde el momento flector es máximo, porque la sección también cambia.

Este documento sigue el siguiente orden: relaciones diferenciales (sección 2), integración numérica (sección 3), integración gráfica con escalas (sección 4) y, al final, los problemas resueltos (sección 5): el ejemplo de la viga simplemente apoyada y los Problemas 35 y 36 de voladizos. Los párrafos marcados como **Nota** son complementos a las notas originales.

> **Nota.** La Tabla 1 da $I(x)$ para las secciones más comunes. Los exponentes $3$ y $4$ hacen que la inercia cambie muy rápido: un cono cuyo diámetro se duplica tiene $16$ veces más inercia.

**Tabla 1:** Momento de inercia según el tipo de variación.

| Sección | $I(x)$ | Observación |
| --- | --- | --- |
| Rectangular, ancho $b$ constante, altura $h(x)$ | $bh^3/12$ | Si $h$ es lineal, $I \propto x^3$ |
| Rectangular, altura $h$ constante, ancho $b(x)$ | $bh^3/12$ | Si $b$ es lineal, $I \propto x$ |
| Circular de radio $r(x)$ | $\pi r^4/4$ | Si $r$ es lineal (cono), $I \propto x^4$ |
| Tubular (radios $R$ y $r$) | $\pi(R^4 - r^4)/4$ | Varía si cambia $R$ o $r$ |
| Escalonada | $I_1, I_2, \dots$ | Constante por tramos |

## 2. Relaciones diferenciales de la viga

Las relaciones diferenciales entre las fuerzas internas de una viga, como las cortantes y los momentos flectores, y las cargas distribuidas sobre ella se pueden establecer mediante las siguientes ecuaciones.

Para las fuerzas cortantes y las cargas distribuidas:

$$\frac{\mathrm{d}V}{\mathrm{d}x} = -q \tag{1}$$

$$V = -\int q\,\mathrm{d}x + V_0 \tag{2}$$

Mientras que, en el caso de los momentos flectores, la relación se vincula con las fuerzas cortantes:

$$\frac{\mathrm{d}M}{\mathrm{d}x} = V \tag{3}$$

$$M = \int V\,\mathrm{d}x + M_0 \tag{4}$$

Estas expresiones muestran que es posible obtener las fuerzas cortantes a partir del diagrama de cargas distribuidas por integración, mientras que los momentos flectores se obtienen integrando directamente el diagrama de fuerzas cortantes.

De la teoría de vigas se sabe que la ecuación diferencial que liga la deflexión $w$ con la carga uniformemente distribuida es

$$\frac{\mathrm{d}^4 w}{\mathrm{d}x^4} = -\frac{q}{EI} \tag{5}$$

Si la rigidez flexional es constante, es posible integrar solo la distribución de cargas y obtener las fuerzas cortantes dentro del elemento:

$$\frac{\mathrm{d}^3 w}{\mathrm{d}x^3} = -\frac{1}{EI}\int q\,\mathrm{d}x + \frac{V_0}{EI} \tag{6}$$

$$V = EI\,\frac{\mathrm{d}^3 w}{\mathrm{d}x^3} = -\int q\,\mathrm{d}x + V_0 \tag{7}$$

De forma análoga, se integran las cortantes para obtener el diagrama de momentos flectores:

$$EI\,\frac{\mathrm{d}^3 w}{\mathrm{d}x^3} = V; \qquad M = EI\,\frac{\mathrm{d}^2 w}{\mathrm{d}x^2} = \int V\,\mathrm{d}x + M_0 \tag{8}$$

Una vez obtenido el diagrama de momentos flectores, se establece una relación entre las curvaturas, los momentos flectores y la rigidez a la flexión. Esta relación se fundamenta en las hipótesis de Euler–Bernoulli y da lugar al denominado diagrama de momentos reducidos. Al integrar la distribución de momentos reducidos a lo largo del eje se determinan los giros:

$$\frac{\mathrm{d}^2 w}{\mathrm{d}x^2} = \frac{M}{EI} \tag{9}$$

$$\frac{\mathrm{d}w}{\mathrm{d}x} = \int \frac{M}{EI}\,\mathrm{d}x + \theta_0 \tag{10}$$

Finalmente, la deflexión en cada sección se obtiene integrando la ecuación de los giros:

$$\frac{\mathrm{d}w}{\mathrm{d}x} = \theta \tag{11}$$

$$w = \int \theta\,\mathrm{d}x + w_0 \tag{12}$$

> **Nota.** Cada integración introduce una constante ($V_0, M_0, \theta_0, w_0$) que se fija con las condiciones de borde; la Tabla 2 resume dos casos. Con $EI$ variable, el único cambio respecto de una viga prismática es dividir $M$ entre $EI(x)$ punto a punto; integrar $M/EI$ para obtener $\theta$ y $w$ equivale al método de la viga conjugada [2]. En estas notas la carga se designa $q$ y la deflexión $w$; en las recurrencias de la sección 3 la carga en el punto $i$ se escribe $q_i$.

**Tabla 2:** Constantes de integración y condiciones que las fijan.

| Constante | Viga simplemente apoyada | Voladizo empotrado en $x = 0$ |
| --- | --- | --- |
| $V_0$ | $M(L) = 0$ | $V(L) = 0$ |
| $M_0$ | $M(0) = 0$ | $M(L) = 0$ |
| $\theta_0$ | $w(L) = 0$ | $\theta(0) = 0$ |
| $w_0$ | $w(0) = 0$ | $w(0) = 0$ |

## 3. Integración numérica

Se discretiza el eje en puntos $x_0 < x_1 < \dots < x_n$ y se aplica la regla del trapecio en cada intervalo, para $i = 1, \dots, n$.

Cálculo del diagrama de fuerzas cortantes a partir del diagrama de cargas:

$$V_i = V_{i-1} - 0,5\,(q_i + q_{i-1})(x_i - x_{i-1}) \tag{13}$$

Cálculo del diagrama de momentos flectores a partir del diagrama de fuerzas cortantes:

$$M_i = M_{i-1} + 0,5\,(V_i + V_{i-1})(x_i - x_{i-1}) \tag{14}$$

Cálculo de los giros a partir del diagrama de momentos flectores reducidos:

$$\theta_i = \theta_{i-1} + 0,5\left[\left(\frac{M}{EI}\right)_i + \left(\frac{M}{EI}\right)_{i-1}\right](x_i - x_{i-1}) \tag{15}$$

Cálculo de las deflexiones a partir del diagrama de giros obtenidos previamente:

$$w_i = w_{i-1} + 0,5\,(\theta_i + \theta_{i-1})(x_i - x_{i-1}) \tag{16}$$

> **Nota.** Como $V = -\int q\,\mathrm{d}x$, en la recurrencia del cortante el término del trapecio entra con signo menos; las notas originales lo escriben con signo más, pero la tabla del ejemplo sí decrece, es decir, usa el signo menos. El valor inicial $V_0$ no se obtiene del diagrama de cargas: se halla imponiendo $M(L) = 0$ sobre el momento integrado. El índice $i$ arranca en $1$, pues el paso $i = 0$ no tiene un elemento $i - 1$.

### 3.1. Giro inicial

El cálculo de los giros requiere determinar el giro inicial de la sección; este deberá ser calculado considerando que el eje $x$ debe dividir por la mitad el diagrama de deflexiones. En la Figura 1 se observa que el diagrama de giros parte inicialmente en cero, algo que es un error, pues se sabe que el giro en el apoyo izquierdo es negativo y diferente de cero. La posición del eje $x$ debe ubicarse de tal forma que el área bajo la curva de giro $A_1$ y el área sobre ella $A_2$ tengan la misma magnitud, si se considera la posición de este eje a $b$ unidades del origen. El área del rectángulo $bL$ es igual a la suma $A_1 + A_3$ y, dado que $A_1 = A_2$, el área de este rectángulo es igual a $A_2 + A_3$, es decir, el área debajo de la curva de giros. Esto se plantea a partir de la siguiente ecuación:

$$bL = \int_0^L \theta\,\mathrm{d}x \tag{17}$$

A partir de esto, se obtiene la posición del eje $x$ dividiendo por la longitud:

$$b = \frac{\int_0^L \theta\,\mathrm{d}x}{L} \tag{18}$$

> **Nota.** «Dividir por la mitad el diagrama de deflexiones» equivale a elegir $\theta_0$ tal que $w(L) = 0$, es decir, $\theta_0 = -b$. Por eso, el giro corregido es el giro provisional desplazado una cantidad constante $b$ hacia abajo, y la deflexión corregida es $w = w' - bx$.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1.95cm, y=0.65cm]
  % Regiones sombreadas A1, A2 y A3 (datos de la Tabla 8)
  \fill[cyan!55!blue, fill opacity=0.22]
    (0,4.058) -- (0,0) -- (0.25,0.133) -- (0.50,0.466) -- (0.75,0.922)
    -- (1.00,1.447) -- (1.25,2.003) -- (1.50,2.566) -- (1.75,3.117)
    -- (2.00,3.645) -- (2.125,3.897) -- (2.208,4.058) -- cycle;

  \fill[red!70!white, fill opacity=0.24]
    (2.208,4.058) -- (2.25,4.140) -- (2.50,4.598) -- (2.75,5.014)
    -- (3.00,5.386) -- (3.25,5.713) -- (3.50,5.995) -- (3.75,6.231)
    -- (4.00,6.423) -- (4.25,6.570) -- (4.50,6.673) -- (4.75,6.735)
    -- (5.00,6.755) -- (5.00,4.058) -- cycle;

  \fill[gray!45, fill opacity=0.28]
    (0,0) -- (0.25,0.133) -- (0.50,0.466) -- (0.75,0.922) -- (1.00,1.447)
    -- (1.25,2.003) -- (1.50,2.566) -- (1.75,3.117) -- (2.00,3.645)
    -- (2.125,3.897) -- (2.208,4.058) -- (5.00,4.058) -- (5.00,0) -- cycle;

  % Eje de referencia y = 0 y nuevo eje x en y = b
  \draw[line width=0.7pt] (-0.60,0) -- (5.20,0);
  \draw[line width=1.1pt, dashed, red!70!black] (-0.60,4.058) -- (5.20,4.058);

  % Curva provisional theta'(x)
  \draw[line width=1.7pt, blue!55!black] plot[smooth] coordinates {
    (0.00,0.000) (0.25,0.133) (0.50,0.466) (0.75,0.922) (1.00,1.447)
    (1.25,2.003) (1.50,2.566) (1.75,3.117) (2.00,3.645) (2.25,4.140)
    (2.50,4.598) (2.75,5.014) (3.00,5.386) (3.25,5.713) (3.50,5.995)
    (3.75,6.231) (4.00,6.423) (4.25,6.570) (4.50,6.673) (4.75,6.735)
    (5.00,6.755)
  };

  % Ejes del marco (izquierdo e inferior)
  \draw[line width=0.8pt] (-0.60,-0.35) -- (-0.60,7.40);
  \draw[line width=0.8pt] (-0.60,-0.35) -- (5.20,-0.35);

  % Marcas de escala en x e y
  \foreach \x in {0,1,2,3,4,5} {
    \draw[line width=0.7pt] (\x,-0.35) -- (\x,-0.55) node[below, font=\small] {$\x$};
  }
  \foreach \y in {0,1,2,3,4,5,6,7} {
    \draw[line width=0.7pt] (-0.60,\y) -- (-0.67,\y) node[left, font=\small] {$\y$};
  }

  % Etiquetas de ejes
  \node[font=\small] at (2.30,-1.45) {$x$ (m)};
  \node[rotate=90, font=\small] at (-1.08,3.55) {$\theta' \; (\times 10^{-7})$ (unidades de la tabla)};

  % Cota vertical b
  \draw[<->, line width=0.9pt, red!70!black] (-0.12,0.08) -- (-0.12,3.98);
  \node[red!70!black, font=\small] at (-0.34,2.03) {$b$};

  % Anotaciones internas
  \node[red!70!black, anchor=south west, font=\footnotesize] at (0.05,4.14) {nuevo eje $x$ (a $b$ del origen)};
  \node[blue!55!black] at (1.58,3.62) {$A_1$};
  \node[red!70!black] at (4.20,5.28) {$A_2$};
  \node[gray!80!black] at (2.60,1.92) {$A_3$};
\end{tikzpicture}
</script>

Figura 1: Diagrama de áreas para el giro inicial (curva provisional $\theta'$ del ejemplo de la sección 5).

### 3.2. Algoritmo completo

1. Discretizar $x_0 \dots x_n$ y calcular $q(x)$ e $I(x)$.
2. $V \leftarrow -\int q\,\mathrm{d}x$ (trapecio); $M \leftarrow \int V\,\mathrm{d}x$.
3. $V_0 = -M(L)/L$; $V \leftarrow V + V_0$; $M \leftarrow M + V_0 x$.
4. $\theta' \leftarrow \int (M/EI)\,\mathrm{d}x$; $w' \leftarrow \int \theta'\,\mathrm{d}x$.
5. $b = w'(L)/L$; $\theta = \theta' - b$; $w = w' - bx$.
6. Hallar el máximo de $|w|$, que ocurre donde $\theta = 0$.

## 4. Integración gráfica

Una forma alternativa de realizar la integración de las expresiones es usando métodos gráficos (Figura 2). El área debajo de la función $f$ entre $x_{i-1}$ y $x_i$ puede aproximarse por medio de la regla del trapecio; así, si el área de la integral hasta el punto $x_{i-1}$ es conocida e igual a $b_{i-1}$, entonces la integral hasta $x_i$ tiene la siguiente forma:

$$s = b_{i-1} + 0,5\bigl(f(x_i) + f(x_{i-1})\bigr)(x_i - x_{i-1}) \tag{19}$$

> **Nota.** Las notas originales escriben $b_i$ en lugar de $b_{i-1}$ y una diferencia en lugar de una suma; la regla del trapecio suma las ordenadas. Además, el procedimiento con polo a distancia $e$ y valor en el punto medio que sigue corresponde al polígono funicular (regla del punto medio) más que a la regla de Simpson.

Un método gráfico puede desarrollarse introduciendo un parámetro $e$, que es la distancia medida a la izquierda del eje $y$. En principio, esta distancia es arbitraria y estará limitada únicamente por la conveniencia de su elección durante el trabajo de integración. De acuerdo con la figura, el segmento $AB$ tiene una pendiente que depende de la abscisa del punto medio $\bar{x}$ ubicado entre $x_{i-1}$ y $x_i$ y del parámetro $e$:

$$m_{AB} = \frac{f(\bar{x})}{e} \tag{20}$$

En el gráfico de la función acumulativa presentado debajo de la función a integrar se aprecia que, al multiplicar esta pendiente por el avance o desplazamiento lineal en $x$, se obtiene

$$S_i = m_{AB}(x_i - x_{i-1}) = \frac{f(\bar{x})}{e}(x_i - x_{i-1}) \tag{21}$$

<script type="text/tikz">
\begin{tikzpicture}[>=latex]
  % ===== Grafico superior: f(x) y polo =====
  \begin{scope}[yshift=5.75cm, x=1.18cm, y=1.15cm]
    % Ejes de referencia x = 0 e y = 0
    \draw[line width=0.7pt] (-2.60,0) -- (6.20,0);
    \draw[line width=0.7pt] (0,-1.02) -- (0,2.55);

    % Lineas punteadas auxiliares en x_{i-1} y x_i
    \draw[line width=0.75pt, dotted, gray!80!black] (2.60,0) -- (2.60,1.507);
    \draw[line width=0.75pt, dotted, gray!80!black] (4.00,0) -- (4.00,0.987);

    % Curva f(x)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.0,0.950) (0.5,1.359) (1.0,1.668) (1.5,1.806) (2.0,1.756)
      (2.6,1.507) (3.0,1.296) (3.3,1.152) (4.0,0.987) (4.5,1.083)
      (5.0,1.359) (5.5,1.754) (6.0,2.172)
    };

    % Rayo desde el polo hasta el punto medio y ordenada f(bar{x})
    \draw[line width=1.1pt, dashed, red!70!black] (-2.20,0) -- (3.30,1.152);
    \draw[line width=1.2pt, red!70!black] (3.30,0) -- (3.30,1.152);
    \fill[red!70!black] (3.30,1.152) circle (2.2pt);

    % Polo
    \fill[black] (-2.20,0) circle (2.6pt);
    \node[below=3pt, font=\footnotesize] at (-2.20,0) {polo};

    % Cota de distancia polar e (con margen inferior libre)
    \draw[<->, line width=0.9pt, blue!55!black] (-2.16,-0.52) -- (-0.04,-0.52);
    \node[blue!55!black, below=2pt, font=\footnotesize] at (-1.10,-0.52) {$e$};

    % Etiquetas en el grafico superior
    \node[below=2pt, font=\footnotesize] at (2.60,0) {$x_{i-1}$};
    \node[below=2pt, red!70!black, font=\footnotesize] at (3.30,0) {$\bar{x}$};
    \node[below=2pt, font=\footnotesize] at (4.00,0) {$x_i$};
    \node[right=2pt, red!70!black, font=\footnotesize] at (3.30,0.58) {$f(\bar{x})$};

    % Marco izquierdo e inferior y marcas de escala
    \draw[line width=0.8pt] (-2.60,-1.02) -- (-2.60,2.55);
    \draw[line width=0.8pt] (-2.60,-1.02) -- (6.20,-1.02);
    \foreach \x in {-2,-1,0,1,2,3,4,5,6} {
      \draw[line width=0.7pt] (\x,-1.02) -- (\x,-1.13);
    }
    \node[rotate=90, font=\small] at (-3.00,0.78) {$f(x)$};
  \end{scope}

  % ===== Grafico inferior: integral acumulada =====
  \begin{scope}[x=1.18cm, y=0.95cm]
    % Ejes de referencia x = 0 e y = 0
    \draw[line width=0.7pt] (-2.60,0) -- (6.20,0);
    \draw[line width=0.7pt] (0,-0.25) -- (0,4.25);

    % Lineas punteadas de proyeccion y triangulo de pendiente
    \draw[line width=0.75pt, dotted, gray!80!black] (2.60,0) -- (2.60,1.750);
    \draw[line width=0.75pt, dotted, gray!80!black] (4.00,0) -- (4.00,2.600);
    \draw[line width=0.75pt, dotted, gray!80!black] (2.60,1.750) -- (4.00,1.750);

    % Curva de integral acumulada en dos tramos continuos (sin solapar el tramo rojo)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.0,0.000) (0.8,0.540) (1.6,1.110) (2.1,1.440) (2.6,1.750)
    };
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (4.0,2.600) (4.5,2.910) (5.0,3.260) (5.5,3.640) (6.0,4.050)
    };

    % Tramo lineal paralelo al rayo y extremos
    \draw[line width=1.9pt, red!70!black] (2.60,1.750) -- (4.00,2.600);
    \fill[red!70!black] (2.60,1.750) circle (1.5pt);
    \fill[red!70!black] (4.00,2.600) circle (1.5pt);

    % Etiquetas del grafico inferior
    \node[anchor=south east, inner sep=2.5pt, font=\footnotesize] at (2.56,1.760) {$b_{i-1}$};
    \node[anchor=north west, inner sep=2.5pt, font=\footnotesize] at (4.04,2.620) {$b_i$};
    \node[below=2pt, font=\footnotesize] at (3.30,1.750) {$x_i - x_{i-1}$};
    \node[red!70!black, align=center, font=\footnotesize] at (1.75,3.02) {pendiente $= f(\bar{x})/e$\\(paralela al rayo)};

    % Marco izquierdo e inferior y marcas de escala
    \draw[line width=0.8pt] (-2.60,-0.25) -- (-2.60,4.25);
    \draw[line width=0.8pt] (-2.60,-0.25) -- (6.20,-0.25);
    \foreach \x in {-2,-1,0,1,2,3,4,5,6} {
      \draw[line width=0.7pt] (\x,-0.25) -- (\x,-0.38) node[below, font=\small] {$\x$};
    }
    \node[font=\small] at (1.80,-1.05) {$x$};
    \node[rotate=90, font=\small] at (-3.00,2.00) {integral acumulada};
  \end{scope}
\end{tikzpicture}
</script>

Figura 2: Método de integración gráfica con polo a la distancia $e$.

Así, el método gráfico consiste en encontrar la pendiente indicada en el gráfico de la función original y luego trasladar esta pendiente al gráfico de la función acumulada en el último punto obtenido de la integración anterior. El producto de esta pendiente por el desplazamiento lineal da el área de la función original hasta ese punto.

### 4.1. Escalas

A menudo, en un dibujo, por las limitaciones de espacio o comodidad visual, no es posible dibujar las magnitudes reales medidas, sino que es necesario usar escalas. Dado que se tienen medidas longitudinales en $x$ y medidas de fuerza, momento o momento reducido en el eje vertical, será necesario usar escalas, es decir, relaciones entre las medidas en el dibujo o medidas en papel y las medidas reales (Figura 3).

<script type="text/tikz">
\begin{tikzpicture}[x=1cm, y=1cm]
  % ===== Panel izquierdo: Medidas reales =====
  \begin{scope}
    \node[font=\small] at (2.35,4.10) {Medidas reales};

    % Ejes
    \draw[line width=0.9pt] (0,0) -- (0,3.50);
    \draw[line width=0.9pt] (0,0) -- (4.80,0);

    % Proyecciones punteadas
    \draw[line width=0.75pt, dotted, gray!80!black] (1.80,0) -- (1.80,1.15) -- (0,1.15);
    \draw[line width=0.75pt, dotted, gray!80!black] (3.60,0) -- (3.60,2.75) -- (0,2.75);

    % Poligonal
    \draw[line width=1.7pt, blue!55!black] (0,0.35) -- (1.80,1.15) -- (3.60,2.75);

    % Etiquetas
    \node[below=3pt, font=\small] at (0,0) {$0$};
    \node[below=3pt, font=\small] at (1.80,0) {$x_{i-1}$};
    \node[below=3pt, font=\small] at (3.60,0) {$x_i$};
    \node[left=3pt, font=\small] at (0,1.15) {$y_{i-1}$};
    \node[left=3pt, font=\small] at (0,2.75) {$y_i$};
  \end{scope}

  % ===== Panel derecho: Medidas de dibujo =====
  \begin{scope}[xshift=6.20cm]
    \node[font=\small] at (2.35,4.10) {Medidas de dibujo};

    % Ejes
    \draw[line width=0.9pt] (0,0) -- (0,3.50);
    \draw[line width=0.9pt] (0,0) -- (4.80,0);

    % Proyecciones punteadas
    \draw[line width=0.75pt, dotted, gray!80!black] (1.80,0) -- (1.80,1.15) -- (0,1.15);
    \draw[line width=0.75pt, dotted, gray!80!black] (3.60,0) -- (3.60,2.75) -- (0,2.75);

    % Poligonal
    \draw[line width=1.7pt, blue!55!black] (0,0.35) -- (1.80,1.15) -- (3.60,2.75);

    % Etiquetas
    \node[below=3pt, font=\small] at (0,0) {$0$};
    \node[below=3pt, font=\small] at (1.80,0) {$a_{i-1}$};
    \node[below=3pt, font=\small] at (3.60,0) {$a_i$};
    \node[left=3pt, font=\small] at (0,1.15) {$b_{i-1}$};
    \node[left=3pt, font=\small] at (0,2.75) {$b_i$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 3: Escalas de medidas reales vs. medidas de dibujo.

Escala horizontal y escala vertical:

$$E_x = \frac{\text{medidas reales}}{\text{medidas dibujo}} = \frac{x_i}{a_i} \tag{22}$$

$$E_y = \frac{\text{medidas reales}}{\text{medidas dibujo}} = \frac{y_i}{b_i} \tag{23}$$

La integración de una función $f$ con medidas de dibujo producirá un resultado numérico que contiene una constante de integración y una sumatoria:

$$s = c_0 + \frac{b_1}{e}(a_1 - a_0) + \frac{b_2}{e}(a_2 - a_1) + \dots + \frac{b_n}{e}(a_n - a_{n-1}) \tag{24}$$

$$s = c_0 + \frac{b_1}{e}\Delta a_1 + \frac{b_2}{e}\Delta a_2 + \dots + \frac{b_n}{e}\Delta a_n \tag{25}$$

$$s = c_0 + \frac{y_1}{E_x E_y e}\Delta x_1 + \frac{y_2}{E_x E_y e}\Delta x_2 + \dots + \frac{y_n}{E_x E_y e}\Delta x_n \tag{26}$$

Si la medida de la constante de integración se hace de tal forma que exista una escala que relaciona su valor en el dibujo con su valor real, esta se puede expresar así:

$$E_z = \frac{z_0}{c_0} \tag{27}$$

Así, se tiene la expresión

$$s = \frac{z_0}{E_z} + \frac{y_1}{E_x E_y e}\Delta x_1 + \dots + \frac{y_n}{E_x E_y e}\Delta x_n \tag{28}$$

Evidentemente, la escala utilizada para la constante de integración no puede ser arbitraria para que el método tenga utilidad. Así, la escala de la constante de integración deberá ser:

$$E_z = E_x E_y e \tag{29}$$

> **Nota.** Con $E_x = 0,5\text{ m/cm}$, $E_y = 5\text{ kN/cm}$ y $e = 4\text{ cm}$ resulta $E_z = 0,5 \times 5 \times 4 = 10\text{ kN}\cdot\text{m/cm}$: $1\text{ cm}$ de ordenada en la curva acumulada equivale a $10\text{ kN}\cdot\text{m}$. Si en el ejemplo de la sección 5 se integrara gráficamente $M/EI$, la escala vertical $E_y$ tendría unidades de curvatura ($\text{rad/m}$ por $\text{cm}$) y $E_z$ de $\text{rad}$ por $\text{cm}$.

## 5. Problemas resueltos

### 5.1. Ejemplo: viga simplemente apoyada con carga triangular

Calcular la deflexión máxima de la viga de sección variablemente continua mostrada en la Figura 4, que está sometida a la acción de una carga que varía linealmente desde $q_1$ hasta $q_2$. Considere los siguientes valores: $q_1 = 0$, $q_2 = 20\text{ kN/m}$, $h_1 = 0,20\text{ m}$, $h_2 = 0,5\text{ m}$, $L = 5\text{ m}$, $E = 200\text{ GPa}$.

**Solución.** La viga se divide en $40$ tramos de $\Delta x = 0,125\text{ m}$ y se aplican las ecuaciones (13)–(16) y la corrección del giro inicial, con $q(x) = 4x\text{ kN/m}$, $h(x) = 0,20 + 0,06x\text{ m}$ e $I(x) = bh^3/12$. La tabla completa se muestra en la Tabla 8 del Apéndice A. Los diagramas de carga, cortante, momento flector, momento reducido, giro y deflexión se muestran en las Figuras 5, 6 y 7.

**Resultados obtenidos.** De la tabla: $V_0 = 16,6719\text{ kN}$; momento máximo $M = 32,0742\text{ kN}\cdot\text{m}$ en $x = 2,875\text{ m}$ (donde $V$ cambia de signo); giro en el apoyo izquierdo $\theta(0) = -4,058\text{E}-07$; giro en el apoyo derecho $\theta(L) = +2,697\text{E}-07$; deflexión máxima $|w| = 5,045\text{E}-07$ en $x = 2,25\text{ m}$, donde el giro se anula (interpolando, $x \approx 2,21\text{ m}$).

> **Nota. Sobre unidades.** $M/EI = 5,593\text{E}-08$ en $x = 0,125\text{ m}$ solo se obtiene con $M$ en $\text{kN}\cdot\text{m}$ y $EI$ en $\text{N}\cdot\text{m}^2$ ($E = 200\text{E}9\text{ Pa}$): las columnas $M/EI$, $\theta'$, $w'$, $\theta$ y $w$ de la tabla están en unidades mixtas y deben multiplicarse por $10^3$ para expresarse en $\text{rad}$ y $\text{m}$. Con unidades coherentes, la deflexión máxima es $5,045\text{E}-04\text{ m} = 0,505\text{ mm}$ (Tabla 3).

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1cm, y=1cm]
  % ===== (a) Viga con carga triangular =====
  \begin{scope}
    % Cuerpo de la viga de seccion variable (h1 : h2 = 0.56 : 1.40 = 1 : 2.5)
    \fill[blue!25!white, fill opacity=0.38]
      (0,0) -- (8.40,0) -- (8.40,-1.40) -- (0,-0.56) -- cycle;
    \draw[line width=1.6pt]
      (0,0) -- (8.40,0) -- (8.40,-1.40) -- (0,-0.56) -- cycle;

    % Carga triangular distribuida q1 -> q2
    \draw[line width=1.0pt, red!75!black!75] (0,0) -- (8.40,2.00);
    \foreach \x/\y in {0.84/0.20, 1.68/0.40, 2.52/0.60, 3.36/0.80, 4.20/1.00, 5.04/1.20, 5.88/1.40, 6.72/1.60, 7.56/1.80, 8.40/2.00} {
      \draw[->, line width=0.85pt, red!75!black!75] (\x,\y) -- (\x,0.03);
    }
    \node[red!75!black!80] at (-0.42,0.36) {$q_1$};
    \node[red!75!black!80] at (8.78,2.24) {$q_2$};

    % Apoyo articulado izquierdo y apoyo movil derecho
    \fill[violet!55!black] (0,-0.56) -- (-0.25,-1.02) -- (0.25,-1.02) -- cycle;
    \fill[violet!55!black] (8.40,-1.59) ellipse (0.23 and 0.19);

    % Etiquetas de peraltes h1 y h2
    \node[left=6pt] at (0,-0.28) {$h_1$};
    \node[right=6pt] at (8.40,-0.70) {$h_2$};

    % Cota de longitud total L
    \draw[line width=0.75pt] (0,-2.22) -- (3.92,-2.22);
    \draw[line width=0.75pt] (4.48,-2.22) -- (8.40,-2.22);
    \node at (4.20,-2.22) {$L$};
  \end{scope}

  % ===== (b) Discretizacion en 10 tramos de longitud Delta x =====
  \begin{scope}[yshift=-4.65cm]
    % Divisiones verticales internas
    \foreach \x/\yb in {0.84/-0.644, 1.68/-0.728, 2.52/-0.812, 3.36/-0.896, 4.20/-0.980, 5.04/-1.064, 5.88/-1.148, 6.72/-1.232, 7.56/-1.316} {
      \draw[line width=0.75pt, gray!80] (\x,0) -- (\x,\yb);
    }

    % Contorno de la viga
    \draw[line width=1.6pt]
      (0,0) -- (8.40,0) -- (8.40,-1.40) -- (0,-0.56) -- cycle;

    % Apoyos
    \fill[violet!55!black] (0,-0.56) -- (-0.25,-1.02) -- (0.25,-1.02) -- cycle;
    \fill[violet!55!black] (8.40,-1.59) ellipse (0.23 and 0.19);

    % Etiquetas Delta x en los 10 intervalos
    \foreach \x/\y in {0.48/-0.90, 1.26/-0.99, 2.10/-1.07, 2.94/-1.16, 3.78/-1.24, 4.62/-1.33, 5.46/-1.41, 6.30/-1.50, 7.14/-1.58, 7.90/-1.66} {
      \node[font=\small] at (\x,\y) {$\Delta x$};
    }

    % Etiquetas de peraltes h1 y h2
    \node[left=6pt] at (0,-0.28) {$h_1$};
    \node[right=6pt] at (8.40,-0.70) {$h_2$};

    % Cota de longitud total L
    \draw[line width=0.75pt] (0,-2.35) -- (3.92,-2.35);
    \draw[line width=0.75pt] (4.48,-2.35) -- (8.40,-2.35);
    \node at (4.20,-2.35) {$L$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 4: Viga del ejemplo: (a) viga con la carga triangular; (b) discretización en tramos de longitud $\Delta x$. El ancho $b = 0,25\text{ m}$ no figura en el enunciado; se dedujo de $I(0) = 1,667 \times 10^{-4}\text{ m}^4$ de la tabla.

<script type="text/tikz">
\begin{tikzpicture}[>=latex]
  % ===== Panel izquierdo: Carga =====
  \begin{scope}[yshift=0.17cm, x=1.0cm, y=0.17cm]
    \node[font=\small] at (2.50,23.4) {Carga};

    % Curva q(x) = 4x
    \draw[line width=1.6pt, blue!55!black] (0,0) -- (5,20);

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-1.0) -- (-0.25,21.0);
    \draw[line width=0.8pt] (-0.25,-1.0) -- (5.25,-1.0);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-1.0) -- (\x,-1.8) node[below, font=\small] {$\x$};
    }
    \foreach \y in {0,5,10,15,20} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-5.6) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.25,10.0) {Carga $q$ (kN/m)};
  \end{scope}

  % ===== Panel derecho: Cortante =====
  \begin{scope}[xshift=7.60cm, yshift=2.448cm, x=1.0cm, y=0.068cm]
    \node[font=\small] at (2.50,25.0) {Cortante};

    % Linea de referencia V = 0
    \draw[line width=0.7pt] (-0.25,0) -- (5.25,0);

    % Curva V(x) (datos de la Tabla 8)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.00,16.67) (0.50,16.17) (1.00,14.67) (1.50,12.17) (2.00,8.67)
      (2.50,4.17) (2.875,0.14) (3.00,-1.33) (3.50,-7.83) (4.00,-15.33)
      (4.50,-23.83) (5.00,-33.33)
    };

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-36.0) -- (-0.25,19.0);
    \draw[line width=0.8pt] (-0.25,-36.0) -- (5.25,-36.0);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-36.0) -- (\x,-38.0) node[below, font=\small] {$\x$};
    }
    \foreach \y in {-30,-20,-10,0,10} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-47.5) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.42,-8.5) {Cortante $V$ (kN)};
  \end{scope}
\end{tikzpicture}
</script>

Figura 5: Diagrama de cargas y diagrama de fuerzas cortantes.

**Tabla 3:** Resultados del ejemplo.

| Magnitud | Valor de la tabla | Con unidades coherentes | Unidad |
| --- | ---: | ---: | --- |
| $V_0$ | $16,6719$ | $16,6719$ | $\text{kN}$ |
| $M_{\text{máx}}$ | $32,0742$ | $32,0742$ | $\text{kN}\cdot\text{m}$ |
| $\theta(0)$ | $-4,058\text{E}-07$ | $-4,058\text{E}-04$ | $\text{rad}$ |
| $\theta(L)$ | $+2,697\text{E}-07$ | $+2,697\text{E}-04$ | $\text{rad}$ |
| $|w|_{\text{máx}}\;(n = 40)$ | $5,045\text{E}-07$ | $5,045\text{E}-04\;(0,505\text{ mm})$ | $\text{m}$ |

<script type="text/tikz">
\begin{tikzpicture}[>=latex]
  % ===== Panel izquierdo: Momento flector =====
  \begin{scope}[yshift=0.170cm, x=1.0cm, y=0.106cm]
    \node[font=\small] at (2.50,37.5) {Momento flector};

    % Curva M(x) (datos de la Tabla 8)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.00,0.00) (0.50,8.25) (1.00,16.00) (1.50,22.75) (2.00,28.00)
      (2.50,31.25) (2.875,32.07) (3.00,32.00) (3.50,29.75) (4.00,24.00)
      (4.50,14.25) (5.00,0.00)
    };

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-1.6) -- (-0.25,33.8);
    \draw[line width=0.8pt] (-0.25,-1.6) -- (5.25,-1.6);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-1.6) -- (\x,-2.9) node[below, font=\small] {$\x$};
    }
    \foreach \y in {0,10,20,30} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-9.0) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.28,16.1) {Momento $M$ (kN$\cdot$m)};
  \end{scope}

  % ===== Panel derecho: Momento reducido =====
  \begin{scope}[xshift=7.60cm, yshift=0.166cm, x=1.0cm, y=1.506cm]
    \node[font=\small] at (2.50,2.64) {Momento reducido};

    % Curva M/EI (datos de la Tabla 8, en unidades de 10^-7)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.000,0.000) (0.125,0.559) (0.250,1.004) (0.375,1.354) (0.500,1.627)
      (0.750,1.994) (1.000,2.185) (1.250,2.254) (1.375,2.255) (1.500,2.239)
      (1.750,2.165) (2.000,2.051) (2.500,1.749) (3.000,1.400) (3.500,1.036)
      (4.000,0.676) (4.500,0.329) (5.000,0.000)
    };

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-0.11) -- (-0.25,2.38);
    \draw[line width=0.8pt] (-0.25,-0.11) -- (5.25,-0.11);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-0.11) -- (\x,-0.20) node[below, font=\small] {$\x$};
    }
    \foreach \y in {0.0,0.5,1.0,1.5,2.0} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-0.63) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.34,1.135) {$M/EI \; (\times 10^{-7})$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 6: Diagrama de momentos flectores y de momentos reducidos (unidades de la tabla).

<script type="text/tikz">
\begin{tikzpicture}[>=latex]
  % ===== Panel izquierdo: Giro =====
  \begin{scope}[yshift=2.213cm, x=1.0cm, y=0.503cm]
    \node[font=\small] at (2.50,3.85) {Giro};

    % Linea de referencia theta = 0
    \draw[line width=0.7pt] (-0.25,0) -- (5.25,0);

    % Curva theta(x) (datos de la Tabla 8, en unidades de 10^-7)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.00,-4.058) (0.25,-3.925) (0.50,-3.591) (0.75,-3.135) (1.00,-2.611)
      (1.25,-2.054) (1.50,-1.492) (1.75,-0.940) (2.00,-0.413) (2.25,0.082)
      (2.50,0.540) (2.75,0.956) (3.00,1.328) (3.25,1.655) (3.50,1.937)
      (3.75,2.174) (4.00,2.365) (4.25,2.512) (4.50,2.616) (4.75,2.677)
      (5.00,2.697)
    };

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-4.40) -- (-0.25,3.05);
    \draw[line width=0.8pt] (-0.25,-4.40) -- (5.25,-4.40);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-4.40) -- (\x,-4.67) node[below, font=\small] {$\x$};
    }
    \foreach \y in {-4,-2,0,2} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-5.95) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.32,-0.68) {Giro $\theta \; (\times 10^{-7})$};
  \end{scope}

  % ===== Panel derecho: Deflexion =====
  \begin{scope}[xshift=7.60cm, yshift=3.562cm, x=1.0cm, y=0.672cm]
    \node[font=\small] at (2.50,0.88) {Deflexi\'on};

    % Linea de referencia w = 0
    \draw[line width=0.7pt] (-0.25,0) -- (5.25,0);

    % Curva w(x) (datos de la Tabla 8, en unidades de 10^-7)
    \draw[line width=1.6pt, blue!55!black] plot[smooth] coordinates {
      (0.00,0.000) (0.25,-1.002) (0.50,-1.944) (0.75,-2.786) (1.00,-3.505)
      (1.25,-4.088) (1.50,-4.532) (1.75,-4.835) (2.00,-5.004) (2.25,-5.045)
      (2.50,-4.966) (2.75,-4.779) (3.00,-4.493) (3.25,-4.119) (3.50,-3.669)
      (3.75,-3.155) (4.00,-2.587) (4.25,-1.976) (4.50,-1.335) (4.75,-0.672)
      (5.00,0.000)
    };

    % Ejes izquierdo e inferior
    \draw[line width=0.8pt] (-0.25,-5.30) -- (-0.25,0.28);
    \draw[line width=0.8pt] (-0.25,-5.30) -- (5.25,-5.30);

    % Marcas de escala
    \foreach \x in {0,1,2,3,4,5} {
      \draw[line width=0.7pt] (\x,-5.30) -- (\x,-5.50) node[below, font=\small] {$\x$};
    }
    \foreach \y in {-5,-4,-3,-2,-1,0} {
      \draw[line width=0.7pt] (-0.25,\y) -- (-0.39,\y) node[left, font=\small] {$\y$};
    }

    % Etiquetas de ejes
    \node[font=\small] at (2.50,-6.46) {$x$ (m)};
    \node[rotate=90, font=\small] at (-1.32,-2.51) {Deflexi\'on $w \; (\times 10^{-7})$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 7: Diagrama de giros y de deflexiones (unidades de la tabla).

#### Una fila calculada a mano

> **Nota.** Para comprobar el método se repite la fila $x = 0,125\text{ m}$ de la tabla ($\Delta x = 0,125\text{ m}$; $q = 0,5\text{ kN/m}$; $V_0 = 16,6719\text{ kN}$).

Primero el cortante y el momento, con (13) y (14):

$$\begin{aligned}
V_1 &= 16,6719 - 0,5\,(0,5 + 0)(0,125) = 16,6406\text{ kN} \\
M_1 &= 0 + 0,5\,(16,6406 + 16,6719)(0,125) = 2,0820\text{ kN}\cdot\text{m}
\end{aligned}$$

Luego la altura y la inercia en $x_1$:

$$h(x_1) = 0,20 + 0,06\,(0,125) = 0,2075\text{ m}; \qquad I(x_1) = \frac{0,25\,(0,2075)^3}{12} = 1,861 \times 10^{-4}\text{ m}^4$$

El momento reducido, con $EI = 200 \times 10^9 \times 1,861 \times 10^{-4} = 3,722 \times 10^7\text{ N}\cdot\text{m}^2$ (en las unidades de la tabla, con $M$ en $\text{kN}\cdot\text{m}$):

$$\left(\frac{M}{EI}\right)_1 = \frac{2,0820}{3,722 \times 10^7} = 5,593 \times 10^{-8}$$

Como en el punto $0$ el momento es nulo, $(M/EI)_0 = 0$ y los valores provisionales de giro y deflexión, con (15) y (16) y $\theta'_0 = w'_0 = 0$, son

$$\begin{aligned}
\theta'_1 &= 0 + 0,5\,(5,593 \times 10^{-8} + 0)(0,125) = 3,496 \times 10^{-9} \\
w'_1 &= 0 + 0,5\,(3,496 \times 10^{-9} + 0)(0,125) = 2,185 \times 10^{-10}
\end{aligned}$$

Para el giro inicial se necesita la deflexión provisional en el apoyo derecho, $w'(L) = 2,029 \times 10^{-6}$ (última fila de la tabla), de modo que $b = w'(L)/L = 2,029 \times 10^{-6}/5 = 4,058 \times 10^{-7}$ y $\theta_0 = -b$. Los valores corregidos son

$$\begin{aligned}
\theta_1 &= \theta'_1 - b = 3,496 \times 10^{-9} - 4,058 \times 10^{-7} = -4,023 \times 10^{-7} \\
w_1 &= w'_1 - b\,x_1 = 2,185 \times 10^{-10} - 4,058 \times 10^{-7}\,(0,125) = -5,050 \times 10^{-8}
\end{aligned}$$

Cada valor coincide con la fila correspondiente de la Tabla 8.

#### Observaciones

> **Nota.** El máximo de $M/EI$ no coincide con el máximo de $M$. En la tabla, $M/EI$ alcanza su mayor valor ($\approx 2,255\text{E}-07$) hacia $x \approx 1,375\text{ m}$, mientras que $M$ es máximo en $x = 2,875\text{ m}$: en esa zona la sección es más delgada y la curvatura crece. Ese es el efecto físico central de una sección variable. Por otra parte, el valor de $V_0$ de la tabla ($16,6719\text{ kN}$) difiere $0,03\,\%$ del analítico $q_2 L / 6 = 16,6667\text{ kN}$; la diferencia es error de discretización del trapecio, que decrece como $\Delta x^2$ [3].

### 5.2. Voladizos de sección variable: marco de cálculo (Problemas 35 y 36)

En los dos problemas que siguen se resuelven voladizos de sección variable: una viga troncocónica con carga concentrada en el extremo libre (Problema 35) y una viga rectangular de altura variable con carga uniforme y carga concentrada (Problema 36). En ambos se pide:

1. determinar en qué secciones transversales se desarrollan los esfuerzos normales máximos;
2. establecer cuántas veces son mayores $\sigma_{\text{máx}}$, $|f|_{\text{máx}}$ y $|\theta|_{\text{máx}}$ que en vigas similares de sección transversal constante (la máxima);
3. calcular la máxima deflexión de la viga y el giro en el extremo libre.

A diferencia del ejemplo anterior, aquí las integrales se resuelven en forma cerrada, con un cambio de variable adimensional.

#### Notación y convenciones

El eje $x$ se mide desde el empotramiento hacia el extremo libre; $L$ es la longitud de la viga (denotada $l$ en los enunciados). La coordenada adimensional es $\alpha = x/L$, con $0 \le \alpha \le 1$; en las integrales se usa la misma cantidad con el nombre $u = x/L$, de modo que $\mathrm{d}u = \mathrm{d}x/L$. Se trabaja con magnitudes (valores absolutos): como las cargas actúan hacia abajo, la deflexión y el giro del extremo libre tienen el sentido de la carga. Para no confundir la letra $d$ del diámetro (Problema 35) con el diferencial, este último se escribe $\mathrm{d}x$.

**Tabla 4:** Símbolos principales.

| Símbolo | Significado |
| --- | --- |
| $V_x,\; M_x$ | Fuerza cortante y momento flector en la sección $x$ |
| $d_x,\; h_x$ | Diámetro (P35) o altura (P36) de la sección en $x$ |
| $A_x,\; I_x$ | Área y momento de inercia de la sección en $x$ |
| $\sigma_x$ | Esfuerzo normal máximo (fibra extrema) en la sección $x$ |
| $\sigma'$ | Esfuerzo adimensional (normalizado con una constante) |
| $\theta,\; \delta$ | Giro y deflexión del extremo libre |
| $E$ | Módulo de elasticidad (constante) |

#### Fuerzas internas: método de las secciones

Se corta la viga en la sección $x$ y se estudia el tramo libre, el que contiene al extremo libre (longitud $L - x$). Ese tramo debe estar en equilibrio, de modo que en la cara cortada actúan una fuerza cortante $V_x$ y un momento $M_x$ que equilibran las cargas aplicadas sobre él:

$$V_x = \sum F_y, \qquad M_x = \sum M. \tag{30}$$

El momento de una carga respecto a la sección es la carga multiplicada por su brazo, que es la distancia de su punto de aplicación a la sección.

#### Esfuerzo normal por flexión

En una sección de inercia $I_x$, el esfuerzo normal en una fibra a la distancia $y$ del eje neutro es $\sigma = M_x y / I_x$. Es máximo en la fibra más alejada, $y = c$:

$$\sigma_x = \frac{M_x\,c}{I_x}. \tag{31}$$

Para una sección circular de diámetro $D$: $c = D/2$ e $I = \pi D^4/64$. Para una sección rectangular de ancho $b$ y altura $h$: $c = h/2$ e $I = bh^3/12$.

#### Giro y deflexión del extremo libre

Un elemento de viga de longitud $\mathrm{d}x$ gira un ángulo $\mathrm{d}\theta = \frac{M}{EI}\,\mathrm{d}x$. Como el giro en el empotramiento es nulo, el giro del extremo libre es la suma de todos los giros elementales:

$$\theta = \int_0^L \frac{M}{EI}\,\mathrm{d}x. \tag{32}$$

Cada giro elemental desplaza además el extremo libre en una cantidad igual a $\mathrm{d}\theta$ por la distancia que hay desde ese elemento hasta el extremo, que es $L - x$ (segundo teorema del área de momentos con la tangente horizontal en el empotramiento [2]):

$$\delta = \int_0^L (L - x)\frac{M}{EI}\,\mathrm{d}x. \tag{33}$$

El brazo es $L - x$ y no $x$. Una comprobación inmediata: en un voladizo prismático con carga $P$ en el extremo, $M = P(L - x)$ e $I$ constante, la ecuación (33) da $\int_0^L P(L - x)^2/(EI)\,\mathrm{d}x = PL^3/(3EI)$, que es el valor conocido; con $x$ como brazo se obtendría la mitad, $PL^3/(6EI)$.

Como $M$ tiene siempre el mismo signo, el giro crece sin cambiar de signo desde el empotramiento; por eso la deflexión máxima de un voladizo está en el extremo libre.

#### Viga de referencia

La comparación que piden los enunciados se hace con la viga similar de sección constante igual a la máxima, es decir, con la sección del empotramiento ($3d$ en el Problema 35, $3h$ en el Problema 36), con las mismas cargas y la misma longitud. Por construcción, el esfuerzo de la viga variable en el empotramiento coincide con el de la viga de referencia, lo cual sirve de comprobación (sección 5.5).

#### Secuencia de trabajo

En ambos problemas se sigue el mismo orden: (1) esquema de la viga, sistema de coordenadas y corte en la sección $x$; (2) fuerzas internas $V_x$ y $M_x$; (3) variación de la sección ($d_x$ o $h_x$) y cálculo de $A_x$ e $I_x$; (4) cálculo del esfuerzo $\sigma_x$ y normalización $\sigma'$ con $\alpha = x/L$; (5) derivada de $\sigma'$ para hallar la sección del esfuerzo máximo; (6) cálculo del giro $\theta$ con el cambio de variable $u = x/L$; (7) cálculo de la deflexión $\delta$; (8) comparación con la viga de sección constante.

### 5.3. Problema 35: viga troncocónica

*Enunciado.* Determine en cuáles secciones transversales de las vigas se desarrollarán los esfuerzos normales máximos, y cuántas veces $\sigma_{\text{máx}}$, $|f|_{\text{máx}}$ y $|\theta|_{\text{máx}}$ son mayores que en vigas similares de sección transversal constante (máxima). Además, calcule la máxima deflexión de la viga y el giro en el extremo libre.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1cm, y=1cm]
  % Nota descriptiva superior alineada sobre el empotramiento
  \node[anchor=west, font=\footnotesize, gray!75!black] at (-0.62,1.94)
    {secci\'on circular: di\'ametro $3d$ en el empotramiento y $d$ en el extremo libre};

  % Lineas auxiliares de cota 3d (detras del contorno del empotramiento)
  \draw[line width=0.65pt, gray!75] (0,1.23) -- (-1.58,1.23);
  \draw[line width=0.65pt, gray!75] (0,-1.23) -- (-1.58,-1.23);

  % Empotramiento: banda lateral achurada con curvas de Bezier explicitas
  \begin{scope}
    \clip (-0.52,1.72)
      .. controls (-0.708,1.72) and (-0.86,0.950) .. (-0.86,0)
      .. controls (-0.86,-0.950) and (-0.708,-1.72) .. (-0.52,-1.72)
      -- (0,-1.72)
      .. controls (-0.188,-1.72) and (-0.34,-0.950) .. (-0.34,0)
      .. controls (-0.34,0.950) and (-0.188,1.72) .. (0,1.72)
      -- (-0.52,1.72) -- cycle;
    \fill[gray!18] (-0.95,-1.80) rectangle (0.10,1.80);
    \foreach \ya/\yb in {-2.60/-1.40, -2.26/-1.06, -1.92/-0.72, -1.58/-0.38,
      -1.24/-0.04, -0.90/0.30, -0.56/0.64, -0.22/0.98, 0.12/1.32,
      0.46/1.66, 0.80/2.00, 1.14/2.34, 1.48/2.68} {
      \draw[line width=0.85pt] (-0.98,\ya) -- (0.12,\yb);
    }
  \end{scope}

  % Contorno de la banda del empotramiento (cerrado arriba y abajo)
  \draw[line width=1.7pt, line join=round] (-0.52,1.72)
    .. controls (-0.708,1.72) and (-0.86,0.950) .. (-0.86,0)
    .. controls (-0.86,-0.950) and (-0.708,-1.72) .. (-0.52,-1.72)
    -- (0,-1.72)
    .. controls (-0.188,-1.72) and (-0.34,-0.950) .. (-0.34,0)
    .. controls (-0.34,0.950) and (-0.188,1.72) .. (0,1.72)
    -- (-0.52,1.72);

  % Borde frontal derecho visible del disco de empotramiento
  \draw[line width=1.7pt] (0,1.72)
    .. controls (0.091,1.72) and (0.178,1.534) .. (0.242,1.206);
  \draw[line width=1.7pt] (0.242,-1.206)
    .. controls (0.178,-1.534) and (0.091,-1.72) .. (0,-1.72);

  % Superficie lateral del tronco de cono (relacion 3d : d = 2.46 : 0.82 = 3 : 1)
  \fill[blue!35!cyan!16]
    (0,1.23) -- (8.40,0.41)
    .. controls (8.334,0.41) and (8.28,0.226) .. (8.28,0)
    .. controls (8.28,-0.226) and (8.334,-0.41) .. (8.40,-0.41)
    -- (0,-1.23)
    .. controls (0.133,-1.23) and (0.24,-0.679) .. (0.24,0)
    .. controls (0.24,0.679) and (0.133,1.23) .. (0,1.23) -- cycle;

  % Seccion en el empotramiento (diametro 3d)
  \fill[blue!45!cyan!24] (0,0) ellipse (0.24 and 1.23);
  \draw[line width=1.7pt] (0,0) ellipse (0.24 and 1.23);

  % Seccion en el extremo libre (diametro d)
  \fill[blue!45!cyan!24] (8.40,0) ellipse (0.12 and 0.41);
  \draw[line width=1.7pt] (8.40,0) ellipse (0.12 and 0.41);

  % Generatrices superior e inferior
  \draw[line width=1.7pt] (0,1.23) -- (8.40,0.41);
  \draw[line width=1.7pt] (0,-1.23) -- (8.40,-0.41);

  % Carga concentrada P en el extremo libre
  \draw[->, line width=2.4pt, red!65!black] (8.40,-0.41) -- (8.40,-1.40);
  \node[red!65!black, font=\large] at (8.78,-0.96) {$P$};

  % Cota diametro 3d
  \draw[<->, line width=1.1pt, blue!55!black] (-1.42,-1.20) -- (-1.42,1.20);
  \node[blue!55!black] at (-1.80,0) {$3d$};

  % Cota diametro d
  \draw[line width=0.65pt, gray!75] (8.40,0.41) -- (9.35,0.41);
  \draw[line width=0.65pt, gray!75] (8.40,-0.41) -- (9.35,-0.41);
  \draw[<->, line width=1.1pt, blue!55!black] (9.16,-0.39) -- (9.16,0.39);
  \node[blue!55!black] at (9.48,0) {$d$};

  % Cota longitud L
  \draw[line width=0.7pt, dotted, gray!80] (0,-1.23) -- (0,-2.16);
  \draw[line width=0.7pt, dotted, gray!80] (8.40,-1.42) -- (8.40,-2.16);
  \draw[<->, line width=1.1pt, blue!55!black] (0.04,-2.05) -- (8.36,-2.05);
  \node[blue!55!black] at (4.20,-1.76) {$L$};
\end{tikzpicture}
</script>

Figura 8: Enunciado del Problema 35: voladizo troncocónico de longitud $L$, con diámetro $3d$ en el empotramiento y $d$ en el extremo libre, y carga $P$ en el extremo libre.

**Datos.** Voladizo de sección circular, con diámetro $3d$ en $x = 0$ y $d$ en $x = L$, que varía de forma lineal. Carga concentrada $P$ en el extremo libre. El módulo $E$ es constante.

**Paso 1: esquema y fuerzas internas.** Se coloca el eje $x$ desde el empotramiento y se corta la viga en la sección $x$ (Figura 9a). El tramo libre tiene longitud $L - x$ y sobre él solo actúa $P$, aplicada en el extremo libre, a la distancia $L - x$ de la sección (Figura 9b). El equilibrio de fuerzas y de momentos da

$$V_x = P, \qquad M_x = P\,(L - x). \tag{34}$$

El momento es máximo en el empotramiento, $x = 0$:

$$M_{\text{máx}} = PL. \tag{35}$$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1cm, y=1cm]
  % ===== (a) Viga y sistema de coordenadas =====
  \begin{scope}
    \node[anchor=west, font=\small] at (-1.50,2.78) {\textbf{(a) Viga y sistema de coordenadas}};

    % Cotas superiores x y L - x
    \draw[<->, line width=1.0pt, green!45!black] (0.04,2.08) -- (3.30,2.08);
    \node[green!45!black] at (1.67,2.34) {$x$};
    \draw[<->, line width=1.0pt, blue!55!black] (3.42,2.08) -- (8.36,2.08);
    \node[blue!55!black] at (5.89,2.34) {$L - x$};

    % Cuerpo de la viga (relacion 3d : d = 1.92 : 0.64 = 3 : 1)
    \fill[blue!35!cyan!20, fill opacity=0.45]
      (0,0.96) -- (8.40,0.32) -- (8.40,-0.32) -- (0,-0.96) -- cycle;
    \draw[line width=1.6pt]
      (0,0.96) -- (8.40,0.32) -- (8.40,-0.32) -- (0,-0.96) -- cycle;

    % Eje longitudinal centroidal
    \draw[line width=0.8pt, magenta!70!blue] (-0.35,0) -- (9.22,0);

    % Empotramiento izquierdo con achurado
    \draw[line width=1.9pt] (0,-1.14) -- (0,1.14);
    \foreach \y/\yb in {-1.12/-1.28, -0.94/-1.10, -0.76/-0.92, -0.58/-0.74,
      -0.40/-0.56, -0.22/-0.38, -0.04/-0.20, 0.14/-0.02, 0.32/0.16,
      0.50/0.34, 0.68/0.52, 0.86/0.70, 1.04/0.88} {
      \draw[line width=0.8pt] (0,\y) -- (-0.34,\yb);
    }

    % Linea de corte seccion x-x (en x = 0.4L = 3.36)
    \draw[line width=1.4pt, dashed, green!45!black] (3.36,-0.704) -- (3.36,0.704);
    \node[anchor=west, green!45!black, font=\footnotesize] at (3.46,0.23) {secci\'on $x$-$x$};

    % Carga P en el extremo libre
    \draw[->, line width=2.2pt, red!70!black] (8.40,-0.32) -- (8.40,-1.32);
    \node[red!70!black] at (8.82,-0.92) {$P$};

    % Cota diametro 3d
    \draw[<->, line width=1.0pt, blue!55!black] (-0.60,-0.96) -- (-0.60,0.96);
    \node[blue!55!black] at (-0.96,0) {$3d$};

    % Cota diametro d
    \draw[line width=0.65pt, gray!75] (8.40,0.32) -- (9.32,0.32);
    \draw[line width=0.65pt, gray!75] (8.40,-0.32) -- (9.32,-0.32);
    \draw[<->, line width=1.0pt, blue!55!black] (9.34,-0.32) -- (9.34,0.32);
    \node[blue!55!black] at (9.62,0) {$d$};

    % Anotacion M_max y cota L
    \node[gray!80!black, font=\footnotesize] at (4.80,-1.02) {$M_{\mathrm{m\acute{a}x}} = PL$};
    \draw[line width=0.7pt, dotted, gray!80] (0,-1.14) -- (0,-1.84);
    \draw[line width=0.7pt, dotted, gray!80] (8.40,-1.34) -- (8.40,-1.84);
    \draw[<->, line width=1.0pt, blue!55!black] (0.04,-1.74) -- (8.36,-1.74);
    \node[blue!55!black] at (4.20,-1.48) {$L$};
  \end{scope}

  % ===== (b) Tramo libre en equilibrio =====
  \begin{scope}[yshift=-5.15cm]
    \node[anchor=west, font=\small] at (-1.50,1.95) {\textbf{(b) Tramo libre en equilibrio}};

    % Tramo libre de longitud L - x = 5.04
    \fill[blue!35!cyan!20, fill opacity=0.45]
      (0.20,0.704) -- (5.24,0.32) -- (5.24,-0.32) -- (0.20,-0.704) -- cycle;
    \draw[line width=1.6pt]
      (0.20,0.704) -- (5.24,0.32) -- (5.24,-0.32) -- (0.20,-0.704) -- cycle;

    % Linea verde discontinua del corte
    \draw[line width=1.4pt, dashed, green!45!black] (0.20,-0.96) -- (0.20,0.96);

    % Fuerza cortante Vx y momento flector Mx en la cara cortada
    \draw[->, line width=2.2pt, red!70!black] (0.20,-0.68) -- (0.20,0.22);
    \node[red!70!black] at (0.58,-0.08) {$V_x$};

    \draw[->, line width=2.0pt, red!70!black] (-0.08,0.44) arc (115:245:0.42);
    \node[red!70!black] at (-1.02,0.12) {$M_x$};

    % Carga P en el extremo libre
    \draw[->, line width=2.2pt, red!70!black] (5.24,-0.32) -- (5.24,-1.32);
    \node[red!70!black] at (5.60,-1.04) {$P$};

    % Ecuaciones de equilibrio y cota L - x
    \node[gray!80!black, font=\footnotesize] at (2.72,-0.92) {$V_x = P, \;\; M_x = P(L - x)$};
    \draw[<->, line width=1.0pt, blue!55!black] (0.24,-1.54) -- (5.20,-1.54);
    \node[blue!55!black] at (2.72,-1.28) {$L - x$};
  \end{scope}

  % ===== (c) Seccion x-x =====
  \begin{scope}[xshift=8.45cm, yshift=-5.15cm]
    \node[font=\small] at (0,1.95) {\textbf{(c) Secci\'on $x$-$x$}};

    % Seccion circular achurada
    \fill[blue!35!cyan!20, fill opacity=0.45] (0,0.05) circle (0.78);
    \begin{scope}
      \clip (0,0.05) circle (0.78);
      \foreach \ya/\yb in {-2.20/-0.40, -1.86/-0.06, -1.52/0.28, -1.18/0.62,
        -0.84/0.96, -0.50/1.30, -0.16/1.64, 0.18/1.98} {
        \draw[line width=0.8pt, green!45!black!70] (-0.90,\ya) -- (0.90,\yb);
      }
    \end{scope}
    \draw[line width=2.2pt, green!45!black] (0,0.05) circle (0.78);

    % Cota del diametro dx
    \draw[<->, line width=1.0pt, blue!55!black] (-0.74,0.05) -- (0.74,0.05);
    \node[blue!55!black] at (0,0.32) {$d_x$};

    % Expresion del diametro
    \node[gray!80!black, font=\footnotesize] at (0,-1.18) {$d_x = d\,(3 - 2x/L)$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 9: Problema 35: (a) viga, coordenadas y corte en la sección $x$; (b) tramo libre en equilibrio con $V_x$ y $M_x$; (c) sección transversal $x$-$x$.

**Paso 2: variación de la sección.** El diámetro varía linealmente de $3d$ a $d$ a lo largo de $L$, es decir, disminuye $2d$ en la longitud $L$:

$$d_x = 3d - \frac{2d}{L}\,x = d\left(3 - \frac{2x}{L}\right). \tag{36}$$

Comprobación: en $x = 0$ da $3d$ y en $x = L$ da $d$. El área y el momento de inercia de la sección circular de diámetro $d_x$ son

$$A_x = \frac{\pi}{4}\,d_x^2 = \frac{\pi}{4}\,d^2\left(3 - \frac{2x}{L}\right)^2, \tag{37}$$

$$I_x = \frac{\pi}{64}\,d_x^4 = \frac{\pi}{64}\,d^4\left(3 - \frac{2x}{L}\right)^4. \tag{38}$$

Obsérvese el exponente $4$ de $I_x$: el momento de inercia depende de la cuarta potencia del diámetro.

**Paso 3: cálculo del esfuerzo.** La fibra extrema está a $y = d_x/2 = \frac{d}{2}\left(3 - \frac{2x}{L}\right)$. Entonces

$$\sigma = \frac{M\,y}{I} = \frac{M_x\,\dfrac{d}{2}\left(3 - \dfrac{2x}{L}\right)}{\dfrac{\pi}{64}\,d^4\left(3 - \dfrac{2x}{L}\right)^4}. \tag{39}$$

Se agrupan las constantes y las potencias de $\left(3 - 2x/L\right)$:

- constantes: $\dfrac{d}{2}\cdot\dfrac{64}{\pi d^4} = \dfrac{32}{\pi d^3}$;
- potencias: $\left(3 - \dfrac{2x}{L}\right)^{1-4} = \left(3 - \dfrac{2x}{L}\right)^{-3}$.

Por tanto

$$\sigma = \frac{32\,M_x}{\pi d^3\left(3 - \dfrac{2x}{L}\right)^3} = \frac{32\,P\,(L - x)}{\pi d^3\left(3 - \dfrac{2x}{L}\right)^3}. \tag{40}$$

Se extrae $L$ del numerador, $L - x = L(1 - x/L)$:

$$\sigma_x = \frac{32\,PL}{\pi d^3}\cdot\frac{1 - \dfrac{x}{L}}{\left(3 - \dfrac{2x}{L}\right)^3}. \tag{41}$$

Con $\alpha = x/L$ se define el esfuerzo adimensional, dividiendo entre la constante $32PL/(\pi d^3)$:

$$\sigma' = \frac{\sigma_x}{\dfrac{32PL}{\pi d^3}} = \frac{1 - \alpha}{(3 - 2\alpha)^3}, \qquad 0 \le \alpha \le 1. \tag{42}$$

La Tabla 5 y la Figura 10 muestran el perfil de esfuerzos. En el empotramiento ($\alpha = 0$) vale $1/27$, y en el extremo libre ($\alpha = 1$) vale $0$.

**Tabla 5:** Problema 35: perfil de esfuerzos $\sigma'(\alpha)$.

| $\alpha$ | $0$ | $0,25$ | $0,50$ | $0,75$ | $0,90$ | $1,00$ |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| $\sigma'$ | $0,0370$ | $0,0480$ | $0,0625$ | **$0,0741$** | $0,0579$ | $0$ |

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=9.2cm, y=0.56cm]
  % Lineas punteadas de referencia (empotramiento y maximo)
  \draw[line width=0.95pt, dotted, green!45!black] (0,3.704) -- (0.75,3.704);
  \draw[line width=0.95pt, dotted, red!70!black] (0.75,0) -- (0.75,7.407);

  % Curva sigma'(alpha) = (1 - alpha) / (3 - 2*alpha)^3 (escala y = 100 * sigma')
  \draw[line width=1.7pt, blue!55!black] plot[smooth] coordinates {
    (0.00,3.704) (0.10,4.100) (0.20,4.552) (0.30,5.064) (0.40,5.635)
    (0.50,6.250) (0.60,6.859) (0.65,7.124) (0.70,7.324) (0.75,7.407)
    (0.80,7.289) (0.85,6.827) (0.90,5.787) (0.94,4.271) (0.97,2.519)
    (1.00,0.000)
  };

  % Puntos destacados
  \fill[green!45!black] (0,3.704) circle (2.6pt);
  \fill[red!70!black] (0.75,7.407) circle (2.8pt);

  % Linea guia y anotaciones
  \draw[line width=0.75pt, red!70!black] (0.64,7.75) -- (0.742,7.42);
  \node[red!70!black, anchor=east, font=\footnotesize] at (0.635,8.18)
    {m\'aximo: $\alpha = \frac{3}{4}, \;\; \sigma' = \frac{2}{27}$};
  \node[green!45!black, anchor=west, font=\footnotesize] at (0.03,2.05)
    {empotramiento: $\sigma' = \frac{1}{27}$};

  % Ejes izquierdo e inferior
  \draw[line width=0.8pt] (0,0) -- (0,9.05);
  \draw[line width=0.8pt] (0,0) -- (1.03,0);

  % Marcas de escala en x e y
  \foreach \x in {0.0,0.2,0.4,0.6,0.8,1.0} {
    \draw[line width=0.7pt] (\x,0) -- (\x,-0.25) node[below, font=\small] {$\x$};
  }
  \foreach \y/\lbl in {0/0.00, 2/0.02, 4/0.04, 6/0.06, 8/0.08} {
    \draw[line width=0.7pt] (0,\y) -- (-0.015,\y) node[left, font=\small] {$\lbl$};
  }

  % Etiquetas de ejes
  \node[font=\small] at (0.50,-1.35) {$\alpha = x/L$};
  \node[rotate=90, font=\small] at (-0.115,4.50) {$\sigma' = \sigma/(32PL/\pi d^3)$};
\end{tikzpicture}
</script>

Figura 10: Problema 35: perfil de esfuerzos $\sigma'(\alpha)$. El esfuerzo crece desde el empotramiento, alcanza su máximo en $\alpha = 3/4$ y cae a cero en el extremo libre.

**Paso 4: sección del esfuerzo máximo.** El perfil no es monótono: el momento disminuye con $x$ (factor $1 - \alpha$), pero la sección se adelgaza y su módulo resistente disminuye aún más rápido. Para hallar el máximo se deriva (42) con la regla del producto:

$$\begin{aligned}
\frac{\mathrm{d}\sigma'}{\mathrm{d}\alpha} &= -(3 - 2\alpha)^{-3} + (1 - \alpha)(-3)(3 - 2\alpha)^{-4}(-2) \\
&= (3 - 2\alpha)^{-4}\bigl[-(3 - 2\alpha) + 6(1 - \alpha)\bigr] \\
&= \frac{3 - 4\alpha}{(3 - 2\alpha)^4}.
\end{aligned} \tag{43}$$

La derivada es positiva para $\alpha < 3/4$ y negativa para $\alpha > 3/4$, y se anula en

$$3 - 4\alpha = 0 \implies \alpha = \frac{3}{4} \quad \left(x = \frac{3L}{4}\right). \tag{44}$$

Es, por tanto, un máximo. Su valor es $\sigma' = \dfrac{1/4}{(3/2)^3} = \dfrac{1/4}{27/8} = \dfrac{2}{27}$, de donde

$$\sigma_{\text{máx}} = \frac{32PL}{\pi d^3}\cdot\frac{2}{27} = \frac{64\,PL}{27\,\pi d^3} \approx 0,7545\,\frac{PL}{d^3}. \tag{45}$$

*Comprobación con números.* En $x = 3L/4$ el momento es el $25\,\%$ del valor en el empotramiento, pero el diámetro es $1,5d$ (la mitad de $3d$) y el módulo resistente, que varía con $D^3$, es la octava parte: $12,5\,\%$. Como $\sigma \propto M/S$, el esfuerzo resulta $25/12,5 = 2$ veces el del empotramiento, de acuerdo con $\sigma' = 2/27$ frente a $1/27$.

**Paso 5: cálculo del giro.** Se sustituye en (32) el momento $M_x = P(L - x)$ y la inercia $I_x$:

$$\theta = \int_0^L \frac{P\,(L - x)}{E\,\dfrac{\pi}{64}\,d^4\left(3 - \dfrac{2x}{L}\right)^4}\,\mathrm{d}x = \frac{64\,P}{E\pi d^4}\int_0^L \frac{L - x}{\left(3 - \dfrac{2x}{L}\right)^4}\,\mathrm{d}x. \tag{46}$$

Se saca $L$ de $(L - x)$ y se cambia la variable: $u = x/L$, $\mathrm{d}u = \mathrm{d}x/L$, con $x = 0 \Rightarrow u = 0$ y $x = L \Rightarrow u = 1$:

$$\theta = \frac{64\,PL^2}{E\pi d^4}\int_0^1 \frac{1 - u}{(3 - 2u)^4}\,\mathrm{d}u. \tag{47}$$

La integral se resuelve con $w = 3 - 2u$. Entonces $u = \frac{3 - w}{2}$, $1 - u = \frac{w - 1}{2}$ y $\mathrm{d}u = -\frac{\mathrm{d}w}{2}$; los límites pasan de $u = 0, 1$ a $w = 3, 1$, y al invertirlos desaparece el signo menos:

$$\begin{aligned}
\int_0^1 \frac{1 - u}{(3 - 2u)^4}\,\mathrm{d}u &= \frac{1}{4}\int_1^3 \frac{w - 1}{w^4}\,\mathrm{d}w = \frac{1}{4}\int_1^3 (w^{-3} - w^{-4})\,\mathrm{d}w \\
&= \frac{1}{4}\left[-\frac{1}{2w^2} + \frac{1}{3w^3}\right]_1^3.
\end{aligned} \tag{48}$$

Se evalúa: en $w = 3$, $-\frac{1}{18} + \frac{1}{81} = -\frac{7}{162}$; en $w = 1$, $-\frac{1}{2} + \frac{1}{3} = -\frac{27}{162}$. La diferencia es $\frac{20}{162}$ y, con el factor $\frac{1}{4}$,

$$\int_0^1 \frac{1 - u}{(3 - 2u)^4}\,\mathrm{d}u = \frac{5}{162}. \tag{49}$$

Entonces

$$\theta = \frac{64 \cdot 5}{162}\,\frac{PL^2}{E\pi d^4} = \frac{160}{81}\,\frac{PL^2}{E\pi d^4} \approx 0,6287\,\frac{PL^2}{Ed^4}\text{ rad}. \tag{50}$$

La cantidad $PL^2/(Ed^4)$ es adimensional ($\text{fuerza} \times \text{longitud}^2$ dividida entre $\text{fuerza}/\text{longitud}^2 \times \text{longitud}^4$), como corresponde a un ángulo en radianes.

**Paso 6: cálculo de la deflexión.** Se aplica (33), con el brazo $L - x$:

$$\delta = \int_0^L (L - x)\frac{P\,(L - x)}{E\,\dfrac{\pi}{64}\,d^4\left(3 - \dfrac{2x}{L}\right)^4}\,\mathrm{d}x = \frac{64\,P}{E\pi d^4}\int_0^L \frac{(L - x)^2}{\left(3 - \dfrac{2x}{L}\right)^4}\,\mathrm{d}x. \tag{51}$$

Con $u = x/L$ se tiene $(L - x)^2 = L^2(1 - u)^2$ y $\mathrm{d}x = L\,\mathrm{d}u$:

$$\delta = \frac{64\,PL^3}{E\pi d^4}\int_0^1 \frac{(1 - u)^2}{(3 - 2u)^4}\,\mathrm{d}u. \tag{52}$$

Con $w = 3 - 2u$, $(1 - u)^2 = \dfrac{(w - 1)^2}{4}$:

$$\begin{aligned}
\int_0^1 \frac{(1 - u)^2}{(3 - 2u)^4}\,\mathrm{d}u &= \frac{1}{8}\int_1^3 \frac{(w - 1)^2}{w^4}\,\mathrm{d}w \\
&= \frac{1}{8}\int_1^3 (w^{-2} - 2w^{-3} + w^{-4})\,\mathrm{d}w \\
&= \frac{1}{8}\left[-\frac{1}{w} + \frac{1}{w^2} - \frac{1}{3w^3}\right]_1^3.
\end{aligned} \tag{53}$$

En $w = 3$: $-\frac{1}{3} + \frac{1}{9} - \frac{1}{81} = -\frac{19}{81}$; en $w = 1$: $-1 + 1 - \frac{1}{3} = -\frac{27}{81}$. La diferencia es $\frac{8}{81}$, y con el factor $\frac{1}{8}$ la integral vale $\frac{1}{81}$. Entonces

$$\delta_{\text{máx}} = \frac{64}{81}\,\frac{PL^3}{E\pi d^4} \approx 0,2515\,\frac{PL^3}{Ed^4}. \tag{54}$$

Las dimensiones de $PL^3/(Ed^4)$ son de longitud, como corresponde a una deflexión.

**Paso 7: comparación con la viga de sección constante.** La viga de referencia es un cilindro de diámetro $3d$ en toda su longitud, con $I_{\text{ref}} = \dfrac{\pi(3d)^4}{64} = \dfrac{81\pi d^4}{64}$ y $M_{\text{máx}} = PL$. Sus valores, con las fórmulas del voladizo con carga en el extremo, son:

$$\sigma_{\text{ref}} = \frac{32\,PL}{\pi(3d)^3} = \frac{32\,PL}{27\,\pi d^3}, \tag{55}$$

$$\theta_{\text{ref}} = \frac{PL^2}{2EI_{\text{ref}}} = \frac{32}{81}\,\frac{PL^2}{E\pi d^4}, \tag{56}$$

$$\delta_{\text{ref}} = \frac{PL^3}{3EI_{\text{ref}}} = \frac{64}{243}\,\frac{PL^3}{E\pi d^4}. \tag{57}$$

Las razones son

$$\frac{\sigma_{\text{máx}}}{\sigma_{\text{ref}}} = \frac{64/27}{32/27} = 2, \qquad \frac{\delta_{\text{máx}}}{\delta_{\text{ref}}} = \frac{64/81}{64/243} = 3, \qquad \frac{\theta}{\theta_{\text{ref}}} = \frac{160/81}{32/81} = 5. \tag{58}$$

> **Resultados del Problema 35**
>
> - **Sección del esfuerzo máximo:** $x = \dfrac{3L}{4}$, con $\sigma_{\text{máx}} = \dfrac{64\,PL}{27\,\pi d^3}$ ($2$ veces el de la viga constante).
> - **Deflexión máxima (extremo libre):** $\delta_{\text{máx}} = \dfrac{64}{81}\,\dfrac{PL^3}{E\pi d^4} \approx 0,2515\,\dfrac{PL^3}{Ed^4}$ ($3$ veces).
> - **Giro en el extremo libre:** $\theta = \dfrac{160}{81}\,\dfrac{PL^2}{E\pi d^4} \approx 0,6287\,\dfrac{PL^2}{Ed^4}$ ($5$ veces).

### 5.4. Problema 36: viga de altura variable con carga uniforme

*Enunciado.* Determine en cuáles secciones transversales de las vigas se desarrollarán los esfuerzos normales máximos, y cuántas veces $\sigma_{\text{máx}}$, $|f|_{\text{máx}}$ y $|\theta|_{\text{máx}}$ son mayores que en vigas similares de sección transversal constante (máxima). Además, calcule la máxima deflexión de la viga y el giro en el extremo libre.

**Datos y supuesto.** Voladizo de longitud $L$ y sección rectangular de ancho $b$ constante (como muestra la figura) y altura que disminuye linealmente de $3h$ a $h$. Carga uniforme $q$ sobre toda la longitud y carga concentrada $P = 3qL$ en el extremo libre.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1cm, y=1cm]
  % ===== Empotramiento 3D oblicuo (dibujado primero para oclusion correcta) =====
  % Cara lateral derecha del empotramiento
  \fill[gray!18] (0,-2.42) -- (0,0.32) -- (1.65,1.24) -- (1.65,-1.50) -- cycle;
  \draw[line width=1.6pt, line join=round]
    (0,-2.42) -- (0,0.32) -- (1.65,1.24) -- (1.65,-1.50) -- cycle;

  % Cara superior del empotramiento
  \fill[gray!10] (-0.60,0.32) -- (0,0.32) -- (1.65,1.24) -- (1.05,1.24) -- cycle;
  \draw[line width=1.6pt, line join=round]
    (-0.60,0.32) -- (0,0.32) -- (1.65,1.24) -- (1.05,1.24) -- cycle;

  % Cara frontal achurada del empotramiento
  \begin{scope}
    \clip (-0.60,-2.42) rectangle (0,0.32);
    \fill[gray!12] (-0.60,-2.42) rectangle (0,0.32);
    \foreach \ya/\yb in {-2.65/-1.95, -2.35/-1.65, -2.05/-1.35, -1.75/-1.05,
      -1.45/-0.75, -1.15/-0.45, -0.85/-0.15, -0.55/0.15, -0.25/0.45, 0.05/0.75} {
      \draw[line width=0.9pt] (-0.65,\ya) -- (0.05,\yb);
    }
  \end{scope}
  \draw[line width=1.8pt, line join=round] (-0.60,-2.42) rectangle (0,0.32);

  % ===== Cuerpo 3D de la viga (relacion 3h : h = 2.16 : 0.72 = 3 : 1) =====
  % Cara superior
  \fill[blue!22!cyan!12] (0,0) -- (7.60,0) -- (8.88,0.72) -- (1.28,0.72) -- cycle;
  \draw[line width=1.7pt, line join=round]
    (0,0) -- (7.60,0) -- (8.88,0.72) -- (1.28,0.72) -- cycle;

  % Cara frontal trapezoidal
  \fill[blue!35!cyan!18] (0,0) -- (7.60,0) -- (7.60,-0.72) -- (0,-2.16) -- cycle;
  \draw[line width=1.7pt, line join=round]
    (0,0) -- (7.60,0) -- (7.60,-0.72) -- (0,-2.16) -- cycle;

  % Cara del extremo libre
  \fill[blue!40!cyan!24] (7.60,0) -- (8.88,0.72) -- (8.88,0.00) -- (7.60,-0.72) -- cycle;
  \draw[line width=1.7pt, line join=round]
    (7.60,0) -- (8.88,0.72) -- (8.88,0.00) -- (7.60,-0.72) -- cycle;

  % ===== Carga uniforme distribuida q =====
  \draw[line width=1.5pt, green!45!black] (1.02,1.08) -- (8.18,1.08);
  \foreach \x in {1.16, 1.64, 2.12, 2.60, 3.08, 3.56, 4.04, 4.52, 5.00, 5.48, 5.96, 6.44, 6.92, 7.40, 7.88} {
    \draw[->, line width=1.3pt, green!45!black] (\x,1.06) -- (\x,0.50);
  }
  \node[green!45!black, font=\large] at (4.60,1.34) {$q$};

  % ===== Carga concentrada P = 3qL en el extremo libre =====
  \draw[->, line width=2.4pt, red!65!black] (8.24,0.36) -- (8.24,-1.20);
  \node[red!65!black, anchor=west] at (8.36,-0.98) {$P = 3qL$};

  % ===== Cotas y lineas auxiliares =====
  % Altura 3h
  \draw[line width=0.65pt, gray!75] (-0.60,0) -- (-1.58,0);
  \draw[line width=0.65pt, gray!75] (-0.60,-2.16) -- (-1.58,-2.16);
  \draw[<->, line width=1.1pt, blue!55!black] (-1.44,-2.12) -- (-1.44,-0.04);
  \node[blue!55!black] at (-1.78,-1.08) {$3h$};

  % Altura h
  \draw[line width=0.65pt, gray!75] (8.88,0.72) -- (9.78,0.72);
  \draw[line width=0.65pt, gray!75] (8.88,0.00) -- (9.78,0.00);
  \draw[<->, line width=1.1pt, blue!55!black] (9.62,0.04) -- (9.62,0.68);
  \node[blue!55!black] at (9.92,0.36) {$h$};

  % Longitud L
  \draw[line width=0.7pt, dotted, gray!80] (0,-2.42) -- (0,-3.02);
  \draw[line width=0.7pt, dotted, gray!80] (7.60,-0.72) -- (7.60,-3.02);
  \draw[<->, line width=1.1pt, blue!55!black] (0.04,-2.90) -- (7.56,-2.90);
  \node[blue!55!black] at (3.80,-2.62) {$L$};

  % Nota descriptiva inferior
  \node[font=\footnotesize, gray!75!black] at (3.80,-3.36)
    {secci\'on rectangular de ancho $b$ constante; altura $3h$ en el empotramiento y $h$ en el extremo libre};
\end{tikzpicture}
</script>

Figura 11: Enunciado del Problema 36: voladizo de sección rectangular, con altura $3h$ en el empotramiento y $h$ en el extremo libre, carga uniforme $q$ en toda la longitud $L$ y carga concentrada $P = 3qL$ en el extremo libre.

**Paso 1: esquema y fuerzas internas.** Se corta la viga en la sección $x$ (Figura 12). El tramo libre, de longitud $L - x$, soporta la carga uniforme $q$ sobre esa longitud (resultante $q(L - x)$, aplicada en el punto medio del tramo, a $(L - x)/2$ de la sección) y la carga concentrada $3qL$ en el extremo, a la distancia $L - x$. Las fuerzas internas son

$$V_x = q\,(L - x) + 3qL = 4qL - q\,x = qL\left(4 - \frac{x}{L}\right), \tag{59}$$

$$\begin{aligned}
M_x &= 3qL(L - x) + \frac{1}{2}\,q\,(L - x)^2 \\
&= qL^2\left[3\left(1 - \frac{x}{L}\right) + \frac{1}{2}\left(1 - \frac{x}{L}\right)^2\right].
\end{aligned} \tag{60}$$

En el empotramiento ($x = 0$): $M_{\text{máx}} = qL^2\left(3 + \frac{1}{2}\right) = 3,5\,qL^2$. En el extremo libre ($x = L$): $M = 0$.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=1cm, y=1cm]
  % ===== (a) Viga, cargas y sistema de coordenadas =====
  \begin{scope}
    \node[anchor=west, font=\small] at (-1.50,1.90) {\textbf{(a) Viga, cargas y sistema de coordenadas}};

    % Cotas superiores x y L - x
    \draw[<->, line width=1.0pt, green!45!black] (0.04,1.22) -- (3.30,1.22);
    \node[green!45!black] at (1.67,1.48) {$x$};
    \draw[<->, line width=1.0pt, blue!55!black] (3.42,1.22) -- (8.36,1.22);
    \node[blue!55!black] at (5.89,1.48) {$L - x$};

    % Carga uniforme q sobre toda la viga
    \draw[line width=1.4pt, green!45!black] (-0.06,0.58) -- (8.46,0.58);
    \foreach \x in {0.32, 0.80, 1.28, 1.76, 2.24, 2.72, 3.20, 3.68, 4.16, 4.64, 5.12, 5.60, 6.08, 6.56, 7.04, 7.52, 8.00} {
      \draw[->, line width=1.1pt, green!45!black] (\x,0.56) -- (\x,0.06);
    }
    \node[green!45!black] at (4.20,0.82) {$q$};

    % Cuerpo de la viga (relacion 3h : h = 1.68 : 0.56 = 3 : 1)
    \fill[blue!35!cyan!18] (0,0) -- (8.40,0) -- (8.40,-0.56) -- (0,-1.68) -- cycle;
    \draw[line width=1.6pt] (0,0) -- (8.40,0) -- (8.40,-0.56) -- (0,-1.68) -- cycle;

    % Empotramiento izquierdo con achurado
    \draw[line width=1.9pt] (0,-1.84) -- (0,0.12);
    \foreach \y/\yb in {-1.80/-1.96, -1.62/-1.78, -1.44/-1.60, -1.26/-1.42,
      -1.08/-1.24, -0.90/-1.06, -0.72/-0.88, -0.54/-0.70, -0.36/-0.52,
      -0.18/-0.34, 0.00/-0.16} {
      \draw[line width=0.8pt] (0,\y) -- (-0.34,\yb);
    }

    % Corte seccion x-x (en x = 0.4L = 3.36, y_inf = -1.232)
    \draw[line width=1.4pt, dashed, green!45!black] (3.36,-1.40) -- (3.36,0.14);
    \node[anchor=west, green!45!black, font=\footnotesize] at (3.46,-0.38) {secci\'on $x$-$x$};

    % Carga concentrada P = 3qL en el extremo libre
    \draw[->, line width=2.2pt, red!65!black] (8.40,0) -- (8.40,-1.28);
    \node[red!65!black, anchor=west] at (8.56,-0.98) {$P = 3qL$};

    % Cota altura 3h
    \draw[<->, line width=1.0pt, blue!55!black] (-0.62,-1.66) -- (-0.62,-0.02);
    \node[blue!55!black] at (-0.98,-0.84) {$3h$};

    % Cota altura h
    \draw[line width=0.65pt, gray!75] (8.40,0) -- (9.34,0);
    \draw[line width=0.65pt, gray!75] (8.40,-0.56) -- (9.34,-0.56);
    \draw[<->, line width=1.0pt, blue!55!black] (9.22,-0.54) -- (9.22,-0.02);
    \node[blue!55!black] at (9.50,-0.28) {$h$};

    % Anotacion de seccion (sin solapar la cota L) y cota L
    \node[gray!80!black, font=\footnotesize] at (6.05,-1.60)
      {secci\'on rectangular, ancho $b$ constante};
    \draw[line width=0.7pt, dotted, gray!80] (0,-1.84) -- (0,-2.48);
    \draw[line width=0.7pt, dotted, gray!80] (8.40,-1.30) -- (8.40,-2.48);
    \draw[<->, line width=1.0pt, blue!55!black] (0.04,-2.38) -- (8.36,-2.38);
    \node[blue!55!black] at (4.20,-2.10) {$L$};
  \end{scope}

  % ===== (b) Tramo libre en equilibrio =====
  \begin{scope}[yshift=-5.25cm]
    \node[anchor=west, font=\small] at (-1.50,1.45) {\textbf{(b) Tramo libre en equilibrio}};

    % Carga uniforme q sobre el tramo libre (L - x = 5.04)
    \draw[line width=1.4pt, green!45!black] (0.14,0.58) -- (5.30,0.58);
    \foreach \x in {0.42, 0.90, 1.38, 1.86, 2.34, 2.82, 3.30, 3.78, 4.26, 4.74, 5.08} {
      \draw[->, line width=1.1pt, green!45!black] (\x,0.56) -- (\x,0.06);
    }
    \node[green!45!black] at (2.72,0.82) {$q$};

    % Tramo libre de longitud L - x
    \fill[blue!35!cyan!18] (0.20,0) -- (5.24,0) -- (5.24,-0.56) -- (0.20,-1.232) -- cycle;
    \draw[line width=1.6pt] (0.20,0) -- (5.24,0) -- (5.24,-0.56) -- (0.20,-1.232) -- cycle;

    % Linea verde discontinua del corte
    \draw[line width=1.4pt, dashed, green!45!black] (0.20,-1.40) -- (0.20,0.16);

    % Fuerza cortante Vx y momento flector Mx en la cara cortada
    \draw[->, line width=2.2pt, red!65!black] (0.20,-1.22) -- (0.20,-0.32);
    \node[red!65!black] at (0.58,-0.68) {$V_x$};

    \draw[->, line width=2.0pt, red!65!black] (-0.08,-0.16) arc (115:245:0.40);
    \node[red!65!black] at (-0.98,-0.50) {$M_x$};

    % Carga concentrada 3qL en el extremo libre
    \draw[->, line width=2.2pt, red!65!black] (5.24,0) -- (5.24,-1.28);
    \node[red!65!black, anchor=west] at (5.38,-1.02) {$3qL$};

    % Cota L - x
    \draw[<->, line width=1.0pt, blue!55!black] (0.24,-2.02) -- (5.20,-2.02);
    \node[blue!55!black] at (2.72,-1.74) {$L - x$};
  \end{scope}

  % ===== (c) Seccion x-x =====
  \begin{scope}[xshift=8.45cm, yshift=-5.25cm]
    \node[font=\small] at (0,1.45) {\textbf{(c) Secci\'on $x$-$x$}};

    % Seccion rectangular achurada
    \fill[blue!35!cyan!18] (-0.38,-1.35) rectangle (0.38,0.55);
    \begin{scope}
      \clip (-0.38,-1.35) rectangle (0.38,0.55);
      \foreach \ya/\yb in {-1.85/-0.85, -1.52/-0.52, -1.19/-0.19, -0.86/0.14,
        -0.53/0.47, -0.20/0.80, 0.13/1.13} {
        \draw[line width=0.8pt, green!45!black!75] (-0.50,\ya) -- (0.50,\yb);
      }
    \end{scope}
    \draw[line width=2.2pt, green!45!black] (-0.38,-1.35) rectangle (0.38,0.55);

    % Cota de altura hx
    \draw[<->, line width=1.0pt, blue!55!black] (0.68,-1.32) -- (0.68,0.52);
    \node[blue!55!black] at (1.02,-0.40) {$h_x$};

    % Cota de ancho b
    \draw[<->, line width=1.0pt, blue!55!black] (-0.36,-1.65) -- (0.36,-1.65);
    \node[blue!55!black] at (0,-1.92) {$b$};

    % Expresion de hx rotada a la izquierda
    \node[rotate=90, font=\footnotesize] at (-0.98,-0.40) {$h_x = h\,(3 - 2x/L)$};
  \end{scope}
\end{tikzpicture}
</script>

Figura 12: Problema 36: (a) viga, cargas y corte en la sección $x$; (b) tramo libre en equilibrio con $V_x$ y $M_x$; (c) sección rectangular $x$-$x$.

**Paso 2: variación del peralte.** La altura disminuye linealmente de $3h$ a $h$, es decir, $2h$ en la longitud $L$:

$$h_x = 3h - \frac{2h}{L}\,x = h\left(3 - \frac{2x}{L}\right). \tag{61}$$

Comprobación: $x = 0$ da $3h$ y $x = L$ da $h$. El momento de inercia del rectángulo es

$$I_x = \frac{1}{12}\,b\,h_x^3 = \frac{1}{12}\,b\,h^3\left(3 - \frac{2x}{L}\right)^3. \tag{62}$$

Aquí el exponente es $3$, porque en un rectángulo $I$ varía con el cubo de la altura.

**Paso 3: cálculo del esfuerzo normal.** Con $c = h_x/2$, el esfuerzo extremo es

$$\sigma = \frac{M_x\,c}{I_x} = \frac{M_x\,(h_x/2)}{b\,h_x^3/12} = \frac{6\,M_x}{b\,h_x^2}. \tag{63}$$

Con $h_x = h(3 - 2x/L)$ y (60):

$$\sigma = \frac{6\,qL^2}{b\,h^2}\cdot\frac{3\left(1 - \dfrac{x}{L}\right) + \dfrac{1}{2}\left(1 - \dfrac{x}{L}\right)^2}{\left(3 - \dfrac{2x}{L}\right)^2}. \tag{64}$$

Se define el esfuerzo adimensional dividiendo entre $6qL^2/(bh^2)$, con $\alpha = x/L$:

$$\sigma' = \frac{\sigma}{\dfrac{6\,qL^2}{b\,h^2}} = \frac{3(1 - \alpha) + \frac{1}{2}(1 - \alpha)^2}{(3 - 2\alpha)^2}. \tag{65}$$

Se simplifica el numerador multiplicando y dividiendo por $2$ y sacando factor común $(1 - \alpha)$:

$$\begin{aligned}
\sigma' &= \frac{6(1 - \alpha) + (1 - \alpha)^2}{2\,(3 - 2\alpha)^2} \\
&= \frac{(1 - \alpha)\bigl[6 + (1 - \alpha)\bigr]}{2\,(3 - 2\alpha)^2} = \frac{(1 - \alpha)(7 - \alpha)}{2\,(3 - 2\alpha)^2}, \qquad 0 \le \alpha \le 1.
\end{aligned} \tag{66}$$

Se mantiene el cuadrado del denominador en todas las líneas. En el empotramiento $\sigma'(0) = \dfrac{7}{2 \cdot 9} = \dfrac{7}{18}$ y en el extremo libre $\sigma'(1) = 0$ (Tabla 6 y Figura 13).

**Tabla 6:** Problema 36: perfil de esfuerzos $\sigma'(\alpha)$.

| $\alpha$ | $0$ | $0,2$ | $0,4$ | $0,6$ | $0,8$ | $1,0$ |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| $\sigma'$ | $0,3889$ | $0,4024$ | **$0,4091$** | $0,3951$ | $0,3163$ | $0$ |

**Paso 4: sección del esfuerzo máximo.** Se escribe $\sigma' = N/D$ con $N = (1 - \alpha)(7 - \alpha) = 7 - 8\alpha + \alpha^2$ y $D = 2(3 - 2\alpha)^2$, de modo que $N' = -8 + 2\alpha$ y $D' = -8(3 - 2\alpha)$. Por la regla del cociente:

$$\begin{aligned}
\frac{\mathrm{d}\sigma'}{\mathrm{d}\alpha} &= \frac{N'D - ND'}{D^2} \\
&= \frac{(3 - 2\alpha)\bigl[2(-8 + 2\alpha)(3 - 2\alpha) + 8(7 - 8\alpha + \alpha^2)\bigr]}{4(3 - 2\alpha)^4} \\
&= \frac{(3 - 2\alpha)(8 - 20\alpha)}{4(3 - 2\alpha)^4} = \frac{2 - 5\alpha}{(3 - 2\alpha)^3}.
\end{aligned} \tag{67}$$

El corchete se simplificó así: $2(-8 + 2\alpha)(3 - 2\alpha) = -48 + 44\alpha - 8\alpha^2$, que sumado a $56 - 64\alpha + 8\alpha^2$ da $8 - 20\alpha$. La derivada se anula en

$$2 - 5\alpha = 0 \implies \alpha = \frac{2}{5} \quad (x = 0,4L), \tag{68}$$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, x=9.2cm, y=0.90cm]
  % Lineas punteadas de referencia (empotramiento y maximo)
  \draw[line width=0.95pt, dotted, green!45!black] (0,3.889) -- (0.40,3.889);
  \draw[line width=0.95pt, dotted, red!70!black] (0.40,0) -- (0.40,4.091);

  % Curva sigma'(alpha) = (1 - alpha)*(7 - alpha) / (2*(3 - 2*alpha)^2) (escala y = 10 * sigma')
  \draw[line width=1.7pt, blue!55!black] plot[smooth] coordinates {
    (0.00,3.889) (0.10,3.960) (0.20,4.024) (0.30,4.071) (0.40,4.091)
    (0.50,4.063) (0.60,3.951) (0.70,3.691) (0.80,3.163) (0.85,2.729)
    (0.90,2.118) (0.95,1.250) (1.00,0.000)
  };

  % Puntos destacados
  \fill[green!45!black] (0,3.889) circle (2.6pt);
  \fill[red!70!black] (0.40,4.091) circle (2.8pt);

  % Linea guia y anotaciones
  \draw[line width=0.75pt, red!70!black] (0.29,4.30) -- (0.392,4.10);
  \node[red!70!black, anchor=east, font=\footnotesize] at (0.295,4.58)
    {m\'aximo: $\alpha = \frac{2}{5}, \;\; \sigma' = \frac{9}{22}$};
  \node[green!45!black, anchor=west, font=\footnotesize] at (0.03,2.90)
    {empotramiento: $\sigma' = \frac{7}{18}$};

  % Ejes izquierdo e inferior
  \draw[line width=0.8pt] (0,0) -- (0,5.52);
  \draw[line width=0.8pt] (0,0) -- (1.03,0);

  % Marcas de escala en x e y
  \foreach \x in {0.0,0.2,0.4,0.6,0.8,1.0} {
    \draw[line width=0.7pt] (\x,0) -- (\x,-0.16) node[below, font=\small] {$\x$};
  }
  \foreach \y/\lbl in {0/0.0, 1/0.1, 2/0.2, 3/0.3, 4/0.4, 5/0.5} {
    \draw[line width=0.7pt] (0,\y) -- (-0.015,\y) node[left, font=\small] {$\lbl$};
  }

  % Etiquetas de ejes
  \node[font=\small] at (0.50,-0.84) {$\alpha = x/L$};
  \node[rotate=90, font=\small] at (-0.11,2.75) {$\sigma' = \sigma/(6qL^2/bh^2)$};
\end{tikzpicture}
</script>

Figura 13: Problema 36: perfil de esfuerzos $\sigma'(\alpha)$. El máximo está en $\alpha = 2/5$ y es apenas mayor que el valor en el empotramiento.

y cambia de positiva a negativa, de modo que es un máximo. En ese punto

$$\sigma' = \frac{(0,6)(6,6)}{2\,(2,2)^2} = \frac{3,96}{9,68} = \frac{9}{22}, \tag{69}$$

y por tanto

$$\sigma_{\text{máx}} = \frac{6\,qL^2}{b\,h^2}\cdot\frac{9}{22} = \frac{27\,qL^2}{11\,b\,h^2} \approx 2,455\,\frac{qL^2}{bh^2}. \tag{70}$$

La viga de referencia (altura $3h$ constante) tiene su esfuerzo máximo en el empotramiento: $\sigma_{\text{ref}} = \dfrac{6\,(3,5\,qL^2)}{b\,(3h)^2} = \dfrac{7\,qL^2}{3\,b\,h^2} \approx 2,333\,\dfrac{qL^2}{bh^2}$, que coincide con $\sigma'(0) = 7/18$. La razón es

$$\frac{\sigma_{\text{máx}}}{\sigma_{\text{ref}}} = \frac{27/11}{7/3} = \frac{81}{77} \approx 1,05. \tag{71}$$

**Paso 5: cálculo del giro.** Se sustituyen (60) y (62) en (32):

$$\theta = \int_0^L \frac{qL^2\left[3\left(1 - \dfrac{x}{L}\right) + \dfrac{1}{2}\left(1 - \dfrac{x}{L}\right)^2\right]}{E\,\dfrac{1}{12}\,b\,h^3\left(3 - \dfrac{2x}{L}\right)^3}\,\mathrm{d}x. \tag{72}$$

Con $u = x/L$ y $\mathrm{d}x = L\,\mathrm{d}u$:

$$\theta = \frac{12\,qL^3}{E\,b\,h^3}\int_0^1 \frac{3(1 - u) + \frac{1}{2}(1 - u)^2}{(3 - 2u)^3}\,\mathrm{d}u. \tag{73}$$

Al meter el factor $12$ en el numerador, $12\left[3(1 - u) + \frac{1}{2}(1 - u)^2\right] = 6\bigl[6(1 - u) + (1 - u)^2\bigr]$, queda

$$\theta = \frac{6\,qL^3}{E\,b\,h^3}\int_0^1 \frac{6(1 - u) + (1 - u)^2}{(3 - 2u)^3}\,\mathrm{d}u, \qquad 6(1 - u) + (1 - u)^2 = (1 - u)(7 - u). \tag{74}$$

Se conserva el cubo del denominador, que proviene de (62). Para integrar se usa $w = 3 - 2u$: $1 - u = \frac{w - 1}{2}$, $7 - u = \frac{w + 11}{2}$ y $\mathrm{d}u = -\frac{\mathrm{d}w}{2}$, con límites $w = 3$ a $w = 1$. Entonces $(1 - u)(7 - u) = \dfrac{(w - 1)(w + 11)}{4} = \dfrac{w^2 + 10w - 11}{4}$ y

$$\begin{aligned}
\int_0^1 \frac{(1 - u)(7 - u)}{(3 - 2u)^3}\,\mathrm{d}u &= \frac{1}{8}\int_1^3 \frac{w^2 + 10w - 11}{w^3}\,\mathrm{d}w \\
&= \frac{1}{8}\int_1^3 \left(\frac{1}{w} + \frac{10}{w^2} - \frac{11}{w^3}\right)\mathrm{d}w \\
&= \frac{1}{8}\left[\ln w - \frac{10}{w} + \frac{11}{2w^2}\right]_1^3.
\end{aligned} \tag{75}$$

En $w = 3$: $\ln 3 - \frac{10}{3} + \frac{11}{18} = \ln 3 - \frac{49}{18}$. En $w = 1$: $-10 + \frac{11}{2} = -\frac{81}{18}$. La diferencia es $\ln 3 + \frac{32}{18} = \ln 3 + \frac{16}{9}$, y con el factor $\frac{1}{8}$ la integral vale $\frac{\ln 3}{8} + \frac{2}{9}$. Aparece el logaritmo natural porque el integrando contiene un término $1/w$. Entonces

$$\theta = 6\left(\frac{\ln 3}{8} + \frac{2}{9}\right)\frac{qL^3}{Ebh^3} = \left(\frac{3}{4}\ln 3 + \frac{4}{3}\right)\frac{qL^3}{Ebh^3} \approx 2,157\,\frac{qL^3}{Ebh^3}\text{ rad}. \tag{76}$$

**Paso 6: cálculo de la deflexión.** Con el mismo procedimiento se obtiene la deflexión aplicando (33), con el brazo $L - x = L(1 - u)$:

$$\delta = \frac{6\,qL^4}{E\,b\,h^3}\int_0^1 \frac{(1 - u)^2(7 - u)}{(3 - 2u)^3}\,\mathrm{d}u. \tag{77}$$

Con $w = 3 - 2u$, $(1 - u)^2(7 - u) = \dfrac{(w - 1)^2(w + 11)}{8}$ y $\mathrm{d}u = \dfrac{\mathrm{d}w}{2}$ (con los límites ya invertidos). Como $(w - 1)^2(w + 11) = w^3 + 9w^2 - 21w + 11$:

$$\begin{aligned}
\int_0^1 \frac{(1 - u)^2(7 - u)}{(3 - 2u)^3}\,\mathrm{d}u &= \frac{1}{16}\int_1^3 \left(1 + \frac{9}{w} - \frac{21}{w^2} + \frac{11}{w^3}\right)\mathrm{d}w \\
&= \frac{1}{16}\left[w + 9\ln w + \frac{21}{w} - \frac{11}{2w^2}\right]_1^3.
\end{aligned} \tag{78}$$

En $w = 3$: $3 + 9\ln 3 + 7 - \frac{11}{18} = \frac{169}{18} + 9\ln 3$. En $w = 1$: $1 + 21 - \frac{11}{2} = \frac{297}{18}$. La diferencia es $9\ln 3 - \frac{128}{18} = 9\ln 3 - \frac{64}{9}$, y con el factor $\frac{1}{16}$ la integral vale $\frac{9}{16}\ln 3 - \frac{4}{9}$. Entonces

$$\delta_{\text{máx}} = 6\left(\frac{9}{16}\ln 3 - \frac{4}{9}\right)\frac{qL^4}{Ebh^3} = \left(\frac{27}{8}\ln 3 - \frac{8}{3}\right)\frac{qL^4}{Ebh^3} \approx 1,041\,\frac{qL^4}{Ebh^3}. \tag{79}$$

**Paso 7: comparación con la viga de sección constante.** La viga de referencia es rectangular de altura $3h$ constante, con $I_{\text{ref}} = \dfrac{b(3h)^3}{12} = \dfrac{9\,bh^3}{4}$. Se superponen los efectos de $P = 3qL$ y de $q$ con las fórmulas del voladizo:

$$\theta_{\text{ref}} = \frac{PL^2}{2EI_{\text{ref}}} + \frac{qL^3}{6EI_{\text{ref}}} = \left(\frac{3}{2} + \frac{1}{6}\right)\frac{qL^3}{EI_{\text{ref}}} = \frac{20}{27}\,\frac{qL^3}{Ebh^3}, \tag{80}$$

$$\delta_{\text{ref}} = \frac{PL^3}{3EI_{\text{ref}}} + \frac{qL^4}{8EI_{\text{ref}}} = \left(1 + \frac{1}{8}\right)\frac{qL^4}{EI_{\text{ref}}} = \frac{1}{2}\,\frac{qL^4}{Ebh^3}. \tag{81}$$

Las razones son

$$\frac{\theta}{\theta_{\text{ref}}} = \frac{27}{20}\left(\frac{3}{4}\ln 3 + \frac{4}{3}\right) \approx 2,91, \qquad \frac{\delta_{\text{máx}}}{\delta_{\text{ref}}} = 2\left(\frac{27}{8}\ln 3 - \frac{8}{3}\right) \approx 2,08. \tag{82}$$

> **Resultados del Problema 36**
>
> - **Sección del esfuerzo máximo:** $x = 0,4L$, con $\sigma_{\text{máx}} = \dfrac{27\,qL^2}{11\,bh^2}$ ($\approx 1,05$ veces el de la viga constante).
> - **Deflexión máxima (extremo libre):** $\delta_{\text{máx}} = \left(\dfrac{27}{8}\ln 3 - \dfrac{8}{3}\right)\dfrac{qL^4}{Ebh^3} \approx 1,041\,\dfrac{qL^4}{Ebh^3}$ ($\approx 2,08$ veces).
> - **Giro en el extremo libre:** $\theta = \left(\dfrac{3}{4}\ln 3 + \dfrac{4}{3}\right)\dfrac{qL^3}{Ebh^3} \approx 2,157\,\dfrac{qL^3}{Ebh^3}$ ($\approx 2,91$ veces).

### 5.5. Verificación y errores frecuentes (Problemas 35 y 36)

#### Verificaciones realizadas

1. **Integración numérica directa.** Se evaluaron numéricamente las integrales del giro y de la deflexión de ambos problemas. Los resultados coinciden con los valores exactos hasta la sexta cifra: $160/81 = 1,975309$ y $64/81 = 0,790123$ (Problema 35); $2,157293$ y $1,041150$ (Problema 36).
2. **Máximos.** El máximo de $\sigma'$ calculado numéricamente cae en $\alpha = 0,75$ (valor $0,07407 = 2/27$) en el Problema 35 y en $\alpha = 0,40$ (valor $0,40909 = 9/22$) en el Problema 36.
3. **Prueba del empotramiento.** En $\alpha = 0$ la viga variable tiene la sección máxima, de modo que su esfuerzo debe coincidir con el de la viga de referencia. Así, $\sigma'(0)$ debe ser $1/27$ en el Problema 35 (porque $\sigma_{\text{ref}} = \frac{32PL}{27\pi d^3}$) y $7/18$ en el Problema 36 (porque $\sigma_{\text{ref}} = \frac{7qL^2}{3bh^2}$ y $6 \cdot \frac{7}{18} = \frac{7}{3}$). Ambos valores se cumplen.
4. **Prueba del brazo.** La fórmula (33) reproduce $PL^3/(3EI)$ en la viga prismática.

#### Errores frecuentes

- *Perder un exponente.* En la sección circular, $I \propto (3 - 2\alpha)^4$ y $S = I/c \propto (3 - 2\alpha)^3$, por lo que $\sigma'$ lleva exponente $3$ y las integrales de $\theta$ y $\delta$ llevan exponente $4$ en el denominador. En la sección rectangular, $I \propto (3 - 2\alpha)^3$ y $S \propto (3 - 2\alpha)^2$: $\sigma'$ lleva exponente $2$ y las integrales llevan exponente $3$. Perder un exponente al simplificar produce un perfil de esfuerzos sin máximo interior y valores de $\theta$ y $\delta$ varias veces mayores que los correctos.
- *Usar $x$ como brazo en la deflexión.* El brazo es la distancia de la sección al extremo libre, $L - x$.
- *Normalizar con una constante equivocada.* $\sigma'$ debe valer exactamente $\sigma_{\text{ref}}$ dividido por la constante de normalización en $\alpha = 0$ (prueba del empotramiento).
- *Olvidar las dimensiones.* $\theta$ es adimensional y $\delta$ tiene dimensión de longitud; si no salen, hay un error.

#### Resumen comparativo

**Tabla 7:** Resultados de los Problemas 35 y 36 y razón respecto a la viga de sección constante.

| Magnitud | P35: valor | Razón | P36: valor | Razón |
| --- | :---: | :---: | :---: | :---: |
| Sección de $\sigma_{\text{máx}}$ | $x = \dfrac{3}{4}L$ | — | $x = 0,4L$ | — |
| $\sigma_{\text{máx}}$ | $\dfrac{64\,PL}{27\pi d^3}$ | $2$ | $\dfrac{27\,qL^2}{11\,bh^2}$ | $1,05$ |
| $\delta_{\text{máx}}$ | $0,2515\,\dfrac{PL^3}{Ed^4}$ | $3$ | $1,041\,\dfrac{qL^4}{Ebh^3}$ | $2,08$ |
| $\theta$ | $0,6287\,\dfrac{PL^2}{Ed^4}$ | $5$ | $2,157\,\dfrac{qL^3}{Ebh^3}$ | $2,91$ |

## 6. Conclusiones

- Cada integración de la cadena $q \to V \to M \to \theta \to w$ introduce una constante que debe fijarse con las condiciones de apoyo.
- Con $EI$ variable, el cambio esencial es dividir $M$ entre $EI(x)$ punto a punto; la regla del trapecio permite resolver el problema con una hoja de cálculo. La corrección $b = \frac{1}{L}\int \theta\,\mathrm{d}x$ equivale a imponer $w(L) = 0$.
- El ejemplo de la viga simplemente apoyada converge a $w_{\text{máx}} \approx 0,505\text{ mm}$ en $x \approx 2,2\text{–}2,25\text{ m}$; debe vigilarse la coherencia de unidades (factor $10^3$ en las columnas de la tabla).
- El método gráfico con escalas conduce a la misma integral, con la condición $E_z = E_x E_y e$.
- En los voladizos, el esfuerzo normal máximo no está en el empotramiento: en el Problema 35 aparece a $3L/4$ y duplica el valor de la viga cilíndrica de referencia; en el Problema 36 aparece a $0,4L$ y excede apenas en un $5\,\%$ al valor del empotramiento, porque la altura variable acompaña bien al momento flector.
- La deflexión y el giro del extremo libre aumentan mucho más ($3$ y $5$ veces en el cono, $2,08$ y $2,91$ veces en la viga rectangular), lo que muestra que aligerar una viga reduce su peso pero penaliza sobre todo su rigidez.
- El procedimiento de los voladizos es siempre el mismo y se comprueba con dos pruebas simples: que el esfuerzo en el empotramiento coincida con el de la viga de referencia y que las dimensiones de los resultados sean correctas.

## Apéndice A: Tabla del ejemplo

Columnas de la tabla del ejemplo en sus unidades originales: $x$ en $\text{m}$, $q$ en $\text{kN/m}$, $V$ en $\text{kN}$, $M$ en $\text{kN}\cdot\text{m}$, $h$ en $\text{m}$, $I$ en $\text{m}^4$; $M/EI$, $\theta'$, $w'$, $\theta$ y $w$ en las unidades mixtas descritas en la sección 5.1. Aquí $\theta'$ y $w'$ son el giro y la deflexión provisionales (con $\theta_0 = 0$), y $\theta$ y $w$ los valores corregidos.

**Tabla 8:** Tabla del ejemplo ($n = 40$ tramos de $\Delta x = 0,125\text{ m}$).

<div style="overflow-x: auto;">
<table style="font-size: 0.78em; white-space: nowrap;">
  <thead>
    <tr>
      <th>$x/L$</th>
      <th>$x$</th>
      <th>$q$</th>
      <th>$V$</th>
      <th>$M$</th>
      <th>$h$</th>
      <th>$I$</th>
      <th>$M/EI$</th>
      <th>$\theta'$</th>
      <th>$w'$</th>
      <th>$\theta$</th>
      <th>$w$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0,000</td><td>0,000</td><td>0,000</td><td>16,6719</td><td>0,0000</td><td>0,2000</td><td>0,000167</td><td>0,000E+00</td><td>0,000E+00</td><td>0,000E+00</td><td>&minus;4,058E&minus;07</td><td>0,000E+00</td></tr>
    <tr><td>0,025</td><td>0,125</td><td>0,500</td><td>16,6406</td><td>2,0820</td><td>0,2075</td><td>0,000186</td><td>5,593E&minus;08</td><td>3,496E&minus;09</td><td>2,185E&minus;10</td><td>&minus;4,023E&minus;07</td><td>&minus;5,050E&minus;08</td></tr>
    <tr><td>0,050</td><td>0,250</td><td>1,000</td><td>16,5469</td><td>4,1562</td><td>0,2150</td><td>0,000207</td><td>1,004E&minus;07</td><td>1,326E&minus;08</td><td>1,266E&minus;09</td><td>&minus;3,925E&minus;07</td><td>&minus;1,002E&minus;07</td></tr>
    <tr><td>0,075</td><td>0,375</td><td>1,500</td><td>16,3906</td><td>6,2148</td><td>0,2225</td><td>0,000229</td><td>1,354E&minus;07</td><td>2,800E&minus;08</td><td>3,845E&minus;09</td><td>&minus;3,778E&minus;07</td><td>&minus;1,483E&minus;07</td></tr>
    <tr><td>0,100</td><td>0,500</td><td>2,000</td><td>16,1719</td><td>8,2500</td><td>0,2300</td><td>0,000253</td><td>1,627E&minus;07</td><td>4,663E&minus;08</td><td>8,510E&minus;09</td><td>&minus;3,591E&minus;07</td><td>&minus;1,944E&minus;07</td></tr>
    <tr><td>0,125</td><td>0,625</td><td>2,500</td><td>15,8906</td><td>10,2539</td><td>0,2375</td><td>0,000279</td><td>1,837E&minus;07</td><td>6,829E&minus;08</td><td>1,569E&minus;08</td><td>&minus;3,375E&minus;07</td><td>&minus;2,379E&minus;07</td></tr>
    <tr><td>0,150</td><td>0,750</td><td>3,000</td><td>15,5469</td><td>12,2188</td><td>0,2450</td><td>0,000306</td><td>1,994E&minus;07</td><td>9,223E&minus;08</td><td>2,572E&minus;08</td><td>&minus;3,135E&minus;07</td><td>&minus;2,786E&minus;07</td></tr>
    <tr><td>0,175</td><td>0,875</td><td>3,500</td><td>15,1406</td><td>14,1367</td><td>0,2525</td><td>0,000335</td><td>2,108E&minus;07</td><td>1,179E&minus;07</td><td>3,886E&minus;08</td><td>&minus;2,879E&minus;07</td><td>&minus;3,162E&minus;07</td></tr>
    <tr><td>0,200</td><td>1,000</td><td>4,000</td><td>14,6719</td><td>16,0000</td><td>0,2600</td><td>0,000366</td><td>2,185E&minus;07</td><td>1,447E&minus;07</td><td>5,527E&minus;08</td><td>&minus;2,611E&minus;07</td><td>&minus;3,505E&minus;07</td></tr>
    <tr><td>0,225</td><td>1,125</td><td>4,500</td><td>14,1406</td><td>17,8008</td><td>0,2675</td><td>0,000399</td><td>2,232E&minus;07</td><td>1,723E&minus;07</td><td>7,508E&minus;08</td><td>&minus;2,335E&minus;07</td><td>&minus;3,814E&minus;07</td></tr>
    <tr><td>0,250</td><td>1,250</td><td>5,000</td><td>13,5469</td><td>19,5312</td><td>0,2750</td><td>0,000433</td><td>2,254E&minus;07</td><td>2,003E&minus;07</td><td>9,837E&minus;08</td><td>&minus;2,054E&minus;07</td><td>&minus;4,088E&minus;07</td></tr>
    <tr><td>0,275</td><td>1,375</td><td>5,500</td><td>12,8906</td><td>21,1836</td><td>0,2825</td><td>0,000470</td><td>2,255E&minus;07</td><td>2,285E&minus;07</td><td>1,252E&minus;07</td><td>&minus;1,773E&minus;07</td><td>&minus;4,328E&minus;07</td></tr>
    <tr><td>0,300</td><td>1,500</td><td>6,000</td><td>12,1719</td><td>22,7500</td><td>0,2900</td><td>0,000508</td><td>2,239E&minus;07</td><td>2,566E&minus;07</td><td>1,555E&minus;07</td><td>&minus;1,492E&minus;07</td><td>&minus;4,532E&minus;07</td></tr>
    <tr><td>0,325</td><td>1,625</td><td>6,500</td><td>11,3906</td><td>24,2227</td><td>0,2975</td><td>0,000549</td><td>2,208E&minus;07</td><td>2,844E&minus;07</td><td>1,893E&minus;07</td><td>&minus;1,214E&minus;07</td><td>&minus;4,701E&minus;07</td></tr>
    <tr><td>0,350</td><td>1,750</td><td>7,000</td><td>10,5469</td><td>25,5938</td><td>0,3050</td><td>0,000591</td><td>2,165E&minus;07</td><td>3,117E&minus;07</td><td>2,266E&minus;07</td><td>&minus;9,404E&minus;08</td><td>&minus;4,835E&minus;07</td></tr>
    <tr><td>0,375</td><td>1,875</td><td>7,500</td><td>9,6406</td><td>26,8555</td><td>0,3125</td><td>0,000636</td><td>2,112E&minus;07</td><td>3,385E&minus;07</td><td>2,672E&minus;07</td><td>&minus;6,731E&minus;08</td><td>&minus;4,936E&minus;07</td></tr>
    <tr><td>0,400</td><td>2,000</td><td>8,000</td><td>8,6719</td><td>28,0000</td><td>0,3200</td><td>0,000683</td><td>2,051E&minus;07</td><td>3,645E&minus;07</td><td>3,111E&minus;07</td><td>&minus;4,130E&minus;08</td><td>&minus;5,004E&minus;07</td></tr>
    <tr><td>0,425</td><td>2,125</td><td>8,500</td><td>7,6406</td><td>29,0195</td><td>0,3275</td><td>0,000732</td><td>1,983E&minus;07</td><td>3,897E&minus;07</td><td>3,583E&minus;07</td><td>&minus;1,609E&minus;08</td><td>&minus;5,040E&minus;07</td></tr>
    <tr><td>0,450</td><td>2,250</td><td>9,000</td><td>6,5469</td><td>29,9062</td><td>0,3350</td><td>0,000783</td><td>1,909E&minus;07</td><td>4,140E&minus;07</td><td>4,085E&minus;07</td><td>8,238E&minus;09</td><td>&minus;5,045E&minus;07</td></tr>
    <tr><td>0,475</td><td>2,375</td><td>9,500</td><td>5,3906</td><td>30,6523</td><td>0,3425</td><td>0,000837</td><td>1,831E&minus;07</td><td>4,374E&minus;07</td><td>4,617E&minus;07</td><td>3,161E&minus;08</td><td>&minus;5,020E&minus;07</td></tr>
    <tr><td>0,500</td><td>2,500</td><td>10,000</td><td>4,1719</td><td>31,2500</td><td>0,3500</td><td>0,000893</td><td>1,749E&minus;07</td><td>4,598E&minus;07</td><td>5,178E&minus;07</td><td>5,399E&minus;08</td><td>&minus;4,966E&minus;07</td></tr>
    <tr><td>0,525</td><td>2,625</td><td>10,500</td><td>2,8906</td><td>31,6914</td><td>0,3575</td><td>0,000952</td><td>1,665E&minus;07</td><td>4,811E&minus;07</td><td>5,766E&minus;07</td><td>7,533E&minus;08</td><td>&minus;4,886E&minus;07</td></tr>
    <tr><td>0,550</td><td>2,750</td><td>11,000</td><td>1,5469</td><td>31,9688</td><td>0,3650</td><td>0,001013</td><td>1,578E&minus;07</td><td>5,014E&minus;07</td><td>6,380E&minus;07</td><td>9,559E&minus;08</td><td>&minus;4,779E&minus;07</td></tr>
    <tr><td>0,575</td><td>2,875</td><td>11,500</td><td>0,1406</td><td>32,0742</td><td>0,3725</td><td>0,001077</td><td>1,489E&minus;07</td><td>5,205E&minus;07</td><td>7,019E&minus;07</td><td>1,148E&minus;07</td><td>&minus;4,647E&minus;07</td></tr>
    <tr><td>0,600</td><td>3,000</td><td>12,000</td><td>&minus;1,3281</td><td>32,0000</td><td>0,3800</td><td>0,001143</td><td>1,400E&minus;07</td><td>5,386E&minus;07</td><td>7,680E&minus;07</td><td>1,328E&minus;07</td><td>&minus;4,493E&minus;07</td></tr>
    <tr><td>0,625</td><td>3,125</td><td>12,500</td><td>&minus;2,8594</td><td>31,7383</td><td>0,3875</td><td>0,001212</td><td>1,309E&minus;07</td><td>5,555E&minus;07</td><td>8,364E&minus;07</td><td>1,497E&minus;07</td><td>&minus;4,316E&minus;07</td></tr>
    <tr><td>0,650</td><td>3,250</td><td>13,000</td><td>&minus;4,4531</td><td>31,2812</td><td>0,3950</td><td>0,001284</td><td>1,218E&minus;07</td><td>5,713E&minus;07</td><td>9,069E&minus;07</td><td>1,655E&minus;07</td><td>&minus;4,119E&minus;07</td></tr>
    <tr><td>0,675</td><td>3,375</td><td>13,500</td><td>&minus;6,1094</td><td>30,6211</td><td>0,4025</td><td>0,001358</td><td>1,127E&minus;07</td><td>5,860E&minus;07</td><td>9,792E&minus;07</td><td>1,802E&minus;07</td><td>&minus;3,903E&minus;07</td></tr>
    <tr><td>0,700</td><td>3,500</td><td>14,000</td><td>&minus;7,8281</td><td>29,7500</td><td>0,4100</td><td>0,001436</td><td>1,036E&minus;07</td><td>5,995E&minus;07</td><td>1,053E&minus;06</td><td>1,937E&minus;07</td><td>&minus;3,669E&minus;07</td></tr>
    <tr><td>0,725</td><td>3,625</td><td>14,500</td><td>&minus;9,6094</td><td>28,6602</td><td>0,4175</td><td>0,001516</td><td>9,452E&minus;08</td><td>6,119E&minus;07</td><td>1,129E&minus;06</td><td>2,061E&minus;07</td><td>&minus;3,419E&minus;07</td></tr>
    <tr><td>0,750</td><td>3,750</td><td>15,000</td><td>&minus;11,4531</td><td>27,3438</td><td>0,4250</td><td>0,001599</td><td>8,549E&minus;08</td><td>6,231E&minus;07</td><td>1,206E&minus;06</td><td>2,174E&minus;07</td><td>&minus;3,155E&minus;07</td></tr>
    <tr><td>0,775</td><td>3,875</td><td>15,500</td><td>&minus;13,3594</td><td>25,7930</td><td>0,4325</td><td>0,001685</td><td>7,652E&minus;08</td><td>6,332E&minus;07</td><td>1,285E&minus;06</td><td>2,275E&minus;07</td><td>&minus;2,877E&minus;07</td></tr>
    <tr><td>0,800</td><td>4,000</td><td>16,000</td><td>&minus;15,3281</td><td>24,0000</td><td>0,4400</td><td>0,001775</td><td>6,762E&minus;08</td><td>6,423E&minus;07</td><td>1,364E&minus;06</td><td>2,365E&minus;07</td><td>&minus;2,587E&minus;07</td></tr>
    <tr><td>0,825</td><td>4,125</td><td>16,500</td><td>&minus;17,3594</td><td>21,9570</td><td>0,4475</td><td>0,001867</td><td>5,880E&minus;08</td><td>6,502E&minus;07</td><td>1,445E&minus;06</td><td>2,444E&minus;07</td><td>&minus;2,286E&minus;07</td></tr>
    <tr><td>0,850</td><td>4,250</td><td>17,000</td><td>&minus;19,4531</td><td>19,6562</td><td>0,4550</td><td>0,001962</td><td>5,008E&minus;08</td><td>6,570E&minus;07</td><td>1,527E&minus;06</td><td>2,512E&minus;07</td><td>&minus;1,976E&minus;07</td></tr>
    <tr><td>0,875</td><td>4,375</td><td>17,500</td><td>&minus;21,6094</td><td>17,0898</td><td>0,4625</td><td>0,002061</td><td>4,146E&minus;08</td><td>6,627E&minus;07</td><td>1,609E&minus;06</td><td>2,569E&minus;07</td><td>&minus;1,659E&minus;07</td></tr>
    <tr><td>0,900</td><td>4,500</td><td>18,000</td><td>&minus;23,8281</td><td>14,2500</td><td>0,4700</td><td>0,002163</td><td>3,294E&minus;08</td><td>6,673E&minus;07</td><td>1,692E&minus;06</td><td>2,616E&minus;07</td><td>&minus;1,335E&minus;07</td></tr>
    <tr><td>0,925</td><td>4,625</td><td>18,500</td><td>&minus;26,1094</td><td>11,1289</td><td>0,4775</td><td>0,002268</td><td>2,453E&minus;08</td><td>6,709E&minus;07</td><td>1,776E&minus;06</td><td>2,652E&minus;07</td><td>&minus;1,005E&minus;07</td></tr>
    <tr><td>0,950</td><td>4,750</td><td>19,000</td><td>&minus;28,4531</td><td>7,7188</td><td>0,4850</td><td>0,002377</td><td>1,624E&minus;08</td><td>6,735E&minus;07</td><td>1,860E&minus;06</td><td>2,677E&minus;07</td><td>&minus;6,724E&minus;08</td></tr>
    <tr><td>0,975</td><td>4,875</td><td>19,500</td><td>&minus;30,8594</td><td>4,0117</td><td>0,4925</td><td>0,002489</td><td>8,060E&minus;09</td><td>6,750E&minus;07</td><td>1,944E&minus;06</td><td>2,692E&minus;07</td><td>&minus;3,368E&minus;08</td></tr>
    <tr><td>1,000</td><td>5,000</td><td>20,000</td><td>&minus;33,3281</td><td>0,0000</td><td>0,5000</td><td>0,002604</td><td>0,000E+00</td><td>6,755E&minus;07</td><td>2,029E&minus;06</td><td>2,697E&minus;07</td><td>&approx; 0</td></tr>
  </tbody>
</table>
</div>

## Referencias

1. E. Capcha, «Elementos de sección variable», Notas de clase, Resistencia de Materiales II, Facultad de Ingeniería Mecánica, Universidad Nacional de Ingeniería, ciclo 2025-I.
2. F. P. Beer, E. R. Johnston Jr., J. T. DeWolf y D. F. Mazurek, *Mechanics of Materials*, McGraw-Hill Education.
3. R. L. Burden y J. D. Faires, *Numerical Analysis*, 9.ª ed., Cengage, 2011.
<!-- FIN CONTENIDO ARTICULO 6 -->