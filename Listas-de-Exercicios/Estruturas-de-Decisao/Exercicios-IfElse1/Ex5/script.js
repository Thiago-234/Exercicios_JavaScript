let saldo = 1000;

function depositar(dp){
    saldo += dp;
}
function sacar(sc){
    if(sc > saldo){
        console.log("Operação cancelada, pois o saldo é insuficiente")
    }
    else{
        saldo -=sc;
    }
}
let opc;
do{
    opc = parseInt(prompt("Selecione uma operação abaixo:\n[1] - Para realizar um depósito\n[2] - Para realizar um saque\n[3] - Para vizualizae informações da conta\n[4] - Sair"));

    if (opc == 1){
       let dp = parseFloat(prompt("Digite o valor do depósito: "));
        depositar(dp);
    }
    else if(opc == 2){
        let sc = parseFloat(prompt("Digite o valor do saque: "));
        sacar(sc);
    }
    else if(opc == 3) {
        console.log(`Saldo atual: ${saldo}`)
    }
    else if(opc == 4){
        console.log("Programa encerrado")
    }
    else{
        console.log("Opção selecionada inválida")
    }
}
while(opc != 4);
