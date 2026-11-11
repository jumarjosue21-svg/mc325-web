## 1. Esfuerzos

### 1.1. Definición de esfuerzos

Los **esfuerzos** son una medida de la distribución de las fuerzas internas sobre un área determinada. Cuando un cuerpo se encuentra sometido a un conjunto de cargas externas, estas inducen fuerzas internas que permiten mantener su equilibrio.

Las condiciones de equilibrio permiten determinar la resultante de las fuerzas internas que actúan en una sección. Sin embargo, determinar **cómo se distribuyen** esas fuerzas sobre los distintos puntos de la sección requiere estudiar el esfuerzo en cada elemento diferencial de área.

En un elemento de área $dA$ pueden actuar componentes de fuerza **normales** y **tangenciales o cortantes**. El esfuerzo expresa la intensidad de esas fuerzas por unidad de área.

![Cuerpo sometido a fuerzas exteriores y secciones de corte con vectores de fuerza diferencial y área](resistencia_esfuerzos_figura_01.jpg)

*Figura 1.1. Cargas exteriores sobre un cuerpo y fuerzas internas expuestas al efectuar un corte. Fuente: material original, página 3.*

La figura representa un cuerpo sometido a fuerzas exteriores $P_1$, $P_2$, $P_3$ y $P_4$. Al efectuar un corte aparecen fuerzas internas sobre el área seccionada; para una porción diferencial de superficie, estas fuerzas se relacionan con la orientación del plano considerado.

**Aclaración didáctica.** Si $\Delta\mathbf F$ es la fuerza interna resultante que actúa sobre un pequeño elemento $\Delta A$ de un plano de corte, el vector de tracción o esfuerzo superficial se interpreta, en el límite, como:

$$
\mathbf t^{(\mathbf n)}=\lim_{\Delta A\to 0}\frac{\Delta\mathbf F}{\Delta A}
$$

La componente perpendicular al plano se denomina **esfuerzo normal** y la componente contenida en él, **esfuerzo cortante**. Esta expresión complementa la explicación conceptual del documento y no aparece escrita en la diapositiva.

Cada plano de corte se caracteriza por su **vector normal** $\mathbf n$, que define la orientación de dicho plano. En un mismo punto del cuerpo pueden imaginarse infinitos planos de corte; en general, cada uno presenta una distribución de esfuerzos diferente.

### 1.2. Transformación de esfuerzos en un estado plano

El material considera un **estado plano de esfuerzos**, definido por los esfuerzos normales $\sigma_x$ y $\sigma_y$ y el esfuerzo cortante $\tau_{xy}$.

Conocido dicho estado, es posible determinar los esfuerzos que actúan sobre cualquier plano inclinado cuya normal forma un ángulo $\phi$ con el eje $x$.

![Elemento triangular de equilibrio con tensiones normales y cortantes sobre caras rectas e inclinadas](resistencia_esfuerzos_figura_02.jpg)

*Figura 1.2. Equilibrio de un elemento diferencial triangular y orientación del plano cuya normal es $\mathbf n$. Fuente: material original, página 4.*

En el elemento triangular aparecen las longitudes diferenciales $dx$, $dy$ y $ds$, las tensiones sobre las caras coordenadas y los esfuerzos normal $\sigma$ y tangencial $\tau$ en el plano inclinado. El ángulo $\phi$ describe la orientación de la normal $\mathbf n$ respecto del eje $x$.

#### 1.2.1. Esfuerzo normal sobre un plano inclinado

Por equilibrio de fuerzas en la dirección normal $\mathbf n$, se obtiene la ecuación de transformación:

$$
\boxed{\sigma=\frac{\sigma_x+\sigma_y}{2}+\frac{\sigma_x-\sigma_y}{2}\cos(2\phi)+\tau_{xy}\operatorname{sen}(2\phi)}
$$

En ella:

- $\sigma$ es el esfuerzo normal en el plano inclinado.
- $\sigma_x$ y $\sigma_y$ son los esfuerzos normales en las caras de referencia.
- $\tau_{xy}$ es el esfuerzo cortante del estado plano inicial.
- $\phi$ es el ángulo entre el eje $x$ y la normal al plano considerado.

El primer término es el **esfuerzo normal promedio**; los otros dos expresan cómo cambia la componente normal al variar la orientación del plano.

#### 1.2.2. Esfuerzo cortante sobre un plano inclinado

Por equilibrio en la dirección tangencial al plano inclinado, se tiene:

$$
\boxed{\tau=-\frac{\sigma_x-\sigma_y}{2}\operatorname{sen}(2\phi)+\tau_{xy}\cos(2\phi)}
$$

Este esfuerzo depende de la orientación del plano incluso cuando $\sigma_x$, $\sigma_y$ y $\tau_{xy}$ permanecen constantes.

#### 1.2.3. Direcciones principales

Los **planos principales** son aquellos para los cuales el esfuerzo cortante se anula. La orientación principal, denotada por $\phi_p$, se obtiene mediante:

$$
\boxed{\tan(2\phi_p)=\frac{2\tau_{xy}}{\sigma_x-\sigma_y}}
$$

El documento incluye también la condición equivalente:

$$
\frac{\sigma_x-\sigma_y}{2}\operatorname{sen}(2\phi_p)-\tau_{xy}\cos(2\phi_p)=0
$$

Las dos direcciones principales de un estado plano son perpendiculares entre sí. En ellas se presentan los esfuerzos normales extremos.

#### 1.2.4. Direcciones de esfuerzo cortante extremo

El material proporciona la siguiente expresión angular:

$$
\tan(2\phi_s)=\frac{\sigma_x-\sigma_y}{2\tau_{xy}}
$$

**Observación sobre la fuente.** El signo de la expresión angular presentada en la diapositiva no es consistente con la ecuación de transformación de $\tau$ escrita anteriormente. Además, la condición estacionaria aparece en la diapositiva con $\phi_p$ en lugar de $\phi_s$. Al derivar la expresión de $\tau$ que ofrece el mismo documento, la orientación de los planos de cortante extremo cumple:

$$
\boxed{\tan(2\phi_s)=-\frac{\sigma_x-\sigma_y}{2\tau_{xy}}}
$$

La condición estacionaria del esfuerzo cortante, siguiendo la expresión del documento, es:

$$
\frac{\sigma_x-\sigma_y}{2}\cos(2\phi_p)+\tau_{xy}\operatorname{sen}(2\phi_p)=0
$$

**Aclaración didáctica.** Al derivar la ecuación de $\tau$ respecto de $\phi$ e igualar el resultado a cero, se obtiene la condición para $\phi_s$:

$$
\frac{\sigma_x-\sigma_y}{2}\cos(2\phi_s)+\tau_{xy}\operatorname{sen}(2\phi_s)=0
$$

La diferencia de notación entre ambas expresiones debe tenerse en cuenta al aplicar las ecuaciones.

### 1.3. Esfuerzos principales y esfuerzo cortante máximo

El **esfuerzo normal promedio**, que también representa la coordenada horizontal del centro del círculo de Mohr, está dado por:

$$
\sigma_{\mathrm{prom}}=\frac{\sigma_x+\sigma_y}{2}
$$

Los esfuerzos normales principales del estado plano son:

$$
\boxed{\sigma_1,\sigma_2=\frac{\sigma_x+\sigma_y}{2}\pm\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^{2}}}
$$

