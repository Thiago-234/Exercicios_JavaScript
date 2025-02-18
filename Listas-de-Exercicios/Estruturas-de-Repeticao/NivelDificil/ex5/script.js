let decimal = parseInt(prompt("Digite um número decimal:"));
let binario = '';
let num = decimal;

while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
}

console.log(`O número decimal ${decimal} convertido em binário é: ${binario}`);
