function tabuada() {
    const n = document.getElementById("nTabuada").value;
    const resultado = document.getElementById("resul");

    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += n + " x " + i + " = " + (n * i) + "<br>"
    }
}