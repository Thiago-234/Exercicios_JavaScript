let jogadorVenceu = false;

do{
    let jogada = prompt("Escolha entre\n- Pedra\n- Papel\n- Tesoura")
    let sorteioJogada = Math.floor(Math.random() * 3);
    
    let jogadaMaquina;
    
    switch (sorteioJogada) {
        case 0:
        jogadaMaquina = "Pedra"
        if (jogada == "Tesoura"){
            console.log(`O computador venceu, pois jogou ${jogadaMaquina} e o jogador jogou Tesoura`)
        }
        else{
            jogadorVenceu = true;
            console.log(`O jogador venceu, pois jogou Papel e o computador jogou ${jogadaMaquina}`)
        }
            break;
        case 1:
        jogadaMaquina = "Papel"
        if (jogada == "Pedra"){
            console.log(`O computador venceu, pois jogou ${jogadaMaquina} e o jogador jogou Pedra`)
        }
        else{
            jogadorVenceu = true;
            console.log(`O jogador venceu, pois jogou Tesoura e o computador jogou ${jogadaMaquina}`)
        }
            break;
        case 2:
        jogadaMaquina = "Tesoura"
        if (jogada == "Papel"){
            console.log(`O computador venceu, pois jogou ${jogadaMaquina} e o jogador jogou Papel`)
        }
        else{
            jogadorVenceu = true;
            console.log(`O jogador venceu, pois jogou Pedra e o computador jogou ${jogadaMaquina}`)
        }
            break;
        default:
            console.log("Jogada inválida!")
    }
} while(jogadorVenceu != true)