# MC325 — Visor de Ejercicios uniforme con Materiales

## Archivos que debes reemplazar

- `ejercicios.html`
- `ejercicios.css`
- `js/ejercicios-mc325.js`

No debes modificar `style.css`, `materiales.html`, `js/ejercicios-datos.js`, `publicar-ejercicios.html` ni las carpetas `data` o `ejercicios`.

## Cambios

- El PDF se abre con las mismas clases CSS que el visor de **Material del Curso**: fondo oscurecido y desenfocado, cuadro blanco de 80% de ancho hasta 1000 px y 85% de alto, encabezado gris claro, título oscuro y X gris.
- El visor de la imagen opcional del enunciado utiliza el mismo diseño.
- **Solo la X** cierra cualquiera de estos visores. Ni clic sobre el exterior ni tecla `Esc` lo cierran.
- El PDF mantiene la opción de **descargar mediante el botón nativo del visor PDF del navegador**; se retira el segundo botón de descarga de la cabecera para igualar Materiales.

## Instalación y verificación

1. Crea un respaldo de tu repositorio y haz Fetch/Pull en GitHub Desktop.
2. Extrae los archivos en la carpeta raíz de `mc325-web`, respetando `js/`.
3. Con Live Server abre un ejercicio PDF y revisa el estilo de la cabecera.
4. Haz clic fuera del cuadro y presiona Esc: **el visor debe permanecer abierto**.
5. Pulsa **X**: el visor debe cerrarse. Haz la misma prueba con un enunciado de imagen.
6. Si todo funciona, realiza Commit y Push origin. Si GitHub Pages muestra la versión anterior, actualiza con Ctrl+Shift+R o usa una ventana privada.

Los ejercicios, PDFs, imágenes y borradores anteriores se conservan; no cambia la estructura de publicación ni los datos.
