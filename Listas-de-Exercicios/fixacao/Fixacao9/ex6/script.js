const mens = document.getElementById('mensagem');
const btn = document.getElementById('btnAcionar');

btn.addEventListener('click', function(){
    mens.innerHTML = "Texto Clicado!"
});