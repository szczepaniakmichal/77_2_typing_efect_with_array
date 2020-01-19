const spnText = document.querySelector('.text');
const spnPulse = document.querySelector('.pulse');

const txts = ['jabłko', 'truskawka', 'arbuz', 'winogrono'];

let activeWord = 0;
let activeLetter = 0;

// function render next letter and next word from array "txts"
const addLetter = () => {
    spnText.textContent += txts[activeWord][activeLetter];
    activeLetter++;

    if (activeLetter === txts[activeWord].length) {
        activeWord++;

        if (activeWord === txts.length) return;

        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
        }, 2000)
    }

    setTimeout(addLetter, 100);
};

setTimeout(addLetter, 1000);

// function is cursor pulse efect
const pulse = () => {
    spnPulse.classList.toggle('remove_pulse');
};

setInterval(pulse, 600);



