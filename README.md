Modificación de los botones para exportar, añadiendo estilos diferentes, iconos, clases y tooltips (después se han puesto invisibles para usar solamente el boton de exportar y elegir las opciones desde el modal)
Traducción de todos los componentes de la tabla como paginate, search, info, etc
El problema del espacio vacío que aparece parece ser que es cosa de una libreria de botones de CSS, ya que al incluirla se solucionaba, pero se desconfiguran todos los botones. Por lo que he decidido hacer una hoja de estilos y modificarlo a mi gusto.
Se ha cambiado el tema de la web
Se ha modificado los textos y estilos del carrusel de imágenes
Se ha cambiado el texto del modal que aparece cuando se presiona el botón de copy
Se ha creado un boton "Exportar" dinámicamente con javascript que crea un modal, que te permite elegir el formato de exportación y los datos que quieres exportar.
    Los demás botones con el formato se crearon inicialmente, y aparecían todos, pero al añadir este botón los he puesto invisibles, ya que utilizo sus funcionalidades para exportar los datos y formatos deseados.
Se ha añadido una nueva sección para mostrar el tiempo de diferentes ciudades apoyandose de rapidApi creando una tabla y pintando los resultados 
A parte de la tabla, se puedo buscar la ciudad que se quiera en el input, que se puede escribir directamente en el input o a través del enlace del título de la sección del tiempo (Al ser una API que no controlo hay muchas ciudades como Caudete, que pone algún pueblo que se llama igual de Aragón)
Creación de enlaces en el apartado de cursos Online y en las tarjetas

Se crea app.js con todas las funcionalidades de javascript
Se crea appWeather.js con todas las funcionalidades javascript de la tabla del tiempo

table.html y tableWeather.html -> no tienen funcionalidad, se han usado para probar si funcionaba antes de añadirlo al index.html



