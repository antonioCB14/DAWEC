function greaterNum(n1,n2){
	if(n1>n2){
		document.write("The greater number of "+n1+" and "+n2+" is "+n1+"<br>");
	}else if(n1<n2){
		document.write("The greater number of "+n1+" and "+n2+" is "+n2+"<br>");
	}else{
		document.write(n1 +" and "+n2+" are equals.<br>");
	}
}

greaterNum(1,5);
greaterNum(99,3);
