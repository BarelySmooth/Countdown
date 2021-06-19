var waitOneSecond = setInterval(checkForCheckpoint, 1000);

function checkForCheckpoint() {
    const daysLabel = document.getElementById("days")
    const hoursLabel = document.getElementById("hours")
    const minutesLabel = document.getElementById("minutes")
    const secondsLabel = document.getElementById("seconds")

    if (daysLabel == 0 && hoursLabel == 0 && minutesLabel < 60) {
        // Start moving gradient
        
    }
}