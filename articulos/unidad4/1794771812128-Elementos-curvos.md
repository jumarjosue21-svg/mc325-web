## 1. Elementos curvos en la ingeniería

Un **elemento curvo** es una pieza estructural cuyo eje no es recto, sino que sigue una curva. Estos elementos aparecen tanto en obras civiles como en máquinas, y en todos los casos soportan y transmiten **cargas transversales** a lo largo de su forma curva.

![Figura 1: Ejemplos de elementos curvos](fig-ejemplos-elementos-curvos.svg)

*Figura 1: Ejemplos de elementos curvos en la ingeniería.*

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

![Figura 2: Tipos de arco](fig-tipos-arco-tunel.svg)

*Figura 2: Tipos de arco más comunes.*

- **De medio punto:** su directriz es una semicircunferencia.
- **Rebajado:** su directriz es un arco menor que una semicircunferencia.
- **Peraltado:** una semicircunferencia que se prolonga con tramos verticales en sus arranques.
- **Escarzano:** un arco muy poco curvado, con un ángulo central de $60^\circ$.

En un arco de piedra, las cargas se transmiten a lo largo del propio arco hasta los apoyos, y en los apoyos aparecen fuerzas verticales y horizontales.

### 1.6. Ganchos de grúa

Los **ganchos de grúa** son elementos curvos de máquinas. Su tramo curvo soporta una carga concentrada $P$ que no pasa por el centro de la sección, así que en esa sección aparecen una fuerza axial y un momento flector al mismo tiempo. Más adelante, en los problemas del capítulo, estudiaremos un gancho de izaje de fierro fundido con un tramo curvo de $150^\circ$.

## 2. Elementos curvos

Un elemento curvo se describe con un **centro de curvatura** $O$, un **radio** $R$ y una **coordenada angular** $\theta$ medida desde la horizontal. Con estos datos se ubican los apoyos, las cargas y las secciones del arco.

### 2.1. Arco con carga distribuida normal

La Figura 3 muestra un arco con extremos $A$ y $D$. Los puntos $B$ y $C$ están sobre el arco y quedan ubicados por los ángulos $\theta_2$ y $\theta_1$, mientras que el apoyo $D$ queda ubicado por $\theta_0$.

![Figura 3: Arco con carga distribuida, carga puntual y momento](fig-arco-general-cargas.svg)

*Figura 3: Diagrama de cuerpo libre de un arco con carga distribuida, carga puntual y momento.*

- **Apoyos:** en $A$ hay un apoyo fijo, con reacciones horizontal $A_x$ y vertical $A_y$. En $D$ hay un apoyo móvil, con una reacción vertical $D_y$.
- **Carga distribuida $q$:** actúa perpendicular al arco, entre $B$ y $C$, con intensidad variable.
- **Cargas puntuales y momento:** una carga concentrada $P$ y un momento $M$ aplicados sobre el arco.

### 2.2. Arco con carga gravitacional distribuida

Cuando las cargas son de peso, su dirección no es perpendicular al arco sino **vertical**. La Figura 4 muestra un arco con una carga vertical $w(x)$ que actúa entre dos posiciones $\theta_2$ y $\theta_1$, es decir, sobre el tramo del arco cuya proyección horizontal queda bajo la carga.

![Figura 4: Arco con carga vertical distribuida](fig-arco-carga-vertical.svg)

*Figura 4: Diagrama de cuerpo libre de un arco con carga gravitacional distribuida.*

Aquí los ángulos $\theta_0$, $\theta_1$, $\theta_2$ y $\theta_3$ ubican al apoyo $C$, a los límites de la carga y al apoyo $A$, respectivamente. Además actúan una carga puntual $P$ y un momento $M$.

En ambas figuras se usa el mismo código de colores: **verde** para cargas distribuidas y ángulos, **azul** para cargas puntuales y momentos, y **rojo** para reacciones.

## 3. Rótulas en arcos

Una **rótula** es una unión interna que **no transmite momento flector**. En una rótula el momento es cero, y esa condición aporta **una ecuación adicional** de equilibrio. Por eso un arco con rótulas puede resolverse con más ecuaciones que las del equilibrio global.

## 4. Arcos isostáticos

### 4.1. Definición

Un **arco isostático** es una estructura en la que el número de reacciones puede ser calculado a partir de las ecuaciones de equilibrio disponibles, según se trate de un problema bidimensional o tridimensional. Es decir, se cumple la siguiente ecuación:

$$N_r = N_{ee}$$

Donde $N_r$ es el número de reacciones presentes en el arco y $N_{ee}$ es el número de ecuaciones de equilibrio estático. En problemas bidimensionales $N_{ee}=3$, mientras que en problemas tridimensionales $N_{ee}=6$.

### 4.2. Arcos con rótulas

En el caso de que un arco presente rótulas, estas generan **ecuaciones adicionales de equilibrio**, independientes de las generadas por las ecuaciones de equilibrio globales. En ese caso, la isostaticidad de una estructura se verifica con la siguiente ecuación:

$$N_r = N_{ee} + N_{rot}$$

## 5. Arcos hiperestáticos

Un **arco hiperestático** es aquel en el que las reacciones existentes por las condiciones de apoyo superan al número de ecuaciones estáticas, ya sean problemas bidimensionales o tridimensionales.

En términos de ecuaciones, esta relación se puede escribir de la siguiente forma:

$$N_r > N_{ee}$$

## 6. Diagramas de carga en elementos curvos

Al igual que una viga de eje recto, a menudo existen elementos curvos que se usan y diseñan para soportar y transmitir **cargas transversales**. El diseño de ingeniería básico requiere determinar cómo varían internamente las fuerzas axiales, cortantes y momentos flectores, con la finalidad de cuantificar los esfuerzos máximos que ocurren en estos elementos y luego dimensionarlos apropiadamente.

En la Figura 3 se muestra un arco general isostático sometido a un conjunto de cargas transversales, tanto distribuidas como concentradas. A diferencia de una viga de eje recto, donde se usaba una coordenada lineal para marcar las posiciones de las cargas, en un elemento de arco resulta mucho más conveniente el uso de **coordenadas angulares**.

Como se puede apreciar en esa figura, la carga distribuida es una función compleja de $\theta$, que inicia en $\theta_2$ y termina en $\theta_1$. De igual forma, el arco comienza en la coordenada $\theta_0$ y termina en $\theta = 180^\circ$.

## 7. Cargas centrales distribuidas

### 7.1. Resultante de la carga

Un caso frecuente en el análisis y diseño de arcos son las **cargas distribuidas centrales**, como ocurre en el análisis y diseño de elementos de sostenimiento en la construcción de túneles.

Para calcular la resultante de esta carga se realiza una integración con coordenada de arco o coordenada angular, obteniéndose la siguiente expresión:

$$dF = q(\theta)\left(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j}\right)ds = q(\theta)\,R\left(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j}\right)d\theta$$

$$F = R\left[-\int_{\theta_1}^{\theta_2} q\,\sin\theta\,d\theta\;\hat{i} + \int_{\theta_1}^{\theta_2} q\,\cos\theta\,d\theta\;\hat{j}\right]$$

### 7.2. Momento flector

Considerando como punto de referencia el apoyo A, el momento resultante se obtiene a partir de:

$$dM = q\,d\,ds = q\,d\,R\,d\theta = qR^{2}\sin\theta\,d\theta$$

donde $d = R\sin\theta$ es el brazo de palanca de la carga respecto al apoyo A. Integrando:

$$M = R^{2}\int_{\theta_1}^{\theta_2} q\,\sin\theta\,d\theta$$

## 8. Cargas gravitacionales distribuidas

### 8.1. Planteamiento

A menudo las cargas actuantes sobre los arcos no se limitan solo a cargas o momentos puntuales. De hecho, la mayor parte de las cargas sobre estos elementos son **cargas distribuidas**, ya sean uniformemente distribuidas o distribuidas generales, como la de la Figura 4.

El cálculo de las reacciones en este tipo de estructuras requiere tomar en cuenta que las cargas distribuidas gravitacionales **mantienen su dirección hacia el centro de la Tierra**, por lo que la integración de estas debe considerar esta característica.

