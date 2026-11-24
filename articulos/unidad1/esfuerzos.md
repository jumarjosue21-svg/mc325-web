## 1. Cuerpo Sujeto a un Conjunto de Cargas Externas

Un medio continuo sometido a un conjunto de cargas externas $P_1, P_2, P_3, P_4$ desarrolla esfuerzos internos en cada punto $Q$ del interior del cuerpo, los cuales pueden analizarse al seccionar el sólido mediante planos ortogonales que pasan por dicho punto.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, font=\sffamily, scale=0.88]
  \definecolor{cadBlue}{RGB}{0,20,245}
  \definecolor{cadGray}{RGB}{190,190,190}
  \definecolor{forceRed}{RGB}{230,15,15}
  \definecolor{planeBeige}{RGB}{250,236,207}
  \definecolor{planeBlue}{RGB}{198,220,238}
  \definecolor{planeGreenA}{RGB}{190,245,185}
  \definecolor{planeGreenB}{RGB}{145,225,160}

  % =========================================================
  % FIGURA IZQUIERDA: MEDIO CONTINUO SUJETO A CARGAS EXTERNAS
  % =========================================================
  \begin{scope}[shift={(0,0)}]
    % --- Lineas grises de construccion (caja isometrica y tangencias) ---
    % Cara superior de la caja envolvente (z = 3.5)
    \draw[thin, cadGray] (0.000,3.500) -- (5.196,6.500) -- (6.928,5.500) -- (1.732,2.500) -- cycle;
    \draw[thin, cadGray] (0.866,3.000) -- (5.196,5.500);
    \draw[thin, cadGray] (4.330,6.000) -- (6.062,5.000);

    % Cara inferior de la caja envolvente (z = 0)
    \draw[thin, cadGray] (0.000,0.000) -- (5.196,3.000) -- (6.928,2.000) -- (1.732,-1.000) -- cycle;

    % Generatrices de tangencia del redondeo inferior y de la oreja superior
    \draw[thin, cadGray] (3.997,2.308) -- (5.729,1.308);
    \draw[thin, cadGray] (4.330,2.885) -- (6.062,1.885);
    \draw[thin, cadGray] (4.330,4.000) -- (6.062,3.000);
    \draw[thin, cadGray] (5.196,5.500) -- (6.928,4.500);

    % Plano medio horizontal sobre el cuerpo (z = 1.75, prolongado hasta el arco de la oreja)
    \draw[thin, cadGray] (0.866,2.250) arc (120:240:0.57735) arc (240:300:1.73205) -- (6.639,3.583);

    % Aristas verticales de la caja y lineas verticales de tangencia
    \draw[thin, cadGray] (0.000,0.000) -- (0.000,3.500);
    \draw[thin, cadGray] (1.732,-1.000) -- (1.732,2.500);
    \draw[thin, cadGray] (5.196,3.000) -- (5.196,6.500);
    \draw[thin, cadGray] (6.928,2.000) -- (6.928,5.500);
    \draw[thin, cadGray] (0.866,-0.500) -- (0.866,4.000);
    \draw[thin, cadGray] (2.598,-0.500) -- (2.598,3.000);

    % Perfil posterior oculto (v = 0) perfectamente tangente y agujeros posteriores
    \draw[thin, cadGray] (0.577,0.000) arc (180:120:0.57735);
    \draw[thin, cadGray] (4.907,6.000) arc (60:0:0.57735) arc (0:-60:1.73205) -- (4.330,2.885) arc (0:-60:0.66684);
    \draw[thin, cadGray, rotate around={60:(4.330,5.000)}] (4.330,5.000) ellipse (0.52 and 0.30);
    \draw[thin, cadGray, rotate around={60:(4.023,2.795)}] (4.023,2.795) ellipse (0.21 and 0.125);

    % --- Contorno principal de la pieza en azul (trazo continuo cerrado) ---
    \draw[line width=1.25pt, cadBlue, line join=round]
      (4.330,6.000) -- (0.866,4.000)
      arc (120:240:0.57735)
      arc (240:300:1.73205)
      -- (6.062,5.000)
      arc (120:0:0.57735)
      arc (0:-60:1.73205)
      -- (6.062,1.885)
      arc (0:-60:0.66684)
      -- (2.598,-0.500)
      arc (300:240:1.73205)
      arc (240:180:0.57735)
      -- (0.577,3.500);

    % Oreja superior trasera y generatriz superior de la oreja
    \draw[line width=1.25pt, cadBlue, line join=round]
      (4.330,6.000) arc (120:60:0.57735) -- (6.639,5.000);

    % Agujeros en la cara frontal derecha (v = 1)
    \draw[line width=1.25pt, cadBlue, rotate around={60:(6.062,4.000)}] (6.062,4.000) ellipse (0.52 and 0.30);
    \draw[line width=1.25pt, cadBlue, rotate around={60:(5.758281,1.704545)}] (5.758281,1.704546) ellipse (0.21 and 0.125);

    % --- Flechas de fuerzas externas P1, P2, P3, P4 ---
    % P1
    \filldraw[fill=forceRed, draw=black, very thin]
      (1.460,5.050) -- (1.540,5.050) -- (1.540,3.850) -- (1.630,3.850) -- (1.500,3.480) -- (1.370,3.850) -- (1.460,3.850) -- cycle;
    \node[above] at (1.550,5.080) {\large $\mathsf{P}_{\!\mathsf{1}}$};

    % P2
    \filldraw[fill=forceRed, draw=black, very thin]
      (2.960,5.850) -- (3.040,5.850) -- (3.040,4.650) -- (3.130,4.650) -- (3.000,4.280) -- (2.870,4.650) -- (2.960,4.650) -- cycle;
    \node[above] at (3.100,5.880) {\large $\mathsf{P}_{\!\mathsf{2}}$};

    % P3
    \filldraw[fill=forceRed, draw=black, very thin]
      (4.310,6.580) -- (4.390,6.580) -- (4.390,5.380) -- (4.480,5.380) -- (4.350,5.010) -- (4.220,5.380) -- (4.310,5.380) -- cycle;
    \node[above right] at (4.280,6.560) {\large $\mathsf{P}_{\!\mathsf{3}}$};

    % P4
    \begin{scope}[shift={(2.598,1.250)}, rotate=-30]
      \filldraw[fill=forceRed, draw=black, very thin]
        (0.000,0.000) -- (0.370,0.130) -- (0.370,0.040) -- (1.650,0.040) -- (1.650,-0.040) -- (0.370,-0.040) -- (0.370,-0.130) -- cycle;
    \end{scope}
    \node[right] at (3.880,0.710) {\large $\mathsf{P}_{\!\mathsf{4}}$};

    % Titulo inferior izquierdo
    \node[anchor=north west, align=left] at (0.00,-1.35)
      {\fontsize{14}{17}\selectfont\sffamily Medio continuo sujeto a\\[2pt]\fontsize{14}{17}\selectfont\sffamily cargas externas};
  \end{scope}

  % =========================================================
  % FIGURA DERECHA: UN PUNTO DENTRO DEL CUERPO
  % =========================================================
  \begin{scope}[shift={(10.2,0.35)}]
    % --- Planos internos que se intersectan en Q (u=0.5, v=0.5, z=1.75) ---
    % 1. Plano vertical crema (u = 0.5)
    \fill[planeBeige, opacity=0.88]
      (0.866,0.500) -- (2.598,-0.500) -- (2.598,3.000) -- (0.866,4.000) -- cycle;

    % 2. Plano vertical celeste inferior (v = 0.5, z in [0,1.75])
    \fill[planeBlue, opacity=0.88]
      (0.866,-0.500) -- (1.732,0.000) -- (1.732,1.750) -- (0.866,1.250) -- cycle;

    % 3. Plano horizontal verde (z = 1.75)
    \fill[planeGreenA, opacity=0.88]
      (1.732,1.750) -- (0.866,2.250) arc (120:240:0.57735) -- cycle;
    \fill[planeGreenB, opacity=0.90]
      (1.732,1.750) -- (0.866,1.250) arc (240:300:1.73205) -- cycle;

    % 4. Plano vertical celeste superior (v = 0.5, z in [1.75,3.5])
    \fill[planeBlue, opacity=0.78]
      (0.866,1.250) -- (1.732,1.750) -- (1.732,3.500) -- (0.866,3.000) -- cycle;

    % Bordes y lineas de interseccion de los planos
    \draw[thin, cadGray!90!black] (0.866,0.500) -- (0.866,4.000);
    \draw[thin, cadGray!90!black] (0.866,4.000) -- (2.598,3.000);
    \draw[thin, cadGray!90!black] (0.866,0.500) -- (2.598,-0.500);
    \draw[thin, cadGray!90!black] (0.866,2.250) -- (2.598,1.250);
    \draw[thin, cadGray!90!black] (0.866,1.250) -- (1.732,1.750);
    \draw[thin, cadGray!90!black] (1.732,0.000) -- (1.732,3.500);
    \draw[thin, cadGray!90!black] (0.866,2.250) arc (120:240:0.57735) arc (240:300:1.73205);

    % --- Lineas grises de construccion (caja isometrica y tangencias) ---
    \draw[thin, cadGray] (0.000,3.500) -- (5.196,6.500) -- (6.928,5.500) -- (1.732,2.500) -- cycle;
    \draw[thin, cadGray] (0.866,3.000) -- (1.73,3.51);
    \draw[thin, cadGray] (4.330,6.000) -- (6.062,5.000);

    \draw[thin, cadGray] (0.000,0.000) -- (5.196,3.000) -- (6.928,2.000) -- (1.732,-1.000) -- cycle;

    % Generatrices de tangencia del redondeo inferior y de la oreja superior
    \draw[thin, cadGray] (3.997,2.308) -- (5.729,1.308);
    \draw[thin, cadGray] (4.330,2.885) -- (6.062,1.885);
    \draw[thin, cadGray] (4.330,4.000) -- (6.062,3.000);
    \draw[thin, cadGray] (5.196,5.500) -- (6.928,4.500);

    % Aristas verticales de la caja y lineas verticales de tangencia
    \draw[thin, cadGray] (0.000,0.000) -- (0.000,3.500);
    \draw[thin, cadGray] (1.732,-1.000) -- (1.732,2.500);
    \draw[thin, cadGray] (5.196,3.000) -- (5.196,6.500);
    \draw[thin, cadGray] (6.928,2.000) -- (6.928,5.500);
    \draw[thin, cadGray] (0.866,-0.500) -- (0.866,3.000);
    \draw[thin, cadGray] (2.598,-0.500) -- (2.598,3.000);

    % Perfil posterior oculto perfectamente tangente y agujeros posteriores
    \draw[thin, cadGray] (0.577,0.000) arc (180:120:0.57735);
    \draw[thin, cadGray] (4.907,6.000) arc (60:0:0.57735) arc (0:-60:1.73205) -- (4.330,2.885) arc (0:-60:0.66684);
    \draw[thin, cadGray, rotate around={60:(4.330,5.000)}] (4.330,5.000) ellipse (0.52 and 0.30);
    \draw[thin, cadGray, rotate around={60:(4.023,2.795)}] (4.023,2.795) ellipse (0.21 and 0.125);

    % --- Contorno principal de la pieza en azul (trazo continuo cerrado) ---
    \draw[line width=1.25pt, cadBlue, line join=round]
      (4.330,6.000) -- (0.866,4.000)
      arc (120:240:0.57735)
      arc (240:300:1.73205)
      -- (6.062,5.000)
      arc (120:0:0.57735)
      arc (0:-60:1.73205)
      -- (6.062,1.885)
      arc (0:-60:0.66684)
      -- (2.598,-0.500)
      arc (300:240:1.73205)
      arc (240:180:0.57735)
      -- (0.577,3.500);

    % Oreja superior trasera y generatriz superior de la oreja
    \draw[line width=1.25pt, cadBlue, line join=round]
      (4.330,6.000) arc (120:60:0.57735) -- (6.639,5.000);

    % Agujeros en la cara frontal derecha (v = 1)
    \draw[line width=1.25pt, cadBlue, rotate around={60:(6.062,4.000)}] (6.062,4.000) ellipse (0.52 and 0.30);
    \draw[line width=1.25pt, cadBlue, rotate around={60:(5.746265,1.695455)}] (5.746265,1.695455) ellipse (0.21 and 0.125);

    % --- Punto interno Q ---
    \filldraw[fill=white, draw=cadBlue, line width=1.2pt] (1.732,1.750) circle (0.075);
    \node[right] at (1.780,1.770) {\small $\mathsf{Q}$};

    % Titulo inferior derecho
    \node[anchor=north west, align=left] at (0.55,-1.55)
      {\fontsize{14}{17}\selectfont\sffamily Un punto dentro del cuerpo};
  \end{scope}
\end{tikzpicture}
</script>

Figura 1: Medio continuo sujeto a un conjunto de cargas externas y ubicación de un punto $Q$ dentro del cuerpo.

---

### 1.1. Vector de fuerzas en el plano 1

