document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    let countdownInterval;

    function startCountdown(durationInSeconds) {
        let secondsLeft = durationInSeconds;

        countdownInterval = setInterval(function () {
            const minutes = Math.floor(secondsLeft / 60);
            const seconds = secondsLeft % 60;

            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (secondsLeft === 0) {
                clearInterval(countdownInterval);
                timerElement.textContent = "Countdown Finished!";
            } else {
                secondsLeft--;
            }
        }, 1000);
    }

    startButton.addEventListener("click", function () {
        const duration = prompt("Enter countdown duration in seconds:");

        if (duration && !isNaN(duration)) {
            startCountdown(parseInt(duration, 10));
            startButton.disabled = true;
        } else {
            alert("Please enter a valid number for the countdown duration.");
        }
    });
});
