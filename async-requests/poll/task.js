let title = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        title.innerText = data.data.title;
        let id = data.id;

        const answers = data.data.answers;
        answers.forEach((el, index) => {
            pollAnswers.innerHTML += `
            <button data-index="${index + 1}" class="poll__answer">
              ${el}
            </button>
            `
        });

        document.addEventListener('click', function (e) {
            if(e.target.classList.contains('poll__answer')) {
                alert('Ваш голос учтен');
                e.defaultPrevented;
                let index = e.target.dataset.index;

                let result = new XMLHttpRequest();
                result.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                result.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                result.send( `vote=${id}&answer=${index}`);

                result.addEventListener('readystatechange', () => {
                    if (result.readyState === 4 && result.status === 200) {
                        let dataResult = JSON.parse(result.responseText);
                        pollAnswers.innerHTML="";
                        let data = dataResult.stat;
                        for (let key in data) {
                            pollAnswers.innerHTML += `<div>${data[key].answer}  ${data[key].votes}</div>`
                        }
                    }
                });
            }
        });
    }
});

