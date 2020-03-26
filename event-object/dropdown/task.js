const dropValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));


dropValue.addEventListener('click', function () {
    dropdownList.classList.add('dropdown__list_active');
});

dropdownItems.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        dropValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
});