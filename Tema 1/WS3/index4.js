function celsiusToFahrenheit(celsius) {
	var celsiusInF = (celsius*9)/5 + 32;
	document.write("<br>"+celsius + "�C is " + celsiusInF + "�F");
}

function fahrenheitToCelsius(fahrenheit) {
	var fahrenheitInC = ((fahrenheit - 32)*5)/9;
	document.write("<br>"+fahrenheit+"�F is "+fahrenheitInC+"�C");
}

celsiusToFahrenheit(80);
fahrenheitToCelsius(500);
