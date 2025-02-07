const filmes = [
    { titulo: "Vingadores: Ultimato", genero: "ação", ano: 2019, ator: "Robert Downey Jr." },
    { titulo: "Deadpool", genero: "ação", ano: 2016, ator: "Ryan Reynolds" },
    { titulo: "Jumanji: Bem-vindo à Selva", genero: "comédia", ano: 2017, ator: "Dwayne Johnson" },
    { titulo: "O Rei Leão", genero: "drama", ano: 1994, ator: "Matthew Broderick" },
    { titulo: "O Regresso", genero: "drama", ano: 2015, ator: "Leonardo DiCaprio" },
    { titulo: "Inception", genero: "ação", ano: 2010, ator: "Leonardo DiCaprio" },
    { titulo: "Gladiador", genero: "ação", ano: 2000, ator: "Russell Crowe" }
];

// 2. Receber as preferências do usuário
let genero = prompt("Qual o seu gênero favorito? (ação, comédia, drama)");
let ano = prompt("Você prefere filmes lançados antes ou depois de 2010? (antes/depois)");
let ator = prompt("Qual é o seu ator favorito? (opcional)");

// 3. Filtrar os filmes com base nas preferências
function recomendarFilme(genero, ano, ator) {
    let filmesFiltrados = filmes;

    // Filtrar por gênero
    if (genero) {
        filmesFiltrados = filmesFiltrados.filter(filme => filme.genero === genero);
    }

    // Filtrar por ano
    if (ano === "depois") {
        filmesFiltrados = filmesFiltrados.filter(filme => filme.ano > 2010);
    } else if (ano === "antes") {
        filmesFiltrados = filmesFiltrados.filter(filme => filme.ano <= 2010);
    }

    // Filtrar por ator
    if (ator) {
        filmesFiltrados = filmesFiltrados.filter(filme => filme.ator === ator);
    }

    // Retornar todos os filmes filtrados ou null se não houver resultados
    return filmesFiltrados.length > 0 ? filmesFiltrados : null;
}

// 4. Exibir o resultado
const filmesRecomendados = recomendarFilme(genero, ano, ator);
if (filmesRecomendados) {
    console.log("Filmes recomendados:");
    filmesRecomendados.forEach(filme => {
        console.log(filme.titulo);
    });
} else {
    console.log("Nenhum filme encontrado com suas preferências.");
}