/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/*let respuesta,
		promedio,
		suma = 0,
		cantidadNumeros = 0,
		numeroIngresado = 0;

	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("desea ingresar otro numero? si/no");
		suma += numeroIngresado;
		cantidadNumeros++;

	}while(respuesta != "no" && !isNaN(numeroIngresado));
	
	promedio = suma / cantidadNumeros;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);*/
	
	
	let respuesta;
	let acumulador = 0;
	let contador = 0;
	let numeroIngresado = 0;
	let promedio;

	
	do {
		numeroIngresado = parseInt(prompt("Ingrese un Numero: "));
		respuesta = prompt("¿Desea Ingresar otro numero?").toLowerCase(respuesta);
		acumulador += numeroIngresado;
		contador++;
	} while (respuesta != "no" && !isNaN(numeroIngresado)); 
	
	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);


}