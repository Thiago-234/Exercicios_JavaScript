let maiusculas = false
let minusculas = false
let caractereEspecial = false
let numeros = false
let qtdMin = false

do{
    let senha = prompt("Digite uma senha para validação, a senha deve conter:\nNo minímo 8 caracteres\nPelo menos 1 letra maiúscula\nPelo menos 1 letra minúscula\nPelo menos 1 número\nPelo menos um caractere especial (!@#$%^&*) ");
    
    
    if (senha.match(/([A-Z])/)) {
        maiusculas = true;
    }
    if (senha.match(/([a-z])/)) {
        minusculas = true;
    }
    if (senha.match(/([!@#$%^&*])/)) {
        caractereEspecial = true;
    }
    if (senha.match(/([0-9])/)) {
        numeros = true;
    }
    if (senha.length > 8) {
        qtdMin = true;
    }
    
    if(maiusculas == true && minusculas == true && caractereEspecial == true && numeros == true && qtdMin == true){
        console.log(`A senha foi aceita, pois possui todas as condições: ${senha}`)
    }
    else{
        console.log("A senha não pode ser aceita, pois falta ou faltam algumas condições a serem cumpridas, como: ")
        if(!maiusculas){
            console.log("Ter no mínimo uma letra maiuscula")
        }
        if(!minusculas){
            console.log("Ter no mínimo uma letra minuscula")
        }
        if(!caractereEspecial){
            console.log("Ter no mínimo um caractere especial")
        }
        if(!numeros){
            console.log("Ter no mínimo um número")
        }
        if(!maiusculas){
            console.log("Ter no mínimo 8 caracteres")
        }
    }
} while (maiusculas == false || minusculas == false || caractereEspecial == false || numeros == false || qtdMin == false)
 

