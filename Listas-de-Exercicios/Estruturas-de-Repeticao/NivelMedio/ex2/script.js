function somarImpares() {
    const resultado = document.getElementById("resul");
    let soma = 0;

    for (let i = 1; i <= 100; i++){
        if(i % 2 == 1){
            soma += i;
            resultado.innerHTML = soma
        }
    }
}