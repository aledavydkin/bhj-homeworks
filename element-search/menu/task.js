const menuLink = Array.from(document.getElementsByClassName('menu__link'));


menuLink.forEach(el => {
    el.onclick = function () {
        let parent = el.parentElement.querySelector('ul');
        let active = el.closest('.menu_main').querySelector('.menu_active');

        if (parent.classList.contains('menu_active')) {
            active.classList.remove('menu_active');
        } else {
            if(active) {
                active.classList.remove('menu_active');
                parent.classList.add('menu_active')
            } else {
                parent.classList.add('menu_active')
            }
        }
        return false;
    };
})