Si interesa el cálculo de las fuerzas internas en una sección $\Omega$, se deben tomar momentos respecto de este punto. Pero al tener una carga distribuida que varía dentro del arco, desde cero hasta $\theta$, de acuerdo con la coordenada angular establecida, se necesita una **coordenada angular auxiliar** $q$ dentro de la coordenada $\theta$ establecida originalmente. Las integrales deben plantearse en esta nueva coordenada.

### 8.2. Diferenciales de fuerza y de momento

La diferencial de fuerza vertical y la de momento vienen dadas por:

$$dF = w\,\sin(q)\,ds \;\rightarrow\; F = \int_0^{s_0} w\,\sin(q)\,ds$$

$$dM = wR\,\sin(q)\left(\cos(q) - \cos(\theta)\right)ds$$

$$M = \int_0^{s_0} wR\,\sin(q)\left(\cos(q) - \cos(\theta)\right)ds$$

Estas expresiones se obtienen integrando las cargas verticales y tomando momentos respecto del punto $\Omega$.

### 8.3. En función de la coordenada angular

Considerando coordenada angular en lugar de coordenada de arco, se tiene $ds = R\,dq$, y por lo tanto:

$$F(\theta) = \int_0^{\theta} wR\,\sin(q)\,dq = wR\int_0^{\theta}\sin(q)\,dq$$

$$F(\theta) = wR\,(1 - \cos\theta)$$

Los momentos flectores también pueden expresarse en función de la coordenada angular:

$$M(\theta) = \int_0^{\theta} wR^{2}\,\sin(q)\left(\cos(q) - \cos(\theta)\right)dq$$

$$M(\theta) = wR^{2}\left[\int_0^{\theta}\sin(q)\cos(q)\,dq - \cos(\theta)\int_0^{\theta}\sin(q)\,dq\right]$$

Resolviendo las integrales:

$$M(\theta) = wR^{2}\left[\frac{\sin^{2}\theta}{2} - \cos\theta\,(1 - \cos\theta)\right]$$

$$M(\theta) = \frac{wR^{2}}{2}\,(1 - \cos\theta)^{2}$$

## 9. Cálculo de las fuerzas internas

Si se considera el equilibrio del arco más pequeño, existen cuatro fuerzas. Pero la resultante gravitacional y la reacción $R_c$ son **colineales**, por lo que solo existen tres fuerzas no colineales. El equilibrio exige que las fuerzas actuantes formen un **polígono cerrado**, en este caso un triángulo cerrado.

Del triángulo se pueden encontrar relaciones directas para las fuerzas normal y cortante. Las expresiones más generales son:

$$N(\theta) = \left(R_c - \int_0^{\theta} wR\,\sin(q)\,dq\right)\cos\theta$$

$$V(\theta) = \left(R_c - \int_0^{\theta} wR\,\sin(q)\,dq\right)\sin\theta$$

Para el cálculo del momento flector se toman momentos respecto del punto de corte $\Omega$, y se encuentra la siguiente expresión:

$$M + wR^{2}\int_0^{\theta}\sin(q)\left(\cos(q) - \cos(\theta)\right)dq = R_c\,(1 - \cos\theta)$$

$$M + \frac{wR^{2}}{2}\,(1 - \cos\theta)^{2} = R_c\,(1 - \cos\theta)$$

## 10. Semiarco sujeto a carga transversal P

Un arco semicircular de radio $R$ se encuentra sujeto a una carga puntual $P$ en su cúspide. Con base en las condiciones de contorno:

- a) Defina si se trata de un sistema isostático o hiperestático.
- b) Calcule las reacciones del arco y encuentre las funciones de fuerzas internas para la fuerza axial, la fuerza cortante y el momento flector.
- c) Grafique estos sobre el arco con las reglas de la mecánica de materiales.

### 10.1. Solución

El arco tiene un apoyo fijo en $A$ (dos reacciones) y un apoyo móvil en $C$ (una reacción). Son 3 reacciones y no hay contornos cerrados, por lo que el sistema es **isostático**.

Por la simetría del problema se deduce que las reacciones son fuerzas verticales e iguales a $P/2$.

### 10.2. Primer dominio (antes de la carga $P$)

El cálculo de las fuerzas internas requiere considerar **dos dominios**: uno antes de la aplicación de la fuerza $P$ y otro después. Para el primer dominio se realiza un corte general a un ángulo $\theta$ y se toma la parte derecha del corte. En estas condiciones existen exactamente tres fuerzas actuando sobre el elemento aislado y, como el arco está en equilibrio, estas deben formar un **polígono cerrado**, en este caso un triángulo.

$$V = \frac{P}{2}\sin\theta \qquad N = \frac{P}{2}\cos\theta$$

El momento flector se calcula tomando momentos en el punto de corte, lo que elimina el efecto de la normal y del cortante:

$$M = \frac{PR}{2}\,(1 - \cos\theta)$$

### 10.3. Segundo dominio (después de la carga $P$)

Los cálculos del segundo dominio se hacen de forma idéntica. La cortante y la normal tienen las siguientes expresiones:

$$V = \frac{P}{2}\sin(180^\circ - \theta) \qquad N = \frac{P}{2}\cos(180^\circ - \theta)$$

$$M = \frac{PR}{2}\,\bigl(1 - \cos(180^\circ - \theta)\bigr) = \frac{PR}{2}\,(1 + \cos\theta)$$

## 11. Semiarco sujeto a carga distribuida uniforme

Un arco semicircular de radio $R$ se encuentra sujeto a una carga distribuida $P$ (por unidad de longitud horizontal) sobre toda su luz. Calcule las reacciones del arco y encuentre las funciones de fuerzas internas para la fuerza axial, la fuerza cortante y el momento flector. Después grafique estos sobre el arco con las reglas de la mecánica de materiales.

### 11.1. Solución

Por simetría, cada apoyo recibe la mitad de la carga total $P(2R)$, es decir, una reacción vertical igual a $PR$.

Se corta el arco a un ángulo $\theta$ medido desde la horizontal en el apoyo $C$ y se estudia la parte derecha. Sobre ella actúan:

- la reacción vertical $PR$ en $C$,
- la resultante de la carga distribuida sobre el tramo, $PR(1-\cos\theta)$ hacia abajo,
- las fuerzas internas $N$, $V$ y $M$ en el corte.

La fuerza vertical neta sobre el tramo es:

$$PR - PR(1-\cos\theta) = PR\cos\theta$$

Proyectándola sobre la tangente y la normal del arco en el corte, y tomando momentos en el punto de corte, se obtiene:

$$N = PR\cos^{2}\theta \qquad V = PR\sin\theta\cos\theta$$

$$M = PR\cdot R(1-\cos\theta) - PR(1-\cos\theta)\,\frac{R(1-\cos\theta)}{2} = \frac{PR^{2}}{2}\sin^{2}\theta$$

En la cúspide ($\theta = 90^\circ$) se cumple que $N = 0$, $V = 0$ y $M = PR^{2}/2$.

## 12. Arco sujeto a carga radial distribuida

Se tiene un arco de cuarto de circunferencia, empotrado en su extremo $B$ y libre en $A$, sometido a una carga distribuida $q$ que actúa en dirección **radial** a lo largo de todo el arco. El problema consiste en determinar las funciones de fuerza axial, fuerza cortante y momento flector.

## 13. Arco sujeto a carga tangencial distribuida

Se tiene un arco semicircular con apoyo fijo en $A$ y apoyo móvil en $C$, sometido a una carga distribuida $q$ que actúa en dirección **tangencial** al arco. El problema consiste en determinar las reacciones y las funciones de fuerza axial, fuerza cortante y momento flector.

### Problema 1: arco y viga de eje recto

A continuación se muestran los ejes centroidales de un sistema estructural en equilibrio, conformado por un arco de sección rectangular de $30\ \text{cm}\times 50\ \text{cm}$ y una viga de eje recto de $30\ \text{cm}\times 70\ \text{cm}$.

- Dibuje los diagramas de fuerzas axiales, cortantes y momentos flectores de todo el sistema.
- Encuentre el máximo momento flector y su ubicación.
- Encuentre el esfuerzo de compresión y tracción en esta sección y dibuje la distribución de esfuerzos.

