let button = document.createElement('button');
button.innerText = 'Click Me';

button.style.background = 'red';
button.style.color = 'white';

let element = document.querySelector('body');
element.prepend(button);

let paragraph = document.querySelector('p');
