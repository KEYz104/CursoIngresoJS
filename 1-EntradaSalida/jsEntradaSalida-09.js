/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declarar las variables para el sueldo y el aumento
	let sueldo;
	let sueldoConAumento;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	sueldoConAumento = sueldo * 1.1;
	
	document.getElementById("txtIdResultado").value = sueldoConAumento.toFixed(2);
}
