const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');

tooltips.forEach(el => {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        tooltip.innerText = '';
        const thisTarget = event.target;
        const title = thisTarget.getAttribute('title');
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.insertAdjacentText("afterBegin",`${title}`);

        let coord = el.getBoundingClientRect();
        let left = coord.left+'px';
        let top = el.dataset.position === 'top' ? coord.top + (coord.top - coord.bottom) +'px' : coord.bottom+'px';

        tooltip.setAttribute('style',`left: ${left}; top: ${top}`);

        thisTarget.insertAdjacentElement("afterBegin", tooltip);
    })
});