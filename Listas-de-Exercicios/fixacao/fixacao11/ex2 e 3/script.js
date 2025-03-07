alert("É possivel mudar a forma como as requisições são feitas, por função normal ou async await function\nBasta descomentar o botão da função normal e comentar a função e o botão da async await")

// Exercício 2
const exi = document.getElementById('resposta');
const btn = document.getElementById('btn');

function requisicao() {
    const promise = new Promise((resolve, reject) => {
        const teste = Math.random();  // Gera um número para teste de 50%
        
        setTimeout(() => {
            if(teste > 0.5){ // Simula uma porcentagem de chance apenas para teste de 50%
                resolve('Requisição realizada com sucesso!');
            }
            else{
                reject('Erro na requisição! Tente novamente mais tarde');
            }
        }, 3000); // Tempo de 3 segundos
    });
    
    return promise;
}

// btn.addEventListener('click', function() {
//     requisicao().then((resposta) =>{
//         exi.innerHTML = `Sua resposta = ${resposta}`;
//     }).catch((erro) =>{
//         exi.innerHTML = `Houve um erro = ${erro}`
//     })
// });

// Exercício 3
async function realizarRequisicao(){
    try {
        const resposta = await requisicao(); // Espera a resposta da função anterior
        exi.innerHTML = `Sua resposta: ${resposta}`;  // Mostra se deu certo
    }
    catch(erro){
        exi.innerHTML = `Houve um erro: ${erro}`;  // Mostra se deu errado
    }
}
btn.addEventListener('click', function() {
    realizarRequisicao(); 
});
