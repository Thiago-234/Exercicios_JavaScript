let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let media = (n1 * 1 + n2 * 2 + n3 * 3) / (1 + 2 + 3);

if (n1 == 0 || n2 == 0 || n3 == 0) {
    console.log("Desqualificado! pois uma das notas foi 0!")
}
else {
    if (media >= 9) {
        console.log("Média: " + media + "\nDesempenho Excelente!")
    }
    else if (media >= 7 && media <= 9) {
        console.log("Média: " + media + "\nDesempenho Bom!")
    }
    else if (media >= 5 && media < 7) {
        console.log("Média: " + media + "\nDesempenho Regular!")
    }
    else if (media < 5) {
        console.log("Média: " + media + "\nDesempenho Ruim!")
    }
}
