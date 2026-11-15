## 1. Teoría General de Tubos de Pared Gruesa (Ecuaciones de Lamé)

### 1.1. Hipótesis fundamentales y criterio de pared gruesa

En el diseño de recipientes a presión, tuberías hidráulicas de alta carga, cañones y camisas de cilindros, cuando el espesor de la pared $t = b - a$ deja de ser pequeño en comparación con el radio interior $a$ —específicamente cuando se supera la relación límite de pared delgada $\frac{t}{a} > 0.10$ (o equivalentemente $\frac{b}{a} > 1.10$)—, la hipótesis de distribución uniforme del esfuerzo circunferencial a través del espesor deja de ser válida.

Un tubo de pared gruesa sujeto a la acción de presiones internas ($p_i$) y externas ($p_o$) presentará una variación radial no lineal tanto en los esfuerzos radiales ($\sigma_r$) como en los esfuerzos tangenciales o circunferenciales ($\sigma_t$). Esta distribución fue determinada analíticamente por Gabriel Lamé (1833) resolviendo las ecuaciones diferenciales de equilibrio junto con la condición de compatibilidad elástica del sistema bajo las siguientes hipótesis fundamentales:

* **Material continuo, homogéneo, isotrópico y linealmente elástico:** Cumple la ley generalizada de Hooke con módulo de elasticidad $E$ y coeficiente de Poisson $\mu$ (o $\nu$).
* **Simetría axial de geometría y carga:** Los desplazamientos ocurren exclusivamente en la dirección radial ($u = u(r)$), por lo que las caras radiales permanecen planas y libres de esfuerzos cortantes ($\tau_{r\theta} = 0$).
* **Hipótesis de deformación axial plana lejos de los extremos:** Las secciones transversales planas perpendiculares al eje longitudinal del cilindro permanecen planas tras la aplicación de las presiones, lo que implica que la deformación unitaria longitudinal $\epsilon_a$ es constante en toda la sección transversal.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.92]
    % =========================================================
    % IZQUIERDA: TUBO DE PARED GRUESA
    % =========================================================
    \def\ra{1.5}
    \def\rb{3.8}
    \def\rInA{2.3}
    \def\rOutA{3.3}
    \def\angA{36}
    \def\angB{67}
    \def\angM{51.5}

    \draw[thin, black] (0,0) circle (\ra);
    \draw[thin, black] (0,0) circle (\rb);

    \draw[dashed, thin, black!80] (0,0) -- (\angA:\rInA);
    \draw[dashed, thin, black!80] (0,0) -- (\angB:\rInA);
    \draw[dashed, thin, black!80] (0,0) -- (\angM:\rOutA);

    \begin{scope}
        \clip (36:\rInA) -- (36:\rOutA) -- (41:\rOutA) -- (46:\rOutA) -- (51.5:\rOutA) 
           -- (57:\rOutA) -- (62:\rOutA) -- (67:\rOutA) -- (67:\rInA) -- (62:\rInA) 
           -- (57:\rInA) -- (51.5:\rInA) -- (46:\rInA) -- (41:\rInA) -- cycle;
        \fill[blue!10] (0.8, 1.2) rectangle (2.8, 3.2);
        \foreach \x in {0.85, 0.90, ..., 2.70} {
            \draw[very thin, blue!45] (\x, 1.2) -- (\x, 3.2);
        }
    \end{scope}

    \draw[very thick, black] (\angA:\rInA) -- (\angA:\rOutA);
    \draw[very thick, black] (\angB:\rInA) -- (\angB:\rOutA);
    \draw[very thick, black] (\angA:\rInA) arc (\angA:\angB:\rInA);
    \draw[very thick, black] (\angA:\rOutA) arc (\angA:\angB:\rOutA);

    \node[above left, inner sep=1.5pt] at (\angB:\rOutA) {\large $m$};
    \node[left, inner sep=3pt] at (\angB:\rInA) {\large $m$};
    \node[below right, inner sep=2pt] at (\angA:\rOutA) {\large $n$};
    \node[below right, inner sep=2pt] at (\angA:\rInA) {\large $n$};

    \draw[-latex, very thick, blue] (\angM:\rOutA) -- (\angM:\rb);
    \draw[-latex, very thick, blue] (\angM:\rInA) -- (\angM:1.75);
    \draw[-latex, very thick, blue] (\angB:2.8) -- +(\angB+90:0.5);
    \draw[-latex, very thick, blue] (\angA:2.8) -- +(\angA-90:0.5);

    \foreach \a in {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330} {
        \draw[-latex, very thick, red] (\a:0.92) -- (\a:\ra);
    }
    \node[text=red] at (0.22, -0.25) {\Large $p_i$};

    \foreach \a in {0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342} {
        \draw[-latex, very thick, green!55!black] (\a:4.55) -- (\a:\rb);
    }
    \node[text=green!55!black] at (26:5.0) {\Large $p_o$};

    \draw[thin, black] (-\rb, 0) -- (-\rb, -4.95);
    \draw[thin, black] (-\ra, 0) -- (-\ra, -4.45);
    \draw[thin, black] (0, -\ra) -- (0, -4.95);

    \draw[latex-latex, thin, black] (-\ra, -4.35) -- (0, -4.35);
    \node[above, inner sep=1.5pt] at (-0.75, -4.35) {\Large $a$};

    \draw[latex-latex, thin, black] (-\rb, -4.85) -- (0, -4.85);
    \node[above, inner sep=1.5pt] at (-1.9, -4.85) {\Large $b$};

    % =========================================================
    % DERECHA: ELEMENTO DIFERENCIAL AISLADO
    % =========================================================
    \begin{scope}[shift={(6.2, -3.2)}]
        \def\rIn{4.0}
        \def\rOut{5.8}
        \def\angEA{36}
        \def\angEB{66}
        \def\angEM{51}
        \def\angDim{83}

        \node[left, inner sep=3pt] at (0,0) {\Large $o$};
        \draw[dashed, thin, black!80] (0,0) -- (\angEA:\rIn);
        \draw[dashed, thin, black!80] (0,0) -- (\angEB:\rIn);
        \draw[dashed, thin, black!80] (0,0) -- (\angEM:\rOut);

        \draw[dashed, thin, black!80] (\angEB:\rOut) arc (\angEB:88:\rOut);
        \draw[dashed, thin, black!80] (\angEB:\rIn) arc (\angEB:88:\rIn);
        \draw[dashed, thin, black!80] (21:\rIn) arc (21:\angEA:\rIn);

        \begin{scope}
            \clip (36:\rIn) -- (36:\rOut) -- (41:\rOut) -- (46:\rOut) -- (51:\rOut) 
               -- (56:\rOut) -- (61:\rOut) -- (66:\rOut) -- (66:\rIn) -- (61:\rIn) 
               -- (56:\rIn) -- (51:\rIn) -- (46:\rIn) -- (41:\rIn) -- cycle;
            \fill[blue!8] (1.4, 2.2) rectangle (4.9, 5.5);
            \foreach \x in {1.50, 1.56, ..., 4.80} {
                \draw[very thin, blue!50] (\x, 2.2) -- (\x, 5.5);
            }
        \end{scope}

        \draw[very thick, black] (\angEA:\rIn) -- (\angEA:\rOut);
        \draw[very thick, black] (\angEB:\rIn) -- (\angEB:\rOut);
        \draw[very thick, black] (\angEA:\rIn) arc (\angEA:\angEB:\rIn);
        \draw[very thick, black] (\angEA:\rOut) arc (\angEA:\angEB:\rOut);

        \node[above, inner sep=3pt] at (\angEB:\rOut) {\Large $m$};
        \node[above left, inner sep=2pt] at (\angEB:\rIn) {\Large $m$};
        \node[below right, inner sep=2pt] at (\angEA:\rOut) {\Large $n$};
        \node[below right, inner sep=2pt] at (\angEA:\rIn) {\Large $n$};

        \draw[-latex, very thick, blue] (\angEM:\rOut) -- (\angEM:6.75);
        \node[right, text=blue, inner sep=3pt] at (\angEM:6.55) {\Large $\sigma_r + \frac{\partial \sigma}{\partial r}dr$};

        \draw[-latex, very thick, blue] (\angEM:\rIn) -- (\angEM:3.05);
        \node[below, text=blue, inner sep=2pt] at (\angEM:3.1) {\Large $\sigma_r$};

        \draw[-latex, very thick, blue] (\angEB:4.9) -- +(\angEB+90:0.85);
        \node[left, text=blue, inner sep=2pt] at ([shift={(\angEB+90:0.8)}]\angEB:4.9) {\Large $\sigma_t$};

        \draw[-latex, very thick, blue] (\angEA:4.9) -- +(\angEA-90:0.85);
        \node[right, text=blue, inner sep=2pt] at ([shift={(\angEA-90:0.8)}]\angEA:4.9) {\Large $\sigma_t$};

        \draw[latex-latex, thin, black] (\angEA:1.75) arc (\angEA:\angEB:1.75);
        \node[rotate=-39] at (\angEM:2.02) {\Large $d\theta$};

        \draw[-latex, thin, black] (\angDim:1.65) -- (\angDim:\rIn);
        \draw[thin, black] (\angDim:1.65) ++(\angDim+90:0.07) -- ++(\angDim-90:0.14);
        \node[rotate=83, above, inner sep=1.5pt] at (\angDim:1.85) {\Large $r$};

        \draw[latex-latex, thin, black] (\angDim:\rIn) -- (\angDim:\rOut);
        \node[rotate=83, above, inner sep=2pt] at (\angDim:4.9) {\Large $dr$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 1: Tubo de pared gruesa sujeta a presión interna y presión externa, y diagrama de cuerpo libre del elemento diferencial.

---

### 1.2. Equilibrio estático del elemento diferencial

Aislando un elemento diferencial del tubo $mnnm$ de espesor axial unitario, limitado por los radios $r$ y $r + dr$ y subtendiendo un ángulo diferencial $d\theta$ (también denotado como $d\varphi$), se observa que dicho elemento está sujeto a la acción de esfuerzos radiales ($\sigma_r$) y esfuerzos transversales o circunferenciales ($\sigma_t$), tal como se muestra en la Figura 1. Debido a la simetría axial, los esfuerzos radiales varían en función de la coordenada radial $r$, mientras que los esfuerzos tangenciales en caras opuestas ($m\text{-}m$ y $n\text{-}n$) tienen igual magnitud para un mismo radio $r$.

Planteando la sumatoria de fuerzas en la dirección radial (a lo largo de la bisectriz del ángulo $d\varphi$) y considerando la aproximación para ángulos diferenciales $\sin\left(\frac{d\varphi}{2}\right) \approx \frac{d\varphi}{2}$, se obtiene la ecuación de equilibrio del elemento:

$$ \sigma_r r d\varphi + \sigma_t dr d\varphi - \left(\sigma_r + \frac{d\sigma_r}{dr}dr\right)(r + dr)d\varphi = 0 $$

Desarrollando el producto, dividiendo entre $dr\,d\varphi$ y despreciando los infinitésimos de orden superior ($dr^2 d\varphi \to 0$), se despeja la ecuación diferencial de equilibrio que relaciona el esfuerzo radial, el esfuerzo tangencial y el radio:

$$ \sigma_t - \sigma_r - r\frac{d\sigma_r}{dr} = 0 $$

---

### 1.3. Relaciones de deformación y ecuación diferencial de desplazamiento

Dado que una sola ecuación de equilibrio contiene dos incógnitas ($\sigma_r$ y $\sigma_t$), el problema es estáticamente indeterminado y requiere incorporar la cinemática de deformación del sólido. Si $u = u(r)$ representa el desplazamiento radial de cualquier punto situado a una distancia $r$ del eje central, las deformaciones unitarias radial ($\epsilon_r$) y tangencial ($\epsilon_t$) quedan definidas por las siguientes expresiones:

$$ \epsilon_r = \frac{du}{dr} $$

$$ \epsilon_t = \frac{u}{r} $$

Aplicando la ley de Hooke bidimensional en términos de las deformaciones anteriores, los esfuerzos radiales y tangenciales se expresan en función del desplazamiento radial $u$:

$$ \sigma_r = \frac{E}{1-\mu^2}\left(\frac{du}{dr} + \mu\frac{u}{r}\right) $$

$$ \sigma_t = \frac{E}{1-\mu^2}\left(\frac{u}{r} + \mu\frac{du}{dr}\right) $$

Sustituyendo ambas expresiones constitutivas dentro de la ecuación diferencial de equilibrio $\sigma_t - \sigma_r - r\frac{d\sigma_r}{dr} = 0$, se obtiene una ecuación diferencial ordinaria lineal de segundo orden en una sola variable dependiente $u(r)$ (ecuación de Euler-Cauchy):

$$ \frac{d^2u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = 0 $$

Para integrar directamente esta ecuación y obtener la solución general con dos constantes de integración $C_1$ y $C_2$, se observa que los dos últimos términos corresponden exactamente a la derivada de un cociente:

$$ \frac{d}{dr}\left(\frac{u}{r}\right) = \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} $$

Sustituyendo esta identidad en la ecuación diferencial, se desarrolla el proceso de integración sucesiva:

$$ \frac{d^2u}{dr^2} + \frac{d}{dr}\left(\frac{u}{r}\right) = 0 \implies \frac{d}{dr}\left(\frac{du}{dr}\right) + \frac{d}{dr}\left(\frac{u}{r}\right) = 0 \implies \frac{d}{dr}\left(\frac{du}{dr} + \frac{u}{r}\right) = 0 $$

Integrando por primera vez respecto a $r$ con una constante arbitraria $C$:

$$ \frac{du}{dr} + \frac{u}{r} = C \implies r\frac{du}{dr} + u = Cr \implies \frac{d}{dr}(ru) = Cr \implies ru = \frac{C}{2}r^2 + C_2 $$

Despejando el desplazamiento radial $u(r)$:

$$ u = \frac{C}{2}r + \frac{C_2}{r} $$

Renombrando la primera constante como $C_1 = \frac{C}{2}$, la solución general del desplazamiento radial toma la forma canónica:

$$ u = C_1 r + \frac{C_2}{r} $$

---

### 1.4. Solución general y distribución de esfuerzos radiales y tangenciales

Sustituyendo la solución general del desplazamiento $u = C_1 r + \frac{C_2}{r}$ y su derivada $\frac{du}{dr} = C_1 - \frac{C_2}{r^2}$ en las expresiones constitutivas de los esfuerzos radiales y tangenciales, se obtiene:

$$ \sigma_r = \frac{E}{1-\mu^2}\left[C_1(1+\mu) - C_2\frac{1-\mu}{r^2}\right] $$

$$ \sigma_t = \frac{E}{1-\mu^2}\left[C_1(1+\mu) + C_2\frac{1-\mu}{r^2}\right] $$

Los esfuerzos radiales en las fronteras del tubo deben equilibrar las presiones interna ($p_i$ en $r = a$) y externa ($p_o$ en $r = b$) aplicadas al sistema. Como las presiones actúan comprimiendo las superficies del material, las condiciones de contorno se expresan con signo negativo:

$$ (\sigma_r)_{r=b} = -p_o, \qquad (\sigma_r)_{r=a} = -p_i $$

Evaluando la expresión de $\sigma_r$ en ambos radios y resolviendo el sistema de dos ecuaciones lineales formado para las constantes $C_1$ y $C_2$, se obtiene:

$$ C_1 = \frac{1-\mu}{E}\frac{a^2 p_i - b^2 p_o}{b^2 - a^2} $$

$$ C_2 = \frac{1+\mu}{E}\frac{a^2 b^2(p_i - p_o)}{b^2 - a^2} $$

Sustituyendo las constantes $C_1$ y $C_2$ de vuelta en las expresiones de esfuerzo, los parámetros elásticos $E$ y $\mu$ se cancelan y se obtienen las **Ecuaciones Generales de Lamé** para la variación del esfuerzo radial y del esfuerzo tangencial en cualquier radio $r \in [a, b]$:

$$ \sigma_r = \frac{a^2 p_i - b^2 p_o}{b^2 - a^2} - \frac{(p_i - p_o)a^2 b^2}{r^2(b^2 - a^2)} $$

$$ \sigma_t = \frac{a^2 p_i - b^2 p_o}{b^2 - a^2} + \frac{(p_i - p_o)a^2 b^2}{r^2(b^2 - a^2)} $$

> **Propiedad fundamental de las ecuaciones de Lamé:** La suma del esfuerzo radial y el esfuerzo tangencial en cualquier punto de la sección transversal es constante e independiente del radio $r$:
> $$ \sigma_r + \sigma_t = 2\left(\frac{a^2 p_i - b^2 p_o}{b^2 - a^2}\right) = \text{constante} $$

---

### 1.5. Esfuerzo longitudinal (axial) en cilindros abiertos y cerrados

Para caracterizar el estado triaxial de esfuerzos en el cilindro de pared gruesa, es necesario considerar la condición de apoyo en sus extremos:

1. **Cilindro de extremos abiertos (sin tapas):** Cuando las presiones son contenidas por pistones independientes o cabezales externos que no transmiten carga axial a las paredes del tubo, el esfuerzo longitudinal es nulo:
   $$ \sigma_a = 0 $$
2. **Cilindro de extremos cerrados (con tapas):** Cuando el recipiente posee tapas rígidas unidas a los extremos del cilindro, las presiones interna y externa actúan sobre las áreas circulares $\pi a^2$ y $\pi b^2$. Por equilibrio estático longitudinal sobre una sección alejada de los extremos ($\sigma_a \pi(b^2 - a^2) = p_i \pi a^2 - p_o \pi b^2$), aparece un esfuerzo axial uniforme dado por:
   $$ \sigma_a = \frac{a^2 p_i - b^2 p_o}{b^2 - a^2} $$
   En el caso frecuente en que solo actúa presión interna ($p_o = 0$), el esfuerzo longitudinal de tracción se reduce a:
   $$ \sigma_a = \frac{p_i a^2}{b^2 - a^2} $$

---

## 2. Casos Especiales de Presión y Deformación Radial

### 2.1. Cilindro sometido únicamente a presión interna (presión externa nula)

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.38}
    \def\rb{3.50}

    % Corona circular con patrón diagonal nativo
    \fill[pattern=north east lines, pattern color=blue!60] (0,0) circle (\rb);
    \fill[white] (0,0) circle (\ra);

    % Contornos gruesos interior y exterior
    \draw[very thick, black] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rb);

    % Ejes de simetría discontinuos
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-4.6, 0) -- (4.9, 0);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -4.3) -- (0, 4.3);

    % Vectores de presión interna
    \foreach \a in {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330} {
        \draw[-latex, very thick, red] (\a:0.72) -- (\a:\ra);
    }
    \node[text=red, fill=white, inner sep=1pt] at (0.35, -0.26) {\Large $p_i$};

    % Líneas de proyección para acotación
    \draw[thin, black] (0, \ra) -- (4.28, \ra);
    \draw[thin, black] (0, \rb) -- (4.65, \rb);
    \draw[thin, black] (0, 0) -- (4.65, 0);

    % Acotación del radio interno 'a'
    \draw[latex-latex, thin, black] (4.16, 0) -- (4.16, \ra);
    \node[left, inner sep=3pt] at (4.16, 0.69) {\Large $a$};

    % Acotación del radio externo 'b'
    \draw[latex-latex, thin, black] (4.54, 0) -- (4.54, \rb);
    \node[left, inner sep=3pt] at (4.54, 1.75) {\Large $b$};
\end{tikzpicture}
</script>

Figura 2: Tubo de pared gruesa sujeta a presión interna.

Cuando la presión externa actuante sobre el tubo es nula ($p_o = 0$), las ecuaciones de Lamé para la variación de esfuerzos radiales y tangenciales adoptan una forma simplificada:

$$ \sigma_r = \frac{a^2 p_i}{b^2 - a^2}\left(1 - \frac{b^2}{r^2}\right) $$

$$ \sigma_t = \frac{a^2 p_i}{b^2 - a^2}\left(1 + \frac{b^2}{r^2}\right) $$

A partir de estas ecuaciones se deducen las siguientes características críticas para el análisis de resistencia:

* **Signo de los esfuerzos:** Como $r \le b$, el término $\left(1 - \frac{b^2}{r^2}\right)$ es siempre negativo o nulo, por lo que $\sigma_r$ es siempre de **compresión** (variando desde $-p_i$ en $r = a$ hasta $0$ en $r = b$). Por el contrario, $\sigma_t$ es siempre positivo (**tracción**) en todo el espesor de la pared.
* **Esfuerzo tangencial máximo y mínimo:** El esfuerzo tangencial alcanza su valor máximo en la superficie interior ($r = a$) y su valor mínimo en la superficie exterior ($r = b$):

