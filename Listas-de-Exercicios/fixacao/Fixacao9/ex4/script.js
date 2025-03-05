const textoArea = document.getElementById('texto');
const textoReal = document.getElementById('real');

textoArea.addEventListener('input', function(){
    textoReal.innerHTML = textoArea.value
});