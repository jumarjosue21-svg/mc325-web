## 1. Del espacio físico al modelo de estática

### 1.1. Qué estudia la estática

La **estática** es la parte de la mecánica que analiza las condiciones bajo las cuales un cuerpo permanece en equilibrio.

Un cuerpo en reposo puede experimentar simultáneamente varias fuerzas: su peso, la tensión de un cable, el empuje de una superficie y las fuerzas transmitidas por un apoyo.

Que no se mueva no significa que no actúen fuerzas, sino que **sus efectos de traslación y de rotación se compensan**.

En los problemas tridimensionales, las fuerzas pueden actuar en direcciones diferentes y producir momentos alrededor de cualquiera de los tres ejes. Por eso necesitamos una descripción vectorial completa, no solamente números sin dirección.

### 1.2. Magnitudes escalares y vectoriales

Un **escalar** queda determinado por un número y una unidad: por ejemplo, una masa de $8\,\mathrm{kg}$ o una longitud de $0.50\,\mathrm{m}$.

Una **magnitud vectorial** requiere además dirección y sentido. Una fuerza de $100\,\mathrm{N}$ hacia arriba es distinta de otra de $100\,\mathrm{N}$ hacia la derecha.

Un vector se representa mediante una flecha. Su longitud expresa la magnitud en una escala gráfica; su orientación, la dirección; y la punta, el sentido.

En estática es fundamental identificar también el **punto de aplicación** de una fuerza, pues dos fuerzas iguales aplicadas en líneas distintas pueden originar momentos diferentes.

### 1.3. Ejes, unidades y signos

Adoptaremos $x$, $y$, $z$ como ejes mutuamente perpendiculares.

Los vectores unitarios $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ apuntan hacia las direcciones positivas.

Una componente negativa no indica que el módulo de la fuerza sea negativo; indica que esa parte de la fuerza apunta en sentido opuesto al eje positivo.

**Observación importante:** En un mismo problema no deben mezclarse metros con milímetros al calcular momentos.

Por ejemplo, $200\,\mathrm{N}$ aplicados con un brazo perpendicular de $0.30\,\mathrm{m}$ producen $60\,\mathrm{N\,m}$, no $60\,\mathrm{N}$.

---

## 2. Vectores cartesianos y operaciones

### 2.1. Representación de un vector en el espacio

![Descomposición de un vector espacial en sus direcciones cartesianas y representación de los vectores unitarios](diapositiva_01.jpg)

*Figura 2.1. Descomposición de un vector espacial en sus direcciones cartesianas y representación de los vectores unitarios. Fuente gráfica: diapositiva 1 del material original del Ing. Edén Capcha (UNI).*

La lámina muestra un vector $\mathbf{A}$ desde el origen hasta un punto del espacio y sus proyecciones sobre los ejes.

Para representarlo de manera algebraica se escribe:

$$
\boxed{\mathbf{A}=A_x\mathbf{i}+A_y\mathbf{j}+A_z\mathbf{k}}
$$

Aquí $A_x$, $A_y$ y $A_z$ son **componentes escalares con signo**; $A_x\mathbf{i}$, $A_y\mathbf{j}$ y $A_z\mathbf{k}$ son **componentes vectoriales**.

Las letras $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ no son valores desconocidos: son vectores de magnitud uno.

La construcción geométrica de la lámina puede leerse así: primero se avanza $A_x$ unidades en la dirección $x$, luego $A_y$ unidades en la dirección $y$ y finalmente $A_z$ unidades en la dirección $z$.

Su suma da el vector original, independientemente del orden de construcción.

El punto $A'$ dibujado sobre el plano horizontal representa la proyección de $A$ sobre el plano $xy$; la elevación vertical desde $A'$ hasta $A$ se asocia a $A_z$.

Si el vector es de **posición** y va desde el origen $O$ hasta $P(x_P,y_P,z_P)$, se escribe:

$$
\mathbf{r}_{OP}=x_P\mathbf{i}+y_P\mathbf{j}+z_P\mathbf{k}
$$

Para un vector desde $P$ hasta $Q$, las componentes se obtienen **restando coordenadas del punto final menos las del inicial**:

$$
\boxed{
\mathbf{r}_{PQ}=(x_Q-x_P)\mathbf{i}+(y_Q-y_P)\mathbf{j}+(z_Q-z_P)\mathbf{k}
}
$$

#### Ejemplo desarrollado

Si $P=(1,2,0)\,\mathrm{m}$ y $Q=(4,-2,3)\,\mathrm{m}$, entonces:

$$
\mathbf{r}_{PQ}=(4-1)\mathbf{i}+(-2-2)\mathbf{j}+(3-0)\mathbf{k}
$$

$$
\boxed{\mathbf{r}_{PQ}=3\mathbf{i}-4\mathbf{j}+3\mathbf{k}\quad(\mathrm{m})}
$$

La componente $-4\mathbf{j}$ indica desplazamiento hacia $-y$; no representa una distancia negativa.

### 2.2. Magnitud o módulo de un vector

![Prisma geométrico que permite aplicar dos veces el teorema de Pitágoras](diapositiva_02.jpg)

*Figura 2.2. Prisma geométrico que permite aplicar dos veces el teorema de Pitágoras. Fuente gráfica: diapositiva 2 del material original del Ing. Edén Capcha (UNI).*

La **magnitud**, denotada $A=\left\lVert\mathbf{A}\right\rVert$, es una cantidad no negativa.

La proyección sobre el plano $xy$ tiene longitud:

$$
\sqrt{A_x^2+A_y^2}
$$

Como esa proyección es perpendicular a la componente vertical, se aplica nuevamente Pitágoras:

$$
\boxed{A=\sqrt{A_x^2+A_y^2+A_z^2}}
$$

Si $\mathbf{A}$ representa una fuerza, las tres componentes y la magnitud se expresan en newtons.

Si representa una posición, sus unidades son metros.

El cuadrado elimina los signos de las componentes, de ahí que la magnitud nunca sea negativa.

#### Ejemplo desarrollado

Sea:

$$
\mathbf{A}=3\mathbf{i}-4\mathbf{j}+12\mathbf{k}
$$

Su magnitud es:

$$
A=\sqrt{3^2+(-4)^2+12^2}
$$

$$
A=\sqrt{9+16+144}
$$

$$
\boxed{A=13}
$$

La unidad es la de las componentes originales.

Esta misma información permite obtener el vector unitario de su dirección:

$$
\mathbf{u}_A=\frac{\mathbf{A}}{A}
$$

$$
\boxed{
\mathbf{u}_A=\frac{3}{13}\mathbf{i}-\frac{4}{13}\mathbf{j}+\frac{12}{13}\mathbf{k}
}
$$

El vector unitario $\mathbf{u}_A$ conserva dirección y sentido, pero tiene magnitud uno.

Se usa para construir fuerzas conocidas por su magnitud y una dirección:

$$
\mathbf{F}=F\mathbf{u}_F
$$

### 2.3. Ángulos directores

![Ángulos directores alfa beta y gamma medidos respecto de los semiejes positivos](diapositiva_03.jpg)

*Figura 2.3. Ángulos directores $\alpha$, $\beta$ y $\gamma$ medidos respecto de los semiejes positivos. Fuente gráfica: diapositiva 3 del material original del Ing. Edén Capcha (UNI).*

