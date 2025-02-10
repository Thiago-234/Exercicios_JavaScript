function fatorial() {
    const resultado = document.getElementById("resul");
    const n = document.getElementById("nFatorial").value;

    if (n < 0) {
        resultado.innerHTML = "Por favor, insira um número maio que 0";
    }
    else{
        let fatorial = 1;
        for (let i = n; i > 0; i--) {
            fatorial *= i;
        }
    
        resultado.innerHTML = `O fatorial de ${n} é ${fatorial}`;
    }

}
