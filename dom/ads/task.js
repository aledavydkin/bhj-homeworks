const rotatorCase = Array.from(document.querySelectorAll('.rotator'));

rotatorCase.forEach(element => {
    let swapText = setTimeout(function ticks() {
        const item = element.querySelector('.rotator__case_active');
        let speed = item.dataset.speed;

        let nextElement = item.nextElementSibling;
        let firstElement = element.firstElementChild;

        if (item.classList.contains('rotator__case_active')) {
            if(nextElement === null) {
                item.classList.remove('rotator__case_active')
                firstElement.classList.add('rotator__case_active');
            } else {
                const color = item.dataset.color;
                item.style.color = color;
                item.classList.remove('rotator__case_active')
                nextElement.classList.add('rotator__case_active');
            }
        }
        swapText = setTimeout(ticks, Number(speed));
    }, 1000);
});
