alert("Olhe o console!")
function ehNumeroArmstrong(numero) {
    let digitos = numero.toString().split('');
    let soma = digitos.reduce((soma, digito) => soma + Math.pow(Number(digito), 3), 0);
    return soma === numero;
}

for (let numero = 100; numero <= 999; numero++) {
    if (ehNumeroArmstrong(numero)) {
        console.log(numero);
    }
}
