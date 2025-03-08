const input = document.getElementById('cep');
const btn = document.getElementById('btn');
const info = document.getElementById('info');

async function buscarCep() {
    try {
        const inputValue = input.value.trim();
        const cep = await fetch(`https://viacep.com.br/ws/${inputValue}/json/`);

        if (!cep.ok) {
            throw new Error(`CEP ${inputValue} não encontrado`);
        }

        const dados = await cep.json();
        info.innerHTML =
            `<li>
                <strong>CEP:</strong> ${dados.cep} 
                <strong>Logradouro:</strong> ${dados.logradouro} 
                <strong>Bairro:</strong> ${dados.bairro} 
                <strong>Localidade:</strong> ${dados.localidade} 
            </li>`

    }
    catch (erro) {
        alert("Verifique o console")
        console.log(erro);
    }
}

btn.addEventListener('click', function(){
    buscarCep();
});