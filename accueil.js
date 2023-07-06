document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'PLAY';
    button.className = 'btn-styled';
 
    button.onclick = function() {
        // …
    };
 
    var container = document.getElementById('container');
    container.appendChild(button);
}, false);