const btn = document.getElementById('btn');
const img = document.getElementById('imgCachorro');

async function imagem() {
    try{
        const imagem = await fetch('https://dog.ceo/api/breeds/image/random');

        const info = await imagem.json();

        img.src = info.message;
    }
    catch(erro){
        alert('Erro ao obter a imagem. Verifique o console');
        console.log(erro)
    }
}

btn.addEventListener('click', function(){
    imagem();
});