<script type="text/tikz">
\begin{tikzpicture}[scale=0.92, line cap=round, line join=round]
    \definecolor{cutCream}{RGB}{254,244,222}
    \definecolor{solidBlue}{RGB}{0,24,218}
    \definecolor{wireGray}{RGB}{196,196,196}
    \definecolor{diskOrange}{RGB}{242,162,42}
    \definecolor{vecGreen}{RGB}{28,118,52}
    \definecolor{vecSalmon}{RGB}{246,134,132}
    \definecolor{axisOrange}{RGB}{244,164,46}

    % =========================================================
    % 1. PLANO DE CORTE 1 (CARA FRONTAL IZQUIERDA, X = 0)
    % =========================================================
    \fill[cutCream] (0.000, 0.000) -- (1.732, -1.000) -- (1.732, 2.560) -- (0.000, 3.560) -- cycle;

    % =========================================================
    % 2. PROYECCIONES ISOMETRICAS, CAJA ENVOLVENTE Y ARISTAS OCULTAS
    % =========================================================
    \begin{scope}[color=wireGray, line width=0.52pt]
        % Ejes auxiliares exclusivamente sobre el plano de corte (X = 0)
        \draw (0.000, 1.780) -- (1.732, 0.780);
        \draw (0.866, -0.500) -- (0.866, 3.060);

        % Caja envolvente posterior (solo aristas visibles/proyeccion)
        \draw (3.551, 5.610) -- (4.434, 6.120) -- (6.166, 5.120) -- (5.283, 4.610);
        \draw (4.434, 6.120) -- (4.434, 2.560) -- (6.166, 1.560) -- (6.166, 5.120);
        \draw (0.000, 0.000) -- (4.434, 2.560);
        \draw (4.919, 0.840) -- (6.166, 1.560);

        % Cuatro lineas paralelas de proyeccion de tangencias (Y=0 -> Y=W)
        \draw (3.551, 5.610) -- (5.283, 4.610);
        \draw (3.551, 3.570) -- (5.283, 2.570);
        \draw (3.551, 2.470) -- (5.283, 1.470);
        \draw (3.187, 1.840) -- (4.919, 0.840);

        % Contorno oculto de la cara posterior izquierda (Y = 0)
        \draw (4.175, 5.672)
            .. controls (4.428, 5.526) and (4.504, 5.131) .. (4.367, 4.671)
            .. controls (4.230, 4.211) and (3.908, 3.776) .. (3.551, 3.570)
            -- (3.551, 2.470)
            .. controls (3.551, 2.238) and (3.388, 1.956) .. (3.187, 1.840);

        % Agujero superior posterior oculto (Y = 0)
        \draw (4.036, 4.870)
            .. controls (4.036, 5.179) and (3.819, 5.305) .. (3.551, 5.150)
            .. controls (3.283, 4.995) and (3.066, 4.619) .. (3.066, 4.310)
            .. controls (3.066, 4.001) and (3.283, 3.875) .. (3.551, 4.030)
            .. controls (3.819, 4.185) and (4.036, 4.561) .. (4.036, 4.870) -- cycle;

        % Agujero inferior posterior oculto (Y = 0)
        \draw (3.412, 2.310)
            .. controls (3.412, 2.420) and (3.335, 2.465) .. (3.239, 2.410)
            .. controls (3.143, 2.355) and (3.066, 2.220) .. (3.066, 2.110)
            .. controls (3.066, 2.000) and (3.143, 1.955) .. (3.239, 2.010)
            .. controls (3.335, 2.065) and (3.412, 2.200) .. (3.412, 2.310) -- cycle;
    \end{scope}

    % =========================================================
    % 3. CONTORNO PRINCIPAL VISIBLE DEL SOLIDO (AZUL)
    % =========================================================
    \begin{scope}[color=solidBlue, line width=1.15pt]
        % Borde del plano de corte (X = 0)
        \draw (0.000, 0.000) -- (1.732, -1.000) -- (1.732, 2.560) -- (0.000, 3.560) -- cycle;

        % Cara superior y generatriz tangente del lobulo superior (alpha = 45 deg)
        \draw (0.000, 3.560) -- (3.551, 5.610)
            .. controls (3.785, 5.745) and (4.010, 5.768) .. (4.175, 5.672)
            -- (5.907, 4.672);

        % Perfil completo visible de la cara frontal derecha (Y = 2.00)
        \draw (1.732, 2.560) -- (5.283, 4.610)
            .. controls (5.771, 4.892) and (6.166, 4.663) .. (6.166, 4.100)
            .. controls (6.166, 3.537) and (5.771, 2.852) .. (5.283, 2.570)
            -- (5.283, 1.470)
            .. controls (5.283, 1.238) and (5.120, 0.956) .. (4.919, 0.840)
            -- (1.732, -1.000);

        % Agujero superior frontal (Y = 2.00)
        \draw (5.768, 3.870)
            .. controls (5.768, 4.179) and (5.551, 4.305) .. (5.283, 4.150)
            .. controls (5.015, 3.995) and (4.798, 3.619) .. (4.798, 3.310)
            .. controls (4.798, 3.001) and (5.015, 2.875) .. (5.283, 3.030)
            .. controls (5.551, 3.185) and (5.768, 3.561) .. (5.768, 3.870) -- cycle;

        % Agujero inferior frontal (Y = 2.00)
        \draw (5.13, 1.36)
            .. controls (5.13, 1.47) and (5.05, 1.51) .. (4.96, 1.46)
            .. controls (4.86, 1.4) and (4.78, 1.27) .. (4.78, 1.16)
            .. controls (4.78, 1.05) and (4.86, 1) .. (4.96, 1.06)
            .. controls (5.05, 1.11) and (5.13, 1.25) .. (5.13, 1.36) -- cycle;
    \end{scope}

    % =========================================================
    % 4. AREA DIFERENCIAL DELTA A1, PUNTO Q Y VECTORES (n1, dF1)
    % =========================================================
    % Elipse isometrica naranja Delta A1 centrada en Q = (0.866, 1.280)
    \fill[diskOrange] (1.160, 1.110)
        .. controls (1.160, 1.298) and (1.029, 1.526) .. (0.866, 1.620)
        .. controls (0.703, 1.714) and (0.572, 1.638) .. (0.572, 1.450)
        .. controls (0.572, 1.262) and (0.703, 1.034) .. (0.866, 0.940)
        .. controls (1.029, 0.846) and (1.160, 0.922) .. (1.160, 1.110) -- cycle;
    \draw[line width=0.55pt, black!80] (1.160, 1.110)
        .. controls (1.160, 1.298) and (1.029, 1.526) .. (0.866, 1.620)
        .. controls (0.703, 1.714) and (0.572, 1.638) .. (0.572, 1.450)
        .. controls (0.572, 1.262) and (0.703, 1.034) .. (0.866, 0.940)
        .. controls (1.029, 0.846) and (1.160, 0.922) .. (1.160, 1.110) -- cycle;

    % Vector normal n1 (salmon, direccion +x)
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.55pt]
        (0.887, 1.244) -- (-0.135, 0.654) -- (-0.177, 0.726) -- (0.845, 1.316) -- cycle;
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.55pt]
        (-0.485, 0.500) -- (-0.083, 0.564)
        .. controls (-0.090, 0.636) and (-0.169, 0.774) .. (-0.228, 0.816) -- cycle;

    % Vector fuerza Delta F1 (verde oscuro, direccion oblicua superior izquierda)
    \filldraw[fill=vecGreen, draw=black!80, line width=0.55pt]
        (0.845, 1.244) -- (-0.177, 1.834) -- (-0.135, 1.906) -- (0.887, 1.316) -- cycle;
    \filldraw[fill=vecGreen, draw=black!80, line width=0.55pt]
        (-0.485, 2.060) -- (-0.228, 1.744)
        .. controls (-0.169, 1.786) and (-0.090, 1.924) .. (-0.083, 1.996) -- cycle;

    % Punto Q (aro azul sobre el origen de ambos vectores)
    \fill[white] (0.866, 1.280) circle (0.055);
    \draw[solidBlue, line width=0.95pt] (0.866, 1.280) circle (0.055);

    % Etiquetas del plano de corte
    \node[anchor=east, font=\large] at (-0.52, 2.12) {$\Delta F_1$};
    \node[anchor=north, font=\large] at (-0.56, 0.44) {$n_1$};
    \node[anchor=west, font=\small] at (0.92, 1.68) {$\Delta A_1$};
    \node[anchor=center, font=\footnotesize] at (0.93, 1.12) {$Q$};

    % =========================================================
    % 5. TRIADA DE EJES COORDENADOS (x, y, z) INFERIOR DERECHA
    % =========================================================
    % Eje z (verde oscuro, vertical arriba)
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (5.134, -1.290) -- (5.134, -0.270) -- (5.206, -0.270) -- (5.206, -1.290) -- cycle;
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (5.170, 0.050) -- (5.045, -0.270)
        .. controls (5.101, -0.296) and (5.239, -0.296) .. (5.295, -0.270) -- cycle;
    \node[anchor=west, font=\itshape\large] at (5.32, -0.02) {$z$};

    % Eje x (naranja, abajo-izquierda)
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (5.188, -1.301) -- (4.322, -1.801) -- (4.286, -1.739) -- (5.152, -1.239) -- cycle;
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (4.027, -1.930) -- (4.366, -1.878)
        .. controls (4.361, -1.817) and (4.292, -1.698) .. (4.241, -1.662) -- cycle;
    \node[anchor=north, font=\itshape\large] at (4.16, -1.94) {$x$};

    % Eje y (salmon, abajo-derecha)
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (5.188, -1.239) -- (6.054, -1.739) -- (6.018, -1.801) -- (5.152, -1.301) -- cycle;
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (6.313, -1.930) -- (6.099, -1.662)
        .. controls (6.048, -1.698) and (5.979, -1.817) .. (5.974, -1.878) -- cycle;
    \node[anchor=north, font=\itshape\large] at (6.36, -1.94) {$y$};
\end{tikzpicture}
</script>

Figura 2: Vector de fuerzas $\Delta F_1$ y vector normal $n_1$ actuando sobre el elemento de área $\Delta A_1$ en el plano 1.

Esfuerzo en dirección 1:

$$ \sigma_1 = \lim_{\Delta A_1 \to 0}\frac{\Delta F_1}{\Delta A_1} $$

Componentes en direcciones principales:

$$ \begin{aligned}
\sigma_{11} &= \lim_{\Delta A_1 \to 0}\frac{\Delta F_1 \cdot n_1}{\Delta A_1} = \lim_{\Delta A_1 \to 0}\frac{\Delta F_1}{\Delta A_1}\cdot n_1 = \sigma_1 \cdot n_1 \\[10pt]
\sigma_{12} &= \lim_{\Delta A_1 \to 0}\frac{\Delta F_1 \cdot n_2}{\Delta A_1} = \lim_{\Delta A_1 \to 0}\frac{\Delta F_1}{\Delta A_1}\cdot n_2 = \sigma_1 \cdot n_2 \\[10pt]
\sigma_{13} &= \lim_{\Delta A_1 \to 0}\frac{\Delta F_1 \cdot n_3}{\Delta A_1} = \lim_{\Delta A_1 \to 0}\frac{\Delta F_1}{\Delta A_1}\cdot n_3 = \sigma_1 \cdot n_3
\end{aligned} $$

---

### 1.2. Vector de fuerzas en el plano 2

<script type="text/tikz">
\begin{tikzpicture}[scale=0.90, line cap=round, line join=round]
    \definecolor{cutBlue}{RGB}{212,227,241}
    \definecolor{holeShade}{RGB}{177,206,230}
    \definecolor{solidBlue}{RGB}{0,24,218}
    \definecolor{wireGray}{RGB}{196,196,196}
    \definecolor{diskGreen}{RGB}{32,164,74}
    \definecolor{vecGreen}{RGB}{28,118,52}
    \definecolor{vecRed}{RGB}{246,16,12}
    \definecolor{vecSalmon}{RGB}{246,134,132}
    \definecolor{axisOrange}{RGB}{244,164,46}

    % =========================================================
    % 1. PLANO DE CORTE 2 (SECCION LONGITUDINAL Y = 1.00)
    % =========================================================
    \fill[cutBlue]
        (0.000, -1.000) -- (0.000, 2.560) -- (4.417, 5.110)
        .. controls (4.905, 5.392) and (5.300, 5.163) .. (5.300, 4.600)
        .. controls (5.300, 4.037) and (4.905, 3.352) .. (4.417, 3.070)
        -- (4.417, 1.970)
        .. controls (4.417, 1.738) and (4.254, 1.456) .. (4.053, 1.340)
        -- cycle;

    % Sombreado interno del agujero superior posterior (recortado al plano 2)
    \begin{scope}
        \clip
            (0.000, -1.000) -- (0.000, 2.560) -- (4.417, 5.110)
            .. controls (4.905, 5.392) and (5.300, 5.163) .. (5.300, 4.600)
            .. controls (5.300, 4.037) and (4.905, 3.352) .. (4.417, 3.070)
            -- (4.417, 1.970)
            .. controls (4.417, 1.738) and (4.254, 1.456) .. (4.053, 1.340)
            -- cycle;
        \fill[holeShade]
            (4.036, 4.870)
            .. controls (4.036, 5.179) and (3.819, 5.305) .. (3.551, 5.150)
            .. controls (3.283, 4.995) and (3.066, 4.619) .. (3.066, 4.310)
            .. controls (3.066, 4.001) and (3.283, 3.875) .. (3.551, 4.030)
            .. controls (3.819, 4.185) and (4.036, 4.561) .. (4.036, 4.870) -- cycle;
    \end{scope}

    % =========================================================
    % 2. PROYECCIONES ISOMETRICAS, CAJA ENVOLVENTE Y ARISTAS OCULTAS
    % =========================================================
    \begin{scope}[color=wireGray, line width=0.52pt]
        % Caja envolvente frontal izquierda (nariz cilindrica) y borde inferior
        \draw (-0.87, 3.06) -- (-0.87, -0.5) -- (0.87, -1.5) -- (6.17, 1.56);
        \draw (-0.866, 3.060) -- (0.000, 3.560);
        \draw (-0.866, 3.060) -- (0.000, 2.560);

        % Marco de la seccion X = 0 (vertical por Q y proyeccion frontal removida)
        \draw (0.000, 3.560) -- (1.732, 2.560) -- (1.732, -1.000);
        \draw (0.866, 3.060) -- (0.866, -1.500);
        \draw (0.000, 0.000) -- (1.732, -1.000);
        \draw (0.000, 1.780) -- (0.866, 1.280);
        \draw (0.000, 0.780) -- (0.866, 1.280);
        \draw (0.000, 3.560) -- (0.000, 2.560);

        % Arcos auxiliares de la nariz cilindrica (media altura Z=H/2 y base Z=0)
        \draw (0.000, 1.780)
            .. controls (-0.230, 1.647) and (-0.359, 1.468) .. (-0.359, 1.280)
            .. controls (-0.359, 1.092) and (-0.230, 0.913) .. (0.000, 0.780)
            .. controls (0.230, 0.647) and (0.541, 0.573) .. (0.866, 0.573)
            .. controls (1.191, 0.573) and (1.502, 0.647) .. (1.732, 0.780);
        \draw (0.000, 0.000)
            .. controls (-0.230, -0.133) and (-0.359, -0.312) .. (-0.359, -0.500);
        \draw (0.000, -1.000)
            .. controls (0.230, -1.133) and (0.541, -1.207) .. (0.866, -1.207)
            .. controls (1.191, -1.207) and (1.502, -1.133) .. (1.732, -1.000);

        % Caja envolvente posterior completa (hasta Y = 2.00)
        \draw (3.551, 5.610) -- (4.434, 6.120) -- (6.166, 5.120) -- (6.166, 1.560);
        \draw (4.434, 6.120) -- (4.434, 2.560) -- (6.166, 1.560);
        \draw (1.732, 2.560) -- (6.166, 5.120);
        \draw (-0.87, -0.5) -- (4.434, 2.560);

        % Lineas de proyeccion de tangencias (Y=0 -> Y=1 -> Y=2)
        \draw (3.551, 3.570) -- (5.283, 2.570);
        \draw (3.187, 1.840) -- (4.919, 0.840);

        % Perfil oculto de la cara posterior izquierda (Y = 0)
        \draw (4.175, 5.672)
            .. controls (4.428, 5.526) and (4.504, 5.131) .. (4.367, 4.671)
            .. controls (4.230, 4.211) and (3.908, 3.776) .. (3.551, 3.570)
            -- (3.551, 2.470)
            .. controls (3.551, 2.238) and (3.388, 1.956) .. (3.187, 1.840);

        % Perfil removido de la cara frontal derecha (Y = 2.00, lobulo inferior)
        \draw (5.283, 2.570) -- (5.283, 1.470)
            .. controls (5.283, 1.238) and (5.120, 0.956) .. (4.919, 0.840);

        % Agujero superior posterior oculto (Y = 0)
        \draw (4.036, 4.870)
            .. controls (4.036, 5.179) and (3.819, 5.305) .. (3.551, 5.150)
            .. controls (3.283, 4.995) and (3.066, 4.619) .. (3.066, 4.310)
            .. controls (3.066, 4.001) and (3.283, 3.875) .. (3.551, 4.030)
            .. controls (3.819, 4.185) and (4.036, 4.561) .. (4.036, 4.870) -- cycle;

        % Agujero inferior posterior oculto (Y = 0)
        \draw (3.412, 2.310)
            .. controls (3.412, 2.420) and (3.335, 2.465) .. (3.239, 2.410)
            .. controls (3.143, 2.355) and (3.066, 2.220) .. (3.066, 2.110)
            .. controls (3.066, 2.000) and (3.143, 1.955) .. (3.239, 2.010)
            .. controls (3.335, 2.065) and (3.412, 2.200) .. (3.412, 2.310) -- cycle;
    \end{scope}

    % =========================================================
    % 3. AGUJEROS PASANTES EN EL PLANO DE CORTE (FONDO BLANCO)
    % =========================================================
    \fill[white]
        (4.902, 4.370)
        .. controls (4.902, 4.679) and (4.685, 4.805) .. (4.417, 4.650)
        .. controls (4.149, 4.495) and (3.932, 4.119) .. (3.932, 3.810)
        .. controls (3.932, 3.501) and (4.149, 3.375) .. (4.417, 3.530)
        .. controls (4.685, 3.685) and (4.902, 4.061) .. (4.902, 4.370) -- cycle;
    \fill[white]
        (4.28, 1.83)
        .. controls (4.28, 1.94) and (4.2, 1.98) .. (4.11, 1.93)
        .. controls (4.01, 1.87) and (3.93, 1.74) .. (3.93, 1.63)
        .. controls (3.93, 1.52) and (4.01, 1.47) .. (4.11, 1.53)
        .. controls (4.2, 1.58) and (4.28, 1.72) .. (4.28, 1.83) -- cycle;

    % =========================================================
    % 4. CONTORNO PRINCIPAL VISIBLE DEL SOLIDO (AZUL)
    % =========================================================
    \begin{scope}[color=solidBlue, line width=1.15pt]
        % Nariz cilindrica frontal (arco superior, generatriz izquierda y arco inferior)
        \draw (0.000, 3.560)
            .. controls (-0.230, 3.427) and (-0.359, 3.248) .. (-0.359, 3.060)
            .. controls (-0.359, 2.872) and (-0.230, 2.693) .. (0.000, 2.560);
        \draw (-0.359, 3.060) -- (-0.359, -0.500)
            .. controls (-0.359, -0.688) and (-0.230, -0.867) .. (0.000, -1.000);

        % Borde superior trasero y generatriz tangente del lobulo superior (alpha = 45 deg)
        \draw (0.000, 3.560) -- (3.551, 5.610)
            .. controls (3.785, 5.745) and (4.010, 5.768) .. (4.175, 5.672)
            -- (5.041, 5.172);

        % Contorno completo del plano de corte 2 (Y = 1.00)
        \draw (0.000, -1.000) -- (0.000, 2.560) -- (4.417, 5.110)
            .. controls (4.905, 5.392) and (5.300, 5.163) .. (5.300, 4.600)
            .. controls (5.300, 4.037) and (4.905, 3.352) .. (4.417, 3.070)
            -- (4.417, 1.970)
            .. controls (4.417, 1.738) and (4.254, 1.456) .. (4.053, 1.340)
            -- cycle;

        % Contorno de ambos agujeros en el plano de corte (Y = 1.00)
        \draw (4.902, 4.370)
            .. controls (4.902, 4.679) and (4.685, 4.805) .. (4.417, 4.650)
            .. controls (4.149, 4.495) and (3.932, 4.119) .. (3.932, 3.810)
            .. controls (3.932, 3.501) and (4.149, 3.375) .. (4.417, 3.530)
            .. controls (4.685, 3.685) and (4.902, 4.061) .. (4.902, 4.370) -- cycle;
        \draw (4.26, 1.83)
            .. controls (4.26, 1.94) and (4.18, 1.99) .. (4.08, 1.93)
            .. controls (3.99, 1.88) and (3.91, 1.74) .. (3.91, 1.63)
            .. controls (3.91, 1.52) and (3.99, 1.48) .. (4.08, 1.53)
            .. controls (4.18, 1.59) and (4.26, 1.72) .. (4.26, 1.83) -- cycle;
    \end{scope}

    % =========================================================
    % 5. AREA DIFERENCIAL DELTA A2, PUNTO Q Y VECTORES (n2, dF2)
    % =========================================================
    % Elipse isometrica verde Delta A2 sobre plano Y = 1.00, centrada en Q = (0.866, 1.280)
    \fill[diskGreen]
        (1.204, 1.475)
        .. controls (1.204, 1.690) and (1.053, 1.778) .. (0.866, 1.670)
        .. controls (0.679, 1.562) and (0.528, 1.300) .. (0.528, 1.085)
        .. controls (0.528, 0.870) and (0.679, 0.782) .. (0.866, 0.890)
        .. controls (1.053, 0.998) and (1.204, 1.260) .. (1.204, 1.475) -- cycle;
    \draw[solidBlue, line width=0.90pt]
        (1.204, 1.475)
        .. controls (1.204, 1.690) and (1.053, 1.778) .. (0.866, 1.670)
        .. controls (0.679, 1.562) and (0.528, 1.300) .. (0.528, 1.085)
        .. controls (0.528, 0.870) and (0.679, 0.782) .. (0.866, 0.890)
        .. controls (1.053, 0.998) and (1.204, 1.260) .. (1.204, 1.475) -- cycle;

    % Vector fuerza Delta F2 (verde oscuro, oblicuo arriba-derecha)
    \filldraw[fill=vecGreen, draw=black!80, line width=0.55pt]
        (0.843, 1.318) -- (1.855, 1.925) -- (1.900, 1.850) -- (0.889, 1.242) -- cycle;
    \filldraw[fill=vecGreen, draw=black!80, line width=0.55pt]
        (2.203, 2.083) -- (1.801, 2.015)
        .. controls (1.809, 1.942) and (1.893, 1.802) .. (1.954, 1.761) -- cycle;

    % Vector normal n2 (rojo, direccion +y)
    \filldraw[fill=vecRed, draw=vecRed!80!black, line width=0.55pt]
        (0.888, 1.318) -- (1.910, 0.728) -- (1.866, 0.652) -- (0.844, 1.242) -- cycle;
    \filldraw[fill=vecRed, draw=vecRed!80!black, line width=0.55pt]
        (2.217, 0.500) -- (1.962, 0.818)
        .. controls (1.902, 0.776) and (1.821, 0.635) .. (1.814, 0.562) -- cycle;

    % Punto Q (aro azul sobre el origen de ambos vectores)
    \fill[white] (0.866, 1.280) circle (0.055);
    \draw[solidBlue, line width=0.95pt] (0.866, 1.280) circle (0.055);

    % Etiquetas del plano de corte 2
    \node[anchor=south, font=\large] at (1.02, 1.78) {$\Delta A_2$};
    \node[anchor=west, font=\large] at (2.26, 2.04) {$\Delta F_2$};
    \node[anchor=north, font=\large] at (2.30, 0.42) {$n_2$};
    \node[anchor=center, font=\footnotesize] at (0.69, 1.09) {$Q$};

    % =========================================================
    % 6. TRIADA DE EJES COORDENADOS (x, y, z) INFERIOR DERECHA
    % =========================================================
    % Eje z (verde oscuro, vertical arriba)
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (5.114, -1.070) -- (5.114, -0.090) -- (5.186, -0.090) -- (5.186, -1.070) -- cycle;
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (5.150, 0.230) -- (5.025, -0.090)
        .. controls (5.081, -0.116) and (5.219, -0.116) .. (5.275, -0.090) -- cycle;
    \node[anchor=west, font=\itshape\large] at (5.30, 0.16) {$z$};

    % Eje x (naranja, abajo-izquierda)
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (5.168, -1.081) -- (4.337, -1.561) -- (4.301, -1.499) -- (5.132, -1.019) -- cycle;
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (4.041, -1.690) -- (4.381, -1.638)
        .. controls (4.375, -1.577) and (4.306, -1.458) .. (4.256, -1.422) -- cycle;
    \node[anchor=north, font=\itshape\large] at (4.18, -1.70) {$x$};

    % Eje y (salmon, abajo-derecha)
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (5.168, -1.019) -- (5.999, -1.499) -- (5.963, -1.561) -- (5.132, -1.081) -- cycle;
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (6.259, -1.690) -- (6.044, -1.422)
        .. controls (5.994, -1.458) and (5.925, -1.577) .. (5.919, -1.638) -- cycle;
    \node[anchor=north, font=\itshape\large] at (6.30, -1.70) {$y$};
