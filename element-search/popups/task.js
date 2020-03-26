let modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = Array.from(document.querySelectorAll('.modal__close'));


modalMain.classList.add('modal_active');

modalClose.forEach((el, index) => {
    el.onclick = function() {
        if(el.classList.contains('show-success')) {
            modalSuccess.classList.add('modal_active');
            modalMain.classList.remove('modal_active');
        } else {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.remove('modal_active');
        }
    }
});
