# MC325 — Migración de contenidos a GitHub (etapa estática)

## Qué incluye

- `index.html`, `calendario.html`, `materiales.html`, `style.css`: últimas versiones proporcionadas, adaptadas a los archivos del repositorio.
- `js/datos-mc325.js`: adaptador de datos compartido entre Inicio, Calendario y Materiales.
- `data/eventos.json`: **4 eventos** recuperados del respaldo del 11/11/2026.
- `data/articulos.json` + `articulos/unidad1/*.md`: **2 artículos** completos en Markdown y LaTeX.
- `data/documentos.json` + `pdfs/unidad1/*.pdf`: **1 PDF** recuperado (1.4 MB).
- `publicar-cambios.html` y `lib/jszip.min.js`: herramienta para generar el ZIP de cambios posteriores. Licencia de JSZip en `lib/LICENSE-JSZip.md`.

## Instalación sin perder el resto del repositorio

1. **Conserva el respaldo original** `respaldo-mc325-2026-11-11.zip` fuera del repositorio. No publiques el respaldo: contiene datos del navegador que no son necesarios en el sitio.
2. Abre GitHub Desktop, selecciona tu repositorio y usa **Fetch/Pull origin** antes de incorporar cambios. Si trabajan varios integrantes, usa una rama de trabajo para revisarlos.
3. Descomprime el paquete **dentro de la raíz del repositorio local** (donde ya están los HTML). **Combina las carpetas** existentes; NO reemplaces ni borres todo el repositorio. Reemplaza los cuatro archivos principales solo tras revisar si tus compañeros los han modificado entretanto.
4. Mantén el resto de las páginas existentes, como `apuntes.html`, `examenes.html`, `ejercicios.html`, etc. Este paquete no las incluye ni las modifica.
5. Inicia el sitio con **Live Server** o cualquier servidor HTTP local y abre `index.html`, `calendario.html`, `materiales.html`. No uses `file://`: los lectores JSON/Markdown necesitan HTTP.
6. Verifica las 4 actividades, 2 artículos y el PDF. Revisa el estado de las imágenes (ver más abajo).
7. Haz **Commit** y **Push origin** en GitHub Desktop; si hay GitHub Pages, verifica que el sitio se despliegue correctamente.

## Cómo funciona ahora

Los archivos JSON y Markdown **son el contenido publicado**, compartido por el repositorio y el sitio. Los cambios hechos desde el botón provisional «Modo Docente» se guardan **solo como borradores en este navegador**, en nuevas claves de `localStorage`. Los PDFs nuevos se almacenan temporalmente en IndexedDB hasta su exportación. **No se publican solos.**

Cuando quieras publicar modificaciones:

1. Crea o modifica actividades, artículos y PDFs desde Modo Docente en el mismo origen HTTP.
2. Abre `publicar-cambios.html` desde ese origen (también hay enlace en Modo Docente).
3. Descarga su ZIP, extrae sus archivos en la raíz del repositorio **fusionando carpetas**, y reemplaza los JSON.
4. Si aparece `ARCHIVOS-A-RETIRAR.txt`, revisa y elimina manualmente los archivos físicos señalados; borrar del listado no los borra del repositorio.
5. Revisa los cambios, **Commit** y **Push** en GitHub Desktop. Los borradores no se eliminan al exportar; después de incorporar los cambios, la página puede reconocer el contenido ya publicado y dejar de utilizarlos.

**No extraigas el ZIP generado en otra carpeta distinta de la raíz del repositorio:** los JSON contienen rutas relativas a esta estructura.

## Figuras y sílabo: archivos faltantes

Los dos artículos recuperados contienen **37 referencias a imágenes** (`diapositiva_01.jpg` y otras; `resistencia_esfuerzos_figura_01.jpg`, etc.). **Los archivos JPG no estaban en el respaldo ni en las cinco entradas aportadas.** Este paquete NO inventa ni genera las imágenes; si ya las tienes, colócalas **junto al archivo `.md` del artículo correspondiente**, dentro de `articulos/unidad1/`. Las rutas de imágenes del lector se resuelven relativas al Markdown.

La tarjeta del sílabo conserva su referencia original a `SYLLABUS-MC325-RESISTENCIA DE MATERIALES II-20262-1793919728.pdf`. Este archivo **no estaba entre los archivos aportados**. Si ya existe en el repositorio original, déjalo en su lugar. De lo contrario, habrá que incorporarlo o actualizar el enlace más adelante.

## Alcance de seguridad

- El botón «Modo Docente» sigue siendo de **prueba** y no autentica al profesor.
- Los estudiantes pueden ver contenido publicado. Cualquier persona que tenga acceso a las páginas estáticas también puede acceder a sus archivos Markdown, JSON y PDF; esto **no es un sistema antipiratería**.
- Para publicación compartida inmediata y permisos reales se necesitarán después Firebase Authentication + Firestore y un almacenamiento de archivos con reglas apropiadas.
- No publiques documentos ajenos sin autorización del titular de los derechos.

## Archivos que no debes subir

No subas los ZIP de respaldo privado, exportaciones del almacenamiento del navegador, credenciales, ni información sensible. La versión entregada contiene únicamente los archivos que necesitan los visitantes y la herramienta provisional de publicación.
