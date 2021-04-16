const track = document.querySelector('.slider-track');
const textTrack = document.querySelector('.text-track');
const textItem1 = document.getElementById('1');
const textItem2 = document.getElementById('2');
const textItem3 = document.getElementById('3');
const images = document.querySelectorAll('.wrapper .slider-container .slider-track .slider-item img');
const texts = document.querySelectorAll('.wrapper .text-container .text-track .text-items p');
let count = 0, widthSlider, widthText;
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
const interval = setInterval(autoRollSlider, 5000);
const test = document.getElementsByClassName('.text-container')

console.log(test);

prev.addEventListener('click', () => {
    count--;
    console.log(count);
    if (count < 0) {
        count = images.length - 1;
    }
    clearInterval(interval);
    rollSliderLeft();
});


next.addEventListener('click', () => {
    count++;
    if (count === images.length) {
        count = 0;
    }
    clearInterval(interval);
    rollSliderLeft();
})
console.log(images.length)

function rollSliderLeft() {
    track.style.transform = 'translate(-' + count * widthSlider + 'px)';
    textTrack.style.transform = 'translate(-' + count * widthText + 'px)';
    opacity();
}


function autoRollSlider() {
    count++;
    if (count !== images.length) {
        rollSliderLeft();
    }
    if (count === images.length) {
        count = 0;
        rollSliderLeft();
    }
}


function opacity() {
    if (count === 0 && textItem1.classList.value === 'text-items') {
        textItem1.classList.add('text-opacity')
        textItem1.classList.remove('text-items')

    }
    else if (count !== 0 && textItem1.classList.value === 'text-opacity') {
        textItem1.classList.remove('text-opacity')
        textItem1.classList.add('text-items')
    }

    if (count === 1 && textItem2.classList.value === 'text-items') {
        textItem2.classList.add('text-opacity')
        textItem2.classList.remove('text-items')

    }
    else if (count !== 1 && textItem2.classList.value === 'text-opacity') {
        textItem2.classList.remove('text-opacity')
        textItem2.classList.add('text-items')
    }

    if (count === 2 && textItem3.classList.value === 'text-items') {
        textItem3.classList.add('text-opacity')
        textItem3.classList.remove('text-items')
    }
    else if (count !== 2 && textItem3.classList.value === 'text-opacity') {
        textItem3.classList.remove('text-opacity')
        textItem3.classList.add('text-items')
    }
}
opacity();


function init() {
    widthSlider = document.querySelector('.slider-container').offsetWidth;
    widthText = document.querySelector('.text-container').offsetWidth;

    track.style.width = widthSlider * images.length + 'px';
    textTrack.style.width = widthText * texts.length + 'px';
    images.forEach(item => {
        item.style.minWidth = widthSlider + 'px';
        item.style.minHeight = 'auto';
    });

    texts.forEach(item => {
        item.style.minWidth = widthText + 'px';
        item.style.minHeight = 'auto';
    });
}

window.addEventListener('resize', init);
init();

