const menuLink = Array.from(document.getElementsByClassName('menu__link'));

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        let parent = menuLink[i].parentElement.querySelector('ul');
        let active = menuLink[i].closest('.menu_main').querySelector('.menu_active');

        if(active) {
            active.classList.remove('menu_active');
            parent.classList.add('menu_active')
        } else {
            parent.classList.add('menu_active')
        }
        return false;
    };
}

