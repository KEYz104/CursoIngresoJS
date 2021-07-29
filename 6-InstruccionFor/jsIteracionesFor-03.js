function mostrar() {
  let numeroIngresado;
  numeroIngresado = parseInt(
    prompt("Ingrese cuantas veces desea que se repita el mensaje: ")
  );
  while (isNaN(numeroIngresado)) {
    numeroIngresado = parseInt(
      prompt(
        "Los valores ingresados no son numericos, por favor intente nuevamente: "
      )
    );
  }
  for (let index = 1; index <= numeroIngresado; index++) {
    console.log(index + " Hola UTN FRA");
  }
} //FIN DE LA FUNCIÓN
