let pomoStartButton = document.getElementsByClassName('pomo-start')[0];
let pomoPauseButton = document.getElementsByClassName('pomo-pause')[0];
let pomoStopButton = document.getElementsByClassName('pomo-stop')[0];

pomoStartButton.addEventListener("click", function (event) {
    postMessage('start');
    pomoPauseButton.classList.add('active')
    pomoStartButton.classList.remove('active')
})

pomoPauseButton.addEventListener("click", function (event) {
    postMessage('pause');
    pomoPauseButton.classList.remove('active')
    pomoStartButton.classList.add('active')
})

pomoStopButton.addEventListener("click", function (event) {
    postMessage('stop')
    pomoPauseButton.classList.remove('active')
    pomoStartButton.classList.add('active')
    postMessage('reset')
})

let pomoMinutes = 24;
let pomoSeconds = 59;
let pomodoroTimeLeft = (pomoMinutes + 1) * 60;

let pomoTimer;
window.addEventListener('message', function receiveMessage(event) {
    console.log('got: ' + event.data)

    switch (event.data) {
        case 'start':

            if (pomodoroTimeLeft > 0) {

                pomoTimer = setInterval(function () {
                    if (pomoSeconds === -1) {
                        pomoMinutes -= 1;
                        pomoSeconds = 59;
                    }

                    if (pomodoroTimeLeft === 0) {
                        pomoMinutes = 0;
                        pomoSeconds = 0;
                        clearInterval(pomoTimer);
                        pomoPauseButton.classList.remove('active')
                        pomoStartButton.classList.add('active')
                        // alert("Time's up!")
                    }

                    if (pomoSeconds >= 10) {
                        document.getElementById('pomodoro-timer').innerHTML = (pomoMinutes + ':' + pomoSeconds);
                    } else {
                        document.getElementById('pomodoro-timer').innerHTML = (pomoMinutes + ':0' + pomoSeconds);
                    }

                    pomodoroTimeLeft -= 1;
                    pomoSeconds -= 1;
                }, 1000)
            } else {
                window.location.reload(true);
            };

            break;

        case 'pause':
            clearInterval(pomoTimer);
            break;

        case 'stop':
            pomodoroTimeLeft = 0;
            window.location.reload(true);
            break;
    };
});
