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

  for (let i = 0; i < 2; i++) {
    tipo = prompt("Elija el tipo de Producto: barbijo, alcohol, jabon");
    while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
      tipo = prompt(
        "Por favor, escriba un tipo valido: barbijo, alcohol, jabon"
      ).toLowerCase(tipo);
    }
    precio = prompt(parseInt("Ingrese un precio entre 100 y 300"));
    while (precio < 100 || precio > 300) {
      precio = parseInt(
        prompt(
          "El numero ingresado no esta entre los valores, por favor ingrese entre: 100 y 300"
        )
      );
    }
  }
}