Se coloca el origen $O$ en el extremo izquierdo de la viga, que es también el centro del arco ($R = 5\ \text{m}$). La viga va de $x = 0$ a $x = 12\ \text{m}$; el arco nace en el apoyo fijo $A(0;\,-5)$ y se une rígidamente a la viga en $J(5;\,0)$. Hay una carga puntual de $20\ \text{kN}$ hacia abajo en $x=0$, una carga distribuida de $13\ \text{kN/m}$ sobre toda la viga (resultante de $156\ \text{kN}$ en $x = 6\ \text{m}$) y una carga puntual de $30\ \text{kN}$ horizontal hacia la izquierda en $B$.

Son 3 reacciones y no hay contornos cerrados, por lo que el sistema es **isostático**.

#### 13.1. Análisis de reacciones

$$\sum F_x = 0:\quad A_x - 30 = 0 \;\Rightarrow\; A_x = 30\ \text{kN}\ (\rightarrow)$$

$$\sum M_A = 0:\quad 12B_y + 30(5) - 156(6) - 20(0) = 0 \;\Rightarrow\; B_y = 65.5\ \text{kN}\ (\uparrow)$$

$$\sum F_y = 0:\quad A_y + 65.5 - 20 - 156 = 0 \;\Rightarrow\; A_y = 110.5\ \text{kN}\ (\uparrow)$$

#### 13.2. Fuerzas internas por tramos

**Tramo 1: voladizo $OJ$ ($0 \le x \le 5\ \text{m}$), cuerpo libre a la izquierda del corte.**

$$N = 0 \qquad V(x) = -20 - 13x \qquad M(x) = -20x - 6.5x^{2}$$

$V$ y $M$ se dibujaron en el sentido positivo de la convención. El signo negativo que resulta al reemplazar valores indica que la dirección supuesta de ambos es la incorrecta.

En $J$ ($x = 5\ \text{m}$): $V = -85\ \text{kN}$ y $M = -20(5) - 6.5(25) = -262.5\ \text{kN·m}$ (tracción en la fibra superior).

**Tramo 2: viga $JB$ ($5 \le x \le 12\ \text{m}$), cuerpo libre a la derecha del corte ($u = 12 - x$).**

$$N = -30\ \text{kN (compresión)} \qquad V(u) = 13u - 65.5 \qquad M(u) = 65.5u - 6.5u^{2}$$

En $J$ ($u = 7\ \text{m}$): $V = +25.5\ \text{kN}$ y $M = +140\ \text{kN·m}$.

El cortante se anula en $u = \dfrac{65.5}{13}$, es decir, $x = 6.96\ \text{m}$, donde el momento del tramo es máximo:

$$M_{\text{máx, viga}} = \frac{65.5^{2}}{2(13)} = 165\ \text{kN·m} \quad (x = 6.96\ \text{m})$$

**Tramo 3: arco $AJ$ ($0 \le \varphi \le 90^\circ$).**

Un punto $P$ del arco tiene coordenadas $(R\sin\varphi;\,-R\cos\varphi)$. Respecto de $A$, $P$ está desplazado $R\sin\varphi$ en horizontal y $R(1-\cos\varphi)$ en vertical. Sobre el tramo $AP$ solo actúan las reacciones de $A$ (el arco no lleva carga), entonces:

$$N(\varphi) = -A_x\cos\varphi - A_y\sin\varphi = -30\cos\varphi - 110.5\sin\varphi$$

$$V(\varphi) = A_y\cos\varphi - A_x\sin\varphi = 110.5\cos\varphi - 30\sin\varphi$$

$$M(\varphi) = A_y\,R\sin\varphi - A_x\,R(1-\cos\varphi) = 552.5\sin\varphi - 150(1-\cos\varphi)$$

**Comprobación del nudo $J$:** los momentos que llegan al nudo deben equilibrarse: $262.5\ (\text{voladizo}) + 140\ (\text{viga } JB) = 402.5\ \text{kN·m} = M(90^\circ)$ del arco. En fuerzas, el arco entrega $110.5\ \text{kN}$ vertical $= 85 + 25.5$ de los cortantes de la viga, y $30\ \text{kN}$ horizontal $=$ compresión de la viga $JB$.

| Sección | Coordenada | N (kN) | V (kN) | M (kN·m) |
|---|---|---|---|---|
| O (extremo libre) | $x = 0$ | 0 | −20 | 0 |
| J (lado voladizo) | $x = 5\ \text{m}$ | 0 | −85 | −262.5 |
| J (lado viga JB) | $x = 5\ \text{m}$ | −30 | +25.5 | +140.0 |
| Máx. en viga | $x = 6.96\ \text{m}$ | −30 | 0 | +165.0 |
| B | $x = 12\ \text{m}$ | −30 | −65.5 | 0 |
| A (arco) | $\varphi = 0^\circ$ | −30 | +110.5 | 0 |
| Máx. en arco | $\varphi = 74.81^\circ$ | −114.5 | 0 | +422.5 |
| J (arco) | $\varphi = 90^\circ$ | −110.5 | −30 | +402.5 |

#### 13.3. Máximo momento flector y su ubicación

En el arco, $\dfrac{dM}{d\varphi} = 0$ (equivale a $V = 0$):

$$\frac{dM}{d\varphi} = 552.5\cos\varphi - 150\sin\varphi = 0 \;\Rightarrow\; \tan\varphi = \frac{A_y}{A_x} = \frac{110.5}{30} \;\Rightarrow\; \varphi = 74.81^\circ$$

$$M_{\text{máx}} = R\sqrt{A_x^{2} + A_y^{2}} - A_x R = 5(114.5) - 150$$

$$M_{\text{máx}} = 422.5\ \text{kN·m} \quad \text{en } \varphi = 74.81^\circ$$

**Ubicación:** en el arco, a $\varphi = 74.81^\circ$ medidos desde la vertical $OA$; o a $4.825\ \text{m}$ a la derecha de $A$ y $1.310\ \text{m}$ por debajo del eje de la viga. Es mayor que los máximos de la viga ($262.5$ y $165.0\ \text{kN·m}$). En esa sección $V = 0$ y $N = -114.5\ \text{kN}$ (la resultante de las reacciones en $A$, de $114.5\ \text{kN}$, es tangente al arco). El momento tracciona la fibra exterior del arco.

#### 13.4. Esfuerzos de tracción y compresión en la sección crítica

Sección rectangular del arco: $b = 0.30\ \text{m}$, $h = 0.50\ \text{m}$, $A = 0.15\ \text{m}^2$; $\bar r = 5\ \text{m}$, $r_1 = 4.75\ \text{m}$ (interior), $r_2 = 5.25\ \text{m}$ (exterior). Como $R/h = 10$, se aplica la fórmula de viga curva:

$$r_n = \frac{h}{\ln\!\left(\dfrac{r_2}{r_1}\right)} = \frac{0.50}{\ln(5.25/4.75)} = 4.99583\ \text{m} \qquad e = 5 - 4.99583 = 0.004169\ \text{m}$$

$$\frac{N}{A} = \frac{-114.5}{0.15} = -763.3\ \text{kPa} = -0.763\ \text{MPa}$$

**Fibra exterior ($r = 5.25\ \text{m}$), tracción por flexión:**

$$\sigma_{\text{exterior}} = -0.763 + \frac{422.5\,(5.25 - 4.99583)}{0.15\,(0.004169)\,(5.25)} = -0.763 + 32.706 = +31.94\ \text{MPa}$$

**Fibra interior ($r = 4.75\ \text{m}$), compresión por flexión:**

$$\sigma_{\text{interior}} = -0.763 - \frac{422.5\,(4.99583 - 4.75)}{0.15\,(0.004169)\,(4.75)} = -0.763 - 34.962 = -35.73\ \text{MPa}$$

$$\sigma_{\text{tracción}} = 31.94\ \text{MPa (fibra exterior)} \qquad \sigma_{\text{compresión}} = 35.73\ \text{MPa (fibra interior)}$$

### Problema 2: arco circular con tramo recto tangente

Los ejes centroidales de un arco circular de $50\ \text{cm}$ de diámetro, en equilibrio, están sometidos a carga uniformemente distribuida.

- a) Dibuje los diagramas de fuerzas axiales, cortantes y momentos flectores de todo el sistema.
- b) Encuentre el máximo momento flector y su ubicación.
- Encuentre el esfuerzo de compresión y tracción en esta sección y dibuje la distribución de esfuerzos.

