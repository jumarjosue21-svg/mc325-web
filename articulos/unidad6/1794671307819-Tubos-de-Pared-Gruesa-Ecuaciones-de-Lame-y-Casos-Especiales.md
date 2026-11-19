## 1. Tubos de Paredes Gruesas

Un tubo de pared gruesa sujeto a la acción de presiones internas y externas presentará una variación radial de las tensiones que puede determinarse resolviendo las ecuaciones diferenciales de equilibrio del sistema. A continuación, se muestra este proceso.

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

Figura 1: Tubo de pared gruesa sujeta a presión interna y presión externa.

Aislando un elemento diferencial del tubo $mnmn$, se encuentra que este está sujeto a la acción de tensiones radiales y transversales, tal como se muestra en la figura anterior. Es evidente que las tensiones radiales están cambiando radialmente, mientras que las tensiones tangenciales se mantienen constantes.

Realizando el equilibrio de estos elementos se encuentra la siguiente ecuación diferencial que involucra el esfuerzo radial, esfuerzo tangencial y el radio:

$$ \sigma_r r d\varphi + \sigma_t dr d\varphi - \left(\sigma_r + \frac{d\sigma_r}{dr}dr\right)(r + dr)d\varphi = 0 $$

Despejando se tiene la siguiente expresión:

$$ \sigma_t - \sigma_r - r\frac{d\sigma_r}{dr} = 0 $$

Además, las deformaciones radiales y tangenciales se pueden encontrar mediante las siguientes expresiones:

$$ \varepsilon_r = \frac{du}{dr} $$

$$ \varepsilon_t = \frac{u}{r} $$

Los esfuerzos radiales y tangenciales se pueden calcular mediante las siguientes expresiones:

$$ \sigma_r = \frac{E}{1 - \mu^2}\left(\frac{du}{dr} + \mu\frac{u}{r}\right) $$

$$ \sigma_t = \frac{E}{1 - \mu^2}\left(\frac{u}{r} + \mu\frac{du}{dr}\right) $$

Sustituyendo estas expresiones en la ecuación diferencial de equilibrio, se obtiene una ecuación diferencial de segundo orden en una variable:

$$ \frac{d^2 u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = 0 $$

Resolviendo esta ecuación se obtiene una expresión con dos constantes de integración $C_1$ y $C_2$. Para lograr esto observe que se cumple la siguiente relación:

$$ \frac{d}{dr}\left(\frac{u}{r}\right) = \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} $$

Sustituyendo esta relación, se tiene lo siguiente:

$$ \begin{aligned}
\frac{d^2 u}{dr^2} + \frac{d}{dr}\left(\frac{u}{r}\right) = 0 &\rightarrow \frac{d}{dr}\left(\frac{du}{dr}\right) + \frac{d}{dr}\left(\frac{u}{r}\right) = 0 \\
&\rightarrow \frac{d}{dr}\left(\frac{du}{dr} + \frac{u}{r}\right) = 0
\end{aligned} $$

$$ \begin{aligned}
\frac{du}{dr} + \frac{u}{r} = C &\rightarrow r\frac{du}{dr} + u = Cr \\
&\rightarrow \frac{d}{dr}(ru) = Cr \rightarrow ru = \frac{C}{2}r^2 + C_2
\end{aligned} $$

$$ u = \frac{C}{2}r + \frac{C_2}{r} $$

Finalmente, la solución general del problema analizado tiene la forma:

$$ u = C_1 r + \frac{C_2}{r} $$

Sustituyendo estas expresiones en el cálculo de los esfuerzos radiales y tangenciales se tiene que:

$$ \sigma_r = \frac{E}{1 - \mu^2}\left[C_1(1 + \mu) - C_2\frac{1 - \mu}{r^2}\right] $$

$$ \sigma_t = \frac{E}{1 - \mu^2}\left[C_1(1 + \mu) + C_2\frac{1 - \mu}{r^2}\right] $$

Estos esfuerzos deben coincidir con las presiones internas y externas aplicadas al sistema, por lo que:

$$ (\sigma_r)_{r=b} = -p_0, \qquad (\sigma_r)_{r=a} = -p_i $$

Resolviendo el sistema de ecuaciones formado se tiene:

$$ C_1 = \frac{1 - \mu}{E}\frac{a^2 p_i - b^2 p_0}{b^2 - a^2} $$

$$ C_2 = \frac{1 + \mu}{E}\frac{a^2 b^2(p_i - p_0)}{b^2 - a^2} $$

Sustituyendo estas expresiones para el cálculo del esfuerzo radial y el esfuerzo tangencial se obtienen las expresiones más generales para la variación del esfuerzo radial y el esfuerzo tangencial:

$$ \sigma_r = \frac{a^2 p_i - b^2 p_0}{b^2 - a^2} - \frac{(p_i - p_0)a^2 b^2}{r^2(b^2 - a^2)} $$

$$ \sigma_t = \frac{a^2 p_i - b^2 p_0}{b^2 - a^2} + \frac{(p_i - p_0)a^2 b^2}{r^2(b^2 - a^2)} $$

---

## 2. Casos Especiales

