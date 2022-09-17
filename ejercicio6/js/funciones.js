/* Se pide ingresar el sueldo base y la cantidad de hijos de un empleado. La empresa ofrece una
bonificación especial de S/. 80. por cada hijo. Realice un algoritmo que determine el monto de la
bonificación y el monto total a pagar al trabajador.*/

	var n1,n2,vsuma;
	
	sueldo = parseInt(prompt('Ingresar su sueldo base'));
	hijos = parseInt(prompt('Ingresar la cantidad de hijos'));

    bono = hijos * 80
	
	vsuma = sueldo + bono;

    document.write('Su bonificación es '+bono);
	document.write('<br>','Su monto total de pago es '+vsuma);
    
  