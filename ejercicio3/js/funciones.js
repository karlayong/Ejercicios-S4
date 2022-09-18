/* Dada las horas trabajadas de una persona y la tarifa de pago por hora, calcular su salario y escribirla.
y los valores porcentuales a su salario en 10%, 30%, 60% y 80% */

let horas=prompt('Introduzca las horas trabajadas');
let pghoras=prompt('Introduzca su tarifa por hora');


var  pagototal =horas * pghoras 
var pago10 = pagototal + (pagototal * 0.10)
var pago30 = pagototal + (pagototal * 0.30)
var pago60 = pagototal + (pagototal * 0.60)
var pago80 = pagototal + (pagototal * 0.80)


document.write( '<br>','Su sueldo es: '+ pagototal);
document.write( '<br>','Su pago + el 10% es:  '+ pago10);
document.write( '<br>','Su pago + el 30% es: '+ pago30);
document.write( '<br>','Su pago + el 60% es:'+ pago60);
document.write( '<br>','Su pago + el 80% es: '+ pago80);

