// Captura video mediante tu webcam y muestralo en la web
var video = document.querySelector("#videoElement");
 
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true}).then(function(stream) {
        video.srcObject = stream;
  }).catch(function(err0r) {
    console.log("Something went wrong!");
  });
}

//Realiza lo mismo pero ahora sólo para el audio
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({audio: true}).then(stream => audioElement.srcObject = stream)
        .catch(err => log(err.name + ": " + err.message));
}