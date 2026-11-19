## 1. Presión de Zunchado

Cuando un cilindro de radio exterior $b + \delta$ se acopla dentro de un cilindro de radio interior $b$, este queda sometido a presión exterior $p$, mientras que el cilindro exterior queda sometido a una presión interior $p$, tal como se aprecia en la siguiente imagen.

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=0.95]
    \def\rc{3.10}
    \def\rb{1.25}
    \def\rbd{1.55}
    \def\ra{0.65}
    \def\xSep{6.00}

    % 1. Cilindro izquierdo (exterior)
    \fill[blue!8] (0,0) circle (\rc);
    \fill[pattern=north east lines, pattern color=blue!60] (0,0) circle (\rc);

    \fill[white] (0,0) circle (\rb);
    \draw[very thick, black] (0,0) circle (\rb);
    \draw[very thick, black] (0,0) circle (\rc);

    \foreach \ang in {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330} {
        \draw[-latex, very thick, red] (\ang:0.62) -- (\ang:\rb);
    }
    \node[text=red] at (0.32, -0.22) {\Large $p$};

    \draw[thin, black] (0, \rc) -- (-3.88, \rc);
    \draw[thin, black] (0, -\rc) -- (-3.88, -\rc);
    \draw[thin, black] (-\rc, 0) -- (-4.05, 0);

    \draw[latex-latex, thin, black] (-3.76, 0) -- (-3.76, \rc)
        node[midway, fill=white, inner sep=1.5pt, rotate=90] {\Large $c$};
    \draw[latex-latex, thin, black] (-3.76, -\rc) -- (-3.76, 0)
        node[midway, fill=white, inner sep=1.5pt, rotate=90] {\Large $c$};

    % 2. Cilindro derecho (interior)
    \begin{scope}[shift={(\xSep, 0)}]
        \fill[yellow!22] (0,0) circle (\rbd);
        \fill[pattern=north east lines, pattern color=yellow!55!olive] (0,0) circle (\rbd);

        \fill[white] (0,0) circle (\ra);
        \draw[very thick, black] (0,0) circle (\ra);
        \draw[very thick, black] (0,0) circle (\rbd);

        \foreach \ang in {0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342} {
            \draw[-latex, very thick, green!55!black] (\ang:2.28) -- (\ang:\rbd);
        }
        \node[text=green!55!black] at (-0.38, -2.38) {\Large $p$};

        \draw[thin, black] (0, \ra) -- (-2.68, \ra);
        \draw[thin, black] (0, -\ra) -- (-2.68, -\ra);
        \draw[latex-latex, thin, black] (-2.58, 0) -- (-2.58, \ra)
            node[midway, above, inner sep=1.5pt, rotate=90] {\Large $a$};
        \draw[latex-latex, thin, black] (-2.58, -\ra) -- (-2.58, 0)
            node[midway, above, inner sep=1.5pt, rotate=90] {\Large $a$};

        \draw[thin, black] (0, \rb) -- (2.62, \rb);
        \draw[thin, black] (0, -\rb) -- (2.62, -\rb);
        \draw[thin, black] (0, \rbd) -- (2.98, \rbd);
        \draw[thin, black] (0, -\rbd) -- (2.98, -\rbd);
        \draw[thin, black] (\rbd, 0) -- (3.08, 0);

        \draw[latex-latex, thin, black] (2.54, 0) -- (2.54, \rb)
            node[midway, above, inner sep=1pt, rotate=90] {\Large $b$};
        \draw[latex-latex, thin, black] (2.54, -\rb) -- (2.54, 0)
            node[midway, above, inner sep=1pt, rotate=90] {\Large $b$};

        \draw[latex-latex, thin, black] (2.88, 0) -- (2.88, \rbd)
            node[midway, right, inner sep=4pt] {\Large $b + \delta$};
        \draw[latex-latex, thin, black] (2.88, -\rbd) -- (2.88, 0)
            node[midway, right, inner sep=4pt] {\Large $b + \delta$};
    \end{scope}

    % 3. Proyecciones y ejes
    \draw[dashed, thin, black!80] (-0.95, \rb) -- (\xSep, \rb);
    \draw[dashed, thin, black!80] (-0.95, -\rb) -- (\xSep, -\rb);

    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-4.05, 0) -- (\xSep + 3.08, 0);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -3.65) -- (0, 3.65);
    \draw[thin, black!80, dash pattern=on 14pt off 5pt on 5pt off 5pt] (\xSep, -2.35) -- (\xSep, 2.75);
