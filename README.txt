ENTRE SOMBRAS — primera versión

QUÉ INCLUYE
- Página adaptable a celular y computadora.
- Biblioteca con filtros por género.
- Lectura de cuentos en una ventana/modal.
- Tres relatos originales de muestra para que pruebes el diseño.
- Sección de autor, contacto por correo y aviso de derechos.
- Sin base de datos ni dependencias de servidor.

PARA PROBAR EN TU COMPUTADORA
1. Descomprimí entre_sombras.zip.
2. Abrí la carpeta y hacé doble clic en index.html.
3. La web funciona localmente; las fuentes personalizadas requieren conexión a internet.

CÓMO AGREGAR TUS CUENTOS
1. Abrí stories.js con el Bloc de notas, VS Code u otro editor de texto.
2. Reemplazá los relatos de muestra o duplicá un bloque de cuento.
3. Completá: id (único, sin espacios), title, category (Misterio, Terror o Fantástico), date, readingTime, excerpt y paragraphs.
4. En paragraphs, cada elemento entre comillas es un párrafo. Escapá comillas dobles internas como \\" o preferí comillas simples dentro del texto.
5. Guardá y recargá index.html.
6. Cambiá el correo de ejemplo en script.js antes de publicar, o quitá la sección Contacto si no querés mostrar un correo.

PUBLICAR GRATIS CON GITHUB PAGES
1. Creá una cuenta en https://github.com/ si todavía no tenés una.
2. Creá un repositorio público llamado entre-sombras (o el nombre que prefieras).
3. Subí el contenido de esta carpeta directamente a la raíz del repositorio: index.html, styles.css, script.js, stories.js, README.txt y la carpeta cuentos si la usás.
4. En el repositorio, entrá a Settings → Pages.
5. En “Build and deployment”, elegí “Deploy from a branch”, seleccioná la rama main y la carpeta /(root), y guardá.
6. Esperá a que GitHub termine de publicar. La URL suele ser https://TU-USUARIO.github.io/entre-sombras/ (reemplazá TU-USUARIO por tu usuario real).
7. Cada vez que edites y subas los archivos al repositorio, el sitio se actualizará.

IMPORTANTE
- El alojamiento estático es gratuito, pero GitHub Pages no proporciona comentarios ni un panel privado para publicar desde la propia web.
- Para esta primera versión, los cuentos se agregan editando stories.js y volviendo a subirlo. Los comentarios reales necesitan un servicio externo o backend; no los simulé porque sería engañoso.
- Publicá solo textos que tengas derecho a compartir. El aviso de derechos de autor no sustituye asesoramiento legal.
- Antes de compartir la URL, cambiá el correo de ejemplo y eliminá los cuentos de muestra que no quieras publicar.
