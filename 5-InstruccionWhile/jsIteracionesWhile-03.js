/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while (claveIngresada != "utn750"){
		claveIngresada = prompt("Clave incorrecta. Intente nuevamente: ");
	}
	alert("La clave ingresada es correcta");
}//FIN DE LA FUNCIÓN
