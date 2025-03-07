const exi = document.getElementById('exibicao');

const p1 = new Promise((resolve, reject) => {
    const numero = Math.random();

    setInterval(() => {
        resolve(`Número gerado ${numero}`);
    },1000);
})
const p2 = new Promise((resolve, reject) => {
    const numero = Math.random();

    setInterval(() => {
        resolve(`Número gerado ${numero}`);
    },2000);
})
const p3 = new Promise((resolve, reject) => {
    const numero = Math.random();

    setInterval(() => {
        resolve(`Número gerado ${numero}`);
    },3000);
})

async function exemplo() {
    const primeiro = await p1;
    exi.innerHTML = `Promise 1: ${primeiro}`;

    const segundo = await p2;
    exi.innerHTML = `Promise 2: ${segundo}`;

    const terceiro = await p3;
    exi.innerHTML = `Promise 3: ${terceiro}`;
}

exemplo();