La dirección de un vector también puede definirse mediante tres ángulos:

- $\alpha$ respecto del eje $+x$.
- $\beta$ respecto del eje $+y$.
- $\gamma$ respecto del eje $+z$.

En el dibujo, cada uno se mide **entre el vector y el semieje positivo correspondiente**, no necesariamente dentro del plano horizontal.

Las relaciones se obtienen proyectando el vector sobre cada eje:

$$
\boxed{
\cos\alpha=\frac{A_x}{A},\qquad
\cos\beta=\frac{A_y}{A},\qquad
\cos\gamma=\frac{A_z}{A}
}
$$

Los cocientes se denominan **cosenos directores**.

Satisfacen la identidad:

$$
\boxed{\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1}
$$

porque al elevar al cuadrado las tres razones y sumarlas aparece:

$$
\frac{A_x^2+A_y^2+A_z^2}{A^2}=1
$$

Para un vector no nulo, los ángulos directores pertenecen al intervalo:

$$
0^\circ\leq\alpha,\beta,\gamma\leq180^\circ
$$

Una componente negativa genera un coseno negativo y, por tanto, un ángulo obtuso con el eje positivo correspondiente.

**Los tres ángulos no son independientes:** deben respetar la identidad de los cosenos directores.

#### Ejemplo desarrollado

Para:

$$
\mathbf{A}=3\mathbf{i}-4\mathbf{j}+12\mathbf{k}
$$

con $A=13$:

$$
\alpha=\cos^{-1}\left(\frac{3}{13}\right)\approx76.66^\circ
$$

$$
\beta=\cos^{-1}\left(\frac{-4}{13}\right)\approx107.92^\circ
$$

$$
\gamma=\cos^{-1}\left(\frac{12}{13}\right)\approx22.62^\circ
$$

El ángulo $\beta$ es obtuso porque el vector apunta parcialmente hacia $-y$.

### 2.4. Suma y resta de vectores

![Resultante vectorial formada mediante suma geométrica y algebraica de componentes](diapositiva_04.jpg)

*Figura 2.4. Resultante vectorial formada mediante suma geométrica y algebraica de componentes. Fuente gráfica: diapositiva 4 del material original del Ing. Edén Capcha (UNI).*

Dos o más vectores pueden reemplazarse por una **resultante** que representa su suma.

Gráficamente, se coloca la cola del segundo vector en la punta del primero; el vector que va del origen inicial al extremo final es la resultante.

En componentes cartesianas, basta sumar las cantidades asociadas a cada eje:

$$
\boxed{
\mathbf{R}=\mathbf{A}+\mathbf{B}=
(A_x+B_x)\mathbf{i}+
(A_y+B_y)\mathbf{j}+
(A_z+B_z)\mathbf{k}
}
$$

De manera análoga, $\mathbf{A}-\mathbf{B}$ se obtiene sumando $\mathbf{A}+(-\mathbf{B})$.

El vector $-\mathbf{B}$ tiene la misma magnitud que $\mathbf{B}$, pero el sentido opuesto.

#### Ejemplo desarrollado

Con:

$$
\mathbf{A}=(3,-4,12)
$$

$$
\mathbf{B}=(-2,5,1)
$$

Se obtiene:

$$
\mathbf{R}=\mathbf{A}+\mathbf{B}=(1,1,13)
$$

Su magnitud es:

$$
\left\lVert\mathbf{R}\right\rVert=\sqrt{171}\approx13.08
$$

Observe que:

$$
\left\lVert\mathbf{A}+\mathbf{B}\right\rVert
\ne
\left\lVert\mathbf{A}\right\rVert+\left\lVert\mathbf{B}\right\rVert
$$

en general.

La magnitud se calcula después de sumar las componentes.

En estática, sumar fuerzas equivale a hallar la **fuerza resultante**.

Si $\mathbf{F}_1,\dots,\mathbf{F}_n$ actúan sobre el cuerpo:

$$
\mathbf{F}_R=\sum_{i=1}^{n}\mathbf{F}_i
$$

$$
\mathbf{F}_R=
\left(\sum F_x\right)\mathbf{i}+
\left(\sum F_y\right)\mathbf{j}+
\left(\sum F_z\right)\mathbf{k}
$$

La suma de fuerzas es una condición necesaria para el equilibrio, pero por sí sola no garantiza que el cuerpo no gire.

### 2.5. Producto punto o escalar

![Expresiones equivalentes del producto punto y ángulo entre dos vectores](diapositiva_05.jpg)

*Figura 2.5. Expresiones equivalentes del producto punto y ángulo entre dos vectores. Fuente gráfica: diapositiva 5 del material original del Ing. Edén Capcha (UNI).*

El **producto punto** combina dos vectores y entrega un **escalar**.

Puede calcularse de dos maneras equivalentes:

$$
\boxed{
\mathbf{A}\cdot\mathbf{B}
=AB\cos\theta
=A_xB_x+A_yB_y+A_zB_z
}
$$

Aquí $\theta$ es el menor ángulo geométrico entre ambos vectores, con:

$$
0^\circ\leq\theta\leq180^\circ
$$

Al despejar:

$$
\boxed{
\theta=\cos^{-1}\left(
\frac{\mathbf{A}\cdot\mathbf{B}}{AB}
\right)
}
$$

siempre que $A\ne0$ y $B\ne0$.

El valor del producto punto informa sobre la orientación:

- Es positivo para un ángulo agudo.
- Es cero para vectores perpendiculares.
- Es negativo para un ángulo obtuso.

Si los vectores son paralelos, su producto vale $\pm AB$ según tengan igual u opuesto sentido.

#### Ejemplo desarrollado

Para:

$$
\mathbf{A}=(3,-4,12)
$$

$$
\mathbf{B}=(-2,5,1)
$$

Se tiene:

$$
\mathbf{A}\cdot\mathbf{B}
=3(-2)+(-4)(5)+12(1)
$$

$$
\boxed{\mathbf{A}\cdot\mathbf{B}=-14}
$$

Como $A=13$ y $B=\sqrt{30}$:

$$
\theta=\cos^{-1}\left(
\frac{-14}{13\sqrt{30}}
\right)
$$

$$
\boxed{\theta\approx101.34^\circ}
$$

El signo negativo confirma que el ángulo es obtuso.

#### 2.5.1. Aplicación: proyección de una fuerza

Cuando interesa cuánto actúa una fuerza a lo largo de una dirección determinada, se usa un vector unitario $\mathbf{u}$:

$$
F_{\parallel}=\mathbf{F}\cdot\mathbf{u}
$$

$$
\mathbf{F}_{\parallel}=(\mathbf{F}\cdot\mathbf{u})\mathbf{u}
$$

El primer resultado es la **componente escalar firmada**; el segundo es el vector proyección.

Esto resulta útil al proyectar fuerzas sobre barras, cables o ejes inclinados.

No se debe confundir la proyección con la magnitud total de la fuerza.

### 2.6. Producto cruz o vectorial: significado geométrico

![Producto cruz regla de la mano derecha y multiplicaciones básicas de unitarios](diapositiva_06.jpg)

*Figura 2.6. Producto cruz, regla de la mano derecha y multiplicaciones básicas de unitarios. Fuente gráfica: diapositiva 6 del material original del Ing. Edén Capcha (UNI).*

