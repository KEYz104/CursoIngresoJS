function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad >=18)
	{
		alert("Adulto");
	}
			else if (edad <=12)
				alert("Es niño");
			else{
				alert("Es adolecente");
		}

}
//FIN DE LA FUNCIÓN