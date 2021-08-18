console.log('  Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, con un descuento del 15% por mas de 3 docenas y 10% en caso contrario.') 
console.log("Además por más de 3 docenas se obsequia una unidad por cada docena en exceso")
let montoDescuento,montoCompra,montopago,obsequio;
const prompt = require('prompt');
prompt.start();
console.log("indique el precio por docena y la cantidad de docenas que desea ")
let nombreInput = ['precio',"docenas"]
prompt.get(nombreInput, function(error,userInput) {
  let precio= +userInput.precio
  let docenas= +userInput.docenas

let montoCompra=precio*docenas

if (docenas>3){
    montoDescuento=0.15*montoCompra
    obsequio=docenas-3
    let montopago=montoCompra-montoDescuento
    console.table("monto de compra "+montoCompra+", monto de descuento "+montoDescuento+", monto a pagar "+montopago+", unidad obsequida "+obsequio)
}
else {
  montoDescuento=0.10*montoCompra
  obsequio=0
  let montopago=montoCompra-montoDescuento
  console.table("monto de compra  "+montoCompra+", monto de descuento "+montoDescuento+", monto a pagar "+montopago+", unidad obsequida "+obsequio)
}


})
