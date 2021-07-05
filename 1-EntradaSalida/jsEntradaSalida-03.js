/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let textoIngresado;
	
	textoIngresado = document.getElementById("txtIdNombre").value;
	
	alert(textoIngresado);

	document.getElementById("txtIdNombre").value = "";
}


