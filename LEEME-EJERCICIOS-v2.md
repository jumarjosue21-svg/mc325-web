# Ejercicios Resueltos · Correcciones v2 (MC325)

Se reemplazan **5 archivos**: `ejercicios.html`, `ejercicios.css`, `js/ejercicios-mc325.js`, `js/ejercicios-datos.js` y `publicar-ejercicios.html`. Se incluyen como actualización sobre la v1. No modifica `style.css`, `calendario.html`, `materiales.html`, `foro.html` ni las carpetas de datos existentes.

## Cambios

- Ejercicios WEB: el botón **Enunciado** muestra la imagen opcional (JPG, PNG o WebP hasta 8 MB) en una ventana emergente. Si no existe imagen, se muestra desactivado. Al editar se puede sustituir o quitar la imagen. La solución Markdown + LaTeX sigue en su lector.
- Ejercicios PDF: **Ver PDF** abre un modal grande con barra superior, botón Descargar y botón Cerrar; se cierra con Escape o haciendo clic fuera. Ya no se incrusta en la página de lectura.
- El panel derecho muestra los iconos con ancho fijo y texto con separación adecuada.
- La búsqueda ya es insensible a mayúsculas y tildes, acepta varias palabras, muestra los resultados y ofrece un botón de limpieza. Busca en títulos, descripciones, nombres, unidades y niveles. No busca dentro del texto completo de los archivos PDF o Markdown publicados.

## Prueba antes de publicar

1. Haz una copia de seguridad del repositorio y realiza Fetch/Pull en GitHub Desktop.
2. Extrae el ZIP de actualización en la raíz del repositorio, reemplazando solamente los cinco archivos mencionados. **No reemplaces** `data/ejercicios.json`, `data/unidades.json` ni tus PDFs/Markdown existentes.
3. Abre `ejercicios.html` desde Live Server. Prueba un ejercicio WEB sin imagen (Enunciado deshabilitado) y otro WEB con imagen (Enunciado abre un modal).
4. Prueba un ejercicio PDF (Ver PDF abre ventana emergente, Descargar conserva el archivo), la búsqueda por palabras y los iconos del panel derecho.
5. Para publicar imágenes de enunciados, abre `publicar-ejercicios.html` en el mismo origen de Live Server y navegador; descarga el ZIP y extrae su contenido en el repositorio. Este exportador agrega `ejercicios/enunciados/…` y actualiza `data/ejercicios.json`.
6. Si el exportador incluye `ARCHIVOS-A-RETIRAR.txt`, revisa que las rutas ya no estén en `data/ejercicios.json` antes de borrar archivos. Verifica con Live Server en incógnito, luego Commit y Push.

**Persistencia:** los borradores e imágenes guardadas desde la página siguen siendo locales hasta exportarlos; alumnos en distintos navegadores no pueden compartir aportes sin la futura conexión a Firebase. El botón Modo Docente todavía no representa un sistema de permisos real.
