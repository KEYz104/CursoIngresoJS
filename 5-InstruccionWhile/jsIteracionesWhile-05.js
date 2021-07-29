/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
    //Declaro la variable
	let sexoIngresado;
	    //Digo que la variable es igual a lo que ingrese el usuario por el prompt
	    //Pedir al usuario que ingrese el Dato "f o m"
		//Lo que hace toLowerCase es basicamente, todo lo que ponga el usuario, me va a devolver todo en minuscula
	    sexoIngresado = prompt("Ingrese f ó m.").toLowerCase(sexoIngresado);
    
		    while(sexoIngresado != "f" && sexoIngresado != "m"){
			//Si el usuario no ingreso el Dato correcto, decir que lo intente de nuevo
			    sexoIngresado = prompt("El dato ingresado es incorrecto. Intente nuevamente: ")
		    }
	        //Mostrar el dato ingresado por el usuario en la caja de texto del HTML
	       	document.getElementById("txtIdSexo").value = sexoIngresado;
}