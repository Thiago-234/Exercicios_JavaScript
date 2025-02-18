let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let numerosOrdenados = bubbleSort(numeros);
console.log("Números ordenados:", numerosOrdenados);