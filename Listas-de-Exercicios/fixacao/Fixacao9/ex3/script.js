const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const btnEnviar = document.getElementById("btnMandar");
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();  //Previne o envio

    const nome = inputNome.value;
    const email = inputEmail.value;

    if (nome && email) {
        alert(`Dados enviados com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});