const t = document.getElementById('input');
const texto = document.getElementById('texto');
const btn = document.getElementById('btnAdd');

btn.addEventListener('click', function(){
    texto.innerHTML += t.value;
});