Los valores extremos del esfuerzo cortante en el plano son:

$$
\boxed{\tau_1,\tau_2=\pm\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^{2}}}
$$

La cantidad bajo la raíz constituye el cuadrado del radio del **círculo de Mohr**.

### 1.4. Representación mediante el círculo de Mohr

![Círculo de Mohr del estado plano con centro, radio, esfuerzos principales y puntos de esfuerzo en caras perpendiculares](resistencia_esfuerzos_figura_03.jpg)

*Figura 1.3. Círculo de Mohr para la transformación de esfuerzos planos. Fuente: material original, página 5.*

El gráfico utiliza como eje horizontal el esfuerzo normal $\sigma$ y como eje vertical el esfuerzo cortante $\tau$. Los elementos principales son:

- **Centro $C$:** ubicado en $\bigl((\sigma_x+\sigma_y)/2,\,0\bigr)$.
- **Radio:** determinado por la raíz cuadrada que aparece en las fórmulas de esfuerzos principales y de cortante máximo.
- **Intersecciones con el eje $\sigma$:** esfuerzos principales $\sigma_1$ y $\sigma_2$.
- **Extremos verticales del círculo:** valores $+\tau_{\max}$ y $-\tau_{\max}$.
- **Puntos correspondientes a caras perpendiculares:** posiciones relacionadas por un diámetro del círculo.
- **Ángulo central $2\phi$:** corresponde al doble del ángulo físico utilizado en la transformación de esfuerzos.

De las relaciones anteriores se obtiene:

$$
R=\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^{2}}
$$

$$
\sigma_1=\sigma_{\mathrm{prom}}+R
$$

$$
\sigma_2=\sigma_{\mathrm{prom}}-R
$$

$$
\tau_{\max,\mathrm{plano}}=R
$$

**Aclaración didáctica.** La separación angular de $2\phi$ permite localizar gráficamente los esfuerzos de una sección inclinada. Debe respetarse el sentido de los signos para $\tau$ adoptado en el dibujo, ya que diferentes convenciones gráficas pueden invertir la orientación del eje de cortantes.

## 2. Esfuerzo tridimensional general

### 2.1. Estado general de esfuerzos

En un estado tridimensional, el esfuerzo puede variar en tres direcciones. Las componentes normales son $\sigma_x$, $\sigma_y$ y $\sigma_z$, mientras que las componentes cortantes se expresan mediante $\tau_{xy}$, $\tau_{yz}$ y $\tau_{zx}$.

**Aclaración didáctica.** El estado de esfuerzos se representa mediante un tensor simétrico cuando se cumple el equilibrio de momentos del continuo:

$$
\boldsymbol{\sigma}=\begin{bmatrix}
\sigma_x & \tau_{xy} & \tau_{zx}\\
\tau_{xy} & \sigma_y & \tau_{yz}\\
\tau_{zx} & \tau_{yz} & \sigma_z
\end{bmatrix}
$$

El problema de determinar los esfuerzos principales equivale a hallar los autovalores de esta matriz.

### 2.2. Círculos de Mohr tridimensionales

![Tres círculos de Mohr para esfuerzos principales tridimensionales y elemento con esfuerzos normales y tangenciales sobre plano inclinado](resistencia_esfuerzos_figura_04.jpg)

*Figura 2.1. Los tres círculos de Mohr correspondientes a $\sigma_1$, $\sigma_2$ y $\sigma_3$, y representación de esfuerzos sobre un plano. Fuente: material original, página 6.*

En el estado tridimensional existen tres círculos de Mohr, uno por cada pareja de esfuerzos principales. Su disposición muestra que la mayor diferencia entre esfuerzos principales produce el mayor cortante.

### 2.3. Ecuación característica de los esfuerzos principales

El documento establece que las direcciones y magnitudes principales se obtienen a partir de un problema de autovalores cuyo polinomio característico es:

$$
\begin{aligned}
0={}&\sigma^3-(\sigma_x+\sigma_y+\sigma_z)\sigma^2\\
&+(\sigma_x\sigma_y+\sigma_x\sigma_z+\sigma_y\sigma_z
-\tau_{xy}^{2}-\tau_{yz}^{2}-\tau_{zx}^{2})\sigma\\
&-(\sigma_x\sigma_y\sigma_z
+2\tau_{xy}\tau_{yz}\tau_{zx}
-\sigma_x\tau_{yz}^{2}
-\sigma_y\tau_{zx}^{2}
-\sigma_z\tau_{xy}^{2})
\end{aligned}
$$

Las tres raíces reales de este polinomio corresponden a los esfuerzos principales $\sigma_1$, $\sigma_2$ y $\sigma_3$.

### 2.4. Esfuerzos cortantes asociados a los planos principales

Para el orden convencional $\sigma_1\ge\sigma_2\ge\sigma_3$, las magnitudes de los cortantes máximos asociados a cada par son:

$$
\tau_{1/2}=\frac{\sigma_1-\sigma_2}{2}
$$

$$
\tau_{2/3}=\frac{\sigma_2-\sigma_3}{2}
$$

$$
\tau_{1/3}=\frac{\sigma_1-\sigma_3}{2}
$$

Por ello, el cortante máximo absoluto del estado tridimensional es:

$$
\boxed{\tau_{\max}=\frac{\sigma_1-\sigma_3}{2}}
$$

## 3. Fallas en elementos mecánicos

### 3.1. Integridad y falla de componentes

La integridad de un elemento mecánico depende, en términos generales, de factores **mecánicos, termodinámicos, químicos y físicos**, entre otros. Las fallas pueden producirse bajo diferentes condiciones de servicio y comprometer el funcionamiento y la seguridad de los equipos.

![Eje de dirección metálico fracturado mostrado como ejemplo de falla mecánica](resistencia_esfuerzos_figura_05.jpg)

*Figura 3.1. Caso de rotura de un eje de dirección. Fuente: material original, página 7.*

La imagen muestra un eje fracturado. El documento presenta esta rotura como ejemplo de falla de un elemento mecánico, sin identificar en el texto la causa específica de la fractura.

### 3.2. Ejemplo de falla: incidente del Airbus A380

El material menciona el incidente del **Airbus A380 del 4 de noviembre de 2010**, ocasionado por la falla de uno de sus motores. En concreto, se describe una **falla no contenida de un disco de la turbina de presión intermedia**.

Según el texto, las secciones rotas del disco penetraron el ala izquierda y produjeron daños estructurales adicionales en la aeronave.

![Fragmento de disco de turbina con zonas de agrietamiento por fatiga y daños asociados](resistencia_esfuerzos_figura_06.jpg)

*Figura 3.2. Componente dañado de un motor del Airbus A380, con indicaciones de agrietamiento por fatiga y contrataladro desalineado. Fuente indicada en el material original: informe ATSB; página 7.*

En la fotografía original se distinguen anotaciones que señalan una región de **agrietamiento por fatiga** (*fatigue cracking*) y un **contrataladro desalineado** (*misaligned counter-bore*). Estas etiquetas permiten relacionar el aspecto de la pieza con el estudio de fallas, aunque el documento no desarrolla una investigación adicional sobre el mecanismo de fractura.

## 4. Criterio del esfuerzo cortante máximo: Tresca

### 4.1. Principio del criterio

