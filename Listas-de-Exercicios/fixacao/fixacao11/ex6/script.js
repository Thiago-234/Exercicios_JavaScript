const exi = document.getElementById('exibicao');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

async function fazerRequisicao() {
    const inputValue = input.value; //Pega o número para pesquisa na API
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputValue}`);  // Faz a requisição na API com base no número inserido no input
        
        if (!response.ok) {
            throw new Error('Erro ao acessar a API');
        }
        
        const info = await response.json();
        
        exi.innerHTML = `Id: ${info.id} <br>
                         Title: ${info.title} <br>
                         Completed: ${info.completed}`;
    } catch (erro) {
        exi.innerHTML = `Houve um erro: ${erro.message}`;
    }
}

btn.addEventListener('click', function() {
    fazerRequisicao();
});
