function helloWorld(idioma){
	switch(idioma){
		case "es":
			document.write("Hola mundo<br>");
			break;
		case "de":
			document.write("Hallo Welt<br>");
			break;
		case "en":
			document.write("Hello World<br>")
			break;
		default:
			document.write("Hello World<br>");
	}
}

helloWorld("es");
helloWorld("de");
helloWorld("en");
