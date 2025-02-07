let opc;
do{
    let n1 = parseFloat(prompt("Digite o valor do primeiro número: "));
    let n2 = parseFloat(prompt("Digite o valor do segundo número: "));
    
    opc = parseInt(prompt("Selecione uma operação: \n[1] - Soma\n[2] - Subtração\n[3] - Multiplicação\n[4] - Divisão\n[5] - Raiz Quadrada\n[6] - Potenciação\n[7] - Módulo\n[8] - Cancelar"));
    
    switch (opc) {
        case 1:
            console.log("Soma = " + (n1 + n2))
            break;
        case 2:
            console.log("Subtração = " + (n1 - n2))
            break;
        case 3:
            console.log("Multiplicação = " + (n1 * n2))
            break;
        case 4:
            console.log("Divisão = " + (n1 / n2))
            break;
        case 5:
            let opc2 = parseInt(prompt(`Calcular a Raiz Quadrada de ${n1} ou ${n2}`));
            if (opc2 == n1) {
                console.log(`Raiz Quadrada de ${n1} é = ` + Math.sqrt(n1, 2))
            }
            else if (opc2 == n2) {
                console.log(`Raiz Quadrada de ${n2} é = ` + Math.sqrt(n2, 2))
            }
            else {
                console.log("Escolha Inválida!")
            }
            break;
        case 6:
            let opc3 = parseInt(prompt(`Calcular a Potência de ${n1} ou ${n2}`));
            if (opc3 == n1) {
                let qtdP = parseFloat(prompt(`Deseja elevar ${n1} a quanto? `));
                console.log(`${n1} elevado a ${qtdP} = ` + Math.pow(n1, qtdP));
            }
            else if (opc3 == n2) {
                let qtdP = parseFloat(prompt(`Deseja elevar ${n2} a quanto? `));
                console.log(`${n2} elevado a ${qtdP} = ` + Math.pow(n2, qtdP))
            }
            else {
                console.log("Escolha Inválida!")
            }
            break;
        case 7:
            console.log(`O módulo de ${n1} por ${n2} = ` + (n1 % n2));
            break;
        case 8:
            console.log("Programa encerrado!");
            break;
        default:
            console.log("Escolha Inválida")
    }
}
while (opc != 8);