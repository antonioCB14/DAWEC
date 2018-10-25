/* 1. Muestra, maquetada en una tabla HTML toda la información que puedas
extraer mediante JavaScript del navegador cliente. */
document.write("<br><table border='1' cellspacing='2'>");
document.write("<tr>");
document.write("<td>App Code Name</td>");
document.write("<td>"+navigator.appCodeName+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>App Name</td>");
document.write("<td>"+navigator.appName+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>App Version</td>");
document.write("<td>"+navigator.appVersion+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Cookie Enabled </td>");
document.write("<td>"+navigator.cookieEnabled+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Language </td>");
document.write("<td>"+navigator.language+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Online </td>");
document.write("<td>"+navigator.onLine+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Platform </td>");
document.write("<td>"+navigator.platform+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>User Agent </td>");
document.write("<td>"+navigator.userAgent+"</td>");
document.write("</tr>");
document.write("</table>");

/* 2. Realiza lo mismo para la información de la pantalla utilizada por el cliente. */
document.write("<br><table border='1' cellspacing='2'>");
document.write("<tr>");
document.write("<td>Screen Resolution</td>");
document.write("<td>"+screen.width + "*" + screen.height+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Screen Available</td>");
document.write("<td>"+screen.availWidth + "*" + screen.availHeight+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Color Depth</td>");
document.write("<td>"+screen.colorDepth+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Pixel Depth</td>");
document.write("<td>"+screen.pixelDepth+"</td>");
document.write("</tr>");
document.write("</table>");

//Abrir una nueva url con location.
//location.href = "https://www.google.com";