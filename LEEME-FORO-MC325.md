# Foro de Consultas MC325 — Prototipo local

## Qué incluye

- `foro.html`: reemplaza la maqueta actual del foro.
- `foro.css`: estilos **solo del foro**, no sobrescribe el `style.css` compartido.
- `js/foro-mc325.js`: interacciones y persistencia de prueba.

## Instalación

1. Haz una copia de seguridad de tu repositorio y, en GitHub Desktop, **Fetch / Pull origin** si otros colaboradores han subido cambios.
2. Copia `foro.html` y `foro.css` a la **raíz** de `mc325-web`. Copia `js/foro-mc325.js` dentro de la carpeta `js/` existente.
3. **No reemplaces** `style.css`, `index.html`, `calendario.html`, `materiales.html` ni las carpetas `data`, `articulos` o `pdfs`.
4. Abre el proyecto con **Live Server** y entra en `foro.html`. El foro usa `data/unidades.json` para obtener los nombres actuales de las unidades. Si no está disponible, muestra nombres genéricos por defecto.
5. Prueba: publica una consulta, respóndela, márcala como resuelta, usa los filtros, edita y elimina desde el mismo navegador.
6. Comprueba los cambios en GitHub Desktop, haz commit y push cuando apruebes la interfaz.

## Límites de esta fase

**Este foro NO es todavía un foro multiusuario online.** Las consultas y respuestas se almacenan en la clave `foro_mc325_v1` de `localStorage`, exclusivamente en el navegador y origen donde fueron creadas. Ni GitHub Desktop ni GitHub Pages trasladan esos mensajes a otros usuarios. El foro incluye un aviso visible para dejar esto claro.

El alias es libre y la propiedad de una consulta se identifica por un ID guardado en ese navegador. **No constituye identidad verificada ni permisos de seguridad**. Con Firebase se implementarán lectura y escritura compartidas, identidad/autoría, controles contra abuso y reglas de seguridad. Hasta entonces no es recomendable anunciar el foro como un espacio compartido operativo.

Las imágenes adjuntas se reducen a JPG de como máximo 1200 píxeles en su dimensión más larga; se permite un archivo de origen JPG/PNG/WEBP de hasta 4 MB. Debido al límite de espacio de `localStorage`, conviene utilizar imágenes pequeñas durante las pruebas. Las imágenes y preguntas de prueba pueden borrarse si se limpia el almacenamiento de ese origen.

El sistema de publicación de Materiales (`publicar-cambios.html`) **no publica** las preguntas y respuestas del foro. No lo utilices para este propósito.

## Diseño y funcionamiento

- Formulario corto: alias, unidad, título, explicación e imagen opcional. No hay cuestionario de calidad ni aprobación previa.
- Cada consulta tiene hilo propio con respuestas, estado pendiente/respondida/resuelta, búsqueda, filtros por unidad y por autor local.
- Autor de la consulta: editarla, eliminarla y marcarla como resuelta o reabrirla (solo en ese navegador de prueba).
- Autor de la respuesta: editarla o eliminarla (solo en ese navegador de prueba).
- Se admite notación matemática con MathJax (`$...$` y `$$...$$`) cuando se puede cargar la biblioteca.
- Las categorías se leen automáticamente de `data/unidades.json`.
- Las etiquetas «vistas» y «respuestas» son recuentos *locales* mientras se use el almacenamiento de prueba.

## Para pasar a producción

A diferencia del calendario, un foro de participación de alumnos no puede funcionar como servicio compartido solo con HTML y archivos JSON estáticos en GitHub Pages. Al conectar Firebase necesitaremos guardar cada consulta y respuesta en Firestore; para las fotografías, un almacenamiento de archivos compartido. Será necesario implementar autenticación o un sistema controlado de sesiones, reglas de seguridad, limitación de frecuencia, sistema de reportes y posibilidad de moderación. Esto es una siguiente etapa, no parte del presente ZIP.
