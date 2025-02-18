let total = 0;
let i;
let nota;
for (i = 1; i <=3; i++){
    nota = parseFloat(prompt(`Digite a ${i}ª nota: `));

  total+= nota;
}
let media = total / 3;
prompt(`A média de notas é ${media}`)