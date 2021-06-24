var waitOneSecondForGradient = setInterval(checkForCheckpointForGradient, 100);
// var waitOneSecondForCountdownEnd = setInterval(checkForCheckpointForCountdownEnd, 1000);

function checkForCheckpointForGradient() {
    let daysLabel = document.getElementById("days")
    let hoursLabel = document.getElementById("hours")
    let minutesLabel = document.getElementById("minutes")
    let secondsLabel = document.getElementById("seconds")
    if (daysLabel.innerText == 0 && hoursLabel.innerText == 0 && minutesLabel.innerText < 60) {
        // Start moving gradient
        let theBody = document.getElementById("body");
        theBody.style = `background-size: 1000%;
        background-position: left;
        background-image: linear-gradient(to left,
        rgb(35, 134, 56),
        rgb(0, 89, 255),
        rgb(76, 0, 255),
        rgb(255, 0, 0),
        rgb(255, 145, 0),
        rgb(0, 195, 255),
        rgb(4, 0, 255),
        rgb(174, 0, 255),
        rgb(255, 0, 128)
        );
        animation-name: Background-Gradient;
        animation-duration: 200s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        background-attachment: fixed;`

        const header = document.getElementById("header-notice");
        header.style = "display: none;";

        clearInterval(waitOneSecondForGradient);
    }

}

checkForCheckpointForGradient();
