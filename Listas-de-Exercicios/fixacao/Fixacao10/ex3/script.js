const btn = document.getElementById('btnAdd');
const img = document.getElementById('img');
const div = document.getElementById('mostrar');
 
btn.addEventListener('click', function() {
    const imagem = document.createElement('img');
    imagem.src = img.value;
    imagem.alt = "Imagem Alterada";
    imagem.width = 300;
 
    div.appendChild(imagem);
});