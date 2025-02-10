const resultado = document.getElementById("resul");

let atual = 0;
let prox = 1;
let i = 1;

while (i < 11) {
    resultado.innerHTML +=`${i}º = ` + atual + "<br>";
    [atual, prox] = [prox, atual + prox];
    i++;
}