\end{tikzpicture}
</script>

Figura 4: Diagrama de cuerpo libre de cada uno de los cilindros sujetos a la presión de contacto común.

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\rc{3.50}
    \def\rbTwo{1.76}
    \def\rbMid{1.56}
    \def\rbOne{1.36}
    \def\ra{0.76}

    % 1. Cilindro exterior (relleno completo hasta el radio c)
    \fill[blue!10] (0,0) circle (\rc);
    \fill[pattern=north east lines, pattern color=blue!55] (0,0) circle (\rc);

    % 2. Anillo de interferencia (entre rbOne y rbTwo)
    \fill[white] (0,0) circle (\rbTwo);
    \fill[yellow!20] (0,0) circle (\rbMid);
    \fill[pattern=vertical lines, pattern color=red!75] (0,0) circle (\rbTwo);

    % 3. Cilindro interior (entre ra y rbOne)
    \fill[white] (0,0) circle (\rbOne);
    \fill[yellow!35] (0,0) circle (\rbOne);
    \fill[pattern=north east lines, pattern color=yellow!65!olive] (0,0) circle (\rbOne);

    % 4. Cavidad central y contornos
    \fill[white] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rc);
    \draw[very thick, black] (0,0) circle (\rbTwo);
    \draw[very thick, blue!65!violet] (0,0) circle (\rbMid);
    \draw[very thick, black] (0,0) circle (\rbOne);
    \draw[very thick, black] (0,0) circle (\ra);

    % 5. Ejes de simetria
    \draw[thin, black!75, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-3.85, 0) -- (5.05, 0);
    \draw[thin, black!75, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -3.85) -- (0, 3.85);

    % 6. Acotaciones de delta1, delta2 y delta
    \draw[thin, black!85] (0, \rbTwo) -- (4.48, \rbTwo);
    \draw[thin, black!85] (0, \rbMid) -- (3.96, \rbMid);
    \draw[thin, black!85] (0, \rbOne) -- (4.48, \rbOne);

    \draw[-latex, thin, black] (3.85, 2.05) -- (3.85, \rbTwo);
    \draw[thin, black] (3.85, \rbOne) -- (3.85, \rbTwo);
    \draw[-latex, thin, black] (3.85, 1.07) -- (3.85, \rbOne);
    \fill[black] (3.85, \rbMid) circle (1.1pt);

    \node[right, inner sep=2pt] at (3.88, 1.92) {\Large $\delta_2$};
    \node[right, inner sep=2pt] at (3.88, 1.18) {\Large $\delta_1$};

    \draw[latex-latex, thin, black] (4.38, \rbOne) -- (4.38, \rbTwo);
    \node[right, inner sep=3pt] at (4.42, \rbMid) {\Large $\delta$};
\end{tikzpicture}
</script>

Figura 5: Condición de compatibilidad entre las deformaciones del cilindro exterior y el cilindro interior.

Debido a la presión exterior $p$, el radio del cilindro interior disminuye producto de esta y su magnitud se puede encontrar por medio de la siguiente expresión:

$$ \delta_1 = \frac{b p}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) $$

De la misma forma, el cilindro exterior al estar sometido a una presión interior de magnitud $p$, experimenta un incremento de su radio, que puede ser calculado por medio de la siguiente expresión:

