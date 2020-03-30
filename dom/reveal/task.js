const revealItems = Array.from(document.querySelectorAll('.reveal'));

const isInViewport = function(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    return viewportHeight > elementTop && elementBottom > 0;
};

function reveal() {
    revealItems.forEach(element => {
        console.log(isInViewport(element));
        if(isInViewport(element)) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

document.addEventListener("scroll", reveal);