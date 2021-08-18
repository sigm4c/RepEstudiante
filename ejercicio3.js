console.log(' determine cuánto debe pagar un cliente por el estacionamiento de su vehículo')
console.log('son 1500 por hora el estacionamient, cuantas horas y minutos usted quiere pagar ?')
const prompt = require('prompt');
let precio=1500;
prompt.start();
let nombreInput = ['horas','minutos']
prompt.get(nombreInput, function(error,userInput) {

 
    let horas= +userInput.horas

 let minutos= +userInput.minutos


if (minutos>0){
horas=horas+1
 resultado= precio*horas
    console.log('entonces usted debe pagar '+resultado)


}
else {
resultado= precio*horas
console.log('entonces usted debe pagar '+resultado)
}
})