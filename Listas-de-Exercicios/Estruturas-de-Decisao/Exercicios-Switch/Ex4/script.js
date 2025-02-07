let lados = parseInt(prompt("Digite o número de lados: "));

switch (lados) {
    case 3:
        console.log(`${lados} lados formam um Triângulo`);
        break;
    case 4:
        console.log(`${lados} lados formam um Quadradrilátero`);
        break;
    case 5:
        console.log(`${lados} lados formam um Pentágono`);
        break;
    case 6:
        console.log(`${lados} lados formam um Hexágono`);
        break;
    case 7:
        console.log(`${lados} lados formam um Heptágono`);
        break;
    case 8:
        console.log(`${lados} lados formam um Octágono`);
        break;
    default:
        console.log("Número de lados inválido!");
}