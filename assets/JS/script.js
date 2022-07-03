// addEventListener to start button that will begin timer & displays question
//answered correctly.. add bottom box border with "Correct!" move on
//answered incorrectly.. add bottom box border with "Wrong!" & subtract time from timer
//all questions answered or timer reaches 0.. game over
//save initials and score 

var timerEl = document.getElementById("#timer");
var startbtn = document.getElementById("#startbtn");

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startbtn.addEventListener("click", function (){
    countdown();
});


