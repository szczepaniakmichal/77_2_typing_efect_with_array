const text = document.querySelector('.text');
const span = document.querySelector('.pulse');

const txts = ['text1', 'text22', 'text333', 'text4444'];

const pulse = () => {
    span.classList.toggle('remove_pulse');
};

setInterval(pulse, 600);

