let mes = prompt("Digite o mês: ")
let data = parseInt(prompt("Digite a data do mês: "))
let ano = parseInt(prompt("Digite o ano: "))
let bissexto;

function verificaBissexto() {
    if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
        bissexto = true;
        console.log(`O ano ${ano} é bissexto`)
    }
    else {
        console.log(`O ano ${ano} não é bissexto`)
        bissexto = false;
    }
}

if (ano < 1) {
    console.log("O ano é inválido!")
}
else {
    verificaBissexto();
    switch (mes) {
        case "Janeiro": case "Março": case "Maio": case "Julho": case "Agosto": case "Outubro": case "Dezembro":
            if (data < 1 || data > 31) {
                console.log(`A data fornecida é menor ou maior que a quantidade que há no mês de ${mes}`)
            }
            else {
                console.log(`A data ${data} de ${mes} de ${ano} é válida!`)
            }
            break;
        case "Fevereiro":
            if (data == 29 && bissexto == false) {
                console.log(`O ano ${ano} não é bissexto para Fevereiro ter 29 dias.`);
            } 
            else if (data == 29 && bissexto == true) {
                console.log(`A data ${data} de Fevereiro de ${ano} é válida!`);
            } 
            else if (data < 1 || data > 28) {
                console.log(`A data fornecida é menor ou maior que a quantidade de dias que há no mês de Fevereiro.`);
            } 
            else {
                console.log(`A data ${data} de Fevereiro de ${ano} é válida!`);
            }
            break;
        case "Abril": case "Junho": case "Setembro": case "Novembro":
            if (data < 1 || data > 30) {
                console.log(`A data fornecida é menor ou maior que a quantidade que há no mês de ${mes}`)
            }
            else {
                console.log(`A data ${data} de ${mes} de ${ano} é válida!`)
            }
            break;
        default:
            console.log("Mês inválido para validação")
    }
}
