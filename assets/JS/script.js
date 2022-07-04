// addEventListener to start button that will begin timer & displays question
//answered correctly.. add bottom box border with "Correct!" move on
//answered incorrectly.. add bottom box border with "Wrong!" & subtract time from timer
//all questions answered or timer reaches 0.. game over
//save initials and score 

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var introTextEl = document.querySelector("#introText");

var questionBox1 = document.querySelector("#questionBox1");
var questionBox2 = document.querySelector("#questionBox2");
var questionBox3 = document.querySelector("#questionBox3");
var questionBox4 = document.querySelector("#questionBox4");
var questionBox5 = document.querySelector("#questionBox5");

//Click start to start timer & start quiz
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", startQuiz);

//Timer
function countDown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

//Transition to Question 1 
function startQuiz() {
    introTextEl.setAttribute("style", "display: none");
    questionBox1.setAttribute("style", "display: flex");
    showQuestion1()
}

//Question 1 
function showQuestion1 () {
    questionBox1.children[0].textContent = "My first question";
    questionBox1.children[1].children[0].textContent = "what's up"
    questionBox1.children[1].children[1].textContent = "how are you";
    questionBox1.children[1].children[2].textContent = "see ya";
    questionBox1.children[1].children[3].textContent = "goodbye";
    if (answerButtons1.addEventListener("click", transition1)) { //CHANGE ANSWERBUTTONS1 TO THE CORRECT ANSWER BUTTON
        console.log("you win")
    } else {
        console.log("time off clock")
    }

}

//Transition to Question 2
function transition1() {
    questionBox1.setAttribute("style", "display: none")
    questionBox2.setAttribute("style", "display: flex")
    showQuestion2()
}

//Question 2
function showQuestion2 () {
    questionBox2.children[0].textContent = "My second question";
    questionBox2.children[1].children[0].textContent = "good morning";
    questionBox2.children[1].children[1].textContent = "good afternoon";
    questionBox2.children[1].children[2].textContent = "good day";
    questionBox2.children[1].children[3].textContent = "good night";
}

function selectAnswer () {


}





