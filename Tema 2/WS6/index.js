// 2c,2d,2e,2f

/*2. Crea una página que contenga varios enlaces, imágenes y anclas de ejemplo
y añade una serie de enlaces que realicen lo siguiente:
c) Muestra el número de imagenes del documento*/
document.write("Numero de imágenes: "+document.images.length+"<br>");
//d) Muestra el id de la primera imagen
document.write("Id de la primera imagen: "+ document.getElementsByTagName('img')[0].id+"<br>");
//e) Muestra el número de enlaces del documento
document.write("Numero de enlaces: "+document.getElementsByTagName('a').length+"<br>");
//f) Cambia el título del documento.
document.title('Nuevo titulo');