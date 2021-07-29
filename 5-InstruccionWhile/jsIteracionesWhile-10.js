/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  //1)Declarar las variables (numeroIngresado, suma, etc)
  let numeroIngresado,
    respuestaDeSeguir,
    sumPositivos = 0,
    sumNegativos = 0,
    cantidadPositivos = 0,
    cantidadNegativos = 0,
    cantidadCeros = 0,
    cantidadNumPares = 0,
    promedioPositivos = 0,
    promedioNegativos = 0,
    difPosiNega;

  //2)Crear el bucle para ejecutar el codigo
  do {
    //2.1) Pedir al usuario que ingrese numeros
    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    //2.2) Verificar si el usario ingreso numero y no un string
    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(
        prompt("Ese no es un numero. Por favor ingrese un numero: ")
      );
    }
    respuestaDeSeguir = prompt("¿Desea ingresar otro numero?: s/n"); //Pregunta al usuario si quiere ingresar otro num
    if (numeroIngresado % 2 == 0) {
      cantidadNumPares++;
    }
    if (numeroIngresado == 0) {
      cantidadCeros++;
    } else if (numeroIngresado < 0) {
      cantidadNegativos++;
      sumNegativos += numeroIngresado;
    } else if (numeroIngresado > 0) {
      cantidadPositivos++;
      sumPositivos += numeroIngresado;
    }
  } while (respuestaDeSeguir != "n");

  if (cantidadPositivos > 0) {
    promedioPositivos = sumPositivos / cantidadPositivos;
    alert("El promedio de los positivos es: " + promedioPositivos);
  }
  if (cantidadNegativos > 0) {
    promedioNegativos = sumNegativos / cantidadNegativos;
    alert("El promedio de los negativos es: " + promedioNegativos);
  }

  difPosiNega = cantidadPositivos - cantidadNegativos;

  alert("La suma de los positivos es: " + sumPositivos);
  alert("La suma de los negetivos es: " + sumNegativos);
  alert("La cantidad de numeros positivos es: " + cantidadPositivos);
  alert("La cantidad de numeros negativos es: " + cantidadNegativos);
  alert("La cantidad de numeros pares es: " + cantidadNumPares);
  alert("La cantidad de numeros ceros es: " + cantidadCeros);
  alert("La diferencia entre positivos y negativos es: " + difPosiNega);
}
