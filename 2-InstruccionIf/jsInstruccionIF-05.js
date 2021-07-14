function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (!(edad > 13 && edad < 18)){
		
      alert("Usted NO es adolecente")
	}

	
}//FIN DE LA FUNCIÓN