$$ (\sigma_t)_{\max} = (\sigma_t)_{r=a} = \frac{p_i(a^2 + b^2)}{b^2 - a^2} $$

$$ (\sigma_t)_{\min} = (\sigma_t)_{r=b} = \frac{2a^2 p_i}{b^2 - a^2} $$

* **Relación de no uniformidad y límite de pared delgada:** La razón entre el esfuerzo tangencial máximo y mínimo depende exclusivamente de la relación de radios:

$$ \frac{(\sigma_t)_{\max}}{(\sigma_t)_{\min}} = \frac{a^2 + b^2}{2a^2} $$

Cuando el espesor $t = b - a$ es muy pequeño ($b \approx a$, de modo que $b + a \approx 2a$ y $a^2 + b^2 \approx 2a^2$), la expresión converge a la ecuación clásica de recipientes de pared delgada:

$$ \sigma_t = \frac{p_i a}{b - a} $$

* **Esfuerzo cortante máximo ($\tau_{\max}$):** El punto más crítico ocurre en la pared interna ($r = a$), donde coexisten el máximo esfuerzo principal de tracción ($\sigma_t$) y el máximo esfuerzo principal de compresión ($\sigma_r = -p_i$). Por el círculo de Mohr en el plano $r\text{-}\theta$:

