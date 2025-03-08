const lista = document.getElementById('usuarios');
const erro = document.getElementById('erros');
const btn = document.getElementById('btn');

async function listarUsuarios() {
    try {
        const usuarios = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!usuarios.ok) {
            throw new Error('Houve um erro ao acessar a API');
        }
        else {
            const dados = await usuarios.json();

            lista.innerHTML = dados.map(user =>
                `<li>
                <strong>Id:</strong> ${user.id} 
                <strong>Nome:</strong> ${user.name} 
                <strong>Email:</strong> ${user.email}
                </li>`
            ).join('');
        }
    }
    catch (err) {
        erro.innerHTML = err;
    }
}

btn.addEventListener('click', function () {
    listarUsuarios();
});