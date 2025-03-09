const dolares = document.getElementById('dolares');
const btn = document.getElementById('btn');
const resultado = document.getElementById('conversao');

async function conversor() {
    const inputValue = dolares.value;

    if(!inputValue || inputValue == isNaN || inputValue == ''){
        alert('Por favor, insira dados válidos para a conversão')
    }
    else{
        try {
            const cotacao = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    
            const dados = await cotacao.json();
    
            let cotacaoDolar = dados.rates.BRL;  // Cotação de reais
    
            resultado.innerHTML =
            `A conversão de U$${inputValue} em reais é de R$ ${(cotacaoDolar * inputValue).toFixed(2)}`;
    
        }
        catch (erro) {
            alert('Ocorreu um erro. Verifique o console');
            console.log(erro);
        }
    }
}

btn.addEventListener('click', function(){
    conversor();
});