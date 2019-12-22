const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quaerat!';
const text = document.querySelector('.text');
const span = document.querySelector('.pulse');
let intervalIndex = 0;

const typing = () => {
    const textLength = txt.length;
    text.textContent += txt[intervalIndex];
    intervalIndex++;
    if (intervalIndex === textLength) {
        clearInterval(intervalIdCounter);
    }
};

const pulse = () => {
    span.classList.toggle('remove_pulse');
};

let intervalIdCounter = setInterval(typing, 100);
setInterval(pulse, 600);