function mostrar() {
  let numeroIngresado;
  for (;;) {//No utilizo el FOR ya que no es necesario, se puede usar el FOR sin "NADA"
	  numeroIngresado = parseInt(prompt("Ingrese un numero: "));
	  while (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Error, por favor Ingrese numeros: "));
	  }
    if (numeroIngresado == 9) {
      break;
    }
    console.log(numeroIngresado);
  }
} //FIN DE LA FUNCIÓN
