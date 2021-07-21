function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Diciembre":
		case "Octubre":
		case "Agosto":	
			alert("Este mes tiene 31 días");
			break;	
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;
		
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
	}

}//FIN DE LA FUNCIÓN