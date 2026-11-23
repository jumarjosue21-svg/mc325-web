## 1. Elementos curvos en la ingeniería

Un **elemento curvo** es una pieza estructural cuyo eje no es recto, sino que sigue una curva. Estos elementos aparecen tanto en obras civiles como en máquinas, y en todos los casos soportan y transmiten **cargas transversales** a lo largo de su forma curva.

### 1.1. Acueductos de arcos de piedra

Los acueductos antiguos se construían con **arcos de piedra superpuestos en varios niveles**. Cada arco recibe el peso de la estructura que tiene encima y lo transmite hacia las pilas que lo sostienen. La mampostería trabaja principalmente a compresión, por eso el arco fue durante siglos la forma más eficaz para salvar vanos con piedra.

### 1.2. Cubiertas de arcos de acero

En edificaciones como un **polideportivo**, la cubierta se resuelve con una serie de **arcos de acero** colocados uno tras otro. Los arcos cubren todo el ancho del recinto sin apoyos intermedios, lo que deja libre el espacio interior.

### 1.3. Puentes en arco

En un **puente en arco**, el arco recibe las cargas del tablero y las lleva hasta los apoyos. Aquí el elemento curvo es el que permite cubrir la luz entre ambos extremos. Estos puentes se construyen por tramos, y durante el montaje el arco debe resistir su propio peso y el de los equipos.

### 1.4. Vigas curvas metálicas

Las vigas de eje curvo también se fabrican en taller como piezas de acero de gran tamaño, curvadas según el radio que pide el diseño, para luego montarse en cubiertas, marcos y otras estructuras.

### 1.5. Tipos de arco

La forma del arco se elige según el uso de la obra. Los cuatro tipos más comunes son:

- **De medio punto:** su directriz es una semicircunferencia.
- **Rebajado:** su directriz es un arco menor que una semicircunferencia.
- **Peraltado:** una semicircunferencia que se prolonga con tramos verticales en sus arranques.
- **Escarzano:** un arco muy poco curvado, con un ángulo central de 60.

En un arco de piedra, las cargas se transmiten a lo largo del propio arco hasta los apoyos, y en los apoyos aparecen fuerzas verticales y horizontales.

### 1.6. Ganchos de grúa

Los **ganchos de grúa** son elementos curvos de máquinas. Su tramo curvo soporta una carga concentrada P que no pasa por el centro de la sección, así que en esa sección aparecen una fuerza axial y un momento flector al mismo tiempo. Más adelante, en los problemas del capítulo, estudiaremos un gancho de izaje de fierro fundido con un tramo curvo de 150.



## 2. Elementos curvos

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_x$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_y$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>

Figura 1: Diagrama de carga libre de arco con carga gravitacional distribuida.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \colorlet{gr}{green!50!black}

  \fill[yellow!50] plot[smooth] coordinates {(-3.45,6.35)(-2.76,6.42)(-2.07,6.32)(-1.38,6.3)(-0.69,6.48)(0,6.65)(0.69,6.9)(1.38,7.15)(2.07,7.35)(2.71,7.5)} -- (2.71,5.3) -- (-3.45,5.3) -- cycle;

  \draw[dotted, thick, gray!70!black] (-5.6,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (168:5.8);
  \draw[dotted, thick, gray!70!black] (0,0) -- (25:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (133.6:5);
  \draw[dotted, thick, gray!70!black] (0,0) -- (57:5);
  \draw[dotted, thick, gray!70!black] (0,0) -- (0,5);
  \draw[dotted, thick, gray!70!black] (-3.45,0) -- (-3.45,6.35);
  \draw[dotted, thick, gray!70!black] (2.71,0) -- (2.71,7.5);

  \draw[gr, thick] plot[smooth] coordinates {(-3.45,6.35)(-2.76,6.42)(-2.07,6.32)(-1.38,6.3)(-0.69,6.48)(0,6.65)(0.69,6.9)(1.38,7.15)(2.07,7.35)(2.71,7.5)};
  \draw[gr, thin] (-3.45,5.3) -- (2.71,5.3);

  \foreach \x/\y in {-3.45/6.35,-2.76/6.42,-2.07/6.32,-1.38/6.3,-0.69/6.48,0/6.65,0.69/6.9,1.38/7.15,2.07/7.35,2.71/7.5}{
    \draw[gr, ->, thick] (\x,\y) -- (\x,5.3);
  }

  \node[gr, font=\itshape\fontsize{22}{26}\selectfont] at (-0.11,7.37) {$P$};

  \draw[black, line width=9pt, line cap=butt] (25:\R) arc (25:168:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (25:\R) arc (25:168:\R);
  \draw[dotted, thick, black] (25:\R) arc (25:168:\R);

  \begin{scope}[shift={(168:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
    \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
    }
    \node at (-0.57,0.05) {$A$};
  \end{scope}

  \begin{scope}[shift={(25:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
    }
    \node at (-0.62,-0.01) {$C$};
  \end{scope}

  \begin{scope}[shift={(148:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.2);
    \node at (0.56,-0.23) {\Large $P$};
  \end{scope}

  \fill[blue] (43:\R) circle (1.5pt);
  \begin{scope}[shift={(3.51,3.27)}]
    \draw[blue, <-, thick] (135:0.7) arc (135:-70:0.7);
  \end{scope}
  \node at (4.31,4.14) {\Large $M$};

  \draw[gr, ->, thick] (1.5,0) arc (0:25:1.5);
  \node[gr!40!black] at (1.88,0.32) {$\Theta_o$};

  \draw[gr, ->, thick] (1.25,0) arc (0:57:1.25);
  \node[gr!40!black] at (1.27,1.05) {$\Theta_1$};

  \draw[gr, ->, thick] (1.0,0) arc (0:133.6:1.0);
  \node[gr!40!black] at (-0.1,1.35) {$\Theta_2$};

  \draw[gr, ->, thick] (0.75,0) arc (0:168:0.75);
  \node[gr!40!black] at (-1.05,0.61) {$\Theta_3$};

  \node[gray!70!black] at (-0.3,4.5) {$B$};
  \node[gray!70!black] at (-0.3,2.3) {$R$};

\end{tikzpicture}
</script>

Figura 2: Diagrama de carga libre de arco con carga gravitacional distribuida.




## 3. Rótulas en arcos

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}


  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);
  \draw[dotted, thick, gray!70!black] (0,0) -- (127:5);
  \draw[dotted, thick, gray!70!black] (0,0) -- (52:5);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[blue, thick, fill=white] (127:\R) circle (0.17);
  \fill[blue] (127:\R) circle (1.4pt);
  \node at (-2.0,3.45) {R\'otula};

  \draw[blue, thick, fill=white] (84.24:\R) circle (0.17);
  \fill[blue] (84.24:\R) circle (1.4pt);
  \node at (-0.3,4.3) {R\'otula};

  \draw[blue, thick, fill=white] (52:\R) circle (0.17);
  \fill[blue] (52:\R) circle (1.4pt);
  \node at (4.2,4.3) {R\'otula};

  \fill[yellow!30] (-5.45,0) rectangle (-4.55,-0.2);
  \draw[thick] (-5.45,0) -- (-4.55,0);
  \foreach \x in {-5.4,-5.25,-5.1,-4.95,-4.8,-4.65}{
    \draw[yellow!60!orange, thin] (\x,0) -- ++(-0.1,-0.2);
  }
  \node at (-4.3,0.6) {$M$};
  \draw[red, ->, thick] (-5,-1.05) -- (-5,-0.25);
  \node at (-4.52,-0.83) {$A_x$};
  \draw[red, ->, thick] (-5.1,-0.3) -- (-5.8,-0.3);
  \node at (-6.01,-0.53) {$A_y$};
  \node at (-5.45,0.5) {$A$};

  \begin{scope}[shift={(\thO:\R)}, rotate=\thO]
    \fill[yellow!30] (-0.45,0) rectangle (0.45,-0.2);
    \draw[thick] (-0.45,0) -- (0.45,0);
    \foreach \x in {-0.4,-0.25,-0.1,0.05,0.2,0.35}{
      \draw[yellow!60!orange, thin] (\x,0) -- ++(-0.1,-0.2);
    }
  \end{scope}

  \begin{scope}[shift={(\thO:\R)}]
    \draw[red, ->, thick] (0.32,0.06) arc (0:200:0.4);
    \draw[red, ->, thick] (-9.3,-1.79) arc (0:200:0.4);
    \node at (0.55,0.58) {$M$};
    \draw[red, ->, thick] (-0.09,-0.38) -- ++(-0.8,0);
    \node at (-0.93,-0.71) {$D_x$};
    \draw[red, ->, thick] (0.03,-1.28) -- ++(0,0.85);
    \node at (0.59,-1.03) {$D_y$};
    \node at (-0.93,0.05) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>

Figura 3: Diagrama de carga libre de arco con carga gravitacional distribuida.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]
  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);
  \draw[dotted, thick, gray!70!black] (0,0) -- (112:5);
  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};
  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);
  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }
  \node[gr!40!black] at (118:7.0) {$q$};
  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);
  \draw[blue, thick, fill=white] (112:\R) circle (0.17);
  \fill[blue] (112:\R) circle (1.4pt);
  \node at (-1.6,3.9) {R\'otula};
  \fill[yellow!30] (-5.45,0) rectangle (-4.55,-0.2);
  \draw[thick] (-5.45,0) -- (-4.55,0);
  \foreach \x in {-5.4,-5.25,-5.1,-4.95,-4.8,-4.65}{
    \draw[yellow!60!orange, thin] (\x,0) -- ++(-0.1,-0.2);
  }
  \node at (-4.21,0.41) {$M$};
  \draw[red, ->, thick] (-5,-1.05) -- (-5,-0.25);
  \node at (-4.52,-0.83) {$A_x$};
  \draw[red, ->, thick] (-5.1,-0.3) -- (-5.8,-0.3);
  \node at (-6.01,-0.53) {$A_y$};
  \node at (-5.79,0.05) {$A$};
  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}
  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}
  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \begin{scope}[shift={(-5.02cm,-0.11cm)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};
  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};
  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};
  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};
  \node at (-2.6,0.25) {$R$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};
\end{tikzpicture}
</script>

Figura 4: Diagrama de carga libre de arco con carga gravitacional distribuida.


## 4. Arcos Isostáticos

Un arco isostático es una estructura en la que el número de reacciones puede ser calculada a partir de las ecuaciones de equilibrio disponibles según se trata de un problema bidimensional o tridimensional. Es decir, se cumple la siguiente ecuación:

$$
N^\circ r = N^\circ ee
$$

Donde, N°r es el número de reacciones presentes en el arco y N°ee es el número de ecuaciones de equilibrio estático, que en el caso de problemas bidimensionales se cumple N°ee = 3, mientras que en el caso de problemas tridimensionales es N°ee = 6.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_x$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_y$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>


En el caso que un arco presente rótulas, se sabe que estas generan ecuaciones adicionales de equilibrio independientes de las generadas por las ecuaciones de equilibrio globales, en ese caso, la isostaticidad de una estructura se verifica a partir de la siguiente ecuación:

$$
N^\circ r = N^\circ ee + N^\circ rot
$$



## 5. Arcos hiperestáticos

Un arco hiperestático es aquel en el que las reacciones existentes por las condiciones de apoyo superan al número de ecuaciones estáticas ya sean problemas bidimensionales o tridimensionales.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_x$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_y$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);

  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}

  \begin{scope}[shift={(-144pt,2pt)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}

  \node[blue] at (4.59,3.67) {$P$};
  \node[blue] at (-4.21,0.41) {M};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>

Figura 5: Diagrama de carga libre de arco con carga gravitacional distribuida.

En términos de ecuaciones esta relación se puede escribir de la siguiente forma:

$$
N^\circ r > N^\circ ee
$$

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);

  \draw[gr, thick] plot[smooth] coordinates {
    (160:5.45)(155:5.75)(150:6.05)(145:6.3)
    (140:6.55)(135:6.7)(130:6.75)(125:6.65)
    (120:6.45)(115:6.25)(110:6.05)(105:5.95)
    (100:5.9)(95:5.95)(90:6.1)(85:6.35)
  };

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {
    160/5.45,155/5.75,150/6.05,145/6.30,
    140/6.55,135/6.70,130/6.75,125/6.65,
    120/6.45,115/6.25,110/6.05,105/5.95,
    100/5.90,95/5.95,90/6.10,85/6.35
  }{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_x$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_y$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (-0.65,0.05) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);

  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}

  \begin{scope}[shift={(-144pt,-1pt)}]
    \draw[<-, thick, red] (135:0.6) arc (135:-70:0.6);
  \end{scope}

  \begin{scope}[shift={(132pt,50pt)}]
    \draw[red, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}

  \node[blue] at (4.59,3.67) {$P$};
  \node[red] at (-4.21,0.41) {M};
  \node[red] at (5.44,2.43) {M};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>


Figura 6: Diagrama de carga libre de arco con carga gravitacional distribuida.



## 6. Diagramas de carga en elementos curvos

Al igual que una viga de eje recto, a menudo existen elementos curvos que se usan y diseñan para soportar y transmitir cargas transversales. El diseño de ingeniería básico requiere determinar cómo están variando internamente las fuerzas axiales, cortantes y momentos flectores, con la finalidad de poder cuantificar los esfuerzos máximos que ocurren en estos elementos y luego poder dimensionarlos apropiadamente.

En la siguiente figura se muestra un arco general isostático sometido a un conjunto de cargas transversales, tanto distribuidas como cargas concentradas. A diferencia de una viga de eje recto, donde se usaban una coordenada lineal para marcar las posiciones de las cargas, en un elemento de arco resulta mucho mas conveniente el uso de coordenadas angulares, tal como se muestra a continuación.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};

  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_x$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_y$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \node at (-2.6,0.25) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>

