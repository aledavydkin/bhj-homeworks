const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');

tooltips.forEach(el => {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        tooltip.innerText = '';
        const thisTarget = event.target;
        const title = thisTarget.getAttribute('title');
        let coord = el.getBoundingClientRect();
        let left = el.dataset.position === 'right' ? coord.left + (coord.right - coord.left) +'px': coord.left+'px';
        let top = el.dataset.position === 'top' ? coord.top + (coord.top - coord.bottom) +'px' : coord.bottom+'px';

        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.insertAdjacentText("afterBegin",`${title}`);
        tooltip.setAttribute('style',`left: ${left}; top: ${top}`);

        thisTarget.insertAdjacentElement("afterBegin", tooltip);
    })
});