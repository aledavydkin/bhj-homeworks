const idTimer = document.getElementById('timer');

const timer = function () {
    idTimer.textContent -= 1;
    if (idTimer.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }

};

let timerId = setInterval(timer, 1000);

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
console.log(seconds);
const  newTimer = function () {
    seconds.textContent -= 1;
    if (seconds.textContent < 10) {
        seconds.textContent = `0${seconds.textContent}`
    }

    if(seconds.textContent <= 0) {
        minute.textContent -= 1;
        seconds.textContent = 59;
        if (minute.textContent < 10) {
            minute.textContent = `0${minute.textContent}`
        }
    } else if(minute.textContent <= 0) {
        hour.textContent -= 1;
        minute.textContent = 59;
        if (hour.textContent < 10) {
            hour.textContent = `0${hour.textContent}`
        }
    }


    if (hour.textContent <= 0 && minute.textContent <= 0 && seconds.textContent <=0) {
        alert('Вы победили в конкурсе!');
        clearInterval(newTimerId);
        window.location = 'Какой-то адрес на pdf'
    }
};


let newTimerId = setInterval(newTimer, 1000);