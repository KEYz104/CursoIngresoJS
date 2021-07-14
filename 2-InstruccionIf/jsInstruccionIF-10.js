function mostrar()
{
	let nota = Math.floor(Math.random() * 10 + 1);

	if(nota >=9){
		alert("EXCELENTE " + nota);
	}
	else if (nota<4){
		alert("La proxima se puede " + nota);
	}else
		alert("APROBO " + nota);
	
	
	
}//FIN DE LA FUNCIÓN