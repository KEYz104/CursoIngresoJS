function mostrar()
{
	
	let precio = 15000;
  	let estacion;
  	let destino;
  	let precioFinal;
  

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    	case "Invierno":
      	if (destino == "Bariloche") {
			alert("Se viaja");
		}else{
			alert("No se viaja");
		}
		break;
	}
	switch(estacion){
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				alert("Se viaja");
			}else{
				alert("No se viaja");
			}
			break;
	}
	switch(estacion){
		case "Otoño":
			alert("Se viaja");
			break;
	}
	switch(estacion){
		case "Primavera":
		if(destino == "Bariloche"){
			alert("No se viaja")
		}else{
			alert("Se viaja");
		}
		break;
	}

}