El **criterio del esfuerzo cortante máximo**, también conocido como **criterio de Tresca**, establece que un metal alcanza la fluencia cuando el esfuerzo cortante máximo en el estado de esfuerzos considerado iguala al cortante máximo presente durante un ensayo de tensión uniaxial al inicio de la fluencia.

En el ensayo uniaxial de referencia, el esfuerzo normal de fluencia se representa por $S_y$ o $\sigma_y$.

Para esfuerzos principales ordenados en forma descendente,

$$
\sigma_1\ge\sigma_2\ge\sigma_3
$$

el esfuerzo cortante máximo es:

$$
\tau_{\max}=\frac{\sigma_1-\sigma_3}{2}
$$

El esfuerzo cortante máximo del estado uniaxial de fluencia es:

$$
\tau_{\mathrm{fluencia}}=\frac{S_y}{2}
$$

La condición de inicio de fluencia según Tresca resulta:

$$
\boxed{\frac{\sigma_1-\sigma_3}{2}=\frac{S_y}{2}}
$$

O, de forma equivalente:

$$
\boxed{\sigma_1-\sigma_3=S_y}
$$

**Observación sobre la fuente.** La página 8 indica el orden $\sigma_1<\sigma_2<\sigma_3$, pero escribe simultáneamente $\tau=(\sigma_1-\sigma_3)/2$. Esa diferencia sería negativa con el orden indicado. Para mantener el significado de *magnitud máxima del esfuerzo cortante*, se usa en este apartado el orden descendente o, de manera general, la expresión $\tau_{\max}=(\sigma_{\max}-\sigma_{\min})/2$.

### 4.2. Representación gráfica en esfuerzo plano

![Esquema de estados de esfuerzo principales por cuadrantes y fronteras de fluencia del criterio de Tresca](resistencia_esfuerzos_figura_07.jpg)

*Figura 4.1. Diagrama de estados de esfuerzo plano, identificación de los esfuerzos principales y límites de fluencia. Fuente: material original, página 8.*

La ilustración distribuye diferentes estados de signos de los esfuerzos principales en el plano $\sigma_A$–$\sigma_B$. En los esquemas laterales se muestran pequeños círculos de Mohr que ayudan a identificar las tensiones de tracción y compresión en cada cuadrante.

![Región hexagonal de seguridad del criterio de Tresca con casos de carga y trayectoria de esfuerzos](resistencia_esfuerzos_figura_08.jpg)

*Figura 4.2. Región sin falla para el criterio de Tresca, con línea de carga y casos identificados en el gráfico. Fuente: material original, página 9.*

En la segunda ilustración, la **región sombreada** representa las combinaciones de esfuerzos que no alcanzan el límite de fluencia. El contorno constituye la frontera del criterio y la zona externa corresponde a estados que provocan fluencia según Tresca.

Los ejes son los esfuerzos principales $\sigma_A$ y $\sigma_B$; se señalan los valores $+S_y$ y $-S_y$, las zonas de frontera denominadas **caso 1**, **caso 2** y **caso 3**, y una línea de carga que parte del origen y pasa por los puntos $a$ y $b$.

**Aclaración didáctica.** En estado plano, el tercer esfuerzo principal es cero y el criterio puede escribirse sin ordenar previamente todas las tensiones:

$$
\boxed{\max\left(\left|\sigma_A-\sigma_B\right|,\,\left|\sigma_A\right|,\,\left|\sigma_B\right|\right)=S_y}
$$

La representación equivalente de la zona sin fluencia es:

$$
\max\left(\left|\sigma_A-\sigma_B\right|,\,\left|\sigma_A\right|,\,\left|\sigma_B\right|\right)<S_y
$$

La línea de carga muestra cómo un estado tensional puede desplazarse desde un punto interior hasta el contorno de fluencia cuando aumentan las cargas de servicio.

## 5. Criterio de la energía de deformación

### 5.1. Descomposición del estado de esfuerzos

El criterio de la energía de deformación parte de separar el estado de esfuerzos principales en dos contribuciones:

1. Una **componente hidrostática**, vinculada con la variación de volumen.
2. Una **componente desviadora**, vinculada con el cambio de forma o distorsión.

![Descomposición de un estado triaxial de tensiones en componente hidrostática y componente desviadora](resistencia_esfuerzos_figura_09.jpg)

*Figura 5.1. Descomposición de los esfuerzos triaxiales en esfuerzo promedio y desviaciones respecto del promedio. Fuente: material original, página 10.*

La primera ilustración muestra un elemento sometido a tres esfuerzos principales $\sigma_1$, $\sigma_2$ y $\sigma_3$. Este estado se representa como la suma de una distribución uniforme de esfuerzo promedio y otra formada por las diferencias entre cada esfuerzo principal y dicho promedio.

![Comparación conceptual entre deformación volumétrica y distorsión de un elemento cúbico](resistencia_esfuerzos_figura_10.jpg)

*Figura 5.2. Separación conceptual entre deformación volumétrica y distorsión de un cuerpo. Fuente: material original, página 10.*

En la segunda ilustración, una deformación volumétrica cambia el tamaño del elemento, mientras que una deformación distorsional modifica su forma. Esta separación es la base para identificar la parte de la energía elástica asociada con la distorsión.

### 5.2. Energía elástica de deformación

La energía de deformación elástica por unidad de volumen se denota por $u$. En un estado expresado mediante los esfuerzos principales y sus deformaciones correspondientes, se escribe:

$$
\boxed{u=\frac{1}{2}(\sigma_{11}\varepsilon_{11}+\sigma_{22}\varepsilon_{22}+\sigma_{33}\varepsilon_{33})}
$$

Aquí:

- $\sigma_{11}$, $\sigma_{22}$ y $\sigma_{33}$ son los esfuerzos normales en las direcciones principales.
- $\varepsilon_{11}$, $\varepsilon_{22}$ y $\varepsilon_{33}$ son sus respectivas deformaciones normales.
- $u$ representa la energía de deformación por unidad de volumen.

**Observación sobre la fuente.** En la primera ecuación de la página 10 figura el término $\sigma_{12}\varepsilon_{12}$ en lugar de $\sigma_{33}\varepsilon_{33}$. Las expresiones posteriores de esa misma sección utilizan las tres deformaciones normales. Por consistencia con el desarrollo de energía triaxial, la relación principal se ha escrito con el índice $33$; la discrepancia del documento queda aquí identificada.

### 5.3. Deformaciones asociadas a los esfuerzos normales

Para un material elástico lineal e isótropo, las relaciones entre esfuerzos principales y deformaciones normales son:

$$
\varepsilon_{11}=\frac{\sigma_{11}}{E}-\frac{\mu\sigma_{22}}{E}-\frac{\mu\sigma_{33}}{E}
$$

$$
\varepsilon_{22}=-\frac{\mu\sigma_{11}}{E}+\frac{\sigma_{22}}{E}-\frac{\mu\sigma_{33}}{E}
$$

$$
\varepsilon_{33}=-\frac{\mu\sigma_{11}}{E}-\frac{\mu\sigma_{22}}{E}+\frac{\sigma_{33}}{E}
$$

Donde $E$ es el **módulo de elasticidad** o módulo de Young, y $\mu$ representa el **coeficiente de Poisson**, siguiendo la notación del material.

**Aclaración didáctica.** Estas ecuaciones expresan que una tensión aplicada en una dirección modifica la deformación de esa dirección y también influye sobre las deformaciones transversales mediante el coeficiente de Poisson.

### 5.4. Sustitución de las relaciones constitutivas

Multiplicando cada deformación por el esfuerzo normal correspondiente, se obtiene:

$$
\sigma_{11}\varepsilon_{11}
=\frac{\sigma_{11}^{2}}{E}
-\frac{\mu}{E}\sigma_{11}\sigma_{22}
-\frac{\mu}{E}\sigma_{11}\sigma_{33}
$$

$$
\sigma_{22}\varepsilon_{22}
=-\frac{\mu}{E}\sigma_{11}\sigma_{22}
+\frac{\sigma_{22}^{2}}{E}
-\frac{\mu}{E}\sigma_{22}\sigma_{33}
$$

$$
\sigma_{33}\varepsilon_{33}
=-\frac{\mu}{E}\sigma_{11}\sigma_{33}
-\frac{\mu}{E}\sigma_{22}\sigma_{33}
+\frac{\sigma_{33}^{2}}{E}
$$

**Observación sobre la fuente.** En la página 11 aparecen errores de índices en el último producto ($\sigma_{12}\sigma_{33}$) y en una de las expresiones reorganizadas de $u$. Las tres multiplicaciones anteriores presentan la correspondencia entre componentes que se deduce de las ecuaciones de deformación de la página 10, conservando la metodología indicada.

Sumando las tres contribuciones, el contenido algebraico previo a multiplicar por $1/2$ es:

$$
\begin{aligned}
\sigma_{11}\varepsilon_{11}
+\sigma_{22}\varepsilon_{22}
+\sigma_{33}\varepsilon_{33}
={}&\frac{1}{E}(\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2})\\
&-\frac{2\mu}{E}(\sigma_{11}\sigma_{22}+\sigma_{22}\sigma_{33}+\sigma_{11}\sigma_{33})
\end{aligned}
$$

Por tanto, la energía de deformación es:

$$
\boxed{u=\frac{1}{2E}\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}-2\mu(\sigma_{11}\sigma_{22}+\sigma_{22}\sigma_{33}+\sigma_{11}\sigma_{33})\right]}
$$

Esta es la expresión general para la energía elástica de deformación asociada con los tres esfuerzos principales.

**Observación sobre la fuente.** La primera igualdad de energía de la página 11 no incorpora el factor $1/2$, aunque la siguiente línea sí lo presenta. También se observan subíndices cruzados en la última igualdad. En esta transcripción se conserva el orden del razonamiento y se presenta explícitamente la fórmula consistente con la definición inicial de energía.

### 5.5. Componente volumétrica de la energía

La componente volumétrica se obtiene considerando únicamente el esfuerzo normal promedio. Para un estado hidrostático:

$$
\sigma_{11}=\sigma_{22}=\sigma_{33}=\overline{\sigma}
$$

La ecuación de energía queda:

$$
\begin{aligned}
u_v&=\frac{1}{2E}\left(3\overline{\sigma}^{2}-6\mu\overline{\sigma}^{2}\right)\\
&=\frac{3(1-2\mu)}{2E}\overline{\sigma}^{2}
\end{aligned}
$$

El esfuerzo promedio del estado triaxial se define como:

$$
\boxed{\overline{\sigma}=\frac{\sigma_1+\sigma_2+\sigma_3}{3}}
$$

Al sustituir este promedio en la expresión de $u_v$:

$$
u_v=\frac{3(1-2\mu)}{2E}
\left(\frac{\sigma_1+\sigma_2+\sigma_3}{3}\right)^2
$$

Desarrollando el cuadrado:

$$
(\sigma_1+\sigma_2+\sigma_3)^2=
\sigma_1^2+\sigma_2^2+\sigma_3^2
+2\sigma_1\sigma_2+2\sigma_2\sigma_3+2\sigma_3\sigma_1
$$

Por consiguiente:

$$
\boxed{u_v=\frac{1-2\mu}{6E}\left(\sigma_1^2+\sigma_2^2+\sigma_3^2+2\sigma_1\sigma_2+2\sigma_2\sigma_3+2\sigma_3\sigma_1\right)}
$$

Esta energía representa la contribución del cambio de volumen al total de la energía elástica almacenada.

### 5.6. Obtención de la energía de distorsión

El documento desarrolla la energía de distorsión restando la contribución volumétrica a la energía total:

$$
\boxed{u_d=u-u_v}
$$

Sustituyendo las expresiones anteriores:

$$
\begin{aligned}
u_d={}&\frac{1}{2E}\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}
-2\mu(\sigma_{11}\sigma_{22}+\sigma_{11}\sigma_{33}+\sigma_{22}\sigma_{33})\right]\\
&-\frac{1-2\mu}{6E}\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}
+2\sigma_{11}\sigma_{22}+2\sigma_{11}\sigma_{33}+2\sigma_{22}\sigma_{33}\right]
\end{aligned}
$$

Para reunir los términos semejantes se utiliza el denominador común $6E$.

#### 5.6.1. Agrupación de los términos cruzados

Por ejemplo, el término en $\sigma_{11}\sigma_{22}$ tiene como coeficiente:

$$
-6\mu-2(1-2\mu)=-6\mu-2+4\mu
$$

Por lo tanto:

$$
-6\mu-2+4\mu=-2-2\mu=-2(1+\mu)
$$

La misma relación se aplica a los productos $\sigma_{11}\sigma_{33}$ y $\sigma_{22}\sigma_{33}$.

#### 5.6.2. Agrupación de los términos cuadrados

Para el término $\sigma_{11}^{2}$, el numerador es:

$$
3\sigma_{11}^{2}-(1-2\mu)\sigma_{11}^{2}
$$

Distribuyendo y agrupando:

$$
\begin{aligned}
3\sigma_{11}^{2}-\sigma_{11}^{2}+2\mu\sigma_{11}^{2}
&=2\sigma_{11}^{2}+2\mu\sigma_{11}^{2}\\
&=2(1+\mu)\sigma_{11}^{2}
\end{aligned}
$$

La misma operación se repite para $\sigma_{22}^{2}$ y $\sigma_{33}^{2}$.

**Observación sobre la fuente.** En una línea intermedia de la página 12 aparece $3\sigma_{11}^{2}-\sigma_{11}+2\mu\sigma_{11}^{2}$. La potencia del término central no coincide con la línea anterior ni con la siguiente; la agrupación escrita arriba mantiene el exponente cuadrático.

#### 5.6.3. Expresión simplificada

Al reunir todos los términos, se obtiene:

$$
\boxed{u_d=\frac{2(1+\mu)}{6E}\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}-\sigma_{11}\sigma_{22}-\sigma_{11}\sigma_{33}-\sigma_{22}\sigma_{33}\right]}
$$

La expresión anterior también puede escribirse:

$$
u_d=\frac{1+\mu}{3E}\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}-\sigma_{11}\sigma_{22}-\sigma_{11}\sigma_{33}-\sigma_{22}\sigma_{33}\right]
$$

### 5.7. Identidades algebraicas y expresión final

Para expresar $u_d$ en función de diferencias entre esfuerzos principales, se utilizan estas identidades:

$$
(\sigma_{11}-\sigma_{22})^{2}=\sigma_{11}^{2}+\sigma_{22}^{2}-2\sigma_{11}\sigma_{22}
$$

