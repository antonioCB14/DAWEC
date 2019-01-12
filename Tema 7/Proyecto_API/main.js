//var APIKEY = "b4a327275bc141d98e06234f5f24b50e";
//var APIKEY = "adb23d5321c659bcfa65b9ad799bb755";
var APIKEY = "a70d9c7ffa39c292fb8bb559e2e6e154";
//var APIKEY = "0667affcc654185df8b1cb150cc40eb4";
//var APIKEY = "b612b4852904773c807c50b992304920";
var pagina = 1;
var peticion = true;
var bReceta = "";
var ingredientes = "";
var clickado = false;
var todas_recetas = [];

$(document).ready(function(){
    loadJSON(pagina++);
    var win = $(window);
	win.scroll(function() {
		if ($(document).height() - win.height() <= (win.scrollTop())+10) {
            $('#loading').show();
            if(peticion){
                loadJSON(pagina++);
            }
		}
    });
    $("#titulo").keypress(function(e) {
        if(e.which == 13) {
            buscarReceta();
        }
    });
    $("#logo").click(function(){
        pagina = 1;
        bReceta = "";
        loadJSON(pagina++);
    });
    $("#logo").css('cursor','pointer');
    $("#boton").css('cursor','pointer');
});

function loadJSON(pagina){
    peticion = false;
    $.ajax({
        url: ("https://www.food2fork.com/api/search?key="+APIKEY+"&q="+bReceta+"&page="+pagina), success: function(result){
            recetas = JSON.parse(result);
            if (recetas.count > 0){
                for (var i=0;i<recetas.recipes.length;i++){
                    todas_recetas.push(recetas.recipes[i]);
                    crearReceta(recetas.recipes[i]);
                }
                if(recetas.count < 8){
                    $('#loading').hide();
                }
            }
            else{
                $('#loading').hide();
                if(pagina == 1){
                    $("#recipes").html("<h1>No se han encontrado recetas</h1>");
                }
            }
        peticion = true;
    }});
}

function crearReceta(receta){
    var div = document.createElement("DIV");
    div.setAttribute('class',"receta");
    $(div).html("<img src="+receta.image_url+">"+
                "<h2>"+receta.title+"</h2></a>");
    $(".receta").click(function() {
        $(".modal-wrapper").remove();
        ingredientes = "";
        if(!clickado){
            clickado = true;
            var indice = $('.receta').index(this);
            $.ajax({ 
                url: ("https://www.food2fork.com/api/get?key="+APIKEY+"&rId="+todas_recetas[indice].recipe_id), success: function(result){
                    receta_modal = JSON.parse(result);
                    if(receta_modal.recipe.ingredients.length > 0){
                        for (var i=0;i<receta_modal.recipe.ingredients.length;i++){
                            ingredientes = ingredientes+"<p>"+receta_modal.recipe.ingredients[i]+"</p>";
                        }
                        var modal = document.createElement("DIV");
                        modal.setAttribute('class',"modal-wrapper");
                        modal.setAttribute('id',"popup");
                        $(modal).html(
                            "<div class='popup-contenedor'>"+
                            "<h2>"+receta_modal.recipe.title+"</h2>"+
                            "<img src="+receta_modal.recipe.image_url+">"+
                            ingredientes+
                            "<a class='popup-cerrar' href='#s'>X</a>"+
                            "</div>"
                        );
                        $("#recipes").append(modal);
                        $(location).attr('href',"#popup");
                    }
                    clickado=false;
                } 
            });  
        }
    });
    $("#recipes").append(div);
}

function buscarReceta(){
    bReceta = $("#titulo").val();
    $("#titulo").val("");
    $("#recipes").empty();
    pagina = 1;
    loadJSON(pagina++);
}