const btnGerar = document.getElementById('gerar');
const x = document.getElementById('numeros');

function gerarLista(x) {
    let num = parseInt(x.value); 
    let lista = [];
    const resul = document.getElementById('resultado');

    for (let i = 0; i < num; i++) {
        let aleatorio = Math.floor(Math.random() * 101);
        lista.push(aleatorio);
    }

    resul.textContent = `Lista de números com ${num} termos gerados: ${lista.join(', ')}`;
}

btnGerar.addEventListener('click', function() {
    gerarLista(x)    
});