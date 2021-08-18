console.log('Pide la edad y si es mayor de 18 años indica que ya puede conducir')
const prompt = require('prompt');
let edad;
prompt.start();
let nombreInput = ['edad']
prompt.get(nombreInput, function(error,userInput) {

    let edad = +userInput.edad
      
    if(edad >= 18){
        console.log("Si puede conducir, usted es mayor ")
    }
    else{
        console.log('no puede conducir, usted es menor')
    }
})