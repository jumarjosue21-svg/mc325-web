Este artículo presenta de forma ordenada la teoría necesaria para calcular deflexiones y pendientes en vigas y ejes cuya sección transversal no es constante. Parte de las notas del curso *Resistencia de Materiales II (MC 325)* de la UNI, que desarrollan la ecuación de la elástica, las funciones de Macaulay y el método de superposición, y las amplía con las hipótesis de la teoría, la jerarquía completa de ecuaciones diferenciales, el tratamiento del salto de rigidez, el método del área de momentos, el teorema de Castigliano, la viga conjugada, las vigas de igual resistencia, un ejemplo resuelto y un procedimiento de verificación. Se incorporan además la integración numérica de las curvas de carga, cortante, momento, giro y deflexión, y el método de integración gráfica con su tratamiento de escalas. El hilo conductor es que, al variar la inercia $I(x)$, esta pasa a formar parte de la integral que define la deformada.

**Palabras clave:** vigas de sección variable, deflexiones, elástica, funciones de Macaulay, integración numérica, integración gráfica, vigas de igual resistencia.

## 1. Introducción

En el diseño de vigas y ejes de transmisión no basta con verificar la resistencia: también hay que limitar las deflexiones lineales y angulares a valores aceptables o fijados por una norma técnica. Esto es especialmente importante en ejes con engranajes y rodamientos, donde una pendiente excesiva desalinea los apoyos, y en estructuras como puentes y vigas armadas, donde la sección se ajusta a la demanda de momento a lo largo del vano.

En la práctica, muchas vigas tienen sección variable: ejes con hombros, vigas de ala ancha reforzadas con cubreplacas, vigas troncocónicas o con altura parabólica. En ellas el momento de inercia $I$ depende de la posición $x$, y el cálculo clásico, desarrollado para $I$ constante, debe adaptarse.

* **Objetivo:** Explicar con claridad cómo se calculan deflexiones y pendientes cuando $I = I(x)$, organizando los métodos disponibles y señalando cuál usar en cada caso.
* **Origen y alcance del contenido:** El artículo integra dos conjuntos de notas de clase del curso y un conjunto de ampliaciones teóricas basadas en textos clásicos, como se distingue en la **Tabla 1**.

**Tabla 1.** Contenido de las notas de clase y ampliaciones

| Tema | Notas de clase | Ampliación en este artículo |
| :--- | :--- | :--- |
| **Ecuación de la elástica** | Deducción resumida | Hipótesis, signos, error de linealización |
| **Ecuaciones diferenciales** | Relaciones carga–cortante–momento–giro–deflexión | Jerarquía con $EI$ variable |
| **Sección variable** | Se enuncia como motivación | $I(x)$ para secciones comunes y salto de rigidez |
| **Funciones de Macaulay** | Definición, integral y tabla de términos | Origen de cada término, carga que termina, escalón de $EI$ |
| **Superposición** | Concepto y ejemplo hiperestático | Casos estándar |
| **Integración numérica y gráfica** | Regla del trapecio, giro inicial, escalas | Integración como método de solución |
| **Doble integración y área de momentos** | Solo mencionados | Desarrollo con $M/EI$ |
| **Energía y viga conjugada** | No incluidos | Castigliano y viga conjugada |
| **Igual resistencia y diseño** | No incluidos | Perfiles, ejemplo resuelto, criterios y errores comunes |

## 2. Fundamentos: la ecuación de la elástica

### 2.1. Hipótesis de la teoría

Al cargar una viga, su eje longitudinal se curva y adopta una forma llamada **curva elástica** o deformada. La ecuación que se deduce a continuación, que permite calcular esa curva, es válida bajo estas hipótesis:

1. Material lineal elástico, homogéneo e isótropo en cada tramo.
2. Las secciones planas permanecen planas y perpendiculares a la fibra neutra.
3. Deformaciones pequeñas (pendientes del orden de $0{,}05\text{ rad}$ o menores).
4. Viga esbelta (relación $L/h$ mayor que unos $10$), de modo que se desprecia la deformación por cortante.
5. Flexión simétrica: el plano de cargas contiene un eje principal de inercia y no hay torsión.
6. Variación suave de la sección. Si el cambio es brusco, aparecen concentraciones de esfuerzo cerca del escalón, aunque la deflexión global casi no cambia.

### 2.2. Deducción

Se analiza un tramo de longitud $dx$ de la viga, cuya deflexión a la distancia $x$ es $v$. La longitud de su capa neutra es $dx$. Al deformarse, ese tramo adopta un radio de curvatura $\rho$ y subtiende un ángulo central $d\theta$, de modo que $dx = \rho\,d\theta$. Una fibra a distancia $z$ del eje neutro tiene longitud $(\rho - z)\,d\theta$, y su deformación unitaria es:

$$\varepsilon = -\frac{z}{\rho} \tag{1}$$

Con la ley de Hooke $\sigma = E\,\varepsilon$ y la fórmula de flexión $\sigma = -Mz/I$, resulta:

$$\varepsilon = -\frac{M\,z}{E\,I} \tag{2}$$

Igualando $(1)$ y $(2)$:

$$\frac{1}{\rho} = \frac{M}{E\,I} \tag{3}$$

El producto $EI$ se denomina **rigidez a flexión**: a mayor $EI$, menor curvatura para el mismo momento. Por otra parte, la curvatura de una curva plana $v(x)$ es:

