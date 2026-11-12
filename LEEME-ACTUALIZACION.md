# MC325 — Paneles plegables y archivos PDF / Office

## Archivos que debes reemplazar

Esta actualización contiene **solo tres archivos del código**:

- `materiales.html`
- `publicar-cambios.html`
- `js/datos-mc325.js`

Los archivos `data/*.json`, los artículos `.md`, los PDF, `style.css`, `index.html` y `calendario.html` **no necesitan reemplazarse**. No borres contenidos ni carpetas del repositorio.

## Instalación

1. Conserva una copia de seguridad y usa **Fetch/Pull origin** en GitHub Desktop.
2. Extrae este ZIP sobre la raíz de tu repositorio local `mc325-web`, **combinando** las carpetas existentes. No dejes una carpeta extra alrededor de los archivos.
3. Reemplaza los tres archivos indicados, respetando `js/datos-mc325.js` dentro de la carpeta `js`.
4. Inicia **Live Server**. En `materiales.html`, activa Modo Docente y comprueba que los tres editores aparezcan **cerrados**: «Unidades y sílabo», «Artículos web» y «Archivos del curso». Al pulsar uno se abre; al abrir otro, el anterior se cierra.
5. Comprueba que los contenidos preexistentes, incluido el sílabo, continúen apareciendo. Las tarjetas WEB, PDF, DOCX, PPTX y XLSX presentan iconos de colores distintos.
6. Revisa la pestaña **Changes** de GitHub Desktop, realiza Commit y Push. Si GitHub Pages muestra la versión antigua, recarga con **Ctrl + Shift + R**.

## Nuevo flujo de archivos

- **PDF** (`.pdf`, rojo): el título abre el visor; el botón **Descargar** baja el documento.
- **Word** (`.docx`, azul): se descarga en su formato original.
- **PowerPoint** (`.pptx`, naranja): se descarga en su formato original.
- **Excel** (`.xlsx`, verde): se descarga en su formato original.
- **Artículo WEB** (rojo oscuro): conserva el lector Markdown + LaTeX y su índice.

Los formatos Office antiguos `.doc`, `.ppt` y `.xls` no están habilitados. El límite por archivo continúa siendo 25 MB.

### Para añadir un material

1. Inicia Live Server y entra a **Materiales → Modo Docente → Archivos del curso**.
2. Elige ubicación (sílabo o una unidad), título, descripción y archivo.
3. Guarda el borrador. Si deseas corregir un archivo existente, pulsa **Editar** en su tarjeta; puedes cambiar los datos o seleccionar un archivo nuevo, incluso de otro formato.
4. Abre **publicar-cambios.html** en el mismo origen de Live Server; descarga el paquete ZIP generado.
5. Extrae el ZIP **dentro de la raíz del repositorio**. El exportador genera `data/documentos.json` y los archivos en `pdfs/` o `documentos/` según el formato.
6. Si hay un `ARCHIVOS-A-RETIRAR.txt`, compara sus rutas con `data/documentos.json` y retira únicamente archivos viejos no referenciados (por ejemplo, al cambiar PDF por DOCX).
7. Verifica el sitio en incógnito con Live Server, realiza Commit y Push y comprueba GitHub Pages.

**Precaución:** los cambios realizados en Modo Docente se guardan inicialmente como borradores en el navegador. La web pública no cambia hasta publicar el ZIP en GitHub. Este sistema sigue siendo de prueba y **no implementa autenticación**. No publiques documentos sin permiso de difusión.

## Compatibilidad

- Se mantiene la base IndexedDB existente `mc325_documentos_pdf_v1` y su almacén `documentos`; esto permite recuperar los borradores antiguos.
- Los PDF ya publicados en `data/documentos.json` no requieren que se añada un campo `tipo`: la interfaz detecta el formato a partir del nombre o la ruta.
- No se modifican el calendario, Inicio, el CSS general ni los artículos guardados.
- Si se reemplaza un PDF por DOCX/PPTX/XLSX, el paquete incluye la nueva ruta y marca la antigua en `ARCHIVOS-A-RETIRAR.txt`.
