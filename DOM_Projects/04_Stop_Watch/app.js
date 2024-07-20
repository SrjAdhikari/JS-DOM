// Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn'); // Select the start/stop button
const resetBtn = document.querySelector('#resetBtn'); // Select the reset button

// Variables for time values
let seconds = 0;    // Initialize seconds to 0
let minutes = 0;    // Initialize minutes to 0
let hours = 0;      // Initialize hours to 0

// Variables for leading zero
let leadingSeconds = 0;     // Initialize leading seconds to 0
let leadingMinutes = 0;     // Initialize leading minutes to 0
let leadingHours = 0;       // Initialize leading hours to 0

// Variables for set interval & timer status
let timerInterval = null;       // Initialize timer interval to null
let timerStatus = "stopped";    // Initialize timer status to "stopped"

// Stop Watch Function
function stopWatch() {
    // Increment seconds by 1
    seconds++;

    // Check if seconds have reached 60 to increase minutes
    if (seconds / 60 === 1) {
        seconds = 0;            // Reset seconds to 0 when reaching 60
        minutes++;              // Increase minutes by 1

        // Check if minutes have reached 60 to increase hours
        if (minutes / 60 === 1) {
            minutes = 0;        // Reset minutes to 0 when reaching 60
            hours++;            // Increase hours by 1
        }
    }

    // Add leading zeros if necessary to maintain format (e.g., 01 instead of 1)
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();      // Add leading zero for single-digit seconds
    } 
    else {
        leadingSeconds = seconds;                       // No need for leading zero if seconds are double-digit
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();      // Add leading zero for single-digit minutes
    } 
    else {
        leadingMinutes = minutes;                       // No need for leading zero if minutes are double-digit
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();          // Add leading zero for single-digit hours
    } 
    else {
        leadingHours = hours;                           // No need for leading zero if hours are double-digit
    }

    // Update timer display with the current time
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


// Event listener for start/stop button
startStopBtn.addEventListener('click', function() {

    // If timer is stopped, start the timer
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);    // Start the timer interval
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;     // Change button icon to pause
        timerStatus = "started";                                // Update timer status
    } 
    else {
        // If timer is started, pause the timer
        window.clearInterval(timerInterval);                    // Stop the timer interval
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;       // Change button icon to play
        timerStatus = "stopped";                                // Update timer status
    }
});


// Event listener for reset button
resetBtn.addEventListener('click', function() {

    // Clear the interval to stop the timer
    window.clearInterval(timerInterval); // Stop the timer interval

    // Reset time values
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Update timer display to show 00:00:00
    document.getElementById('timer').innerHTML = "00:00:00";
});