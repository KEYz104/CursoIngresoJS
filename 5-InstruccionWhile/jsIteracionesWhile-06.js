function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;

	
	while (contador < 5) {
		numeroIngresado = parseInt(prompt("Ingrese 5 numeros: "));
		//console.log(numeroIngresado);
		acumulador += numeroIngresado;
		contador++;
		console.log(contador);
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
	//console.log(acumulador);
}//FIN DE LA FUNCIÓN