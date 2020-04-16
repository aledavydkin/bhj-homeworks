'use strict';
const signin = document.querySelector('.signin');
const formId = document.getElementById('signin__form');
signin.classList.add('signin_active');
const welcome = document.querySelector('.welcome');
const localId = localStorage.getItem('id');
const userId = document.getElementById('user_id');
const input = document.querySelectorAll('input');

const logOut = document.getElementById('logout__btn')

formId.addEventListener('submit', (e) => {
    const formData = new FormData(formId);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.addEventListener('readystatechange', function() {
        if (this.readyState == request.DONE && this.status == 200) {
            const data = JSON.parse(this.responseText);
            input.forEach(el=> {
                el.value = '';
            });
            if (data.success === true) {
                welcome.classList.add('welcome_active');
                localStorage.setItem('id', data.user_id);
                userId.textContent = `${data.user_id}`;
                logOut.classList.add('logout__active');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    request.send(formData);
    e.preventDefault();
});


logOut.addEventListener('click', (e) => {
    e.preventDefault();
    welcome.classList.remove('welcome_active');
    localStorage.removeItem('id');
    logOut.classList.toggle('logout__active');
});

function validate () {
     if(localId) {
         welcome.classList.add('welcome_active');
         logOut.classList.add('logout__active');
         userId.textContent = localId;
     } else {
         logOut.classList.remove('logout__active');
     }
 }

document.addEventListener("DOMContentLoaded", validate);