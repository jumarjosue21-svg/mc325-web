# MC325 — Foro sin botones duplicados

Se conserva el botón **+ Nueva consulta** en la cabecera como única acción para abrir el formulario.
Se elimina el bloque lateral **Participa en el foro**, que repetía la misma función.
Los paneles laterales **Antes de preguntar** y **Material relacionado** permanecen.

## Instalación

1. Haz una copia de respaldo del repositorio antes de cualquier cambio.
2. Extrae los archivos en la raíz de tu repositorio `mc325-web`, reemplazando **solo** `foro.html`, `foro.css` y `js/foro-mc325.js`.
3. Comprueba mediante Live Server que el botón **+ Nueva consulta** abre el formulario y que puedes publicar o cancelar una consulta.
4. Si todo funciona, realiza Commit y Push origin desde GitHub Desktop. Si el navegador conserva la versión anterior, usa Ctrl + Shift + R.

Este cambio no modifica `style.css`, los datos guardados ni ninguna otra página; el foro sigue siendo una prueba con `localStorage` hasta su integración con Firebase.
