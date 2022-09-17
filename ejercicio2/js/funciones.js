/* Se pide ingresar el nombre de un alumno y sus 2 notas. Mostrar como resultado el nombre del alumno y su promedio */
	
var alumno = prompt("Ingresa el nombre del alumno")
nota1 = parseInt(prompt('Ingresar nota 1'));
nota2 = parseInt(prompt('Ingresar nota 2'));

pro = (nota1 + nota2) / 2;

document.write( 'Alumno: '+ alumno);
document.write( '<br>','Promedio: '+ pro);
