function mostrar() {
  let numeroIngresado, cantidadDivisores = 0;
  numeroIngresado = parseInt(prompt("Ingrese un numero: "));
  while (isNaN(numeroIngresado)) {
    numeroIngresado = parseInt(
      prompt("Error, el dato ingresado no es numerico. Ingrese un Numero")
    );
  }
  for (let i = 1; i <= numeroIngresado / 2; i++) {
    if (numeroIngresado % i == 0) {
      cantidadDivisores++;
    }
    console.log(cantidadDivisores + " Lo divide");
  }
} //FIN DE LA FUNCIÓN
