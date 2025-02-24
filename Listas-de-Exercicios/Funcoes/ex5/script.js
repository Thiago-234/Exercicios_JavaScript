function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); //Serve para remover caracteres não numéricos, regex

    //Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    //Calculo do primeiro digito verificador
    let soma = 0;
    let multiplicador = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito === 10 || primeiroDigito === 11) {
        primeiroDigito = 0;
    }
    if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
        return false;
    }

    //Calculo do segundo digito verificador
    soma = 0;
    multiplicador = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito === 10 || segundoDigito === 11) {
        segundoDigito = 0;
    }
    if (parseInt(cpf.charAt(10)) !== segundoDigito) {
        return false;
    }

    return true; // CPF válido
}

document.getElementById('verificar').addEventListener('click', function() {
    const cpf = document.getElementById('campoCpf').value;
    
    const info = document.getElementById('info');
    if (validarCPF(cpf)) {
        info.textContent = "CPF Válido!";
        info.style.color = "green";
    } else {
        info.textContent = "CPF Inválido!";
        info.style.color = "red";
    }
});
