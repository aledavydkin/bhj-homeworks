const tabNavigation =  Array.from(document.querySelectorAll('.tabs'));

function tabs() {
    tabNavigation.forEach(element => {
        element.addEventListener('click', click);
    });

    function click(e) {
        const tabs = Array.from(e.target.closest('.tabs').querySelectorAll('.tab'));
        const content = Array.from(e.target.closest('.tabs').querySelectorAll('.tab__content'));
        const indexTabs = tabs.indexOf(e.target);

        tabs.forEach( (el) => el.classList.remove('tab_active') );
        content.forEach( (el) => el.classList.remove('tab__content_active'));
        tabs[indexTabs].classList.add('tab_active');
        content[indexTabs].classList.add('tab__content_active');
    }
}

document.addEventListener("DOMContentLoaded", tabs);