console.log(' Muestra la calificación según la nota')
const prompt = require('prompt');
let var1;
prompt.start();
let nombreInput = ['var1']
prompt.get(nombreInput, function(error,userInput) {

    let var1= +userInput.var1
    if (var1>= 0 && var1 < 3) {console.log("Muy deficiente")
    }
    else {
        if(var1>=3 && var1 <5 ){ console.log("Insuficiente")}
else {
    if (var1>=5 && var1 <6 ){console.log("Suficiente")}
else {
     if (var1>= 6 && var1 < 7){console.log("Bien") }
        else {
            if (var1>= 7 && var1 < 9){console.log("notable")}

            else {
                if(var1>= 9 && var1 <= 10){ console.log("sobresaliente")}
            }
        }
}
    }
    }
    
})