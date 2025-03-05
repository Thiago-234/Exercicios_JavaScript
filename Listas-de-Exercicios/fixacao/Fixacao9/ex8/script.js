const t = document.getElementById('texto');

// Função que altera a cor de fundo com base na rolagem
window.addEventListener('scroll', function() {
    // Obtemos a posição de rolagem da página
    const scrollY = window.scrollY;

    // Definir a cor de fundo com base na posição de rolagem
    if (scrollY > 100) {
        t.style.backgroundColor = '#FF6347'; // Cor de fundo vermelha
    } else {
        t.style.backgroundColor = '#87CEEB'; // Cor de fundo azul
    }
});