$$
(\sigma_{22}-\sigma_{33})^{2}=\sigma_{22}^{2}+\sigma_{33}^{2}-2\sigma_{22}\sigma_{33}
$$

$$
(\sigma_{11}-\sigma_{33})^{2}=\sigma_{11}^{2}+\sigma_{33}^{2}-2\sigma_{11}\sigma_{33}
$$

Al sumarlas:

$$
\begin{aligned}
&(\sigma_{11}-\sigma_{22})^{2}+(\sigma_{22}-\sigma_{33})^{2}+(\sigma_{11}-\sigma_{33})^{2}\\
&\qquad=2\left[\sigma_{11}^{2}+\sigma_{22}^{2}+\sigma_{33}^{2}-\sigma_{11}\sigma_{22}-\sigma_{22}\sigma_{33}-\sigma_{11}\sigma_{33}\right]
\end{aligned}
$$

Sustituyendo esta identidad se obtiene la fórmula final desarrollada en el material:

$$
\boxed{u_d=\frac{1+\mu}{6E}\left[(\sigma_{11}-\sigma_{22})^{2}+(\sigma_{22}-\sigma_{33})^{2}+(\sigma_{11}-\sigma_{33})^{2}\right]}
$$

La energía de distorsión depende, por tanto, de las diferencias entre esfuerzos principales y no solo de sus valores individuales.

### 5.8. Interpretación gráfica y comparación con resultados experimentales

![Regiones de fluencia según energía de distorsión ED y esfuerzo cortante máximo ECM en el plano de esfuerzos principales](resistencia_esfuerzos_figura_11.jpg)

*Figura 5.3. Comparación entre las fronteras de fluencia por energía de distorsión (ED, curva continua) y esfuerzo cortante máximo (ECM, línea discontinua). Fuente: material original, página 13.*

La ilustración presenta dos regiones de seguridad en el espacio de esfuerzos principales $\sigma_A$ y $\sigma_B$:

- El criterio de **energía de distorsión (ED)** corresponde a una frontera curva.
- El criterio de **esfuerzo cortante máximo (ECM)** corresponde a una frontera poligonal.
- La zona interior representa combinaciones de tensiones que todavía no han alcanzado la fluencia.
- Se incluye una línea de **cortante puro**, asociada con $\sigma_A=-\sigma_B=\tau$.

![Comparación experimental de la fluencia de aceros y aluminios con criterios de energía de distorsión y cortante máximo](resistencia_esfuerzos_figura_12.jpg)

*Figura 5.4. Comparación de curvas de fluencia teóricas con puntos experimentales de aceros y aleaciones de aluminio. Fuente: material original, página 13.*

La segunda gráfica representa estados biaxiales normalizados y presenta resultados experimentales identificados en su leyenda para **acero Ni-Cr-Mo**, **acero AISI 1023**, **aluminio 2024-T4** y **aluminio 3S-H**. Los puntos permiten comparar la correspondencia de los criterios con el comportamiento observado.

**Aclaración didáctica.** El criterio de energía de distorsión se relaciona con el criterio de **von Mises**. El esfuerzo equivalente correspondiente se expresa como:

$$
\sigma_{\mathrm{VM}}=\sqrt{\frac{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}{2}}
$$

La igualdad de $\sigma_{\mathrm{VM}}$ con $S_y$ define el inicio de fluencia según este criterio:

$$
\boxed{\sigma_{\mathrm{VM}}=S_y}
$$

La última ecuación y su denominación como esfuerzo equivalente son una aclaración deducida de la expresión de energía, no una ecuación explícita de las páginas 10 a 13.

## 6. Criterio del esfuerzo octaédrico

### 6.1. Representación del plano octaédrico

En el estado tridimensional, el material introduce el **criterio del esfuerzo octaédrico** mediante un octaedro orientado respecto de las direcciones principales.

![Octaedro de esfuerzos principales con esfuerzo normal promedio y esfuerzo cortante octaédrico](resistencia_esfuerzos_figura_13.jpg)

*Figura 6.1. Plano octaédrico y componentes de esfuerzo $\sigma_{\mathrm{av}}$ y $\tau_{\mathrm{oct}}$ en un sistema de esfuerzos principales. Fuente: material original, página 15.*

Los ejes del gráfico corresponden a $\sigma_1$, $\sigma_2$ y $\sigma_3$. Sobre un plano inclinado del octaedro aparecen un esfuerzo normal promedio $\sigma_{\mathrm{av}}$ y un esfuerzo cortante octaédrico $\tau_{\mathrm{oct}}$.

### 6.2. Esfuerzo cortante octaédrico

El esfuerzo cortante octaédrico se define mediante las diferencias entre esfuerzos principales:

$$
\boxed{\tau_{\mathrm{oct}}=\frac{1}{3}\sqrt{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}}
$$

Esta fórmula representa el estado de esfuerzos cortantes que aparece sobre los planos octaédricos.

### 6.3. Calibración mediante un ensayo uniaxial

Para un ensayo uniaxial que alcanza el límite de fluencia, se considera:

$$
\sigma_1=S_y
$$

$$
\sigma_2=\sigma_3=0
$$

Al sustituirlo en la definición del cortante octaédrico:

$$
\tau_{\mathrm{oct}}=\frac{1}{3}\sqrt{S_y^{2}+0+S_y^{2}}
$$

Por tanto:

$$
\boxed{\tau_{\mathrm{oct}}=\frac{\sqrt{2}}{3}S_y}
$$

### 6.4. Condición de falla

La condición de falla indicada en el documento es:

$$
\boxed{\left[\frac{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}{2}\right]^{1/2}\geq S_y}
$$

El lado izquierdo corresponde a la expresión de esfuerzo equivalente que aparece también en el estudio de la energía de distorsión.

**Aclaración didáctica.** El criterio de esfuerzo octaédrico y el criterio de energía de distorsión conducen al mismo límite de fluencia para el modelo considerado, aunque parten de magnitudes físicas distintas: uno utiliza el esfuerzo cortante sobre un plano octaédrico y el otro utiliza la energía distorsional almacenada.

## 7. Criterio de falla de Mohr

### 7.1. Fundamento del criterio

El **criterio de falla de Mohr** permite describir una envolvente de falla en el plano de esfuerzo normal y esfuerzo cortante, o bien en el espacio de esfuerzos principales.

La motivación presentada en el material es que la resistencia de ciertos materiales puede ser distinta bajo **tracción**, **compresión** y **cortante**. Por ello, la primera formulación considera tres parámetros experimentales:

1. **Esfuerzo de tracción a la fluencia**, $\sigma_t$.
2. **Esfuerzo de compresión a la fluencia**, $\sigma_c$, que puede diferir del correspondiente a tracción.
3. **Esfuerzo cortante a la fluencia**, $\tau_y$.

El criterio busca definir un límite que represente las diferentes combinaciones de carga que pueden producir falla.

### 7.2. Estados de ensayo y circunferencias de Mohr

Al graficar en un plano con eje horizontal $\sigma$ y vertical $\tau$ los estados tensionales de los ensayos, aparecen circunferencias características:

