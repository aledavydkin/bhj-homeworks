const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const hole = index => document.getElementById(`hole${index}`);


for( let i = 1; i < 9; i++) {
    hole(i).onclick = () => {
        if(hole(i).className == 'hole hole_has-mole') {
            dead.textContent ++;
        }
        else {
            lost.textContent ++;
        }

        if (dead.textContent == '10') {
            dead.textContent = 0;
            alert('Вы выйграли!');
        }
        if(lost.textContent == '5') {
            lost.textContent = 0;
            alert('Вы проиграли!');
        }
    }
}