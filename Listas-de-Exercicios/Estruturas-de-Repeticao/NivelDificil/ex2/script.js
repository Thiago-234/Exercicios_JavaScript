let nEscolhido = Math.floor(Math.random() * 100) + 1;
let tentativas = 7;
alert("Um número de 1 a 100 foi gerado, tente acertar!")

for (let i = 0; i < tentativas; i++) {
    let n = parseInt(prompt(`Digite um número (Você tem ${tentativas - i} tentativas restantes): `));
    
    if (n == nEscolhido) {
        alert(`Você acertou! O número era realmente ${nEscolhido}!`);
    }
    
    if (nEscolhido > 75) {
        console.log("É um número Muito Alto");
    } else if (nEscolhido < 5) {
        console.log("É um número Muito Baixo");
    } else if (Math.abs(nEscolhido - n) < 10) {
        console.log("Quente");
    } else if (Math.abs(nEscolhido - n) > 20) {
        console.log("Frio");
    } else {
        console.log("Não está nem perto!");
    }

    if (i === tentativas - 1) {
        alert(`Você não acertou! O número era ${nEscolhido}.`);
    }
}

//Math.abs(operação aritmética) -> Serve para sempre retornar um número absoluto, ou seja, positivo. Nesse problema, foi útil para, caso a diferença fosse negativa, ela iria ser positiva para ser usada nos if elses
