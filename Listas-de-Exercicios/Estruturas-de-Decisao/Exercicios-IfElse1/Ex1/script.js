let kg = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura em M: "));
let idade = parseInt(prompt("Qual sua idade?"))
let classificacao;
let imc = kg / Math.pow(altura, 2);

if (imc < 18.5) {
    classificacao = "Abaixo do peso"
}
else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Normal"
}
else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso"
}
else if (imc >= 30 && imc <= 34.9) {
    classificacao = "Obesidade I"
}
else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade II"
}
else {
    classificacao = "Obesidade III"
}

if (idade > 65) {
    if (classificacao == "Normal") {
        classificacao = "Abaixo do peso";
    }
    else if (classificacao == "Sobrepeso") {
        classificacao = "Normal";
    }
    else if (classificacao == "Obesidade I") {
        classificacao = "Sobrepeso";
    }
    else if (classificacao == "Obesidade II") {
        classificacao = "Obesidade I";
    }
    else if (classificacao == "Obesidade III") {
        classificacao = "Obesidade II";
    }
}

console.log(`Dados de cálculo:\nAltura: ${altura}\nPeso: ${kg}\nImc: ${imc}\nClassificação: ${classificacao}`);