### 2.1. Presión externa nula

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.38}
    \def\rb{3.50}

    % Corona circular con patron diagonal nativo
    \fill[pattern=north east lines, pattern color=blue!60] (0,0) circle (\rb);
    \fill[white] (0,0) circle (\ra);

    % Contornos gruesos interior y exterior
    \draw[very thick, black] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rb);

    % Ejes de simetria discontinuos
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-4.6, 0) -- (4.9, 0);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -4.3) -- (0, 4.3);

    % Vectores de presion interna
    \foreach \a in {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330} {
        \draw[-latex, very thick, red] (\a:0.72) -- (\a:\ra);
    }
    \node[text=red, fill=white, inner sep=1pt] at (0.35, -0.26) {\Large $p_i$};

    % Lineas de proyeccion para acotacion
    \draw[thin, black] (0, \ra) -- (4.28, \ra);
    \draw[thin, black] (0, \rb) -- (4.65, \rb);
    \draw[thin, black] (0, 0) -- (4.65, 0);

    % Acotacion del radio interno a
    \draw[latex-latex, thin, black] (4.16, 0) -- (4.16, \ra);
    \node[left, inner sep=3pt] at (4.16, 0.69) {\Large $a$};

    % Acotacion del radio externo b
    \draw[latex-latex, thin, black] (4.54, 0) -- (4.54, \rb);
    \node[left, inner sep=3pt] at (4.54, 1.75) {\Large $b$};
\end{tikzpicture}
</script>

Figura 2: Tubo de pared gruesa sujeta a presión interna.

Cuando la presión externa actuante sobre el tubo es nula o igual a cero, las expresiones para la variación de esfuerzos radiales y tangenciales tendrán una forma mucho más simplificada. Estas son:

$$ \sigma_r = \frac{a^2 p_i}{b^2 - a^2}\left(1 - \frac{b^2}{r^2}\right) $$

$$ \sigma_t = \frac{a^2 p_i}{b^2 - a^2}\left(1 + \frac{b^2}{r^2}\right) $$

$$ (\sigma_t)_{\text{máx}} = \frac{p_i(a^2 + b^2)}{b^2 - a^2} $$

$$ \frac{(\sigma_t)_{\text{máx}}}{(\sigma_t)_{\text{mín}}} = \frac{a^2 + b^2}{2a^2} $$

$$ \sigma_t = \frac{p_i a}{b - a} $$

$$ \begin{aligned}
\tau_{\text{máx}} &= \frac{\sigma_t - \sigma_r}{2} = \frac{1}{2}\left[\frac{p_i(a^2 + b^2)}{b^2 - a^2} + \frac{p_i(b^2 - a^2)}{b^2 - a^2}\right] \\
&= \frac{p_i b^2}{b^2 - a^2}
\end{aligned} $$

---

### 2.2. Presión interna nula

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.35}
    \def\rb{3.50}

    % Corona circular con patron diagonal nativo
    \fill[pattern=north east lines, pattern color=blue!60] (0,0) circle (\rb);
    \fill[white] (0,0) circle (\ra);

    % Contornos gruesos interior y exterior
    \draw[very thick, black] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rb);

    % Ejes de simetria discontinuos
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-4.7, 0) -- (4.85, 0);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -4.5) -- (0, 4.65);

    % Vectores de presion externa
    \foreach \k in {0, 1, ..., 24} {
        \draw[-latex, very thick, green!55!black] ({90 - \k*14.4}:4.35) -- ({90 - \k*14.4}:\rb);
    }
    \node[text=green!55!black, fill=white, inner sep=1pt] at (125:4.42) {\Large $p_o$};

    % Lineas de proyeccion para acotacion
    \draw[thin, black] (0, \ra) -- (4.22, \ra);
    \draw[thin, black] (0, \rb) -- (4.62, \rb);
    \draw[thin, black] (0, 0) -- (4.72, 0);

    % Acotacion del radio interno a
    \draw[latex-latex, thin, black] (4.14, 0) -- (4.14, \ra);
    \node[left, inner sep=3pt] at (4.14, 0.67) {\Large $a$};

    % Acotacion del radio externo b
    \draw[latex-latex, thin, black] (4.52, 0) -- (4.52, \rb);
    \node[left, inner sep=3pt] at (4.52, 1.75) {\Large $b$};
\end{tikzpicture}
</script>

Figura 3: Cilindro de pared gruesa sometida a presión exterior $p$.

$$ \sigma_r = -\frac{p_0 b^2}{b^2 - a^2}\left(1 - \frac{a^2}{r^2}\right) $$

$$ \sigma_\theta = -\frac{p_0 b^2}{b^2 - a^2}\left(1 + \frac{a^2}{r^2}\right) $$

$$ (\sigma_\theta)_{r=a} = -\frac{2 p_0 b^2}{b^2 - a^2} $$

---

## 3. Deformación Radial del Cilindro

$$ u = \frac{1 - \mu}{E}\cdot\frac{a^2 p_i - b^2 p_0}{b^2 - a^2}\cdot r + \frac{1 + \mu}{E}\cdot\frac{a^2 b^2(p_i - p_0)}{(b^2 - a^2)r} $$

### 3.1. Cuando la presión exterior es nula

$$ (u_r)_{r=a} = \frac{a p_i}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} + \mu\right) $$

### 3.2. Cuando la presión interior es nula

$$ (u_r)_{r=b} = -\frac{b p_0}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) $$
