const exi = document.getElementById('exibicao');

const p1 = new Promise((resolve, reject) => {
   setInterval(()=>{
       resolve("Promise 1 realizada!")
   },1000)
});

const p2 = new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve("Promise 2 realizada!")
    },2000)
});

const resolveAll = Promise.all([p1, p2]).then((resposta) => {
    exi.innerHTML = `Resultado das promises: <br> ${resposta}`
})