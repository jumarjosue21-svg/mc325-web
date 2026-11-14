## 1. Ecuación Diferencial de Equilibrio en Discos Rotativos

### 1.1. Efectos de inercia centrífuga en un disco de espesor constante

Un disco circular plano de espesor uniforme $t$ (pequeño en comparación con su radio exterior $b$), que gira a una velocidad angular constante $\omega$ (en $\text{rad/s}$) alrededor de su eje central perpendicular al plano del disco, queda sometido a una distribución simétrica de esfuerzos radiales ($\sigma_r$) y esfuerzos transversales o circunferenciales ($\sigma_\theta$). Este estado tensional guarda estrecha analogía con el que se produce en un cilindro de pared gruesa bajo presión, pero incorpora una diferencia física fundamental originada por los **efectos de inercia centrífuga** de la propia masa en rotación.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.60}
    \def\rb{2.65}
    \def\rm{2.12}

    \begin{scope}
        \clip (0,0) circle (\rb);
        \foreach \d in {-8.0, -7.72, ..., 2.8} {
            \draw[thick, black!85] (\d, -2.8) -- (\d+5.6, 2.8);
        }
    \end{scope}

    \fill[white] (0,0) circle (\ra);

    \draw[line width=1.6pt, black] (0,0) circle (\ra);
    \draw[line width=1.6pt, black] (0,0) circle (\rb);

    \draw[-latex, line width=1.2pt, black] (0,0) -- (52:\ra);
    \node at (0.05, 0.78) {\LARGE $a$};

    \draw[-latex, line width=1.2pt, black] (0,0) -- (16:\rb);
    \node at (0.92, -0.22) {\LARGE $b$};

    \draw[line width=2.2pt, black, dash pattern=on 7pt off 4.5pt] (232:\rm) arc (232:304:\rm);
    \draw[-latex, line width=2.2pt, black] (298:\rm) arc (298:312:\rm);

    \node[fill=white, circle, inner sep=1.5pt] at (324:\rm) {\LARGE $\omega$};
\end{tikzpicture}
</script>

Figura 1: Disco anular de radio interno $a$ y radio externo $b$ girando a velocidad angular constante $\omega$.

Al aislar un elemento diferencial del disco comprendido entre los radios $r$ y $r + dr$ con un ángulo diferencial $d\theta$, su masa diferencial es $dm = \rho (r \, d\theta \, dr \, t)$, donde $\rho$ es la densidad másica del material. Aplicando el principio de D'Alembert, sobre el elemento actúa una fuerza centrífuga de inercia dirigida radialmente hacia afuera de magnitud $dF_c = dm \, \omega^2 r = \rho \omega^2 r^2 dr \, d\theta \, t$.

Sumando las fuerzas en dirección radial y dividiendo entre el volumen diferencial $r \, dr \, d\theta \, t$, se obtiene la ecuación diferencial de equilibrio que rige la distribución de esfuerzos en un disco rotativo:

$$ \frac{d\sigma_r}{dr} + \frac{\sigma_r - \sigma_\theta}{r} + \rho \omega^2 r = 0 $$

Como se puede apreciar, esta ecuación nace directamente del equilibrio estático-dinámico de un elemento del disco girando a velocidad angular $\omega$ bajo un estado de esfuerzo plano ($\sigma_z = 0$).

---

### 1.2. Ecuación diferencial no homogénea de desplazamiento radial

Por simetría axial, la deformación unitaria radial y la deformación unitaria circunferencial se relacionan con el desplazamiento radial $u = u(r)$ mediante las relaciones cinemáticas $\epsilon_r = \frac{du}{dr}$ y $\epsilon_\theta = \frac{u}{r}$. Sustituyendo estas deformaciones en la ley de Hooke para esfuerzo plano (con módulo de elasticidad $E$ y coeficiente de Poisson $\nu$):

$$ \sigma_r = \frac{E}{1-\nu^2}\left(\frac{du}{dr} + \nu\frac{u}{r}\right), \qquad \sigma_\theta = \frac{E}{1-\nu^2}\left(\frac{u}{r} + \nu\frac{du}{dr}\right) $$

