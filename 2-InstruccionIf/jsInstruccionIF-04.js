function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (!(edad < 17 || edad >13)){
      alert("Usted es adolecente")
	}


}//FIN DE LA FUNCIÓN