/* 
    Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:
        Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).
    Realiza una animación sobre uno de los gráficos del punto 1.1. Para ello suponemos que pasados 10 segundos cambian los datos y debe animarse automáticamente.
*/



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var num = 0;
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Partidos', 'Diputados obtenidos'],
        ['PP', 137+num],
        ['PSOE', 85+num],
        ['Podemos-IU-Equo', 45+num],
        ['Cs', 32+num],
        ['ECP', 12+num],
        ['Otras candidaturas', 39+num]
    ]);

    var options = {
        title: 'Diputados obtenidos por cada Partido'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function generarAleatorio(){
    num = Math.floor(Math.random()*100) + 1;
    drawChart();
}
setInterval('generarAleatorio()',5000);
//
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Partidos', 'Diputados obtenidos'],
        ['PP', 137],
        ['PSOE', 85],
        ['Podemos-IU-Equo', 45],
        ['Cs', 32],
        ['ECP', 12],
        ['Otras candidaturas', 39]
    ]);

    var options = {
        title: 'Diputados obtenidos por cada Partido',
        width: 900,
        legend: { position: 'none' },
        chart: { title: 'Diputados obtenidos por cada Partido'},
        bars: 'horizontal',
        axes: {
        x: {
            0: { side: 'top', label: 'Numero de diputados'} 
        }
        },
        bar: { groupWidth: "100%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, options);
};

/*
    Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.
*/
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['France', 200],
    ['United States', 300],
    ['Spain', 400],
    ['China', 500],
    ['Italy', 600],
    ['United Kingdom', 700]
]);

var options = {};
var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
chart.draw(data, options);
}