- El **ensayo uniaxial de tracción** produce una circunferencia que intercepta el eje normal en el valor positivo $\sigma_t$.
- El **ensayo uniaxial de compresión** produce una circunferencia que se extiende hacia valores negativos de $\sigma$ y está asociada con $\sigma_c$.
- El **ensayo de cortante puro** produce una circunferencia ubicada entre las anteriores, con amplitud vinculada a $\tau_y$.

**Aclaración didáctica.** Las posiciones del centro y del radio de los dos círculos de ensayo uniaxial pueden escribirse:

$$
C_t=\frac{\sigma_t}{2},\qquad R_t=\frac{\sigma_t}{2}
$$

$$
C_c=-\frac{\sigma_c}{2},\qquad R_c=\frac{\sigma_c}{2}
$$

Estas expresiones utilizan $\sigma_c$ como **magnitud positiva** de la resistencia a compresión. El centro del círculo correspondiente está en el lado negativo del eje horizontal.

### 7.3. Envolvente de falla de Mohr

![Tres circunferencias de Mohr para tracción compresión y cortante junto con las curvas envolventes de falla](resistencia_esfuerzos_figura_14.jpg)

*Figura 7.1. Curva de falla de Mohr obtenida a partir de círculos asociados a estados de tracción, compresión y cortante. Fuente: material original, página 17.*

En la figura, las curvas de falla constituyen una **envolvente** de los estados límites. Los puntos $A$, $B$, $C$, $D$ y $E$ ayudan a definir su contorno.

El documento explica que un estado triaxial conduce a falla si su círculo de Mohr alcanza la curva de falla definida experimentalmente, es decir, si se vuelve **tangente a la envolvente**.

La interpretación física es que los estados cuyos círculos permanecen dentro de la envolvente aún no llegan al límite descrito por el criterio, mientras que el contacto con esa envolvente representa la condición límite.

## 8. Criterio de falla de Mohr-Coulomb

### 8.1. Versión simplificada del criterio de Mohr

El material desarrolla una versión simplificada, denominada **criterio de Mohr-Coulomb**, construida a partir de los resultados de dos ensayos uniaxiales:

1. Ensayo de tracción hasta el valor límite $\sigma_t$.
2. Ensayo de compresión hasta el valor límite $\sigma_c$.

El modelo utiliza rectas tangentes a las circunferencias de Mohr correspondientes a ambos ensayos, definiendo las **líneas de falla de Mohr-Coulomb**.

### 8.2. Construcción geométrica de las tangentes

![Circunferencias de tracción compresión y estado intermedio con puntos de tangencia a la línea de falla Mohr-Coulomb](resistencia_esfuerzos_figura_15.jpg)

*Figura 8.1. Construcción de la línea de falla de Mohr-Coulomb por tangencia a los círculos de tracción y compresión. Fuente: material original, página 18.*

En la construcción se indican:

- Los centros $C_1$, $C_2$ y $C_3$ de las circunferencias de Mohr.
- Los puntos de tangencia $B_1$, $B_2$ y $B_3$.
- Los valores límites $S_t$ y $S_c$ correspondientes a los ensayos de tracción y compresión.
- El punto $O$, donde se intersectan las prolongaciones de las tangentes.
- La región delimitada por las tangentes superior e inferior, simétricas respecto del eje $\sigma$.

Según el documento, el estado tensional llega al límite cuando su círculo de Mohr es tangente a las líneas de falla.

### 8.3. Relación geométrica entre radios y centros

Utilizando las semejanzas geométricas de los segmentos indicados en la figura, el material escribe:

$$
\frac{B_2C_2-B_1C_1}{OC_2-OC_1}
=\frac{B_3C_3-B_1C_1}{OC_3-OC_1}
$$

De manera equivalente, mediante las distancias entre centros:

$$
\frac{B_2C_2-B_1C_1}{C_1C_2}
=\frac{B_3C_3-B_1C_1}{C_1C_3}
$$

Los radios considerados son:

$$
B_1C_1=\frac{S_t}{2}
$$

$$
B_2C_2=\frac{\sigma_1-\sigma_3}{2}
$$

$$
B_3C_3=\frac{S_c}{2}
$$

Donde $\sigma_1$ y $\sigma_3$ representan respectivamente los esfuerzos principales máximo y mínimo en la combinación de carga analizada.

### 8.4. Deducción de la ecuación de Mohr-Coulomb

La página 19 sustituye los valores geométricos de radios y centros en la igualdad anterior:

$$
\frac{\dfrac{\sigma_1-\sigma_3}{2}-\dfrac{S_t}{2}}
{\dfrac{S_t}{2}-\dfrac{\sigma_1+\sigma_3}{2}}
=
\frac{\dfrac{S_c}{2}-\dfrac{S_t}{2}}
{\dfrac{S_t}{2}+\dfrac{S_c}{2}}
$$

Simplificando la expresión se obtiene la ecuación lineal de falla:

$$
\boxed{\frac{\sigma_1}{S_t}-\frac{\sigma_3}{S_c}=1}
$$

Esta relación corresponde al caso en que el mayor esfuerzo principal es de tracción y el menor es de compresión, tomando $S_t$ y $S_c$ como magnitudes positivas.

**Aclaración didáctica.** La igualdad caracteriza el inicio de falla según el modelo. Si se introduce un factor de seguridad $n$ para una condición de diseño con la misma relación de cargas, la forma correspondiente es:

$$
\frac{\sigma_1}{S_t}-\frac{\sigma_3}{S_c}=\frac{1}{n}
$$

Esta última expresión con $n$ no aparece explícitamente en la deducción de la página 19, aunque el factor de seguridad se utiliza después en los criterios para materiales frágiles.

### 8.5. Región de seguridad en estado plano

El material introduce el estado plano mediante la ordenación:

$$
\sigma_A\geq\sigma_B
$$

Y presenta, como caso particular:

$$
\sigma_A\geq\sigma_B\geq 0
$$

![Región poligonal sin falla del criterio de Mohr-Coulomb en ejes de esfuerzos principales](resistencia_esfuerzos_figura_16.jpg)

*Figura 8.2. Región sin falla en el plano $\sigma_A$–$\sigma_B$, con límites de tracción $S_t$ y compresión $S_c$. Fuente: material original, página 19.*

La zona sombreada representa los estados admisibles según el criterio. En el primer cuadrante el límite se relaciona con la resistencia a tracción; en el tercero, con la resistencia a compresión; las regiones de combinación de tracción y compresión están delimitadas por segmentos inclinados.

## 9. Criterios de falla para materiales frágiles

### 9.1. Teoría del esfuerzo normal máximo

Uno de los criterios más sencillos para describir la falla de un material frágil es la **teoría del esfuerzo normal máximo**. El principio expuesto en el material establece que la falla ocurre cuando se cumple alguna de las condiciones siguientes:

- El esfuerzo normal máximo alcanza la **resistencia última a tracción**.
- El esfuerzo normal mínimo alcanza la **resistencia última a compresión**.

Para un estado tridimensional, los esfuerzos principales se ordenan de forma descendente:

$$
\sigma_1\geq\sigma_2\geq\sigma_3
$$

Se utilizan las siguientes magnitudes:

- $S_{ut}$: resistencia última a tracción.
- $S_{uc}$: magnitud positiva de la resistencia última a compresión.

La condición de falla por tracción es:

$$
\boxed{\sigma_1\geq S_{ut}}
$$

La condición de falla por compresión es:

$$
\boxed{\sigma_3\leq -S_{uc}}
$$

