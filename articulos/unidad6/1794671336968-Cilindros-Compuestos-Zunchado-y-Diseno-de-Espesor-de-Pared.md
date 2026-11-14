## 1. Presión de Zunchado (Cilindros Compuestos)

### 1.1. Acoplamiento por interferencia y diagrama de cuerpo libre

En aplicaciones de alta presión donde un cilindro simple de pared gruesa requeriría un espesor excesivo (o cuando la presión interna supera la capacidad resistente de una sola pared), se emplean **cilindros compuestos o zunchados**. Este método consiste en ensamblar por interferencia radial dos o más cilindros concéntricos, de modo que el cilindro exterior comprima inicialmente al cilindro interior, generando esfuerzos residuales favorables antes de aplicar la presión interna de operación.

Cuando un cilindro interior de radio interno $a$ y radio exterior original $b + \delta$ se acopla dentro de un cilindro exterior (camisa o zuncho) de radio interior $b$ y radio exterior $c$, en la superficie común de contacto ($r \approx b$) se desarrolla una **presión de interacción o presión de zunchado $p$**. Como consecuencia de este acoplamiento:

* El **cilindro interior** queda sometido a una **presión exterior $p$** actuando sobre su radio externo $b$.
* El **cilindro exterior** queda sometido a una **presión interior $p$** actuando sobre su radio interno $b$, tal como se muestra en la Figura 4.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=0.95]
    \def\rc{3.10}
    \def\rb{1.25}
    \def\rbd{1.55}
    \def\ra{0.65}
    \def\xSep{6.00}

    % 1. Cilindro izquierdo (exterior)
    \begin{scope}
        \clip (0,0) circle (\rc);
        \fill[blue!7] (-\rc, -\rc) rectangle (\rc, \rc);
        \foreach \d in {-9.6, -9.46, ..., 3.2} {
            \draw[very thin, blue!60] (\d, -3.2) -- (\d+6.4, 3.2);
        }
    \end{scope}

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
        \begin{scope}
            \clip (0,0) circle (\rbd);
            \fill[yellow!22] (-\rbd, -\rbd) rectangle (\rbd, \rbd);
            \foreach \d in {-4.8, -4.68, ..., 1.6} {
                \draw[very thin, yellow!55!olive] (\d, -1.6) -- (\d+3.2, 1.6);
            }
        \end{scope}

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

---

### 1.2. Condición de compatibilidad de deformaciones y presión de contacto

Para ensamblar el sistema, el cilindro exterior suele calentarse hasta que su radio interno supere a $b + \delta$; al enfriarse, se establece el contacto a presión en un radio intermedio de equilibrio.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\rc{3.50}
    \def\rbTwo{1.76}
    \def\rbMid{1.56}
    \def\rbOne{1.36}
    \def\ra{0.76}

    % 1. Cilindro exterior
    \begin{scope}
        \clip (0,0) circle (\rc);
        \fill[blue!8] (-\rc, -\rc) rectangle (\rc, \rc);
        \foreach \d in {-11.0, -10.88, ..., 3.8} {
            \draw[very thin, blue!55] (\d, -3.6) -- (\d+7.2, 3.6);
        }
    \end{scope}

    % 2. Anillo de interferencia (\delta_1 + \delta_2)
    \fill[white] (0,0) circle (\rbTwo);
    \begin{scope}
        \clip (0,0) circle (\rbTwo);
        \fill[yellow!18] (0,0) circle (\rbMid);
        \foreach \x in {-1.80, -1.72, ..., 1.80} {
            \draw[very thin, red!80] (\x, -1.80) -- (\x, 1.80);
        }
    \end{scope}

    % 3. Cilindro interior
    \fill[white] (0,0) circle (\rbOne);
    \begin{scope}
        \clip (0,0) circle (\rbOne);
        \fill[yellow!35] (-\rbOne, -\rbOne) rectangle (\rbOne, \rbOne);
        \foreach \d in {-4.5, -4.38, ..., 1.6} {
            \draw[very thin, yellow!65!olive] (\d, -1.5) -- (\d+3.0, 1.5);
        }
    \end{scope}

    % 4. Cavidad central y contornos
    \fill[white] (0,0) circle (\ra);
    \draw[very thick, black] (0,0) circle (\rc);
    \draw[very thick, black] (0,0) circle (\rbTwo);
    \draw[very thick, blue!65!violet] (0,0) circle (\rbMid);
    \draw[very thick, black] (0,0) circle (\rbOne);
    \draw[very thick, black] (0,0) circle (\ra);

    % 5. Ejes de simetría
    \draw[thin, black!75, dash pattern=on 14pt off 5pt on 5pt off 5pt] (-3.85, 0) -- (5.05, 0);
    \draw[thin, black!75, dash pattern=on 14pt off 5pt on 5pt off 5pt] (0, -3.85) -- (0, 3.85);

    % 6. Acotaciones de \delta_1, \delta_2 y \delta
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

