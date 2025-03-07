const exi = document.getElementById('exibicao');

const p1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise 1, que possui tempo de 5 segundos')
    }, 5000)
});
const p2 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise 2, que possui tempo de 3 segundos')
    }, 3000)
});
const p3 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise 3, que possui tempo de 6 segundos')
    }, 6000)
});

const promiseRace = Promise.race([p1, p2, p3]).then((resposta) => {
    exi.innerHTML += resposta
})