El **producto cruz** combina dos vectores y produce un nuevo vector $\mathbf{C}$ perpendicular al plano que contienen:

$$
\boxed{\mathbf{C}=\mathbf{A}\times\mathbf{B}}
$$

Su magnitud es:

$$
\boxed{C=AB\sin\theta}
$$

La **dirección** de $\mathbf{C}$ es normal al plano de $\mathbf{A}$ y $\mathbf{B}$.

Su **sentido** lo define la regla de la mano derecha: al curvar los dedos desde el primer vector hacia el segundo por el menor giro, el pulgar señala $\mathbf{A}\times\mathbf{B}$.

Este producto **no es conmutativo**:

$$
\boxed{\mathbf{A}\times\mathbf{B}=-\mathbf{B}\times\mathbf{A}}
$$

Si los dos vectores son paralelos, $\sin\theta=0$ y el resultado es el vector nulo.

Si son perpendiculares, la magnitud del producto cruz es máxima e igual a $AB$.

Los productos de vectores unitarios cartesianos siguen el ciclo positivo:

$$
\mathbf{i}\rightarrow\mathbf{j}\rightarrow\mathbf{k}\rightarrow\mathbf{i}
$$

Por lo tanto:

$$
\mathbf{i}\times\mathbf{j}=\mathbf{k}
$$

$$
\mathbf{j}\times\mathbf{k}=\mathbf{i}
$$

$$
\mathbf{k}\times\mathbf{i}=\mathbf{j}
$$

Al invertir el orden cambia el signo.

Además:

$$
\mathbf{i}\times\mathbf{i}
=
\mathbf{j}\times\mathbf{j}
=
\mathbf{k}\times\mathbf{k}
=
\mathbf{0}
$$

### 2.7. Producto cruz en componentes: determinante

![Expansión algebraica del producto vectorial y forma abreviada mediante determinante](diapositiva_07.jpg)

*Figura 2.7. Expansión algebraica del producto vectorial y forma abreviada mediante determinante. Fuente gráfica: diapositiva 7 del material original del Ing. Edén Capcha (UNI).*

Para dos vectores cartesianos:

$$
\mathbf{A}=A_x\mathbf{i}+A_y\mathbf{j}+A_z\mathbf{k}
$$

$$
\mathbf{B}=B_x\mathbf{i}+B_y\mathbf{j}+B_z\mathbf{k}
$$

Se distribuyen los nueve productos $A_pB_q(\mathbf{e}_p\times\mathbf{e}_q)$.

Los términos con unitarios iguales desaparecen y se agrupan los restantes.

El resultado es:

$$
\boxed{
\begin{aligned}
\mathbf{A}\times\mathbf{B}
={}&(A_yB_z-A_zB_y)\mathbf{i}\\
&+(A_zB_x-A_xB_z)\mathbf{j}\\
&+(A_xB_y-A_yB_x)\mathbf{k}
\end{aligned}
}
$$

La notación compacta es el **determinante formal**:

$$
\boxed{
\mathbf{A}\times\mathbf{B}=
\begin{vmatrix}
\mathbf{i}&\mathbf{j}&\mathbf{k}\\
A_x&A_y&A_z\\
B_x&B_y&B_z
\end{vmatrix}
}
$$

Al desarrollar por la primera fila, el término asociado a $\mathbf{j}$ entra con signo negativo.

Éste es uno de los errores de cálculo más frecuentes.

#### Ejemplo desarrollado

Para:

$$
\mathbf{A}=(3,-4,12)
$$

$$
\mathbf{B}=(-2,5,1)
$$

Se obtiene:

$$
\begin{aligned}
\mathbf{A}\times\mathbf{B}
={}&[(-4)(1)-(12)(5)]\mathbf{i}\\
&+[(12)(-2)-(3)(1)]\mathbf{j}\\
&+[(3)(5)-(-4)(-2)]\mathbf{k}
\end{aligned}
$$

$$
\boxed{
\mathbf{A}\times\mathbf{B}
=-64\mathbf{i}-27\mathbf{j}+7\mathbf{k}
}
$$

**Comprobación:**

$$
\mathbf{A}\cdot(\mathbf{A}\times\mathbf{B})=0
$$

$$
\mathbf{B}\cdot(\mathbf{A}\times\mathbf{B})=0
$$

El resultado es perpendicular a ambos.

**Observación importante — Cuándo usar cada operación:** La suma produce una resultante vectorial; el producto punto mide alineamiento y proyecciones; el producto cruz determina un vector normal, y en estática representa especialmente el **momento de una fuerza**.

---

## 3. Momento de una fuerza

### 3.1. Por qué una fuerza puede hacer girar un cuerpo

![Momento de una fuerza respecto de O distancia perpendicular y regla de la mano derecha](diapositiva_08.jpg)

*Figura 3.1. Momento de una fuerza respecto de $O$, distancia perpendicular y regla de la mano derecha. Fuente gráfica: diapositiva 8 del material original del Ing. Edén Capcha (UNI).*

Al abrir una puerta, ejercer la misma fuerza cerca de las bisagras o lejos de ellas produce efectos diferentes.

Esa capacidad de una fuerza para generar tendencia a la rotación se denomina **momento**.

Se define respecto de un punto concreto: un mismo sistema de fuerzas puede tener momentos distintos respecto de puntos diferentes.

Sea $O$ el punto de referencia y $P$ un punto de la **línea de acción** de una fuerza $\mathbf{F}$.

Definimos el vector de posición $\mathbf{r}=\mathbf{r}_{OP}$; entonces:

$$
\boxed{\mathbf{M}_O=\mathbf{r}\times\mathbf{F}}
$$

El orden $\mathbf{r}\times\mathbf{F}$ es obligatorio.

El resultado es vectorial y sus componentes expresan tendencias de giro alrededor de los ejes $x$, $y$ y $z$.

En unidades SI, si $\mathbf{r}$ está en metros y $\mathbf{F}$ en newtons, el momento se expresa en **newton-metro** ($\mathrm{N\,m}$).

### 3.2. Brazo perpendicular y ángulo entre posición y fuerza

Como la magnitud de un producto cruz es $rF\sin\theta$:

$$
M_O=rF\sin\theta=Fd
$$

donde:

$$
d=r\sin\theta
$$

La distancia $d$ es el **brazo perpendicular** desde $O$ hasta la línea de acción de la fuerza.

En la lámina aparecen simultáneamente $r$, $F$, el ángulo $\theta$ y el brazo $d$.

Su interpretación es: la porción de $\mathbf{r}$ paralela a $\mathbf{F}$ no produce momento; sólo cuenta la separación perpendicular.

La dirección de $\mathbf{M}_O$ se obtiene con la regla de la mano derecha.

En un problema plano $xy$, la tendencia antihoraria alrededor de $+z$ se considera positiva si se adoptan ejes de mano derecha.

En 3D, decir únicamente «horario» puede ser ambiguo: conviene indicar el eje y el sentido de observación.

#### Ejemplo desarrollado

Una fuerza de $200\,\mathrm{N}$ actúa sobre el extremo de una palanca con brazo perpendicular de $0.30\,\mathrm{m}$.

La magnitud del momento es:

$$
M_O=Fd
$$

$$
M_O=200(0.30)
$$

$$
\boxed{M_O=60\,\mathrm{N\,m}}
$$