$$\frac{1}{\rho} = \frac{v''}{\left[1 + (v')^2\right]^{3/2}} \tag{4}$$

Si la viga trabaja en régimen elástico, la pendiente $v' = \tan\theta \approx \theta$ es pequeña y $(v')^2$ es despreciable frente a $1$. Para $\theta = 0{,}05\text{ rad}$ el error de omitirlo es de $0{,}25\%$, y para $\theta = 0{,}1\text{ rad}$ de $1{,}5\%$. Se obtiene la **ecuación de la elástica**:

$$E\,I(x)\,v''(x) = M(x) \tag{5}$$

### 2.3. Convención de signos y forma cualitativa de la deformada

Se adopta $x$ positivo hacia la derecha, $v$ positiva hacia arriba y $M$ positivo cuando produce concavidad hacia arriba. Con ella, $v''$ y $M$ tienen el mismo signo. Si se toma $v$ positiva hacia abajo, el signo cambia. Lo esencial es no mezclar convenciones dentro de un mismo problema.

Como $v''$ tiene el signo de $M$, el diagrama de momento flector permite anticipar la forma de la deformada: la curva es cóncava hacia arriba donde $M > 0$, cóncava hacia abajo donde $M < 0$, y tiene un punto de inflexión donde $M = 0$. Las deflexiones son nulas en los apoyos simples.

## 3. Extensión a sección variable

### 3.1. Relaciones diferenciales entre carga, cortante, momento, giro y deflexión

Las relaciones diferenciales entre las fuerzas internas de una viga y las cargas distribuidas $q(x)$ sobre ella son:

$$\frac{dV}{dx} = -q, \qquad V = -\int q\,dx + V_0 \tag{6}$$

$$\frac{dM}{dx} = V, \qquad M = \int V\,dx + M_0 \tag{7}$$

Es decir, las fuerzas cortantes se obtienen integrando el diagrama de cargas, y los momentos flectores integrando el de cortantes. En la notación de la **Tabla 2**, que usa $w$ para la carga, se cumple $w = -q$ según esta convención.

De la teoría de vigas, la ecuación diferencial que liga la deflexión con una carga distribuida es:

$$\frac{d^4 v}{dx^4} = -\frac{q}{EI} \tag{8}$$

Si la rigidez flexional es constante, basta integrar la distribución de cargas para obtener las cortantes:

$$V = EI\frac{d^3 v}{dx^3} = -\int q\,dx + V_0 \tag{9}$$

y, de forma análoga, integrando las cortantes se obtiene el diagrama de momentos:

$$M = EI\frac{d^2 v}{dx^2} = \int V\,dx + M_0 \tag{10}$$

Con el diagrama de momentos reducidos $M/EI$ (hipótesis de Euler–Bernoulli, $v'' = M/EI$), al integrar se obtienen los giros y, finalmente, las deflexiones:

$$\frac{dv}{dx} = \theta = \int \frac{M}{EI}\,dx + \theta_0 \tag{11}$$

$$v = \int \theta\,dx + v_0 \tag{12}$$

### 3.2. Jerarquía de ecuaciones diferenciales

La elástica se relaciona con las demás magnitudes de la viga mediante derivadas sucesivas, como resume la **Tabla 2**.

**Tabla 2.** Relaciones diferenciales de la viga

| Magnitud | $EI$ constante | $EI$ variable |
| :--- | :---: | :---: |
| **Pendiente** | $\theta = \frac{dv}{dx}$ | $\theta = \frac{dv}{dx}$ |
| **Momento flector** | $M = EI\frac{d^2v}{dx^2}$ | $M = EI(x)\frac{d^2v}{dx^2}$ |
| **Fuerza cortante** | $V = \frac{dM}{dx} = EI\frac{d^3v}{dx^3}$ | $V = \frac{d}{dx}\left[EI(x)\frac{d^2v}{dx^2}\right]$ |
| **Carga distribuida** | $w = \frac{dV}{dx} = EI\frac{d^4v}{dx^4}$ | $w = \frac{d^2}{dx^2}\left[EI(x)\frac{d^2v}{dx^2}\right]$ |

Cuando $EI$ varía, $V \neq EI\,v'''$, porque al derivar $EI(x)\,v''$ también se deriva $EI(x)$:

$$V = EI\,v''' + (EI)'\,v''$$

Este es un error frecuente. Por ello, en sección variable conviene obtener $M(x)$ por estática (que no depende de la sección en vigas isostáticas) y dividirlo después por $EI(x)$.

### 3.3. El momento de inercia como función de $x$

La **Tabla 3** presenta $I(x)$ para las secciones más comunes.

**Tabla 3.** Momento de inercia según el tipo de variación

| Sección | $I(x)$ | Observación |
| :--- | :---: | :--- |
| **Rectangular**, ancho $b$ constante, altura $h(x)$ | $\frac{bh^3}{12}$ | Si $h$ es lineal, $I \propto x^3$ |
| **Rectangular**, altura $h$ constante, ancho $b(x)$ | $\frac{bh^3}{12}$ | Si $b$ es lineal, $I \propto x$ |
| **Circular** de radio $r(x)$ | $\frac{\pi r^4}{4}$ | Si $r$ es lineal (cono), $I \propto x^4$ |
| **Tubular** (radios $R$ y $r$) | $\frac{\pi(R^4 - r^4)}{4}$ | Varía si cambia $R$ o $r$ |
| **Escalonada** | $I_1, I_2, \dots$ | Constante por tramos |

Los exponentes $3$ y $4$ hacen que la inercia cambie muy rápido: un cono cuyo diámetro se duplica tiene $16$ veces más inercia.

Se distinguen dos familias de problemas:

* **Secciones continuamente variables** (cono, parábola, cuña): $I(x)$ es analítica y se integra directamente, con integrales de potencias de $x$, a veces fraccionarias.
* **Secciones escalonadas** (ejes con hombros, cubreplacas): $I$ es constante por tramos y hay que imponer continuidad en cada cambio de sección.

### 3.4. Efecto del salto de rigidez

En un cambio de sección, $M$ es continuo pero $EI$ salta, de modo que la curvatura $v'' = M/EI$ da un salto. La pendiente $v'$ y la deflexión $v$ permanecen continuas: la viga no se quiebra. La elástica es más plana en el tramo rígido y más curvada en el flexible, sin pico en la unión.

### 3.5. Condiciones de borde y de continuidad

La doble integración genera dos constantes por tramo, que se determinan con las condiciones de la **Tabla 4**.

**Tabla 4.** Condiciones de borde y continuidad

| Situación | Condiciones |
| :--- | :--- |
| **Empotramiento** | $v = 0$ y $\theta = 0$ |
| **Apoyo simple** | $v = 0$ |
| **Extremo libre** | $M = 0$ y $V = 0$ |
| **Cambio de sección o carga intermedia** | $v$ y $\theta$ iguales a ambos lados |
| **Articulación intermedia** | $M = 0$, $v$ continua, $\theta$ puede saltar |
| **Simetría de geometría y carga** | $\theta = 0$ en el eje de simetría |

## 4. Métodos de solución

### 4.1. Doble integración

Integrando $(5)$ dos veces se obtiene:

$$\theta(x) = \int \frac{M}{EI}\,dx + C_1 \tag{13}$$

$$v(x) = \iint \frac{M}{EI}\,dx\,dx + C_1 x + C_2 \tag{14}$$

Con $I(x)$ analítica, la integración es directa. Con $n$ tramos aparecen $2n$ constantes, lo que vuelve el cálculo tedioso y motiva las funciones de Macaulay.

### 4.2. Funciones de Macaulay

La función de Macaulay se define como $\langle x - a \rangle^n = 0$ si $x \le a$ y $(x - a)^n$ si $x > a$. Para $n = 0$ equivale a un escalón unitario. Su integral sigue la regla de la potencia:

$$\int \langle x - a \rangle^n\,dx = \frac{\langle x - a \rangle^{n+1}}{n + 1} + C \tag{15}$$

Su ventaja es que la constante de integración es única para toda la viga, así que se reduce de $2n$ a $2$ constantes. Cada término de la **Tabla 5** es el momento de una carga situada a la izquierda de la sección $x$.

**Tabla 5.** Términos de Macaulay para el momento flector

| Carga aplicada | $M(x)$ | Origen |
| :--- | :---: | :--- |
| **Momento puntual $M_0$** | $M_0\langle x - a \rangle^0$ | Contribución constante del momento puntual $M_0$ |
| **Fuerza puntual $P$** | $-P\langle x - a \rangle$ | Fuerza $P$ con brazo $(x - a)$ |
| **Carga uniforme $\omega$** | $-\frac{\omega}{2}\langle x - a \rangle^2$ | Resultante $\omega(x - a)$ con brazo $(x - a)/2$ |
| **Carga triangular de pendiente $m$** | $-\frac{m}{6}\langle x - a \rangle^3$ | Resultante $m(x - a)^2/2$ con brazo $(x - a)/3$ |

Se observa un patrón: el exponente es una unidad mayor que el de la intensidad de la carga, y el denominador es el factorial correspondiente.

Hay dos precauciones importantes:

1. **Macaulay solo «enciende» términos, no los apaga:** una carga que termina en $x = b$ se trata prolongándola hasta el final y sumando una carga opuesta desde $b$.
2. **Salto de rigidez:** si la rigidez salta de $EI_1$ a $EI_2$ en $x = c$, se puede escribir:

$$\frac{1}{EI(x)} = \frac{1}{EI_1} + \left(\frac{1}{EI_2} - \frac{1}{EI_1}\right)\langle x - c \rangle^0$$

con lo que $v'' = M/EI_1 + (1/EI_2 - 1/EI_1)\,M\,\langle x - c \rangle^0$ y el segundo término se integra desde $c$. Para pocos escalones suele ser más claro integrar por tramos e imponer continuidad.

### 4.3. Área de momentos

Se aplican dos teoremas al diagrama $M/EI$:

$$\theta_{B/A} = \int \frac{M}{EI}\,dx \tag{16}$$

$$t_{B/A} = \int \bar{x}\,\frac{M}{EI}\,dx \tag{17}$$

La ecuación $(16)$ da el cambio de pendiente entre $A$ y $B$ como el área bajo $M/EI$. La ecuación $(17)$ da la desviación tangencial de $B$ respecto a la tangente en $A$ como el momento estático de esa área respecto a $B$, donde $\bar{x}$ es la distancia de cada elemento a $B$. En sección variable se dibuja $M/EI$ y no $M$: si $I$ salta, el diagrama $M/EI$ también salta aunque $M$ sea continuo. En voladizos es muy directo, pues la tangente en el empotramiento es horizontal y la deflexión del extremo es $t_{B/A}$. Es poco cómodo cuando $M/EI$ es una función complicada, como en un cono.

### 4.4. Superposición

Si el material es lineal y las deformaciones no alteran apreciablemente la geometría donde actúan las cargas, la respuesta a varias cargas es la suma de las respuestas individuales: si la deflexión debida a una carga es $y_1$ y la debida a otra es $y_2$, la deflexión total es $y = y_1 + y_2$. La **Tabla 6** recoge casos estándar con $EI$ constante, útiles para tramos de rigidez constante.

**Tabla 6.** Casos estándar ($EI$ constante, luz $L$)

| Caso | Deflexión máxima | Pendiente máxima |
| :--- | :---: | :---: |
| **Voladizo, $P$ en el extremo** | $\frac{PL^3}{3EI}$ | $\frac{PL^2}{2EI}$ |
| **Voladizo, $\omega$ uniforme** | $\frac{\omega L^4}{8EI}$ | $\frac{\omega L^3}{6EI}$ |
| **Voladizo, $M_0$ en el extremo** | $\frac{M_0 L^2}{2EI}$ | $\frac{M_0 L}{EI}$ |
| **Apoyada, $P$ al centro** | $\frac{PL^3}{48EI}$ | $\frac{PL^2}{16EI}$ |
| **Apoyada, $\omega$ uniforme** | $\frac{5\,\omega L^4}{384EI}$ | $\frac{\omega L^3}{24EI}$ |

En vigas escalonadas, si un tramo rígido gira un ángulo $\theta$ en su extremo, el tramo siguiente se desplaza además $\theta$ por su longitud como cuerpo rígido.

En **vigas hiperestáticas** se retira una reacción redundante, se calcula la deflexión del punto que restringía y se impone que al restaurarla esa deflexión sea nula. Por ejemplo, en una viga empotrada en $A$ con apoyo simple en $B$ y carga $P$ al centro ($EI$ constante), sin el apoyo la deflexión en $B$ es $y_B = 5PL^3/(48EI)$; la reacción $B_y$ produce la misma deflexión en sentido contrario, $B_y L^3/(3EI)$; y al igualarlas resulta $B_y = 5P/16$.

### 4.5. Teorema de Castigliano

La energía de deformación por flexión es $U = \int M^2/(2EI(x))\,dx$. El segundo teorema de Castigliano da la deflexión en el punto de aplicación de $P$ y en su dirección:

$$\delta = \frac{\partial U}{\partial P} = \int \frac{M\,\frac{\partial M}{\partial P}}{EI(x)}\,dx \tag{18}$$

Para un punto sin carga se coloca una carga ficticia $Q$, se deriva respecto de $Q$ y al final se hace $Q = 0$; para pendientes se usa un momento ficticio. Es muy eficiente cuando se pide la deflexión de un solo punto y $M$ e $I$ son funciones sencillas. Con $I$ escalonada, la integral se divide en una suma por tramos.

### 4.6. Viga conjugada

Se construye una viga ficticia de igual longitud cargada con el diagrama $M/EI$. Entonces **la fuerza cortante de la viga conjugada es la pendiente real y su momento flector es la deflexión real**. Los apoyos se transforman así:

* Empotramiento $\leftrightarrow$ extremo libre.
* Apoyo simple de extremo $\leftrightarrow$ apoyo simple de extremo.
* Apoyo simple intermedio $\leftrightarrow$ articulación.
* Articulación intermedia $\leftrightarrow$ apoyo simple intermedio.

Su ventaja es que los saltos de $M/EI$ por cambio de sección se convierten en cargas escalonadas, manejables con estática.

### 4.7. Integración numérica

Cuando $q(x)$ o $I(x)$ no admiten una integración analítica cómoda, las integrales de la sección 3 se evalúan numéricamente sobre una malla de puntos $x_0 < x_1 < \dots < x_n$, aplicando la regla del trapecio en cada intervalo. Para $i = 1, \dots, n$:

$$V_i = V_{i-1} - 0{,}5\,(q_i + q_{i-1})(x_i - x_{i-1}) \tag{19}$$

$$M_i = M_{i-1} + 0{,}5\,(V_i + V_{i-1})(x_i - x_{i-1}) \tag{20}$$

$$\theta_i = \theta_{i-1} + 0{,}5\left[\left(\frac{M}{EI}\right)_i + \left(\frac{M}{EI}\right)_{i-1}\right](x_i - x_{i-1}) \tag{21}$$

$$v_i = v_{i-1} + 0{,}5\,(\theta_i + \theta_{i-1})(x_i - x_{i-1}) \tag{22}$$

Las ecuaciones $(19)$–$(22)$ calculan, en ese orden, el diagrama de cortantes a partir del de cargas, el de momentos a partir del de cortantes, los giros a partir del diagrama de momentos reducidos y las deflexiones a partir de los giros. Como $EI$ está dentro de $(M/EI)_i$, el método admite directamente cualquier $I(x)$, continua o escalonada.

**Giro inicial.** El cálculo de los giros requiere el giro inicial $\theta_0$ de la sección. Este se determina considerando que el eje $x$ debe dividir el diagrama de deflexiones por la mitad: la posición del eje se ubica a $b$ unidades del origen, de modo que el área $A_1$ bajo la curva de giros y el área $A_2$ sobre ella tengan la misma magnitud. El área del rectángulo $bL$ es entonces igual al área bajo la curva de giros:

$$bL = \int_0^L \theta\,dx \tag{23}$$

$$b = \frac{\int_0^L \theta\,dx}{L} \tag{24}$$

En la práctica se integra primero con $\theta_0 = 0$ para obtener un giro provisional $\theta^*$, se calcula $b$ con $(24)$ y se corrige con $\theta = \theta^* - b$, de modo que la deflexión resulte nula en ambos extremos.

### 4.8. Integración gráfica y escalas

Una forma alternativa de integrar las expresiones es mediante métodos gráficos, basados esencialmente en la regla del trapecio. El área debajo de la función $f$ entre $x_{i-1}$ y $x_i$ se aproxima así: si la integral hasta el punto $x_{i-1}$ es conocida e igual a $b_{i-1}$, entonces la integral hasta $x_i$ es:

$$s = b_{i-1} + 0{,}5\,\big(f(x_i) + f(x_{i-1})\big)(x_i - x_{i-1}) \tag{25}$$

Un método gráfico puede desarrollarse introduciendo un parámetro $e$, la distancia medida a la izquierda del eje $y$. Al multiplicar la pendiente por el avance lineal en $x$ se obtiene:

$$S_i = m_{AB}(x_i - x_{i-1}) = \frac{f(\bar{x})}{e}(x_i - x_{i-1}) \tag{26}$$

A menudo, en un dibujo, por limitaciones de espacio o comodidad visual, no es posible dibujar las magnitudes reales, sino que es necesario usar escalas. La escala horizontal y la vertical son:

$$E_x = \frac{\text{medidas reales}}{\text{medidas dibujo}} = \frac{x_i}{a_i} \tag{27}$$

$$E_y = \frac{\text{medidas reales}}{\text{medidas dibujo}} = \frac{y_i}{b_i} \tag{28}$$

La integración de una función $f$ con medidas de dibujo produce un resultado numérico que contiene una constante de integración y una sumatoria:

$$s = c_0 + \frac{b_1}{e}\Delta a_1 + \frac{b_2}{e}\Delta a_2 + \dots + \frac{b_n}{e}\Delta a_n \tag{29}$$

$$s = \frac{Z_0}{E_z} + \frac{y_1}{E_x E_y e}\Delta x_1 + \dots + \frac{y_n}{E_x E_y e}\Delta x_n \tag{30}$$

La escala de la constante de integración deberá ser:

$$E_z = E_x E_y e \tag{31}$$

### 4.9. Cuándo usar cada método

**Tabla 7.** Selección del método

| Situación | Método recomendado |
| :--- | :--- |
| **$I(x)$ analítica (cono, parábola) y se pide toda la elástica** | Doble integración |
| **Varias cargas y $EI$ constante** | Macaulay |
| **$I$ escalonada con pocos tramos** | Área de momentos o viga conjugada |
| **Se pide la deflexión de un solo punto** | Castigliano |
| **Cargas combinadas o viga hiperestática** | Superposición |
| **$I(x)$ o cargas sin expresión analítica, o cálculo por computador** | Integración numérica |
| **Estimación rápida a mano de toda la elástica** | Integración gráfica |

## 5. Ejemplo resuelto: voladizo de igual resistencia

Sea un voladizo de longitud $L$, con carga $P$ en el extremo libre ($x = 0$), empotrado en $x = L$, de ancho $b$ constante y altura $h(x)$, diseñado para que el esfuerzo máximo sea el mismo, $\sigma$, en toda sección. Se toma $v$ positiva en el sentido de la carga y se trabaja con magnitudes.

* **Perfil:** $M = Px$ y $\sigma = 6M/(bh^2)$. Exigiendo $\sigma$ constante: $h^2 = 6Px/(b\sigma)$, es decir, con $h_0$ la altura en el empotramiento ($x = L$):

$$h(x) = h_0\sqrt{\frac{x}{L}}, \qquad h_0^2 = \frac{6PL}{b\,\sigma} \tag{32}$$

Es un perfil parabólico de eje horizontal.

* **Inercia:**

$$I(x) = \frac{bh^3}{12} = \frac{b\,h_0^3\,x^{3/2}}{12L^{3/2}}$$

* **Integración:** De $EI\,v'' = Px$ resulta $v'' = K\,x^{-1/2}$, con $K = 12\,P\,L^{3/2}/(E\,b\,h_0^3)$. Integrando: $v' = 2K\,x^{1/2} + C_1$ y

$$v = \frac{4K}{3}x^{3/2} + C_1 x + C_2$$

* **Condiciones:** En el empotramiento ($x = L$): $v' = 0$ da $C_1 = -2K\sqrt{L}$, y $v = 0$ da $C_2 = \tfrac{2}{3}K\,L^{3/2}$.

* **Resultado:** La deflexión del extremo libre ($x = 0$) es $v(0) = C_2$:

$$\delta = \frac{8\,P\,L^3}{E\,b\,h_0^3} \tag{33}$$

Un voladizo prismático de altura $h_0$ tendría $\delta = PL^3/(3EI) = 4PL^3/(E\,b\,h_0^3)$. La viga de igual resistencia usa menos material pero se deflecta el doble. Es una lección general: aligerar zonas poco solicitadas reduce el peso pero casi siempre aumenta la flecha, por lo que en muchos diseños manda la rigidez y no la resistencia.

## 6. Vigas de igual resistencia y criterios de diseño

### 6.1. Vigas de igual resistencia

Son vigas cuya sección se dimensiona para que $\sigma = M(x)\,c(x)/I(x)$ sea constante, lo que exige un módulo de sección $S(x) = I/c = M(x)/\sigma$. La **Tabla 8** resume el resultado para tres casos.

**Tabla 8.** Perfiles de igual resistencia

| Sección | Parámetro libre | Resultado |
| :--- | :---: | :---: |
| **Rectangular**, $b$ constante | $h(x)$ | $h \propto \sqrt{M(x)}$ |
| **Rectangular**, $h$ constante | $b(x)$ | $b \propto M(x)$ |
| **Circular** | $r(x)$ | $r^3 \propto M(x)$ |

Cerca de los apoyos, donde $M$ tiende a cero, debe mantenerse una sección mínima que resista el cortante, pues la fórmula de flexión sola daría sección nula.

### 6.2. Criterios de diseño por deformación

Resistencia y rigidez son verificaciones independientes: una viga puede cumplir una y fallar la otra. En edificios y puentes, las normas limitan la flecha a una fracción de la luz, con valores orientativos del orden de $L/250$ a $L/500$ según el elemento; debe consultarse la norma aplicable. En ejes de transmisión se limitan la pendiente en los rodamientos y la flecha en los engranajes, con límites que dan los fabricantes. En equipos de precisión los límites son más estrictos. Además, el punto de máxima deflexión no siempre está al centro: se halla donde $v'(x) = 0$.

## 7. Procedimiento recomendado y verificación

1. Dibujar la viga, elegir el origen de $x$ y fijar la convención de signos.
2. Calcular las reacciones por estática (o por compatibilidad si es hiperestática).
3. Obtener $M(x)$ por tramos o con Macaulay y dibujar su diagrama para anticipar la forma de la elástica.
4. Determinar $I(x)$ en cada tramo.
5. Elegir el método según la **Tabla 7**.
6. Plantear las condiciones de borde y continuidad de la **Tabla 4**.
7. Resolver y obtener $v(x)$ y $\theta(x)$.
8. Verificar el resultado.

**Verificaciones.** Comprobar la coherencia de unidades; que la deflexión vaya hacia donde empujan las cargas; que la elástica sea cóncava donde $M > 0$ y convexa donde $M < 0$, con punto de inflexión donde $M = 0$; que $v = 0$ en los apoyos y $\theta = 0$ en los empotramientos; que el resultado quede entre el de la viga prismática con la inercia mínima y la de inercia máxima; y que, al hacer $I_2 \to I_1$ en una viga escalonada, se recupere la fórmula prismática.

**Errores frecuentes.** Usar $V = EI\,v'''$ cuando $EI$ no es constante; olvidar la continuidad de $v$ y $\theta$ en los cambios de sección; tomar $I$ constante por comodidad en un eje escalonado; mezclar convenciones de signos; integrar $M/EI$ sin dividir cada tramo por su propio $I$; y prolongar una carga distribuida que termina sin restar la carga opuesta desde el punto donde finaliza.

## 8. Conclusiones

Cuando el momento de inercia $I(x)$ varía a lo largo de la viga, la rigidez a flexión $EI(x)$ entra dentro del integrando de la ecuación de la elástica ($v'' = M(x)/[EI(x)]$), impidiendo aplicar directamente las fórmulas prismáticas clásicas. La elección del método adecuado depende de la forma en que cambia la sección: la doble integración directa resulta ideal para variaciones analíticas suaves, el área de momentos o la viga conjugada simplifican el análisis en secciones escalonadas con pocos tramos, y la integración numérica o gráfica resuelve de forma general perfiles arbitrarios. Finalmente, el análisis de las vigas de igual resistencia demuestra que optimizar el material según el esfuerzo máximo incrementa las deflexiones, por lo que en elementos esbeltos o ejes de transmisión el criterio de rigidez suele gobernar el diseño.