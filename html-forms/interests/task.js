const interests = document.querySelector('.interests_main');

interests.addEventListener('change', evt => {
    const interest = evt.target.closest('.interest');
    const interestChildren = interest.querySelectorAll('.interests');
    const interestParents = interest.querySelector('.interest__check');

    interestChildren.forEach(element => {
        const interestCheck = element.querySelectorAll('.interest__check');
        interestCheck.forEach(element => {
            element.checked = interestParents.checked;
        })
    })
});
