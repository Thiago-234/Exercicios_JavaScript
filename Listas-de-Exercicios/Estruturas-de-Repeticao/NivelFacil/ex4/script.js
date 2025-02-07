const soma = document.getElementById("somaNums");

let somaNs = 0;
for (let i = 1; i <= 5; i++){
    somaNs += i;
    soma.innerHTML = somaNs;
}