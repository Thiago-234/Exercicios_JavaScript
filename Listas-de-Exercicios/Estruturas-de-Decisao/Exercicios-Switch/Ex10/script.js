let nomeP = prompt("Digite o nome do produto: ");
let preco = parseFloat(prompt("Digite o preço do produto: "));
let tipo = prompt("Escolha o tipo do produto:\nA - para 10%\nB - para 20%\nC - para 30%");
let aliquota;

switch (tipo) {
    case "A":
        aliquota = .10;
        break;
    case "B":
        aliquota = .20;
        break;
    case "C":
        aliquota = .30;
        break;
    default:
        console.log("Tipo inválido!")
        aliquota = 0;
}

const imposto = aliquota * preco;
console.log(`O imposto posto sobre ${nomeP}, é classificado como tipo ${tipo}. O imposto é de: ${imposto}`)