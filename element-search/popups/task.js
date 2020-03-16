let modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');

modalMain.className = 'modal modal_active';

let arr = Array.from(modalClose);

for(let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        if(modalMain.className === 'modal modal_active') {
            modalMain.className = 'modal';
            modalSuccess.className = 'modal modal_active';
        } else {
            modalSuccess.className = 'modal';
        }

    };
}
