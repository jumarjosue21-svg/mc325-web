# MC325 — Ejercicios Resueltos (prototipo GitHub + futura migración a Firebase)

## Qué incluye

- `ejercicios.html`: nueva página basada en la maqueta original.
- `ejercicios.css`: estilos propios. **No reemplaza `style.css`**.
- `js/ejercicios-datos.js`: interfaz de datos separada de la presentación.
- `js/ejercicios-mc325.js`: filtros, formularios, lector, PDF y edición local.
- `data/ejercicios.json`: índice inicialmente vacío de ejercicios publicados.
- `publicar-ejercicios.html`: exporta un ZIP para GitHub Desktop.

**Dependencias existentes en el proyecto:** `style.css`, `data/unidades.json` (administrado desde Materiales) y `lib/jszip.min.js` (incluido en la migración previa).

## Instalación segura

1. Haz respaldo del repositorio y **Fetch/Pull origin** en GitHub Desktop.
2. Extrae este ZIP en la raíz de `mc325-web` (junto a `index.html`).
3. Reemplaza solo `ejercicios.html` y añade `ejercicios.css`, los dos archivos de `js/`, `publicar-ejercicios.html` y `data/ejercicios.json`.
4. **Si ya existe un `data/ejercicios.json` con ejercicios reales, no lo sobrescribas con el `[]` incluido aquí.** Mantén tu archivo actual.
5. Abre con Live Server y prueba desde `ejercicios.html`. El selector de unidades debe leer las de `data/unidades.json`.
6. Comprueba el funcionamiento antes de hacer Commit y Push.

## Cómo se usa

### Ejercicio de clase

1. Entra en **Modo Docente**.
2. Pulsa **Añadir ejercicio de clase**.
3. Completa título, unidad, autor, dificultad y formato.
4. Para WEB, pega Markdown con fórmulas `$...$` / `$$...$$`; para PDF, selecciona un archivo (máx. 25 MB).
5. Guarda el borrador. En Modo Docente podrás **Editar** y **Eliminar** ejercicios de ambas secciones.

### Aporte de un estudiante

1. Pulsa **Subir ejercicio resuelto** (sin Modo Docente).
2. Completa los datos y la solución en Markdown + LaTeX o PDF.
3. Guarda el ejercicio. Aparecerá en **Ejercicios subidos por alumnos y visitantes**, **solo en ese navegador**.
4. No aparece un botón para que el alumno modifique su entrega después de guardar. La edición desde Modo Docente es provisional hasta añadir autenticación real.

### Publicar cambios mediante GitHub Desktop

1. Abre `publicar-ejercicios.html` desde **el mismo origen de Live Server** y navegador donde creaste los ejercicios.
2. Descarga el ZIP de publicación. Contendrá `data/ejercicios.json`, los Markdown y PDF nuevos o editados y, si corresponde, `ARCHIVOS-A-RETIRAR.txt`.
3. **Revisa primero los últimos commits de tus compañeros.** Si el exportador detecta que el índice publicado cambió desde tus borradores, no forzará la exportación.
4. Extrae el ZIP en el repositorio, combinando carpetas. Revisa cuidadosamente cualquier ruta listada en `ARCHIVOS-A-RETIRAR.txt` antes de eliminarla.
5. Verifica con Live Server en una ventana de incógnito que las soluciones se abren.
6. Realiza Commit + Push desde GitHub Desktop. Verifica que los ejercicios aparezcan en GitHub Pages.
7. **Solo después** usa «Limpiar borradores ya publicados», si quieres descartar las copias locales. No borres borradores antes de verificar GitHub Pages.

El archivo `publicar-ejercicios.html` es independiente del `publicar-cambios.html` que ya empleas para Calendario y Materiales.

## Importante: límites de la fase de prueba

- GitHub Pages no puede recibir consultas o subidas públicas por sí mismo. **Los visitantes no podrán aportar ejercicios visibles para todos hasta conectar Firebase u otro backend.** Sus aportaciones de prueba solo se almacenarán en su navegador; no se transferirán automáticamente al tuyo.
- El botón Modo Docente es una simulación: cualquier visitante puede activarlo. Sin autenticación de servidor todavía no existen permisos reales. Los cambios de visitantes no alteran el repositorio de GitHub, pero **no debe usarse como control de acceso definitivo**.
- Los PDFs se almacenan provisionalmente en IndexedDB; el Markdown y sus metadatos se guardan en localStorage.
- `MathJax`, `Marked.js` y `DOMPurify` se cargan desde CDN. Se necesita conexión para el renderizado avanzado. Si alguna biblioteca no se carga, el texto Markdown se presenta como texto sin interpretar en lugar de introducir HTML inseguro.
- Las imágenes `![...](ruta)` del Markdown deben colocarse por separado en las rutas adecuadas dentro del repositorio; esta versión no añade un gestor de imágenes.
- Los ejercicios de MATLAB y los filtros de método de resolución han sido eliminados conforme a lo solicitado.
