const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const date = Date.now();
let lastClick = 0;

console.log(cookie);
console.log(clickerCounter);
console.log(clickerSpeed);
console.log(date);

function resize() {
    clickerCounter.textContent ++;
    speed();
    if(cookie.width === 100) {
        cookie.width = 200;
    } else {
        cookie.width = 100;
    }
}

function speed() {
    const clickNow = Date.now();
    const formula = (1 / ((clickNow - lastClick) / 1000)).toFixed(2);
    clickerSpeed.textContent = formula;
    lastClick = clickNow;
}

cookie.onclick = resize;