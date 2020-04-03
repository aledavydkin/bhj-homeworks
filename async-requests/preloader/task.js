const preloader = document.querySelector('.loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        preloader.classList.remove('loader_active');
        let data = JSON.parse(this.responseText);
        const valutes = data.response.Valute;


        for (let key in valutes) {
            items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${valutes[key].CharCode}
                </div>
                <div class="item__value">
                    ${valutes[key].Value}
                </div>
                <div class="item__currency">
                    ${valutes[key].Name}
                </div>
            </div>
            `
        }
    };
});