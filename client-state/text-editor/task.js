const text = document.querySelector('#editor');
const btn = document.querySelector('#btn');
let lastname = localStorage.getItem('text');
text.value = lastname;

function test(value) {
    localStorage.setItem('text', `${value}`);
}

text.addEventListener('keydown', function () {
    test(text.value);
});

btn.addEventListener('click', function () {
    localStorage.removeItem('text');
    text.value = '';
});
