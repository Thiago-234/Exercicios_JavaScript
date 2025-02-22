const btnVerificar = document.getElementById('verificar');
const informacao = document.getElementById('info');
const inputSenha = document.getElementById('senha');

let maiusculas = false;
let caracteres = false;
let numeros = false;

function verificarSenha() {
    let senha = inputSenha.value;

    if (senha.match(/([A-Z])/)) {
        maiusculas = true;
    }

    if (senha.match(/([0-9])/)) {
        numeros = true;
    }

    if (senha.length > 8) {
        caracteres = true;
    }

    if (maiusculas && caracteres && numeros) {
        informacao.textContent = `A senha ${senha} foi aceita, pois atende todos os requisitos!`;
    } else {
        informacao.innerHTML = `A senha ${senha} não foi aceita, pois não atende todos os requisitos!<br>`;
        if (!caracteres) {
            informacao.innerHTML += 'A senha deve conter pelo menos 8 caracteres<br>';
        }
        if (!maiusculas) {
            informacao.innerHTML += 'A senha deve conter pelo menos uma letra maiúscula<br>';
        }
        if (!numeros) {
            informacao.innerHTML += 'A senha deve conter pelo menos um número<br>';
        }
    }
}
btnVerificar.addEventListener('click', verificarSenha);
inputSenha.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarSenha();
    }
});
