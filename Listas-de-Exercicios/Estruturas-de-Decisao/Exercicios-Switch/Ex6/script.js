const produtos = [];
let opc;

do {
    opc = parseInt(prompt("Escolha uma opção:\n[1] - Cadastrar\n[2] - Editar\n[3] - Excluir\n[4] - Listar Todos\n[0] - Sair"))

    switch (opc) {
        case 1:
            let nome = prompt("Digite o nome do produto: ");
            let preco = parseFloat(prompt("Digite o preço do produto: "));

            produtos.push({
                nome: nome,
                preco: preco
            });
            console.log("Produto cadastrado!")
            break;
            
        case 2:
            let nomeE = prompt("Digite o nome do produto que deseja editar: ");
            let pEditar = produtos.find(produto => produto.nome.toLowerCase() === nomeE.toLowerCase());

            if (pEditar) {
                let nomeNovo = prompt("Digite o novo nome: ");
                let precoNovo = parseFloat(prompt("Digite o novo nome: "));

                pEditar.nome = nomeNovo;
                pEditar.preco = precoNovo;
                console.log("Produto atualizado!")
            }
            else {
                console.log("Produto não encontrado!")
            }
            break;

        case 3:
            let nomeExcluir = prompt("Digite o nome do produto que deseja excluir: ")
            let indiceExcluir = produtos.findIndex(produto => produto.nome.toLowerCase() === nomeExcluir.toLowerCase());    //Ele pega o indice do item pelo nome do produto. Por exemplo, se existe um item chamado "Arroz", e e eu quero excluir ele, basta digitar arroz que ele retornará o seu indice (0, 1, 2 ou etc) para realizar a exclusão 

            if (indiceExcluir != -1) {
                produtos.splice(indiceExcluir, 1);
                console.log("Produto excluído com sucesso!");
            } else {
                console.log("Produto não encontrado!");
            }
            break;

        case 4:
            if (produtos.length == 0) {
                console.log("Nenhum produto cadastrado")
            }
            else {
                for (let i = 0; i < produtos.length; i++) {
                    console.log(produtos[i])
                }
            }
            break;

        default: console.log("Opção inválida!")
    }
} while (opc != 0);