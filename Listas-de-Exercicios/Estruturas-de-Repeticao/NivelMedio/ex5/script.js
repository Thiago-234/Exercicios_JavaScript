let maiorNumero;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));

  if (i == 1 || numero > maiorNumero) {
    maiorNumero = numero;
  }
}

alert(`O maior número inserido é: ${maiorNumero}`);