\end{tikzpicture}
</script>

Figura 3: Vector de fuerzas $\Delta F_2$ y vector normal $n_2$ actuando sobre el elemento de área $\Delta A_2$ en el plano 2.

Esfuerzo en dirección 2:

$$ \sigma_2 = \lim_{\Delta A_2 \to 0}\frac{\Delta F_2}{\Delta A_2} $$

Componentes en direcciones principales:

$$ \begin{aligned}
\sigma_{21} &= \lim_{\Delta A_2 \to 0}\frac{\Delta F_2 \cdot n_1}{\Delta A_2} = \lim_{\Delta A_2 \to 0}\frac{\Delta F_2}{\Delta A_2}\cdot n_1 = \sigma_2 \cdot n_1 \\[10pt]
\sigma_{22} &= \lim_{\Delta A_2 \to 0}\frac{\Delta F_2 \cdot n_2}{\Delta A_2} = \lim_{\Delta A_2 \to 0}\frac{\Delta F_2}{\Delta A_2}\cdot n_2 = \sigma_2 \cdot n_2 \\[10pt]
\sigma_{23} &= \lim_{\Delta A_2 \to 0}\frac{\Delta F_2 \cdot n_3}{\Delta A_2} = \lim_{\Delta A_2 \to 0}\frac{\Delta F_2}{\Delta A_2}\cdot n_3 = \sigma_2 \cdot n_3
\end{aligned} $$

---

### 1.3. Vector de fuerzas en el plano 3

<script type="text/tikz">
\begin{tikzpicture}[scale=0.90, line cap=round, line join=round]
    \definecolor{cutMint}{RGB}{204,255,204}
    \definecolor{solidBlue}{RGB}{0,24,218}
    \definecolor{wireGray}{RGB}{196,196,196}
    \definecolor{diskOrange}{RGB}{242,162,42}
    \definecolor{vecRed}{RGB}{246,16,12}
    \definecolor{vecCyan}{RGB}{0,242,248}
    \definecolor{vecGreen}{RGB}{28,118,52}
    \definecolor{vecSalmon}{RGB}{246,134,132}
    \definecolor{axisOrange}{RGB}{244,164,46}

    % =========================================================
    % 1. PLANO DE CORTE 3 (SECCION HORIZONTAL Z = H/2 = 1.78)
    % =========================================================
    \fill[cutMint]
        (0.000, 1.780)
        .. controls (-0.230, 1.647) and (-0.359, 1.468) .. (-0.359, 1.280)
        .. controls (-0.359, 1.092) and (-0.230, 0.913) .. (0.000, 0.780)
        .. controls (0.230, 0.647) and (0.541, 0.573) .. (0.866, 0.573)
        .. controls (1.191, 0.573) and (1.502, 0.647) .. (1.732, 0.780)
        -- (5.872, 3.170) -- (4.140, 4.170) -- cycle;

    % =========================================================
    % 2. PROYECCIONES ISOMETRICAS, CAJA ENVOLVENTE Y ARISTAS OCULTAS
    % =========================================================
    \begin{scope}[color=wireGray, line width=0.52pt]
        % Caja envolvente frontal izquierda (nariz cilindrica)
        \draw (-0.866, 1.280) -- (-0.866, -0.500) -- (0.866, -1.500) -- (1.732, -1.000);
        \draw (-0.866, 1.280) -- (0.000, 1.780);
        \draw (-0.866, 1.280) -- (0.866, 0.280) -- (0.866, -1.500);
        \draw (0.866, 0.280) -- (1.732, 0.780);

        % Lineas auxiliares internas de la nariz (vertical frontal hasta la base y cruce en X=0)
        \draw (0.000, 0.780) -- (0.000, -1.000);
        \draw (0.000, 0.000) -- (1.732, -1.000);
        \draw (-0.866, -0.500) -- (4.434, 2.560);
        \draw (0, -1) -- (0.87, -0.5);
        \draw (0.000, 0.000)
            .. controls (-0.230, -0.133) and (-0.359, -0.312) .. (-0.359, -0.500);

        % Caja envolvente posterior (extremo X = L = 5.12)
        \draw (4.140, 4.170) -- (4.434, 4.340) -- (6.166, 3.340) -- (5.872, 3.170);
        \draw (4.434, 4.340) -- (4.434, 2.560) -- (6.166, 1.560) -- (6.166, 3.340);
        \draw (4.919, 0.840) -- (6.166, 1.560);

        % Tres puentes paralelos de proyeccion de tangencias (Y = 0 -> Y = 2)
        \draw (3.551, 3.570) -- (5.283, 2.570);
        \draw (3.551, 2.470) -- (5.283, 1.470);
        \draw (3.187, 1.840) -- (4.919, 0.840);

        % Perfil oculto posterior izquierdo (Y = 0)
        \draw (4.140, 4.170)
            .. controls (3.978, 3.909) and (3.768, 3.696) .. (3.551, 3.570)
            -- (3.551, 2.470)
            .. controls (3.551, 2.238) and (3.388, 1.956) .. (3.187, 1.840);

        % Agujero inferior posterior oculto (Y = 0)
        \draw (3.412, 2.310)
            .. controls (3.412, 2.420) and (3.335, 2.465) .. (3.239, 2.410)
            .. controls (3.143, 2.355) and (3.066, 2.220) .. (3.066, 2.110)
            .. controls (3.066, 2.000) and (3.143, 1.955) .. (3.239, 2.010)
            .. controls (3.335, 2.065) and (3.412, 2.200) .. (3.412, 2.310) -- cycle;
    \end{scope}

    % =========================================================
    % 3. CONTORNO PRINCIPAL VISIBLE DEL SOLIDO (AZUL)
    % =========================================================
    \begin{scope}[color=solidBlue, line width=1.15pt]
        % Contorno completo del plano de corte horizontal (Z = 1.78)
        \draw (0.000, 1.780)
            .. controls (-0.230, 1.647) and (-0.359, 1.468) .. (-0.359, 1.280)
            .. controls (-0.359, 1.092) and (-0.230, 0.913) .. (0.000, 0.780)
            .. controls (0.230, 0.647) and (0.541, 0.573) .. (0.866, 0.573)
            .. controls (1.191, 0.573) and (1.502, 0.647) .. (1.732, 0.780)
            -- (5.872, 3.170) -- (4.140, 4.170) -- cycle;

        % Generatriz izquierda de la nariz y contorno inferior visible hasta el lobulo
        \draw (-0.359, 1.280) -- (-0.359, -0.500)
            .. controls (-0.359, -0.688) and (-0.230, -0.867) .. (0.000, -1.000)
            .. controls (0.230, -1.133) and (0.541, -1.207) .. (0.866, -1.207)
            .. controls (1.191, -1.207) and (1.502, -1.133) .. (1.732, -1.000)
            -- (4.919, 0.840)
            .. controls (5.120, 0.956) and (5.283, 1.238) .. (5.283, 1.470)
            -- (5.283, 2.570)
            .. controls (5.500, 2.696) and (5.710, 2.909) .. (5.872, 3.170);

        % Agujero inferior frontal (Y = 2.00)
        \draw (5.144, 1.310)
            .. controls (5.144, 1.420) and (5.067, 1.465) .. (4.971, 1.410)
            .. controls (4.875, 1.355) and (4.798, 1.220) .. (4.798, 1.110)
            .. controls (4.798, 1.000) and (4.875, 0.955) .. (4.971, 1.010)
            .. controls (5.067, 1.065) and (5.144, 1.200) .. (5.144, 1.310) -- cycle;
    \end{scope}

    % =========================================================
    % 4. AREA DIFERENCIAL DELTA A3, PUNTO Q Y VECTORES (n3, dF3)
    % =========================================================
    % Elipse isometrica naranja Delta A3 sobre plano Z = 1.78, centrada en Q = (0.866, 1.280)
    \fill[diskOrange]
        (1.212, 1.480)
        .. controls (1.404, 1.370) and (1.404, 1.190) .. (1.212, 1.080)
        .. controls (1.021, 0.970) and (0.711, 0.970) .. (0.520, 1.080)
        .. controls (0.328, 1.190) and (0.328, 1.370) .. (0.520, 1.480)
        .. controls (0.711, 1.590) and (1.021, 1.590) .. (1.212, 1.480) -- cycle;
    \draw[line width=0.55pt, black!80]
        (1.212, 1.480)
        .. controls (1.404, 1.370) and (1.404, 1.190) .. (1.212, 1.080)
        .. controls (1.021, 0.970) and (0.711, 0.970) .. (0.520, 1.080)
        .. controls (0.328, 1.190) and (0.328, 1.370) .. (0.520, 1.480)
        .. controls (0.711, 1.590) and (1.021, 1.590) .. (1.212, 1.480) -- cycle;

    % Vector normal n3 (rojo, direccion +z vertical arriba)
    \filldraw[fill=vecRed, draw=black!80, line width=0.55pt]
        (0.822, 1.280) -- (0.822, 2.460) -- (0.910, 2.460) -- (0.910, 1.280) -- cycle;
    \filldraw[fill=vecRed, draw=black!80, line width=0.55pt]
        (0.866, 2.840) -- (0.718, 2.460)
        .. controls (0.785, 2.430) and (0.947, 2.430) .. (1.014, 2.460) -- cycle;

    % Vector fuerza Delta F3 (cian, direccion oblicua superior izquierda)
    \filldraw[fill=vecCyan, draw=vecCyan!70!black, line width=0.50pt]
        (0.832, 1.252) -- (0.074, 2.156) -- (0.141, 2.212) -- (0.900, 1.308) -- cycle;
    \filldraw[fill=vecCyan, draw=black!80, line width=0.55pt]
        (-0.137, 2.475) -- (-0.006, 2.089)
        .. controls (0.065, 2.108) and (0.189, 2.213) .. (0.221, 2.279) -- cycle;

    % Punto Q (aro azul sobre el origen de ambos vectores)
    \fill[white] (0.866, 1.280) circle (0.055);
    \draw[solidBlue, line width=0.95pt] (0.866, 1.280) circle (0.055);

    % Etiquetas del plano de corte 3
    \node[anchor=west, font=\large] at (0.94, 2.94) {$n_3$};
    \node[anchor=east, font=\large] at (-0.22, 2.38) {$\Delta F_3$};
    \node[anchor=west, font=\large] at (1.36, 1.50) {$\Delta A_3$};
    \node[anchor=center, font=\footnotesize] at (0.69, 1.15) {$Q$};

    % =========================================================
    % 5. TRIADA DE EJES COORDENADOS (x, y, z) INFERIOR DERECHA
    % =========================================================
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (4.614, -1.640) -- (4.614, -0.660) -- (4.686, -0.660) -- (4.686, -1.640) -- cycle;
    \filldraw[fill=vecGreen, draw=black!80, line width=0.50pt]
        (4.650, -0.340) -- (4.525, -0.660)
        .. controls (4.581, -0.686) and (4.719, -0.686) .. (4.775, -0.660) -- cycle;
    \node[anchor=west, font=\itshape\large] at (4.80, -0.40) {$z$};

    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (4.668, -1.651) -- (3.837, -2.131) -- (3.801, -2.069) -- (4.632, -1.589) -- cycle;
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (3.541, -2.260) -- (3.881, -2.208)
        .. controls (3.875, -2.147) and (3.806, -2.028) .. (3.756, -1.992) -- cycle;
    \node[anchor=north, font=\itshape\large] at (3.68, -2.27) {$x$};

    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (4.668, -1.589) -- (5.499, -2.069) -- (5.463, -2.131) -- (4.632, -1.651) -- cycle;
    \filldraw[fill=vecSalmon, draw=black!80, line width=0.50pt]
        (5.759, -2.260) -- (5.544, -1.992)
        .. controls (5.494, -2.028) and (5.425, -2.147) .. (5.419, -2.208) -- cycle;
    \node[anchor=north, font=\itshape\large] at (5.80, -2.27) {$y$};
\end{tikzpicture}
</script>

Figura 4: Vector de fuerzas $\Delta F_3$ y vector normal $n_3$ actuando sobre el elemento de área $\Delta A_3$ en el plano 3.

Esfuerzo en dirección 3:

$$ \sigma_3 = \lim_{\Delta A_3 \to 0}\frac{\Delta F_3}{\Delta A_3} $$

Componentes en direcciones principales:

$$ \begin{aligned}
\sigma_{31} &= \lim_{\Delta A_3 \to 0}\frac{\Delta F_3 \cdot n_1}{\Delta A_3} = \lim_{\Delta A_3 \to 0}\frac{\Delta F_3}{\Delta A_3}\cdot n_1 = \sigma_3 \cdot n_1 \\[10pt]
\sigma_{32} &= \lim_{\Delta A_3 \to 0}\frac{\Delta F_3 \cdot n_2}{\Delta A_3} = \lim_{\Delta A_3 \to 0}\frac{\Delta F_3}{\Delta A_3}\cdot n_2 = \sigma_3 \cdot n_2 \\[10pt]
\sigma_{33} &= \lim_{\Delta A_3 \to 0}\frac{\Delta F_3 \cdot n_3}{\Delta A_3} = \lim_{\Delta A_3 \to 0}\frac{\Delta F_3}{\Delta A_3}\cdot n_3 = \sigma_3 \cdot n_3
\end{aligned} $$