$$ \tau_{\max} = \frac{\sigma_t - \sigma_r}{2} = \frac{1}{2}\left[\frac{p_i(a^2 + b^2)}{b^2 - a^2} + \frac{p_i(b^2 - a^2)}{b^2 - a^2}\right] = \frac{p_i b^2}{b^2 - a^2} $$

---

### 2.2. Cilindro sometido únicamente a presión externa (presión interna nula)

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.35}
    \def\rb{3.50}

    % Corona circular con patrón diagonal nativo
    \fill[pattern=north east lines, pattern color=blue!60] (0,0) circle (\rb);
    \fill[white] (0,0) circle (\ra);

    % Contornos gruesos interior y exterior
    \draw[very thick, black] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rb);

    % Ejes de simetría discontinuos
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-4.7, 0) -- (4.85, 0);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -4.5) -- (0, 4.65);

    % Vectores de presión externa
    \foreach \k in {0, 1, ..., 24} {
        \draw[-latex, very thick, green!55!black] ({90 - \k*14.4}:4.35) -- ({90 - \k*14.4}:\rb);
    }
    \node[text=green!55!black, fill=white, inner sep=1pt] at (125:4.42) {\Large $p_o$};

    % Líneas de proyección para acotación
    \draw[thin, black] (0, \ra) -- (4.22, \ra);
    \draw[thin, black] (0, \rb) -- (4.62, \rb);
    \draw[thin, black] (0, 0) -- (4.72, 0);

    % Acotación del radio interno 'a'
    \draw[latex-latex, thin, black] (4.14, 0) -- (4.14, \ra);
    \node[left, inner sep=3pt] at (4.14, 0.67) {\Large $a$};

    % Acotación del radio externo 'b'
    \draw[latex-latex, thin, black] (4.52, 0) -- (4.52, \rb);
    \node[left, inner sep=3pt] at (4.52, 1.75) {\Large $b$};
