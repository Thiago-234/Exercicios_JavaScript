let palavra = prompt("Digite uma palavra:");
let contadorVogais = 0;

// Loop para percorrer cada letra da palavra
for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i].toLowerCase();

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadorVogais++;
  }
}

alert(`A palavra "${palavra}" tem ${contadorVogais} vogais.`);
