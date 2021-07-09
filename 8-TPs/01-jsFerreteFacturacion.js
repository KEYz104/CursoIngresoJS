/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1, 
    num2,
    num3,
    resultado;

	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultado = num1 + num2 + num3;

    alert(`El resultado es ${resultado}`);
}
function Promedio () 
{
	let num1,
    num2,
    num3,
    resultadoPromedio;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultadoPromedio = (num1 + num2 + num3) / 3;

    alert(`El promedio es ${resultadoPromedio}`);

}
function PrecioFinal () 
{
	let num1,
    num2,
    num3,
    resultadoIva;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
    resultadoIva = (num1 + num2 + num3) * 1.21;

    alert(`Su precio final es ${resultadoIva.toFixed(2)}`);

}