Por tanto, el material presenta la falla como una condición alternativa:

$$
\boxed{\sigma_1\geq S_{ut}\qquad\text{o}\qquad\sigma_3\leq -S_{uc}}
$$

Para el estado plano de esfuerzos, con $\sigma_A$ y $\sigma_B$ como esfuerzos principales del plano, la misma idea se representa mediante:

$$
\sigma_A\geq S_{ut}\qquad\text{o}\qquad\sigma_B\leq-S_{uc}
$$

**Aclaración didáctica.** En una formulación general de estado plano conviene comprobar las tensiones extremas considerando también la tensión fuera del plano, igual a cero. Así, las condiciones se interpretan sobre el máximo y el mínimo del conjunto de esfuerzos principales.

### 9.2. Región de seguridad del esfuerzo normal máximo

![Región rectangular sombreada de seguridad por esfuerzo normal máximo con límites Sut y Suc](resistencia_esfuerzos_figura_17.jpg)

*Figura 9.1. Región sin falla según la teoría del esfuerzo normal máximo para materiales frágiles. Fuente: material original, página 20.*

El gráfico presenta una región sombreada limitada por los valores de tracción y compresión. Su contorno representa el **límite de resistencia** y los puntos interiores corresponden a estados que no han alcanzado el criterio de falla.

El documento describe esta región como un cuadrado. **Observación geométrica:** si $S_{ut}$ y $S_{uc}$ son diferentes, la región tiene forma rectangular en un sistema de ejes con la misma escala. Solamente sería un cuadrado si las magnitudes de resistencia a tracción y compresión fueran iguales.

### 9.3. Factor de seguridad

La página 20 incluye una relación de factor de seguridad para el límite de tracción:

$$
\boxed{n=\frac{S_{ut}}{\sigma_A}}
$$

La página 21 presenta para el límite de compresión:

$$
n=\frac{S_{uc}}{\sigma_B}
$$

**Observación sobre la fuente.** Cuando $\sigma_B$ es un esfuerzo principal de compresión y, por tanto, negativo, la expresión literal de la segunda relación produciría un factor de seguridad negativo. Para interpretar $n$ como un valor positivo se emplea la magnitud de la tensión de compresión:

$$
\boxed{n=\frac{S_{uc}}{|\sigma_B|}}
$$

Las relaciones anteriores se aplican a los casos en que la respectiva tracción o compresión gobierna la condición límite.

### 9.4. Criterio de Mohr aplicado a materiales frágiles

El material señala que el criterio de Mohr para materiales frágiles tiene la misma base conceptual que el criterio estudiado antes, pero puede describir mejor algunos datos experimentales que la teoría del esfuerzo normal máximo.

No obstante, el documento aclara que **ninguno de los criterios proporciona una correlación exacta** con todos los resultados de laboratorio.

Para formular los límites con un factor de seguridad $n$, se utilizan $S_{ut}$ y $S_{uc}$, así como los esfuerzos principales $\sigma_A$ y $\sigma_B$ ordenados de mayor a menor.

#### 9.4.1. Primer caso: ambos esfuerzos principales de tracción

Si:

$$
\sigma_A\geq\sigma_B\geq0
$$

el límite queda determinado por:

$$
\boxed{\sigma_A=\frac{S_{ut}}{n}}
$$

#### 9.4.2. Segundo caso: tracción y compresión combinadas

Si:

$$
\sigma_A\geq0\geq\sigma_B
$$

la relación presentada en el documento es:

$$
\boxed{\frac{\sigma_A}{S_{ut}}-\frac{\sigma_B}{S_{uc}}=\frac{1}{n}}
$$

Esta es la forma lineal del límite de Mohr-Coulomb cuando los esfuerzos principales de referencia tienen signos opuestos.

#### 9.4.3. Tercer caso: ambos esfuerzos principales de compresión

Si:

$$
0\geq\sigma_A\geq\sigma_B
$$

la condición límite se establece mediante:

$$
\boxed{\sigma_B=-\frac{S_{uc}}{n}}
$$

**Aclaración didáctica.** Los tres casos muestran que el límite depende del signo de los esfuerzos principales: tracción, combinación de tracción y compresión, o compresión. El factor $n$ permite expresar la frontera de diseño a una proporción de la resistencia última del material.

## 10. Criterio de Mohr-Coulomb modificado

### 10.1. Propósito de la modificación

El material introduce una formulación de **Mohr-Coulomb modificado**, también denominada **Mohr modificado**, para representar de forma diferente la frontera de falla en determinadas zonas del espacio de esfuerzos principales.

La modificación se concentra especialmente en los cuadrantes donde intervienen esfuerzos de signos opuestos. Se añade una región en la cual la condición del esfuerzo normal máximo sigue siendo aplicable antes de pasar a un tramo inclinado de la envolvente de falla.

Para identificar cada región se conservan los esfuerzos principales de estado plano $\sigma_A\geq\sigma_B$ y el factor de seguridad $n$.

### 10.2. Región I: tracción en ambos esfuerzos principales

En el primer cuadrante:

$$
\sigma_A\geq\sigma_B\geq0
$$

el criterio modificado coincide con el límite de esfuerzo normal máximo. La expresión de la frontera es:

$$
\boxed{\sigma_A=\frac{S_{ut}}{n}}
$$

En esta zona, el esfuerzo principal mayor gobierna el comienzo de la falla por tracción.

### 10.3. Región II: tracción y compresión con predominio de la tracción

El documento identifica una zona adicional situada en el cuarto cuadrante. Allí se cumple:

$$
\sigma_A\geq0\geq\sigma_B
$$

Y, además, la magnitud de la compresión no supera la magnitud de la tracción:

$$
|\sigma_B|\leq|\sigma_A|
$$

La condición de dominio se expresa mediante:

$$
\boxed{\sigma_A\geq0\geq\sigma_B\qquad\text{y}\qquad\left|\frac{\sigma_B}{\sigma_A}\right|\leq1}
$$

En esta región continúa gobernando el límite:

$$
\boxed{\sigma_A=\frac{S_{ut}}{n}}
$$

**Aclaración didáctica.** La frontera que separa esta región de la siguiente está dada por $|\sigma_B|=|\sigma_A|$. En el cuarto cuadrante equivale a $\sigma_B=-\sigma_A$, siempre que $\sigma_A>0$. La interpretación mediante el cociente requiere que el denominador no sea cero.

### 10.4. Región III: tracción y compresión con predominio de la compresión

En el cuarto cuadrante, cuando la magnitud de $\sigma_B$ supera a la de $\sigma_A$, se establece:

$$
\sigma_A\geq0\geq\sigma_B
$$

$$
\left|\frac{\sigma_B}{\sigma_A}\right|>1
$$

La ecuación del límite de falla presentada en la página 22 es:

$$
\boxed{\frac{(S_{uc}-S_{ut})\sigma_A}{S_{uc}S_{ut}}-\frac{\sigma_B}{S_{uc}}=\frac{1}{n}}
$$

Esta relación introduce un segmento inclinado que conecta la zona controlada por la resistencia a tracción con la zona dominada por la resistencia a compresión.

**Aclaración didáctica.** Multiplicando ambos miembros por $S_{uc}$ se obtiene una forma algebraicamente equivalente:

