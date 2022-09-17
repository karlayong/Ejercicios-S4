
/* Se pide ingresar 2 números. Mostrar los números ordenados de forma ascendente*/

const number = document.getElementById('numbers');
const resutl = document.getElementById('result');

let a=prompt('Introduzca el primer numero');
let b=prompt('Introduzca el segundo numero');


numbers.textContent = `Los numeros introducidos son ${a}, ${b}`


// ejercicio//

if (a>b) {
    resutl.textContent = `El orden es: ${b}, ${a}`
 } else if (b == a){
    resutl.textContent = `Son iguales`
 }else {
    resutl.textContent = `El orden es: ${a}, ${b}`
 }

    
  