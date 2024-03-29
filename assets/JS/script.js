//Intro Page & Timer Variables
var introBox = document.querySelector("#introBox");
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var timeLeft = 60;
var timeInterval = null;


//Question Variables
var questionBox = document.querySelector("#questionBox");
var question = document.querySelector('#question');
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')
                    
//Question Content 
var questions = [
    {
        title: "Q1. Which function allows you to set a timer?",
        options: ["setTime()", "timeInterval()","startInterval()", "setInterval()"],
        answer: "setInterval()"
    },
    {
        title: "Q2. What is the function called that listens & fires arguments?",
        options: ["addListener", "clickOn", "onclick", "addEventListener"],
        answer: ".addEventListener"
    },
    {
        title: "Q.3 What do you need to do after an element is created in JavaScript?",
        options: ["concatenate", ".addto", "set", "append"],
        answer: "append"

    },
    {
        title: "Q.4 Which property allows you to save values in a web browser with no expiration?",
        options: ["store", "browswerStorage", "sessionStorage", "localStorage"],
        answer: "localStorage"

    },
    {
        title: "Q.5 What kind of loop runs a block of code as long as a specified condition is true?",
        options: ["while loop", "get loop", "index loop", "for loop"],
        answer: "for loop"

    },   
]                    

//Score & Enter Initials Variables
var quizScore = 0;
var scoreEl = document.querySelector("#score"); 
var enterInitialsBox = document.querySelector("#enterInitialsBox");
var initialsInputEl = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submitBtn");
var msgEl = document.querySelector("#msg");
var yourScoreBox = document.querySelector("#yourScoreBox");
var yourScoreEl = document.querySelector("#yourScore");
var clearBtn = document.querySelector("#clearBtn");
var backBtn = document.querySelector("#backBtn");

//---------------------------------------START QUIZ----------------------------------------------//
 
//Click Start to start timer & Question 1
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", question1);

//Timer
function countDown() {
    timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
        timerEl.textContent = 0;
        clearInterval(timeInterval);
        enterInitials (); 
    };

    }, 1000);
}  

//Removes time for incorrect selections
function timeOff() {
    timeLeft -= 10;
}

//Adds points to score for correct answers
function addPoints() {
    quizScore ++
}

//Show Question 1
function question1() {
    introBox.setAttribute("style", "display: none");
    questionBox.setAttribute("style", "display: flex"); 
    
    question.innerText = questions[0].title;
    option1.innerText = questions[0].options[0];
    option2.innerText = questions[0].options[1];
    option3.innerText = questions[0].options[2];
    option4.innerText = questions[0].answer;
    
    option1.addEventListener("click", timeOff);
    option1.addEventListener("click", question2);
    option2.addEventListener("click", timeOff);
    option2.addEventListener("click", question2); 
    option3.addEventListener("click", timeOff);
    option3.addEventListener("click", question2); 
    option4.addEventListener("click", addPoints);
    option4.addEventListener("click", question2);
}   
    
// Show Question 2
function question2() {
    question.innerText = questions[1].title;
    option1.innerText = questions[1].options[0];
    option2.innerText = questions[1].options[1];
    option3.innerText = questions[1].options[2];
    option4.innerText = questions[1].answer;

    option1.addEventListener("click", timeOff);
    option1.addEventListener("click", question3);
    option2.addEventListener("click", timeOff);
    option2.addEventListener("click", question3); 
    option3.addEventListener("click", timeOff);
    option3.addEventListener("click", question3);
    option4.addEventListener("click", addPoints); 
    option4.addEventListener("click", question3); 
}

//Show Question 3
function question3() {
    question.innerText = questions[2].title;
    option1.innerText = questions[2].options[0];
    option2.innerText = questions[2].options[1];
    option3.innerText = questions[2].options[2];
    option4.innerText = questions[2].answer;

    option1.addEventListener("click", timeOff);
    option1.addEventListener("click", question4);
    option2.addEventListener("click", timeOff);
    option2.addEventListener("click", question4); 
    option3.addEventListener("click", timeOff);
    option3.addEventListener("click", question4);
    option4.addEventListener("click", addPoints); 
    option4.addEventListener("click", question4);
}

//Show Question 4
function question4() {
    question.innerText = questions[3].title;
    option1.innerText = questions[3].options[0];
    option2.innerText = questions[3].options[1];
    option3.innerText = questions[3].options[2];
    option4.innerText = questions[3].answer;

    option1.addEventListener("click", timeOff);
    option1.addEventListener("click", question5);
    option2.addEventListener("click", timeOff);
    option2.addEventListener("click", question5); 
    option3.addEventListener("click", timeOff);
    option3.addEventListener("click", question5);
    option4.addEventListener("click", addPoints); 
    option4.addEventListener("click", question5);  
}

//Show Question 5
function question5() {
    question.innerText = questions[4].title;
    option1.innerText = questions[4].options[0];
    option2.innerText = questions[4].options[1];
    option3.innerText = questions[4].options[2];
    option4.innerText = questions[4].answer;
    
    option1.addEventListener("click", stopTimer);
    option1.addEventListener("click", enterInitials);
    option2.addEventListener("click", stopTimer);
    option2.addEventListener("click", enterInitials); 
    option3.addEventListener("click", stopTimer);
    option3.addEventListener("click", enterInitials);
    option4.addEventListener("click", stopTimer); 
    option4.addEventListener("click", addPoints);
    option4.addEventListener("click", enterInitials);
}

//Stop Timer with Click on Question 5
function stopTimer() {
    timerEl.textContent = 0;
    clearInterval(timeInterval);
} 

//Show Score & Enter Initials 
function enterInitials () { 
    questionBox.setAttribute("style", "display: none");
    enterInitialsBox.setAttribute("style", "display: flex");
    scoreEl.textContent = "Your Final Score: " + quizScore;  
}

//Submits Initials & Score to Local Storage
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var records = {
        initials: initialsInputEl.value,
        score: quizScore,
    };

    if (records.initials === "") {
        msgEl.textContent = "Initials cannot be blank";
        return;
    };

localStorage.setItem("records", JSON.stringify(records));
showYourScore();
});

//Show Your Stored Score with Initials
function showYourScore () {
    enterInitialsBox.setAttribute("style", "display: none");
    yourScoreBox.setAttribute("style", "display: flex");
    yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore + "/5";
}    

//Clears All Stored Scores
clearBtn.addEventListener("click", clearScores);

function clearScores () {
    yourScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
}

//Back Button Reloads Page
backBtn.addEventListener("click", function () {
    location.reload()
});
    







