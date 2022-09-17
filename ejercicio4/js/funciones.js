/* Se pide ingresar el nombre de un producto y su precio. Calcular el igv (18% del producto). Mostrar el
producto, el precio y el monto del igv*/

let producto=prompt('Introduzca el nombre de producto');
let precio=prompt('Introduzca el precio del producto');

var igv = 0.18
var  precioIGV = precio * igv

document.write( 'El producto es: '+ producto);
document.write( '<br>','El precio es: '+ precio);
document.write( '<br>','El nonto del IGV del producto es: '+ precioIGV);
    
  