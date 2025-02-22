const resul = document.getElementById('resultado');
const calc = document.getElementById('calcular');

function calcularImc(){
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = peso / (altura * altura);

    resul.textContent = `Classificação: `;

    if(imc < 18.5) {
        resul.textContent += `Abaixo do peso`;
    }
    else if(imc >= 18.5 && imc < 24.9) {
        resul.textContent += `Peso normal`;
    }
    else if(imc >= 25 && imc < 29.9) {
        resul.textContent += `Sobrepeso`;
    }
    else if(imc >= 30 && imc < 34.9) {
        resul.textContent += `Obesidade grau I`;
    }
    else if(imc >= 35 && imc < 39.9) {
        resul.textContent += `Obesidade grau II`;
    }
    else {
        resul.textContent += `Obesidade grau III`;
    }
}
calc.addEventListener('click', calcularImc);
