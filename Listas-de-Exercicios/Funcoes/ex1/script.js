const temp = document.getElementById('temp');
const conversor = document.getElementById('converter')
const tempFinal = document.getElementById('tipoTemp')
const conversao = document.getElementById('convFinal')

conversor.addEventListener('click', function () {
    let temperatura = parseFloat(temp.value);
    let tipo = tempFinal.value;

    if(tipo === 'fahrenheit'){
        conversao.textContent = `A conversão de ${temperatura}° Celsius em Fahrenheit é ${(temperatura * 9/5) + 32}F°`
    }
    else if (tipo === 'celsius'){
        conversao.textContent = `A conversão de ${temperatura}° Fahrenheit em Celsius é ${(temperatura - 32) * 5/9}C°`
    }
});

converter(temperatura);