Debido a la presión exterior $p$, el radio exterior del cilindro interior disminuye en una magnitud $\delta_1 = |(u_r)_{r=b}|$, la cual se obtiene mediante la expresión de desplazamiento radial:

$$ \delta_1 = \frac{b p}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) $$

De la misma forma, el cilindro exterior (de radios $b$ y $c$), al estar sometido a una presión interior de magnitud $p$, experimenta un incremento de su radio interno igual a $\delta_2 = (u_r)_{r=b}$:

$$ \delta_2 = \frac{b p}{E}\left(\frac{b^2 + c^2}{c^2 - b^2} + \mu\right) $$

La **condición geométrica de compatibilidad** para este problema establece que la suma de la expansión radial del cilindro exterior ($\delta_2$) y la contracción radial del cilindro interior ($\delta_1$) debe igualar la interferencia radial inicial $\delta$:

$$ \delta = \delta_2 + \delta_1 $$

Cuando ambos cilindros están fabricados del **mismo material** (igual módulo de elasticidad $E$ e igual coeficiente de Poisson $\mu$), la ecuación de compatibilidad resulta:

$$ \frac{b p}{E}\left(\frac{b^2 + c^2}{c^2 - b^2} + \mu\right) + \frac{b p}{E}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu\right) = \delta $$

Despejando la presión de interacción $p$ y simplificando algebraicamente los términos racionales, se obtiene la ecuación general para la **presión de zunchado**:

$$ p = \frac{E \delta}{b}\cdot\frac{(b^2 - a^2)(c^2 - b^2)}{2 b^2(c^2 - a^2)} $$

> **Extensión para cilindros de materiales diferentes ($E_1, \mu_1 \neq E_2, \mu_2$):** Si el cilindro interior tiene propiedades elásticas $(E_1, \mu_1)$ y el cilindro exterior tiene propiedades $(E_2, \mu_2)$, los términos con el coeficiente de Poisson no se cancelan entre sí y la relación de compatibilidad general adopta la forma homologada:
> $$ \delta = \frac{b p}{E_2}\left(\frac{b^2 + c^2}{c^2 - b^2} + \mu_2\right) + \frac{b p}{E_1}\left(\frac{a^2 + b^2}{b^2 - a^2} - \mu_1\right) $$

---

### 1.3. Esfuerzos máximos en cilindros zunchados

En el diseño de cilindros compuestos suele dominar el estado tensional en la superficie interior del cilindro externo ($r = b$), el cual trabaja a tracción circunferencial debido a la presión de contacto $p$. Los esfuerzos máximos tangencial y radial en esta interfaz del cilindro exterior se calculan mediante:

$$ \sigma_t = \frac{p(b^2 + c^2)}{c^2 - b^2} $$

$$ \sigma_r = -p $$

Por consiguiente, el esfuerzo cortante máximo en la superficie interior del cilindro exterior ($r = b$) viene dado por:

$$ \tau_{\max} = \frac{\sigma_t - \sigma_r}{2} = \frac{p c^2}{c^2 - b^2} $$

Sustituyendo la expresión de la presión de zunchado $p$ dentro de la ecuación del esfuerzo cortante máximo, se obtiene $\tau_{\max}$ directamente en función de la interferencia radial $\delta$:

$$ \tau_{\max} = \frac{E \delta c^2(b^2 - a^2)}{2 b^3(c^2 - a^2)} $$

---

### 1.4. Caso particular: Eje macizo y volante