Si se aplica la fuerza a lo largo de una recta que atraviesa $O$, entonces $d=0$ y el momento respecto de $O$ es nulo, aunque la fuerza siga siendo distinta de cero.

### 3.3. Cálculo de las tres componentes del momento

Con:

$$
\mathbf{r}=(r_x,r_y,r_z)
$$

$$
\mathbf{F}=(F_x,F_y,F_z)
$$

Se tiene:

$$
\boxed{
\begin{aligned}
M_x&=r_yF_z-r_zF_y\\
M_y&=r_zF_x-r_xF_z\\
M_z&=r_xF_y-r_yF_x
\end{aligned}
}
$$

#### Ejemplo desarrollado

Una fuerza:

$$
\mathbf{F}=(120,-80,-200)\,\mathrm{N}
$$

se aplica en:

$$
P=(0.25,-0.40,0.10)\,\mathrm{m}
$$

respecto del origen $O$.

Así:

$$
\mathbf{M}_O=
\begin{vmatrix}
\mathbf{i}&\mathbf{j}&\mathbf{k}\\
0.25&-0.40&0.10\\
120&-80&-200
\end{vmatrix}
$$

$$
\boxed{
\mathbf{M}_O=88\mathbf{i}+62\mathbf{j}+28\mathbf{k}
\quad(\mathrm{N\,m})
}
$$

Cada componente se interpreta como la tendencia a girar alrededor del eje respectivo.

### 3.4. Varios momentos, pares y momentos respecto de un eje

Para muchas fuerzas, los momentos respecto de un mismo punto se suman **vectorialmente**:

$$
\boxed{
\sum\mathbf{M}_O=
\sum_i(\mathbf{r}_i\times\mathbf{F}_i)
+\sum_j\mathbf{M}_{c,j}
}
$$

Un **par de fuerzas** son dos fuerzas iguales, paralelas y opuestas, con líneas de acción distintas.

Su fuerza resultante es cero, pero su momento puede ser distinto de cero.

El **momento de par** se representa con una flecha curva y es un **vector libre**: puede incluirse directamente en la suma de momentos sin multiplicarlo otra vez por un brazo.

Para hallar el **momento escalar alrededor de un eje** de dirección unitaria $\mathbf{u}_e$, se proyecta el momento vectorial:

$$
\boxed{
M_e=\mathbf{u}_e\cdot\mathbf{M}_O
=\mathbf{u}_e\cdot(\mathbf{r}\times\mathbf{F})
}
$$

siempre que $O$ pertenezca a dicho eje.

Ésta es una ampliación útil para apoyos que permiten girar solamente alrededor de una dirección.

---

## 4. Equilibrio de un cuerpo rígido

### 4.1. Dos condiciones independientes

![Condiciones vectoriales de equilibrio de fuerzas y momentos](diapositiva_09.jpg)

*Figura 4.1. Condiciones vectoriales de equilibrio de fuerzas y momentos. Fuente gráfica: diapositiva 9 del material original del Ing. Edén Capcha (UNI).*

Un **cuerpo rígido** es un modelo ideal en el que las distancias entre sus puntos no cambian bajo las cargas consideradas.

La condición de equilibrio requiere anular **dos efectos independientes**: la fuerza neta que produciría aceleración traslacional y el momento neto que produciría aceleración angular.

En estática:

$$
\boxed{
\sum\mathbf{F}=\mathbf{0},
\qquad
\sum\mathbf{M}_O=\mathbf{0}
}
$$

Éstas son dos **ecuaciones vectoriales** equivalentes a seis **ecuaciones escalares** en el espacio:

$$
\boxed{
\begin{aligned}
\sum F_x&=0\\
\sum F_y&=0\\
\sum F_z&=0\\
\sum M_x&=0\\
\sum M_y&=0\\
\sum M_z&=0
\end{aligned}
}
$$

El punto $O$ para calcular los momentos se elige por conveniencia.

Es particularmente eficaz seleccionar un punto por el que pasen varias fuerzas desconocidas: sus momentos respecto a ese punto serán nulos y habrá menos términos en las ecuaciones.

**Idea clave:** Que $\sum\mathbf{F}=\mathbf{0}$ no basta. Un **par** de fuerzas puede tener resultante nula pero causar giro.

Análogamente, un momento resultante nulo no garantiza fuerza resultante nula.

### 4.2. Equilibrio plano como caso particular

Si todas las fuerzas y puntos de aplicación pertenecen al plano $xy$ y los momentos relevantes son perpendiculares a él, se reducen a tres ecuaciones independientes:

$$
\boxed{
\sum F_x=0,\qquad
\sum F_y=0,\qquad
\sum M_z=0
}
$$

Esta reducción no se puede aplicar automáticamente a una figura de aspecto plano cuando sus fuerzas o apoyos trabajan realmente fuera de ese plano.

### 4.3. Reacciones, incógnitas y estabilidad

Un **apoyo** impide ciertos movimientos y, como respuesta, ejerce fuerzas y a veces momentos sobre el cuerpo.

Estas acciones se denominan **reacciones**.

El modelo de apoyo debe representar los movimientos que la conexión **realmente** restringe, no simplemente su apariencia.

En una sola pieza rígida en 3D contamos, como máximo, con seis ecuaciones escalares independientes de equilibrio.

Tener seis incógnitas no garantiza por sí solo que el sistema sea estable ni que todas las ecuaciones sean independientes: la **geometría** de las fuerzas y los apoyos también importa.

Si se requieren ecuaciones adicionales por deformación o compatibilidad, el problema puede ser estáticamente indeterminado.

#### Ejemplo desarrollado

Un elemento sometido sólo a una fuerza vertical descendente de $500\,\mathrm{N}$ y a una reacción vertical $R_z$ tiene, por equilibrio vertical:

$$
\sum F_z=0
$$

$$
R_z-500=0
$$

$$
\boxed{R_z=500\,\mathrm{N}}
$$

Esto determina la reacción vertical, pero no demuestra por sí mismo el equilibrio de **todos** los momentos: faltaría conocer posiciones, geometría y restricciones.

---

## 5. Tipos de apoyos y sus reacciones

### 5.1. Principio: un apoyo reacciona contra el movimiento impedido

Al dibujar un diagrama de cuerpo libre, se elimina el soporte y se reemplaza por su efecto mecánico.

Para encontrar correctamente las incógnitas, hay que preguntar: **¿qué traslaciones y rotaciones prohíbe la unión?**

Cada traslación impedida puede originar una componente de fuerza; cada rotación impedida puede originar una componente de momento.

La tabla de las láminas 10–13 corresponde a **modelos ideales de conexiones tridimensionales**.

Las cifras se refieren a **componentes independientes que pueden aparecer**, según la orientación de los ejes y las hipótesis del modelo.

En muchos casos las reacciones dependen también de la forma en que se disponen apoyos adicionales.

### 5.2. Cable y superficie lisa

![Modelos de apoyo cable y superficie lisa con una incógnita de reacción cada uno](diapositiva_10.jpg)

*Figura 5.1. Modelos (1) cable y (2) superficie lisa, con una incógnita de reacción cada uno. Fuente gráfica: diapositiva 10 del material original del Ing. Edén Capcha (UNI).*

#### 5.2.1. Cable o cuerda ideal

