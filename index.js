let par = document.querySelector('#par');
let text = 'Leaves are colorful...';
let i=0;
let pause = 100;

function type() {
    if (i<text.length) {
        par.textContent += text[i];
        i++;
    }
    setTimeout(type, pause);
}

type();