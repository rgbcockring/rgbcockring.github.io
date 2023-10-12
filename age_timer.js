function startTimer() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const timerElement = document.getElementById("timer");
    const titleElement = document.getElementById("title");
    const ageLabelElement = document.getElementById("ageLabel");
    const birthdateInput = document.getElementById("birthdate");
    const startButton = document.querySelector("button");

    if (!birthdate || isNaN(birthdate)) {
        timerElement.innerHTML = "Please enter a valid birthdate.";
        return;
    }

    // Change the title immediately
    titleElement.textContent = "Age Timer";

    // Hide elements
    titleElement.style.display = "none";
    ageLabelElement.style.display = "none";
    birthdateInput.style.display = "none";
    startButton.style.display = "none";

    let ageYears = 0;

    function updateTimer() {
        const now = new Date();
        const ageMilliseconds = now - birthdate;

        // Calculate age in years
        ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

        // Apply the gradient effect to the entire age
        timerElement.innerHTML = `<span class="gradient-text">${ageYears.toFixed(12)}</span>`;
    }

    // Show the timer element before starting the timer
    timerElement.style.display = "block";

    updateTimer();
    setInterval(updateTimer, 45); // Update the timer every 45 milliseconds
}
