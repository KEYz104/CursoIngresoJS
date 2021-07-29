/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while(numeroIngresado < 0 || numeroIngresado > 9 || isNaN(numeroIngresado)){
		numeroIngresado = prompt("Numero no valido. Ingrese un numero valido")
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN