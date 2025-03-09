const btn = document.getElementById('btn');
const fato = document.getElementById('fato');

async function buscarFato() {
    try{
        const fatos = await fetch('https://catfact.ninja/fact');

        if(!fatos.ok){
            throw new Error('Houve um erro ao buscar um fato na API!')
        }

        const info = await fatos.json()

        fato.innerHTML = info.fact
    }
    catch (erro){
        alert('Verifique o console');
        console.log(erro)
    }
}

btn.addEventListener('click', function() {
    buscarFato();
});