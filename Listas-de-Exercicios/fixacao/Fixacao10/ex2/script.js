const lista = document.getElementById('lista');
const inputNovoItem = document.getElementById('novoItem');
const btn = document.getElementById('btnAdd');

btn.addEventListener('click', function () {
    let novoItem = document.createElement('li');

    if (inputNovoItem.value.trim() !== "") {
        novoItem.textContent = inputNovoItem.value;

        lista.appendChild(novoItem);
        inputNovoItem.value = "";
    } else {
        alert("Por favor, digite um item!");
    }
});
