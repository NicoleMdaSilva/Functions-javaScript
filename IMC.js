const prompt = require('prompt-sync')();

function IMCshow(){
        //Altura
        console.log('\nDigite sua altura:');
        const height = parseFloat(prompt('>> '));
        //Peso
        console.log('\nDigite seu peso:');
        const weight = parseFloat(prompt('>> '));
        //Calculo
        const imcC = weight / Math.pow(height, 2);
        Math.round(imcC).toFixed(2)

        //Resultado
        console.clear();

        if(imcC <= 18.5){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`)
            console.log('Abaixo do peso!');
        }
        else if(imcC <= 24.9){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`);
            console.log('Peso ideal!!!!');
        }
        else if(imcC <= 29.9){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`);
            console.log('Levemente acima do peso!');
        }
        else if(imcC <= 34.9){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`);
            console.log('Obsidade grau I');
        }
        else if(imcC <= 39.9){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`);
            console.log('Obsidade grau II (Severa)');
        }else if(imcC >= 40){
            console.log(`Seu IMC é ${Math.round(imcC).toFixed(2)}`);
            console.log('Obsidade grau III (Mórbida');
        }
}

module.exports = IMCshow;