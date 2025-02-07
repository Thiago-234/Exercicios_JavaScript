let c = parseFloat(prompt("Digite o valor do capital: "));
let taxaAnual = parseFloat(prompt("Digite o número da taxa anual (%): "));
let tempoAnos = parseFloat(prompt("Digite o tempo em anos: "));
let frqCapitalizacao = parseInt(prompt("Digite a frequência de capitalização: "));

let tAnual = taxaAnual / 100;

let montanteFinal = c * Math.pow(1 + (tAnual / frqCapitalizacao), frqCapitalizacao * tempoAnos);

let lucro = montanteFinal - c;

console.log(`O investimento após ${tempoAnos} anos foi de R$ ${montanteFinal.toFixed(2)}. Um lucro de R$ ${lucro.toFixed(2)} foi obtido!`);

//toFixed(quantidade de casas) -> Serve para dizer quantas casas depois da virgula apareçam caso o resultado seja de um número decimal

