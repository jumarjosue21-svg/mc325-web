# MC325 - Modo oscuro V4 integrado con el materiales.html actualizado

## Qué se ha hecho

Se tomó como BASE el archivo `materiales(20261116-015006).html` proporcionado por el usuario.
Se añadieron SOLAMENTE las dos referencias (CSS y JS) del tema oscuro V4 y el atributo `data-mc325-page="materiales"` a la etiqueta `body`.
No se eliminó ni modificó ninguna línea anterior del archivo de tu compañero.

En particular se preservan las modificaciones de MathJax: `tex-svg.js`, `displayAlign: center` y `displayIndent: 0`; asimismo se conserva el resto del código de materiales y su lógica de artículos, archivos y orden editorial.

## Cuál ZIP escoger

1. `MC325_V4_UNIFICADO_SOLO_CAMBIOS.zip`: si AÚN NO HAS integrado el modo oscuro V4 a tu repositorio. Incluye las 14 páginas HTML con tema V4, ahora con materiales.html actualizado; también incluye el CSS y el JS compartidos. OJO: antes de reemplazar otras páginas del repositorio, comprueba que tus compañeros no las hayan modificado entretanto.
2. `MC325_V4_SOLO_MATERIALES_Y_TEMA.zip`: si YA tienes las demás páginas con modo oscuro V4 y solo necesitas reemplazar el materiales.html de una versión anterior. Incluye materiales.html actualizado y los dos archivos de tema. No sobrescribe otras páginas.
3. `MC325_materiales_actualizado_con_modo_oscuro_V4.html`: una copia suelta del nuevo materiales.html; debes renombrarla a `materiales.html` al instalarla.

## Instrucciones recomendadas

1. En GitHub Desktop: primero Fetch/Pull para incorporar cambios del equipo.
2. Haz una copia de respaldo (o crea una rama de Git).
3. Elige el ZIP adecuado según el estado de tu repositorio, y extrae su carpeta `mc325-web/` sobre la raíz correspondiente.
4. Mantén los archivos originales `js/datos-mc325.js`, `data/*.json`, `articulos/` y demás contenidos que provengan del repositorio actualizado; estos ZIP no los reemplazan.
5. Abre con Live Server, revisa Material del Curso y la lectura LaTeX/MathJax, alterna el tema, y verifica otra página para comprobar que se conserve.
6. Antes de Commit/Push, revisa la pestaña Changes de GitHub Desktop; NO aceptes una sobreescritura inesperada de archivos editados por compañeros.

Nota: los ZIP se han construido a partir de V4 y del nuevo archivo de materiales que se adjuntó. Si un compañero vuelve a modificar cualquier página después de esa versión, vuelve a combinar los cambios antes de subirla.
