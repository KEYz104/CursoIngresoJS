function mostrar() {
	let numero
	let contadorDivisores = 0;

	numero = parseInt(prompt("ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Error, Ingrese un numero"));
	}

	for (let i= 1; i <= numero; i++)
	{
		if (numero % i == 0)
		{
			contadorDivisores++;
			console.log(i);
		}
	}
	console.log("Divisores encontrados " + contadorDivisores);

	if(contadorDivisores != 0)
	{
		alert("el " + numero + " no es primo");
	}
	else
	{
		alert ("el " + numero + " es primo");
	}
} //FIN DE LA FUNCIÓN
