const textoArea = document.getElementById('texto');
const textoReal = document.getElementById('real');
const tipo = document.getElementById('seletor');

textoArea.addEventListener('input', function() {
    textoReal.innerHTML = textoArea.value;
    atualizarTamanhoFonte();
});

tipo.addEventListener('change', atualizarTamanhoFonte);

function atualizarTamanhoFonte() {
    if (tipo.value === "pequeno") {
        textoReal.style.fontSize = "15px";
    } 
    else if (tipo.value === "medio") {
        textoReal.style.fontSize = "30px";
    } 
    else if (tipo.value === "grande") {
        textoReal.style.fontSize = "60px";
    }
}