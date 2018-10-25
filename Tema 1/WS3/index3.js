function calcCircumfrence(radius){
	var circunferencia = "The circumference is "+(2*Math.PI*radius);
	document.write("<br>"+circunferencia);
}
function calcArea(radius){
	var area = "The area is " + Math.PI * (radius^2);
	document.write("<br>"+area);
}

calcCircumfrence(3);
calcArea(3);
