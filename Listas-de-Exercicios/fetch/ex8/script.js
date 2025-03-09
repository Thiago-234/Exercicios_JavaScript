const btn = document.getElementById('btn');
const usuarios = document.getElementById('usuarios');

async function listarUsuarios() {
    try{
        const users = await fetch('https://randomuser.me/api/?results=5&gender=male&nat=BR');  //Para listar mulheres mude para gender=female
    
        if(!users.ok){
            throw new Error('Ocorreu um erro ao acessa a API!');
        }
    
        const info = await users.json();
    
        info.results.forEach(user => {
            const userElement = document.createElement('div');
            userElement.innerHTML = `
                <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <img src="${user.picture.large}" alt="Foto do usuário"    width="100">
            `;
            usuarios.appendChild(userElement);
        });

    }
    catch (erro){
        alert('Verifique o console')
        console.log(erro)
    }
}

btn.addEventListener('click', function() {
    listarUsuarios();
});