#### 13.5. Datos

Origen en el centro $O$ del arco ($r = 7\ \text{m}$). El arco $TC$ abarca $90^\circ$ (radios a $135^\circ$ y $45^\circ$), así que $T(-4.950;\,4.950)$ y $C(4.950;\,4.950)$. El tramo recto $AT$ es tangente al arco en $T$ (inclinado $45^\circ$) y el apoyo fijo $A$ está al nivel del centro $O$, por lo que $A(-7\sqrt{2};\,0) = (-9.899;\,0)$ y $L(AT) = 7\ \text{m}$. La sección es circular de $50\ \text{cm}$ de diámetro ($c = 0.25\ \text{m}$).

**Interpretación de la carga.** En la figura, las flechas de $q = 15\ \text{kN/m}$ siguen la forma del elemento, por lo que se toma como carga vertical por unidad de longitud del eje. Longitud de arco $TC = 7\cdot\pi/2 = 10.996\ \text{m}$.

#### 13.6. Reacciones

Resultantes de la carga: tramo recto $W_1 = 15(7) = 105\ \text{kN}$ aplicada en $x = -7.425\ \text{m}$; arco $W_2 = 15(10.996) = 164.93\ \text{kN}$ aplicada en $x = 0$ (por simetría del arco respecto al eje vertical).

$$\sum F_x = 0:\quad A_x = 0$$

$$\sum M_A = 0:\quad C_y(14.849) - 105(2.475) - 164.93(9.899) = 0 \;\Rightarrow\; C_y = 127.46\ \text{kN}\ (\uparrow)$$

$$\sum F_y = 0:\quad A_y = 269.93 - 127.46 = 142.48\ \text{kN}\ (\uparrow)$$

#### 13.7. Fuerzas internas por tramos

**Tramo recto $AT$ ($0 \le s \le 7\ \text{m}$).**

La resultante vertical a la izquierda del corte es $(A_y - qs)$; su proyección sobre la tangente ($45^\circ$) da $N$ y sobre la normal da $V$. El brazo horizontal desde $A$ es $s/\sqrt{2}$:

$$N(s) = -\frac{142.48 - 15s}{\sqrt{2}} \qquad V(s) = \frac{142.48 - 15s}{\sqrt{2}}$$

$$M(s) = A_y\frac{s}{\sqrt{2}} - qs\,\frac{s}{2\sqrt{2}} = \frac{s}{\sqrt{2}}\,(142.48 - 7.5s)$$

En $A$: $N = -100.75\ \text{kN}$, $V = +100.75\ \text{kN}$, $M = 0$. En $T$ ($s = 7\ \text{m}$): $N = -26.50\ \text{kN}$, $V = +26.50\ \text{kN}$, $M = 445.37\ \text{kN·m}$.

**Arco $TC$ ($0 \le \psi \le 90^\circ$).**

El punto $P$ está en el ángulo polar $135^\circ - \psi$. La fuerza vertical neta a la izquierda del corte es $Q(\psi) = A_y - W_1 - qR\psi = 37.48 - 105\psi$ (con $\psi$ en radianes). Proyectando sobre la tangente y la normal:

$$N(\psi) = -(37.48 - 105\psi)\cos(45^\circ + \psi) \qquad V(\psi) = (37.48 - 105\psi)\sin(45^\circ + \psi)$$

El momento se obtiene sumando la reacción $A_y$, la resultante $W_1$ y la integral de la carga del arco ($dF = qR\,d\psi'$ con brazo $R[\cos(45^\circ+\psi') - \cos(45^\circ+\psi)]$):

$$M(\psi) = A_y\bigl[7\sqrt{2} - 7\cos(45^\circ+\psi)\bigr] - 105\bigl[7.425 - 7\cos(45^\circ+\psi)\bigr] - qR^{2}\bigl[\sin(45^\circ+\psi) - \sin 45^\circ - \psi\cos(45^\circ+\psi)\bigr]$$

$$M(\psi) = 1150.60 - 262.35\cos(45^\circ+\psi) - 735\sin(45^\circ+\psi) + 735\,\psi\cos(45^\circ+\psi)$$

**Comprobaciones:**

- $M(0) = 445.37\ \text{kN·m}$ (continuidad en $T$) ✓
- $M(90^\circ) = 0$ (apoyo $C$) ✓
- En $C$: $N = V = -90.12\ \text{kN}$ (la reacción de $127.46\ \text{kN}$ se reparte por igual a $45^\circ$).

| Sección | Coordenada | N (kN) | V (kN) | M (kN·m) |
|---|---|---|---|---|
| A | $s = 0$ | −100.75 | +100.75 | 0 |
| T | $s = 7\ \text{m}$ / $\psi = 0$ | −26.50 | +26.50 | 445.37 |
| Máximo | $\psi = 20.45^\circ$ | 0 | 0 | 482.04 |
| Clave (cima) | $\psi = 45^\circ$ | 0 | −44.99 | 415.60 |
| C | $\psi = 90^\circ$ | −90.12 | −90.12 | 0 |

#### 13.8. Máximo momento flector y su ubicación

En el tramo recto $V > 0$ en todo el tramo, así que $M$ crece hasta $T$. En el arco, $\dfrac{dM}{ds} = V = 0$ cuando $Q = 0$:

$$37.48 - 105\psi = 0 \;\Rightarrow\; \psi = 0.3570\ \text{rad} = 20.45^\circ$$

$$M_{\text{máx}} = 1150.60 - 262.35\cos(65.45^\circ) - 735\sin(65.45^\circ) + 735(0.3570)\cos(65.45^\circ)$$

$$M_{\text{máx}} = 482.0\ \text{kN·m} \quad \text{en } \psi = 20.45^\circ$$

**Ubicación:** sobre el arco, a $20.45^\circ$ de $T$ (ángulo polar $114.55^\circ$, en $x = -2.908\ \text{m}$, $y = 6.367\ \text{m}$ respecto a $O$; longitud de arco desde $T$: $2.50\ \text{m}$). En esa sección $N = 0$ y $V = 0$ (flexión pura). El momento es positivo: tracciona la fibra interior.

#### 13.9. Esfuerzos de tracción y compresión en la sección crítica

Sección circular: $d = 0.50\ \text{m}$, $c = 0.25\ \text{m}$, $A = \pi(0.25)^2 = 0.19635\ \text{m}^2$, $\bar r = 7\ \text{m}$, $r_1 = 6.75\ \text{m}$, $r_2 = 7.25\ \text{m}$.

$$r_n = \frac{1}{2}\left(7 + \sqrt{49 - 0.0625}\right) = 6.997767\ \text{m} \qquad e = 7 - 6.997767 = 0.002233\ \text{m}$$

**Fibra interior ($r = 6.75\ \text{m}$), tracción:**

$$\sigma_{\text{interior}} = 0 + \frac{482.04\,(6.997767 - 6.75)}{0.19635\,(0.002233)\,(6.75)} = +40.36\ \text{MPa}$$

**Fibra exterior ($r = 7.25\ \text{m}$), compresión:**

$$\sigma_{\text{exterior}} = 0 - \frac{482.04\,(7.25 - 6.997767)}{0.19635\,(0.002233)\,(7.25)} = -38.25\ \text{MPa}$$

$$\sigma_{\text{tracción}} = 40.36\ \text{MPa (fibra interior)} \qquad \sigma_{\text{compresión}} = 38.25\ \text{MPa (fibra exterior)}$$

**Referencia de viga recta:** $\sigma = \dfrac{Mc}{I} = \dfrac{482.04\,(0.25)}{0.0030680} = 39.28\ \text{MPa}$. Como $N = 0$, el eje neutro coincide con $r_n$ ($0.22\ \text{cm}$ hacia el centro de curvatura).

### Problema 3: arco de 240° con cargas en la clave

Los ejes centroidales de un arco circular de $50\ \text{cm}$ de diámetro, en equilibrio, están sometidos a carga uniformemente distribuida.

- a) Dibuje los diagramas de fuerzas axiales, cortantes y momentos flectores de todo el sistema.
- b) Encuentre el máximo momento flector y su ubicación.
- Encuentre el esfuerzo de compresión y tracción en esta sección y dibuje la distribución de esfuerzos.

