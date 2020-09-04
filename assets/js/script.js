let timerControls = document.getElementsByClassName('controls');

let startButton = document.getElementsByClassName('start')[0];

// console.log(timerControls);
// console.log(startButton);

let timeLeft = 9;


startButton.addEventListener("click", function (event) {
    postMessage('start');
})


window.addEventListener('message', function receiveMessage(event) {
    if (event.data = "start") {
        let timer = setInterval(function () {
            timeLeft -= 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            document.getElementById('timer').innerHTML = ('00:0' + timeLeft);
        }, 1000)
    }
});