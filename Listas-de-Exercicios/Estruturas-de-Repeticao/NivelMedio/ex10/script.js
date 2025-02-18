function piramideAsteriscos(base) {
    for (let i = 1; i <= base; i++) {
        // Imprime espaços em branco
        let espacos = ' '.repeat(base - i);
        // Imprime asteriscos
        let asteriscos = '*'.repeat(2 * i - 1);
        // Exibe a linha da pirâmide
        alert("Olhe o console!")
        console.log(espacos + asteriscos);
    }
}

piramideAsteriscos(5);
