const rotatorCase = Array.from(document.querySelectorAll('.rotator'));

rotatorCase.forEach(element => {
    const speedItem = element.querySelector('.rotator__case_active');
    const speed = speedItem.getAttribute("data-speed");
    console.log(speed);

    const swapText = function () {
        const item = element.querySelector('.rotator__case_active');

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
    };

    setInterval(swapText, Number(speed));
});