#### 13.10. Datos

Aunque el texto dice "carga uniformemente distribuida", la figura solo muestra dos cargas concentradas en la clave $C$: $170\ \text{kN}$ vertical hacia abajo y $45\ \text{kN}$ horizontal hacia la izquierda ($\leftarrow$). Arco de $R = 6\ \text{m}$ que abarca $240^\circ$; los apoyos están a $30^\circ$ por debajo de la horizontal del centro: $A(-5.196;\,-3)$ fijo y $B(5.196;\,-3)$ móvil, ambos al mismo nivel. $C(0;\,6)$. Se usa el ángulo polar $\theta$ medido desde la horizontal derecha.

#### 13.11. Reacciones

$$\sum F_x = 0:\quad A_x - 45 = 0 \;\Rightarrow\; A_x = 45\ \text{kN}\ (\rightarrow)$$

$$\sum M_A = 0:\quad B_y(10.392) - 170(5.196) + 45(9) = 0 \;\Rightarrow\; B_y = 46.03\ \text{kN}\ (\uparrow)$$

$$\sum F_y = 0:\quad A_y = 170 - 46.03 = 123.97\ \text{kN}\ (\uparrow)$$

#### 13.12. Fuerzas internas por tramos

**Tramo $AC$ ($90^\circ \le \theta \le 210^\circ$), cuerpo libre $AP$.**

$P = (6\cos\theta;\,6\sin\theta)$. Desde $A$, $P$ está desplazado $(6\cos\theta + 5.196)$ en horizontal y $(6\sin\theta + 3)$ en vertical. Sobre el tramo $AP$ actúan solo las reacciones $A_x = 45\ \text{kN}\ (\rightarrow)$ y $A_y = 123.97\ \text{kN}\ (\uparrow)$; proyectándose sobre la tangente y la normal:

$$N(\theta) = -45\sin\theta + 123.97\cos\theta \qquad V(\theta) = 123.97\sin\theta + 45\cos\theta$$

$$M(\theta) = 123.97(6\cos\theta + 5.196) - 45(6\sin\theta + 3) = 743.83\cos\theta - 270\sin\theta + 509.17$$

En $A$ ($\theta = 210^\circ$): $N = -84.86\ \text{kN}$, $V = -100.96\ \text{kN}$, $M = 0$. En $C$ ($\theta = 90^{\circ-}$): $N = -45\ \text{kN}$, $V = +123.97\ \text{kN}$, $M = 239.17\ \text{kN·m}$.

**Tramo $CB$ ($-30^\circ \le \theta \le 90^\circ$), cuerpo libre $PB$.**

A la derecha del corte solo actúa $B_y = 46.03\ \text{kN}$, con brazo horizontal $(5.196 - 6\cos\theta)$:

$$N(\theta) = -46.03\cos\theta \qquad V(\theta) = -46.03\sin\theta$$

$$M(\theta) = 46.03(5.196 - 6\cos\theta) = 239.17 - 276.17\cos\theta$$

En $C$ ($\theta = 90^{\circ+}$): $N = 0$, $V = -46.03\ \text{kN}$, $M = 239.17\ \text{kN·m}$. En $B$ ($\theta = -30^\circ$): $N = -39.86\ \text{kN}$, $V = +23.01\ \text{kN}$, $M = 0$.

**Comprobaciones:**

- $M(210^\circ) = 0$ (apoyo $A$) y $M(-30^\circ) = 0$ (apoyo $B$) ✓
- $M(90^\circ) = 239.17\ \text{kN·m}$ en ambos tramos (continuidad en $C$) ✓
- En $C$: salto de $V = 123.97 - (-46.03) = 170\ \text{kN}$ (carga vertical) ✓; salto de $N = 0 - (-45) = 45\ \text{kN}$ (carga horizontal) ✓

| Sección | Coordenada | N (kN) | V (kN) | M (kN·m) |
|---|---|---|---|---|
| A | $\theta = 210^\circ$ | −84.86 | −100.96 | 0 |
| Máximo \|M\| | $\theta = 160.05^\circ$ | −131.89 | 0 | −282.14 |
| C (izq.) | $\theta = 90^{\circ-}$ | −45.00 | +123.97 | +239.17 |
| C (der.) | $\theta = 90^{\circ+}$ | 0 | −46.03 | +239.17 |
| Mínimo en CB | $\theta = 0^\circ$ | −46.03 | 0 | −37.00 |
| B | $\theta = -30^\circ$ | −39.86 | +23.01 | 0 |

#### 13.13. Máximo momento flector y su ubicación

Tramo $CB$: $\dfrac{dM}{d\theta} = 276.17\sin\theta = 0 \Rightarrow \theta = 0^\circ$, donde $M = 239.17 - 276.17 = -37.00\ \text{kN·m}$ (valor pequeño).

Tramo $AC$: $\dfrac{dM}{ds} = V = 0$:

$$123.97\sin\theta + 45\cos\theta = 0 \;\Rightarrow\; \tan\theta = -\frac{45}{123.97} \;\Rightarrow\; \theta = 160.05^\circ$$

$$M_{\theta = 160.05^\circ} = 743.83\cos(160.05^\circ) - 270\sin(160.05^\circ) + 509.17 = -699.19 - 92.13 + 509.17$$

$$M_{\theta = 160.05^\circ} = 509.17 - 6\sqrt{A_x^{2} + A_y^{2}} = 509.17 - 6(131.89) = -282.14\ \text{kN·m}$$

Como $|-282.14| > 239.17\ \text{kN·m}$ (momento en la clave), el máximo absoluto está en el tramo $AC$:

$$M_{\text{máx}} = -282.14\ \text{kN·m} \quad \text{en } \theta = 160.05^\circ \ \text{(tracción en la fibra exterior)}$$

**Ubicación:** sobre el arco, en el tramo $AC$, a $\theta = 160.05^\circ$ ($19.95^\circ$ sobre la horizontal del centro, lado izquierdo): $x = -5.640\ \text{m}$, $y = 2.047\ \text{m}$ respecto a $O$ ($5.047\ \text{m}$ sobre los apoyos). En esa sección $V = 0$ y $N = -131.89\ \text{kN}$ (la resultante de las reacciones en $A$, $\sqrt{45^2 + 123.97^2} = 131.89\ \text{kN}$, es tangente al arco). El momento es negativo: tracciona la fibra exterior.

#### 13.14. Esfuerzos de tracción y compresión en la sección crítica

Sección circular: $A = 0.19635\ \text{m}^2$, $c = 0.25\ \text{m}$, $\bar r = 6\ \text{m}$, $r_1 = 5.75\ \text{m}$, $r_2 = 6.25\ \text{m}$.

$$r_n = \frac{1}{2}\left(6 + \sqrt{36 - 0.0625}\right) = 5.997395\ \text{m} \qquad e = 6 - 5.997395 = 0.002605\ \text{m}$$

$$\frac{N}{A} = \frac{-131.89}{0.19635} = -671.7\ \text{kPa} = -0.672\ \text{MPa}$$

**Fibra exterior ($r = 6.25\ \text{m}$), tracción:**

$$\sigma_{\text{exterior}} = -0.672 + \frac{282.14\,(6.25 - 5.997395)}{0.19635\,(0.002605)\,(6.25)} = -0.672 + 22.292 = +21.62\ \text{MPa}$$

**Fibra interior ($r = 5.75\ \text{m}$), compresión:**

$$\sigma_{\text{interior}} = -0.672 - \frac{282.14\,(5.997395 - 5.75)}{0.19635\,(0.002605)\,(5.75)} = -0.672 - 23.730 = -24.40\ \text{MPa}$$

$$\sigma_{\text{tracción}} = 21.62\ \text{MPa (fibra exterior)} \qquad \sigma_{\text{compresión}} = 24.40\ \text{MPa (fibra interior)}$$

**Referencia de viga recta:** $\sigma = \dfrac{Mc}{I} = \dfrac{282.14\,(0.25)}{0.0030680} = 22.99\ \text{MPa}$. La compresión axial ($N = -131.89\ \text{kN}$) aumenta la compresión de la fibra interior y reduce la tracción de la exterior.

## 14. Esfuerzos de flexión en elementos curvos

### 14.1. Geometría y deformación