\end{tikzpicture}
</script>

Figura 3: Cilindro de pared gruesa sometida a presión exterior $p_o$.

Cuando la presión interna es nula ($p_i = 0$) y el cilindro soporta únicamente una presión exterior $p_o$, las ecuaciones generales de Lamé se reducen a:

$$ \sigma_r = -\frac{p_o b^2}{b^2 - a^2}\left(1 - \frac{a^2}{r^2}\right) $$

$$ \sigma_\theta = -\frac{p_o b^2}{b^2 - a^2}\left(1 + \frac{a^2}{r^2}\right) $$

En este régimen de carga, tanto $\sigma_r$ como $\sigma_\theta$ (esfuerzo tangencial $\sigma_t$) son de **compresión** en todos los puntos del cilindro. El esfuerzo circunferencial de compresión alcanza su magnitud máxima en la superficie interna ($r = a$), donde $\sigma_r = 0$:

$$ (\sigma_\theta)_{r=a} = -\frac{2 p_o b^2}{b^2 - a^2} $$

---

### 2.3. Deformación radial del cilindro

Sustituyendo las constantes de integración $C_1$ y $C_2$ en la ley general de desplazamiento $u = C_1 r + \frac{C_2}{r}$, se obtiene la ecuación general de deformación (desplazamiento radial) en cualquier radio $r$ de un cilindro sin carga axial:

$$ u = \frac{1-\mu}{E}\cdot\frac{a^2 p_i - b^2 p_o}{b^2 - a^2}\cdot r + \frac{1+\mu}{E}\cdot\frac{a^2 b^2(p_i - p_o)}{(b^2 - a^2)r} $$

Para el cálculo de acoplamientos mecánicos por interferencia (zunchado), resultan de especial interés dos casos particulares evaluados en las superficies de frontera:

1. **Cuando la presión exterior es nula ($p_o = 0$):** El incremento del radio interior en $r = a$ debido a una presión interna $p_i$ es:

$$ (u_r)_{r=a} = \frac{a p_i}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} + \mu\right) $$

2. **Cuando la presión interior es nula ($p_i = 0$):** El desplazamiento radial de la superficie exterior en $r = b$ debido a una presión externa $p_o$ (donde el signo negativo indica disminución del radio) es:

$$ (u_r)_{r=b} = -\frac{b p_o}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) $$

*(Nota: Si el cilindro posee tapas cerradas que inducen un esfuerzo axial $\sigma_a$, por efecto Poisson se resta el término $\frac{\mu \sigma_a r}{E}$ al desplazamiento radial $u(r)$).*