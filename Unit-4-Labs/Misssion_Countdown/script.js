// * Getting our DOM Elements
let startTimeoutButton = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startIntervalButton = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");

// * Using query selectors
let repeatGo = document.querySelectorAll(".repeat-go");

// * Assigning event listeners
startTimeoutButton.addEventListener('click', handleStartTimeout);
startIntervalButton.addEventListener('click', handleInterval);

// * handling callback functions
function handleStartTimeout() {
    console.log("handleStartTimeout clicked");
    timeoutDisplay.textContent = "Getting ready...";

    setTimeout(function() {
        timeoutDisplay.textContent = "Ready";
    }, 5000);
}

function handleInterval() {
    console.log("handleInterval clicked");
    let count = 5;

    // * set interval
    const intervalId = setInterval(updateIntervalDisplay, 1000);

    function updateIntervalDisplay() {
        intervalDisplay.textContent = count;
        count--;

        if (count < 0) {
            intervalDisplay.textContent = "GO!";
            clearInterval(intervalId);

            // * Part 2 starts here:
            let repeatGoArray = Array.from(repeatGo);
            let index = 0;

            // * Another way to write callback functions
            let repeatIntervalId = setInterval(() => {
                repeatGoArray[index].textContent = "GO!";

                index++;

                if (repeatGoArray[index] == undefined) {
                    clearInterval(repeatIntervalId);
                }
            }, 1000);
        } 
    }
}
