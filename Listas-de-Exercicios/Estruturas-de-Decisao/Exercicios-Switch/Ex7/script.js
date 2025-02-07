let conceito = prompt("Digite um conceito (A, B, C, D ou F): ");

switch (conceito.toUpperCase()) {
    case "A":
        console.log("Conceito A - Excelente!");
        break;
    case "B":
        console.log("Conceito B - Bom!");
        break;
    case "C":
        console.log("Conceito C - Regular!");
        break;
    case "D":
        console.log("Conceito D - Ruim!");
        break;
    case "F":
        console.log("Conceito F - Insuficiente!");
        break;
    default:
        console.log("Conceito inválido!")
}