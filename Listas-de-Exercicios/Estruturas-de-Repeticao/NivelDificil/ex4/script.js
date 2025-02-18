function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function binomialCoeficiente(a, b) {
    return fatorial(a) / (fatorial(b) * fatorial(a - b));
}

function imprimirTrianguloPascal(linhas) {
    for (let i = 0; i < linhas; i++) {
        let linha = '';
        for (let j = 0; j <= i; j++) {
            linha += binomialCoeficiente(i, j) + ' ';
        }
        console.log(linha);
    }
}

imprimirTrianguloPascal(5);
