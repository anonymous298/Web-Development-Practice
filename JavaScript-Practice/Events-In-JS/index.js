let hover_div = document.querySelector('.hover');

let counter = 0;

hover_div.addEventListener(
    'mouseover',
    () => {
        if (counter === 10) {
            document.querySelector('body').style.background = 'pink';
        }

        if (counter === 20) {
            document.querySelector('body').style.background = 'orange';
        }
        
        counter++;
        document.querySelector('h3').innerText = counter;
    }
);