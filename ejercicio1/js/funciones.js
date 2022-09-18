/*A un profesor le pagan según sus horas y una tarifa de pago por horas. Si la cantidad de horas
trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50 % para las horas extras. Calcular el
salario del profesor dadas las horas trabajadas y la tarifa*/

function algoritmo()
{
    let horas_trabajadas, salario, tarifa_por_hora;
    horas_trabajadas = parseFloat (document.formulario1.horas_trabajadas.value);
    tarifa_por_hora = parseFloat (document.formulario1.tarifa_por_hora.value);
    salario=horas_trabajadas*tarifa_por_hora;
    if(horas_trabajadas>40)
        salario=salario+(horas_trabajadas-40)*tarifa_por_hora*0.5;
    document.formulario1.salario.value = salario;
}