Al reemplazar las funciones de esfuerzo en términos del desplazamiento radial $u(r)$ dentro de la ecuación diferencial de equilibrio con inercia, se obtiene la siguiente ecuación diferencial de segundo orden:

$$ \frac{d^2u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = -(1-\nu^2)\frac{\rho \omega^2 r}{E} $$

Esta es una **ecuación diferencial lineal de segundo orden con término fuente** (ecuación diferencial no homogénea). Su solución general $u(r) = u_h(r) + u_p(r)$ consiste en sumar a la solución homogénea $u_h(r)$ una solución particular $u_p(r)$:

1. **Solución homogénea ($u_h$):** Corresponde a la ecuación sin término fuente (idéntica a la deducida para tubos de pared gruesa):

$$ \frac{d^2u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = 0 $$

Cuya solución general viene dada por la expresión:

$$ u_h = c_1 r + \frac{c_2}{r} $$

2. **Solución particular ($u_p$):** Como el término fuente en el miembro derecho es proporcional a $r$, se propone una función polinómica cúbica de la forma $u_p = k r^3$ afectada de un coeficiente indeterminado $k$. Al sustituir $\frac{du_p}{dr} = 3kr^2$ y $\frac{d^2u_p}{dr^2} = 6kr$ en la ecuación diferencial no homogénea, resulta $(6k + 3k - k)r = 8kr = -(1-\nu^2)\frac{\rho\omega^2 r}{E}$, de donde se obtiene la solución particular:

$$ u_p = -(1-\nu^2)\frac{\rho \omega^2 r^3}{8E} $$

Sumando ambas contribuciones, la **solución general del desplazamiento radial** para el problema del disco rotativo es:

$$ u = -\frac{\rho \omega^2 r^3(1-\nu^2)}{8E} + c_1 r + \frac{c_2}{r} $$

---

## 2. Disco Anular Rotativo con Bordes Libres

### 2.1. Deducción de las constantes de integración y ecuaciones generales

Sustituyendo la solución general de $u(r)$ y su derivada primera $\frac{du}{dr} = -\frac{3\rho\omega^2 r^2(1-\nu^2)}{8E} + c_1 - \frac{c_2}{r^2}$ en las relaciones constitutivas que vinculan los esfuerzos con las deformaciones, se obtienen las ecuaciones generales para los esfuerzos radial y transversal:

$$ \sigma_r = \frac{E}{1-\nu^2}\left[\frac{-(3+\nu)(1-\nu^2)\rho \omega^2 r^2}{8E} + (1+\nu)c_1 - (1-\nu)\frac{c_2}{r^2}\right] $$

$$ \sigma_\theta = \frac{E}{1-\nu^2}\left[\frac{-(1+3\nu)(1-\nu^2)\rho \omega^2 r^2}{8E} + (1+\nu)c_1 + (1-\nu)\frac{c_2}{r^2}\right] $$

En la generalidad de las aplicaciones donde el disco anular gira libremente sin presiones aplicadas en su agujero central ni en su periferia exterior, los esfuerzos radiales deben ser nulos tanto en el radio interior ($r = a$) como en el radio exterior ($r = b$):

$$ (\sigma_r)_{r=a} = 0, \qquad (\sigma_r)_{r=b} = 0 $$

Evaluando la ecuación de $\sigma_r$ en ambas fronteras, se plantea el siguiente sistema de dos ecuaciones algebraicas lineales para las constantes $c_1$ y $c_2$:

$$ 0 = -\frac{\rho \omega^2 a^2(1-\nu^2)(3+\nu)}{8E} + (1+\nu)c_1 - (1-\nu)\frac{c_2}{a^2} $$

$$ 0 = -\frac{\rho \omega^2 b^2(1-\nu^2)(3+\nu)}{8E} + (1+\nu)c_1 - (1-\nu)\frac{c_2}{b^2} $$

Al resolver este sistema algebraico se obtienen las constantes de integración:

$$ c_1 = \frac{\rho \omega^2(a^2 + b^2)(1-\nu)(3+\nu)}{8E} $$

$$ c_2 = \frac{\rho \omega^2 a^2 b^2(1+\nu)(3+\nu)}{8E} $$

*(Nota: En algunos textos abreviados se escribe $(1-\nu)$ en el numerador de $c_2$ cuando dicha constante se define previamente absorbida en el cociente elástico; al sustituir $c_1$ y $c_2$ en $\sigma_r$ y $\sigma_\theta$, el factor $(1-\nu^2)$ del denominador se cancela exactamente y conduce a las ecuaciones universales independientes de $E$).*

Finalmente, sustituyendo estas constantes en las ecuaciones que definen el esfuerzo radial, el esfuerzo circunferencial y el desplazamiento radial, se obtienen las **ecuaciones fundamentales del disco anular rotativo**:

$$ \sigma_r = \frac{3+\nu}{8}\rho \omega^2\left(a^2 + b^2 - r^2 - \frac{a^2 b^2}{r^2}\right) $$

$$ \sigma_\theta = \frac{3+\nu}{8}\rho \omega^2\left(a^2 + b^2 - \frac{1+3\nu}{3+\nu}r^2 + \frac{a^2 b^2}{r^2}\right) $$

$$ u = \frac{(3+\nu)(1-\nu)}{8E}\rho \omega^2\left(a^2 + b^2 - \frac{1+\nu}{3+\nu}r^2 + \frac{1+\nu}{1-\nu}\frac{a^2 b^2}{r^2}\right)r $$

---

### 2.2. Radio crítico, esfuerzo radial máximo y esfuerzo tangencial máximo

A partir de las ecuaciones del disco anular libre ($a \le r \le b$) se deducen las magnitudes críticas para el diseño mecánico:

1. **Posición y magnitud del esfuerzo radial máximo ($\sigma_{r,\max}$):** Dado que $\sigma_r = 0$ en $r = a$ y en $r = b$, y es positivo (tracción) en todo el interior de la corona, existe un radio intermedio donde alcanza su valor máximo. Derivando $\sigma_r$ respecto a $r$ e igualando a cero:

$$ \frac{d\sigma_r}{dr} = \frac{3+\nu}{8}\rho \omega^2\left(-2r + \frac{2a^2 b^2}{r^3}\right) = 0 \implies r^4 = a^2 b^2 $$

Por lo tanto, el esfuerzo radial máximo ocurre exactamente en la media geométrica de los radios interior y exterior:

$$ r = \sqrt{ab} $$

Sustituyendo $r = \sqrt{ab}$ en la expresión del esfuerzo radial, el valor máximo obtenido es igual a:

$$ \sigma_{r,\max} = \frac{3+\nu}{8}(b - a)^2 \rho \omega^2 $$

2. **Esfuerzo circunferencial (tangencial) máximo ($\sigma_{\theta,\max}$):** Analizando la ecuación de $\sigma_\theta(r)$, el término positivo $\frac{a^2 b^2}{r^2}$ es máximo y el término negativo $-\frac{1+3\nu}{3+\nu}r^2$ es mínimo cuando $r$ toma su menor valor posible. Por consiguiente, el esfuerzo normal máximo absoluto en todo el disco es el esfuerzo tangencial de tracción en el **borde interior ($r = a$)**:

$$ \sigma_{\theta,\max} = (\sigma_\theta)_{r=a} = \frac{3+\nu}{4}\rho \omega^2\left(b^2 + \frac{1-\nu}{3+\nu}a^2\right) $$

En la periferia exterior ($r = b$), el esfuerzo tangencial disminuye hasta su valor mínimo:

$$ \sigma_{\theta,\min} = (\sigma_\theta)_{r=b} = \frac{3+\nu}{4}\rho \omega^2\left(a^2 + \frac{1-\nu}{3+\nu}b^2\right) $$

Como en el borde interno ($r = a$) se cumple que $\sigma_1 = \sigma_{\theta,\max} > 0$ y $\sigma_2 = \sigma_3 = \sigma_r = 0$, el esfuerzo cortante máximo absoluto del disco ocurre también en $r = a$ y vale $\tau_{\max} = \frac{\sigma_{\theta,\max}}{2}$.

---

## 3. Disco Macizo Rotativo y Efecto del Agujero Central

### 3.1. Ecuaciones para un disco sólido sin agujero central

En el caso de un **disco macizo** (sólido desde $r = 0$ hasta $r = b$), las condiciones de frontera físicas establecen que el esfuerzo radial en el borde exterior libre es nulo y que, por simetría, el desplazamiento radial en el centro geométrico del disco debe ser cero (además de que los esfuerzos en $r = 0$ deben permanecer finitos):

$$ (\sigma_r)_{r=b} = 0, \qquad (u)_{r=0} = 0 $$

Para que el desplazamiento $u(r)$ y los esfuerzos no tiendan a infinito cuando $r \to 0$, la segunda constante de integración debe anularse idénticamente ($c_2 = 0$). Evaluando $(\sigma_r)_{r=b} = 0$, se despeja la primera constante $c_1$:

$$ c_1 = \frac{\rho \omega^2 b^2(1-\nu)(3+\nu)}{8E} $$

Sustituyendo $c_1$ y $c_2 = 0$ en las ecuaciones generales, se obtienen las expresiones de esfuerzos y desplazamiento para un disco macizo rotativo:

$$ \sigma_r = \frac{3+\nu}{8}(b^2 - r^2)\rho \omega^2 $$

$$ \sigma_\theta = \frac{3+\nu}{8}\left(b^2 - \frac{1+3\nu}{3+\nu}r^2\right)\rho \omega^2 $$

$$ u = \frac{1-\nu}{8E}\left[(3+\nu)b^2 - (1+\nu)r^2\right]\rho \omega^2 r $$

En un disco sólido, tanto el esfuerzo radial como el esfuerzo circunferencial alcanzan su valor máximo simultáneamente en el **centro del disco ($r = 0$)** y son de igual magnitud:

$$ \sigma_{r,\max} = \sigma_{\theta,\max} = (\sigma_r)_{r=0} = (\sigma_\theta)_{r=0} = \frac{3+\nu}{8}\rho \omega^2 b^2 $$

*(Expresado en función de la velocidad tangencial periférica $v = \omega b$, el esfuerzo máximo en el centro es $\sigma_{\max} = \frac{3+\nu}{8}\rho v^2$; por ejemplo, para $\nu = \frac{1}{3}$, resulta $\sigma_{\max} = \frac{5}{12}\rho v^2$).*

---

### 3.2. Efecto concentrador de esfuerzos de un micro-agujero central

Un resultado clásico de gran importancia en el diseño de turbinas y volantes surge al comparar el esfuerzo máximo en un disco macizo frente al esfuerzo máximo en un disco con un orificio central infinitamente pequeño ($a \to 0$):

* En el **disco macizo** ($a = 0$ exatamente):
  $$ (\sigma_{\theta,\max})_{\text{macizo}} = \frac{3+\nu}{8}\rho \omega^2 b^2 $$
* En el **disco anular** cuando el radio del agujero tiende a cero ($a \to 0^+$):
  $$ \lim_{a \to 0} (\sigma_{\theta,\max})_{\text{anular}} = \lim_{a \to 0} \frac{3+\nu}{4}\rho \omega^2\left(b^2 + \frac{1-\nu}{3+\nu}a^2\right) = \frac{3+\nu}{4}\rho \omega^2 b^2 $$

> **Conclusión de diseño:** La sola presencia de un agujero central muy pequeño ($a \ll b$) **duplica exactamente el esfuerzo circunferencial máximo** en comparación con el de un disco sólido de igual diámetro y velocidad angular ($\sigma_{\theta,\text{anular}} = 2\,\sigma_{\theta,\text{macizo}}$).

---

## 4. Curvas Adimensionales y Acoplamiento Rotativo por Interferencia

### 4.1. Gráficas adimensionales de variación de esfuerzos y desplazamientos

Las Figuras 2 y 3 muestran el comportamiento adimensional de los esfuerzos $\sigma_\theta$, $\sigma_r$ y del desplazamiento normalizado $u/u_{\max}$ en función de la posición radial para un disco anular (con relación $b/a = 4$) y para un disco sólido, respectivamente:

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=1.05]
    \fill[cyan!12!blue!10] (1,0) -- (4,0) arc (0:90:4) -- (0,1) arc (90:0:1) -- cycle;

    \draw[line width=1.2pt, black] (1,0) arc (0:90:1);
    \draw[line width=1.2pt, black] (4,0) arc (0:90:4);

    \draw[-latex, thick, black] (-0.25, 0) -- (5.15, 0) node[right] {\large $x$};
    \draw[-latex, thick, black] (0, -0.25) -- (0, 4.75) node[left, xshift=-1pt] {\large $y$};
    \node[below left, inner sep=3pt] at (0,0) {\large $0$};

    \foreach \x in {1, 2, 3, 4} {
        \draw[thick, black] (\x, -0.10) -- (\x, 0.10);
        \node[below, yshift=-3pt] at (\x, 0) {\large $\x$};
    }

    \node at (1.55, -0.95) {\large $r/a$};
    \draw[-latex, thick, black] (1.98, -0.95) -- (3.08, -0.95);

    \draw[thick, black] (1, 0) -- (1, 2.65);
    \draw[thick, black, dash pattern=on 6pt off 3.5pt] (4, 0) -- (4, 2.65);

    \draw[thick, black] (0.90, 1.10) -- (1.10, 1.10);
    \node[left, xshift=-2pt] at (0.92, 1.10) {\large $0.5$};

    \draw[thick, black] (0.90, 2.20) -- (1.10, 2.20);
    \node[left, xshift=-2pt] at (0.92, 2.20) {\large $1.0$};

    \draw[thick, black] (3.90, 1.10) -- (4.10, 1.10);
    \draw[thick, black] (3.90, 2.20) -- (4.10, 2.20);

    \draw[line width=1.15pt, black, dash pattern=on 6pt off 3pt]
        (1, 2.13) .. controls (1.55, 2.00) and (1.95, 2.08) .. (2.45, 2.17)
                  .. controls (2.95, 2.25) and (3.45, 2.20) .. (4, 1.98);

    \draw[line width=1.25pt, black]
        (1, 1.82) .. controls (1.75, 1.25) and (2.75, 0.78) .. (4, 0.58);

    \draw[line width=1.25pt, black]
        (1, 0) .. controls (1.32, 0.62) and (1.75, 0.80) .. (2.15, 0.80)
               .. controls (2.75, 0.80) and (3.40, 0.42) .. (4, 0);

    \draw[-latex, thick, black] (42:4.18) arc (42:55:4.18);
    \node at (46:4.48) {\large $\omega$};

    \node[right] at (2.28, 3.72) {\large $u/u_{\text{max}}$};
    \draw[-latex, thick, black] (2.48, 3.48) .. controls (2.05, 3.05) and (1.92, 2.60) .. (1.85, 2.10);

    \node[right] at (4.35, 1.70) {\large $\sigma_\theta / \rho \omega^2 b^2$};
    \draw[-latex, thick, black] (4.32, 1.65) .. controls (3.80, 1.55) and (3.40, 1.25) .. (3.04, 0.83);

    \node[right] at (4.35, 0.65) {\large $\sigma_r / \rho \omega^2 b^2$};
    \draw[-latex, thick, black] (4.32, 0.65) .. controls (3.95, 0.60) and (3.75, 0.48) .. (3.55, 0.30);
\end{tikzpicture}
</script>

Figura 2: Variación de los esfuerzos radiales y transversales producto de la velocidad angular en un disco anular.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\small, scale=1.05]
    \fill[cyan!12!blue!10] (0,0) -- (4,0) arc (0:90:4) -- cycle;

    \draw[line width=1.2pt, black] (4,0) arc (0:90:4);

    \draw[-latex, thick, black] (-0.25, 0) -- (5.25, 0) node[right] {\large $x$};
    \draw[-latex, thick, black] (0, -0.25) -- (0, 4.75) node[left, xshift=-1pt] {\large $y$};
    \node[below left, inner sep=3pt] at (0,0) {\large $0$};

    \foreach \x/\val in {0.8/0.2, 1.6/0.4, 2.4/0.6, 3.2/0.8, 4.0/1.0} {
        \draw[thick, black] (\x, -0.10) -- (\x, 0.10);
        \node[below, yshift=-3pt] at (\x, 0) {\large $\val$};
    }

    \node at (1.85, -0.95) {\large $r/b$};
    \draw[-latex, thick, black] (2.30, -0.95) -- (3.40, -0.95);

    \draw[thick, black] (-0.10, 1.15) -- (0.10, 1.15);
    \node[left, xshift=-2pt] at (-0.08, 1.15) {\large $0.5$};

    \node[left, xshift=-2pt] at (-0.08, 2.30) {\large $1.0$};

    \draw[thick, black, dash pattern=on 6pt off 3.5pt] (4, 0) -- (4, 2.95);

    \draw[line width=1.15pt, black, dash pattern=on 6pt off 3pt]
        (0, 0) .. controls (1.33, 1.15) and (2.67, 2.30) .. (4, 2.30);

    \draw[line width=1.25pt, black]
        (0, 2.30) .. controls (1.33, 2.30) and (2.67, 1.86) .. (4, 0.98);

    \draw[line width=1.25pt, black]
        (0, 2.30) .. controls (1.33, 2.30) and (2.67, 1.53) .. (4, 0);

    \node[right] at (3.42, 3.65) {\large $u/u_{\text{max}}$};
    \draw[-latex, thick, black] (3.48, 3.48) .. controls (3.05, 3.00) and (2.92, 2.55) .. (2.86, 2.12);

    \node[right] at (4.65, 2.02) {\large $8\sigma_\theta / (3+\nu)\rho \omega^2 b^2$};
    \draw[-latex, thick, black] (4.62, 2.00) .. controls (4.05, 2.04) and (3.55, 1.90) .. (3.12, 1.63);

    \node[right] at (4.92, 0.96) {\large $8\sigma_r / (3+\nu)\rho \omega^2 b^2$};
    \draw[-latex, thick, black] (4.88, 0.95) .. controls (4.35, 1.00) and (3.85, 0.90) .. (3.40, 0.72);
