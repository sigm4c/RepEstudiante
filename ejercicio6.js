console.log('introduzca el  diámetro de una rueda y su grosor (en metros)') 
const prompt = require('prompt');
prompt.start();
let nombreInput = ['diametro',"grosor"]
prompt.get(nombreInput, function(error,userInput) {
  let diametro= +userInput.diametro
  let grosor= +userInput.grosor


if(diametro>1.4){console.log("La rueda es para un vehículo grande")}
else{
  if(diametro> 0.8 && diametro <=1.4){ console.log("La rueda es para un vehículo mediano") }
  
  else{console.log("La rueda es para un vehículo pequeño")}
  
  if(diametro>1.4,grosor<=0.4 && diametro<=1.4 && diametro>0.8,grosor>0.25){
    console.log("El grosor para esta rueda es inferior al recomendado")
  }
}


})
