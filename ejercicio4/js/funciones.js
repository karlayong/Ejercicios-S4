/* Escribir un programa que me indique un monto en billetes y soles. Considerar billetes de: 10 – 20 – 50
y monedas de 1 – 5
Por ejemplo convertir: 118
Billetes de 50: 2
Billetes de 20: 0
Billetes de 10: 1
Monedas de 5: 1
Monedas de 1: 3*/

function algoritmo()
{
    let billetes_de_10,  billetes_de_20;
    let billetes_de_50, cantidad_de_billetes, monedas_de_1, monedas_de_5;
    cantidad_de_billetes = parseInt (document.formulario1.cantidad_de_billetes.value);
    monedas_de_1=cantidad_de_billetes;
    billetes_de_50=(monedas_de_1-monedas_de_1%50)/50;
    monedas_de_1=monedas_de_1%50;
    billetes_de_20=(monedas_de_1-monedas_de_1%20)/20;
    monedas_de_1=monedas_de_1%20;
    billetes_de_10=(monedas_de_1-monedas_de_1%10)/10;
    monedas_de_1=monedas_de_1%10;
    monedas_de_5=(monedas_de_1-monedas_de_1%5)/5;
    monedas_de_1=monedas_de_1%5;
    document.formulario1.billetes_de_10.value = billetes_de_10;
    document.formulario1.billetes_de_20.value = billetes_de_20;
    document.formulario1.billetes_de_50.value = billetes_de_50;
    document.formulario1.monedas_de_1.value = monedas_de_1;
    document.formulario1.monedas_de_5.value = monedas_de_5;
}