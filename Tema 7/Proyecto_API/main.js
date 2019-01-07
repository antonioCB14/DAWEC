//var APIKEY = "b4a327275bc141d98e06234f5f24b50e";
//var APIKEY = "adb23d5321c659bcfa65b9ad799bb755";
//var APIKEY = "a70d9c7ffa39c292fb8bb559e2e6e154";
//var APIKEY = "0667affcc654185df8b1cb150cc40eb4";
var APIKEY = "b612b4852904773c807c50b992304920";
var pagina = 1;
var peticion = true;
var bReceta = "";

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
                    crearReceta(recetas.recipes[i]);
                }
                if(recetas.count < 8){
                    $('#loading').hide();
                }
            }
            else{
                $('#loading').hide();
                if(pagina == 1){
                    console.log(pagina);
                    $("#recipes").html("<h1>No se han encontrado recetas</h1>");
                }
            }
        peticion = true;
    }});
}

function crearReceta(receta){
    var div = document.createElement("DIV");
    div.setAttribute('class',"receta");
    div.innerHTML = "<a href="+receta.source_url+" target='_blank'>"+
                    "<img src="+receta.image_url+">"+
                    "<h2>"+receta.title+"</h2>"
                    "<h2>"+receta.title+"</h2></a>";
    $("#recipes").append(div);
}

function buscarReceta(){
    bReceta = $("#titulo").val();
    $("#titulo").val("");
    $("#recipes").empty();
    pagina = 1;
    loadJSON(pagina++);
}