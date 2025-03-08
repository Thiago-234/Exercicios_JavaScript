const lista = document.getElementById('lista');
const btn = document.getElementById('btn');

async function listarPokemons() {
    try{
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);

        if(!poke.ok){
            throw new Error('Não foi possível buscar os pokémons');
        }
        const pokemons = await poke.json();

        lista.innerHTML = pokemons.results.map(pokemon =>
            `<li> <strong>Nome</strong>:${pokemon.name} <br></li>`
        ).join('');

    }
    catch (erro){
        alert("Verifique o console");
        console.log(erro);
    }
}

btn.addEventListener('click', function(){
    listarPokemons();
});