Se considera una viga curva de radio de curvatura constante. Al aplicar un momento flector $M$, la sección gira, el centro de curvatura cambia de posición, el radio de curvatura cambia y el ángulo central aumenta. Se llama $r_n$ al radio del eje neutro (en el desarrollo del profesor se le denota $R$) y $\bar r$ al radio del eje centroidal.

El eje neutro no cambia de longitud al deformarse:

$$r_n\,\theta = r_n'\,\theta'$$

El cambio de longitud de una fibra ubicada a una distancia $y$ del eje neutro es:

$$\Delta L = (r_n' - y)\,\theta' - (r_n - y)\,\theta = -y\,\Delta\theta$$

### 14.2. Distribución de deformaciones y esfuerzos

La deformación unitaria de la fibra se obtiene dividiendo el cambio de longitud entre la longitud inicial. En función de la coordenada radial $r$ de la fibra:

$$\varepsilon = -\frac{\Delta\theta}{\theta}\,\frac{r_n - r}{r}$$

Con la ley de Hooke, $\sigma = E\varepsilon$:

$$\sigma = -E\,\frac{\Delta\theta}{\theta}\left(\frac{r_n}{r} - 1\right)$$

### 14.3. Posición del eje neutro

En flexión pura, la suma de fuerzas axiales es cero, $\int_A \sigma\,dA = 0$, lo que lleva a:

$$\int_A \frac{r_n}{r}\,dA - \int_A dA = 0$$

$$r_n = \frac{A}{\displaystyle\int_A \frac{dA}{r}}$$

Para una sección rectangular y para una sección circular se obtiene:

$$r_n = \frac{h}{\ln\!\left(\dfrac{r_2}{r_1}\right)} \qquad r_n = \frac{1}{2}\left(\bar r + \sqrt{\bar r^{2} - c^{2}}\right)$$

donde $r_1$ y $r_2$ son los radios interior y exterior, $h$ es el peralte y $c$ es el radio de la sección circular.

### 14.4. Fórmula del esfuerzo

El momento de las fuerzas internas debe ser igual al momento externo $M$:

$$M = E\,\frac{\Delta\theta}{\theta}\,A\,(\bar r - r_n) \quad\Rightarrow\quad E\,\frac{\Delta\theta}{\theta} = \frac{M}{A\,(\bar r - r_n)}$$

Llamando **excentricidad** a la distancia entre el eje centroidal y el eje neutro, $e = \bar r - r_n$, el esfuerzo en una fibra de radio $r$ es:

$$\sigma = -\frac{M}{A\,e}\;\frac{r_n - r}{r}$$

o, en función de la distancia $y$ medida desde el eje neutro:

$$\sigma = -\frac{M\,y}{A\,e\,(r_n - y)}$$

### 14.5. Cambio del radio de curvatura

Con el momento aplicado, el radio de curvatura cambia según:

$$\frac{1}{R'} = \frac{1}{R}\left(1 + \frac{M}{e\,E\,A}\right)$$

### 14.6. Problemas de aplicación

- **Problema 1.** Para la barra curva mostrada, determine el esfuerzo en el punto $A$ cuando a) $h = 50\ \text{mm}$ y b) $h = 60\ \text{mm}$.
- **Problema 2.** Para la componente de máquina y carga mostradas, determine el esfuerzo en el punto $A$ cuando a) $h = 2\ \text{in}$ y b) $h = 2.6\ \text{in}$.
- **Problema 3.** La barra curva tiene una sección transversal de $40\times 60\ \text{mm}$ y un radio interno $r_1 = 15\ \text{mm}$. Para la carga mostrada, determine los esfuerzos máximos de tensión y compresión.
- **Problema 4.** Hay eslabones de acero con la sección transversal mostrada y diferentes ángulos centrales $\beta$. Si el esfuerzo permisible es de $12\ \text{ksi}$, determine la fuerza máxima $P$ que se puede aplicar a un eslabón con $\beta = 90^\circ$.

## 15. Energía de deformación en vigas de eje recto

La **energía de deformación** es una medida del trabajo que desarrollan las fuerzas internas que actúan sobre un cuerpo deformable. En vigas de eje recto, las fuerzas internas son de tres tipos: fuerza axial, momento flector y fuerza cortante. La energía total de un elemento diferencial se calcula de forma independiente para cada una de ellas.

### 15.1. Energía de deformación por carga axial

El trabajo de la fuerza normal sobre un elemento de longitud $dx$ es el semiproducto de la fuerza y la deformación:

$$dU_a = \frac{1}{2}\,N\,d\delta \qquad d\delta = \frac{N}{EA}\,dx$$

$$U_a = \frac{1}{2}\int_0^L \frac{N^{2}}{EA}\,dx$$

### 15.2. Energía de deformación por flexión

El momento flector produce un giro $d\theta$ en la sección, y su trabajo es el semiproducto del momento y el giro:

$$dU_f = \frac{1}{2}\,M\,d\theta \qquad d\theta = \frac{M}{EI}\,dx$$

$$U_f = \frac{1}{2}\int_0^L \frac{M^{2}}{EI}\,dx$$

### 15.3. Energía de deformación por corte

La fuerza cortante provoca una deformación transversal adicional $d\nu$ y, por lo tanto, un trabajo adicional. Con $\tau = G\gamma$ y el factor de forma $\alpha$:

$$dU_s = \frac{1}{2}\,V\,d\nu \qquad d\nu = \frac{\alpha V}{GA}\,dx$$

$$U_s = \frac{1}{2}\int_0^L \frac{\alpha V^{2}}{AG}\,dx$$

La energía de deformación total de la viga es la suma de los tres términos:

$$U = \frac{1}{2}\int_0^L \frac{N^{2}}{EA}\,dx + \frac{1}{2}\int_0^L \frac{M^{2}}{EI}\,dx + \frac{1}{2}\int_0^L \frac{\alpha V^{2}}{AG}\,dx$$

### 15.4. Energía de deformación total en una viga simplemente apoyada

Para una viga simplemente apoyada de luz $L$ con carga distribuida transversal $w$, las fuerzas internas son:

$$V(x) = \frac{wL}{2}\left(1 - \frac{2x}{L}\right) \qquad M(x) = \frac{wL^{2}}{2}\left[\frac{x}{L} - \left(\frac{x}{L}\right)^{2}\right]$$

Integrando cada contribución se obtiene:

$$U_s = \frac{\alpha\,w^{2}L^{3}}{24\,AG} \qquad U_f = \frac{w^{2}L^{5}}{240\,EI}$$

La relación entre ambas energías depende de la esbeltez $L/h$:

$$\frac{U_f}{U_s} = \lambda\left(\frac{L}{h}\right)^{2} \qquad \text{con } \lambda = 2.4$$

| $L/h$ | $U_f/U_s$ | Flexión | Cortante |
|---|---|---|---|
| 1 | 2.4 | 70.6 % | 29.4 % |
| 2 | 9.6 | 90.6 % | 9.4 % |
| 3 | 21.6 | 95.6 % | 4.4 % |
| 5 | 60.0 | 98.4 % | 1.6 % |
| 10 | 240.0 | 99.6 % | 0.4 % |
| 20 | 960.0 | 99.9 % | 0.1 % |

A medida que la viga es más esbelta, la energía por flexión domina y el aporte del cortante se vuelve despreciable.

## 16. Energía de deformación en vigas de eje curvo

En un elemento curvo, la energía de deformación se calcula como la suma de las energías producidas de forma independiente por el momento flector, la fuerza axial y la fuerza cortante, más un término de acoplamiento entre momento y fuerza axial.

### 16.1. Energía de deformación por momentos

Un momento $M$ tiende a aumentar el ángulo central y a reducir el radio de curvatura. La energía es el semiproducto del momento y el giro diferencial:

$$dU_f = \frac{1}{2}\,M\,\delta(d\theta) \qquad \delta(d\theta) = \frac{M}{EAe}\,d\theta$$

$$U_f = \int_L \frac{M^{2}}{2\,EAeR}\,ds$$

A diferencia de la viga recta, aparecen el radio de curvatura $R$ y la excentricidad $e$.

### 16.2. Energía de deformación de momento por deformación axial

Una carga axial que pasa por el eje del elemento provoca un giro diferencial negativo, que a su vez modifica la energía del momento flector:

$$\delta(d\theta) = \frac{N}{EAR}\,dx \qquad dU_{fM} = -M\,\delta(d\theta) = -\frac{MN}{EAR}\,dx$$

$$U_{fM} = -\int_L \frac{MN}{EAR}\,dx$$

### 16.3. Energía de deformación por fuerza axial

$$dU_a = \frac{1}{2}\,N\,du \qquad du = \frac{N}{EA}\,ds \qquad U_a = \int_L \frac{N^{2}}{2\,EA}\,ds$$

### 16.4. Energía de deformación por fuerza cortante

$$dU_s = \frac{1}{2}\,V\,dv \qquad dv = \gamma\,ds = \frac{\alpha V}{AG}\,ds \qquad U_s = \int_L \frac{\alpha V^{2}}{2\,AG}\,ds$$

La energía de deformación total en un eje curvo es:

$$U = \frac{1}{2}\int_L \frac{M^{2}}{EAeR}\,ds - \int_L \frac{MN}{EAR}\,ds + \frac{1}{2}\int_L \frac{N^{2}}{EA}\,ds + \frac{1}{2}\int_L \frac{\alpha V^{2}}{AG}\,ds$$

## 17. Teorema de Castigliano

Sea un cuerpo deformable sujeto a un conjunto de fuerzas $F_1, F_2, \ldots, P, \ldots, F_n$. La energía de deformación es función de esas cargas:

$$U = U(F_1, F_2, \ldots, P, \ldots, F_n)$$

Si $P$ varía en $dP$, la energía final puede escribirse como:

$$U_f = U + \frac{\partial U}{\partial P}\,dP$$

Si el cuerpo permanece en el rango elástico lineal, se puede aplicar el principio de superposición: primero se aplica $dP$ (energía $\tfrac{1}{2}\,dP\,d\Delta$) y luego las cargas originales, lo que da:

$$U_f = \frac{1}{2}\,dP\,d\Delta + dP\,\Delta + U$$

El primer término es de orden diferencial superior y se desprecia. Al comparar ambas expresiones, se concluye el **teorema de Castigliano**:

$$\Delta = \frac{\partial U}{\partial P}$$

El desplazamiento buscado es la derivada parcial de la energía de deformación con respecto a la carga que actúa en la dirección de ese desplazamiento.

## 18. Cálculo de deflexiones

### 18.1. Armaduras

En armaduras, los elementos solo están sujetos a fuerza axial, por lo que la energía de deformación total es:

$$U = \frac{1}{2}\sum_i\int_0^{L}\frac{N_i^{2}}{E_iA_i}\,dx$$

El desplazamiento en la dirección de una fuerza $P$ es:

$$\Delta = \frac{\partial U}{\partial P} = \sum_i\int_0^{L}\frac{N_i}{E_iA_i}\left(\frac{\partial N_i}{\partial P}\right)dx$$

**Ejemplos propuestos:**

- **Ejemplo 1.** Una armadura de acero estructural A36 soporta un panel publicitario que transmite una carga puntual de $40\ \text{kN}$. Calcule la deflexión vertical que produce la carga.
- **Ejemplo 2.** Cada miembro de una cercha de acero tiene el área indicada. Con $E = 29\times 10^{6}\ \text{psi}$, calcule la deflexión horizontal y vertical del punto $C$.
- **Ejemplo 3.** Tres miembros del mismo material y de la misma área de sección transversal soportan una carga $P$. Determine la fuerza en el miembro $BC$.

### 18.2. Vigas de eje recto

Para una viga sujeta a fuerzas y pares externos, la energía de deformación es:

$$U = \frac{1}{2}\int_0^L \frac{N^{2}}{EA}\,dx + \frac{1}{2}\int_0^L \frac{M^{2}}{EI}\,dx + \frac{1}{2}\int_0^L \frac{\alpha V^{2}}{AG}\,dx$$

El desplazamiento de un punto $Q$ en la dirección de una fuerza $P$ es:

$$\Delta = \frac{\partial U}{\partial P} = \int_0^L \frac{N}{EA}\frac{\partial N}{\partial P}\,dx + \int_0^L \frac{M}{EI}\frac{\partial M}{\partial P}\,dx + \int_0^L \frac{\alpha V}{AG}\frac{\partial V}{\partial P}\,dx$$

Si la fuerza axial es cero, la expresión se reduce a flexión y cortante. Y si el aporte del cortante es despreciable (vigas esbeltas), queda la conocida expresión:

$$\Delta = \int_0^L \frac{M}{EI}\,\frac{\partial M}{\partial P}\,dx$$

**Ejemplos propuestos:**

- **Ejemplo 1.** Viga sujeta a carga distribuida uniforme $w$: calcule la deflexión máxima en $A$ y el giro que esta sufre, con rigidez $EI$.
- **Ejemplo 2.** Viga mixta con carga distribuida uniforme $w$ en el voladizo: calcule la deflexión máxima en $D$, con rigidez $EI$.
- **Ejemplo 3.** Viga mixta sujeta a dos cargas puntuales $P$: calcule la deflexión máxima en $A$ y en $D$, con rigidez $EI$.
- **Ejemplo 4.** Varilla uniforme de rigidez $EI$ doblada y cargada: determine (a) la deflexión vertical y (b) la deflexión horizontal del punto $A$.
- **Ejemplo 5.** Dos varillas $AB$ y $BC$ de igual rigidez $EI$ soldadas en $B$: determine (a) la deflexión del punto $C$ y (b) la pendiente del miembro $BC$ en $C$.
- **Ejemplo 6.** Varilla uniforme de rigidez $EI$ doblada y cargada: determine (a) la deflexión horizontal y (b) la pendiente en el punto $D$.

### 18.3. Vigas de eje curvo

El comportamiento de una viga de eje curvo depende de la **relación de aspecto** $R/h$, es decir, del radio de curvatura entre el peralte de la sección. Si $R/h$ es grande, la curvatura es pequeña y la viga puede aproximarse por la teoría de vigas de eje recto, lo que simplifica mucho el cálculo de deflexiones.

### 18.4. Vigas curvas gruesas ($R/h$ menor que 5)

Con relaciones de aspecto menores que 5, el aporte de la energía por cortante y por fuerza axial **no puede despreciarse**. La energía total es la de la sección 16, y el desplazamiento se obtiene derivándola con respecto a la carga:

$$\Delta = \frac{\partial U}{\partial P} = \int_L \frac{M}{EAeR}\frac{\partial M}{\partial P}\,ds - \int_L \frac{N}{EAR}\frac{\partial M}{\partial P}\,ds - \int_L \frac{M}{EAR}\frac{\partial N}{\partial P}\,ds + \int_L \frac{N}{EA}\frac{\partial N}{\partial P}\,ds + \int_L \frac{\alpha V}{AG}\frac{\partial V}{\partial P}\,ds$$

### 18.5. Vigas curvas delgadas ($R/h$ mayor que 5)

Con relaciones de aspecto mayores que 5, la viga se aproxima geométricamente a una viga de eje recto. Además, si $L/h$ es mayor que 5, el aporte del cortante y de la fuerza axial es insignificante frente a la flexión:

$$U = \frac{1}{2}\int_0^L \frac{M^{2}}{EI}\,dx \qquad \Delta = \frac{\partial U}{\partial P} = \int_0^L \frac{M}{EI}\,\frac{\partial M}{\partial P}\,dx$$

**Problema 1.** Para la viga y la carga mostradas, y utilizando el teorema de Castigliano, determine (a) la deflexión horizontal del punto $B$ y (b) la deflexión vertical del punto $B$.

#### Ejemplo a: estructura de un techo industrial

Una estructura de acero soporta un techo industrial. Ignorando el peso propio, se pide: a) el diagrama de momentos flectores, b) el esfuerzo normal máximo en el arco y qué fracción es del momento máximo, c) la deflexión vertical máxima del punto $D$ considerando las fuerzas cortantes y axiales, y d) el desplome de la columna $AB$. Se considera $M = 2PR$, con propiedades $E$, $A$, $I$, $G$ y $\alpha$.

**Momento flector.** El brazo de palanca de la carga $P$ respecto de la sección $\Omega$ es:

$$d = \frac{R}{\sqrt{2}} - R\cos\!\left(\frac{\pi}{4} + \theta\right) = \frac{R}{\sqrt{2}}\,(1 - \cos\theta + \sin\theta)$$

Por equilibrio de momentos:

$$M = \frac{PR}{\sqrt{2}}\,(1 - \cos\theta + \sin\theta) \quad \text{(primer tramo del arco)}$$

$$M = \frac{PR}{\sqrt{2}}\,(3.828 - \cos\theta + \sin\theta) \quad \text{(segundo tramo del arco)}$$

$$M = 3.707\,PR \quad \text{(columna, momento máximo)}$$

**Esfuerzo normal máximo** en la sección de máximo momento:

$$\sigma = \frac{M\,y}{I} = 73.748\,\frac{P}{R^{2}}$$

**Deflexión vertical del punto $D$.** Se suman los aportes de tres dominios: el arco $DC$, el arco $CB$ y la columna $BA$:

$$\delta_v = \int \frac{M}{EI}\frac{\partial M}{\partial P}\,ds = I_1 + I_2 + I_3$$

$$I_1 = 0.121\,\frac{PR^{3}}{EI} \qquad I_2 = 17.708\,\frac{PR^{3}}{EI} \qquad I_3 = 50.941\,\frac{PR^{3}}{EI}$$

$$\delta_v = 68.77\,\frac{PR^{3}}{EI}$$

**Desplome horizontal de la columna.** Se aplica una carga ficticia $Q$ en la dirección buscada, con $M = 3.707\,PR + Qx$ y $\dfrac{\partial M}{\partial Q} = x$:

$$\delta_H = \frac{1}{EI}\int_0^R 3.707\,PR\;x\,dx = 1.858\,\frac{PR^{3}}{EI}$$

#### Ejemplo b: arco bajo carga de gravedad

Un arco de radio $R$ se usa como estructura de soporte para cubrir grandes luces, con una carga de gravedad $\omega$. Se pide: a) la energía de deformación del sistema, b) la deflexión máxima con el teorema de Castigliano y qué fracción del claro central representa, y c) el desplazamiento del apoyo $C$. Se usa la teoría de vigas curvas delgadas, con $E$ e $I$ constantes.

**Momento flector** a un ángulo $\theta$:

$$M = \frac{\omega R^{2}}{8}\left[4\cos^{2}\!\left(\theta + \frac{\pi}{6}\right) - 3\right]$$

**Energía de deformación:**

$$U = \int \frac{M^{2}}{2EI}\,ds = \frac{\omega^{2}R^{5}}{128\,EI}\int_0^{2\pi/3}\left[4\cos^{2}\!\left(\theta + \frac{\pi}{6}\right) - 3\right]^{2}d\theta = 0.069\,\frac{\omega^{2}R^{5}}{EI}$$

**Desplazamiento vertical del punto $B$** (con una carga ficticia $Q$ vertical):

$$\delta_V = 0.207\,\frac{\omega R^{4}}{EI}$$

**Desplazamiento horizontal del punto $C$:**

$$\delta_H = 0.194\,\frac{\omega R^{4}}{EI}$$

#### Ejercicio c: gancho de elevación

Un gancho de elevación se usa para izar contenedores de gran tonelaje. Se pide: a) la carga máxima que puede soportar el gancho, con módulos $E$ y $G$ y un esfuerzo admisible $\sigma$, y b) con la teoría de vigas curvas gruesas, la deflexión del punto bajo la carga del contenedor. Se considera $d = R$, $h = 0.5R$, $R/r = 2$ y $\beta$ como factor de cortante.

Dentro del segmento $CB$, las fuerzas cortante y normal forman un triángulo isósceles cerrado, y el momento flector es:

$$V = \frac{P}{\sqrt{2}} \qquad N = \frac{P}{\sqrt{2}} \qquad M = P\left(\frac{R}{\sqrt{2}} - \frac{x}{\sqrt{2}}\right) = \frac{P}{\sqrt{2}}\,(R - x)$$

## 19. Problemas

**Problema 1.** La barra curvada tiene un diámetro $d$. Determine el desplazamiento vertical del extremo $B$ de la barra, hecha de un material con módulo de elasticidad $E$. Haga el cálculo considerando el caso como viga gruesa y como viga delgada.

**Problema 2.** La barra tiene sección transversal circular con momento de inercia $I$. Si se aplica una fuerza vertical $P$ en el punto $A$, determine el desplazamiento vertical en ese punto. Considere únicamente la energía de deformación debida a la flexión. El módulo de elasticidad es $E$.

**Problema 3.** Encuentre los desplazamientos lineales y el giro en el extremo libre de la barra semicircular.

**Problema 4.** Determine la energía de deformación en la barra curva horizontal debido a la torsión. Hay una fuerza vertical $P$ que actúa en su extremo. $JG$ es constante.

**Problema 5.** El sistema estructural está sometido a una carga vertical $P$ aplicada en el punto $D$, con módulo de elasticidad $E$ y momento de inercia $I$. Suponiendo que los elementos se comportan como vigas delgadas (teoría de Euler-Bernoulli), determine a) la deflexión vertical y el giro en el punto $B$, y b) el desplazamiento horizontal del punto $C$. Considere $\alpha = 45^\circ$.

**Problema 6.** Una estructura está compuesta por una semicircunferencia conectada a un tramo recto. Se aplica una carga puntual $P$ en el punto medio del segmento recto. Con rigidez a la flexión $EI$ constante, determine: a) el desplazamiento vertical y horizontal del extremo libre, y b) el giro en dicho extremo e indique su sentido. Considere únicamente los efectos de flexión.

**Problema 7.** Un gancho de elevación se usa para el izaje de contenedores de gran tonelaje. a) Determine la carga máxima que es capaz de soportar, con módulos $E$ y $G$ y esfuerzo admisible $\sigma$. b) Con la teoría de vigas curvas gruesas, encuentre la deflexión del punto bajo la carga del contenedor. Considere $d = R$, $h = 0.5R$, $R/r = 2$ y $\beta$ como factor de cortante.

**Problemas de esfuerzos en vigas curvas:**

- Si el esfuerzo máximo de flexión en la sección $a$–$a$ no debe exceder un valor dado, determine la fuerza máxima que puede aplicarse en el extremo $E$.
- El codo de una tubería tiene un radio exterior de $0.75\ \text{in}$ y un radio interior de $0.63\ \text{in}$. Si el conjunto está sometido a momentos, determine el esfuerzo máximo desarrollado en la sección $a$–$a$.
- La barra curva de una máquina tiene sección transversal rectangular y está sometida a un par. Determine el esfuerzo máximo de tracción y de compresión en la sección $a$–$a$, y represente la distribución de esfuerzos.
- La horquilla de una rueda de nariz de avión tiene una reacción máxima de $840\ \text{lb}$ en el extremo. Determine el esfuerzo máximo de flexión en la parte curva, en la sección $a$–$a$, de sección circular de $2\ \text{in}$ de diámetro.
- Una barra circular de $100\ \text{mm}$ de diámetro se dobla en forma de S y está sometida a momentos en sus extremos. Determine el esfuerzo máximo de tracción y compresión desarrollado en la barra.
- El tramo curvo de $150^\circ$ de un gancho izador de grúa, de fierro fundido con esfuerzo de fluencia $\sigma_y = 220\ \text{MPa}$ en tracción y compresión, iza la carga $P$ a $600\ \text{mm}$ del centro de curvatura. Con un factor de seguridad $FS = 2.5$, calcule el máximo valor de $P$ e indique en qué posición angular del arco ocurren los máximos esfuerzos normales.

## 20. Referencias

1. Ugural, A. C. (2012). *Advanced strength and applied stress analysis* (2nd ed.). Pearson Education.
2. Timoshenko, S. P., & Goodier, J. N. (1970). *Theory of elasticity* (3rd ed.). McGraw-Hill.
3. Boresi, A. P., Schmidt, R. J., & Sidebottom, O. M. (1993). *Advanced mechanics of materials* (6th ed.). Wiley.
4. Malvern, L. E. (1969). *Introduction to the mechanics of a continuous medium*. Prentice-Hall.
5. Sadd, M. H. (2009). *Elasticity: Theory, applications, and numerics* (2nd ed.). Academic Press.