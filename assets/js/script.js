let startButton = document.getElementsByClassName('start')[0];
let pauseButton = document.getElementsByClassName('pause')[0];
let stopButton = document.getElementsByClassName('stop')[0];

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

stopButton.addEventListener("click", function (event) {
    postMessage('stop')
    pauseButton.classList.remove('active')
    startButton.classList.add('active')
    postMessage('reset')
})

let minutes = 24;
let seconds = 59;
let timeLeft = (minutes + 1) * 60;

let timer;
window.addEventListener('message', function receiveMessage(event) {
    console.log('got: ' + event.data)

    switch (event.data) {
        case 'start':

            if (timeLeft > 0) {

                timer = setInterval(function () {
                    if (seconds === -1) {
                        minutes -= 1;
                        seconds = 59;
                    }

                    if (timeLeft === 0) {
                        minutes = 0;
                        seconds = 0;
                        clearInterval(timer);
                        pauseButton.classList.remove('active')
                        startButton.classList.add('active')
                        // alert("Time's up!")
                    }

                    if (seconds >= 10) {
                        document.getElementById('timer').innerHTML = (minutes + ':' + seconds);
                    } else {
                        document.getElementById('timer').innerHTML = (minutes + ':0' + seconds);
                    }

                    timeLeft -= 1;
                    seconds -= 1;
                }, 1000)
            } else {
                window.location.reload(true);
            };

            break;

        case 'pause':
            clearInterval(timer);
            break;

        case 'stop':
            timeLeft = 0;
            window.location.reload(true);
            break;
    };
});
