console.log(' introduzca un numer para determinar si un número es o no es, par positivo')
const prompt = require('prompt');
prompt.start();
let nombreInput = ['numero']
prompt.get(nombreInput, function(error,userInput) {
  let numero= +userInput.numero


if (numero % 2==0){
    console.log('el numero '+numero +' es par ')
}
else {
console.log('el numero '+numero +' es impar ')
}
})