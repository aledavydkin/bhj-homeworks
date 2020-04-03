const send = document.getElementById('send');
const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );


send.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.addEventListener('progress', function(event) {
        event.lengthComputable = true;
        console.log(`Загружено ${event.loaded}`);
    });
    request.send(formData);
});