Un cable flexible ideal sólo **transmite tracción** a lo largo de su eje.

No puede empujar ni transmitir un momento flector en sus extremos articulados.

Por tanto, si se conoce la dirección del cable, la fuerza es:

$$
\boxed{\mathbf{T}=T\mathbf{u},\qquad T\geq0}
$$

donde $\mathbf{u}$ es un vector unitario que va desde el punto unido al cuerpo hacia el otro extremo del cable.

Existe **una incógnita escalar**: la tensión $T$.

Si el cálculo entrega tensión negativa con esa convención, la hipótesis de cable tensado debe revisarse.

#### 5.2.2. Superficie lisa (sin rozamiento)

Una superficie idealmente lisa ejerce una **reacción normal al contacto**, no una fuerza tangencial de rozamiento.

El módulo $N$ es la única incógnita si la dirección normal es conocida.

Si la superficie es horizontal, la normal es vertical; si está inclinada, la reacción también queda inclinada.

Es incorrecto dibujar una normal siempre vertical sin examinar la geometría.

### 5.3. Rodillo y rótula esférica

![Modelos de apoyo rodillo y rótula esférica con sus reacciones escalares](diapositiva_11.jpg)

*Figura 5.2. Modelos (3) rodillo y (4) rótula esférica, con una y tres reacciones escalares respectivamente. Fuente gráfica: diapositiva 11 del material original del Ing. Edén Capcha (UNI).*

#### 5.3.1. Rodillo

El rodillo sobre una superficie lisa proporciona una reacción **perpendicular a la superficie de contacto**.

Idealmente permite el desplazamiento tangencial y no ejerce un momento resistente en el punto de apoyo.

En el esquema aparece una sola fuerza $F$ hacia arriba porque la superficie ilustrada es horizontal.

#### 5.3.2. Rótula esférica (ball-and-socket)

La rótula permite rotar en torno a los tres ejes, pero evita la traslación del punto de unión.

Por ello admite **tres componentes de fuerza** $R_x$, $R_y$, $R_z$ y **ningún par de reacción** en el modelo ideal:

$$
\boxed{
\mathbf{R}=R_x\mathbf{i}+R_y\mathbf{j}+R_z\mathbf{k}
}
$$

El hecho de que la orientación de la barra pueda cambiar no significa que su extremo pueda separarse del punto fijo de la rótula.

### 5.4. Cojinetes, pasadores, bisagras y empotramiento

![Modelos de cojinete con eje cuadrado cojinete de empuje y pasador liso](diapositiva_12.jpg)

*Figura 5.3. Modelos (6) cojinete con eje cuadrado, (7) cojinete de empuje y (8) pasador liso. Fuente gráfica: diapositiva 12 del material original del Ing. Edén Capcha (UNI).*

![Modelos de bisagra y empotramiento rígido](diapositiva_13.jpg)

*Figura 5.4. Modelos (9) bisagra y (10) empotramiento rígido. Fuente gráfica: diapositiva 13 del material original del Ing. Edén Capcha (UNI).*

#### 5.4.1. Cojinete radial liso con eje circular: aclaración de numeración

El material original **no muestra el renglón (5)** dentro de las tablas de apoyos, aunque la página 14 presenta una fotografía rotulada como (5).

Para permitir una lectura continua, se describe el modelo ideal habitual: un **cojinete radial** de eje circular, sin rozamiento ni capacidad axial, ejerce **dos componentes transversales de fuerza**, perpendiculares al eje del árbol.

En el modelo ideal de un único apoyo no aporta componente axial ni par de reacción.

La validez de esta simplificación depende del diseño mecánico concreto del cojinete.

#### 5.4.2. Cojinete con eje de sección cuadrada

La sección no circular restringe la rotación relativa del eje alrededor de su propia dirección.

En la idealización de la lámina se indican **dos fuerzas transversales y tres pares de reacción**: un total de cinco incógnitas.

La traslación axial continúa libre.

Esta representación se debe emplear sólo cuando el apoyo puede transmitir efectivamente esos pares.

#### 5.4.3. Cojinete de empuje (thrust bearing)

Este apoyo transmite también empuje axial, por lo que el esquema asigna **tres fuerzas y dos pares de reacción**: cinco incógnitas.

Mantiene libre el giro alrededor del eje del árbol.

El cojinete no debe confundirse con un empotramiento, que impediría también ese giro.

#### 5.4.4. Pasador liso único

En el modelo espacial mostrado, el pasador permite **rotar alrededor de su eje** y restringe el resto de movimientos.

La tabla lo representa con **tres fuerzas y dos momentos**: cinco incógnitas.

Es importante advertir que muchos ejercicios planos usan un **pasador articulado** simplificado con sólo dos componentes de fuerza y ningún momento.

Ambas representaciones corresponden a modelos diferentes; la correcta depende de la geometría y del sistema analizado.

#### 5.4.5. Bisagra

La bisagra restringe las tres traslaciones y dos rotaciones, y permite la rotación alrededor de su eje de articulación.

El modelo tridimensional de la figura tiene **tres componentes de fuerza y dos de momento**, cinco incógnitas.

Un giro permitido no genera un par de reacción ideal alrededor de ese eje.

#### 5.4.6. Empotramiento o soporte fijo

Un empotramiento ideal impide las tres traslaciones y las tres rotaciones.

Puede transmitir **tres componentes de fuerza y tres de momento**, en total seis incógnitas:

$$
\boxed{
\mathbf{R}=R_x\mathbf{i}+R_y\mathbf{j}+R_z\mathbf{k}
}
$$

$$
\boxed{
\mathbf{M}_R=M_x\mathbf{i}+M_y\mathbf{j}+M_z\mathbf{k}
}
$$

Por ejemplo, la base de una columna soldada rígidamente a una placa suele modelarse mediante un empotramiento si los detalles de rigidez justifican esa idealización.

**Observación importante:** En las láminas de cojinetes, pasadores y bisagras aparece la advertencia de que **algunos pares de reacción generalmente no se dibujan si existen otros apoyos**.

No significa que un elemento haya perdido una restricción física: significa que, para el sistema completo y bajo las hipótesis adoptadas, puede resultar conveniente una idealización con pares despreciados.

Antes de omitirlos debe comprobarse el modelo geométrico, la función de cada apoyo y el enunciado.

### 5.5. Cuadro de consulta rápida: idealizaciones tridimensionales

| N.º | Conexión | Reacciones del modelo | N.º de incógnitas |
|---|---|---|---|
| (1) | Cable ideal | Tensión axial $T$ | 1 |
| (2) | Contacto liso | Fuerza normal $N$ | 1 |
| (3) | Rodillo sobre superficie lisa | Fuerza normal $N$ | 1 |
| (4) | Rótula esférica | $R_x,R_y,R_z$ | 3 |
| (5) | Cojinete radial liso, eje circular | 2 fuerzas transversales | 2* |
| (6) | Cojinete con eje cuadrado | 2 fuerzas y 3 momentos | 5 |
| (7) | Cojinete de empuje | 3 fuerzas y 2 momentos | 5 |
| (8) | Pasador liso, modelo 3D | 3 fuerzas y 2 momentos | 5 |
| (9) | Bisagra única, modelo 3D | 3 fuerzas y 2 momentos | 5 |
| (10) | Empotramiento | 3 fuerzas y 3 momentos | 6 |

