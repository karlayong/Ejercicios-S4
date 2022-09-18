/* En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El presupuesto anual del
hospital se reparte conforme a la sig. tabla:
Área: % del presupuesto:
Ginecología 40%
Traumatología 30%
Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.*/

presupuesto = parseInt(prompt('Ingresar el presupuesto anual: '));


ginecologia = presupuesto * 0.40;
traumatologia = presupuesto * 0.30;
pediatria = presupuesto * 0.30;

document.write( 'El presupuesto anual es: ' + presupuesto);
document.write( '<br>','El área de Ginecología recibe el 40%:  ' + ginecologia);
document.write( '<br>','El área de Traumatología recibe 30%:  ' + traumatologia);
document.write( '<br>','El área de Ginecología recibe 30%:  ' + pediatria);
