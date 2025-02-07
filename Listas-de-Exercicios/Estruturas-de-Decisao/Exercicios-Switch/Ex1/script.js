let medida = parseFloat(prompt("Digite o valor de medida: "));
let unidade = prompt(`Digite uma unidade de unidade para ${medida} (mi, m, ft, km)`);
let conversao = prompt("Você deseja converter para\n- Milhas\n- Metros\n- Pés\n- Quilômetro");

let resul;
switch (unidade) {
    case "km":
        switch (conversao) {
            case "Milhas":
                resul = medida * 0.621371;
                break;
            case "Metros":
                resul = medida * 1000;
                break;
            case "Pés":
                resul = medida * 3280.84;
                break;
            case "Quilômetro":
                resul = medida;
                break;
            default:
                console.log("Unidade inválida!");
        }
        break;
    case "ft":
        switch (conversao) {
            case "Milhas":
                resul = medida / 5280;
                break;
            case "Metros":
                resul = medida * 0.3048;
                break;
            case "Quilômetro":
                resul = medida / 3280.84;
                break;
            default:
                console.log("Unidade inválida!");
        }
        break;
    case "m":
        switch (conversao) {
            case "Milhas":
                resul = medida / 1609.34;
                break;
            case "Pés":
                resul = medida * 3.28084;
                break;
            case "Quilômetro":
                resul = medida / 1000;
                break;
            default:
                console.log("Unidade inválida!");
        }
        break;
    case "mi":
        switch (conversao) {
            case "Metros":
                resul = medida * 1609.34;  
                break;
            case "Pés":
                resul = medida * 5280;  
                break;
            case "Quilômetro":
                resul = medida * 1.60934;  
                break;
            default:
                console.log("Unidade inválida!");
        }
        break;
    default:
        console.log("Unidade inválida!");
}

console.log(`Resultado da conversão: ${resul} ${conversao}(s)`);