---

## 2. Tensor de Esfuerzos y Simetría

Reuniendo las nueve componentes obtenidas sobre los tres planos ortogonales que pasan por el punto $Q$, se conforma el **tensor de esfuerzos**:

$$ \sigma = \begin{pmatrix} \sigma_{11} & \sigma_{12} & \sigma_{13} \\ \sigma_{21} & \sigma_{22} & \sigma_{23} \\ \sigma_{31} & \sigma_{32} & \sigma_{33} \end{pmatrix} $$

<script type="text/tikz">
\begin{tikzpicture}[scale=0.95, line cap=round, line join=round]
    \definecolor{normOrange}{RGB}{244,162,42}
    \definecolor{shearGreen}{RGB}{28,118,52}

    % =========================================================
    % 1. CUBO ISOMETRICO DIFERENCIAL (ARISTA a = 3.00)
    % =========================================================
    \draw[line width=0.75pt, black!80]
        (0.000, 6.000) -- (-2.598, 4.500) -- (-2.598, 1.500)
        -- (0.000, 0.000) -- (2.598, 1.500) -- (2.598, 4.500) -- cycle;
    \draw[line width=0.75pt, black!80] (-2.598, 4.500) -- (0.000, 3.000) -- (2.598, 4.500);
    \draw[line width=0.75pt, black!80] (0.000, 3.000) -- (0.000, 0.000);

    % =========================================================
    % 2. CARA SUPERIOR (NORMAL 3): sigma_33, sigma_31, sigma_32
    % =========================================================
    \begin{scope}[shift={(0.000, 4.500)}]
        % sigma_31 (cortante, verde, direccion 1 abajo-izquierda)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.016, -0.028) -- (-0.659, -0.418) -- (-0.691, -0.362) -- (-0.016, 0.028) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (-0.918, -0.530) -- (-0.619, -0.487)
            .. controls (-0.625, -0.432) and (-0.687, -0.325) .. (-0.731, -0.293) -- cycle;
        \node[anchor=south, font=\large] at (-0.74, -0.24) {$\sigma_{31}$};

        % sigma_32 (cortante, verde, direccion 2 abajo-derecha)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.016, 0.028) -- (0.691, -0.362) -- (0.659, -0.418) -- (-0.016, -0.028) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.918, -0.530) -- (0.731, -0.293)
            .. controls (0.687, -0.325) and (0.625, -0.432) .. (0.619, -0.487) -- cycle;
        \node[anchor=north, font=\large] at (0.66, -0.52) {$\sigma_{32}$};

        % sigma_33 (normal, naranja, direccion 3 vertical arriba)
        \filldraw[fill=normOrange, draw=normOrange!75!black, line width=0.50pt]
            (-0.032, -0.010) -- (-0.032, 0.780) -- (0.032, 0.780) -- (0.032, -0.010) -- cycle;
        \filldraw[fill=normOrange, draw=black!85, line width=0.50pt]
            (0.000, 1.060) -- (-0.112, 0.780)
            .. controls (-0.062, 0.758) and (0.062, 0.758) .. (0.112, 0.780) -- cycle;
        \node[anchor=west, font=\large] at (0.10, 1.02) {$\sigma_{33}$};
    \end{scope}

    % =========================================================
    % 3. CARA FRONTAL IZQUIERDA (NORMAL 1): sigma_11, sigma_12, sigma_13
    % =========================================================
    \begin{scope}[shift={(-1.299, 2.250)}]
        % sigma_13 (cortante, verde, direccion 3 vertical arriba)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (-0.032, -0.010) -- (-0.032, 0.780) -- (0.032, 0.780) -- (0.032, -0.010) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.000, 1.060) -- (-0.112, 0.780)
            .. controls (-0.062, 0.758) and (0.062, 0.758) .. (0.112, 0.780) -- cycle;
        \node[anchor=west, font=\large] at (0.10, 1.00) {$\sigma_{13}$};

        % sigma_12 (cortante, verde, direccion 2 abajo-derecha)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.016, 0.028) -- (0.691, -0.362) -- (0.659, -0.418) -- (-0.016, -0.028) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.918, -0.530) -- (0.731, -0.293)
            .. controls (0.687, -0.325) and (0.625, -0.432) .. (0.619, -0.487) -- cycle;
        \node[anchor=north, font=\large] at (0.74, -0.54) {$\sigma_{12}$};

        % sigma_11 (normal, naranja, direccion 1 abajo-izquierda)
        \filldraw[fill=normOrange, draw=black!85, line width=0.50pt]
            (0.016, -0.028) -- (-0.659, -0.418) -- (-0.691, -0.362) -- (-0.016, 0.028) -- cycle;
        \filldraw[fill=normOrange, draw=black!85, line width=0.50pt]
            (-0.918, -0.530) -- (-0.619, -0.487)
            .. controls (-0.625, -0.432) and (-0.687, -0.325) .. (-0.731, -0.293) -- cycle;
        \node[anchor=south, font=\large] at (-0.78, -0.24) {$\sigma_{11}$};
    \end{scope}

    % =========================================================
    % 4. CARA FRONTAL DERECHA (NORMAL 2): sigma_22, sigma_21, sigma_23
    % =========================================================
    \begin{scope}[shift={(1.299, 2.250)}]
        % sigma_23 (cortante, verde, direccion 3 vertical arriba)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (-0.032, -0.010) -- (-0.032, 0.780) -- (0.032, 0.780) -- (0.032, -0.010) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.000, 1.060) -- (-0.112, 0.780)
            .. controls (-0.062, 0.758) and (0.062, 0.758) .. (0.112, 0.780) -- cycle;
        \node[anchor=west, font=\large] at (0.10, 1.00) {$\sigma_{23}$};

        % sigma_21 (cortante, verde, direccion 1 abajo-izquierda)
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (0.016, -0.028) -- (-0.659, -0.418) -- (-0.691, -0.362) -- (-0.016, 0.028) -- cycle;
        \filldraw[fill=shearGreen, draw=black!85, line width=0.50pt]
            (-0.918, -0.530) -- (-0.619, -0.487)
            .. controls (-0.625, -0.432) and (-0.687, -0.325) .. (-0.731, -0.293) -- cycle;
        \node[anchor=south, font=\large] at (-0.72, -0.24) {$\sigma_{21}$};

        % sigma_22 (normal, naranja, direccion 2 abajo-derecha)
        \filldraw[fill=normOrange, draw=black!85, line width=0.50pt]
            (0.016, 0.028) -- (0.691, -0.362) -- (0.659, -0.418) -- (-0.016, -0.028) -- cycle;
        \filldraw[fill=normOrange, draw=black!85, line width=0.50pt]
            (0.918, -0.530) -- (0.731, -0.293)
            .. controls (0.687, -0.325) and (0.625, -0.432) .. (0.619, -0.487) -- cycle;
        \node[anchor=north, font=\large] at (0.72, -0.54) {$\sigma_{22}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 5: Componentes normales y cortantes del tensor de esfuerzos en un elemento cúbico diferencial.

### 2.1. Simetría del tensor de esfuerzos

Realizando la sumatoria de momentos alrededor del eje 3:

$$ dz\,dx\,dy\,\sigma_{21} = dz\,dx\,dy\,\sigma_{12} $$

De esta ecuación se obtiene que:

$$ \sigma_{21} = \sigma_{12} $$

Análogamente:

$$ \sigma_{31} = \sigma_{13}, \qquad \sigma_{32} = \sigma_{23} $$

---

## 3. Componentes en Dirección Arbitraria

Las componentes del tensor de esfuerzos en las direcciones coordenadas $x$, $y$ y $z$ se obtienen multiplicando el tensor $\sigma$ por los vectores unitarios $e_1$, $e_2$ y $e_3$:

Componentes del tensor en $x$:

$$ \sigma \cdot e_1 = \begin{pmatrix} \sigma_{11} & \sigma_{12} & \sigma_{13} \\ \sigma_{21} & \sigma_{22} & \sigma_{23} \\ \sigma_{31} & \sigma_{32} & \sigma_{33} \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} \sigma_{11} \\ \sigma_{21} \\ \sigma_{31} \end{pmatrix} $$

Componentes del tensor en $y$:

$$ \sigma \cdot e_2 = \begin{pmatrix} \sigma_{11} & \sigma_{12} & \sigma_{13} \\ \sigma_{21} & \sigma_{22} & \sigma_{23} \\ \sigma_{31} & \sigma_{32} & \sigma_{33} \end{pmatrix} \cdot \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} \sigma_{12} \\ \sigma_{22} \\ \sigma_{32} \end{pmatrix} $$

Componentes del tensor en $z$:

$$ \sigma \cdot e_3 = \begin{pmatrix} \sigma_{11} & \sigma_{12} & \sigma_{13} \\ \sigma_{21} & \sigma_{22} & \sigma_{23} \\ \sigma_{31} & \sigma_{32} & \sigma_{33} \end{pmatrix} \cdot \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} \sigma_{13} \\ \sigma_{23} \\ \sigma_{33} \end{pmatrix} $$

Para una dirección arbitraria en el espacio definida por el vector unitario $n = (\lambda_1, \lambda_2, \lambda_3)^T$, los esfuerzos actuantes sobre el plano inclinado de normal $n$ se analizan mediante el equilibrio del tetraedro de Cauchy:

<script type="text/tikz">
\begin{tikzpicture}[scale=1.05, line cap=round, line join=round]
    \definecolor{axisOrange}{RGB}{244,164,46}
    \definecolor{axisGreen}{RGB}{28,118,52}
    \definecolor{vecCrimson}{RGB}{164,28,32}
    \definecolor{projBlue}{RGB}{214,232,248}

    % --- 1. Triangulo vertical sombreado de proyeccion del vector n ---
    \fill[projBlue, fill opacity=0.78] (0.000, 0.000) -- (-0.554, -1.100) -- (-0.554, 0.700) -- cycle;

    % --- 2. Lineas discontinuas de proyeccion en el plano xy y vertical ---
    \draw[line width=0.55pt, black!70, densely dashed] (-1.230, -0.710) -- (-0.554, -1.100);
    \draw[line width=0.55pt, black!70, densely dashed] (0.675, -0.390) -- (-0.554, -1.100);
    \draw[line width=0.55pt, black!70, densely dashed] (0.000, 0.000) -- (-0.554, -1.100);
    \draw[line width=0.55pt, black!70, densely dashed] (-0.554, -1.100) -- (-0.554, 0.700);

    % --- 3. Eje z (verde oscuro, vertical arriba) ---
    \filldraw[fill=axisGreen, draw=black!80, line width=0.50pt]
        (-0.044, -0.020) -- (-0.044, 1.650) -- (0.044, 1.650) -- (0.044, -0.020) -- cycle;
    \filldraw[fill=axisGreen, draw=black!80, line width=0.50pt]
        (0.000, 2.050) -- (-0.155, 1.650)
        .. controls (-0.085, 1.618) and (0.085, 1.618) .. (0.155, 1.650) -- cycle;
    \node[anchor=west, font=\itshape\Large] at (0.24, 1.88) {$z$};

    % --- 4. Eje x (naranja, abajo-izquierda) ---
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (0.022, -0.038) -- (-1.407, -0.863) -- (-1.451, -0.787) -- (-0.022, 0.038) -- cycle;
    \filldraw[fill=axisOrange, draw=black!80, line width=0.50pt]
        (-1.775, -1.025) -- (-1.351, -0.959)
        .. controls (-1.359, -0.883) and (-1.444, -0.735) .. (-1.506, -0.691) -- cycle;
    \node[anchor=north, font=\itshape\Large] at (-1.55, -1.12) {$x$};

    % --- 5. Eje y (blanco con contorno oscuro, abajo-derecha) ---
    \filldraw[fill=white, draw=black!75, line width=0.50pt]
        (0.022, 0.038) -- (1.451, -0.787) -- (1.407, -0.863) -- (-0.022, -0.038) -- cycle;
    \filldraw[fill=white, draw=black!75, line width=0.50pt]
        (1.775, -1.025) -- (1.506, -0.691)
        .. controls (1.444, -0.735) and (1.359, -0.883) .. (1.351, -0.959) -- cycle;
    \node[anchor=north, font=\itshape\Large] at (1.88, -1.12) {$y$};

    % --- 6. Vector director unitario n (rojo oscuro en el primer octante) ---
    \filldraw[fill=vecCrimson, draw=black!85, line width=0.50pt]
        (-0.035, -0.027) -- (-0.328, 0.343) -- (-0.259, 0.398) -- (0.035, 0.027) -- cycle;
    \filldraw[fill=vecCrimson, draw=black!85, line width=0.50pt]
        (-0.554, 0.700) -- (-0.423, 0.268)
        .. controls (-0.344, 0.288) and (-0.201, 0.401) .. (-0.164, 0.473) -- cycle;

    % --- 7. Expresion del vector columna n = (lambda_1, lambda_2, lambda_3)^T ---
    \begin{scope}[shift={(1.15, 0.85)}]
        \node[anchor=west, font=\large] at (0.00, 0.00) {$n =$};
        \draw[line width=0.80pt, black]
            (0.94, 0.72) .. controls (0.70, 0.36) and (0.70, -0.36) .. (0.94, -0.72);
        \node[font=\large] at (1.16, 0.46) {$\lambda_1$};
        \node[font=\large] at (1.16, 0.00) {$\lambda_2$};
        \node[font=\large] at (1.16, -0.46) {$\lambda_3$};
        \draw[line width=0.80pt, black]
            (1.38, 0.72) .. controls (1.62, 0.36) and (1.62, -0.36) .. (1.38, -0.72);
    \end{scope}
\end{tikzpicture}
</script>