*La fila (5) es una aclaración editorial: no figura en las tablas reproducidas y debe validarse en el contexto específico del cojinete. Los ejes de cada reacción dependen de la orientación de la conexión.*

### 5.6. Apoyos en maquinaria real

![Aplicaciones de unión esférica de maquinaria de movimiento de tierras y cojinetes radiales de un árbol](diapositiva_14.jpg)

*Figura 5.5. Aplicaciones: unión esférica de una máquina de movimiento de tierras y cojinetes radiales de un árbol. Fuente gráfica: diapositiva 14 del material original del Ing. Edén Capcha (UNI).*

![Aplicaciones de cojinete de empuje y pasador que conecta un puntal en una máquina](diapositiva_15.jpg)

*Figura 5.6. Aplicaciones: cojinete de empuje y pasador que conecta un puntal en una máquina. Fuente gráfica: diapositiva 15 del material original del Ing. Edén Capcha (UNI).*

Las imágenes trasladan los símbolos abstractos a componentes observables.

La unión esférica permite cambios angulares de orientación entre miembros, a la vez que transmite fuerzas a la estructura.

Los cojinetes de apoyo de un árbol ayudan a mantener su posición transversal mientras facilitan el giro.

El cojinete de empuje también puede resistir una fuerza longitudinal sobre el eje.

El pasador del puntal transmite la carga entre elementos conectados y permite la rotación compatible con la articulación.

**Cómo analizar una fotografía técnica:**

Primero identifique cuál es el **cuerpo que se aísla**; segundo, localice los contactos y la dirección del eje si la hay; tercero, estime las libertades de movimiento que el diseño permite; por último, reemplace la unión por el conjunto de reacciones **necesario y suficiente**.

Las fotografías, por sí solas, no prueban si existe fricción despreciable, holgura, par transmisible o restricción axial: tales propiedades deben provenir del modelo y de los datos del problema.

---

## 6. Diagrama de cuerpo libre (DCL)

### 6.1. Qué es y por qué se utiliza

Un **diagrama de cuerpo libre** es el dibujo de un cuerpo **aislado de su entorno** en el que se representan **todas las acciones externas** que actúan sobre él.

Su propósito no es copiar la estructura con todos sus detalles, sino convertirla en un modelo mecánico al que puedan aplicarse las ecuaciones de equilibrio.

Al separar el cuerpo de apoyos, cables, paredes y otras piezas, las acciones que estos elementos ejercían sobre él deben colocarse en el DCL como fuerzas o pares.

El DCL debe incluir también cargas aplicadas, peso propio si corresponde y momentos externos.

Las fuerzas internas entre partes del mismo cuerpo aislado no se dibujan; si se separa el sistema en varios cuerpos, aparecen como pares de acción y reacción entre los diagramas.

### 6.2. Procedimiento reproducible para construir un DCL

1. **Definir el sistema:** Decidir si se aísla una barra, un conjunto soldado, una polea, una viga o varias piezas juntas. Marcar claramente sus límites.

2. **Elegir los ejes:** Dibujar un sistema cartesiano con orientación clara, preferiblemente alineado con miembros y apoyos para reducir componentes.

3. **Eliminar las conexiones:** Sustituir cada contacto por sus fuerzas y, si corresponde, por sus momentos de reacción, conforme a la tabla de apoyos.

4. **Colocar cargas externas:** Indicar magnitudes, dirección, sentido y puntos de aplicación de fuerzas y pares conocidos.

5. **Asignar símbolos a incógnitas:** Usar $A_x,A_y,A_z$, tensiones $T$, momentos $M_{Ax}$, etc. Los sentidos supuestos pueden elegirse libremente si se mantiene la convención.

6. **Anotar dimensiones pertinentes:** Incluir coordenadas, longitudes y distancias necesarias para calcular momentos. Si no se proporcionan, no inventarlas.

7. **Verificar completitud:** Comprobar que no se han conservado soportes físicos junto a sus reacciones equivalentes ni omitido alguna carga o componente esencial.

### 6.3. Primer ejemplo gráfico: barra espacial con tres apoyos

![Sistema físico y diagrama de cuerpo libre de una barra espacial bajo una fuerza de 500 N y un par de 45 Nm](diapositiva_16.jpg)

*Figura 6.1. A la izquierda, el sistema físico; a la derecha, el DCL de una barra espacial bajo $500\,\mathrm{N}$ y un par de $45\,\mathrm{N\,m}$. Fuente gráfica: diapositiva 16 del material original del Ing. Edén Capcha (UNI).*

En la imagen izquierda se observa una barra espacial de varios tramos apoyada en $A$, $B$ y $C$.

Se aplica una fuerza de $500\,\mathrm{N}$ hacia abajo cerca del tramo extremo y un **momento de par** de $45\,\mathrm{N\,m}$ sobre el primer segmento.

En el DCL derecho se eliminan los apoyos físicos y aparecen las reacciones **tal como están indicadas por el modelo del ejemplo**:

- $A_y,A_z$ en $A$.
- $B_x,B_z$ en $B$.
- $C_x,C_y$ en $C$.

Son seis componentes de reacción representadas con direcciones positivas supuestas.

**Lectura de cada flecha:**

La flecha vertical descendente representa la carga de $500\,\mathrm{N}$; las flechas de reacción son fuerzas **desconocidas**; la flecha circular junto a $45\,\mathrm{N\,m}$ representa un par aplicado, no una fuerza.

Si una reacción calculada resultara negativa, la dirección real sería opuesta a la supuesta en el dibujo.

No es posible resolver sus seis reacciones numéricas con las ilustraciones solas porque no se indican todas las **coordenadas y distancias** que intervienen en los momentos.

Para hacerlo, debe formularse el sistema de las seis ecuaciones de equilibrio tridimensional utilizando los brazos de cada fuerza y la dirección vectorial del par indicado.

### 6.4. Segundo ejemplo gráfico: barra con cable y reacción de apoyo

![Sistema con fuerza de 900 N par de 300 Nm apoyo en A y cable BC](diapositiva_17.jpg)

*Figura 6.2. Sistema con fuerza de $900\,\mathrm{N}$, par de $300\,\mathrm{N\,m}$, apoyo en $A$ y cable $BC$. Fuente gráfica: diapositiva 17 del material original del Ing. Edén Capcha (UNI).*

La lámina 17 enseña una diferencia esencial entre una conexión rígida, una conexión que permite cierto giro y un cable.

El cable que une $B$ con $C$ se sustituye por **una sola fuerza de tensión** $\mathbf{T}$ aplicada en $B$ y orientada hacia $C$.

En el apoyo $A$ se dibujan las fuerzas $A_x,A_y,A_z$ y los pares $M_{Ax},M_{Az}$, de acuerdo con los giros restringidos por el modelo.

La figura incluye una carga vertical de $900\,\mathrm{N}$ y un par aplicado de $300\,\mathrm{N\,m}$.

Si se conocen las posiciones de $B$ y $C$, la dirección de la tensión se construye sin adivinar ángulos:

$$
\boxed{
\mathbf{T}=T
\frac{\mathbf{r}_C-\mathbf{r}_B}
{\left\lVert\mathbf{r}_C-\mathbf{r}_B\right\rVert},
\qquad T\geq0
}
$$

Las incógnitas del esquema son:

$$
A_x,A_y,A_z,M_{Ax},M_{Az},T
$$

Se tienen seis cantidades escalares.

**No debe dibujarse un momento adicional en el extremo del cable**, pues el cable ideal sólo transmite tracción.

El par de $300\,\mathrm{N\,m}$ entra directamente en $\sum\mathbf{M}_O$ con el signo definido por su sentido.

### 6.5. Lista de comprobación para revisar un DCL

Un DCL está listo para usarse si puede responderse afirmativamente a estas preguntas:

- ¿Está inequívocamente aislado el cuerpo?
- ¿Aparecen todas las fuerzas externas?
- ¿Los apoyos han sido reemplazados por las reacciones correctas?
- ¿Los pares están dibujados como momentos y no como fuerzas?
- ¿Todas las incógnitas tienen símbolo?
- ¿Se conocen los vectores de posición necesarios para los momentos?
- ¿Hay coherencia de unidades y orientación de ejes?

---

## 7. Ejercicios integradores resueltos

Los casos de este capítulo son **ampliaciones didácticas originales** y no son problemas resueltos en las diapositivas.

Sirven para practicar el razonamiento requerido en los diagramas y fórmulas precedentes.

### 7.1. Fuerza dirigida entre dos puntos

#### Ejemplo desarrollado

Un cable une:

$$
A=(1,0,2)\,\mathrm{m}
$$

con:

$$
B=(4,4,2)\,\mathrm{m}
$$

y tiene una tensión de $250\,\mathrm{N}$.

Se pide la fuerza que ejerce el cable sobre el punto $A$.

**Paso 1: Vector desde $A$ hacia $B$**

$$
\mathbf{r}_{AB}=(4-1,4-0,2-2)
$$

$$
\boxed{\mathbf{r}_{AB}=(3,4,0)\,\mathrm{m}}
$$

**Paso 2: Longitud del cable en la geometría dada**

$$
L=\sqrt{3^2+4^2+0^2}
$$

$$
\boxed{L=5\,\mathrm{m}}
$$

**Paso 3: Vector unitario**

$$
\mathbf{u}_{AB}=\frac{\mathbf{r}_{AB}}{L}
$$

$$
\boxed{
\mathbf{u}_{AB}=\frac35\mathbf{i}+\frac45\mathbf{j}
}
$$

**Paso 4: Fuerza**

$$
\mathbf{F}_A=250\mathbf{u}_{AB}
$$

$$
\boxed{
\mathbf{F}_A=150\mathbf{i}+200\mathbf{j}\quad(\mathrm{N})
}
$$

**Comprobación:**

$$
\sqrt{150^2+200^2}=250\,\mathrm{N}
$$

La fuerza apunta hacia $B$.

### 7.2. Proyección de una fuerza sobre un eje oblicuo

#### Ejemplo desarrollado

Una fuerza:

$$
\mathbf{F}=80\mathbf{i}-60\mathbf{j}+20\mathbf{k}\quad(\mathrm{N})
$$

actúa sobre un elemento.

Interesa su componente a lo largo de una barra con dirección:

$$
\mathbf{d}=2\mathbf{i}+\mathbf{j}+2\mathbf{k}
$$

Como:

$$
\left\lVert\mathbf{d}\right\rVert=3
$$

Se obtiene:

$$
\mathbf{u}_d=
\frac{2\mathbf{i}+\mathbf{j}+2\mathbf{k}}3
$$

Por producto escalar:

$$
F_d=\mathbf{F}\cdot\mathbf{u}_d
$$

$$
F_d=
\frac{80(2)+(-60)(1)+20(2)}3
$$

$$
\boxed{F_d=\frac{140}{3}\,\mathrm{N}}
$$

La componente escalar es positiva: actúa en el mismo sentido del eje elegido.

El vector proyección es:

$$
\boxed{
\mathbf{F}_d=
\frac{140}{9}
(2\mathbf{i}+\mathbf{j}+2\mathbf{k})
\quad(\mathrm{N})
}
$$

### 7.3. Momento espacial y equilibrio con par aplicado

#### Ejemplo desarrollado

Una fuerza:

$$
\mathbf{F}=(300,0,-400)\,\mathrm{N}
$$

actúa en:

$$
P=(0.6,0.2,0)\,\mathrm{m}
$$

respecto a $O$.

Hallar el momento y el par requerido para equilibrar únicamente su efecto rotacional respecto de $O$.

$$
\mathbf{M}_O=\mathbf{r}_{OP}\times\mathbf{F}
$$

$$
\mathbf{M}_O=
\begin{vmatrix}
\mathbf{i}&\mathbf{j}&\mathbf{k}\\
0.6&0.2&0\\
300&0&-400
\end{vmatrix}
$$

$$
\boxed{
\mathbf{M}_O=
-80\mathbf{i}+240\mathbf{j}-60\mathbf{k}
\quad(\mathrm{N\,m})
}
$$

El par necesario para anular este momento es:

$$
\mathbf{M}_c=-\mathbf{M}_O
$$

$$
\boxed{
\mathbf{M}_c=
80\mathbf{i}-240\mathbf{j}+60\mathbf{k}
\quad(\mathrm{N\,m})
}
$$

**Cuidado:** Agregar ese par cancela el momento respecto de $O$, pero **no** anula la fuerza resultante $\mathbf{F}$.

Para el equilibrio del cuerpo completo también se necesitan fuerzas de reacción.

### 7.4. Equilibrio plano básico con apoyos

#### Ejemplo desarrollado

Una viga horizontal de longitud $4\,\mathrm{m}$ tiene un pasador ideal plano en $A$ y un rodillo en $B$.

Actúa una carga concentrada de $600\,\mathrm{N}$ hacia abajo a $1.5\,\mathrm{m}$ de $A$.

Hallar las reacciones.

**Modelo:**

El pasador plano aporta $A_x,A_y$; el rodillo sobre piso horizontal aporta $B_y$.

Se toman $+x$ hacia la derecha, $+y$ hacia arriba y momentos antihorarios positivos.

**Momento en $A$:**

$$
\sum M_A=0
$$

$$
B_y(4)-600(1.5)=0
$$

$$
\boxed{B_y=225\,\mathrm{N}}
$$

**Fuerzas verticales:**

$$
\sum F_y=0
$$

$$
A_y+B_y-600=0
$$

$$
\boxed{A_y=375\,\mathrm{N}}
$$

**Fuerzas horizontales:**

$$
\sum F_x=0
$$

$$
\boxed{A_x=0}
$$

**Comprobación:**

$$
375+225=600\,\mathrm{N}
$$

Este ejemplo es **plano**; no sustituye el modelo de un pasador tridimensional con cinco incógnitas de la lámina 12.

---

## 8. Autoevaluación y síntesis

### 8.1. Errores que conviene detectar antes de entregar un problema

1. **Confundir magnitud y componente:** $A_x=-5$ puede ser negativo, pero $A=\left\lVert\mathbf{A}\right\rVert$ no.

2. **Olvidar el signo del eje:** Una componente negativa apunta en sentido opuesto al semieje positivo, no «carece de fuerza».

3. **Sumar módulos en lugar de componentes:** La resultante es una suma vectorial, no una suma de magnitudes.