Figura 7: Diagrama de carga libre de arco con carga gravitacional distribuida.

Como se puede apreciar de esta figura la carga distribuida es una función compleja de teta, que inicia en teta1 y termina en teta2, de igual forma se puede decir que el arco da comienza en la coordenada teta0 y termina en teta=180°.




## 7. Cargas centrales distribuidas

Un caso frecuente en el análisis y diseño de arcos son las cargas distribuidas centrales, como es el caso por ejemplo en el análisis y diseño de elementos de sostenimiento en la construcción de túneles.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \def\thO{20}
  \def\thC{84}
  \def\thB{160}
  \colorlet{gr}{green!50!black}


  \fill[yellow!50] (0,0) -- (-5,0) -- (-0.53,1.88) -- cycle;

  \draw[dotted, thick, gray!70!black] (-5.1,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (160.1:6.07);
  \draw[dotted, thick, gray!70!black] (0,0) -- (\thO:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (84.24:6.53);
  \draw[dotted, thick, gray!70!black] (0,0) -- (105:6.6);
  \draw[dotted, thick, gray!70!black] (0,0) -- (110:6.6);

  \draw[gr, thick] plot[smooth] coordinates {(160:5.45)(155:5.75)(150:6.05)(145:6.3)(140:6.55)(135:6.7)(130:6.75)(125:6.65)(120:6.45)(115:6.25)(110:6.05)(105:5.95)(100:5.9)(95:5.95)(90:6.1)(85:6.35)};
  \draw[gr, thick] (160:5.15) -- (160:5.45);
  \draw[gr, thick] (85:5.15) -- (85:6.35);

  \foreach \a/\rad in {160/5.45,155/5.75,150/6.05,145/6.30,140/6.55,135/6.70,130/6.75,125/6.65,120/6.45,115/6.25,110/6.05,105/5.95,100/5.90,95/5.95,90/6.10,85/6.35}{
    \draw[gr, ->, thick] (\a:\rad) -- (\a:5.17);
  }

  \node[gr!40!black] at (118:7.0) {$q$};

  \draw[black, line width=9pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (\thO:\R) arc (\thO:180:\R);
  \draw[dotted, thick, black] (\thO:\R) arc (\thO:180:\R);


  \draw[red, ->, thick] (-1.97,6.35) -- (-1.58,4.94);
  \node[red] at (-2.29,6.53) {$dF$};
  \node[blue] at (-0.8,4.5) {$ds$};

  \draw[gray, thin, <->] (-4.86,0.16) -- (-0.55,1.96);
  \node[gray] at (-2.6,1.42) {$d$};

  \draw[thick, fill=white] (-5,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
  \draw[thick] (-5.5,-0.5) -- (-4.5,-0.5);

  \foreach \x in {-5.45,-5.25,...,-4.55}{
    \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
  }

  \fill[yellow!30] (-5.5,-0.5) rectangle (-4.5,-0.65);

  \node[text=black] at (-6,-0.71) {$A_y$};
  \draw[red, ->, thick] (-5,-1.1) -- (-5,-0.55);
  \node at (-4.54,-1.16) {$A_x$};
  \draw[red, ->, thick] (-5.12,-0.57) -- (-5.78,-0.57);

  \begin{scope}[shift={(\thO:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \draw[red, ->, thick] (0,-1.8) -- ++(0,0.95);
    \node at (0.45,-1.38) {$B_y$};
    \node at (0.51,-0.17) {$D$};
  \end{scope}

  \begin{scope}[shift={(68:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.0);
    \node[blue] at (-0.4,-0.9) {$P$};
  \end{scope}

  \fill[blue] (36:\R) circle (1.5pt);
  \begin{scope}[shift={(3.9,2.9)}]
    \draw[blue, <-, thick] (135:0.6) arc (135:-70:0.6);
  \end{scope}
  \node[blue] at (4.59,3.67) {$P$};

  \draw[gr, ->, thick] (1.1,0) arc (0:\thO:1.1);
  \node[gr!40!black] at (1.55,0.3) {$\Theta_o$};

  \draw[gr, ->, thick] (0.9,0) arc (0:\thC:0.9);
  \node[gr!40!black] at (0.95,0.85) {$\Theta_1$};

  \draw[gr, ->, thick] (0.6,0) arc (0:\thB:0.6);
  \node[gr!40!black] at (-0.55,0.75) {$\Theta_2$};

  \draw[gr, ->, thick] (0.75,0) arc (0:108:0.75);
  \node[gr!40!black] at (-0.04,1.05) {$\Theta$};

  \node at (-2.6,-0.3) {$R$};
  \node at (-5.45,0.15) {$A$};
  \node at (153:4.55) {$B$};
  \node[xshift=8pt, yshift=2pt] at (\thC:5.45) {$C$};

\end{tikzpicture}
</script>

Figura 8: Diagrama de carga libre de arco con carga gravitacional distribuida.

En la figura anterior se muestra un arco con carga distribuida central. Para calcular la resultante de esta carga se realiza una integración con coordenada de arco o coordenada angular, encontrándose a la siguiente expresión:

$$
dF = q_{(\theta)}(-\sin\theta\,\hat{i}+\cos\theta\,\hat{j})\,ds
= q_{(\theta)}R(-\sin\theta\,\hat{i}+\cos\theta\,\hat{j})\,d\theta
$$

$$
F = R\left[
\int_{\theta_1}^{\theta_2}q\sin\theta\,d\theta\,\hat{i}
+
\int_{\theta_1}^{\theta_2}q\cos\theta\,d\theta\,\hat{j}
\right]
$$

En el caso del momento flector, considerando como punto de referencia el apoyo A, el momento flector resultante se puede obtener a partir de la siguiente expresión:

$$
dM = q\,ds\,ds = q\,dR\,d\theta = qR^2\sin\theta\,d\theta
$$

$$
M = R^2\int_{\theta_1}^{\theta_2}q\sin\theta\,d\theta
$$




## 8. Cargas gravitatorias distribuidas

A menudo las cargas actuantes sobre los arcos no se limitan solo a cargas o momentos puntuales, de hecho, la mayor parte de las cargas actuantes sobre estos elementos son en general cargas distribuidas, ya sean cargas uniformemente distribuidas o cargas distribuidas generales, tal como se muestra a continuación.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \def\R{5}
  \colorlet{gr}{green!50!black}

  \fill[yellow!50] plot[smooth] coordinates {(-3.45,6.35)(-2.76,6.42)(-2.07,6.32)(-1.38,6.3)(-0.69,6.48)(0,6.65)(0.69,6.9)(1.38,7.15)(2.07,7.35)(2.71,7.5)} -- (2.71,5.3) -- (-3.45,5.3) -- cycle;

  \draw[dotted, thick, gray!70!black] (-5.6,0) -- (5.9,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (168:5.8);
  \draw[dotted, thick, gray!70!black] (0,0) -- (25:5.9);
  \draw[dotted, thick, gray!70!black] (0,0) -- (133.6:5);
  \draw[dotted, thick, gray!70!black] (0,0) -- (57:5);
  \draw[dotted, thick, gray!70!black] (0,0) -- (0,5);
  \draw[dotted, thick, gray!70!black] (-3.45,0) -- (-3.45,6.35);
  \draw[dotted, thick, gray!70!black] (2.71,0) -- (2.71,7.5);

  \draw[gr, thick] plot[smooth] coordinates {(-3.45,6.35)(-2.76,6.42)(-2.07,6.32)(-1.38,6.3)(-0.69,6.48)(0,6.65)(0.69,6.9)(1.38,7.15)(2.07,7.35)(2.71,7.5)};
  \draw[gr, thin] (-3.45,5.3) -- (2.71,5.3);

  \foreach \x/\y in {-3.45/6.35,-2.76/6.42,-2.07/6.32,-1.38/6.3,-0.69/6.48,0/6.65,0.69/6.9,1.38/7.15,2.07/7.35,2.71/7.5}{
    \draw[gr, ->, thick] (\x,\y) -- (\x,5.3);
  }

  \node[gr, font=\itshape\fontsize{22}{26}\selectfont] at (-0.11,7.37) {$P$};

  \draw[black, line width=9pt, line cap=butt] (25:\R) arc (25:168:\R);
  \draw[magenta!60, line width=7pt, line cap=butt] (25:\R) arc (25:168:\R);
  \draw[dotted, thick, black] (25:\R) arc (25:168:\R);

  \begin{scope}[shift={(168:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
    \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
    }
    \node at (-0.57,0.05) {$A$};
  \end{scope}

  \begin{scope}[shift={(25:\R)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
    }
    \node at (-0.62,-0.01) {$C$};
  \end{scope}

  \begin{scope}[shift={(148:\R)}]
    \fill[blue] (0,0) circle (1.5pt);
    \draw[blue, ->, thick] (0,0) -- ++(-65:1.2);
    \node at (0.56,-0.23) {\Large $P$};
  \end{scope}

  \fill[blue] (43:\R) circle (1.5pt);
  \begin{scope}[shift={(3.51,3.27)}]
    \draw[blue, <-, thick] (135:0.7) arc (135:-70:0.7);
  \end{scope}
  \node at (4.31,4.14) {\Large $M$};

  \draw[gr, ->, thick] (1.5,0) arc (0:25:1.5);
  \node[gr!40!black] at (1.88,0.32) {$\Theta_o$};

  \draw[gr, ->, thick] (1.25,0) arc (0:57:1.25);
  \node[gr!40!black] at (1.27,1.05) {$\Theta_1$};

  \draw[gr, ->, thick] (1.0,0) arc (0:133.6:1.0);
  \node[gr!40!black] at (-0.1,1.35) {$\Theta_2$};

  \draw[gr, ->, thick] (0.75,0) arc (0:168:0.75);
  \node[gr!40!black] at (-1.05,0.61) {$\Theta_3$};

  \node[gray!70!black] at (-0.3,4.5) {$B$};
  \node[gray!70!black] at (-0.3,2.3) {$R$};

\end{tikzpicture}
</script>

Figura 9: Diagrama de carga libre de arco con carga gravitacional distribuida.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\normalsize, scale=0.95]

  \colorlet{gr}{green!50!black}
  \begin{scope}[xshift=4.36cm, yshift=0.04cm]
    \draw[dotted, thick, gray!70!black] (-4.8,0) -- (4.8,0);
    \draw[dotted, thick, gray!70!black] (0,0) -- (0,4.9);
    \draw[gr] plot[smooth] coordinates {(-4,5.6)(-3,5.75)(-2,5.6)(-1,5.8)(0,6.0)(1,6.4)(2,6.9)(3,6.3)(4,5.9)};
    \draw[gr] (-4,4.9) -- (4,4.9);
    \draw[gr] (-4,4.9) -- (-4,5.6);
    \draw[gr] (4,4.9) -- (4,5.9);
    \foreach \x/\y in {-4/5.6,-3.5/5.67,-3/5.75,-2.5/5.68,-2/5.6,-1.5/5.7,-1/5.8,-0.5/5.9,0/6.0,0.5/6.2,1/6.4,1.5/6.65,2/6.9,2.5/6.6,3/6.3,3.5/6.1,4/5.9}{
      \draw[gr, ->] (\x,\y) -- (\x,4.9);
    }
    \node[gr] at (0.2,6.9) {\Large $P$};
    \begin{scope}[shift={(-4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
      \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$A$};
    \end{scope}
    \begin{scope}[shift={(4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \foreach \dx in {-0.2,0,0.2}{
        \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
      }
      \draw[thick] (-0.5,-0.72) -- ++(1,0);
      \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$C$};
    \end{scope}
    \node[gray!70!black] at (-0.36,3.34) {$B$};
    \node[gray!70!black] at (-1.5,0.3) {$R$};
  \end{scope}

  \draw[black, line width=9pt, line cap=butt] (8.33,0.04) arc (0:180:4);
  \draw[magenta!60, line width=7pt, line cap=butt] (8.33,0.06) arc (0:180:4);
  \draw[dotted, thick, black] (8.33,0.04) arc (0:180:4);

  \begin{scope}[shift={(11.0,0.25)}]

    \fill[yellow!40] (0,0) -- (35:5.5) -- (40:5.5) -- cycle;

    \draw[dotted, thick, gray!70!black] (-0.3,0) -- (6.3,0);
    \draw[dotted, thick, gray!70!black] (0,0) -- (0,5.6);
    \draw[dotted, thick, gray!70!black] (0,0) -- (35:6.2);
    \draw[dotted, thick, gray!70!black] (0,0) -- (40:6.2);
    \draw[dotted, thick, gray!70!black] (0,0) -- (50:6.2);
    \draw[dotted, thick, gray!70!black] (3.54,0) -- (3.54,5.6);
    \draw[dotted, thick, gray!70!black] (4.5,0) -- (4.5,5.6);
    \draw[dotted, thick, black] (50:5.5) arc (50:90:5.5);

    \draw[black, line width=9pt, line cap=butt] (0:5.5) arc (0:50:5.5);
    \draw[magenta!60, line width=7pt, line cap=butt] (0:5.5) arc (0:50:5.5);
    \draw[dotted, thick, black] (0:5.5) arc (0:50:5.5);

    \begin{scope}[shift={(37.5:5.5)}, rotate=37.5]
      \draw[blue, thick] (-0.15,-0.4) rectangle (0.15,0.4);
    \end{scope}
    \node[blue] at (4.0,2.3) {$ds$};

    \draw[red, ->, thick] (4.5,7.2) -- (4.5,6.2);
    \node at (4.2,7.8) {$w(ds)\sin\theta$};
    \draw[gr, thick] (4.2,5.5) rectangle (4.8,6.1);
    \foreach \x in {4.3,4.5,4.7}{
      \draw[gr, ->] (\x,6.1) -- (\x,5.5);
    }

    \begin{scope}[shift={(7.1,4.85)}]
      \draw[->, thick, red] (188.19:3.89) arc (150:-150:0.25);
      \draw[blue, ->, thick] (-3.61,-0.68) -- (-4.26,-1.59);
      \draw[blue, ->, thick] (-4.51,0.13) -- (-3.6,-0.59);
    \end{scope}
    \node at (2.47,4.45) {$N$};
    \node[blue] at (3.95,4.6) {$M$};
    \node[blue] at (2.59,3.66) {$v$};

    \node[blue] at (0.6,4.69) {$(ds)\sin q$};
    \fill[blue!20] (0.25,4.25) -- (0.95,4.25) -- (0.95,3.15) -- cycle;
    \fill[blue!20] (4.2,3.83) -- (4.8,3.83) -- (4.73,2.99) -- cycle;
    \draw[blue, very thick] (0.25,4.25) -- (0.95,3.15);
    \node[blue] at (0.08,3.29) {$ds$};
    \node[blue] at (0.97,3.72) {$q$};

    \draw[blue, ->, thick] (1.2,0) arc (0:35:1.2);
    \draw[blue, ->, thick] (0.8,0) arc (0:50:0.8);
    \node[blue] at (1.15,1.16) {$d q$};
    \node[blue] at (1.57,0.4) {$q$};
    \node at (0.23,0.29) {$\Theta$};

    \draw[<->, thick] (0,-1.0) -- (3.54,-1.0);
    \node at (1.8,-0.65) {$R\cos\Theta$};
    \draw[<->, thick] (0,-1.7) -- (4.5,-1.7);
    \node at (2.3,-1.35) {$R\cos\theta$};
    \draw[dotted, thick, gray!70!black] (3.54,0) -- (3.54,-1.7);
    \draw[dotted, thick, gray!70!black] (4.5,0) -- (4.5,-1.7);

    \begin{scope}[shift={(5.5,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \foreach \dx in {-0.2,0,0.2}{
        \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
      }
      \draw[thick] (-0.5,-0.72) -- ++(1,0);
      \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.15) {$C$};
      \draw[red, ->, thick] (0.8,-1.9) -- (0.8,-0.9);
      \node[red] at (1.4,-1.5) {$R_C$};
    \end{scope}

  \end{scope}

\end{tikzpicture}
</script>

Figura 10: Diferencial de carga vertical en un arco.

El cálculo de las reacciones en este tipo de estructuras requiere tomar en cuenta que las cargas distribuidas gravitacionales mantienen su dirección hacia el centro de la tierra, por lo que la integración de estas debe tomar en cuenta esta característica. En el ejemplo anterior, nos interesa el cálculo de las fuerzas internas en la sección Ω, por lo que se deberá tomar momentos respecto de este punto.

Pero al tener una carga distribuida, esta esta variando dentro del arco, desde cero hasta θ, de acuerdo con la coordenada angular establecida.

Esta condición nos obliga a establecer una nueva coordenada angular auxiliar (q) dentro de la coordenada auxiliar establecida originalmente (θ), y las integrales deberán establecerse en esta nueva coordenada. Por ejemplo, la diferencial de fuerza vertical y de momento vendrían dadas por las siguientes expresiones.

$$
dF = w\,sen(q)\,ds
\quad \rightarrow \quad
F = \int_0^{s_0} w\,sen(q)\,ds
$$

$$
dM = wR\,sen(q)(\cos(q)-\cos(\theta))\,ds
$$

$$
M = \int_0^{s_0} wR\,sen(q)(\cos(q)-\cos(\theta))\,ds
$$

Estas expresiones se establecen directamente del grafico Figura 10, integrando las cargas verticales y tomando momentos respecto del punto Ω, respectivamente. Además, considerando coordenada angular en lugar de coordenada de arco, se tiene:

$$
ds = R\,dq
$$

$$
F(\theta) = \int_0^\theta wR\,sen(q)\,dq
= wR\int_0^\theta sen(q)\,dq
$$

$$
F(\theta) = wR(1-\cos\theta)
$$

Los momentos flectores también pueden expresarse en función de la coordenada angular.

$$
M(\theta) = \int_0^\theta wR^2\,sen(q)(\cos(q)-\cos(\theta))\,dq
$$

$$
M(\theta) = wR^2\int_0^\theta sen(q)(\cos(q)-\cos(\theta))\,dq
$$

$$
M(\theta) = wR^2
\left[
\int_0^\theta sen(q)\cos(q)\,dq
-
\cos(\theta)\int_0^\theta sen(q)\,dq
\right]
$$

$$
M(\theta) = wR^2
\left[
\frac{1}{4}(1-\cos\theta)^2
-
\cos(\theta)(1-\cos\theta)
\right]
$$

$$
M(\theta) = \frac{wR^2}{4}
\left(1-5\cos\theta+4\cos^2\theta\right)
$$




## 9. Cálculo de las fuerzas internas

Si se considera el equilibrio del arco mas pequeño existen cuatro fuerzas, pero la resultante gravitacional y la reacción Rc son colineales por lo que solo existen tres fuerzas no colineales. El equilibrio exige que las fuerzas actuantes formen un polígono cerrado, en este caso un triángulo cerrado.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\normalsize, scale=0.95]

  \colorlet{gr}{green!50!black}
  \draw[dotted, thick, gray!70!black] (0,0) -- (8.0,0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (0,8.0);
  \draw[dotted, thick, gray!70!black] (0,0) -- (50:6.5);
  \draw[dotted, thick, gray!70!black] (5.5,-0.05) -- (5.5,8.18);
  \draw[dotted, thick, gray!70!black] (3.54,0) -- (3.59,8.18);
  \draw[dotted, thick, black] (50:5.5) arc (50:90:5.5);
  \draw[black, line width=9pt, line cap=butt] (0:5.5) arc (0:50:5.5);
  \draw[magenta!60, line width=7pt, line cap=butt] (0:5.5) arc (0:50:5.5);
  \draw[dotted, thick, black] (0:5.5) arc (0:50:5.5);
  \draw[blue, thick, fill=white] (3.54,4.21) circle (0.25);
  \fill[blue] (3.54,4.21) circle (1.5pt);
  \draw[blue, ->, thick] (3.54,4.21) -- (2.7,3.2);
  \draw[blue, ->, thick] (5.5,6.97) -- (5.5,6.36);
  \draw[blue, ->, thick] (5.2,6.97) -- (5.2,6.36);
  \draw[blue, ->, thick] (4.83,6.97) -- (4.83,6.36);
  \draw[blue, ->, thick] (4.5,6.97) -- (4.5,6.36);
  \draw[blue, ->, thick] (3.83,7) -- (3.83,6.39);
  \draw[blue, ->, thick] (4.17,6.97) -- (4.17,6.36);
  \draw[blue, ->, thick] (3.59,6.97) -- (3.59,6.36);
  \node[blue] at (3.15,5.06) {$N$};
  \node[blue] at (4.17,4.66) {$M$};
  \node[blue] at (2.73,3.83) {$v$};
  \draw[thick, blue] (3.59,6.39) rectangle (5.48,7.01);
  \draw[red, ->, thick] (4.54,8.33) -- (4.54,7.23);
  \draw[blue, ->, thick] (1.2,0) arc (0:50:1.2);
  \node[red, font=\itshape\Large] at (4.56,8.8) {$\int w\,\mathrm{sen}\,q\,ds$};
  \node at (1.44,0.63) {$\Theta$};
  \draw[<->, thick] (0,-1) -- (3.59,-1);
  \node at (1.8,-0.58) {$R\cos\Theta$};
  \draw[<->, thick] (0,-1.8) -- (5.5,-1.8);
  \node at (2.8,-1.45) {$R$};
  \draw[dotted, thick, gray!70!black] (3.54,0) -- (3.54,-1);
  \draw[dotted, thick, gray!70!black] (5.5,0) -- (5.5,-1.8);
  \begin{scope}[shift={(5.5,0)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
    }
    \node at (-0.55,0.15) {$C$};
    \draw[red, ->, thick] (0,-1.87) -- (0,-0.87);
    \node[red] at (0.64,-1.45) {$R_c$};
  \end{scope}
  \begin{scope}[shift={(-7.58,0.49)}]
    \fill[yellow!50] (3.0,7.0) -- (3.0,1.0) -- (5.87,3.56) -- cycle;
    \draw[red, ->, thick] (3.0,1.0) -- (3.0,7.0);
    \draw[blue, ->, thick] (3.0,7.0) -- (5.87,3.56);
    \draw[blue, ->, thick] (5.87,3.56) -- (3,0.96);
    \node[blue] at (5,5.33) {$N$};
    \node[blue] at (4.89,2.12) {$v$};
    \node[blue] at (3.45,5.7) {$\Theta$};
    \node[red, font=\itshape\Large, rotate=90] at (2.2,4.0) {$R_c-\int w\,\mathrm{sen}\,q\,ds$};
  \end{scope}

  \draw[->, thick, red] (52.53:5.46) arc (150:-150:0.25);

  \draw[blue, ->, thick] (2.58,4.98) -- (3.49,4.26);

\end{tikzpicture}
</script>

Figura 11: Diagrama de carga libre de arco con carga gravitacional distribuida.

Del triángulo mostrado se pueden encontrar relaciones directas para las fuerzas normales y cortantes. Las expresiones más generales serian:

$$
N_{(\theta)} =
\left(
R_c-\int_0^\theta wR\,sen(q)\,dq
\right)\cos\theta
$$

$$
V_{(\theta)} =
\left(
R_c-\int_0^\theta wR\,sen(q)\,dq
\right)\,sen\theta
$$

Para el calculo del momento flector se tomarán momentos respecto del punto de corte Ω, encontrado la siguiente expresión:

$$
M+wR^2\int_0^\theta sen(q)(cos(q)-cos(\theta))\,dq
=R_c(1-\cos\theta)
$$

$$
M+\frac{wR^2}{4}
(1-5\cos\theta+4\cos^2\theta)
=R_c(1-\cos\theta)
$$




## 10. Semiarco sujeto a carga transversal P

Un arco semicircular de radio R se encuentra sujeto a una carga puntual P en su cúspide, tal como se muestra en la siguiente figura. Con base en las condiciones de contorno a) defina si se trata de un sistema isostático o hiperestático, b) Calcule las reacciones del arco y encuentre las funciones de fuerzas internas para la fuerza axial, fuerza cortante y momento flector y c) grafique estos sobre el arco con las reglas de la mecánica de materiales.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\normalsize, scale=1]

  \colorlet{gr}{green!50!black}
  \begin{scope}[xshift=4.34cm]
    \draw[dotted, thick, gray!70!black] (-4.8,0) -- (4.8,0);
    \draw[dotted, thick, gray!70!black] (0,0) -- (0.01,4);
    \begin{scope}[shift={(-4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
      \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$A$};
    \end{scope}
    \begin{scope}[shift={(4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \foreach \dx in {-0.2,0,0.2}{
        \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
      }
      \draw[thick] (-0.5,-0.72) -- ++(1,0);
      \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$C$};
    \end{scope}
    \node[gray!70!black] at (-0.36,3.34) {$B$};
    \node[gray!70!black] at (-1.88,0.33) {$R$};
  \end{scope}

  \draw[black, line width=9pt, line cap=butt] (8.33,0.04) arc (0:180:4);
  \draw[magenta!60, line width=7pt, line cap=butt] (8.33,0.06) arc (0:180:4);
  \draw[dotted, thick, black] (8.33,0.04) arc (0:180:4);

  \node[blue] at (4.67,5) {$P$};
  \draw[blue, ->, thick] (4.33,5.13) -- (4.33,4.33);

\end{tikzpicture}
</script>

Figura 12: Semiarco con carga puntual en la cúspide.

**Solución:**

Por la simetría del problema se deduce que las reacciones son fuerzas verticales e iguales a P/2.

<!-- ESPACIO PARA INSERTAR LA FIGURA 13 -->

Figura 13: Diagrama de cuerpo libre de arco seccionado a un ángulo θ.

El calculo de las fuerzas internas requiere de la consideración de dos dominios, uno antes de la aplicación de la fuerza P, y otro después de la fuerza P. Considerando el primer dominio, se realiza un corte general a un ángulo θ y se toma la parte derecha del corte. En estas condiciones existen exactamente tres fuerzas actuando sobre el elemento aislado y ya que el arco se encuentra en equilibrio estos deben formar un polígono cerrado, en este caso un triángulo, tal como se muestra en la figura.

$$
V = \frac{P}{2}\,sen\theta
\qquad y \qquad
N = \frac{P}{2}\,cos\theta
$$

El cálculo del momento flector se hace tomando momentos en el punto de corte, esto elimina el efecto de la normal y del cortante, dándonos el resultado siguiente:

$$
M = \frac{PR}{2}(1-\cos\theta)
$$

<!-- ESPACIO PARA INSERTAR LA FIGURA 14 -->

Figura 14: Diagrama de cuerpo libre de arco seccionado a un ángulo θ en el segundo dominio.

Los cálculos necesarios en el segundo dominio se hacen de forma idéntica al caso presentado para el primer dominio, la cortante y la norma presentan las siguientes expresiones:

$$
V = \frac{P}{2}\,sen(180-\theta)
\qquad y \qquad
N = \frac{P}{2}\,cos(180-\theta)
$$

$$
M = \frac{PR}{2}(1-\cos\theta)
$$





## 11. Semiarco sujeto a carga distribuida uniforme

Un arco semicircular de radio R se encuentra sujeto a una carga distribuida P, tal como se muestra en la siguiente figura. Calcule las reacciones del arco y encuentre las funciones de fuerzas internas para la fuerza axial, fuerza cortante y momento flector. Después grafique estos sobre el arco con las reglas de la mecánica de materiales.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\normalsize, scale=1]

  \begin{scope}[xshift=4.34cm]
    \draw[dotted, thick, gray!70!black] (-4.8,0) -- (4.8,0);
    \draw[dotted, thick, gray!70!black] (0,0) -- (0.01,4);
    \begin{scope}[shift={(-4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
      \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$A$};
    \end{scope}
    \begin{scope}[shift={(4,0)}]
      \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
      \foreach \dx in {-0.2,0,0.2}{
        \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
      }
      \draw[thick] (-0.5,-0.72) -- ++(1,0);
      \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
      \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
        \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
      }
      \node at (-0.55,0.1) {$C$};
    \end{scope}
    \node[gray!70!black] at (-0.36,3.34) {$B$};
    \node[gray!70!black] at (-1.88,0.33) {$R$};
  \end{scope}

  \draw[black, line width=9pt, line cap=butt] (8.33,0.04) arc (0:180:4);
  \draw[magenta!60, line width=7pt, line cap=butt] (8.33,0.06) arc (0:180:4);
  \draw[dotted, thick, black] (8.33,0.04) arc (0:180:4);

  \node[blue] at (4.33,5.67) {$P$};
  \foreach \i in {0,...,24}{
    \draw[blue, ->, thick] ({0.33+\i*0.3333},5.31) -- ({0.33+\i*0.3333},4.51);
  }
  \draw[thick, blue] (0.33,4.51) rectangle (8.33,5.33);

\end{tikzpicture}
</script>

Figura 15: Diagrama de carga libre de arco con carga gravitacional distribuida.

**Solución:**

<!-- ESPACIO PARA INSERTAR LA FIGURA 16 -->

Figura 16: Diagrama de carga libre de arco con carga gravitacional distribuida.




## 12. Arco sujeto a carga radial distribuida

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=0.95]

  \colorlet{gr}{green!60!black}

  \draw[dashed, thick, gray!70!black] (0,0) -- (5,0);
  \draw[dashed, thick, gray!70!black] (5,0) -- (5,5.2);

  \draw[gr, thin] (-1.2,0) -- (0,0);
  \draw[gr, thin] (-1.2,0) arc (180:90:6.2);
  \draw[gr, thin] (5,6.2) -- (5,5.6);

  \begin{scope}[shift={(5,0)}]
    \foreach \a in {180,170,160,150,140,130,120,110,100}{
      \draw[gr, ->] (\a:6.2) -- (\a:5.1);
    }
    \draw[black, line width=7pt, line cap=butt] (180:5) arc (180:90:5);
    \draw[magenta!60, line width=5pt, line cap=butt] (180:5) arc (180:90:5);
    \draw[dotted, thick, black] (180:5) arc (180:90:5);
  \end{scope}

  \fill[yellow!30] (5,4.6) rectangle (5.4,5.4);
  \draw[thick] (5,4.6) -- (5,5.4);

  \node at (0.63,0.41) {$A$};
  \node at (4.6,4.6) {$B$};
  \node at (-0.32,3.95) {$q$};

  \draw[gr, ->] (5,5.77) -- (5,5.16);

\end{tikzpicture}
</script>

Figura 17: Diagrama de carga libre de arco con carga gravitacional distribuida.



## 13. Arco sujeto a carga tangencial distribuida

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\Large, scale=1]

  \colorlet{gr}{green!50!black}

  \draw[dashed, thick, gray!70!black] (-5.3,0) -- (5.3,0);
  \draw[dashed, thick, gray!70!black] (0,0) -- (0,5.2);

  \draw[black, line width=11pt, line cap=butt] (5,0) arc (0:180:5);
  \draw[magenta!60, line width=9pt, line cap=butt] (5,0) arc (0:180:5);
  \draw[dotted, thick, black] (5,0) arc (0:180:5);

  \foreach \a in {180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10,0}{
    \draw[gr, ->, thick] (\a:5.25) -- ++(\a-90:1.0);
  }

  \begin{scope}[shift={(-5,0)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \draw[thick] (-0.5,-0.5) -- (0.5,-0.5);
    \fill[yellow!30] (-0.5,-0.5) rectangle (0.5,-0.65);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.5) -- ++(-0.1,-0.15);
    }
    \node at (-0.45,0.3) {$A$};
  \end{scope}

  \begin{scope}[shift={(5,0)}]
    \draw[thick, fill=white] (0,0) -- ++(-0.3,-0.5) -- ++(0.6,0) -- cycle;
    \foreach \dx in {-0.2,0,0.2}{
      \draw[thick, fill=white] (\dx,-0.6) circle (0.1);
    }
    \draw[thick] (-0.5,-0.72) -- ++(1,0);
    \fill[yellow!30] (-0.5,-0.72) rectangle ++(1,-0.15);
    \foreach \x in {-0.45,-0.3,-0.15,0,0.15,0.3,0.45}{
      \draw[yellow!60!orange, thin] (\x,-0.72) -- ++(-0.1,-0.15);
    }
    \node at (-0.45,0.3) {$C$};
  \end{scope}

  \node at (-2.5,0.3) {$R$};
  \node at (0.3,5.5) {$B$};
  \node at (-1.2,5.9) {$q$};

\end{tikzpicture}
</script>
Figura 18: Diagrama de carga libre de arco con carga gravitacional distribuida.

A continuación, se muestran los ejes centroidales de un sistema estructural en equilibrio que está conformado por un arco de sección rectangular de 30cm x 50cm y una viga de eje recto de 30cm x 70cm.

- Dibuje los diagramas de fuerzas axiales, cortantes y momentos flectores de todo el sistema.
- Encuentre el máximo momento flector y su ubicación.
- Encuentre el esfuerzo de compresión y tracción en esta sección y dibuje la distribución de esfuerzos.

<!-- INSERTAR FIGURA: SISTEMA ESTRUCTURAL GENERAL -->

### 13.1 Análisis de reacciones

<!-- INSERTAR FIGURA 1.2: DIAGRAMA DE CUERPO LIBRE -->

*Figura 1.2 — Diagrama de cuerpo libre.*

**Equilibrio horizontal:**

$$
\sum F_x=0
$$

$$
A_x-30=0
$$

$$
\boxed{A_x=30\ \text{kN}\quad(\rightarrow)}
$$

**Equilibrio de momentos respecto a A:**

$$
\sum M_A=0
$$

$$
12B_y+30(5)-156(6)-20(0)=0
$$

$$
\boxed{B_y=65.5\ \text{kN}\quad(\uparrow)}
$$

**Equilibrio vertical:**

$$
\sum F_y=0
$$

$$
A_y+65.5-20-156=0
$$

$$
\boxed{A_y=110.5\ \text{kN}\quad(\uparrow)}
$$

### 13.2 Fuerzas internas por tramos

#### 13.2.1 Tramo 1 — Voladizo OJ (0 ≤ x ≤ 5 m), cuerpo libre a la izquierda del corte

**Fuerza normal:**

$$
N(x)=0
$$

**Fuerza cortante:**

$$
V(x)=-20-13x
$$

**Momento flector:**

$$
M(x)=-20x-6.5x^2
$$

Donde:

- V y M fueron dibujados en el sentido positivo de la convención. El sentido negativo que resulta al reemplazar valores indica que la dirección supuesta de ambos es incorrecta.

**En J (\(x=5\ \text{m}\)):**

Fuerza cortante:

$$
V(5)=-20-13(5)
$$

$$
\boxed{V(5)=-85\ \text{kN}}
$$

Momento flector:

$$
M(5)=-20(5)-6.5(25)
$$

$$
\boxed{M(5)=-262.5\ \text{kN}\cdot\text{m}}
$$

*(Tracción en la fibra superior).*

#### 13.2.2 Tramo 2 — Viga JB (5 ≤ x ≤ 12 m), cuerpo libre a la derecha del corte (u = 12 − x)

**Fuerza normal:**

$$
\boxed{N=-30\ \text{kN}\quad\text{(compresión)}}
$$

**Fuerza cortante:**

$$
V(u)=13u-65.5
$$

**Momento flector:**

$$
M(u)=65.5u-6.5u^2
$$

Donde:

- V y M fueron dibujados en el sentido positivo de la convención.

**En J (\(u=7\ \text{m}\)):**

Fuerza cortante:

$$
V(7)=13(7)-65.5
$$

$$
\boxed{V(7)=25.5\ \text{kN}}
$$

Momento flector:

$$
M(7)=65.5(7)-6.5(49)
$$

$$
\boxed{M(7)=140\ \text{kN}\cdot\text{m}}
$$

**En B (\(u=0\ \text{m}\)):**

$$
V(0)=-65.5\ \text{kN}
$$

$$
M(0)=0
$$

**Punto donde el cortante se anula:**

$$
V(u)=0
$$

$$
13u-65.5=0
$$

$$
u=\frac{65.5}{13}
$$

Como \(u=12-x\):

$$
x=12-\frac{65.5}{13}\approx6.96\ \text{m}
$$

**Momento flector máximo de la viga:**

$$
M_{\max,\text{viga}}=\frac{65.5^2}{2(13)}
$$

$$
\boxed{M_{\max,\text{viga}}=165\ \text{kN}\cdot\text{m}}
$$

#### 13.2.3 Tramo 3 — Arco AJ (0 ≤ φ ≤ 90°)

Un punto P del arco tiene coordenadas:

$$
P=(R\sin\varphi;\,-R\cos\varphi)
$$

Respecto de A, P está desplazado \(R\sin\varphi\) en horizontal y \(R(1-\cos\varphi)\) en vertical.

Sobre el tramo AP solo actúan las reacciones de A (el arco no lleva carga). Entonces:

**Fuerza normal:**

$$
N(\varphi)=-A_x\cos\varphi-A_y\sin\varphi
$$

Sustituyendo:

$$
N(\varphi)=-30\cos\varphi-110.5\sin\varphi
$$

**Fuerza cortante:**

$$
V(\varphi)=A_x\sin\varphi-A_y\cos\varphi
$$

Sustituyendo:

$$
V(\varphi)=30\sin\varphi-110.5\cos\varphi
$$

**Momento flector:**

$$
M(\varphi)=A_yR\sin\varphi-A_xR(1-\cos\varphi)
$$

Sustituyendo:

$$
M(\varphi)=552.5\sin\varphi-150(1-\cos\varphi)
$$

**Comprobación del nudo J:**

Los momentos que llegan al nudo deben equilibrarse.

$$
M(90^\circ)=262.5\ (\text{voladizo})+140\ (\text{viga }JB)
$$

$$
\boxed{M(90^\circ)=402.5\ \text{kN}\cdot\text{m}}
$$

En fuerzas: el arco entrega 110.5 kN vertical = 85 + 25.5 de los cortantes de la viga, y 30 kN horizontal = compresión de la viga JB.

**Resumen de fuerzas internas:**

**O (extremo libre), \(x=0\):**

$$
N=0,\qquad V=-20\ \text{kN},\qquad M=0
$$

**J (lado voladizo), \(x=5\ \text{m}\):**

$$
N=0,\qquad V=-85\ \text{kN},\qquad M=-262.5\ \text{kN}\cdot\text{m}
$$

**J (lado viga JB), \(x=5\ \text{m}\):**

$$
N=-30\ \text{kN},\qquad V=+25.5\ \text{kN},\qquad M=+140.0\ \text{kN}\cdot\text{m}
$$

**Máximo en viga, \(x=6.96\ \text{m}\):**

$$
N=-30\ \text{kN},\qquad V=0,\qquad M=+165.0\ \text{kN}\cdot\text{m}
$$

**B, \(x=12\ \text{m}\):**

$$
N=-30\ \text{kN},\qquad V=-65.5\ \text{kN},\qquad M=0
$$

**A (arco), \(\varphi=0^\circ\):**

$$
N=-30\ \text{kN},\qquad V=+110.5\ \text{kN},\qquad M=0
$$

**Máximo en arco, \(\varphi=74.81^\circ\):**

$$
N=-114.5\ \text{kN},\qquad V=0,\qquad M=+422.5\ \text{kN}\cdot\text{m}
$$

**J (arco), \(\varphi=90^\circ\):**

$$
N=-110.5\ \text{kN},\qquad V=-30\ \text{kN},\qquad M=+402.5\ \text{kN}\cdot\text{m}
$$

#### 13.2.4 Diagramas

<!-- INSERTAR FIGURA 1.3: DIAGRAMA DE FUERZA AXIAL -->

*Figura 1.3 — Diagrama de fuerza normal (D.F.N.).*

<!-- INSERTAR FIGURA 1.4: DIAGRAMA DE FUERZA CORTANTE -->

*Figura 1.4 — Diagrama de fuerza cortante (D.F.C.).*

<!-- INSERTAR FIGURA 1.5: DIAGRAMA DE MOMENTO FLECTOR -->

*Figura 1.5 — Diagrama de momento flector (D.M.F.).*

### 13.3 Máximo momento flector y su ubicación

**Ubicación del momento flector máximo en el arco:**

En el arco, \(dM/d\varphi=0\) (equivale a \(V=0\)):

$$
\frac{dM}{d\varphi}
=552.5\cos\varphi-150\sin\varphi=0
$$

$$
\tan\varphi=\frac{A_y}{A_x}
=\frac{110.5}{30}
$$

$$
\varphi=74.81^\circ
$$

**Cálculo del momento flector máximo:**

$$
M_{\max}=R\sqrt{A_x^2+A_y^2}-A_xR
$$

$$
M_{\max}=5(114.5)-150
$$

$$
\boxed{
M_{\max}=422.5\ \text{kN}\cdot\text{m}
\quad\text{en}\quad\varphi=74.81^\circ
}
$$

**Ubicación:**

En el arco, a φ = 74.81° medidos desde la vertical OA; a 4.825 m a la derecha de A y 1.310 m por debajo del eje de la viga. Es mayor que los máximos de la viga (262.5 y 165.0 kN·m). En esa sección V = 0 y N = −114.5 kN (la resultante de las reacciones en A, de 114.5 kN, es tangente al arco). El momento tracciona la fibra exterior del arco.

### 13.4 Esfuerzos de tracción y compresión en la sección crítica

Sección rectangular del arco: b = 0.30 m, h = 0.50 m.

**Datos de la sección:**

$$
A=0.15\ \text{m}^2,\qquad r=5\ \text{m}
$$

$$
r_1=4.75\ \text{m},\qquad r_2=5.25\ \text{m}
$$

**Radio del eje neutro:**

$$
r_n=\frac{h}{\ln(r_2/r_1)}
=\frac{0.50}{\ln(5.25/4.75)}
=4.99583\ \text{m}
$$

**Excentricidad:**

$$
e=5-4.99583=0.004169\ \text{m}
$$

**Esfuerzo normal promedio:**

$$
\frac{N}{A}=\frac{-114.5}{0.15}
=-763.3\ \text{kPa}
=-0.763\ \text{MPa}
$$

**Fibra exterior (\(r=5.25\ \text{m}\)) — tracción por flexión:**

$$
\sigma_{\text{exterior}}
=-0.763+
\frac{422.5(5.25-4.99583)}
{0.15(0.004169)(5.25)}
$$

$$
\sigma_{\text{exterior}}
=-0.763+32.706
=+31.94\ \text{MPa}
$$

**Fibra interior (\(r=4.75\ \text{m}\)) — compresión por flexión:**

$$
\sigma_{\text{interior}}
=-0.763-
\frac{422.5(4.99583-4.75)}
{0.15(0.004169)(4.75)}
$$

$$
\sigma_{\text{interior}}
=-0.763-34.962
=-35.73\ \text{MPa}
$$

**Resultados finales:**

$$
\boxed{
\begin{aligned}
\sigma_{\text{tracción}}&=31.94\ \text{MPa}
&&\text{(fibra exterior)}
\\[6pt]
\sigma_{\text{compresión}}&=35.73\ \text{MPa}
&&\text{(fibra interior)}
\end{aligned}
}
$$

**Referencia para una viga recta:**

$$
\sigma=\frac{Mc}{I}
=\frac{422.5(0.25)}{0.003068}
=34.39\ \text{MPa}
$$

Como \(N=0\), el eje neutro coincide con el centro de curvatura.

<!-- INSERTAR FIGURA 1.6: DISTRIBUCIÓN DE ESFUERZOS -->

*Figura 1.6 — Distribución de esfuerzos en la sección φ = 74.81°.*

Los ejes centroidales de un arco circular de 50 cm de diámetro en equilibrio están sometidos a carga uniformemente distribuida.

a) Dibuje los diagramas de fuerzas axiales, cortantes y momentos flectores de todo el sistema.

b) Encuentre el máximo momento flector y su ubicación.

Encuentre el esfuerzo de compresión y tracción en esta sección y dibuje la distribución de esfuerzos.

<!-- INSERTAR FIGURA: ESQUEMA GENERAL DEL SEGUNDO PROBLEMA -->

### 13.5 Datos

Origen en el centro O del arco (r = 7 m). El arco TC abarca 90° (radios a 135° y 45°), así que T(−4.950; 4.950) y C(4.950; 4.950). El tramo recto AT es tangente al arco en T (inclinado 45°) y, según la figura, el apoyo fijo A está al nivel del centro O, por lo que A(−7√2; 0) = (−9.899; 0) y L(AT) = 7 m. La sección es circular de 50 cm de diámetro (c = 0.25 m).

**Interpretación de la carga**

En la figura las flechas de q = 15 kN/m siguen la forma del elemento, por lo que se toma como carga vertical por unidad de longitud del eje. Longitud de arco TC:

**Longitud del tramo curvo TC:**

$$
L_{TC}=7\cdot\frac{\pi}{2}
$$

$$
\boxed{L_{TC}=10.996\ \text{m}}
$$

### 13.6 Reacciones

<!-- INSERTAR FIGURA 2.2: DIAGRAMA DE CUERPO LIBRE -->

*Figura 2.2 — Diagrama de cuerpo libre; coordenadas s (tramo recto) y ψ (arco, medida desde T).*

Resultantes de la carga: tramo recto:

**Carga distribuida sobre la viga recta:**

$$
W_1=15(7)=105\ \text{kN}
$$

Aplicada en \(x=-7.425\ \text{m}\).

**Carga distribuida sobre el arco:**

$$
W_2=15(10.996)=164.93\ \text{kN}
$$

Aplicada en x = 0 (por simetría del arco respecto al eje vertical).

**Equilibrio horizontal:**

$$
\sum F_x=0
$$

$$
A_x=0
$$

**Equilibrio de momentos respecto a A:**

$$
\sum M_A=0
$$

$$
C_y(14.849)-105(2.475)-164.93(9.899)=0
$$

$$
\boxed{C_y=127.46\ \text{kN}}
$$

**Equilibrio vertical:**

$$
\sum F_y=0
$$

$$
A_y=269.93-127.46
$$

$$
\boxed{A_y=142.48\ \text{kN}}
$$

**Resultado en C (\(\theta=90^\circ\)):**

$$
N=-45\ \text{kN}
$$

$$
V=+123.97\ \text{kN}
$$

$$
M=239.17\ \text{kN}\cdot\text{m}
$$

#### 13.12.2 Tramo CB (\(-30^\circ\leq\theta\leq90^\circ\)), cuerpo libre PB

A la derecha del corte solo actúa \(B_y=46.03\ \text{kN}\), con brazo horizontal \(5.196-6\cos\theta\).

**Fuerza normal:**

$$
N(\theta)=-46.03\cos\theta
$$

**Fuerza cortante:**

$$
V(\theta)=-46.03\sin\theta
$$

**Momento flector:**

$$
M(\theta)=46.03(5.196-6\cos\theta)
$$

Simplificando:

$$
M(\theta)=239.17-276.17\cos\theta
$$

**En C (\(\theta=90^\circ+\)):**

$$
N=0
$$

$$
V=-46.03\ \text{kN}
$$

$$
M=239.17\ \text{kN}\cdot\text{m}
$$

**En B (\(\theta=-30^\circ\)):**

$$
N=-39.86\ \text{kN}
$$

$$
V=+23.01\ \text{kN}
$$

$$
M=0
$$

**Comprobaciones:**

**Verificación de condiciones en los apoyos y continuidad:**

En el apoyo A:

$$
M(210^\circ)=0
$$

En el apoyo B:

$$
M(-30^\circ)=0
$$

En C:

$$
M(90^\circ)=239.17\ \text{kN}\cdot\text{m}
$$

El momento es continuo en C, ya que presenta el mismo valor en ambos tramos.

**Saltos de fuerza en C:**

Salto de fuerza cortante (carga vertical):

$$
\Delta V=123.97-(-46.03)=170\ \text{kN}
$$

Salto de fuerza normal (carga horizontal):

$$
\Delta N=0-(-45)=45\ \text{kN}
$$

**Resumen de resultados:**

**En A (\(\theta=210^\circ\)):**

$$
N=-84.86\ \text{kN}
$$

$$
V=-100.96\ \text{kN}
$$

$$
M=0
$$

**Máximo valor absoluto del momento (\(\theta=160.05^\circ\)):**

$$
N=-131.89\ \text{kN}
$$

$$
V=0
$$

$$
M=-282.14\ \text{kN}\cdot\text{m}
$$

**En C, lado izquierdo (\(\theta=90^\circ-\)):**

$$
N=-45.00\ \text{kN}
$$

$$
V=+123.97\ \text{kN}
$$

$$
M=+239.17\ \text{kN}\cdot\text{m}
$$

**En C, lado derecho (\(\theta=90^\circ+\)):**

$$
N=0
$$

$$
V=-46.03\ \text{kN}
$$

$$
M=+239.17\ \text{kN}\cdot\text{m}
$$

**Mínimo en CB (\(\theta=0^\circ\)):**

$$
N=-46.03\ \text{kN}
$$

$$
V=0
$$

$$
M=-37.00\ \text{kN}\cdot\text{m}
$$

**En B (\(\theta=-30^\circ\)):**

$$
N=-39.86\ \text{kN}
$$

$$
V=+23.01\ \text{kN}
$$

$$
M=0
$$

#### 13.12.3 Diagramas

<!-- INSERTAR FIGURA 3.3: DIAGRAMA DE FUERZA AXIAL -->

*Figura 3.3 — Diagrama de fuerza axial (D.F.N.).*

<!-- INSERTAR FIGURA 3.4: DIAGRAMA DE FUERZA CORTANTE -->

*Figura 3.4 — Diagrama de fuerza cortante (D.F.C.).*

<!-- INSERTAR FIGURA 3.5: DIAGRAMA DE MOMENTO FLECTOR -->

*Figura 3.5 — Diagrama de momento flector (D.M.F.), del lado traccionado.*

### 13.13 Máximo momento flector y su ubicación

**Tramo CB:**

El momento es estacionario cuando:

$$
\frac{dM}{d\theta}=276.17\sin\theta=0
$$

Por lo tanto:

$$
\theta=0^\circ
$$

Evaluando el momento:

$$
M(0^\circ)=239.17-276.17=-37.00\ \text{kN}\cdot\text{m}
$$

**Tramo AC:**

El momento es máximo o mínimo cuando:

$$
\frac{dM}{ds}=V=0
$$

Entonces:

$$
123.97\sin\theta+45\cos\theta=0
$$

$$
\tan\theta=-\frac{45}{123.97}
$$

$$
\theta=160.05^\circ
$$

**Evaluación del momento flector:**

$$
\begin{aligned}
M_{\theta=160.05^\circ}
={}&743.83\cos(160.05^\circ)\\
&-270\sin(160.05^\circ)+509.17
\end{aligned}
$$

$$
=-699.19-92.13+509.17
$$

También puede expresarse como:

$$
M_{\theta=160.05^\circ}
=509.17-6\sqrt{A_x^2+A_y^2}
$$

$$
=509.17-6(131.89)
=-282.14\ \text{kN}\cdot\text{m}
$$

**Determinación del momento máximo absoluto:**

Como:

$$
|-282.14|>239.17\ \text{kN}\cdot\text{m}
$$

el máximo absoluto se encuentra en el tramo AC.

$$
\boxed{
M_{\max}=-282.14\ \text{kN}\cdot\text{m}
\quad \text{en}\quad \theta=160.05^\circ
}
$$

*(Tracción en la fibra exterior).*

**Ubicación:**

Sobre el arco, en el tramo AC, a θ = 160.05° (19.95° sobre la horizontal del centro, lado izquierdo): x = −5.640 m, y = 2.047 m respecto a O (5.047 m sobre los apoyos). Es mayor que los máximos de la viga (262.5 y 165.0 kN·m). En esa sección V = 0 y N = −131.89 kN (la resultante de las reacciones en A, √(45² + 123.97²) = 131.89 kN, es tangente al arco). El momento es negativo: tracciona la fibra exterior.

### 13.14 Esfuerzos de tracción y compresión en la sección crítica

**Propiedades geométricas de la sección circular:**

$$
d=0.50\ \text{m},\quad c=0.25\ \text{m},\quad A=0.19635\ \text{m}^2
$$

$$
r=6\ \text{m},\quad r_1=5.75\ \text{m},\quad r_2=6.25\ \text{m}
$$

**Radio del eje neutro:**

$$
r_n=\frac{1}{2}\left(6+\sqrt{36-0.0625}\right)
=5.997395\ \text{m}
$$

**Excentricidad:**

$$
e=6-5.997395=0.002605\ \text{m}
$$

**Esfuerzo normal promedio:**

$$
\frac{N}{A}=\frac{-131.89}{0.19635}
=-671.7\ \text{kPa}
=-0.672\ \text{MPa}
$$

**Fibra exterior (\(r=6.25\ \text{m}\)) — tracción:**

$$
\sigma_{\text{exterior}}
=-0.672+
\frac{282.14(6.25-5.997395)}
{0.19635(0.002605)(6.25)}
$$

$$
\sigma_{\text{exterior}}
=-0.672+22.292
=+21.62\ \text{MPa}
$$

**Fibra interior (\(r=5.75\ \text{m}\)) — compresión:**

$$
\sigma_{\text{interior}}
=-0.672-
\frac{282.14(5.997395-5.75)}
{0.19635(0.002605)(5.75)}
$$

$$
\sigma_{\text{interior}}
=-0.672-23.730
=-24.40\ \text{MPa}
$$

**Resultados finales:**

$$
\boxed{
\begin{aligned}
\sigma_{\text{tracción}}&=21.62\ \text{MPa}
&&\text{(fibra exterior)}
\\[6pt]
\sigma_{\text{compresión}}&=24.40\ \text{MPa}
&&\text{(fibra interior)}
\end{aligned}
}
$$

**Referencia para una viga recta:**

$$
\sigma=\frac{Mc}{I}
=\frac{282.14(0.25)}{0.003068}
=22.99\ \text{MPa}
$$

La compresión axial (\(N=-131.89\ \text{kN}\)) aumenta la compresión de la fibra interior y reduce la tracción de la fibra exterior.

<!-- INSERTAR FIGURA 3.6: DISTRIBUCIÓN DE ESFUERZOS -->

*Figura 3.6 — Distribución de esfuerzos en la sección θ = 160.05° (N = −131.89 kN).*


## 14. Esfuerzos de flexión en elementos curvos

Geometría inicial de una viga curva con radio de curvatura constante. Además, el eje neutro se localizará a una distancia R del centro de curvatura, como se muestra.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\large, scale=0.95]

  \colorlet{rd}{red!50!black}

  \draw[rd, ->] (0,-1.4) -- (0,9.8);
  \node at (-0.4,9.8) {$y$};
  \draw[rd, ->] (0,0) -- (6.8,0);
  \node at (7.2,0) {$x$};

  \begin{scope}[shift={(0,7)}]

    \draw[rd] (240:6) arc (240:300:6);
    \draw[rd] (240:8) arc (240:300:8);
    \draw[rd] (240:6) -- (240:8);
    \draw[rd] (300:6) -- (300:8);
    \draw[rd] (240:7) arc (240:300:7);
    \draw[blue, dashed] (240:6.4) arc (240:300:6.4);
    \draw[blue, dashed] (240:6.6) arc (240:300:6.6);
    \draw[rd, dashed] (0,0) -- (240:6);
    \draw[rd, dashed] (0,0) -- (300:6);
    \fill[rd] (0,0) circle (1.5pt);
    \node at (0,0.6) {$C$};
    \draw[rd, <->] (240:1.2) arc (240:300:1.2);
    \node at (0,-0.75) {$\theta$};
    \begin{scope}[rotate=240]
      \draw[rd] (0,0.2) -- (0,-1.5);
      \draw[rd] (7,0.2) -- (7,-1.5);
      \draw[rd, <->] (0,-1.2) -- (7,-1.2);
    \end{scope}
    \node[fill=white, inner sep=1pt] at (-2.79,-2.43) {$R$};
    \begin{scope}[rotate=300]
      \draw[rd] (0,-0.2) -- (0,1.5);
      \draw[rd] (6.4,-0.2) -- (6.4,1.5);
      \draw[rd] (7,-0.2) -- (7,1.5);
      \draw[rd, <->] (0,1.2) -- (6.4,1.2);
      \draw[rd, <->] (6.4,1.2) -- (7,1.2);
    \end{scope}
    \node[fill=white, inner sep=1pt] at (2.99,-1.97) {$r$};
    \node at (4.82,-4.95) {$y$};
    \node[anchor=south east] at (240:6) {$A$};
    \node[anchor=east] at (240:6.5) {$J$};
    \node[anchor=east] at (239.99:7.26) {$D$};
    \node[anchor=north east] at (240:8) {$F$};
    \node[anchor=south west] at (300:6) {$B$};
    \node[anchor=west] at (300:6.5) {$K$};
    \node[anchor=west] at (300.16:7.18) {$E$};
    \node[anchor=north west] at (300:8) {$G$};

  \end{scope}

  \begin{scope}[shift={(11,0)}]

    \draw[rd, ->] (0,-1.4) -- (0,9.8);
    \node at (-0.4,9.8) {$y$};
    \draw[rd] (-2,7) -- (2,7);
    \fill[rd] (0,7) circle (1.5pt);
    \node at (0.4,7.5) {$C$};

    \draw[rd] (-1.0,1) -- (1.0,1) -- (1.25,-1) -- (-1.25,-1) -- cycle;
    \draw[blue] (-2.2,0) -- (3.6,0);
    \node at (-2.7,0) {$z$};
    \node[font=\normalsize] at (4.4,0) {N. A.};

    \draw[rd, <->] (-1.6,0) -- (-1.6,7);
    \node[fill=white, inner sep=1pt] at (-1.6,3.5) {$R$};

    \draw[rd, <->] (1.8,0.6) -- (1.8,7);
    \node[fill=white, inner sep=1pt] at (1.8,3.8) {$r$};
    \draw[rd, <->] (1.8,0) -- (1.8,0.6);
    \draw[rd] (1.4,0.6) -- (2.2,0.6);
    \node at (2.42,0.32) {$y$};

  \end{scope}

\end{tikzpicture}
</script>

Geometría deformada del elemento producto de la aplicación del momento flexionante M. Como se puede apreciar, el centro de curvatura ha cambiado de posición, así como el radio de curvatura; además, el ángulo central se ha incrementado.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\large, scale=0.95]

  \colorlet{rd}{red!50!black}

  \draw[rd, ->] (0,0) -- (0,2.46);
  \node at (-0.46,2.14) {$y$};
  \draw[rd, ->] (0,0) -- (7.0,0);
  \node at (7.3,0) {$x$};

  \begin{scope}[shift={(0,7)}]

    \draw[rd] (240:6) arc (240:300:6);
    \draw[rd] (240:8) arc (240:300:8);
    \draw[rd] (240:6) -- (240:8);
    \draw[rd] (300:6) -- (300:8);
    \draw[rd] (240:7) arc (240:300:7);
    \draw[blue, dashed] (240:6.4) arc (240:300:6.4);
    \draw[blue, dashed] (240:6.6) arc (240:300:6.6);
    \draw[rd, dashed] (0,0) -- (240:6);
    \draw[rd, dashed] (0,0) -- (300:6);

    \fill[rd] (0,0) circle (1.5pt);
    \node at (0,0.6) {$C'$};

    \draw[rd, <->] (245:1.2) arc (245:295:1.2);
    \node at (0,-2) {$\theta'=\theta+\Delta\theta$};

    \begin{scope}[rotate=240]
      \draw[rd] (0,0.2) -- (0,-1.5);
      \draw[rd] (7,0.2) -- (7,-1.5);
      \draw[rd, <->] (0,-1.2) -- (7,-1.2);
    \end{scope}
    \node[fill=white, inner sep=1pt] at (-3.22,-1.97) {$R'$};

    \begin{scope}[rotate=300]
      \draw[rd] (0,-0.2) -- (0,1.5);
      \draw[rd] (6.4,-0.2) -- (6.4,1.5);
      \draw[rd] (7,-0.2) -- (7,1.5);
      \draw[rd, <->] (0,1.2) -- (6.4,1.2);
      \draw[rd, <->] (6.4,1.2) -- (7,1.2);
    \end{scope}
    \node[fill=white, inner sep=1pt] at (3.12,-1.97) {$r'$};
    \node at (4.82,-4.95) {$y$};

    \node[anchor=south east] at (241.83:5.64) {$A'$};
    \node[anchor=east] at (240.92:6.37) {$J'$};
    \node[anchor=east] at (240.04:7.25) {$D'$};
    \node[anchor=north east] at (241.41:7.88) {$F'$};
    \node[anchor=south west] at (298.84:5.68) {$B'$};
    \node[anchor=west, inner sep=2pt] at (299.25:6.43) {$K'$};
    \node[anchor=west] at (300.16:7.18) {$E'$};
    \node[anchor=north west] at (297.58:7.81) {$G'$};

  \end{scope}

  \begin{scope}[shift={(5.52,1.21)}]
    \draw[blue!60!black, ->, very thick] (0,0) arc (-60:150:0.9);
  \end{scope}
  \node[blue!60!black] at (-6.04,3.35) {$M'$};

  \begin{scope}[shift={(-5.52,1.18)}]
    \draw[blue!60!black, ->, very thick] (0,0) arc (240:30:0.9);
  \end{scope}
  \node[blue!60!black] at (6.11,3.06) {$M$};

\end{tikzpicture}
</script>

El eje neutro ubicado antes de la deformación provocada por el momento flexionante a una distancia radial R, no cambia su longitud después de ocurrida la deformación, es decir:

$$
R\theta=R'\theta'
$$

El cambio de longitud de una fibra ubicada a una distancia y del eje neutro, se puede obtener restando la longitud final de la longitud inicial, de la siguiente forma:

$$
\Delta L=(R'-y)\theta'-(R-y)\theta
=-y(\theta'-\theta)
$$

$$
\Delta L=-y\Delta\theta
$$

A partir de esto es posible obtener la deformación unitaria de la fibra, simplemente dividiendo el cambio de longitud por la longitud inicial. Obteniéndose lo siguiente.

$$
\varepsilon=\frac{\Delta L}{L}
=\frac{-y\Delta\theta}{(R-y)\theta}
$$

$$
\varepsilon=-\frac{\Delta\theta}{\theta}
\frac{y}{R-y}
$$

Note que también es posible expresar esto en función de la coordenada radial de la fibra analizada, en ese caso se obtiene lo siguiente:

$$
\varepsilon=-\frac{\Delta\theta}{\theta}
\frac{R-r}{r}
=-\frac{\Delta\theta}{\theta}
\left(\frac{R}{r}-1\right)
$$

Conocida la distribución de deformaciones unitarias a través de la sección transversal analizada, es posible encontrar la distribución de esfuerzos recordando la ley de Hooke, así tenemos lo siguiente:

$$
\sigma=E\varepsilon
=-E\frac{\Delta\theta}{\theta}
\frac{y}{R-y}
$$

$$
\sigma=E\varepsilon
=-E\frac{\Delta\theta}{\theta}
\left(\frac{R}{r}-1\right)
$$

Finalmente, como el elemento analizado se encuentra en flexión pura, la sumatoria de fuerzas axiales deberá ser igual a cero, es decir:

$$
F=\int_A\sigma\,dA
=\int_A -E\frac{\Delta\theta}{\theta}
\frac{y}{R-y}\,dA=0
$$

$$
\int_A\frac{y}{R-y}\,dA=0
$$

Usando el sistema de coordenadas alternativo, se tiene lo siguiente:

$$
\int_A -E\frac{\Delta\theta}{\theta}
\left(\frac{R}{r}-1\right)dA
=
-E\frac{\Delta\theta}{\theta}
\int_A\left(\frac{R}{r}-1\right)dA=0
$$

$$
\int_A\frac{R}{r}\,dA-\int_A dA=0
$$

Finalmente se obtiene la fórmula para el cálculo de la posición del eje neutro de la sección analizada.

$$
\boxed{
R=\frac{A}{\displaystyle\int_A\frac{dA}{r}}
}
$$

Con esta ecuación es posible el cálculo de la posición del eje neutro de una viga curva, todo recae en el cálculo de la integral mostrada, que dependerá de las características de la sección. A continuación, se muestran estos valores para secciones conocidas.

<!-- ESPACIO PARA INSERTAR IMAGEN: SECCIONES RECTÁNGULO, CÍRCULO Y TRIÁNGULO -->

**Rectángulo**

$$
R=\frac{h}{\ln\left(\frac{r_2}{r_1}\right)}
$$

**Círculo**

$$
R=\frac{1}{2}
\left(\bar r+\sqrt{\bar r^2-c^2}\right)
$$

**Triángulo**

$$
R=
\frac{\frac{1}{2}h}
{\frac{r_2}{h}\ln\left(\frac{r_2}{r_1}\right)-1}
$$

La integral de los momentos que generan los diferenciales de área a través de la sección deberá ser igual, necesariamente, al momento externo aplicado M, es decir:

$$
M=\int_A E\frac{\Delta\theta}{\theta}
\frac{y^2}{R-y}\,dA
=
E\frac{\Delta\theta}{\theta}
\int_A\frac{y^2}{R-y}\,dA
$$

$$
M=E\frac{\Delta\theta}{\theta}
\int_A\frac{(R-r)^2}{r}\,dA
$$

<!-- ESPACIO PARA INSERTAR IMAGEN: SECCIÓN TRAPEZOIDAL -->

**Trapecio**

$$
R=
\frac{\frac{1}{2}h^2(b_1+b_2)}
{(b_1r_2-b_2r_1)\ln\left(\frac{r_2}{r_1}\right)-h(b_1-b_2)}
$$

Desarrollando la ecuación obtenida, se obtiene la siguiente expresión:

$$
M=E\frac{\Delta\theta}{\theta}
\int_A\left(\frac{R^2}{r}+r-2R\right)dA
$$

$$
M=E\frac{\Delta\theta}{\theta}
\left[
R^2\int_A\frac{dA}{r}
+\int_A r\,dA
-2RA
\right]
$$

$$
M=E\frac{\Delta\theta}{\theta}
\left[
R^2\frac{A}{R}
+\int_A r\,dA
-2RA
\right]
$$

$$
M=E\frac{\Delta\theta}{\theta}
\left[rA-RA\right]
$$

$$
\boxed{
E\frac{\Delta\theta}{\theta}
=\frac{M}{A(\bar r-R)}
}
$$

<!-- ESPACIO PARA INSERTAR IMAGEN: POSICIÓN DEL EJE NEUTRO Y CENTROIDE -->

Finalmente, sustituyendo en las ecuaciones de esfuerzos, se obtiene la distribución de esfuerzos.

$$
\sigma=E\varepsilon
=-\frac{M}{A(\bar r-R)}
\left(\frac{R}{r}-1\right)
$$

Considerando la diferencia entre la posición del eje neutro y el centroide de la sección como e, se tiene la siguiente expresión:

$$
\sigma=E\varepsilon
=-\frac{M}{Ae r}(R-r)
$$

En el sistema de coordenadas alternativo, se tiene:

$$
\sigma=E\varepsilon
=-\frac{My}{Ae(R-y)}
$$

Ahora, se calculará el cambio del radio de curvatura resultante producto de la aplicación del momento externo M. Para esto se deberá recordar la siguiente expresión:

$$
R=\frac{\theta'}{\theta}R'
=\left(1+\frac{\Delta\theta}{\theta}\right)R'
$$

$$
\frac{1}{R'}=
\frac{1}{R}\left(1+\frac{\Delta\theta}{\theta}\right)
$$

$$
\frac{1}{R'}=
\frac{1}{R}
\left(1+\frac{M}{EA(\bar r-R)}\right)
=
\frac{1}{R}
\left(1+\frac{M}{eEA}\right)
$$




## 15. Energía de deformación en vigas de eje recto

La energía de deformación es una medida de la cantidad de trabajo que desarrollan las fuerzas internas que actúan sobre un cuerpo deformable. En el caso de vigas de eje recto, las fuerzas internas actuantes usualmente son de tres tipos, por fuerza axial, momento flector y fuerza cortante.

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, font=\itshape\large, scale=0.7]

  \draw[dash dot, thick, gray!70!black] (-0.8,0) -- (13.3,0);

  \draw[red!60!black] plot[smooth] coordinates {(0,1.1)(1,1.2)(2,1.0)(3,0.9)(4,1.0)(5,1.4)(6,1.7)(7,1.6)(8,1.3)(9,1.5)(10,2.0)(11,2.6)(12,2.8)};
  \draw[red!60!black] (0,0.2) -- (0,1.1);
  \draw[red!60!black] (12,0.2) -- (12,2.8);

  \fill[blue!15] (0,-0.2) rectangle (12,0.2);
  \draw[thick] (0,-0.2) rectangle (12,0.2);

  \draw[red, ->, thick] (2.14,1.9) -- (2.14,0.2);
  \node at (2.63,1.63) {$P$};

  \draw[red, ->, thick] (6.25,0.35) arc (90:-90:0.35);
  \node[fill=white, inner sep=1pt] at (6.79,0.71) {$M$};

  \draw[thick, fill=white] (0,-0.2) -- (-0.6,-1.2) -- (0.6,-1.2) -- cycle;
  \draw[thick] (-0.9,-1.2) -- (0.9,-1.2);
  \fill[yellow!30] (-0.9,-1.2) rectangle (0.9,-1.4);
  \foreach \x in {-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8}{
    \draw[yellow!60!orange, thin] (\x,-1.2) -- ++(-0.1,-0.2);
  }

  \draw[thick, fill=white] (12,-0.2) -- (11.4,-1.0) -- (12.6,-1.0) -- cycle;
  \foreach \dx in {-0.6,0,0.6}{
    \draw[thick, fill=white] (12+\dx,-1.25) circle (0.25);
  }
  \draw[thick] (11.1,-1.5) -- (12.9,-1.5);
  \fill[yellow!30] (11.1,-1.5) rectangle (12.9,-1.7);

  \begin{scope}[shift={(16,0)}]

    \draw[dash dot, thick, gray!70!black] (-0.8,0) -- (6.5,0);
    \draw[red!60!black] plot[smooth] coordinates {(0,1.1)(1,1.2)(2,1.0)(3,0.95)(4,1.25)};
    \draw[red!60!black] (0,0.2) -- (0,1.1);
    \draw[red!60!black] (4,0.2) -- (4,1.25);

    \fill[blue!15] (0,-0.2) rectangle (4,0.2);
    \draw[thick] (0,-0.2) rectangle (4,0.2);

    \draw[red, ->, thick] (3.29,2.1) -- (3.29,0.2);
    \node at (2.8,1.63) {$P$};

    \draw[thick, fill=white] (0,-0.2) -- (-0.6,-1.4) -- (0.6,-1.4) -- cycle;
    \draw[thick] (-0.9,-1.4) -- (0.9,-1.4);
    \fill[yellow!30] (-0.9,-1.4) rectangle (0.9,-1.6);
    \foreach \x in {-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8}{
      \draw[yellow!60!orange, thin] (\x,-1.4) -- ++(-0.1,-0.2);
    }

    \draw[red, ->, thick] (4.12,0.54) arc (90:-90:0.45);
    \node[fill=white, inner sep=1pt] at (4.58,0.87) {$M$};

    \draw[red, ->, thick] (4,0) -- (5.2,0);
    \node at (5.43,0.41) {$N$};

    \draw[red, ->, thick] (4,0) -- (4,-1.2);
    \node at (3.7,-0.8) {$V$};

  \end{scope}

\end{tikzpicture}
</script>

La energía de deformación total de un elemento diferencial puede ser calculado de forma independiente para cada una de las fuerzas internas existentes dentro de la viga. A continuación, se muestra el cálculo realizado para cada uno de estos casos.

### 15.1 ENERGÍA DE DEFORMACIÓN POR CARGA AXIAL

Para un elemento de longitud dx de la viga mostrada anteriormente, se tiene que el trabajo que realiza la fuerza normal sobre este elemento diferencial viene dado como el semiproducto de la fuerza normal y la diferencial de deformación. Es decir, se tiene la siguiente expresión:

<!-- ESPACIO PARA INSERTAR IMAGEN: ELEMENTO DIFERENCIAL SOMETIDO A FUERZA AXIAL -->

$$
dU_a=\frac{1}{2}N(d\delta)
$$

Si durante este proceso el cuerpo se mantiene lineal y elástico, se puede establecer la siguiente relación como consecuencia de la ley de Hooke.

$$
d\delta=\frac{N}{EA}\,dx
$$

La energía total producida por la fuerza axial a lo largo del elemento se obtiene por integración en toda la longitud, es decir:

$$
dU_a=\frac{1}{2}\frac{N^2}{EA}\,dx
$$

$$
\boxed{
U_a=\frac{1}{2}\int_0^L\frac{N^2}{EA}\,dx
}
$$

### 15.2 ENERGÍA DE DEFORMACIÓN POR FLEXIÓN

A diferencia de las fuerzas axiales, los momentos flectores producen giro en la sección, tal como se muestra en el siguiente gráfico. Esta dupla, momento y giro de la sección también genera trabajo. Si se grafica la relación entre los momentos y los giros de la sección se encontrará que esta guarda una relación lineal, por lo que el trabajo neto será simplemente el semiproducto del momento y el diferencial de giro para un elemento diferencial como el mostrado. Es decir, se tendría la siguiente expresión.

<!-- ESPACIO PARA INSERTAR IMAGEN: ELEMENTO CURVO SOMETIDO A MOMENTO FLECTOR -->

$$
dU_f=\frac{1}{2}M(d\theta)
$$

Si, al igual que el caso anterior, existe el trabajo se desarrolla dentro del intervalo elástico lineal del comportamiento del material, se tiene la siguiente relación:

$$
d\theta=\frac{M}{EI}\,dx
$$

Finalmente, la energía de deformación producida por la acción del momento flector será simplemente la integral a lo largo del elemento. Hecho de esta forma se obtiene:

$$
dU_f=\frac{1}{2}\frac{M^2}{EI}\,dx
$$

$$
\boxed{
U_f=\frac{1}{2}\int_0^L\frac{M^2}{EI}\,dx
}
$$

### 15.3 ENERGÍA DE DEFORMACIÓN POR CORTE

En un elemento diferencial de longitud dx, además de encontrar fuerzas axiales y momentos flectores, también encontramos fuerzas cortantes o de cizalla, que tienden a deformar angularmente el elemento, tal como se muestra en la figura mostrada.

<!-- ESPACIO PARA INSERTAR IMAGEN: ELEMENTO DIFERENCIAL SOMETIDO A FUERZA CORTANTE -->

Las fuerzas cortantes provocan una deformación transversal adicional a las provocadas por la flexión, por lo que generan un trabajo adicional.

El trabajo adicional sería simplemente el semiproducto del cortante y desplazamiento dv provocado, es decir:

$$
du_s=\frac{1}{2}V\,dv
$$

Además, geométricamente se aprecia la siguiente relación trigonométrica entre el desplazamiento vertical y la deformación angular.

$$
\tan\gamma=\frac{dv}{dx}
$$

(Aprox. 1° orden)

$$
\Rightarrow\quad
\gamma\approx\tan\gamma
\Rightarrow\gamma=\frac{dv}{dx}
$$

Además, si se cumple que el material permanece lineal elástico durante el proceso analizado se cumple la ley de Hooke para el cortante, es decir:

$$
\tau=G\gamma
$$

Sustituyendo todas estas consideraciones se obtiene una expresión para el desplazamiento vertical producido por la fuerza cortante útil para obtener una expresión simplificada de la energía de deformación por cortante.

$$
\alpha\frac{V}{A}
=G\frac{dv}{dx}
$$

$$
\Rightarrow\quad
dv=\frac{\alpha V}{GA}\,dx
$$

$$
\Rightarrow\quad
du_s=\frac{1}{2}\frac{\alpha V^2}{GA}\,dx
$$

Integrando a lo largo de toda la viga se obtiene la energía de deformación por cortante total del sistema.

$$
\boxed{
U_s=\frac{1}{2}\int_0^L
\frac{\alpha V^2}{AG}\,dx
}
$$

La energía de deformación total de la viga será igual a la suma de estos términos, es decir:

$$
\boxed{
U=
\frac{1}{2}\int_0^L\frac{N^2}{EA}\,dx
+
\frac{1}{2}\int_0^L\frac{M^2}{EI}\,dx
+
\frac{1}{2}\int_0^L\frac{\alpha V^2}{AG}\,dx
}
$$

### 15.4 ENERGÍA DE DEFORMACIÓN TOTAL EN UNA VIGA SIMPLEMENTE APOYADA

En el caso de una viga simplemente apoyada sometida a carga distribuida transversal w, con coeficiente elástico E, G, momento de inercia de la sección transversal I y área de la sección transversal A, la expresión para la energía de deformación total de la viga será:

<!-- ESPACIO PARA INSERTAR IMAGEN: VIGA SIMPLEMENTE APOYADA SOMETIDA A CARGA DISTRIBUIDA -->

$$
U=U_f+U_s
=\frac{1}{2}\int_0^L\frac{M^2}{EI}\,dx
+\frac{1}{2}\int_0^L\frac{\alpha V^2}{AG}\,dx
$$

Para el cálculo de la energía de deformación se requiere tener expresiones para el momento flector y la fuerza cortante como función de la coordenada x, esto se puede obtener a partir del diagrama de fuerzas internas, es decir:

**Para la fuerza cortante**

$$
V_{(x)}=\frac{\omega L}{2}-\omega x
$$

$$
V_{(x)}=\frac{\omega L}{2}
\left(1-\frac{2x}{L}\right)
$$

**Para el momento flector**

$$
M_{(x)}=\frac{\omega L}{2}x-\frac{\omega}{2}x^2
$$

$$
M_{(x)}=\frac{\omega L^2}{2}
\left[
\frac{x}{L}-\left(\frac{x}{L}\right)^2
\right]
$$

Sustituyendo estas expresiones en las integrales mostradas e integrando caso por caso se tienen los siguientes resultados

**Para la energía de deformación por corte:**

$$
U_s=
\frac{1}{2}\frac{\alpha}{AG}
\int_0^L
\left(\frac{\omega L}{2}-\omega x\right)^2dx
$$

$$
\Rightarrow\quad
U_s=
\frac{\alpha\omega^2L^2}{8AG}
\int_0^L
\left(1-\frac{2x}{L}\right)^2dx
$$

$$
U_s=
\frac{\alpha\omega^2L^2}{8AG}
\left(\frac{L}{3}\right)
$$

$$
\boxed{
U_s=\frac{\alpha\omega^2L^3}{24AG}
}
$$

**Para la energía de deformación por flexión:**

$$
U_f=
\frac{\omega^2L^4}{8EI}
\int_0^L
\left[
\frac{x}{L}-\left(\frac{x}{L}\right)^2
\right]^2dx
$$

$$
\boxed{
U_f=\frac{\omega^2L^5}{240EI}
}
$$

La relación de energías de deformación es:

$$
\frac{U_f}{U_s}
=
\frac{24AG}{240\alpha EI}L^2
$$

$$
\Rightarrow\quad
\frac{U_f}{U_s}
=
\frac{6G}{5\alpha E}
\left(\frac{L}{h}\right)^2
$$

$$
\boxed{
\frac{U_f}{U_s}
=\lambda\left(\frac{L}{h}\right)^2
}
$$

$$
Si\left(\frac{E}{G}=0.5\Rightarrow\lambda=2.4\right),
$$

$$
\boxed{
\frac{U_f}{U_s}
=2.4\left(\frac{L}{h}\right)^2
}
$$

**Tabla 1: Relación de energía de deformación por flexión y cortante contra la razón de esbeltez de una viga.**

| L/h | Uf/Us | Uf | Us |
|---:|---:|---:|---:|
| 0.01 | 0.0 | 0.0% | 100.0% |
| 1.00 | 2.4 | 70.6% | 29.4% |
| 2.00 | 9.6 | 90.6% | 9.4% |
| 3.00 | 21.6 | 95.6% | 4.4% |
| 4.00 | 38.4 | 97.5% | 2.5% |
| 5.00 | 60.0 | 98.4% | 1.6% |
| 6.00 | 86.4 | 98.9% | 1.1% |
| 7.00 | 117.6 | 99.2% | 0.8% |
| 8.00 | 153.6 | 99.4% | 0.6% |
| 9.00 | 194.4 | 99.5% | 0.5% |
| 10.00 | 240.0 | 99.6% | 0.4% |
| 11.00 | 290.4 | 99.7% | 0.3% |
| 12.00 | 345.6 | 99.7% | 0.3% |
| 13.00 | 405.6 | 99.8% | 0.2% |
| 14.00 | 470.4 | 99.8% | 0.2% |
| 15.00 | 540.0 | 99.8% | 0.2% |
| 16.00 | 614.4 | 99.8% | 0.2% |
| 17.00 | 693.6 | 99.9% | 0.1% |
| 18.00 | 777.6 | 99.9% | 0.1% |
| 19.00 | 866.4 | 99.9% | 0.1% |
| 20.00 | 960.0 | 99.9% | 0.1% |

<!-- ESPACIO PARA INSERTAR GRÁFICO DE LÍNEAS DE ENERGÍA DE DEFORMACIÓN -->

*Figura 19: Relación entre la energía de deformación por flexión y cortante en una viga con carga transversal.*

<!-- ESPACIO PARA INSERTAR GRÁFICO DE BARRAS DE ENERGÍA DE DEFORMACIÓN -->

*Figura 20: Diagrama de barras de la energía de deformación por flexión y cortante en una viga con carga transversal.*






## 16. Energía de deformación en vigas de eje curvo

La energía de deformación en un elemento estructural cualquiera puede calcularse de forma general como la suma de la energía de deformación producida de forma independiente por la energía de deformación por flexión, axial y momento flector.

### 16.1 Energía de deformación por momentos

Cuando sobre un elemento curva esta actuando un momento flexionante M, este elemento tiende a incrementar la medida del ángulo centra y a reducir el radio de curvatura. Esto hace que los extremos donde se encuentra actuando los momentos flectores giren un ángulo. En estas condiciones, la energía de deformación por flexión sería el semiproducto del momento y el diferencial del giro.

$$
dU_f=\frac{1}{2}M\delta(d\theta)
$$

Si además, el material aun esta dentro del rango de comportamiento elástico lineal, se cumple la siguiente relación que vincula este diferencial de giro, el momento aplicado y otras constantes del material y de la sección, tal como se muestra a continuación:

$$
\delta(d\theta)=\frac{M}{EAe}\,d\theta
$$

Sustituyendo esta expresión en la ecuación del cálculo de la energía de deformación, se tiene la siguiente expresión:

$$
dU_f=\frac{1}{2}\frac{M^2}{EAe}\,d\theta
=\frac{1}{2}\frac{M^2}{EAeR}\,ds
$$

$$
\boxed{
U_f=\int_L\frac{1}{2}\frac{M^2}{EAeR}\,ds
}
$$

Como se puede apreciar, a diferencia de la teoría de vigas de eje recto, la energía de deformación por flexión en elementos curvos tiene como variables el radio de curvatura de la geometría inicial del elemento, así como excentricidad, es decir, la diferencia entre la posición del centroide y el eje neutro.

### 16.2 Energía de deformación de momento por deformación axial

Además del momento flector, se aplica una carga axial que pasa por el eje del elemento, aunque esta carga en general solo induce energía por deformación axial, provoca un giro diferencial negativo en el elemento. Este giro diferencial provoca en el momento flector un giro adicional, que a su vez provoca un incremento de la energía.

$$
R\delta(d\theta)=\frac{N}{EA}\,dx,
\qquad
\delta(d\theta)=\frac{N}{EAR}\,dx
$$

El incremento de la energía de deformación se obtiene como el producto del momento flector y el giro diferencial. Si, además, como hasta ahora, estamos dentro del rango elástico lineal, la energía de deformación se obtiene de la siguiente expresión:

$$
dU_{fM}=-M\delta(d\theta)
=-\frac{MN}{EAR}\,dx
$$

Integrando esta expresión a lo largo del elemento, se obtiene la energía de deformación del momento flector provocada por el giro negativo debida a las fuerzas axiales.

$$
\boxed{
U_{fM}=-\int_L\frac{MN}{EAR}\,dx
}
$$

### 16.3 Energía de deformación por fuerza axial

La energía de deformación axial en el elemento se obtiene como el semiproducto de la carga y la deformación axiales, en forma diferencial se obtiene la siguiente relación.

$$
dU_a=\frac{1}{2}N\,du
$$

La deformación axial provocada por la acción de las cargas axiales se puede obtener a partir de la siguiente relación.

$$
du=\frac{N}{EA}\,ds
$$

Finalmente, el diferencial de la energía de deformación por fuerzas axiales tiene la siguiente expresión:

$$
dU_a=\frac{1}{2}\frac{N^2}{EA}\,ds
$$

Integrando esta expresión a lo largo del elemento, se obtiene lo siguiente:

$$
\boxed{
U_a=\int_L\frac{1}{2}\frac{N^2}{EA}\,ds
}
$$

### 16.4 Energía de deformación por fuerza cortante

En el caso de fuerzas cortantes, la energía de deformación por cortante se obtiene como el semiproducto de la fuerza cortante y la deflexión que esta provoca.

$$
dU_s=\frac{1}{2}V\,dv
$$

Además, el diferencial de deflexión y el diferencial de arco se vinculan por de la deformación por cortante mediante la siguiente relación geométrica. Considerando que la deformación por cortante se puede obtener de la ley de Hooke para el cortante, en el caso de material elástico lineal, se obtiene:

$$
dv=\gamma ds=\frac{\alpha V}{AG}\,ds,
\qquad
\Rightarrow\quad
dU_s=\frac{1}{2}\frac{\alpha V^2}{AG}\,ds
$$

Finalmente, integrando los diferenciales de energía a lo largo del elemento se tiene la expresión para la energía de deformación para elementos curvos.

$$
\boxed{
U_s=\int_L\frac{1}{2}\frac{\alpha V^2}{AG}\,ds
}
$$

Así, la energía de deformación total en un eje curvo producto de las fuerzas internas actuantes sobre este tiene la siguiente forma:

$$
\boxed{
\begin{aligned}
U={}&
\frac{1}{2}\int_L\frac{M^2}{EAeR}\,ds
-\int_L\frac{MN}{EAR}\,ds\\
&+\frac{1}{2}\int_L\frac{N^2}{EA}\,ds
+\frac{1}{2}\int_L\frac{\alpha V^2}{AG}\,ds
\end{aligned}
}
$$





## 17. Teoría de Castigliano

Dado un cuerpo deformable arbitrario sujeto a una distribución de fuerzas cualquiera actuante sobre el mismo, tal como se muestra en la siguiente figura.

<!-- ESPACIO PARA INSERTAR FIGURA: CUERPO DEFORMABLE SOMETIDO A FUERZAS EXTERNAS -->

En estas condiciones, la energía de deformación del cuerpo será igual al trabajo externo realizado por las fuerzas externas. De esta forma, la energía de deformación puede ser considerada una función de n variables

$$
U=U(F_1,F_2,\ldots,P,\ldots,F_n)
$$

Ya que la energía de deformación depende de P, entre otras, si esta carga varía en dP, la energía de deformación final se puede expresar de la siguiente forma:

$$
U_f=U+\frac{\partial U}{\partial P}dP
$$

Si además suponemos que el cuerpo permanece dentro del rango de comportamiento elástico lineal, se puede aplicar el principio de superposición, esto implica que se pueden aplicar las cargas en un orden arbitrario y finalmente la energía de deformación no cambiará.

Así, se puede aplicar en principio el dP al cuerpo, lo que provocará una energía de deformación igual:

$$
U_o=\frac{1}{2}dP\,d\Delta
$$

Y si luego se aplican las cargas originales, incluyendo la carga P, se obtiene la energía de deformación final como:

$$
U_f=\frac{1}{2}dP\,d\Delta+dP\Delta+U
$$

Al realizar una comparación entre esta energía de deformación y la energía de deformación por la variación de la carga P, se observa claramente que ambos deben ser iguales. Además, como el primer termino es de un orden diferencial superior puede considerarse cero con respecto del resto de términos, es decir:

$$
U_f=dP\Delta+U
$$

<!-- ESPACIO PARA INSERTAR FIGURA: CUERPO DEFORMABLE CON INCREMENTO DE CARGA dP Y DESPLAZAMIENTO dΔ -->

Comparando ambas expresiones para la energía de deformación, se concluye que el desplazamiento buscado debe ser igual a la derivada parcial de la energía de deformación con respecto de la carga actuando en la dirección del desplazamiento buscado.

$$
\boxed{
\Delta=\frac{\partial U}{\partial P}
}
$$




## 18. Cálculo de deflexiones

### 18.1 Armaduras

En el caso particular de armaduras, sus elementos están sujetos únicamente a fuerza axial, por lo que la energía de deformación total de la armadura será igual a la suma de tales efectos, es decir:

$$
\boxed{
U=\frac{1}{2}\sum_i\int_0^L
\frac{N_i^2}{E_iA_i}\,dx
}
$$

Esta energía de deformación es, en general, función de un conjunto de fuerzas externas. Si se tiene interés en el cálculo de un desplazamiento particular, este puede ser obtenido como la derivada parcial de esta expresión con respecto de una fuerza que esté actuando en la misma dirección del desplazamiento deseado. En ese caso, tal desplazamiento puede ser obtenido mediante la siguiente expresión:

$$
\boxed{
\Delta=\frac{\partial U}{\partial P}
=\sum_i\int_0^L
\frac{N_i}{E_iA_i}
\left(\frac{\partial N_i}{\partial P}\right)dx
}
$$

<!-- ESPACIO PARA INSERTAR IMAGEN: PUENTE DE ARMADURA -->

### 18.2 Vigas de eje recto

La energía de deformación para el caso de vigas de eje recto sujeta a un conjunto de fuerzas (F_i) y pares (M_i) externos tiene la siguiente forma general.

$$
\boxed{
U=\frac{1}{2}\int_0^L\frac{N^2}{EA}\,dx
+\frac{1}{2}\int_0^L\frac{M^2}{EI}\,dx
+\frac{1}{2}\int_0^L\frac{\alpha V^2}{AG}\,dx
}
$$

Si estamos interesados en obtener el desplazamiento de tal conjunto de fuerzas en un punto arbitrario O de la viga en dirección n, se deriva la energía de deformación con respecto de la fuerza actuante en ese punto y esa dirección (P). Esto da como resultado lo siguiente:

$$
\boxed{
\begin{aligned}
\Delta=\frac{\partial U}{\partial P}
={}&\int_0^L\frac{N}{EA}
\left(\frac{\partial N}{\partial P}\right)dx\\
&+\int_0^L\frac{M}{EI}
\left(\frac{\partial M}{\partial P}\right)dx\\
&+\int_0^L\frac{\alpha V}{AG}
\left(\frac{\partial V}{\partial P}\right)dx
\end{aligned}
}
$$

<!-- ESPACIO PARA INSERTAR IMAGEN: ESTRUCTURA DE VIGAS DE EJE RECTO -->

Si como ocurre en muchos de los casos de análisis de vigas de ejes rectos, la fuerza axial es cero, la expresión anterior puede reducirse a la siguiente expresión:

$$
\boxed{
\Delta=\frac{\partial U}{\partial P}
=\int_0^L\frac{M}{EI}
\left(\frac{\partial M}{\partial P}\right)dx
+\int_0^L\frac{\alpha V}{AG}
\left(\frac{\partial V}{\partial P}\right)dx
}
$$

En muchos casos la relación de aspecto de la viga puede ser tal que el aporte de la energía de deformación por fuerza cortante con respecto del de la energía de deformación fuera despreciable, en esos casos la expresión se simplifica aún más, dando como resultado que:

$$
\boxed{
\Delta=\frac{\partial U}{\partial P}
=\int_0^L\frac{M}{EI}
\left(\frac{\partial M}{\partial P}\right)dx
}
$$

Esta es una conocida expresión para el cálculo de deflexiones en una viga de eje recto.

### 18.3 Vigas de eje curvo

En general, el comportamiento de una viga de eje curvo será determinado por la relación de aspecto R/h, es decir, la relación del radio de curvatura del elemento curvo al peralte de la sección, pues si este valor es grande, se puede afirmar que la curvatura de la sección es pequeña por lo que puede ser aproximada por la teoría de vigas de eje recto y las expresiones para el cálculo de deflexiones pueden simplificarse mucho. A continuación, expresamos tales condiciones.

### 18.4 Vigas curvas gruesas (R/h<5)

En el caso de vigas de eje curvo con relaciones de aspecto menores a cinco, el aporte de la energía de deformación por cortante y axial no puede despreciarse, por lo que el cálculo de la deflexión debe tener en cuenta estos aportes.

La energía de deformación total para una viga de eje curvo tiene la siguiente expresión general:

$$
\boxed{
\begin{aligned}
U={}&\frac{1}{2}\int_L\frac{M^2}{EAeR}\,ds
-\int_L\frac{MN}{EAR}\,ds\\
&+\frac{1}{2}\int_L\frac{N^2}{EA}\,ds
+\frac{1}{2}\int_L\frac{\alpha V^2}{AG}\,ds
\end{aligned}
}
$$

Si se está interesado en el desplazamiento de un punto cualquiera actuando sobre la viga, este puede ser obtenido simplemente como la derivada parcial de la energía de deformación con respecto de una fuerza actuando en dirección del desplazamiento, es decir:

$$
\boxed{
\begin{aligned}
\Delta=\frac{\partial U}{\partial P}
={}&\int_L\frac{M}{EAeR}
\left(\frac{\partial M}{\partial P}\right)ds\\
&-\int_L\frac{N}{EAR}
\left(\frac{\partial M}{\partial P}\right)ds\\
&-\int_L\frac{M}{EAR}
\left(\frac{\partial N}{\partial P}\right)ds\\
&+\int_L\frac{N}{EA}
\left(\frac{\partial N}{\partial P}\right)ds\\
&+\int_L\frac{\alpha V}{AG}
\left(\frac{\partial V}{\partial P}\right)ds
\end{aligned}
}
$$

### 18.5 Vigas curvas delgadas (R/h>5)

En el caso de vigas de eje curvo con relaciones de aspecto mayores a cinco, se observa que geométricamente las vigas se aproximan a las vigas de eje recto, además, si la relación de esbeltez, es decir, la relación L/h es mayor a cinco, el aporte de la cortante y la fuerza axial es insignificante con respecto de la energía de deformación por flexión por lo que la energía de deformación de una viga de eje curvo delgada puede expresarse como:

$$
\boxed{
U=\frac{1}{2}\int_0^L\frac{M^2}{EI}\,dx
}
$$

Con estas consideraciones, el desplazamiento de un punto de la viga puede obtenerse como la derivada parcial de la energía de deformación con respecto de una fuerza actuante en esa dirección.

$$
\boxed{
\Delta=\frac{\partial U}{\partial P}
=\int_0^L\frac{M}{EI}
\left(\frac{\partial M}{\partial P}\right)dx
}
$$