Figura 6: Vector unitario director $n$ y sus cosenos directores $(\lambda_1, \lambda_2, \lambda_3)$ en el espacio.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=0.92, line cap=round, line join=round]

    % =========================================================
    % 1. TETRAEDRO DE CAUCHY OABC Y EJES COORDENADOS
    % =========================================================
    % Ejes ocultos internos OA, OB, OC (discontinuos)
    \draw[line width=0.75pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (-2.51, -2.51);
    \draw[line width=0.75pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (3.40, 0.00);
    \draw[line width=0.75pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (0.00, 3.40);

    % Prolongaciones visibles de los ejes mas alla de A, B y C
    \draw[line width=0.75pt, black] (-2.51, -2.51) -- (-2.93, -2.93);
    \draw[line width=0.75pt, black] (3.40, 0.00) -- (4.15, 0.00);
    \draw[line width=0.75pt, black] (0.00, 3.40) -- (0.00, 4.25);

    % Aristas visibles de la cara inclinada ABC
    \draw[line width=0.95pt, black] (-2.51, -2.51) -- (3.40, 0.00) -- (0.00, 3.40) -- cycle;

    % Etiquetas de vertices O, A, B, C
    \node[anchor=east, font=\itshape\small] at (-0.06, 0.04) {$O$};
    \node[anchor=north west, font=\itshape\small] at (-2.48, -2.54) {$A$};
    \node[anchor=north, font=\itshape\small] at (3.46, -0.08) {$B$};
    \node[anchor=south west, font=\itshape\small] at (0.04, 3.36) {$C$};

    % =========================================================
    % 2. ESFUERZOS EN LAS TRES CARAS POSTERIORES OCULTAS (DISCONTINUOS)
    % =========================================================
    % --- Cara OBC (x = 0, trasera derecha): tau_xx, tau_xy, tau_xz ---
    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (1.62, 1.02) -- (2.43, 1.83);
    \node[anchor=west, font=\small] at (2.46, 1.82) {$\tau_{xx}$};

    % tau_xy con corte limpio al cruzar bajo tau_nn
    \draw[line width=0.80pt, black, dash pattern=on 5pt off 3pt] (1.62, 1.02) -- (1.28, 1.02);
    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (1.06, 1.02) -- (0.36, 1.02);
    \node[anchor=south, font=\small] at (0.68, 1.08) {$\tau_{xy}$};

    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (1.62, 1.02) -- (1.62, 0.04);
    \node[anchor=west, font=\small] at (1.66, 0.34) {$\tau_{xz}$};

    % --- Cara OAC (y = 0, trasera izquierda): tau_yy, tau_yx, tau_yz ---
    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (-0.88, 0.35) -- (-1.93, 0.35);
    \node[anchor=north, font=\small] at (-1.80, 0.28) {$\tau_{yy}$};

    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (-0.88, 0.35) -- (-0.16, 1.07);
    \node[anchor=east, font=\small] at (-0.64, 0.90) {$\tau_{yx}$};

    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (-0.88, 0.35) -- (-0.88, -0.67);
    \node[anchor=east, font=\small] at (-0.94, -0.58) {$\tau_{yz}$};

    % --- Cara OAB (z = 0, base inferior): tau_zz, tau_zx, tau_zy ---
    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (0.72, -0.78) -- (1.44, -0.06);
    \node[anchor=west, font=\small] at (1.42, -0.22) {$\tau_{zx}$};

    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (0.72, -0.78) -- (-0.33, -0.78);
    \node[anchor=north, font=\small] at (-0.28, -0.84) {$\tau_{zy}$};

    \draw[->, line width=0.80pt, black, dash pattern=on 5pt off 3pt] (0.72, -0.78) -- (0.72, -1.80);
    \node[anchor=west, font=\small] at (0.78, -1.70) {$\tau_{zz}$};

    % =========================================================
    % 3. ESFUERZOS EN LA CARA INCLINADA ABC Y FUERZA DE CUERPO
    % =========================================================
    % Vector normal n y componente normal tau_nn (trazo grueso)
    \draw[->, line width=1.15pt, black] (0.72, 0.56) -- (2.74, 2.58);
    \draw[->, line width=1.15pt, black] (2.68, 2.52) -- (3.30, 3.14);
    \node[anchor=west, font=\small] at (2.82, 2.54) {$\tau_{nn}$};
    \node[anchor=west, font=\bfseries\itshape\small] at (3.32, 3.18) {n};

    % Componente cortante tau_ns sobre la cara inclinada
    \draw[->, line width=0.95pt, black] (0.72, 0.56) -- (-0.36, 1.64);
    \draw[->, line width=0.60pt, black] (-0.52, 2.18) .. controls (-0.26, 2.02) and (-0.22, 1.78) .. (-0.22, 1.54);
    \node[anchor=east, font=\small] at (-0.52, 2.24) {$\tau_{ns}$};

    % Fuerza de cuerpo (peso diferencial vertical hacia abajo)
    \draw[->, line width=0.85pt, black] (0.17, 1.11) -- (0.17, 0.13);
    \draw[->, line width=0.60pt, black] (-0.82, 1.38) .. controls (-0.30, 1.36) and (0.04, 1.18) .. (0.16, 0.88);
    \node[anchor=east, font=\small] at (-0.84, 1.34) {$\displaystyle \frac{\gamma\,dx\,dy\,dz}{2}$};

    % =========================================================
    % 4. LINEAS DE LLAMADA PARA DELTA x, DELTA y, DELTA z
    % =========================================================
    % Delta z
    \draw[->, line width=0.55pt, black] (0.64, 3.36) .. controls (0.36, 3.32) and (0.18, 3.14) .. (0.03, 2.94);
    \node[anchor=west, font=\small] at (0.64, 3.38) {$\Delta z$};

    % Delta y
    \draw[->, line width=0.55pt, black] (2.80, -0.78) .. controls (2.56, -0.58) and (2.52, -0.26) .. (2.56, -0.02);
    \node[anchor=west, font=\small] at (2.80, -0.82) {$\Delta y$};

    % Delta x
    \draw[->, line width=0.55pt, black] (-1.38, -2.52) .. controls (-1.62, -2.36) and (-1.80, -2.14) .. (-1.94, -1.96);
    \node[anchor=west, font=\small] at (-1.36, -2.56) {$\Delta x$};

    % =========================================================
    % 5. TRIADA AUXILIAR DE EJES (x, y, z) A LA DERECHA
    % =========================================================
    \begin{scope}[shift={(5.45, 0.25)}]
        \draw[line width=0.75pt, black] (0.00, 0.00) -- (0.00, 2.30);
        \draw[line width=0.75pt, black] (0.00, 0.00) -- (2.40, 0.00);
        \draw[line width=0.75pt, black] (0.00, 0.00) -- (-1.60, -1.60);
        \node[anchor=west, font=\itshape\small] at (0.06, 2.24) {$z$};
        \node[anchor=north, font=\itshape\small] at (2.28, -0.06) {$y$};
        \node[anchor=north west, font=\itshape\small] at (-1.58, -1.58) {$x$};
    \end{scope}

\end{tikzpicture}
</script>

Figura 7: Tetraedro de Cauchy sometido a esfuerzos en sus caras coordenadas y componentes normal $\tau_{nn}$ y cortante $\tau_{ns}$ sobre el plano oblicuo de normal $n$.

---

## 4. Direcciones Principales de un Tensor de Esfuerzos

Buscamos una dirección particular $n$ en la que se cumple:

$$ \begin{aligned}
\sigma \cdot n &= \lambda n \;\Rightarrow\; \sigma \cdot n = \lambda I \cdot n \\[6pt]
&\Rightarrow\; \sigma \cdot n - \lambda I \cdot n = 0 \;\Rightarrow\; (\sigma - \lambda I) \cdot n = 0
\end{aligned} $$

Existe solución no trivial si se cumple que:

$$ \begin{aligned}
|\sigma - \lambda I| &= 0 \\[10pt]
\begin{vmatrix} \sigma_{11} - \lambda & \sigma_{12} & \sigma_{13} \\ \sigma_{21} & \sigma_{22} - \lambda & \sigma_{23} \\ \sigma_{31} & \sigma_{32} & \sigma_{33} - \lambda \end{vmatrix} &= 0
\end{aligned} $$

Desarrollando el determinante se obtiene el **polinomio característico**:

$$ \begin{aligned}
\lambda^3 &- (\sigma_{11} + \sigma_{22} + \sigma_{33})\lambda^2 \\[6pt]
&+ (\sigma_{11}\sigma_{22} + \sigma_{11}\sigma_{33} + \sigma_{22}\sigma_{33} - \sigma_{12}^2 - \sigma_{23}^2 - \sigma_{31}^2)\lambda \\[6pt]
&- (\sigma_{11}\sigma_{22}\sigma_{33} + 2\sigma_{12}\sigma_{23}\sigma_{13} - \sigma_{11}\sigma_{23}^2 - \sigma_{22}\sigma_{13}^2 - \sigma_{33}\sigma_{12}^2) = 0
\end{aligned} $$

Expresado en el sistema de direcciones principales, el tensor de esfuerzos adopta forma diagonal:

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=1.00, line cap=round, line join=round]
    \definecolor{cubeTop}{RGB}{187,189,192}
    \definecolor{cubeSide}{RGB}{230,231,232}

    % --- 1. Caras visibles del cubo (origen oculto Q en (0,0)) ---
    \fill[cubeTop]  (-1.62, 1.46) -- (0.78, 1.46) -- (2.40, 2.40) -- (0.00, 2.40) -- cycle;
    \fill[cubeSide] (-1.62, -0.94) -- (0.78, -0.94) -- (0.78, 1.46) -- (-1.62, 1.46) -- cycle;
    \fill[cubeSide] (0.78, -0.94) -- (2.40, 0.00) -- (2.40, 2.40) -- (0.78, 1.46) -- cycle;

    % --- 2. Aristas ocultas y ejes internos desde Q = (0,0) ---
    \draw[line width=0.80pt, black!85, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (2.40, 0.00);
    \draw[line width=0.80pt, black!85, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (0.00, 2.40);
    \draw[line width=0.80pt, black!85, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (-1.62, -0.94);

    % --- 3. Contorno visible del cubo ---
    \draw[line width=0.85pt, black] (-1.62, -0.94) -- (0.78, -0.94) -- (0.78, 1.46) -- (-1.62, 1.46) -- cycle;
    \draw[line width=0.85pt, black] (-1.62, 1.46) -- (0.00, 2.40) -- (2.40, 2.40) -- (0.78, 1.46);
    \draw[line width=0.85pt, black] (0.78, -0.94) -- (2.40, 0.00) -- (2.40, 2.40);

    % --- 4. Prolongaciones externas de los ejes x, y, z ---
    \draw[->, line width=0.65pt, black] (2.44, 0.00) -- (3.32, 0.00);
    \node[anchor=west, font=\itshape\large] at (3.36, 0.00) {$x$};

    \draw[->, line width=0.65pt, black] (0.00, 2.44) -- (0.00, 3.36);
    \node[anchor=south, font=\itshape\large] at (0.00, 3.40) {$y$};

    \draw[->, line width=0.65pt, black] (-1.66, -0.96) -- (-2.42, -1.40);
    \node[anchor=east, font=\itshape\large] at (-2.44, -1.42) {$z$};

    % Etiqueta del punto Q
    \node[anchor=north, font=\itshape\large] at (0.04, -0.06) {$Q$};

    % --- 5. Esfuerzos principales normales en las 6 caras ---
    % sigma_1 (+x, cara derecha visible)
    \draw[->, line width=1.40pt, black] (1.59, 0.73) -- (3.38, 0.73);
    \node[anchor=west, font=\large] at (3.42, 0.73) {$\sigma_1$};

    % -sigma_1 (-x, cara izquierda oculta: punteado interno + solido externo)
    \draw[line width=1.40pt, black, dash pattern=on 3pt off 3pt] (-0.81, 0.73) -- (-1.62, 0.73);
    \draw[->, line width=1.40pt, black] (-1.62, 0.73) -- (-2.50, 0.73);

    % sigma_2 (+y, cara superior visible)
    \draw[->, line width=1.40pt, black] (0.39, 1.93) -- (0.39, 3.32);
    \node[anchor=south, font=\large] at (0.50, 3.34) {$\sigma_2$};

    % -sigma_2 (-y, cara inferior oculta)
    \draw[line width=1.40pt, black, dash pattern=on 5pt off 4pt] (0.39, -0.47) -- (0.39, -0.94);
    \draw[->, line width=1.40pt, black] (0.39, -0.94) -- (0.39, -1.84);

    % sigma_3 (+z, cara frontal visible)
    \draw[->, line width=1.40pt, black] (-0.42, 0.26) -- (-2.28, -0.82);
    \node[anchor=east, font=\large] at (-2.30, -0.78) {$\sigma_3$};

    % -sigma_3 (-z, cara posterior oculta)
    \draw[line width=1.40pt, black, dash pattern=on 3pt off 3pt] (1.20, 1.20) -- (2.40, 1.90);
    \draw[->, line width=1.40pt, black] (2.40, 1.90) -- (3.34, 2.44);
\end{tikzpicture}
</script>

Figura 8: Estado triaxial de esfuerzos en las direcciones principales $(\sigma_1, \sigma_2, \sigma_3)$.

$$ \sigma_N = \begin{bmatrix} \sigma_1 & 0 & 0 \\ 0 & \sigma_2 & 0 \\ 0 & 0 & \sigma_3 \end{bmatrix} $$

---

### 4.1. Componentes en dirección arbitraria respecto a los ejes principales

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=0.95, line cap=round, line join=round]
    \definecolor{triGray}{RGB}{187,189,192}
    \definecolor{triYellow}{RGB}{255,223,128}
    \definecolor{projGreen}{RGB}{0,148,68}
    \definecolor{resRed}{RGB}{236,16,16}

    % --- 1. Cara inclinada ABC (triangulo gris) ---
    \fill[triGray] (-2.30, -1.33) -- (2.75, -1.33) -- (0.00, 2.76) -- cycle;

    % --- 2. Triangulo rectangulo amarillo de descomposicion (sigma, sigma_N) ---
    \fill[triYellow, fill opacity=0.88] (0.32, 0.48) -- (1.456, 2.102) -- (2.420, 0.558) -- cycle;

    % --- 3. Contorno visible del tetraedro QABC ---
    \draw[line width=0.90pt, black] (-2.30, -1.33) -- (2.75, -1.33) -- (0.00, 2.76) -- cycle;

    % --- 4. Ejes coordenados x, y, z (discontinuos internos, solidos externos) ---
    % Eje y (vertical arriba)
    \draw[line width=0.90pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (0.00, 2.76);
    \draw[->, line width=0.90pt, black, dash pattern=on 6pt off 4pt] (0.00, 2.76) -- (0.00, 3.85);
    \node[anchor=west, font=\itshape\large] at (0.10, 3.74) {$y$};

    % Eje z (oblicuo abajo-izquierda)
    \draw[line width=0.90pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (-2.30, -1.33);
    \draw[->, line width=0.90pt, black] (-2.30, -1.33) -- (-3.21, -1.86);
    \node[anchor=north, font=\itshape\large] at (-3.18, -1.86) {$z$};

    % Eje x (oblicuo abajo-derecha)
    \draw[line width=0.90pt, black, dash pattern=on 6pt off 4pt] (0.00, 0.00) -- (2.75, -1.33);
    \draw[->, line width=0.90pt, black] (2.75, -1.33) -- (3.70, -1.79);
    \node[anchor=north, font=\itshape\large] at (3.64, -1.82) {$x$};

    % Punto origen Q y vertices A, B, C
    \fill[black] (0.00, 0.00) circle (0.085);
    \node[anchor=north, font=\itshape\large] at (0.00, -0.18) {$Q$};
    \node[anchor=east, font=\itshape\large] at (-0.12, 2.76) {$B$};
    \node[anchor=south east, font=\itshape\large] at (-2.36, -1.30) {$A$};
    \node[anchor=south west, font=\itshape\large] at (2.82, -1.30) {$C$};

    % --- 5. Esfuerzos principales en las caras ocultas (sigma_1, sigma_2, sigma_3) ---
    % sigma_1 (sale por el borde AB)
    \draw[line width=1.25pt, black, dash pattern=on 6pt off 4pt] (-0.68, 0.34) -- (-1.216, 0.599);
    \draw[->, line width=1.25pt, black] (-1.216, 0.599) -- (-2.345, 1.145);
    \node[anchor=south, font=\large] at (-1.98, 1.16) {$\sigma_1$};

    % sigma_2 (vertical abajo saliendo por el borde AC)
    \draw[line width=1.25pt, black, dash pattern=on 6pt off 4pt] (0.00, -0.58) -- (0.00, -1.33);
    \draw[->, line width=1.25pt, black] (0.00, -1.33) -- (0.00, -2.55);
    \node[anchor=west, font=\large] at (0.14, -2.14) {$\sigma_2$};

    % sigma_3 (sale por el borde BC)
    \draw[line width=1.25pt, black, dash pattern=on 6pt off 4pt] (0.68, 0.39) -- (1.338, 0.770);
    \draw[->, line width=1.25pt, black] (1.338, 0.770) -- (2.307, 1.331);
    \node[anchor=west, font=\large] at (2.14, 0.94) {$\sigma_3$};

    % --- 6. Componentes cartesianas de traccion p_x, p_y, p_z desde P0 = (0.32, 0.48) ---
    \draw[->, line width=0.68pt, black, dash pattern=on 2.5pt off 2pt] (0.32, 0.48) -- (1.355, -0.021);
    \node[anchor=north, font=\large] at (1.38, -0.10) {$p_x$};

    \draw[->, line width=0.68pt, black, dash pattern=on 2.5pt off 2pt] (0.32, 0.48) -- (0.32, 3.03);
    \node[anchor=west, font=\large] at (0.38, 2.94) {$p_y$};

    \draw[->, line width=0.68pt, black, dash pattern=on 2.5pt off 2pt] (0.32, 0.48) -- (-0.875, -0.211);
    \node[anchor=east, font=\large] at (-0.90, -0.24) {$p_z$};

    % --- 7. Vector normal n, esfuerzo normal sigma, cortante tau y resultante rojo sigma_N ---
    % Direccion normal n (prolongacion fina)
    \draw[->, line width=0.80pt, black] (0.32, 0.48) -- (2.069, 2.978);
    \node[anchor=south west, font=\bfseries\itshape\large] at (2.04, 2.98) {n};

    % Esfuerzo normal sigma (flecha gruesa sobre n)
    \draw[->, line width=1.35pt, black] (0.32, 0.48) -- (1.456, 2.102);
    \node[anchor=west, font=\large] at (1.44, 1.94) {$\sigma$};

    % Esfuerzo cortante tau (flecha gruesa en el plano ABC)
    \draw[->, line width=1.35pt, black] (0.32, 0.48) -- (1.284, -1.063);
    \node[anchor=east, font=\large] at (1.06, -0.96) {$\tau$};

    % Lineas de proyeccion verde discontinuas cerrando el paralelogramo (sigma, tau -> sigma_N)
    \draw[line width=0.85pt, projGreen, dash pattern=on 5pt off 3pt] (1.456, 2.102) -- (2.420, 0.558);
    \draw[line width=0.85pt, projGreen, dash pattern=on 5pt off 3pt] (1.284, -1.063) -- (2.420, 0.558);

    % Vector esfuerzo resultante sigma_N = sigma . n (flecha roja)
    \draw[->, line width=1.55pt, resRed] (0.32, 0.48) -- (2.420, 0.558);
    \node[anchor=west, resRed, font=\Large] at (2.48, 0.46) {$\sigma_N = \sigma \cdot n$};
\end{tikzpicture}
</script>

Figura 9: Descomposición del vector de esfuerzo resultante $\sigma_N = \sigma \cdot n$ en sus componentes normal ($\sigma$) y cortante ($\tau$) sobre un plano oblicuo $ABC$.

Para un plano oblicuo definido por el vector unitario de cosenos directores $(l, m, n)^T$, el vector de esfuerzo resultante es:

$$ \sigma_N = \begin{bmatrix} \sigma_1 & 0 & 0 \\ 0 & \sigma_2 & 0 \\ 0 & 0 & \sigma_3 \end{bmatrix} \begin{bmatrix} l \\ m \\ n \end{bmatrix} = \begin{bmatrix} \sigma_1 l \\ \sigma_2 m \\ \sigma_3 n \end{bmatrix} $$

La magnitud de la componente normal $\sigma_n$ viene dada por el producto escalar:

$$ |\sigma_n| = \begin{bmatrix} \sigma_1 l \\ \sigma_2 m \\ \sigma_3 n \end{bmatrix} \cdot \begin{bmatrix} l \\ m \\ n \end{bmatrix} = \sigma_1 l^2 + \sigma_2 m^2 + \sigma_3 n^2 $$

El vector esfuerzo cortante $\tau_n$ y su magnitud se expresan mediante:

$$ \begin{aligned}
\tau_n &= F - (F \cdot n)n = \begin{bmatrix} \sigma_1 l \\ \sigma_2 m \\ \sigma_3 n \end{bmatrix} - \sigma_n \begin{bmatrix} l \\ m \\ n \end{bmatrix} \\[8pt]
&= \begin{bmatrix} (\sigma_1 - \sigma_n)l \\ (\sigma_2 - \sigma_n)m \\ (\sigma_3 - \sigma_n)n \end{bmatrix}
\end{aligned} $$

$$ |\tau_n| = \left[(\sigma_1 - \sigma_n)^2 l^2 + (\sigma_2 - \sigma_n)^2 m^2 + (\sigma_3 - \sigma_n)^2 n^2\right]^{1/2} $$

---

### 4.2. Esfuerzo octaédrico

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, scale=0.95, line cap=round, line join=round]
    \definecolor{octGray}{RGB}{188,190,194}
    \definecolor{octGrayDark}{RGB}{172,175,180}
    \definecolor{octGold}{RGB}{224,192,94}
    \definecolor{octCyan}{RGB}{0,168,238}
    \definecolor{vecRed}{RGB}{236,16,16}
    \definecolor{tauOlive}{RGB}{98,84,36}

    % --- 1. Caras grises visibles del octaedro (centro Q = (0,0)) ---
    % Cara superior izquierda (A, B, -C)
    \fill[octGray] (0.71, -1.17) -- (0.00, 2.65) -- (-2.46, -0.87) -- cycle;
    % Cara inferior izquierda (A, -B, -C)
    \fill[octGrayDark] (0.71, -1.17) -- (0.00, -2.76) -- (-2.46, -0.87) -- cycle;
    % Cara inferior derecha (A, -B, C)
    \fill[octGrayDark!92!black] (0.71, -1.17) -- (0.00, -2.76) -- (2.46, 0.87) -- cycle;

    % --- 2. Aristas posteriores ocultas y ejes principales internos desde Q = (0,0) ---
    \draw[line width=0.68pt, black!80, dash pattern=on 5pt off 3.5pt] (0.00, 2.65) -- (-0.80, 0.87) -- (-2.46, -0.87);
    \draw[line width=0.68pt, black!80, dash pattern=on 5pt off 3.5pt] (-0.80, 0.87) -- (2.46, 0.87);
    \draw[line width=0.68pt, black!80, dash pattern=on 5pt off 3.5pt] (-0.80, 0.87) -- (0.00, -2.76);
    \draw[line width=0.75pt, black!85, dash pattern=on 5pt off 3.5pt] (0.00, 0.00) -- (0.00, 2.65);
    \draw[line width=0.75pt, black!85, dash pattern=on 5pt off 3.5pt] (0.00, 0.00) -- (2.46, 0.87);
    \draw[line width=0.75pt, black!85, dash pattern=on 5pt off 3.5pt] (0.00, 0.00) -- (0.71, -1.17);

    % --- 3. Plano octaedrico ABC destacado en dorado semitransparente ---
    \fill[octGold, fill opacity=0.78] (0.71, -1.17) -- (0.00, 2.65) -- (2.46, 0.87) -- cycle;

    % --- 4. Contorno exterior visible del octaedro y borde celeste de ABC ---
    \draw[line width=0.88pt, black] (0.00, 2.65) -- (-2.46, -0.87) -- (0.00, -2.76) -- (2.46, 0.87);
    \draw[line width=0.88pt, black] (-2.46, -0.87) -- (0.71, -1.17) -- (0.00, -2.76);
    \draw[line width=1.45pt, octCyan] (0.71, -1.17) -- (0.00, 2.65) -- (2.46, 0.87) -- cycle;

    % Centro Q y vertices A, B, C
    \fill[black] (0.00, 0.00) circle (0.095);
    \node[anchor=north east, font=\itshape\large] at (0.02, -0.14) {$Q$};
    \node[anchor=east, font=\itshape\large] at (-0.12, 2.74) {$B$};
    \node[anchor=north east, font=\itshape\large] at (0.56, -1.22) {$A$};
    \node[anchor=north west, font=\itshape\large] at (2.48, 0.74) {$C$};

    % --- 5. Direcciones principales (sigma_1, sigma_2, sigma_3) ---
    \draw[->, line width=1.45pt, black] (2.46, 0.87) -- (3.60, 1.28);
    \node[anchor=west, font=\large] at (3.66, 1.32) {$\sigma_1$};

    \draw[->, line width=1.45pt, black] (0.00, 2.65) -- (0.00, 3.74);
    \node[anchor=west, font=\large] at (0.14, 3.54) {$\sigma_2$};

    \draw[->, line width=1.45pt, black] (0.71, -1.17) -- (1.36, -2.14);
    \node[anchor=west, font=\large] at (1.42, -2.18) {$\sigma_3$};

    % --- 6. Esfuerzos octaedricos en el plano ABC ---
    % Cortante octaedrico tau_oct estrictamente dentro del triangulo dorado
    \draw[->, line width=1.45pt, tauOlive] (0.66, 1.50) -- (1.37, 0.07);
    % Linea de llamada y etiqueta tau_oct
    \draw[line width=0.68pt, black] (1.26, 0.34) -- (2.28, -0.22);
    \node[anchor=west, font=\large] at (2.34, -0.28) {$\tau_{\mathrm{oct}}$};

    % Esfuerzo normal octaedrico sigma_oct (negro) + vector unitario n (rojo)
    \draw[->, line width=1.45pt, black] (1.02, 0.78) -- (2.52, 1.63);
    \draw[->, line width=1.60pt, vecRed] (1.02, 0.78) -- (1.93, 1.30);
    \node[anchor=south, vecRed, font=\sffamily\bfseries\large] at (1.34, 1.18) {n};
    \node[anchor=west, font=\large] at (2.58, 1.68) {$\sigma_{\mathrm{oct}}$};

    % Linea de llamada y etiqueta Octahedral plane
    \draw[line width=0.68pt, black] (0.50, 1.72) -- (1.34, 2.48);
    \node[anchor=west, font=\sffamily\large] at (1.12, 2.63) {Octahedral plane};

    % --- 7. Pares normal-cortante en las otras 3 caras visibles ---
    % Cara superior izquierda (A, B, -C)
    \draw[->, line width=1.45pt, black] (-0.69, 0.28) -- (-2.24, 0.87);
    \draw[->, line width=1.45pt, black] (-0.45, 1.27) -- (-0.87, -0.68);

    % Cara inferior izquierda (A, -B, -C)
    \draw[->, line width=1.45pt, black] (-0.51, -1.81) -- (-1.59, -2.53);
    \draw[->, line width=1.45pt, black] (-0.21, -2.31) -- (-0.87, -1.17);

    % Cara inferior derecha (A, -B, C)
    \draw[->, line width=1.45pt, black] (1.23, -0.98) -- (2.32, -1.81);
    \draw[->, line width=1pt, black] (0, -2.76) -- (1.57, -0.21);
\end{tikzpicture}
</script>

Figura 10: Plano octaédrico $ABC$ con su vector unitario normal $n$, esfuerzo normal octaédrico $\sigma_{\mathrm{oct}}$ y esfuerzo cortante octaédrico $\tau_{\mathrm{oct}}$.

El plano octaédrico forma ángulos iguales con las tres direcciones principales, por lo que su vector normal unitario es:

$$ n = \begin{bmatrix} \dfrac{1}{\sqrt{3}} \\[10pt] \dfrac{1}{\sqrt{3}} \\[10pt] \dfrac{1}{\sqrt{3}} \end{bmatrix} = \frac{1}{\sqrt{3}}\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} $$

Sustituyendo estos cosenos directores en las expresiones generales de esfuerzo normal y esfuerzo cortante, se obtienen los esfuerzos octaédricos:

$$ |\sigma_n| = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} $$

$$ |\tau_n| = \sqrt{\frac{(\sigma_1 - \sigma_n)^2 + (\sigma_2 - \sigma_n)^2 + (\sigma_3 - \sigma_n)^2}{3}} $$

---

## 5. Transformación Plana de Esfuerzos

Considerando los vectores unitarios en las direcciones rotadas $n$ y $t$ un ángulo $\theta$:

$$ \begin{aligned}
u_n &= (\cos\theta,\; \sin\theta) \\
u_t &= (-\sin\theta,\; \cos\theta)
\end{aligned}
\qquad \Rightarrow \qquad
R = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix} $$

<script type="text/tikz">
\begin{tikzpicture}[>=stealth, scale=1.05, line cap=round, line join=round]
    \definecolor{wedgeGray}{RGB}{229,228,228}

    % --- 1. Elemento triangular diferencial (dx = 3.60, dy = 2.455, phi = 55.71 deg) ---
    \fill[wedgeGray] (0.000, 0.000) -- (3.600, 0.000) -- (0.000, 2.455) -- cycle;
    \draw[line width=1.20pt, black] (0.000, 0.000) -- (3.600, 0.000) -- (0.000, 2.455) -- cycle;

    % Etiquetas internas de longitudes dx, dy, ds
    \node[anchor=west, font=\itshape\large] at (0.08, 1.18) {$dy$};
    \node[anchor=south, font=\itshape\large] at (1.66, 0.10) {$dx$};
    \node[anchor=north east, font=\itshape\large] at (1.84, 1.18) {$ds$};

    % Angulo interior phi en el vertice superior izquierdo
    \draw[->, line width=0.65pt, black] (0.000, 1.675) arc (-90:-34.29:0.78);
    \node[font=\large] at (0.23, 2.00) {$\phi$};

    % --- 2. Ejes de referencia x, y y angulo exterior phi hacia la normal n ---
    % Eje y (prolongacion superior)
    \draw[line width=0.62pt, black] (0.000, 2.620) -- (0.000, 4.180);
    \node[anchor=south, font=\itshape\large] at (0.000, 4.240) {$y$};

    % Eje x (prolongacion derecha)
    \draw[line width=0.62pt, black] (3.760, 0.000) -- (5.380, 0.000);
    \node[anchor=west, font=\itshape\large] at (5.460, 0.000) {$x$};

    % Marca de la direccion normal n y arco exterior del angulo phi
    \draw[line width=0.62pt, black] (2.980, 2.958) -- (3.363, 3.520);
    \node[anchor=west, font=\itshape\large] at (3.44, 3.44) {$n$};
    \draw[line width=0.62pt, black] (4.883, 0.000) arc (0:21.65:3.92);
    \draw[->, line width=0.62pt, black] (4.211, 2.195) arc (34.05:55.71:3.92);
    \node[font=\large] at (4.429, 1.832) {$\phi$};

    % --- 3. Esfuerzos normales y cortantes en las tres caras ---
    % Cara izquierda (dy): sigma_x hacia la izquierda y tau_xy hacia abajo
    \draw[->, line width=1.25pt, black] (0.000, 1.228) -- (-1.650, 1.228);
    \node[anchor=south, font=\large] at (-1.52, 1.32) {$\sigma_x$};

    \draw[->, line width=1.25pt, black] (-0.380, 1.908) -- (-0.380, 0.547);
    \node[anchor=east, font=\large] at (-0.48, 0.62) {$\tau_{xy}$};

    % Cara inferior (dx): sigma_y hacia abajo y tau_xy hacia la izquierda
    \draw[->, line width=1.25pt, black] (1.800, 0.000) -- (1.800, -1.050);
    \node[anchor=west, font=\large] at (1.92, -0.92) {$\sigma_y$};

    \draw[->, line width=1.25pt, black] (2.520, -0.350) -- (1.120, -0.350);
    \node[anchor=north, font=\large] at (1.28, -0.46) {$\tau_{xy}$};

    % Cara inclinada (ds): esfuerzo normal sigma y cortante tau
    \draw[->, line width=1.25pt, black] (1.800, 1.228) -- (2.645, 2.467);
    \node[anchor=west, font=\large] at (2.74, 2.38) {$\sigma$};

    \draw[->, line width=1.25pt, black] (2.724, 1.021) -- (1.270, 2.012);
    \node[anchor=south, font=\large] at (1.50, 1.96) {$\tau$};
\end{tikzpicture}
</script>

Figura 11: Elemento diferencial triangular en estado plano de esfuerzos para el plano inclinado de normal $n$ a un ángulo $\phi$.

El tensor plano de esfuerzos $\sigma$ se transforma al sistema girado mediante $\sigma' = R\sigma R^T$:

$$ \sigma = \begin{pmatrix} \sigma_{11} & \sigma_{12} \\ \sigma_{21} & \sigma_{22} \end{pmatrix} \;\Rightarrow\; \sigma' = R\sigma R^T $$

$$ \sigma' = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \sigma_{11} & \sigma_{12} \\ \sigma_{21} & \sigma_{22} \end{pmatrix} \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} $$

Evaluando primero el producto $\sigma R^T$:

$$ \sigma R^T = \begin{pmatrix} \sigma_{11}\cos\theta + \sigma_{12}\sin\theta & -\sigma_{11}\sin\theta + \sigma_{12}\cos\theta \\[4pt] \sigma_{21}\cos\theta + \sigma_{22}\sin\theta & -\sigma_{21}\sin\theta + \sigma_{22}\cos\theta \end{pmatrix} $$

---

### 5.1. Leyes de transformación plana de esfuerzos

Efectuando el producto matricial $\sigma' = R(\sigma R^T)$ y aplicando la simetría $\sigma_{21} = \sigma_{12}$, se obtiene el tensor transformado:

$$ \sigma' = \begin{bmatrix} \sigma_{nn} & \sigma_{nt} \\ \sigma_{nt} & \sigma_{tt} \end{bmatrix} $$

cuyas componentes son:

$$ \begin{aligned}
\sigma_{nn} &= \sigma_{11}\cos^2\theta + \sigma_{22}\sin^2\theta + 2\sigma_{12}\sin\theta\cos\theta \\[6pt]
\sigma_{nt} &= (\sigma_{22} - \sigma_{11})\sin\theta\cos\theta + \sigma_{12}(\cos^2\theta - \sin^2\theta) \\[6pt]
\sigma_{tt} &= \sigma_{11}\sin^2\theta + \sigma_{22}\cos^2\theta - 2\sigma_{12}\sin\theta\cos\theta
\end{aligned} $$

Empleando las identidades trigonométricas de ángulo doble, se obtienen las leyes de transformación plana de esfuerzos:

$$ \begin{aligned}
\sigma_{nn} &= \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right) + \left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)\cos 2\theta + \sigma_{12}\sin 2\theta \\[8pt]
\sigma_{nt} &= -\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)\sin 2\theta + \sigma_{12}\cos 2\theta \\[8pt]
\sigma_{tt} &= \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right) - \left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)\cos 2\theta - \sigma_{12}\sin 2\theta
\end{aligned} $$