En la práctica mecánica es muy común el acoplamiento por interferencia de un cubo, engranaje o **volante** (de radio interior $b$ y radio exterior $c$) sobre un **eje macizo** de radio $b$. Este caso particular se obtiene directamente de las ecuaciones generales haciendo que el radio interno del cilindro interior sea nulo ($a = 0$).

Sustituyendo $a = 0$ en la ecuación de la presión de zunchado, se tiene:

$$ p = \frac{E \delta}{2 b c^2}(c^2 - b^2) = \frac{E \delta}{2 b}\left(1 - \frac{b^2}{c^2}\right) $$

Calculando el esfuerzo cortante máximo en la superficie interior del cubo o volante ($r = b$) para esta condición ($a = 0$), el factor $(c^2 - b^2)$ se simplifica y se obtiene una expresión dependiente únicamente del ajuste unitario $\frac{\delta}{b}$:

$$ \tau_{\max} = \frac{E \delta}{2 b} $$

#### Parámetros complementarios de montaje y transmisión de potencia

1. **Temperatura mínima de calentamiento para el montaje ($\Delta T$):** Para ensamblar el volante sobre el eje sin aplicar fuerza axial de prensado, la camisa exterior debe calentarse una variación de temperatura $\Delta T$ tal que la dilatación térmica supere la interferencia radial $\delta$ (donde $\alpha$ es el coeficiente de dilatación térmica lineal del cilindro exterior):
   $$ \Delta R_T = \alpha b \Delta T \ge \delta \implies \Delta T_{\min} = \frac{\delta}{\alpha b} $$
2. **Capacidad de transmisión de torque ($T$) y fuerza axial ($F_{\text{ax}}$):** Una vez acoplado un cubo o engranaje de ancho axial $L$ (o espesor $t$) sobre un eje de radio $b$ con un coeficiente de fricción estática $f$ en la interfaz, el par torsor máximo transmisible sin deslizamiento es:
   $$ T_{\max} = f F_N b = f (p \cdot 2\pi b L) b = 2\pi f p b^2 L $$

---

## 2. Resistencia y Diseño de Cilindros de Pared Gruesa

El problema de diseño consiste en determinar el **espesor de pared necesario $t = b - a$** de un cilindro de radio interno conocido $a$, sometido a una presión interna de trabajo $p$, de modo que no se supere el esfuerzo admisible del material según la teoría de falla correspondiente. Sustituyendo $b = a + t$ en las ecuaciones de Lamé, se deducen las cuatro formulaciones clásicas de diseño.

---

### 2.1. Diseño para materiales frágiles (Criterio del máximo esfuerzo normal)

Para el diseño de cilindros de pared gruesa fabricados con materiales frágiles, tales como el hierro fundido, se emplea la **teoría del máximo esfuerzo normal (criterio de Rankine)**. En un cilindro sujeto a presión interna $p$, el esfuerzo normal de tracción máximo es el esfuerzo tangencial en la pared interior ($r = a$):

$$ \sigma_t = \frac{p(b^2 + a^2)}{b^2 - a^2} $$

Expresando el radio exterior en función del radio interior $a$ y del espesor del tubo $t$ ($b = a + t$), se desarrolla el despeje algebraico paso a paso:

$$ \sigma_t = \frac{p[(a+t)^2 + a^2]}{(a+t)^2 - a^2} $$

$$ \sigma_t[(a+t)^2 - a^2] = p[(a+t)^2 + a^2] $$

$$ [(a+t)^2](\sigma_t - p) = a^2(\sigma_t + p) $$

$$ \frac{(a+t)^2}{a^2} = \frac{\sigma_t + p}{\sigma_t - p} $$

$$ \frac{a+t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} $$

$$ 1 + \frac{t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} $$

Finalmente, expresando la relación adimensional $\frac{t}{a}$ y el espesor requerido $t$ en función del esfuerzo admisible a tracción $\sigma_t$ y la presión interna $p$, se encuentra que:

$$ \frac{t}{a} = \sqrt{\frac{\sigma_t + p}{\sigma_t - p}} - 1 $$

$$ t = a\left(\sqrt{\frac{\sigma_t + p}{\sigma_t - p}} - 1\right) $$

