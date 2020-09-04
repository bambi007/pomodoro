let startButton = document.getElementsByClassName('start')[0];
let pauseButton = document.getElementsByClassName('pause')[0];

startButton.addEventListener("click", function (event) {
    postMessage('start');
    pauseButton.classList.add('active')
    startButton.classList.remove('active')
})

pauseButton.addEventListener("click", function (event) {
    postMessage('pause');
    pauseButton.classList.remove('active')
    startButton.classList.add('active')

})

let minutes = 24;
let seconds = 59;
let timeLeft = (minutes + 1) * 60;

let timer;
window.addEventListener('message', function receiveMessage(event) {
    console.log('got: ' + event.data)

    switch (event.data) {
        case 'start':
            timer = setInterval(function () {

                if (seconds === -1) {
                    minutes -= 1;
                    seconds = 59;
                }

                if (timeLeft === 0) {
                    minutes = 0;
                    seconds = 0;
                    clearInterval(timer);
                }

                if (seconds >= 10) {
                    document.getElementById('timer').innerHTML = (minutes + ':' + seconds);
                } else {
                    document.getElementById('timer').innerHTML = (minutes + ':0' + seconds);
                }

                timeLeft -= 1;
                seconds -= 1;
                console.log(timeLeft)
            }, 20)

            break;

        case 'pause':
            clearInterval(timer);
            break;
    };
});
