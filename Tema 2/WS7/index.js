/*  Develop a web app in which:
        Test if geolocation is available.
        If it's available, show the current position (latitude and longitude)
        If it isn't available, show a message for each and everyone of the possible errors.
        Improve your code so you show the position continuously (although the user could be in moving, so it could change)
        Find the way to meassure the distance traveled. */

var longitud = 0;
var latitud = 0;
function success(pos) {
    var coordendas = pos.coords;
    longitud = coordendas.longitude;
    latitud = coordendas.latitude;
    document.write("Latitud :"+ coordendas.latitude+"<br>");
    document.write("Longitud: "+coordendas.longitude+"<br>");
    var geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(location.latitude, location.longitude);
    if (geocoder) {
        geocoder.geocode({ 'latLng': latLng}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                document.write(results[0].formatted_address); 
                //$('#address').html('Address:'+results[0].formatted_address);
            }
            else {
                //$('#address').html('Geocoding failed: '+status);
                console.log("Geocoding failed: " + status);
            }
        });
    };
}
    
function error(err) {
    document.write("ERROR"+err.code+":"+err.message);
}

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(success, error);
}else{
    document.write("No hay geolocation");
}

/*  Let's try to use the geolocation information with the API of Google Maps.
        Use a map to show your location
        Draw a marker in your location
        Find a way to know the address of your location (reverse geocoding). */
function initMap() {
    navigator.geolocation.watchPosition(function ok(pos){
        var coordendas = pos.coords;
        longitud = coordendas.longitude;
        latitud = coordendas.latitude;
        var current = new google.maps.LatLng(latitud,longitud);
        var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 11,
            center: current
        });

        var marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: latitud, lng: longitud}
        });
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        geocodeLatLng(geocoder,map,infowindow);
        function geocodeLatLng(geocoder, map, infowindow) {
            var latlng = {lat: latitud, lng: longitud};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        map.setZoom(25);
                        infowindow.setContent(results[0].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        window.alert('No results found');
                    }
                }else{
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
        var flightPlanCoordinates = [
          {lat: latitud, lng: longitud},
        ];

        var ruta = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
          });
          ruta.setMap(map);
    });
}

/*  OPTIONAL. Complete exercise 2 with these new features:
        Look for the way to animate your marker
        Draw the position of the user correctly although it could be moving.
        Draw the route of the user over the map. */