$$
\left(\frac{S_{uc}}{S_{ut}}-1\right)\sigma_A-\sigma_B=\frac{S_{uc}}{n}
$$

### 10.5. Región IV: compresión en ambos esfuerzos principales

En el tercer cuadrante, los esfuerzos están ordenados como:

$$
0\geq\sigma_A\geq\sigma_B
$$

El criterio modificado coincide con el límite de compresión de Mohr-Coulomb:

$$
\boxed{\sigma_B=-\frac{S_{uc}}{n}}
$$

El esfuerzo principal de mayor magnitud compresiva determina la frontera en esta región.

### 10.6. Comparación de las expresiones por regiones

Las condiciones anteriores pueden resumirse, sin sustituir las deducciones desarrolladas, de la siguiente manera:

| Región | Condición para los esfuerzos principales | Frontera de diseño |
|---|---|---|
| I. Tracción | $\sigma_A\geq\sigma_B\geq0$ | $\sigma_A=S_{ut}/n$ |
| II. Tracción predominante | $\sigma_A\geq0\geq\sigma_B$, $\lvert\sigma_B\rvert\leq\lvert\sigma_A\rvert$ | $\sigma_A=S_{ut}/n$ |
| III. Compresión predominante | $\sigma_A\geq0\geq\sigma_B$, $\lvert\sigma_B\rvert>\lvert\sigma_A\rvert$ | $\dfrac{(S_{uc}-S_{ut})\sigma_A}{S_{uc}S_{ut}}-\dfrac{\sigma_B}{S_{uc}}=1/n$ |
| IV. Compresión | $0\geq\sigma_A\geq\sigma_B$ | $\sigma_B=-S_{uc}/n$ |

### 10.7. Comparación gráfica con resultados experimentales

El material compara tres criterios para materiales frágiles:

- **Esfuerzo normal máximo.**
- **Mohr-Coulomb.**
- **Mohr modificado.**

También presenta puntos obtenidos mediante ensayos de materiales frágiles para mostrar cómo se aproximan las distintas envolventes a los datos observados.

![Gráfico de comparación de criterios de falla para materiales frágiles con puntos experimentales de hierro fundido gris](resistencia_esfuerzos_figura_18.jpg)

*Figura 10.1. Comparación de fronteras de falla teóricas y datos experimentales de hierro fundido gris. Fuente: material original, página 23.*

En la gráfica se representan los esfuerzos principales $\sigma_A$ y $\sigma_B$, medidos en $\mathrm{MPa}$. La leyenda incluye datos de **hierro fundido gris**. Las distintas curvas o segmentos muestran cómo cambian las predicciones entre el esfuerzo normal máximo, Mohr-Coulomb y Mohr modificado.

El material concluye que la frontera de **Mohr modificado** presenta una tendencia de aproximación a los resultados experimentales mostrados.

## 11. Comparación de criterios y selección según el comportamiento del material

### 11.1. Ejemplo de comparación para hierro fundido gris

![Comparación en esfuerzos principales de Mohr modificado Mohr-Coulomb y esfuerzo normal máximo para hierro fundido gris ASTM clase 30](resistencia_esfuerzos_figura_19.jpg)

*Figura 11.1. Comparación de tres criterios de falla y datos experimentales para hierro fundido gris ASTM núm. 30. Fuente: material original, página 24.*

El último conjunto de gráficas profundiza en la comparación de criterios para un **hierro fundido gris ASTM núm. 30 C.I.** El gráfico indica las siguientes propiedades de resistencia:

$$
\boxed{S_{ut}=31\ \mathrm{kpsi}}
$$

$$
\boxed{S_{uc}=109\ \mathrm{kpsi}}
$$

Las resistencias a tracción y compresión no son iguales. La gráfica muestra una nube de puntos experimentales, algunas observaciones identificadas con las letras $A$, $B$, $C$ y $D$, y las fronteras teóricas correspondientes a los criterios comparados.

El eje horizontal corresponde a $\sigma_A$ y el vertical a $\sigma_B$. Además, se indica la línea:

$$
\frac{\sigma_B}{\sigma_A}=-1
$$

Esta línea corresponde a combinaciones de esfuerzos principales de igual magnitud y signo contrario, y sirve para reconocer el cambio de región del criterio de Mohr modificado.

En el gráfico, la teoría del esfuerzo normal máximo se representa mediante fronteras rectas paralelas a los ejes, mientras que Mohr-Coulomb y Mohr modificado presentan fronteras inclinadas diferentes en los estados mixtos de tracción y compresión.

### 11.2. Diagrama de selección del criterio de falla

![Diagrama de flujo para selección de criterios de falla según ductilidad y conservadurismo](resistencia_esfuerzos_figura_20.jpg)

*Figura 11.2. Diagrama de selección de criterios de falla para materiales frágiles y dúctiles. Fuente: material original, página 24.*

El material cierra con un **diagrama de flujo** que propone elegir el criterio de falla teniendo en cuenta la deformación a fractura, la igualdad o desigualdad de las resistencias de fluencia a tracción y compresión, y el grado de conservadurismo buscado.

El primer punto de decisión utiliza la **deformación a fractura**, denotada $\varepsilon_f$.

#### 11.2.1. Clasificación inicial por deformación a fractura

Si se cumple:

$$
\varepsilon_f<0.05
$$

el diagrama clasifica el comportamiento como **frágil**.

Si se cumple:

$$
\varepsilon_f\geq0.05
$$

el diagrama clasifica el comportamiento como **dúctil**.

El umbral $0.05$ corresponde al **5 % de deformación a fractura** utilizado en el esquema presentado.

#### 11.2.2. Selección para materiales frágiles

Cuando el comportamiento es frágil, el esquema pregunta si se desea emplear un criterio **conservador**.

- Si la respuesta es **sí**, la rama propone **Mohr-Coulomb frágil (MCF)**.
- Si la respuesta es **no**, la rama propone **Mohr modificado (MM)**.

Esta separación corresponde a la elección de diferentes envolventes de falla para representar las resistencias a tracción y compresión.

#### 11.2.3. Selección para materiales dúctiles

Cuando el material presenta comportamiento dúctil, el diagrama plantea una comparación entre sus resistencias a la fluencia en tracción y compresión:

$$
S_{yt}=S_{yc}\;?
$$

Donde $S_{yt}$ representa la resistencia a fluencia en tracción y $S_{yc}$ la resistencia a fluencia en compresión.

Si las resistencias **no son iguales**, el esquema propone:

**Mohr-Coulomb dúctil (MCD).**

Si las resistencias **son iguales**, se plantea una segunda decisión sobre el carácter conservador del criterio.

- Si se desea un enfoque **conservador**, el esquema propone **esfuerzo cortante máximo (ECM)**.
- Si no se requiere ese enfoque conservador, propone **energía de distorsión (ED)**.

### 11.3. Síntesis de las siglas empleadas en el diagrama

| Sigla | Criterio de falla |
|---|---|
| MM | Mohr modificado |
| MCF | Mohr-Coulomb frágil |
| MCD | Mohr-Coulomb dúctil |
| ED | Energía de distorsión |
| ECM | Esfuerzo cortante máximo |

**Aclaración didáctica.** El diagrama constituye una guía de selección conceptual incluida en el material del curso. Su aplicación práctica requiere determinar las propiedades mecánicas correspondientes al material estudiado y respetar las hipótesis y límites de cada criterio.