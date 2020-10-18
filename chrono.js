let IdSeconde = document.getElementById("seconde");
let IdMinute = document.getElementById("minute");
let IdHeure = document.getElementById("heure");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
let interval = null;
let sec = 0;
let min = 0;
let heure = 0;
let play = false;

function chronometer() {
    sec = sec + 1;
    let displaySec = "";
    let displayMin = "";
    let displayHeure = "";

    if (sec < 10) {
        displaySec = "0" + sec;
    } else {
        displaySec = sec;
    }
    IdSeconde.innerText = displaySec;

    if (sec === 60) {
        sec = 0;
        min = min + 1;
        if (min < 10) {
            displayMin = "0" + min;
        } else {
            displayMin = min;
        }
        IdMinute.innerText = displayMin;
    }
    if (min === 60) {
        sec = 0;
        min = 0;
        heure = heure + 1;
        if (heure < 10) {
            displayHeure = "0" + heure;
        } else {
            displayHeure = heure;
        }
        IdHeure.innerText = displayHeure;
    }
}

function startChrono() {
    interval = setInterval(function () {
        chronometer();
    }, 1000)

    /*
        const myNotification = new Notification('Start Chrono', {
            //body: 'Lorem Ipsum Dolor Sit Amet'
        })

        myNotification.onclick = () => {
            console.log('Notification clicked')
        }
    */
}

function stopChrono() {
    clearInterval(interval);
    /*
    const myNotification = new Notification('Stop Chrono', {
        //body: 'Lorem Ipsum Dolor Sit Amet'
    })

    myNotification.onclick = () => {
        console.log('Notification clicked')
    }
    */
}

function clickStartChrono() {
        btnStart.addEventListener("click", function () {
            startChrono();
            btnStart.disabled = true;
        });
}

function clickStopChrono() {
    btnStop.addEventListener("click", function () {
        stopChrono()
        btnStart.disabled = false;
    });

}

function resetChrono () {
    sec = 0;
    min = 0;
    heure = 0;
    IdSeconde.innerText = "00";
    IdMinute.innerText = "00";
    IdHeure.innerText = "00";
}

function clickResetChrono() {
    btnReset.addEventListener("click", function () {
        resetChrono();
    });
}

clickStartChrono()
clickStopChrono();
clickResetChrono();

