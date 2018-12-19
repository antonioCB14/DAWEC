/*8. Crea una web simulando una serie de noticias (3 divs con el texto de la noticia y sobre cada uno
su título correspondiente). Mediante JQuery
a) Cambia el tamaño de fuente de las noticias (3 tamaños).
b) Al pulsar sobre cada título se debe mostrar u ocultar ésta.
c) Al colocar el ratón sobre el texto de la noticia debe cambiar el color de fondo de ésta.
d) Completa el apartado c) haciendo que al salir el ratón se vuelva a su color original elfondo. */

$(document).ready(function(){
    $("p").css({"font-size":"25px",
                "color":"red"});
    $("div").click(function(){
        if($("p",this).is(":hidden")){
            $("p",this).show();
        }else{
            $("p",this).hide();
        }
    })
    $("p").hover(function(){
        $(this).css({"color":"yellow"});
    });
});