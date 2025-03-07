const carregar = document.getElementById('carregamento');
let tempo = 2
carregar.textContent = `Carregando por ${tempo}s..`

time = setInterval(() => {
    tempo--
    carregar.textContent = `Carregando por ${tempo}s..`
    
    setTimeout(() => {
        carregar.textContent = "Carregamento Concluído!";
    }, 2000);
}, 2000);
