const corIngles = document.getElementById("color");
const c = document.getElementById("cor");
const traduz = document.getElementById("traduzir")

function traduzir() {
    switch (corIngles.value.toLowerCase()) {
        case "blue":
            c.innerHTML = "Azul";
            c.style.background = "blue"
            c.style.color = "white"
            break;
        case "red":
            c.innerHTML = "Vermelho";
            c.style.background = "red"
            c.style.color = "white"
            break;
        case "green":
            c.innerHTML = "Verde";
            c.style.background = "green"
            c.style.color = "white"
            break;
        case "black":
            c.innerHTML = "Preto";
            c.style.background = "black"
            c.style.color = "white"
            break;
        case "white":
            c.innerHTML = "Branco";
            c.style.background = "white"
            c.style.color = "black"
            c.style.border = "1px solid black"
            break;
        case "pink":
            c.innerHTML = "Rosa";
            c.style.background = "pink"
            c.style.color = "white"
            break;
        case "violet":
            c.innerHTML = "Violeta";
            c.style.background = "violet"
            c.style.color = "white"
            break;
        case "yellow":
            c.innerHTML = "Amarelo";
            c.style.background = "yellow"
            c.style.color = "white"
            break;
        case "gray":
            c.innerHTML = "Cinza";
            c.style.background = "gray"
            c.style.color = "white"
            break;
        case "purple":
            c.innerHTML = "Roxo";
            c.style.background = "purple"
            c.style.color = "white"
            break;
        default:
            c.innerHTML = "Cor não registrada";
            c.style.background = "none"
            c.style.color = "black"
            break;
    }
}
corIngles.addEventListener("keyup", function (event) {
    //Se teclou enter, ele funciona
    if (event.keyCode === 13) {
        traduz.click()
    };
})