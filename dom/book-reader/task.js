const button = Array.from(document.querySelectorAll('.font-size'));

button.forEach( el => {
    el.addEventListener('click', click);
});

function click(e) {
    e.preventDefault();
    const active = Array.from(e.target.closest('.book__control').querySelectorAll('.font-size'));
    active.forEach( (el) => el.classList.remove('font-size_active') );
    e.target.classList.add('font-size_active');
    elementSize(e.target.dataset.size);


    //Функция переключения шрифта
    function elementSize(name) {
        const book = e.target.closest('#book');
        book.classList.remove('book_fs-big', 'book_fs-small');

        if(name === 'big') {
            book.classList.add('book_fs-big');
        } else if(name === 'small') {
            book.classList.add('book_fs-small');
        } else {
            return null;
        }
    }

}

