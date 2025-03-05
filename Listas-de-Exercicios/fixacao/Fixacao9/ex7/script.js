const mens  = document.getElementById('mensagem');
const input = document.getElementById('check');

input.addEventListener('click', function(){
    if (input.checked) {
        mens.innerHTML = "Checked!";
    } 
    else {
        mens.innerHTML = "Not Checked!";
    }
});