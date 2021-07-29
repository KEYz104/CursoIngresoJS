/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//1)Declarar variables (numero / acumulador de negativos / acumulador de positivos Seguir)
	let numero;
	let acumuladorPositivo = 0;
	let acumuladorNegetivo = 1;
	let respuestaDeSeguir;
	let cantidadNumeros = 0;

	//2) Tengo que generar un bucle del tipo mientras usuario quiera (do-while)
	do {
		//3.1)Pido numero
		numero = parseInt(prompt("Ingrese un numero: "));
		//3.2) Valido que sea un numero
		while (isNaN(numero)) {
			numero = parseInt(prompt("Ese no es un numero. Por favor ingrese un numero: "))
		}
		respuestaDeSeguir = prompt("Desea ingresar otro numero: s/n");
		//3.3) Analizo el signo del numero 
		if(numero>=0){
			//Si el numero es positivo lo sumo a los demas positivos
			acumuladorPositivo += numero;
		}else{
			//Si es negativa lo multiplico con los demas negativos
			acumuladorNegetivo *= numero;
		}
		cantidadNumeros++;
	} while (respuestaDeSeguir != "n");
	
	//4.1)Muestro los resultados
	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegetivo;
}




//3) Cosas que se tinen que hacer dentro del bucle (osea mientras lo que usuario quiera)
//4) Cosas que tengo que hacer despues de que el usuario no quiere ingresar mas valores