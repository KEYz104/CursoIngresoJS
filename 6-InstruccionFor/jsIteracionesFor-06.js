function mostrar() {
  let numeroIngresado,
    cantidadNumPares = 0;

  numeroIngresado = parseInt(prompt("Ingrese un numero: "));
  while (isNaN(numeroIngresado)) {
    numeroIngresado = parseInt(prompt("Error, Por favor Ingrese Numeros: "));
  }
  for (let i = 1; i <= numeroIngresado; i++) {
    if (i % 2 == 1) {
      console.log(i);
      cantidadNumPares++;
    }
  }
  console.log("La cantidad de numeros pares son: " + cantidadNumPares);
} //FIN DE LA FUNCIÓN
