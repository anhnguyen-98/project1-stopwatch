//variables
var minutes = 0;
var seconds = 0;
var tens = 0;
var appendMinutes = document.getElementById('minutes');
var appendSeconds = document.getElementById('seconds');
var appendTens = document.getElementById('tens');
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var resetBtn = document.getElementById("btn-reset");
var interval;

//functions
startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}
stopBtn.onclick = () => {
    clearInterval(interval);
}
resetBtn.onclick = () => {
    clearInterval(interval);
    minutes = 0
    seconds = 0;
    tens = 0;
    appendMinutes.innerHTML = "0" + minutes;
    appendSeconds.innerHTML = "0" + seconds;
    appendTens.innerHTML = "0" + tens;
}

startTimer = () => {
    tens++;
    if (tens <= 9) appendTens.innerHTML = "0" + tens;
    if (tens > 9) appendTens.innerHTML= tens;
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) appendSeconds.innerHTML = seconds;
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
}

