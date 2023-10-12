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

  
    titleElement.textContent = "Age Timer";

   
    titleElement.style.display = "none";
    ageLabelElement.style.display = "none";
    birthdateInput.style display = "none";
    startButton.style.display = "none";

    let ageYears = 0;

    function updateTimer() {
        const now = new Date();
        const ageMilliseconds = now - birthdate;

       
        ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

        
        timerElement.innerHTML = `<span class="gradient-text">${ageYears.toFixed(12).substring(0, 13)}</span>`;
    }

  
    timerElement.style.display = "block";

    updateTimer();
    setInterval(updateTimer, 45); 
}
