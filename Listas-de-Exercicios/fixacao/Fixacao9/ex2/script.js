const div = document.getElementById('cor');

div.addEventListener('mouseover', function() {
    div.style.background = "yellow"
    div.textContent = "Yellow"
});
div.addEventListener('mouseout', function() {
    div.style.background = "white"
    div.textContent = "White"
});