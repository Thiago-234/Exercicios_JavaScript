const assentos = {
    economica: 30,
    economicaProx: 15,
    executiva: 15,
    executivaProx: 8,
    primeiraClasse: 5,
    primeiraClasseProx: 2
}

let classe = parseInt(prompt("Qual classe você deseja:\n1 - Econômica\n2 - Executiva\n3 - Primeira Classe"));
let nPassageiros = parseInt(prompt("Digite o número de passageiros para a reserva: "));
let assentosProx = prompt("É necessário assentos próximos: [s/n]?").toLowerCase();

function reservar(classe, nPassageiros, assentosProx) {
    let nClasse;
    if (classe != 1 && classe != 2 && classe != 3) {
        console.log("Perdão, mas a opção digitada para classe é inválida!")
    }
    else {
        if (assentosProx === "s") {
            let confirmaProx = parseInt(prompt("Quantos assentos precisam sem próximos?"));
            if (classe == 1) {
                nClasse = "Econômica"
                if (confirmaProx > assentos.economicaProx) {
                    console.log(`Desculpe, mas não há ${confirmaProx} assentos próximos na classe ${nClasse}`);
                }
                else if (nPassageiros > assentos.economica) {
                    console.log(`Desculpe, mas o número de passageiros excede o limite de assentos da classe ${nClasse}`)
                }
                else {
                    assentos.economicaProx -= confirmaProx;
                    assentos.economica -= nPassageiros;
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}\nAssentos próximos reservados dentre os ${nPassageiros}: ${confirmaProx}`)
                }
            }
            if (classe == 2) {
                nClasse = "Executiva"
                if (confirmaProx > assentos.executivaProx) {
                    console.log(`Desculpe, mas não há ${confirmaProx} assentos próximos na classe ${nClasse}`);
                }
                else if (nPassageiros > assentos.executiva) {
                    console.log(`Desculpe, mas o número de passageiros excede o limite de assentos da classe ${nClasse}`)
                }
                else {
                    assentos.executivaProx -= confirmaProx;
                    assentos.executiva -= nPassageiros;
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}\nAssentos próximos reservados dentre os ${nPassageiros}: ${confirmaProx}`)
                }
            }
            if (classe == 3) {
                nClasse = "Primeira Classe"
                if (confirmaProx > assentos.primeiraClasseProx) {
                    console.log(`Desculpe, mas não há ${confirmaProx} assentos próximos na classe ${nClasse}`);
                }
                else if (nPassageiros > assentos.primeiraClasse) {
                    console.log(`Desculpe, mas o número de passageiros excede o limite de assentos da classe ${nClasse}`)
                }
                else {
                    assentos.primeiraClasseProx -= confirmaProx;
                    assentos.primeiraClasse -= nPassageiros;
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}\nAssentos próximos reservados dentre os ${nPassageiros}: ${confirmaProx}`)
                }
            }
        }
        else {
            if (classe == 1) {
                nClasse = "Econômica"
                if (nPassageiros > assentos.economica) {
                    console.log(`Desculpe, mas não há ${nPassageiros} assentos na classe ${nClasse}`);
                }
                else {
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}`);
                }
            }
            if (classe == 2) {
                nClasse = "Executiva"
                if (nPassageiros > assentos.executiva) {
                    console.log(`Desculpe, mas não há ${nPassageiros} assentos na classe ${nClasse}`);
                }
                else {
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}`);
                }
            }
            if (classe == 3) {
                nClasse = "Primeira Classe"
                if (nPassageiros > assentos.primeiraClasse) {
                    console.log(`Desculpe, mas não há ${nPassageiros} assentos na classe ${nClasse}`);
                }
                else {
                    console.log(`Reserva Realizada!\nDados da reserva:\nClasse: ${nClasse}\nQuantidade de Passageiros: ${nPassageiros}`);
                }
            }
        }
    }
}
reservar(classe, nPassageiros, assentosProx);