\end{tikzpicture}
</script>

Figura 3: Variación de los esfuerzos radiales y transversales producto de la velocidad angular en un disco sólido.

---

### 4.2. Velocidad crítica de aflojamiento en discos zunchados sobre ejes

Cuando un disco anular (de radio interno $a$ y radio externo $b$) se monta con una interferencia radial inicial $\delta$ sobre un eje macizo (de radio $a$), en estado de reposo ($\omega = 0$) existe una presión de zunchado $p_0$. Sin embargo, al girar el conjunto a velocidad angular $\omega$, el borde interior del disco se expande radialmente más rápido que el borde exterior del eje macizo debido a la inercia centrífuga, reduciendo progresivamente la presión de contacto.

* **Expansión centrífuga del radio interno del disco en $r = a$:**
  $$ (u_{\text{disco}})_{r=a} = \frac{\rho \omega^2 a}{4E}\left[(3+\nu)b^2 + (1-\nu)a^2\right] $$
* **Expansión centrífuga del eje macizo en $r = a$:**
  $$ (u_{\text{eje}})_{r=a} = \frac{1-\nu}{4E}\rho \omega^2 a^3 $$

La diferencia neta de dilatación radial por rotación en la interfaz $r = a$ (cuando eje y disco son del mismo material) es:

$$ \Delta u_\omega = (u_{\text{disco}})_{r=a} - (u_{\text{eje}})_{r=a} = \frac{3+\nu}{4E}\rho \omega^2 a b^2 $$

*(Si se desprecia la expansión del eje frente a la del disco, se iguala directamente $(u_{\text{disco}})_{r=a} = \delta$).*

La **velocidad angular crítica de aflojamiento ($\omega_{\text{cr}}$)** —a la cual la presión de contacto en la interfaz cae exactamente a cero ($p = 0$) y el volante pierde el ajuste por contracción— ocurre cuando la expansión diferencial centrífuga iguala la interferencia radial inicial $\delta$:

$$ \Delta u_\omega = \delta \implies \omega_{\text{cr}} = \sqrt{\frac{4 E \delta}{(3+\nu)\rho a b^2}} $$