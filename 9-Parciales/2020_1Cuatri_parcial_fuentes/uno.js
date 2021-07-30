/*
Estrategia de Resolucion
1) Declarar Variables
Cosas que tengo que pedir al usuario -->tipo/precio/cantidad/marca/fabricante
punto a---> cantAlBarato/fabAlBarato/precioAlBarato/flagAlcohol
punto b---> acumA/ acumB / acumJ/ contadorA/ contadorB/ contadorJ
punto c---> acumJ
-------------------
2) Generar un bucle que se repita 5 veces (FOR)

Cosas que se tienen que hacer 5 veces (Van dentro del bucle)
2.1) Pido tipo/ Valido tipo
2.2) Pido precio / valido precio
2.3) Pido cantidad/ valido cantidad
2.4) Pido marca / Valido marca
2.5) Pido fabricante / valido fabricante
-----------------
3) Cosas que tengo que hacer para contestar el punto A

3.1) Me fijo si es un Alcohol
si es alcohol me fijo si es la primeraz vez que se ingresa alcohol o
ya se habia ingresado previamente
si es la primera vez cambio el flag, guardo el precio/cantidad/fabricante como alcohol barato
y por cada alchol me fijo si es mas barato que el que ya tengo
como barato y de ser asi actualizo los datos del alcohol barato
3.2) Me fijo el tipo de productor (barbijo/alcohol/jabon) y
actualizo el contador segun corresponda
------------------
4) Cosas que tengo que hacer despues del (FOR)

Me fijo cual fue el tipo con mas unidades vendidad y calculo el promedio

Mostrar los resultados
*/

function mostrar() {
  let tipo, precio, cantidad, marca, fabricante;
  let precioAlBarato,
    fabAlBarato,
    cantAlBarato,
    flagAlcohol = 1;
  let acumA = 0,
    acumB = 0,
    acumJ = 0;
  let contadorA = 0,
    contadorB = 0,
    contadorJ = 0;
  let promedio, mayortipo;

  //Inicio del Bucle FOR
  for (let i = 0; i < 2; i++) {
    tipo = prompt("Elija el tipo de Producto: barbijo, alcohol, jabon");
    while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
      tipo = prompt(
        //Pido el Tipo de Producto
        "Por favor, escriba un tipo valido: barbijo, alcohol, jabon"
      ).toLowerCase(tipo);
    }
    console.log(tipo);
    precio = parseInt(prompt("Ingrese un precio entre $100 y $300"));
    while (!(precio >= 100 || precio <= 300)) {
      precio = parseFloat(
        prompt(
          "El numero ingresado no esta entre los valores, por favor ingrese entre: $100 y $300"
        )
      );
    }
    console.log(precio);
    cantidad = parseInt(
      //Pido la cantidad
      prompt("Ingrese la cantidad el max es 1000: ")
    );
    while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
      cantidad = parseInt(
        prompt("Error, Por favor Ingrese una cantidad validad: ")
      );
    }
    console.log(cantidad);
    marca = prompt("Ingrese una Marca: "); //Pido la marca
    while (marca.length < 2) {
      marca = prompt(
        "Error, marca demasiado corta, Ingrese una marca con mas caracteres: "
      );
    }
    console.log(marca);
    fabricante = prompt("Ingrese un Fabricante"); //Pido el fabricante
    while (fabricante.length < 2 || fabricante.length > 10) {
      fabricante = prompt(
        "Error, fabricante demaciaso corto, Ingrese un fabricante con mas caracteres:  "
      );
    }
    console.log(fabricante);
  } // Fin de Bucle FOR
  //Inicio Switch
  switch (tipo) {
    case "barbijo":
      acumB += cantidad;
      contadorB++;
      console.log(acumB);
      console.log(contadorB);
      break;
    case "jabon":
      acumJ += cantidad;
      contadorA++;
      console.log(acumJ);
      console.log(contadorJ);
      break;
    case "alcohol":
      if (flagAlcohol == 1) {
        precioAlBarato = precio;
        cantAlBarato = cantidad;
        fabAlBarato = fabricante;
        flagAlcohol = 0;
        console.log(precioAlBarato);
        console.log(cantAlBarato);
        console.log(fabAlBarato);
      } else if (precio < precioAlBarato) {
        precioAlBarato = precio;
        cantAlBarato = cantidad;
        fabAlBarato = fabricante;
        console.log(precioAlBarato);
        console.log(cantAlBarato);
        console.log(fabAlBarato);
      }
      acumA += cantidad;
      contadorA++;
      break;
  } // Fin Switch

  if (acumA > acumB && acumA > acumJ) {
    mayortipo = "Alcohol";
    promedio = acumA / contadorA;
  } else if (acumB >= acumA && acumB > acumJ) {
    mayortipo = "Barbijo";
    promedio = acumB / contadorB;
  } else {
    mayortipo = "Jabon";
    promedio = acumJ / contadorJ;
  }

  //Punto A
  if (flagAlcohol == 0) {
    document.write(
      "El fabricante del alcohol mas barato es " +
        fabAlBarato +
        " con un precio de " +
        precioAlBarato
    );
  } else {
    document.write("No se compraron alcoholes");
  }
  // Punto B
  document.write(
    "<br/>" +
      "El producto mas vendido es " +
      mayortipo +
      " y el promedio es " +
      promedio
  );
  //Punto C
  document.write("<br/>" + "La cantidad de Jabones es " + acumJ);
}
