# MC325 — Actualización de Materiales: unidades y edición

## Qué cambia

- Los documentos PDF tienen **un solo botón público: Descargar**. Hacer clic en el **título del PDF** abre el visor.
- En **Modo Docente** se pueden añadir, renombrar, reordenar y eliminar **unidades vacías**. Para eliminar una unidad que contenga materiales, primero hay que trasladar sus artículos y PDFs.
- El nombre de **Sílabo y presentación del curso** se puede editar desde el mismo panel de secciones. La sección sigue siendo fija, pero sus documentos se pueden subir, editar, sustituir y eliminar.
- Los **artículos Markdown/LaTeX** publicados se pueden editar completos (título, unidad y contenido).
- Los **PDF** publicados se pueden editar (título, descripción, ubicación) o **reemplazar** por otro archivo, sin duplicar la tarjeta.
- `publicar-cambios.html` ahora incluye unidades, artículos existentes modificados y archivos PDF reemplazados.
- `index.html`, `calendario.html` y `style.css` **no han sido modificados**.

## Instalación en el repositorio

1. **Haz copia de seguridad** de la carpeta del repositorio y de los borradores locales. Si ya tienes cambios pendientes en Modo Docente, **publícalos o expórtalos antes de instalar esta actualización**.
2. Desde GitHub Desktop, haz `Fetch/Pull origin` para recibir los cambios recientes y, si puedes, crea una rama para esta actualización.
3. Copia los archivos del ZIP en la **raíz del repositorio**, conservando las carpetas `js` y `data`:
   - `materiales.html` (reemplazar)
   - `publicar-cambios.html` (reemplazar)
   - `js/datos-mc325.js` (reemplazar)
   - `data/unidades.json` (**nuevo**)
   - `data/documentos.json` (actualizado para incorporar el sílabo al índice)
4. **No borres ni cambies** `data/articulos.json`, `data/eventos.json`, los `.md` actuales, ni la carpeta `pdfs`.
5. **Conserva** en la raíz el PDF original del sílabo, cuyo nombre es:
   `SYLLABUS-MC325-RESISTENCIA DE MATERIALES II-20262-1793919728.pdf`.
   No lo hemos incluido porque ya estaba en tu repositorio. La tarjeta ahora se carga desde `data/documentos.json`.
6. **Antes de reemplazar `data/documentos.json`, comprueba si tus compañeros añadieron otros PDFs**. Este paquete parte de la lista que teníamos: un PDF de Criterios de Fallas. Si ya hay más registros, no sobrescribas el JSON completo: añade solamente la nueva entrada `silabo-2026-2` de este paquete al archivo actual. Así no perderás entradas nuevas.
7. Abre `materiales.html` mediante **Live Server**. Comprueba la visualización de tus 2 artículos, el PDF de Criterios de Fallas y el sílabo; comprueba que el índice tenga 4 unidades.
8. En Modo Docente, prueba renombrar una unidad o editar un título y luego abre `publicar-cambios.html`. El ZIP generado debe incluir los índices actualizados. Después de extraerlo, revisa cambios y realiza Commit + Push en GitHub Desktop.

## Cómo editar contenido

### Artículos LaTeX

Modo Docente → Tarjeta del artículo → **Editar** → cambia título, unidad o Markdown/LaTeX → **Guardar cambios**.

### PDFs

Modo Docente → Tarjeta PDF → **Editar** → cambia los campos. Para sustituir el contenido físico, selecciona un **archivo PDF nuevo** en ese mismo formulario. Deja el campo de archivo vacío si solo cambias título o descripción.

### Sección del sílabo

Modo Docente → **Administrar unidades y sección del sílabo** → cambia su nombre. Para editar/reemplazar el sílabo, usa el botón **Editar** en su tarjeta PDF. También pueden subirse otros PDFs a esa sección.

### Unidades

Modo Docente → administrar unidades → **Agregar unidad**, **Guardar** nombre, **Subir/Bajar**, **Eliminar** (solo si la unidad está vacía).

## Publicar para todos

Los cambios siguen siendo **borradores locales** hasta que abras `publicar-cambios.html`, descargues el ZIP, extraigas el contenido en el repositorio y hagas Commit + Push. El exportador incluye los archivos `.md` editados y los PDF reemplazados, además de `data/unidades.json`.

**Importante:** Si el PDF del sílabo fue reemplazado, el ZIP incluirá el PDF con su **misma ruta publicada**, para reemplazarlo en GitHub. Tras subir los cambios, comprueba la web pública desde incógnito. Si ves una versión antigua del PDF, refresca la caché del navegador.

**Seguridad:** Modo Docente continúa siendo una interfaz de prueba y todavía no ofrece autenticación real. Para usuarios reales se necesitará el sistema de permisos que acordamos para la etapa Firebase.
