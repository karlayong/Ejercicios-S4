/* Se pide ingresar el nombre de un trabajador, la cantidad de horas que ha trabajado y su tarifa por hora.
Mostrar el nombre del trabajador y su sueldo (cantidad de horas * tarifa por hora).*/

let trabajador=prompt('Introduzca el nombre del trabajador');
let horas=prompt('Introduzca las horas trabajadas');
let pghoras=prompt('Introduzca su tarifa por hora');


var  pagototal =horas * pghoras 

document.write( 'El nombre del trabajador es; '+ trabajador);
document.write( '<br>','Su sueldo es: '+ pagototal);
