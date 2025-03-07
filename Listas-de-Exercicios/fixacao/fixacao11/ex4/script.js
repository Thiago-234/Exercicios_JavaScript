const exi = document.getElementById('exibicao');

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 de 1 segundo!");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 de 2 segundos!");
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 de 3 segundos!");
    }, 3000);
});

p1.then((result1) => {
    exi.innerHTML += result1 + "<br>";
    return p2;
}).then((result2) => {
    exi.innerHTML += result2 + "<br>";
    return p3;
}).then((result3) => {
    exi.innerHTML += result3 + "<br>";
});