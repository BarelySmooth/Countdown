var waitOneSecond = setInterval(updateCountdown, 1000);

const daysLabel = document.getElementById("days")
const hoursLabel = document.getElementById("hours")
const minutesLabel = document.getElementById("minutes")
const secondsLabel = document.getElementById("seconds")

let currentTimeInMilliseconds;
let currentTimeInSeconds;
let countdownOver;

// This should be in UTC
const unixTimeOnFinalDate = 1624546800;

function initialize(){
    let currentTimeInMilliseconds = Date.now();
    currentTimeInSeconds = Math.floor(currentTimeInMilliseconds / 1000);

    if (currentTimeInSeconds < unixTimeOnFinalDate) {
        countdownOver = false;
    }
    else {
        countdownOver = true;
        // TODO: Add code here to replace the text and say: Countdown Over!
    }
}

function convertUnixTimetoArray (UnixTime) {
    let days, hours, minutes, seconds;

    // 1 day = 86400 seconds
    let remainingTime = UnixTime;
    days = 0;
    if (UnixTime > 86400) {
        i = 0;
        while (remainingTime > 0) {
            remainingTime -= 86400;
            i += 1;
        }
        remainingTime += 86400;
        days = i - 1;
    }

    // 1 hour = 3600 seconds
    hours = 0;
    if (UnixTime > 3600) {
        i = 0;
        while (remainingTime > 0) {
            remainingTime -= 3600;
            i += 1;
        }
        remainingTime += 3600;
        hours = i - 1;
    }

    // 1 minute = 60 seconds
    minutes = 0;
    if (UnixTime > 60) {
        i = 0;
        while (remainingTime > 0) {
            remainingTime -= 60;
            i += 1;
        }
        remainingTime += 60;
        minutes = i - 1;
    }
    
    seconds = remainingTime;
    
    let arrayOfTimeInfo = [days, hours, minutes, seconds];
    for (x of arrayOfTimeInfo) {
        if (x.toString().length == 1){
            arrayOfTimeInfo[arrayOfTimeInfo.indexOf(x)] = "0" + x;
        }
    }
    return arrayOfTimeInfo;
}

function updateCountdown() {
    currentTimeInMilliseconds = Date.now();
    currentTimeInSeconds = Math.floor(currentTimeInMilliseconds / 1000);
    let timeDifference = unixTimeOnFinalDate - currentTimeInSeconds;
    daysLabel.innerHTML = convertUnixTimetoArray(timeDifference)[0];
    hoursLabel.innerHTML = convertUnixTimetoArray(timeDifference)[1];
    minutesLabel.innerHTML = convertUnixTimetoArray(timeDifference)[2];
    secondsLabel.innerHTML = convertUnixTimetoArray(timeDifference)[3];    
}

initialize();
updateCountdown();
