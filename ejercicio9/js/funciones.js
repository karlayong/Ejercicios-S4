/*Ingresar n valores enteros, y luego ordenarlos*/

function ejemplo() {

   var miArrayOriginal = [1, 4, 2, 9, 11, 44, 111, 7, 4];
   
   var miArray = [1, 4, 2, 9, 11, 44, 111, 7, 4];
   
   var msg ='El array original es: ' + miArrayOriginal +'\n';
   
   msg = msg + 'Ordenado de mayor a menor es ' + miArray.sort(deMayorAMenor)+'\n';
   
   msg = msg + 'Ordenado de menor a mayor es ' + miArray.sort(deMenorAMayor)+'\n';
   
   alert(msg);
   
   }
   
   function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
   
   function deMayorAMenor(elem1, elem2) {return elem2-elem1;}
