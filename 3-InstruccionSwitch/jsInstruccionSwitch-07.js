function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Ushuaia":
		case "Mar del plata":
			alert("Sur");
			break;		
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");;
			break;
	}

}//FIN DE LA FUNCIÓN