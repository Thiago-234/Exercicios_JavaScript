let lado1 = parseFloat(prompt("Digite o número do lado 1 de um triângulo: "))
let lado2 = parseFloat(prompt("Digite o número do lado 2 de um triângulo: "))
let lado3 = parseFloat(prompt("Digite o número do lado 3 de um triângulo: "))

if((lado1 + lado2) < lado3){
    console.log("Devido a soma dos lados 1 e 2 serem menores que o lado 3, não é possível formar um triângulo")
}
else{
    if(lado1 == lado2 && lado1 == lado3){
        console.log(`Os valores ${lado1}, ${lado2} e ${lado3} formam um Triângulo Equilátero`)
    }
    else if(lado1 == lado2 && lado1 != lado3){
        console.log(`Os valores ${lado1}, ${lado2} e ${lado3} formam um Triângulo Isósceles`)
    }
    else if(lado1 != lado2 && lado1 != lado3){
        console.log(`Os valores ${lado1}, ${lado2} e ${lado3} formam um Triângulo Escaleno`)
    }
}