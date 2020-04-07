const button = Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size'));
const buttonColor = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));
const buttonBackground = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'));

button.forEach( el => {
    el.addEventListener('click', function(e) {
        click(e, 'font-size', 'fs-big', 'fs-small', 'big', 'small');
    }, false)
});

buttonColor.forEach( el => {
    el.addEventListener('click', function(e) {
        click(e, 'color', 'color-gray', 'color-whitesmoke', 'gray', 'whitesmoke');
    }, false)
});

buttonBackground.forEach( el => {
    el.addEventListener('click', function(e) {
        click(e, 'color', 'bg-gray', 'bg-white', 'black', 'gray');
    }, false)
});


function click(e, className, name, name2, dataName, dataName2) {
    e.preventDefault();
    const active = Array.from(e.target.closest('.book__control').querySelectorAll(`.${className}`));
    active.forEach( (el) => el.classList.remove(`${className}_active`) );
    e.target.classList.add(`${className}_active`);


    let targetData = e.target.dataset.size || e.target.dataset.color;
    elementSize(name, name2, dataName, dataName2, targetData);

    //Функция переключения шрифта
    function elementSize(name,name2, dataName, dataName2, targetData) {
        const book = e.target.closest('#book');
        book.classList.remove(`book_${name}`, `book_${name2}`);

        if(targetData === `${dataName}`) {
            book.classList.add(`book_${name}`);
        } else if(targetData === `${dataName2}`) {
            book.classList.add(`book_${name2}`);
        } else {
            return null;
        }
    }
}