4. **Invertir el producto cruz:** $\mathbf{r}\times\mathbf{F}$ y $\mathbf{F}\times\mathbf{r}$ tienen signos opuestos.

5. **Confundir par y fuerza:** $\mathrm{N}$ y $\mathrm{N\,m}$ tienen unidades y efectos físicos diferentes.

6. **Elegir una reacción sin atender la restricción:** Un cable no empuja; una superficie lisa no aporta fricción; un empotramiento puede aportar momentos.

7. **Dibujar fuerzas internas en el DCL del conjunto:** Sólo deben aparecer las cargas externas al cuerpo o sistema aislado.

8. **Usar seis ecuaciones sin examinar su independencia:** La geometría y las restricciones importan para la posibilidad de resolver el problema.

### 8.2. Preguntas de autoevaluación

Resuelva antes de mirar las respuestas.

Para todos los ejercicios se asume el sistema cartesiano de mano derecha.

1. Sea $\mathbf{v}=(2,-3,6)$. Halle $\left\lVert\mathbf{v}\right\rVert$.

2. ¿Qué significa físicamente que el coseno director respecto de $y$ sea negativo?

3. Sean $\mathbf{A}=(1,2,0)$ y $\mathbf{B}=(-3,0,4)$. Halle $\mathbf{A}+\mathbf{B}$.

4. Para los vectores de P3, calcule $\mathbf{A}\cdot\mathbf{B}$ e indique si el ángulo entre ellos es agudo u obtuso.

5. Calcule $\mathbf{i}\times\mathbf{k}$ y $\mathbf{k}\times\mathbf{i}$.

6. Una fuerza de $50\,\mathrm{N}$ tiene brazo perpendicular $0.4\,\mathrm{m}$ respecto de $O$. ¿Cuál es la magnitud del momento?

7. ¿Por qué el cumplimiento de $\sum\mathbf{F}=\mathbf{0}$ no garantiza equilibrio rígido?

8. En un rodillo liso sobre suelo horizontal, ¿en qué dirección actúa la reacción ideal?

9. ¿Cuántas incógnitas corresponden a una rótula esférica y cuántas a un empotramiento tridimensional?

10. En la lámina 17, ¿por qué el cable se reemplaza por una sola incógnita $T$ y no por tres fuerzas independientes?

#### Respuestas razonadas

**1. Magnitud del vector**

$$
\left\lVert\mathbf{v}\right\rVert
=\sqrt{2^2+(-3)^2+6^2}=7
$$

**2. Coseno director negativo**

La proyección sobre el eje $y$ tiene sentido negativo; el ángulo director con $+y$ es obtuso.

**3. Suma vectorial**

$$
\mathbf{A}+\mathbf{B}=(-2,2,4)
$$

Se obtiene sumando componentes correspondientes.

**4. Producto punto**

$$
\mathbf{A}\cdot\mathbf{B}
=1(-3)+2(0)+0(4)=-3
$$

El ángulo es obtuso.

**5. Producto cruz**

$$
\mathbf{i}\times\mathbf{k}=-\mathbf{j}
$$

$$
\mathbf{k}\times\mathbf{i}=+\mathbf{j}
$$

**6. Momento de una fuerza**

$$
M_O=Fd=50(0.4)=20\,\mathrm{N\,m}
$$

**7. Equilibrio de fuerzas**

Puede existir un par neto que produzca tendencia a rotación aunque la fuerza resultante sea cero.

**8. Reacción del rodillo**

Perpendicular al piso, es decir, vertical en ese caso ideal.

**9. Incógnitas de apoyo**

Tres fuerzas para la rótula; tres fuerzas más tres momentos para el empotramiento: seis incógnitas.

**10. Tensión del cable**

Porque el cable ideal sólo ejerce tracción **a lo largo de su propia recta**; su dirección queda fijada por la geometría $BC$ y sólo se desconoce el módulo.

### 8.3. Formulario esencial

**Representación cartesiana:**

$$
\mathbf{A}=A_x\mathbf{i}+A_y\mathbf{j}+A_z\mathbf{k}
$$

**Magnitud:**

$$
A=\sqrt{A_x^2+A_y^2+A_z^2}
$$

**Vector de posición entre dos puntos:**

$$
\mathbf{r}_{PQ}=\mathbf{r}_Q-\mathbf{r}_P
$$

**Vector unitario:**

$$
\mathbf{u}_A=\frac{\mathbf{A}}{\left\lVert\mathbf{A}\right\rVert}
$$

**Cosenos directores:**

$$
\cos\alpha=\frac{A_x}{A}
$$

$$
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1
$$

**Producto punto:**

$$
\mathbf{A}\cdot\mathbf{B}=AB\cos\theta
$$

**Ángulo entre vectores:**

$$
\theta=\cos^{-1}\left(
\frac{\mathbf{A}\cdot\mathbf{B}}{AB}
\right)
$$

**Producto cruz:**

$$
\mathbf{A}\times\mathbf{B}=
\begin{vmatrix}
\mathbf{i}&\mathbf{j}&\mathbf{k}\\
A_x&A_y&A_z\\
B_x&B_y&B_z
\end{vmatrix}
$$

**Momento de una fuerza:**

$$
\mathbf{M}_O=\mathbf{r}\times\mathbf{F}
$$

**Magnitud del momento:**

$$
M_O=Fd
$$

**Equilibrio de un cuerpo rígido:**

$$
\sum\mathbf{F}=\mathbf{0}
$$

$$
\sum\mathbf{M}_O=\mathbf{0}
$$

---

## Glosario breve

**Ángulo director:** Ángulo entre un vector no nulo y un semieje cartesiano positivo.

**Brazo de momento:** Distancia perpendicular desde el punto o eje considerado hasta la línea de acción de una fuerza.

**Componente cartesiana:** Proyección firmada de un vector sobre uno de los tres ejes.

**Cuerpo rígido:** Modelo mecánico que desprecia deformaciones de la pieza para estudiar el equilibrio.

**Diagrama de cuerpo libre:** Representación del sistema aislado y todas sus acciones externas.

**Fuerza resultante:** Suma vectorial de todas las fuerzas aplicadas.

**Línea de acción:** Recta infinita que contiene la dirección de una fuerza y pasa por su punto de aplicación.

**Momento de par:** Momento generado por dos fuerzas paralelas, opuestas y separadas; no tiene fuerza resultante.

**Reacción:** Fuerza o par que una conexión ejerce en respuesta a las restricciones de movimiento.

**Vector unitario:** Vector de magnitud uno que indica únicamente dirección y sentido.

---

## Referencias bibliográficas

1. Gere, J. M. y Goodno, B. J. (2012). *Mechanics of Materials*, 8.ª ed. Cengage Learning.

2. Hibbeler, R. C. (2017). *Mechanics of Materials*, 10.ª ed. Pearson.

3. Beer, F. P.; Johnston, E. R.; DeWolf, J. T. y Mazurek, D. F. (2015). *Mechanics of Materials*, 7.ª ed. McGraw-Hill Education.

4. Pytel, A. y Singer, F. L. (2011). *Mechanics of Materials*, 4.ª ed. Cengage Learning.

5. Popov, E. P. (1990). *Engineering Mechanics of Solids*, 2.ª ed. Prentice Hall.

6. Gere, J. M. (2004). *Mechanics of Materials*, 6.ª ed. Brooks/Cole, Thomson Learning.
