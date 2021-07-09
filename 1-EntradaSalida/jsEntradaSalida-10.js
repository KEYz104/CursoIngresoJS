/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let dato;
	let descuento;

	dato = parseInt(document.getElementById("txtIdImporte").value);
	descuento = dato * 0.25;
	descuento = dato - descuento;
	parseInt(document.getElementById("txtIdResultado").value = descuento.toFixed(2));
}