---

### 5.2. Esfuerzos máximos y mínimos

Derivando $\sigma_{nn}$ con respecto a $\theta$ e igualando a cero:

$$ \begin{aligned}
\frac{d\sigma_{nn}}{d\theta} = -2\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)\sin 2\theta + 2\sigma_{12}\cos 2\theta &= 0 \\[8pt]
(\sigma_{11} - \sigma_{22})\sin 2\theta &= 2\sigma_{12}\cos 2\theta
\end{aligned} $$

$$ \begin{aligned}
\tan 2\theta &= \frac{\sigma_{12}}{\dfrac{\sigma_{11} - \sigma_{22}}{2}} \\[10pt]
\theta &= \frac{1}{2}\tan^{-1}\left(\frac{2\sigma_{12}}{\sigma_{11} - \sigma_{22}}\right)
\end{aligned} $$

<script type="text/tikz">
\begin{tikzpicture}[scale=0.95, line cap=miter, line join=miter]
    \definecolor{triBlue}{RGB}{222,235,247}

    % --- 1. Triangulo rectangulo sombreado en azul claro (theta = 34.14 deg) ---
    \fill[triBlue] (0.00, 0.00) -- (4.80, 0.00) -- (4.80, 3.26) -- cycle;
    \draw[line width=1.80pt, black] (0.00, 0.00) -- (4.80, 0.00) -- (4.80, 3.26) -- cycle;

    % --- 2. Angulo interno theta ---
    \node[font=\Large] at (1.18, 0.38) {$\theta$};

    % --- 3. Etiquetas de catetos e hipotenusa ---
    % Cateto horizontal (base) con parentesis vectoriales limpios
    \node[font=\large] at (2.65, -0.72) {$\displaystyle\frac{\sigma_{11} - \sigma_{22}}{2}$};
    \draw[line width=0.85pt, black, line cap=round]
        (1.68, -0.20) .. controls (1.46, -0.45) and (1.46, -0.99) .. (1.68, -1.24);
    \draw[line width=0.85pt, black, line cap=round]
        (3.62, -0.20) .. controls (3.84, -0.45) and (3.84, -0.99) .. (3.62, -1.24);

    % Cateto vertical (derecho)
    \node[anchor=west, font=\large] at (4.96, 1.63) {$\sigma_{12}$};

    % Hipotenusa R rotada exactamente paralela al lado inclinado (34.14 deg)
    \begin{scope}[shift={(2.12, 2.38)}, rotate=34.14, line cap=round, line join=round]
        \node[rotate=34.14, font=\large] at (-1.98, 0.00) {$R =$};
        % Radical vectorial
        \draw[line width=0.80pt, black] (-1.42, -0.10) -- (-1.30, -0.02);
        \draw[line width=1.20pt, black] (-1.30, -0.02) -- (-1.12, -0.56);
        \draw[line width=0.80pt, black] (-1.12, -0.56) -- (-0.82, 0.76) -- (2.92, 0.76);
        % Fraccion entre parentesis vectoriales
        \draw[line width=0.85pt, black]
            (-0.56, 0.50) .. controls (-0.76, 0.26) and (-0.76, -0.26) .. (-0.56, -0.50);
        \node[rotate=34.14, font=\large] at (0.36, 0.00) {$\displaystyle\frac{\sigma_{11} - \sigma_{22}}{2}$};
        \draw[line width=0.85pt, black]
            (1.28, 0.50) .. controls (1.48, 0.26) and (1.48, -0.26) .. (1.28, -0.50);
        \node[rotate=34.14, font=\small] at (1.54, 0.44) {$2$};
        \node[anchor=west, rotate=34.14, font=\large] at (1.66, 0.00) {$+\; \sigma_{12}^{2}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 12: Relación geométrica entre las componentes de esfuerzo y el radio $R$ de la circunferencia de Mohr.

Sustituyendo las razones trigonométricas de $2\theta$ en las expresiones de $\sigma_{nn}$ y $\sigma_{nt}$:

$$ \begin{aligned}
\sigma_{nn} &= \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right) + \frac{\left(\dfrac{\sigma_{11} - \sigma_{22}}{2}\right)^2}{R} + \frac{\sigma_{12}^2}{R} \\[8pt]
&= \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right) + \sqrt{\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)^2 + \sigma_{12}^2}
\end{aligned} $$

