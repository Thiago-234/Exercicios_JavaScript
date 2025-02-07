//Regex de variavel: /\b(let|const|var)\s+\w+/
// \b -> É o limite de palavra. Ou seja, ele garante que let, var ou const sejam buscadas separadamente, não como palavras junto de outras, como letal, variado ou constante
// (let|const|var) -> Siginifica "encontre let, const ou var"
// \s+ -> Ele buscar por um ou mais espaços depois de escrever (nesse caso encontrar) as declaraões let, const ou var
// \w ou /w+ -> O /w Corresponde a letras e números, e o + do /w+ que pode haver pelo menos letras ou números
// Vai buscar algo semelhante a isso:
// let x = 10;
// const nome = "Thiago";
// var idade = 17;

// Regex de loop: regexLoop = /\b(for|while)\s?\(.*\)\s?\{/;
// \b -> É o limite de palavra. Ou seja, ele garante que let, var ou const sejam buscadas separadamente, não como palavras junto de outras, como foram, forem, whiley
// (for|while) -> Siginifica "encontre let, const ou var"
// \s? -> Quer dizer que pode haver um espaço após as palavras chave (for ) ou (while )
//\( -> Garante que o parênteses de abertura esteja presente
// .* -> Diz que há um conteúdo entre os parênteses
// \) -> Significa que há um parênteses de fechamento
// \{ -> Significa que há uma chave de abertura de código
// Vai buscar algo semelhante a isso:
// for(let i = 0; i < 10; i++){ } ou for (let i = 0; i < 10; i++) { }
// while(x < 10) {} ou while (x < 10) { }

//Regex de condicional: regexCondicional = /\bif\s?\(.*\)\s?\{/;
// \b -> Busca a palavra If separada de outras
// if -> Procura pela palarva-chave "if"
// \s? -> Significa que pode haver um espaço adicional após um if (ou não)
// \( -> Garante que o parênteses de abertura esteja presente
// .* -> Diz que há um conteúdo entre os parênteses
// \) -> Significa que há um parênteses de fechamento
// \( -> Garante que o parênteses de abertura esteja presente (if(condicao))
// \{ -> Significa que há uma chave de abertura de código
// Via buscar algo semelhante a isso:
// if(idade < 10){} ou if (idade < 10) {}

//Regex de função: regexFuncao = /\bfunction\s+\w+\s?\(.*\)\s?\{/;
// \b -> Busca a palavra function separada de outras
// if -> Procura pela palarva-chave "function"
// \s+ -> Ele buscar por um ou mais espaços depois de escrever function
// \w+ -> Encontra o nome da função, válido
// \s? -> Espaço opcional após o nome da função
// \( -> Garante que o parênteses de abertura esteja presente após o nome da função (function nome())
// .* -> Procura se há conteúdo dentro dos parênteses da função, parâmetros (SE houver)
// \) -> Significa que há um parênteses de fechamento
// \s? -> Espaço opcional após fechamento dos parênteses
// \{ -> Significa que há uma chave de abertura de código

let codigo = prompt("Digite seu código (pode ser pseudocódigo): ");
let pontuacao = 0;

let regexVariavel = /\b(let|const|var)\s+\w+/;
let regexLoop = /\b(for|while)\s?\(.*\)\s?\{/;
let regexCondicional = /\bif\s?\(.*\)\s?\{/;
let regexFuncao = /\bfunction\s+\w+\s?\(.*\)\s?\{/;

let temVariavel = regexVariavel.test(codigo);
let temLoop = regexLoop.test(codigo);
let temCondicional = regexCondicional.test(codigo);
let temFuncao = regexFuncao.test(codigo);

if (temVariavel) {
    console.log("Seu código contém declaração de variável.");
    pontuacao++
} else {
    console.log("Seu código não contém declaração de variável.");
}

if (temLoop) {
    console.log("Seu código contém um loop.");
    pontuacao++
} else {
    console.log("Seu código não contém um loop.");
}

if (temCondicional) {
    console.log("Seu código contém uma estrutura condicional.");
    pontuacao++
} else {
    console.log("Seu código não contém estrutura condicional.");
}

if (temFuncao) {
    console.log("Seu código contém uma função.");
    pontuacao++
} else {
    console.log("Seu código não contém uma função.");
}

let avaliacao;

if (pontuacao == 4) {
    avaliacao = "Bom";
}
else if (pontuacao == 3) {
    avaliacao = "Regular";
}
else {
    avaliacao = "Ruim";
}

console.log("Avaliação Final: " + avaliacao);
