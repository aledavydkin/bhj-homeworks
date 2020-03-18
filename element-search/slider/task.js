let sliderElements = Array.from(document.querySelectorAll('.slider__item'));
let dots = Array.from(document.querySelectorAll('.slider__dot'));

let arrow = Array.from(document.querySelectorAll('.slider__arrow'));

let index = 0;

for(let i = 0; i < arrow.length; i++) {
    arrow[i].onclick = changeSlides;
}

for(let i = 0; i < dots.length; i++) {
    dots[i].onclick = dotsChangeSlides(i);
}

function changeSlides(e) {
    sliderElements[index].classList.remove('slider__item_active');

    let arrowNext = e.target.classList.contains('slider__arrow_next');
    let arrowPrev = e.target.classList.contains('slider__arrow_prev');

    if(arrowNext) {
        if (index === sliderElements.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }

    if(arrowPrev) {
        if (index === 0) {
            index = sliderElements.length - 1;
        } else {
            index--;
        }
    }

    sliderElements[index].classList.add('slider__item_active');
}

function dotsChangeSlides(index) {
    dots[index].classList.add('slider__dot_active');
}