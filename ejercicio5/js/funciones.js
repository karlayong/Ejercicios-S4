/* Escribir un programa que permita ingresar 6 notas. Las notas se reparten de la siguiente manera: 2
notas de la unidad 1, 2 notas de la unidad 2 y 2 notas de la unidad 3. Se pide mostrar el promedio de
las notas de cada unidad y el promedio general de las 3 unidades*/
	
var alumno = prompt("Ingresa el nombre del alumno")
nota1 = parseInt(prompt('Ingresar nota 1'));
nota2 = parseInt(prompt('Ingresar nota 2'));
nota3 = parseInt(prompt('Ingresar nota 3'));
nota4 = parseInt(prompt('Ingresar nota 4'));
nota5 = parseInt(prompt('Ingresar nota 5'));
nota6 = parseInt(prompt('Ingresar nota 6'));

pro1 = (nota1 + nota2) / 2;
pro2 = (nota3 + nota4) / 2;
pro3 = (nota5 + nota6) / 2;
progeneral = (pro1 + pro2 + pro3) /3;


document.write( 'Alumno: '+ alumno);
document.write( '<br>','Promedio de la 1ra unidad: '+ pro1);
document.write( '<br>','Promedio de la 2da unidad: '+ pro2);
document.write( '<br>','Promedio de la 3ra unidad: '+ pro3);
document.write( '<br>','PROMEDIO GENERAL: '+ progeneral);
