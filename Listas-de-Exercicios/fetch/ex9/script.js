const btn = document.getElementById('btn');
const usuarios = document.getElementById('usuarios');

// Função para listar apenas o primeiro usuário
async function listarPrimeiroUsuario() {
    try {
        const usuario = await fetch('https://randomuser.me/api/?results=5&nat=BR');
    
        if (!usuario.ok) {
            throw new Error('Ocorreu um erro ao acessar a API!');
        }
    
        const info = await usuario.json();

        usuarios.innerHTML = '';

        const user = info.results[0];  // Deve ser passado o "id" aqui pois é um array

        const userElement = document.createElement('div');
        userElement.innerHTML = `
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <img src="${user.picture.large}" alt="Foto do usuário" width="100">
        `;

        usuarios.appendChild(userElement);

    } catch (erro) {
        alert('Verifique o console');
        console.log(erro);
    }
}

btn.addEventListener('click', function() {
    listarPrimeiroUsuario();
});
