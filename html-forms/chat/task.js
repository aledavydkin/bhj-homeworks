const buttomChat = document.querySelector('.chat-widget__side');
const messages = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const messagesContainer =  document.querySelector('.chat-widget__messages-container');
const date = new Date();
const hours = date.getHours();
const minute = date.getMinutes();

const arrMassages = [
    'Кто тут?',
    'Классный вопрос',
    'Я незнаю ответа(',
    'Давай другой вопрос',
    'А ты крутой тип',
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

buttomChat.addEventListener('click', () => {
    buttomChat.closest('.chat-widget').classList.add('chat-widget_active');
});

input.addEventListener('keydown', function(event) {

    const botMessages = arrMassages[getRandomInt(arrMassages.length)];

    if (event.keyCode === 13 && input.value) {
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${hours}:${minute}</div>
            <div class="message__text">
              ${input.value}
            </div>
          </div>
        `;
        input.value = '';

        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${hours}:${minute}</div>
            <div class="message__text">
              ${botMessages}
            </div>
          </div>
      `;
        messagesContainer.scroll(0, messagesContainer.getBoundingClientRect().bottom);
    }
});

input.addEventListener('focus', function(event) {
    setTimeout( () => {
        messages.innerHTML += `
      <div class="message">
        <div class="message__time">${hours}:${minute}</div>
        <div class="message__text">
          Привет! Тебе чем-то помочь?
        </div>
      </div>
      `;
    }, 30000);
});




