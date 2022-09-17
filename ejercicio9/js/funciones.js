/* A un trabajador le pagan según sus horas y una tarifa de pago por horas. si la cantidad de horas
trabajadas es mayor a 80 horas. la tarifa se incrementa en un 20% para las horas extras. calcular el
salario del trabajador dadas las horas trabajadas y la tarifa*/


let trabajador=prompt('Introduzca el nombre del trabajador');
let horas=prompt('Introduzca las horas trabajadas');
let pghoras=prompt('Introduzca su tarifa por hora');


var  pagototal =horas * pghoras 
var pagoextras = pagototal + (pagototal * 0.20)

document.write( 'El nombre del trabajador es; '+ trabajador);


// ejercicio//

if (horas < 80) {
    document.write( '<br>','Su sueldo es: '+ pagototal);
 }else {
    document.write( '<br>','Su sueldo es: '+ pagoextras)
 }