> **Nota importante de diseño:** Para materiales frágiles, el valor del esfuerzo admisible $\sigma_t$ puede tomarse igual a $0.125$ veces el esfuerzo último a tensión ($\sigma_u$) del material analizado ($\sigma_t = 0.125\,\sigma_u$, equivalente a un factor de seguridad $FS = 8$). Asimismo, para que la raíz cuadrada sea real y finita, la presión interna debe cumplir estrictamente $p < \sigma_t$.

---

### 2.2. Diseño para materiales dúctiles (Criterio del máximo esfuerzo cortante)

Para el caso de materiales dúctiles (como aceros al carbono o aleaciones de aluminio), el **criterio del máximo esfuerzo cortante (criterio de Tresca)** resulta mucho más apropiado que el criterio del esfuerzo normal máximo. En la pared interior ($r = a$) de un cilindro sujeto únicamente a presión interna $p$, los esfuerzos principales extremos en el plano transversal son:

$$ \sigma_{t,\max} = \frac{p(b^2 + a^2)}{b^2 - a^2}, \qquad \sigma_{r,\min} = -p $$

El esfuerzo cortante máximo $\tau = \tau_{\max}$ se calcula en función de estos dos esfuerzos principales de acuerdo con la expresión:

$$ \tau = \tau_{\max} = \frac{\sigma_{t,\max} - \sigma_{r,\min}}{2} = \frac{\dfrac{p(b^2 + a^2)}{b^2 - a^2} + p}{2} = \frac{p(b^2 + a^2) + p(b^2 - a^2)}{2(b^2 - a^2)} $$

$$ \tau = \frac{2 p b^2}{2(b^2 - a^2)} = \frac{p b^2}{b^2 - a^2} $$

Sustituyendo el radio exterior $b = a + t$, el esfuerzo cortante máximo en la pared interior del cilindro queda expresado como:

$$ \tau = \frac{p(a+t)^2}{(a+t)^2 - a^2} $$

Despejando de esta expresión el parámetro de interés, es decir, el espesor del cilindro $t$:

$$ \tau(a+t)^2 - \tau a^2 = p(a+t)^2 \implies (a+t)^2(\tau - p) = \tau a^2 $$

$$ \frac{(a+t)^2}{a^2} = \frac{\tau}{\tau - p} \implies \frac{a+t}{a} = \sqrt{\frac{\tau}{\tau - p}} $$

$$ 1 + \frac{t}{a} = \sqrt{\frac{\tau}{\tau - p}} \implies \frac{t}{a} = \sqrt{\frac{\tau}{\tau - p}} - 1 $$

$$ t = a\left(\sqrt{\frac{\tau}{\tau - p}} - 1\right) $$

Para el caso de materiales dúctiles bajo la teoría de Tresca, el esfuerzo admisible de corte se considera como la mitad del esfuerzo admisible de tensión ($\tau = \frac{\sigma_t}{2}$). Sustituyendo esta relación, la expresión final de diseño es:

$$ t = a\left(\sqrt{\frac{\sigma_t}{\sigma_t - 2p}} - 1\right) $$

*(Observación: Si la presión interna alcanza o supera el valor límite $p = \frac{\sigma_t}{2} = \tau$, ningún espesor de pared —por grande que sea— evitará la fluencia en la superficie interior sin recurrir al zunchado o al autozunchado).*

---

### 2.3. Ecuaciones de Clavarino (Cilindros cerrados con tapas)

El método de Clavarino (1880) está basado en la **teoría de la máxima deformación unitaria normal (criterio de Saint-Venant)** y se aplica específicamente a **cilindros con tapas cerradas**, en los cuales existe la componente adicional de esfuerzo longitudinal $\sigma_a = \frac{p a^2}{b^2 - a^2}$.

