function mostrar()
{
	//Declaro las variables
	let precio=15000;
	let estacion;
	let destino;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
		
	switch(estacion){
		case "Invierno":
		if(destino == "Bariloche"){
			precioFinal = precio * 1.2;
		} else if(destino == "Mar del plata"){
			precioFinal = precio * 0.8;1
		}else{
			precioFinal = precio * 0.9;
		}
 	break;
	}
	alert("Su precio final es $ " + precioFinal);
}//FIN DE LA FUNCIÓN