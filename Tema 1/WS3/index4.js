function celsiusToFahrenheit(celsius) {
	var celsiusInF = (celsius*9)/5 + 32;
	document.write("<br>"+celsius + "ºC is " + celsiusInF + "ºF");
}

function fahrenheitToCelsius(fahrenheit) {
	var fahrenheitInC = ((fahrenheit - 32)*5)/9;
	document.write("<br>"+fahrenheit+"ºF is "+fahrenheitInC+"ºC");
}

celsiusToFahrenheit(80);
fahrenheitToCelsius(500);
