const active = document.querySelector('#subscribe-modal');
const close = document.querySelector('.modal__close');

const cookie = function() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)clickClose\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true";
};

if(cookie()) {
    active.classList.add('modal_active');
}

close.addEventListener('click',  function () {
    if (cookie()) {
        active.classList.remove('modal_active');
        document.cookie = 'clickClose=true; expires=Fri';
    }
});