$$ \sigma_{nt} = \left(\frac{\sigma_{22} - \sigma_{11}}{2}\right)\frac{\sigma_{12}}{R} + \sigma_{12}\frac{\left(\dfrac{\sigma_{11} - \sigma_{22}}{2}\right)}{R} = 0 $$

---

## 6. Circunferencia de Mohr

Reescribiendo las ecuaciones de transformación plana para eliminar el parámetro $2\theta$:

$$ \begin{aligned}
\sigma_{nn} - \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right) &= \left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)\cos 2\theta + \sigma_{12}\sin 2\theta \\[8pt]
\sigma_{nt} &= \left(\frac{\sigma_{22} - \sigma_{11}}{2}\right)\sin 2\theta + \sigma_{12}\cos 2\theta
\end{aligned} $$

Elevando al cuadrado y sumando ambas ecuaciones, se obtiene la ecuación de la **circunferencia de Mohr**:

$$ \left[\sigma_{nn} - \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right)\right]^2 + \sigma_{nt}^2 = \left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)^2 + \sigma_{12}^2 = R^2 $$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=1.23, line cap=round, line join=round]
    % Centro C = (3.40, 0), radio R = 2.80
    % Puntos A = (5.775, -1.484), B = (1.025, 1.484), H = (5.775, 1.484)

    % Ejes principales sigma (horizontal) y tau (vertical en x = 0)
    \draw[->, line width=0.80pt, black] (-0.55, 0) -- (8.55, 0) node[right] {$\sigma$};
    \draw[line width=0.80pt, black] (0, -3.55) -- (0, 4.88);
    \node[anchor=east] at (-0.08, 4.78) {$\tau^{\mbox{\tiny s.r.}}$};
    \node[anchor=east] at (-0.08, -3.32) {$\tau^{\mbox{\tiny s.c.r.}}$};
    \node[anchor=north east] at (-0.06, -0.06) {$O$};

    % Circunferencia de Mohr
    \draw[line width=1.30pt, black] (3.40, 0) circle (2.80);

    % Eje vertical por el centro C (F y G)
    \draw[line width=0.65pt, black, dash pattern=on 10pt off 4pt on 2pt off 4pt] (3.40, -3.55) -- (3.40, 3.62);

    % Diametro AB prolongado hacia x e y
    \draw[line width=0.80pt, black] (0.45, 1.84) -- (7.48, -2.55);
    \node[anchor=south east, font=\itshape] at (0.45, 1.84) {$y$};
    \node[anchor=north west, font=\itshape] at (7.50, -2.55) {$x$};

    % Radio CH
    \draw[line width=0.80pt, black] (3.40, 0) -- (5.775, 1.484);

    % Proyecciones verticales y horizontales de A y B
    \draw[line width=0.60pt, black, dashed] (1.025, 0) -- (1.025, 1.484);
    \draw[line width=0.60pt, black] (1.025, 1.484) -- (1.025, 4.85);
    \draw[line width=0.60pt, black] (5.775, -1.484) -- (5.775, 4.85);
    \draw[line width=0.60pt, black] (-0.55, 1.484) -- (1.025, 1.484);
    \draw[line width=0.60pt, black] (5.775, -1.484) -- (8.38, -1.484);

    % Puntos notables A, B, C, D, E, F, G, H
    \fill[black] (3.40, 0) circle (0.055) node[anchor=north east] {$C$};
    \fill[black] (6.20, 0) circle (0.055);
    \node[anchor=south west] at (6.24, 0.05) {$D$};
    \node[anchor=north west] at (6.24, -0.05) {$\sigma_1$};
    \fill[black] (0.60, 0) circle (0.055);
    \node[anchor=south east] at (0.56, 0.05) {$E$};
    \node[anchor=north east] at (0.56, -0.05) {$\sigma_2$};
    \fill[black] (3.40, 2.80) circle (0.055) node[anchor=south east] {$F$};
    \fill[black] (3.40, -2.80) circle (0.055) node[anchor=north west] {$G$};
    \fill[black] (5.775, 1.484) circle (0.055) node[anchor=west] {$H$};
    \fill[black] (1.025, 1.484) circle (0.055);
    \node[anchor=south east] at (0.98, 1.52) {$B$};
    \node[anchor=west, scale=0.86] at (1.14, 1.50) {($\sigma_y$, $\tau_{xy}^{\mbox{\tiny s.r.}}$)};
    \fill[black] (5.775, -1.484) circle (0.055);
    \node[anchor=south west] at (5.84, -1.44) {$A$};
    \node[anchor=north west, scale=0.86] at (5.82, -1.55) {($\sigma_x$, $\tau_{xy}^{\mbox{\tiny s.c.r.}}$)};

    % Etiquetas sigma_y y sigma_x sobre el eje sigma (sin cruzarse con la vertical AH)
    \node[anchor=north, scale=0.90] at (1.025, -0.06) {$\sigma_y$};
    \node[anchor=north west, scale=0.90] at (5.79, -0.06) {$\sigma_x$};

    % Cotas superiores bien espaciadas verticalmente (sin solapamientos)
    \draw[<->, line width=0.58pt, black] (0, 4.68) -- (5.775, 4.68)
        node[midway, fill=white, inner sep=2.5pt, scale=0.88] {$\sigma_x$};
    \draw[<->, line width=0.58pt, black] (0, 4.10) -- (1.025, 4.10)
        node[midway, fill=white, inner sep=2pt, scale=0.88] {$\sigma_y$};
    \draw[<->, line width=0.58pt, black] (1.025, 4.10) -- (5.775, 4.10)
        node[midway, fill=white, inner sep=2.5pt, scale=0.88] {$(\sigma_x - \sigma_y)$};
    \draw[<->, line width=0.58pt, black] (3.40, 3.30) -- (5.775, 3.30)
        node[midway, fill=white, inner sep=2pt, scale=0.86] {$\displaystyle\frac{\sigma_x - \sigma_y}{2}$};

    % Cotas laterales de tau_xy
    \draw[<->, line width=0.58pt, black] (-0.42, 0) -- (-0.42, 1.484)
        node[midway, fill=white, inner sep=1.5pt, scale=0.88] {$\tau_{xy}$};
    \draw[<->, line width=0.58pt, black] (8.18, 0) -- (8.18, -1.484)
        node[midway, fill=white, inner sep=1.5pt, scale=0.88] {$\tau_{xy}$};

    % Cota inferior del centro (sigma_x + sigma_y)/2
    \draw[<->, line width=0.58pt, black] (0, -3.32) -- (3.40, -3.32)
        node[midway, fill=white, inner sep=2.5pt, scale=0.88] {$\displaystyle\frac{\sigma_x + \sigma_y}{2}$};

    % Cota del radio R paralela a CA, completamente dentro del circulo (radical y parentesis vectoriales)
    \draw[line width=0.55pt, black] (3.40, 0) -- (3.00, -0.64);
    \draw[line width=0.55pt, black] (5.775, -1.484) -- (5.375, -2.124);
    \draw[<->, line width=0.55pt, black] (3.07, -0.53) -- (5.445, -2.014);
    \begin{scope}[shift={(4.04, -1.63)}, rotate=-32, scale=0.62, line cap=round, line join=round]
        \draw[line width=0.75pt, black] (-1.68, -0.08) -- (-1.56, 0.00);
        \draw[line width=1.10pt, black] (-1.56, 0.00) -- (-1.38, -0.54);
        \draw[line width=0.75pt, black] (-1.38, -0.54) -- (-1.10, 0.74) -- (2.32, 0.74);
        \draw[line width=0.80pt, black]
            (-0.88, 0.48) .. controls (-1.06, 0.25) and (-1.06, -0.25) .. (-0.88, -0.48);
        \node[rotate=-32, scale=0.62] at (-0.06, 0.00) {$\displaystyle\frac{\sigma_x - \sigma_y}{2}$};
        \draw[line width=0.80pt, black]
            (0.76, 0.48) .. controls (0.94, 0.25) and (0.94, -0.25) .. (0.76, -0.48);
        \node[rotate=-32, scale=0.50] at (0.99, 0.42) {$2$};
        \node[anchor=west, rotate=-32, scale=0.62] at (1.06, 0.00) {$+\; \tau_{xy}^{2}$};
    \end{scope}

    % Angulos 2phi y 2phi_p (arco 2phi_p bien separado a la derecha de la etiqueta de A)
    \draw[<->, line width=0.60pt, black] (4.28, 0) arc (0:32:0.88);
    \node[scale=0.88] at (4.60, 0.28) {$2\phi$};
    \draw[line width=0.60pt, black] (4.28, 0) arc (0:-32:0.88);
    \draw[<->, line width=0.60pt, black] (7.80, 0) arc (0:-32:4.40);
    \node[fill=white, inner sep=1.5pt, scale=0.88] at (7.58, -1.10) {$2\phi_p$};
\end{tikzpicture}
</script>

Figura 13: Representación geométrica de la circunferencia de Mohr para estado plano de esfuerzos.

---

### 6.1. Ejemplo de uso de la circunferencia de Mohr

En un punto de un cuerpo, en estado plano de esfuerzos y/o en estado plano de deformación, está sometido como se muestra en la figura a esfuerzos. Determinar analíticamente la dirección de los planos principales y la magnitud de los esfuerzos principales (hacer un croquis), así como:

- **a)** Dirección de los planos de máximo y mínimo esfuerzo cortante y magnitud de $\tau_{\max}$ y $\tau_{\min}$ (hacer un croquis).
- **b)** El esfuerzo normal y el esfuerzo cortante para un plano cuya normal hace un ángulo de $35^\circ$ con el eje $x$ medido en sentido horario (hacer un croquis).
- **c)** El esfuerzo normal ligado a los planos de $\tau_{\max}$ y $\tau_{\min}$ (hacer un croquis).
- **d)** El esfuerzo cortante para el cual el esfuerzo normal es nulo y la dirección del plano en que se encuentra.

Datos: $\sigma_y = 1000\text{ kg/cm}^2$, $\sigma_x = -400\text{ kg/cm}^2$, $\tau_{xy} = 600\text{ kg/cm}^2$.

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=1.0, line cap=round, line join=round]
    \definecolor{elemBlue}{RGB}{216,226,243}
    \definecolor{arrRed}{RGB}{235,16,16}
    \definecolor{arrGreen}{RGB}{0,152,68}

    % Elemento diferencial cuadrado
    \fill[elemBlue] (-0.90, -0.90) rectangle (0.90, 0.90);
    \draw[line width=1.0pt, black] (-0.90, -0.90) rectangle (0.90, 0.90);

    % Esfuerzos normales sigma_x y sigma_y (flechas rojas)
    \draw[->, line width=2.2pt, arrRed] (0.90, 0) -- (2.30, 0) node[right, black, font=\large] {$\sigma_x$};
    \draw[->, line width=2.2pt, arrRed] (-0.90, 0) -- (-2.30, 0) node[left, black, font=\large] {$\sigma_x$};
    \draw[->, line width=2.2pt, arrRed] (0, 0.90) -- (0, 2.30) node[above, black, font=\large] {$\sigma_y$};
    \draw[->, line width=2.2pt, arrRed] (0, -0.90) -- (0, -2.30) node[below, black, font=\large] {$\sigma_y$};

    % Esfuerzos cortantes tau_xy (flechas verdes)
    \draw[->, line width=2.2pt, arrGreen] (-0.65, 1.32) -- (0.78, 1.32) node[right, black, font=\large] {$\tau_{xy}$};
    \draw[->, line width=2.2pt, arrGreen] (1.32, -0.65) -- (1.32, 0.78);
\end{tikzpicture}
</script>

Figura 14: Elemento en estado plano de esfuerzos para el ejemplo de aplicación de la circunferencia de Mohr.

---

#### Circunferencia de Mohr — Convención N° 1

$$ \tan 2\theta = \frac{600}{700} \;\rightarrow\; \theta = 20.301^\circ $$

$$ R = \sqrt{\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)^2 + \sigma_{12}^2} = 921.954 $$

$$ \begin{aligned}
\sigma_{\max} &= 300 + 921.954 = 1221.954 \\[4pt]
\sigma_{\min} &= 300 - 921.954 = -621.954
\end{aligned} $$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=0.92, line cap=round, line join=round]
    \definecolor{mohrGreen}{RGB}{0,162,72}
    \definecolor{axisBlue}{RGB}{52,112,188}
    \definecolor{elemBlue}{RGB}{216,226,243}
    \definecolor{arrRed}{RGB}{230,18,18}

    % =========================================================
    % IZQUIERDA: CROQUIS DEL ELEMENTO PRINCIPAL ROTADO
    % =========================================================
    \begin{scope}[shift={(-3.9, -0.1)}]
        % Ejes de referencia horizontal y vertical
        \draw[line width=0.65pt, black!75] (-2.15, 0) -- (2.15, 0);
        \draw[line width=0.65pt, black!75] (0, -2.15) -- (0, 2.15);

        % Elemento rotado con linea azul exactamente colineal al eje de compresion
        \begin{scope}[rotate=38]
            \fill[elemBlue] (-0.72, -0.72) rectangle (0.72, 0.72);
            \draw[line width=0.95pt, black] (-0.72, -0.72) rectangle (0.72, 0.72);
            % Linea azul de eje principal menor pasando exactamente por (0,0)
            \draw[line width=0.65pt, axisBlue] (0, -2.35) -- (0, 2.35);
            % sigma_max (traccion = 1221.954)
            \draw[->, line width=2.3pt, arrRed] (0.76, 0) -- (1.82, 0);
            \draw[->, line width=2.3pt, arrRed] (-0.76, 0) -- (-1.82, 0);
            % sigma_min (compresion = -621.954)
            \draw[->, line width=2.3pt, arrRed] (0, 1.82) -- (0, 0.76);
            \draw[->, line width=2.3pt, arrRed] (0, -1.82) -- (0, -0.76);
        \end{scope}

        \node[anchor=west, scale=0.92] at (1.42, 1.25) {$1221.954$};
        \node[anchor=east, scale=0.92] at (-1.05, 1.25) {$621.954$};
    \end{scope}

    % =========================================================
    % DERECHA: CIRCUNFERENCIA DE MOHR (CONVENCION N 1)
    % Escala: 1 unidad = 400 kg/cm2 -> C = (0.75, 0), R = 2.305
    % X = (-1.00, -1.50), Y = (2.50, 1.50)
    % =========================================================
    \begin{scope}[shift={(2.1, 0)}]
        \draw[->, line width=0.85pt, axisBlue] (-2.10, 0) -- (3.85, 0) node[below, black, font=\large] {$\sigma$};
        \draw[->, line width=0.85pt, axisBlue] (0, -3.15) -- (0, 3.30) node[left, black, font=\large] {$\tau$};

        % Circulo verde
        \draw[line width=2.0pt, mohrGreen] (0.75, 0) circle (2.305);

        % Diametro XY y lineas discontinuas
        \draw[line width=0.75pt, axisBlue] (-1.00, -1.50) -- (2.50, 1.50);
        \draw[line width=0.80pt, black!45, dashed] (-1.00, 0) -- (-1.00, -1.50) -- (0, -1.50);
        \draw[line width=0.80pt, black!45, dashed] (2.50, 0) -- (2.50, 1.50) -- (0, 1.50);
        \draw[line width=0.80pt, black!45, dashed] (0.75, -2.305) -- (0.75, 2.305);

        % Arcos rojos de convencion de giro centrados exactamente sobre el eje tau
        \draw[->, line width=1.15pt, arrRed] (-0.30, 2.72) arc (180:0:0.30);
        \draw[->, line width=1.15pt, arrRed] (-0.30, -2.72) arc (180:360:0.30);

        % Puntos notables
        \foreach \px/\py in {0.75/0, -1.555/0, 3.055/0, 0.75/2.305, 0.75/-2.305, -1.00/-1.50, 2.50/1.50} {
            \fill[white] (\px, \py) circle (0.105);
            \draw[line width=1.15pt, black] (\px, \py) circle (0.105);
        }

        % Etiquetas numericas y puntos X, Y
        \node[anchor=north west, scale=0.88] at (-0.96, -0.06) {$-400$};
        \node[anchor=north west, scale=0.88] at (0.86, -0.08) {$300$};
        \node[anchor=north, scale=0.88] at (2.50, -0.10) {$1000$};
        \node[anchor=east, scale=0.88] at (-0.08, 1.50) {$600$};
        \node[anchor=west, scale=0.88] at (0.06, -1.50) {$-600$};
        \node[anchor=north east, font=\large] at (-1.12, -1.52) {$X$};
        \node[anchor=south west, font=\large] at (2.56, 1.56) {$Y$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 15: Circunferencia de Mohr según la Convención N° 1 y orientación de los esfuerzos principales.

---

#### Circunferencia de Mohr — Convención N° 2

$$ \tan 2\theta = \frac{600}{700} \;\rightarrow\; \theta = 20.301^\circ $$

$$ R = \sqrt{\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)^2 + \sigma_{12}^2} = 921.954 $$

