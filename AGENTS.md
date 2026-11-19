# Reglas del proyecto `mc325-web`

## Idioma y flujo de trabajo

- Responde, planifica y comenta el código siempre en español.
- Antes de modificar archivos estructurales (HTML, CSS o JS), indica qué archivos cambiarás y por qué.

## Contexto y arquitectura del proyecto

- Este proyecto es el sitio estático `mc325-web` para Resistencia de Materiales II (MC325 - FIM UNI).
- **Catálogos JSON en `data/`**: `unidades.json`, `articulos.json`, `documentos.json`, `ejercicios.json` y `examenes.json`. Nunca modifiques ni elimines los IDs de unidades existentes.
- **Contenidos Markdown**: se ubican en `articulos/`, `ejercicios/articulos/` y `examenes/articulos/`.
- **Acceso docente**: utiliza perfiles de prueba definidos en `js/acceso-mc325.js` (rol `admin`).

## Estilos y accesibilidad visual

- Verifica siempre la legibilidad tanto en modo claro (`style.css`) como en modo oscuro (`modo-oscuro.css`).

## Markdown, MathJax SVG y TikZ

- En Markdown y MathJax SVG: usa `$...$` para fórmulas en línea y `$$...$$` para fórmulas en bloque; divide ecuaciones largas para evitar scroll horizontal.
- Dentro de bloques `<script type="text/tikz">`:
  1. NO uses `\usetikzlibrary{calc}` ni coordenadas `$(...)+(...)$`; usa `\begin{scope}[shift={(x,y)}]`.
  2. NO incluyas tildes, eñes, espacios invisibles (`U+00A0`) ni comentarios `%` con caracteres especiales.
  3. En cuerpos curvos o mixtos, usa trazos gruesos (`line width=...`) en lugar de `\fill` cerrados para evitar líneas diagonales parásitas.
- Escribe siempre el pie de figura (`Figura X: ...`) como un párrafo independiente justo debajo de `</script>` para que se aplique correctamente la clase `.article-caption`.