Multiplicando las deformaciones unitarias principales de la ley de Hooke generalizada 3D por el módulo de elasticidad $E$, se definen los **esfuerzos efectivos o esfuerzos equivalentes de diseño** ($\sigma'_t = E\epsilon_t$, $\sigma'_r = E\epsilon_r$, $\sigma'_a = E\epsilon_a$):

$$ \sigma'_t = \sigma_t - \mu(\sigma_r + \sigma_a) $$

$$ \sigma'_r = \sigma_r - \mu(\sigma_t + \sigma_a) $$

$$ \sigma'_a = \sigma_a - \mu(\sigma_r + \sigma_t) $$

En un cilindro de pared gruesa con extremos cerrados sometido únicamente a presión interna $p$, el esfuerzo efectivo máximo ocurre en la dirección circunferencial sobre la fibra interior ($r = a$), donde $\sigma_t = \frac{p(b^2+a^2)}{b^2-a^2}$, $\sigma_r = -p$ y $\sigma_a = \frac{p a^2}{b^2-a^2}$. Igualando $(\sigma'_t)_{r=a}$ al esfuerzo admisible $\sigma_t$ y despejando el espesor $t = b - a$, se obtiene la **Ecuación de Clavarino**:

$$ t = a\left[\sqrt{\frac{\sigma_t + (1 - 2\mu)p}{\sigma_t - (1 + \mu)p}} - 1\right] $$

> **Criterio de esfuerzo admisible:** Es posible considerar en esta ecuación que el esfuerzo admisible $\sigma_t$ es igual a $0.8$ veces el esfuerzo de fluencia del material ($\sigma_t = 0.8\,\sigma_y$).

---

### 2.4. Ecuaciones de Birnie (Cilindros abiertos sin tapas)

En el caso de un tubo o cilindro de pared gruesa **sin tapas (extremos abiertos)** —como el tubo de un cañón o un cilindro hidráulico donde los cabezales son soportados por tensores externos—, no existe la componente de esfuerzo axial ($\sigma_a = 0$).

Bajo el mismo criterio de la máxima deformación unitaria normal, los esfuerzos efectivos de diseño se obtienen a partir de las siguientes ecuaciones simplificadas:

$$ \sigma'_t = \sigma_t - \mu \sigma_r $$

$$ \sigma'_r = \sigma_r - \mu \sigma_t $$

Evaluando $(\sigma'_t)_{r=a}$ para un cilindro abierto sometido a presión interna $p$ y despejando el espesor $t = b - a$, se obtiene la **Ecuación de Birnie**:

$$ t = a\left[\sqrt{\frac{\sigma_t + (1 - \mu)p}{\sigma_t - (1 + \mu)p}} - 1\right] $$

Al igual que en la formulación de Clavarino, en esta ecuación es posible considerar que el esfuerzo admisible de diseño $\sigma_t$ es igual a $0.8$ veces el esfuerzo de fluencia ($\sigma_t = 0.8\,\sigma_y$).

---

### 2.5. Resumen comparativo de fórmulas para el espesor de pared ($t$)

| Método / Criterio de Falla | Tipo de Material y Condición Axial | Ecuación del Espesor Requerido $t = b - a$ | Presión Límite ($t \to \infty$) |
| :--- | :--- | :--- | :--- |
| **Rankine** (Máximo esfuerzo normal) | Materiales frágiles ($\sigma_t \approx 0.125\,\sigma_u$) | $\displaystyle t = a\left(\sqrt{\frac{\sigma_t + p}{\sigma_t - p}} - 1\right)$ | $\displaystyle p_{\text{lím}} = \sigma_t$ |
| **Tresca** (Máximo esfuerzo cortante) | Materiales dúctiles ($\tau = \sigma_t / 2$) | $\displaystyle t = a\left(\sqrt{\frac{\sigma_t}{\sigma_t - 2p}} - 1\right)$ | $\displaystyle p_{\text{lím}} = \frac{\sigma_t}{2}$ |
| **Clavarino** (Máxima deformación) | Materiales dúctiles **con tapas** ($\sigma_a \neq 0$, $\sigma_t \approx 0.8\,\sigma_y$) | $\displaystyle t = a\left[\sqrt{\frac{\sigma_t + (1 - 2\mu)p}{\sigma_t - (1 + \mu)p}} - 1\right]$ | $\displaystyle p_{\text{lím}} = \frac{\sigma_t}{1 + \mu}$ |
| **Birnie** (Máxima deformación) | Materiales dúctiles **sin tapas** ($\sigma_a = 0$, $\sigma_t \approx 0.8\,\sigma_y$) | $\displaystyle t = a\left[\sqrt{\frac{\sigma_t + (1 - \mu)p}{\sigma_t - (1 + \mu)p}} - 1\right]$ | $\displaystyle p_{\text{lím}} = \frac{\sigma_t}{1 + \mu}$ |