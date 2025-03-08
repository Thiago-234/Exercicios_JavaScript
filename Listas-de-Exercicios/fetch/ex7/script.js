const lista = document.getElementById('lista');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

async function listarPokemons() {
    const inputValue = parseInt(input.value);

    try {
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${inputValue}`);
        
        if (!poke.ok) {
            throw new Error('Não foi possível buscar os Pokémons');
        }

        const pokemons = await poke.json();

        const detalhesPokemons = pokemons.results.map(async (pokemon) => {
            const detalhes = await fetch(pokemon.url);
            const info = await detalhes.json();
            
            return `
                <li>
                    <strong>Id:</strong> ${info.id} <br>
                    <strong>Nome:</strong> ${info.name} <br>
                    <img src="${info.sprites.front_default}" alt="${info.name}" width="100" />
                </li>
            `;
        });

        const todosPokemons = await Promise.all(detalhesPokemons);

        lista.innerHTML = todosPokemons.join('');
    } catch (erro) {
        alert("Verifique o console");
        console.log(erro);
    }
}

btn.addEventListener('click', function () {
    listarPokemons();
});
