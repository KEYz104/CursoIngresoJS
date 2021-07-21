function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Ushuaia":
		case "Bariloche":
			alert("FRIO");
			break;
		
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN