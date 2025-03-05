const div = document.getElementById('div');
const btnAdd = document.getElementById('btnInserir');
const btnRmv = document.getElementById('btnRemover');
const p =document.createElement('p');

btnAdd.addEventListener('click', function(){
    p.innerHTML = "Texto Inserido!"
    div.appendChild(p)
});

btnRmv.addEventListener('click', function(){
    div.removeChild(p)
});