$$ \begin{aligned}
\sigma_{\max} &= 300 + 921.954 = 1221.954 \\[4pt]
\sigma_{\min} &= 300 - 921.954 = -621.954
\end{aligned} $$

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=0.92, line cap=round, line join=round]
    \definecolor{mohrGreen}{RGB}{0,162,72}
    \definecolor{axisBlue}{RGB}{52,112,188}
    \definecolor{elemBlue}{RGB}{216,226,243}
    \definecolor{arrRed}{RGB}{230,18,18}

    % =========================================================
    % IZQUIERDA: CROQUIS DEL ELEMENTO CON EJES x, y, n Y 20.301 deg
    % =========================================================
    \begin{scope}[shift={(-3.9, -0.1)}]
        \draw[line width=0.95pt, black] (-2.15, 0) -- (2.15, 0) node[right, font=\large] {$x$};
        \draw[line width=0.95pt, black] (0, -2.15) -- (0, 2.15) node[right, font=\large] {$y$};

        % Elemento rotado con eje n discontinuo exactamente colineal a la compresion
        \begin{scope}[rotate=38]
            \fill[elemBlue] (-0.72, -0.72) rectangle (0.72, 0.72);
            \draw[line width=0.95pt, black] (-0.72, -0.72) rectangle (0.72, 0.72);
            \draw[line width=0.85pt, axisBlue, dashed] (0, -2.42) -- (0, 2.32);
            \draw[->, line width=2.3pt, arrRed] (0.76, 0) -- (1.82, 0);
            \draw[->, line width=2.3pt, arrRed] (-0.76, 0) -- (-1.82, 0);
            \draw[->, line width=2.3pt, arrRed] (0, 1.82) -- (0, 0.76);
            \draw[->, line width=2.3pt, arrRed] (0, -1.82) -- (0, -0.76);
        \end{scope}

        % Etiqueta del eje n en el extremo inferior de la linea punteada (-52 deg)
        \node[anchor=west, font=\large] at (1.54, -1.92) {$n$};

        % Arco exacto entre el eje +x (0 deg) y el eje n (-52 deg)
        \draw[->, line width=0.72pt, black] (1.36, 0) arc (0:-52:1.36);
        \node[anchor=west, scale=0.88] at (1.30, -0.74) {$20.301^\circ$};

        \node[anchor=west, scale=0.92] at (1.42, 1.25) {$1221.954$};
        \node[anchor=east, scale=0.92] at (-1.05, 1.25) {$621.954$};
    \end{scope}

    % =========================================================
    % DERECHA: CIRCUNFERENCIA DE MOHR (CONVENCION N 2)
    % X = (-1.00, 1.50), Y = (2.50, -1.50), C = (0.75, 0)
    % =========================================================
    \begin{scope}[shift={(2.1, 0)}]
        \draw[->, line width=0.85pt, axisBlue] (-2.10, 0) -- (3.85, 0) node[below, black, font=\large] {$\sigma$};
        \draw[->, line width=0.85pt, axisBlue] (0, -3.15) -- (0, 3.30) node[left, black, font=\large] {$\tau$};

        % Circulo verde
        \draw[line width=2.0pt, mohrGreen] (0.75, 0) circle (2.305);

        % Diametro XY y lineas discontinuas
        \draw[line width=0.75pt, axisBlue] (-1.00, 1.50) -- (2.50, -1.50);
        \draw[line width=0.80pt, black!45, dashed] (-1.00, 0) -- (-1.00, 1.50) -- (0, 1.50);
        \draw[line width=0.80pt, black!45, dashed] (2.50, 0) -- (2.50, -1.50) -- (0, -1.50);
        \draw[line width=0.80pt, black!45, dashed] (0.75, -2.305) -- (0.75, 2.305);

        % Arcos rojos de convencion de giro centrados exactamente sobre el eje tau
        \draw[->, line width=1.15pt, arrRed] (0.30, 2.72) arc (0:180:0.30);
        \draw[->, line width=1.15pt, arrRed] (0.30, -2.72) arc (0:-180:0.30);
        % Arco rojo interno antihorario desde radio CX hacia el eje sigma
        \draw[->, line width=1.20pt, arrRed] (-0.12, 0.78) arc (70:230:0.42);

        % Puntos notables
        \foreach \px/\py in {0.75/0, -1.555/0, 3.055/0, 0.75/2.305, 0.75/-2.305, -1.00/1.50, 2.50/-1.50} {
            \fill[white] (\px, \py) circle (0.105);
            \draw[line width=1.15pt, black] (\px, \py) circle (0.105);
        }

        % Etiquetas numericas y puntos X, Y, N
        \node[anchor=north, scale=0.88] at (-1.00, -0.10) {$-400$};
        \node[anchor=north east, font=\large] at (-1.62, -0.12) {$N$};
        \node[anchor=south west, scale=0.88] at (0.85, 0.08) {$300$};
        \node[anchor=south, scale=0.88] at (2.50, 0.10) {$1000$};
        \node[anchor=south, scale=0.88] at (-0.48, 1.54) {$600$};
        \node[anchor=east, scale=0.88] at (-0.08, -1.50) {$-600$};
        \node[anchor=south east, font=\large] at (-1.12, 1.52) {$X$};
        \node[anchor=north west, font=\large] at (2.56, -1.56) {$Y$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 16: Circunferencia de Mohr según la Convención N° 2 y orientación del eje normal $n$.

---

## 7. Esfuerzo Cortante Máximo

Para un estado triaxial de esfuerzos caracterizado por los esfuerzos principales $\sigma_1 \ge \sigma_2 \ge \sigma_3$, los tres círculos de Mohr definen los esfuerzos cortantes máximos en cada uno de los tres planos principales:

<script type="text/tikz">
\begin{tikzpicture}[>=latex, scale=0.84, line cap=round, line join=round]
    \definecolor{mohrShade}{RGB}{222,224,228}
    \definecolor{arrRed}{RGB}{230,18,18}

    % =========================================================
    % 1. IZQUIERDA: CUBO AXONOMETRICO EN DIRECCIONES PRINCIPALES
    % Vertice frontal interior Vc = (0.45, 0.25)
    % Vectores de ejes principales:
    % a1 = (1.25, -0.68), a2 = (0.62, 1.28), a3 = (-0.96, -0.34)
    % =========================================================
    \begin{scope}[shift={(-5.4, 0.0)}]
        % Contorno exterior del cubo
        \draw[line width=0.72pt, black!75]
            (-1.42, -0.35) -- (-0.17, -1.03) -- (0.79, -0.69) -- (1.41, 0.59)
            -- (0.16, 1.27) -- (-0.80, 0.93) -- cycle;
        % Tres aristas interiores concurrentes en Vc = (0.45, 0.25)
        \draw[line width=0.72pt, black!75] (-0.80, 0.93) -- (0.45, 0.25) -- (1.41, 0.59);
        \draw[line width=0.72pt, black!75] (0.45, 0.25) -- (-0.17, -1.03);

        % Eje y flecha sigma_1 desde centro de cara derecha C1 = (0.62, -0.22)
        \draw[line width=0.55pt, black!65] (0.62, -0.22) -- (2.38, -1.18);
        \draw[->, line width=2.2pt, arrRed] (0.62, -0.22) -- (1.92, -0.93);
        \node[anchor=north, color=arrRed, font=\large] at (1.72, -0.96) {$\sigma_1$};

        % Eje y flecha sigma_2 desde centro de cara superior C2 = (0.305, 0.76)
        \draw[line width=0.55pt, black!65] (0.305, 0.76) -- (1.20, 2.61);
        \draw[->, line width=2.2pt, arrRed] (0.305, 0.76) -- (0.98, 2.15);
        \node[anchor=west, color=arrRed, font=\large] at (0.96, 1.98) {$\sigma_2$};

        % Eje y flecha sigma_3 desde centro de cara frontal C3 = (-0.485, -0.05)
        \draw[line width=0.55pt, black!65] (-0.485, -0.05) -- (-2.30, -0.69);
        \draw[->, line width=2.2pt, arrRed] (-0.485, -0.05) -- (-1.78, -0.51);
        \node[anchor=north, color=arrRed, font=\large] at (-1.52, -0.52) {$\sigma_3$};
    \end{scope}

    % =========================================================
    % 2. CENTRO: TRES CIRCULOS DE MOHR 3D (SIN CLIP)
    % sigma_3 = -1.20, sigma_2 = 0.40, sigma_1 = 3.20
    % C13 = 1.00, R13 = 2.20 | C23 = -0.40, R23 = 0.80 | C12 = 1.80, R12 = 1.40
    % =========================================================
    \begin{scope}[shift={(-0.2, 0.0)}]
        % Region sombreada entre circulo exterior y dos interiores
        \fill[mohrShade] (1.00, 0) circle (2.20);
        \fill[white] (-0.40, 0) circle (0.80);
        \fill[white] (1.80, 0) circle (1.40);

        % Contornos de los tres circulos
        \draw[line width=1.20pt, black] (1.00, 0) circle (2.20);
        \draw[line width=1.20pt, black] (-0.40, 0) circle (0.80);
        \draw[line width=1.20pt, black] (1.80, 0) circle (1.40);

        % Ejes sigma y tau
        \draw[line width=0.80pt, black] (-1.65, 0) -- (3.85, 0) node[right] {$\sigma$};
        \draw[line width=0.80pt, black] (0, -2.55) -- (0, 2.95) node[above] {$\tau$};

        % Lineas verticales discontinuas de tau_1/3, tau_1/2, tau_2/3
        \draw[line width=0.68pt, black, dashed] (1.00, 0) -- (1.00, 2.20);
        \draw[line width=0.68pt, black, dashed] (1.80, 0) -- (1.80, 1.40);
        \draw[line width=0.68pt, black, dashed] (-0.40, 0) -- (-0.40, 0.80);

        % Etiquetas de esfuerzos principales y cortantes maximos
        \node[anchor=north west, scale=0.90] at (-1.18, -0.04) {$\sigma_3$};
        \node[anchor=north west, scale=0.90] at (0.42, -0.04) {$\sigma_2$};
        \node[anchor=north west, scale=0.90] at (3.22, -0.04) {$\sigma_1$};
        \node[anchor=south, scale=0.90] at (1.00, 2.24) {$\tau_{1/3}$};
        \node[anchor=south, scale=0.90] at (1.80, 1.44) {$\tau_{1/2}$};
        \node[anchor=south, scale=0.90] at (-0.40, 0.84) {$\tau_{2/3}$};
    \end{scope}

    % =========================================================
    % 3. DERECHA: PLANO DE CORTANTE MAXIMO A 45 GRADOS
    % =========================================================
    \begin{scope}[shift={(4.9, -0.95)}]
        \draw[line width=0.68pt, black, dashed] (0, 0) -- (0, 2.25) -- (2.25, 2.25);
        \fill[mohrShade] (0, 0) -- (2.25, 0) -- (2.25, 2.25) -- cycle;
        \draw[line width=1.10pt, black] (0, 0) -- (2.25, 0) -- (2.25, 2.25) -- cycle;

        % Esfuerzos sigma_1 y sigma_2 en las caras ortogonales
        \draw[->, line width=1.70pt, black] (2.25, 1.125) -- (3.08, 1.125);
        \node[anchor=north, scale=0.92] at (2.82, 1.05) {$\sigma_1$};
        \draw[->, line width=1.70pt, black] (1.125, 0) -- (1.125, -0.82);
        \node[anchor=west, scale=0.92] at (1.20, -0.64) {$\sigma_2$};

        % Esfuerzo normal sigma y cortante tau_1/2 cruzados ortogonalmente sobre la cara inclinada
        \draw[->, line width=1.70pt, black] (1.125, 1.125) -- (0.64, 1.61);
        \node[anchor=east, scale=0.92] at (0.60, 1.44) {$\sigma$};
        \draw[->, line width=1.70pt, black] (0.52, 1.01) -- (1.24, 1.73);
        \node[anchor=south, scale=0.92] at (1.02, 1.72) {$\tau_{1/2}$};
    \end{scope}
\end{tikzpicture}
</script>

Figura 17: Representación tridimensional de los círculos de Mohr y esfuerzos cortantes máximos.

$$ \tau_{1/2} = \frac{\sigma_1 - \sigma_2}{2}, \qquad \tau_{2/3} = \frac{\sigma_2 - \sigma_3}{2}, \qquad \tau_{1/3} = \frac{\sigma_1 - \sigma_3}{2} $$

---

## 8. Formulario Resumen

| Concepto / Magnitud | Expresión |
| :--- | :--- |
| Tensor de esfuerzos simétrico | $\sigma_{21} = \sigma_{12}, \quad \sigma_{31} = \sigma_{13}, \quad \sigma_{32} = \sigma_{23}$ |
| Ecuación de direcciones principales | $(\sigma - \lambda I)\cdot n = 0, \qquad |\sigma - \lambda I| = 0$ |
| Esfuerzo normal en dirección arbitraria (ejes principales) | $|\sigma_n| = \sigma_1 l^2 + \sigma_2 m^2 + \sigma_3 n^2$ |
| Esfuerzo cortante en dirección arbitraria | $|\tau_n| = \left[(\sigma_1 - \sigma_n)^2 l^2 + (\sigma_2 - \sigma_n)^2 m^2 + (\sigma_3 - \sigma_n)^2 n^2\right]^{1/2}$ |
| Esfuerzos octaédricos ($l = m = n = 1/\sqrt{3}$) | $\displaystyle |\sigma_n| = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$<br><br>$\displaystyle |\tau_n| = \sqrt{\frac{(\sigma_1 - \sigma_n)^2 + (\sigma_2 - \sigma_n)^2 + (\sigma_3 - \sigma_n)^2}{3}}$ |
| Transformación plana de esfuerzos | $\sigma' = R\sigma R^T$<br><br>$\displaystyle \sigma_{nn} = \frac{\sigma_{11} + \sigma_{22}}{2} + \frac{\sigma_{11} - \sigma_{22}}{2}\cos 2\theta + \sigma_{12}\sin 2\theta$ |
| Esfuerzo cortante en el plano | $\displaystyle \sigma_{nt} = -\frac{\sigma_{11} - \sigma_{22}}{2}\sin 2\theta + \sigma_{12}\cos 2\theta$ |
| Ángulo principal y esfuerzos extremos | $\displaystyle \tan 2\theta = \frac{2\sigma_{12}}{\sigma_{11} - \sigma_{22}}$<br><br>$\displaystyle \sigma_{\max,\min} = \frac{\sigma_{11} + \sigma_{22}}{2} \pm \sqrt{\left(\frac{\sigma_{11} - \sigma_{22}}{2}\right)^2 + \sigma_{12}^2}$ |
| Circunferencia de Mohr | $\displaystyle \left[\sigma_{nn} - \left(\frac{\sigma_{11} + \sigma_{22}}{2}\right)\right]^2 + \sigma_{nt}^2 = R^2$ |
| Esfuerzos cortantes máximos (3D) | $\displaystyle \tau_{1/2} = \frac{\sigma_1 - \sigma_2}{2}, \quad \tau_{2/3} = \frac{\sigma_2 - \sigma_3}{2}, \quad \tau_{1/3} = \frac{\sigma_1 - \sigma_3}{2}$ |
