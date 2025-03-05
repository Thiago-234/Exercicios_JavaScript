const mens = document.getElementById('mensagem');
const btn = document.getElementById('btnMensagem');

btn.addEventListener('click', function(){
    mens.innerHTML = "Botão Clicado!"
    console.log(`Id do botão -> ${btn.id}`)
});