const lista = document.getElementById('usuarios');
const erro = document.getElementById('erros');
const btn = document.getElementById('btn');

async function listarPrimeiro() {
    try {
        const usuarios = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!usuarios.ok) {
            throw new Error('Houve um erro ao acessar a API');
        }
        else {
            const dados = await usuarios.json();

            lista.innerHTML =
            `<li>
                <strong>Id:</strong> ${dados.id} 
                <strong>Nome:</strong> ${dados.name} 
                <strong>Email:</strong> ${dados.email}
            </li>`
        }
    }
    catch (err) {
        erro.innerHTML = err;
    }
}

btn.addEventListener('click', function () {
    listarPrimeiro();
});
