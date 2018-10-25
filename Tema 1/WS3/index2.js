function calculateAge(birth, current){
	var edad = "You are either "+ (current-birth) +" or "+ (current-birth-1);
	document.write("<br>"+edad);
}

calculateAge(1998,2018);
calculateAge(530,2021);
calculateAge(3,(new Date()).getFullYear())