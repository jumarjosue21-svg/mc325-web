## 1. Discos Rotativos

Un disco girando a una velocidad angular $\omega$ está sometido a una distribución de esfuerzos radiales y transversales, parecidos a los efectos que se producen en un cilindro de pared gruesa, aunque con una diferencia importante producida por los efectos de inercia de la masa. La ecuación que rige la distribución de esfuerzos viene dada por la siguiente expresión:

$$ \frac{d\sigma_r}{dr} + \frac{\sigma_r - \sigma_\theta}{r} + \rho\omega^2 r = 0 $$

Como se puede apreciar, esta ecuación nace simplemente del hecho de tener un disco girando a una velocidad angular.

<script type="text/tikz">
\usetikzlibrary{patterns}
\begin{tikzpicture}[>=latex, font=\small, scale=1.0]
    \def\ra{1.60}
    \def\rb{2.65}
    \def\rm{2.12}

    \fill[pattern=north east lines, pattern color=black!85] (0,0) circle (\rb);

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

Figura 1: Disco rotativo de radio interior $a$ y radio exterior $b$ girando a una velocidad angular $\omega$.

Además, es perfectamente posible colocar las funciones de esfuerzos como función del desplazamiento radial que sufre el disco; así obtenemos la siguiente expresión:

$$ \frac{d^2 u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = -(1 - \nu^2)\frac{\rho\omega^2 r}{E} $$

Esta es una ecuación diferencial de segundo orden con término fuente o una ecuación diferencial no homogénea. La solución de este tipo de ecuaciones consiste en agregar a la solución homogénea, es decir a la ecuación sin término fuente, mostrada a continuación:

$$ \frac{d^2 u}{dr^2} + \frac{1}{r}\frac{du}{dr} - \frac{u}{r^2} = 0 $$

La solución de esta ecuación diferencial se obtuvo en la sección anterior y viene dada por la siguiente expresión:

$$ u = c_1 r + \frac{c_2}{r} $$

Una solución particular del problema original se obtiene a través de una función polinómica, afectada de un coeficiente indeterminado. Al sustituir esta en la ecuación diferencial se obtiene la solución particular:

$$ u_p = -(1 - \nu^2)\frac{\rho\omega^2 r^3}{8E} $$

Finalmente, la solución general del problema sería:

$$ u = -\frac{\rho\omega^2 r^3(1 - \nu^2)}{8E} + c_1 r + \frac{c_2}{r} $$

Si sustituimos estas expresiones en las relaciones que vinculan los esfuerzos radiales y transversales obtenemos lo siguiente:

$$ \sigma_r = \frac{E}{1 - \nu^2}\left[\frac{-(3 + \nu)(1 - \nu^2)\rho\omega^2 r^2}{8E} + (1 + \nu)c_1 - (1 - \nu)\frac{c_2}{r^2}\right] $$

$$ \sigma_\theta = \frac{E}{1 - \nu^2}\left[\frac{-(1 + 3\nu)(1 - \nu^2)\rho\omega^2 r^2}{8E} + (1 + \nu)c_1 + (1 - \nu)\frac{c_2}{r^2}\right] $$

Como en la generalidad de estos casos estos elementos se encuentran girando libremente, los esfuerzos radiales deben ser cero en el radio interior y exterior, es decir:

$$ (\sigma_r)_{r=a} = 0, \qquad (\sigma_r)_{r=b} = 0 $$

Así se tiene el siguiente sistema de ecuaciones algebraicas:

$$ 0 = -\frac{\rho\omega^2 a^2(1 - \nu^2)(3 + \nu)}{8E} + (1 + \nu)c_1 - (1 - \nu)\frac{c_2}{a^2} $$

$$ 0 = -\frac{\rho\omega^2 b^2(1 - \nu^2)(3 + \nu)}{8E} + (1 + \nu)c_1 - (1 - \nu)\frac{c_2}{b^2} $$

Al resolver se obtienen las constantes de integración; estas tienen la siguiente forma:

$$ c_1 = \frac{\rho\omega^2(a^2 + b^2)(1 - \nu)(3 + \nu)}{8E} $$

$$ c_2 = \frac{\rho\omega^2 a^2 b^2(1 + \nu)(3 + \nu)}{8E} $$

Finalmente, sustituyendo estos resultados en las ecuaciones que definen el esfuerzo radial y transversal, se obtiene que:

$$ \sigma_r = \frac{3 + \nu}{8}\rho\omega^2\left(a^2 + b^2 - r^2 - \frac{a^2 b^2}{r^2}\right) $$

$$ \sigma_\theta = \frac{3 + \nu}{8}\rho\omega^2\left(a^2 + b^2 - \frac{1 + 3\nu}{3 + \nu}r^2 + \frac{a^2 b^2}{r^2}\right) $$

$$ u = \frac{(3 + \nu)(1 - \nu)}{8E}\rho\omega^2\left(a^2 + b^2 - \frac{1 + \nu}{3 + \nu}r^2 + \frac{1 + \nu}{1 - \nu}\frac{a^2 b^2}{r^2}\right)r $$

Si se desea calcular el lugar donde ocurre el máximo valor del esfuerzo radial y su posición, la primera derivada igual a cero muestra que esta ocurre en:

$$ r = \sqrt{ab} $$

Sustituyendo esto en la expresión para el esfuerzo radial, el máximo valor obtenido es igual a:

$$ \sigma_{r,\max} = \frac{3 + \nu}{8}(b - a)^2\rho\omega^2 $$

---

## 2. Disco Macizo

$$ (\sigma_r)_{r=b} = 0, \qquad (u)_{r=0} = 0 $$

$$ c_1 = \frac{\rho\omega^2 b^2(1 - \nu)(3 + \nu)}{8E} $$

$$ \sigma_r = \frac{3 + \nu}{8}(b^2 - r^2)\rho\omega^2 $$

$$ \sigma_\theta = \frac{3 + \nu}{8}\left(b^2 - \frac{1 + 3\nu}{3 + \nu}r^2\right)\rho\omega^2 $$

$$ u = \frac{1 - \nu}{8E}\left[(3 + \nu)b^2 - (1 + \nu)r^2\right]\rho\omega^2 r $$

---

## 3. Gráficas de Variación de Esfuerzos

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