$$ \delta_2 = \frac{b p}{E}\left(\frac{b^2 + c^2}{c^2 - b^2} + \mu\right) $$

La relación de compatibilidad para este problema radica en que la deformación radial del cilindro exterior y del cilindro interior tienen una suma igual a $\delta$. En estas condiciones se establece la siguiente ecuación:

$$ \frac{b p}{E}\left(\frac{b^2 + c^2}{c^2 - b^2} + \mu\right) + \frac{b p}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) = \delta $$

Resolviendo la presión de interacción a partir de esta ecuación, se obtiene la presión de interacción o presión de zunchado:

$$ p = \frac{E\delta}{b}\cdot\frac{(b^2 - a^2)(c^2 - b^2)}{2b^2(c^2 - a^2)} $$

Para el diseño de cilindros gruesos usualmente dominará la presión interior dentro del cilindro exterior. Los esfuerzos máximos radiales y tangenciales en estos cilindros se pueden calcular a través de las siguientes ecuaciones:

$$ \sigma_t = \frac{p(b^2 + c^2)}{c^2 - b^2}, \qquad \sigma_r = -p $$

Además, el esfuerzo cortante máximo en esta superficie puede encontrarse a través de la siguiente expresión:

$$ \tau_{\max} = \frac{p c^2}{c^2 - b^2} $$

Considerando la presión $p$ o la presión zunchada y sustituyendo en la expresión para el cortante anteriormente, se obtiene:

$$ \tau_{\max} = \frac{E\delta c^2(b^2 - a^2)}{2b^3(c^2 - a^2)} $$

### 1.1. Eje macizo y volante

En el caso particular de un eje macizo de radio $b$ y un volante de radio exterior $c$, la presión de zunchado depende directamente del ajuste $\delta$ requerido para el acoplamiento. El cálculo puede hacerse usando la expresión para la presión de zunchado general sustituyendo $a = 0$. El resultado es:

$$ p = \frac{E\delta}{2bc^2}(c^2 - b^2) $$

Finalmente, calculando el esfuerzo cortante máximo para esta condición, se encuentra que el cortante máximo en la superficie interior del cilindro externo tiene la siguiente expresión:

$$ \tau_{\max} = \frac{E\delta}{2b} $$

---

## 2. Resistencia y Diseño de Cilindros de Pared Gruesa

### 2.1. Para materiales frágiles

Para el diseño de cilindros de pared gruesa hechos con materiales frágiles como hierro fundido, se puede usar el criterio del máximo esfuerzo normal. Así, en un cilindro de pared gruesa sujeto a presión interna $p$, el esfuerzo transversal máximo será:

$$ \sigma_t = \frac{p(b^2 + a^2)}{b^2 - a^2} $$

Expresando el radio exterior en función del radio interior y del espesor del tubo, se tienen las siguientes expresiones:

$$ \sigma_t = \frac{p[(a + t)^2 + a^2]}{(a + t)^2 - a^2} $$

$$ \sigma_t[(a + t)^2 - a^2] = p[(a + t)^2 + a^2] $$

$$ [(a + t)^2](\sigma_t - p) = a^2(\sigma_t + p) $$

$$ \frac{(a + t)^2}{a^2} = \frac{\sigma_t + p}{\sigma_t - p} $$

$$ \frac{a + t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} $$

$$ 1 + \frac{t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} $$

Finalmente, expresando el espesor del cilindro en función de los otros parámetros se encuentra que:

$$ \frac{t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} - 1 $$

$$ t = a\left(\sqrt{\frac{\sigma_t + p}{\sigma_t - p}} - 1\right) $$

> **Nota importante:** El valor de $\sigma_t$ puede tomarse igual a $0.125$ veces el esfuerzo último a tensión ($\sigma_u$) del material analizado.

---

### 2.2. Para materiales dúctiles

Para el caso de los materiales dúctiles, el criterio del máximo esfuerzo cortante es más apropiado que el criterio del esfuerzo normal máximo. Para el caso de un cilindro sujeto únicamente a presión interna, se tienen las siguientes expresiones:

$$ \sigma_{t,\max} = \frac{p(b^2 + a^2)}{b^2 - a^2}, \qquad \sigma_{r,\min} = -p $$

El esfuerzo cortante se puede calcular en función de estos dos de acuerdo con la siguiente expresión, ya conocida:

$$ \begin{aligned}
\tau = \tau_{\max} &= \frac{\sigma_{t,\max} - \sigma_{r,\min}}{2} = \frac{\dfrac{p(b^2 + a^2)}{b^2 - a^2} + p}{2} \\
&= \frac{p(b^2 + a^2) + p(b^2 - a^2)}{2(b^2 - a^2)} = \frac{2 p b^2}{2(b^2 - a^2)} = \frac{p b^2}{b^2 - a^2}
\end{aligned} $$

Finalmente, se obtiene que el esfuerzo cortante máximo en la pared interior del cilindro viene dado por la siguiente expresión:

$$ \tau = \frac{p(a + t)^2}{(a + t)^2 - a^2} $$

Despejando de esta expresión el parámetro de interés, es decir el espesor del cilindro, se tiene:

$$ \tau(a + t)^2 - \tau a^2 = p(a + t)^2 \rightarrow (a + t)^2(\tau - p) = \tau a^2 $$

$$ \frac{(a + t)^2}{a^2} = \frac{\tau}{\tau - p} \rightarrow \frac{a + t}{a} = \sqrt{\frac{\tau}{\tau - p}} $$

$$ 1 + \frac{t}{a} = \sqrt{\frac{\tau}{\tau - p}} \rightarrow \frac{t}{a} = \sqrt{\frac{\tau}{\tau - p}} - 1 $$

$$ t = a\left(\sqrt{\frac{\tau}{\tau - p}} - 1\right) $$

Para el caso de materiales dúctiles el esfuerzo de corte se suele considerar como la mitad del esfuerzo de tensión. En esos términos, la expresión final será:

$$ t = a\left(\sqrt{\frac{\sigma_t}{\sigma_t - 2p}} - 1\right) $$

---

### 2.3. Ecuaciones Clavarino

Este método está basado en el criterio de la máxima deformación de un material y específicamente para cilindros con tapa, por lo que es posible la aparición de una componente adicional de esfuerzos. Los esfuerzos para el diseño se obtienen a partir de las siguientes expresiones:

$$ \sigma'_t = \sigma_t - \mu(\sigma_r + \sigma_a) $$

$$ \sigma'_r = \sigma_r - \mu(\sigma_t + \sigma_a) $$

$$ \sigma'_a = \sigma_a - \mu(\sigma_r + \sigma_t) $$

En el caso de un cilindro de pared gruesa sometido a presión interna $p$, el espesor requerido usando el criterio de la deformación máxima es:

$$ t = a\left[\sqrt{\frac{\sigma_t + (1 - 2\mu)p}{\sigma_t - (1 + \mu)p}} - 1\right] $$

Es posible considerar en esta ecuación que $\sigma_t$ es igual a $0.8$ veces $\sigma_y$.

---

### 2.4. Ecuaciones de Birnie

En el caso de un tubo o cilindro de pared gruesa sin tapas no existe la componente axial y los esfuerzos de diseño se pueden obtener a partir de las siguientes ecuaciones simplificadas:

$$ \sigma'_t = \sigma_t - \mu\sigma_r $$

$$ \sigma'_r = \sigma_r - \mu\sigma_t $$

En el caso de un cilindro de pared gruesa sometido a presión interna $p$, el espesor requerido usando el criterio de la deformación máxima es:

$$ t = a\left[\sqrt{\frac{\sigma_t + (1 - \mu)p}{\sigma_t - (1 + \mu)p}} - 1\right] $$

Es posible considerar en esta ecuación que $\sigma_t$ es igual a $0.8$ veces $\sigma_y$.
