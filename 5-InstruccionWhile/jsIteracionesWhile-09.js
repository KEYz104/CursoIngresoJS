/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	//1) Declarar las variables (numMax, numMin, numero, seguir, guardado de num)
	let numeroIngresado;
	let numMax = 0;
	let numMin = 1;
	let respuestaDeSeguir;
	let flag = 1;
	
	//2) Generar el bucle para ejecutar el codigo
	do {
		//2.1)Pedir numeros
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		//3) Validar si el usuario esta ingresando numeros
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Los datos que ingreso no son numericos, por favor intente de nuevo: "))
		}
		respuestaDeSeguir = prompt("¿Desea ingresar otro numero?: s/n").toLowerCase(respuestaDeSeguir);
		//3.1) Analizo si el numero es Mayor o Menor	
		//3.2) Guardar los 2 numeros que ingreso el usuario
		if(flag){//Utilizo el Flag para que ingrese a la condicion
			numMax, numMin = numeroIngresado;
			flag = 0;//Declaro que Flag es igual a "cero", asi ya no entra al if "linea 24"
		}else{//Guardo la modificacion las variables en caso del que usuario quiera ingresar otro num
			if (numeroIngresado > numMax) {//Las comparo, depende del resultado lo guardo en el if o elseif 
				numMax = numeroIngresado;
				console.log(numMax);
			} else if (numeroIngresado < numMin) {
				numMin = numMin;
				console.log(numMin);
			}
		}
	} while (respuestaDeSeguir != "n");
	//4)Mostrar el Mayor y el Menor en el PlaceHolder del HTML ya que es solo lectura
	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
}
