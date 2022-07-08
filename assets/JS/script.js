//Intro Page
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var introBox = document.querySelector("#introBox");

//Question Variables
var questionBox = document.querySelector("#questionBox");
var question = document.querySelector('#question');
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')
                    
//Question Content Variables
var questions = [
    {
        title: "Q1. Which function allows you to set a timer?",
        options: ["setTime()", "setInterval()","startInterval()", "setInterval()"],
        answer: "setInterval()"
    },
    {
        title: "Q2. What is the term called that allows something to happen with a click?",
        options: ["addListener", ".clickOn", ".onclick", ".addEventListener"],
        answer: ".addEventListener"
    },
    {
        title: "Q.3 What do you need to do after an element is created in JavaScript?",
        options: ["concatenate", ".addto", "set", "append"],
        answer: "append"

    },
    {
        title: "Q.4 Which property allows you to save values in a web browser until with no expiration?",
        options: ["store", "browswerStorage", "sessionStorage", "localStorage"],
        answer: "localStorage"

    },
    {
        title: "Q.5 What kind of loop runs a block of code as long as a specified condition is true?",
        options: ["while loop", "get loop", "index loop", "for loop"],
        answer: "for loop"

    },   
]                    

//"Enter Initials" Box Variables
var enterInitialsBox = document.querySelector("#enterInitialsBox");
var scoreEl = document.querySelector("#score");
var initialsInputEl = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submitBtn");
var msgEl = document.querySelector("#msg");

//"Your Score" Box Variables
var yourScoreBox = document.querySelector("#yourScoreBox");
var yourScoreEl = document.querySelector("#yourScore");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

// START QUIZ

//Click Start to start timer & Question 1
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", question1);


//Timer
function countDown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    //Takes time off the clock for the wrong answer - FIX THIS
    // WHICHVARIABLEDOIPUTHERE.addEventListener("click", function () {
    //     timerEl.textContent = timeLeft - 10; //time goes back up on the next question or -= takes more time off than needed
    // });

    // Stops timer after question 5 is answered - FIX THIS
    // WHICHVARIABLEDOIPUTHERE.addEventListener("click", function () {
    //     clearInterval(timeInterval);
    //     timerEl.textContent = 0;
    // });

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        enterInitials (); 
    };

    }, 1000);
}    

var quizScore = 0; //WHERE SHOULD I PUT THIS

//Show Question 1
function question1() {
    introBox.setAttribute("style", "display: none");
    questionBox.setAttribute("style", "display: flex"); 
    
    question.innerText = questions[0].title;
    option1.innerText = questions[0].options[0];
    option2.innerText = questions[0].options[1];
    option3.innerText = questions[0].options[2];
    option4.innerText = questions[0].options[3];
    
    option1.addEventListener("click", question2, quizScore--);
    option2.addEventListener("click", question2, quizScore--); 
    option3.addEventListener("click", question2, quizScore--); 
    option4.addEventListener("click", question2, quizScore++);  
    
    console.log(quizScore)
}    
    
// Show Question 2
function question2() {

    question.innerText = questions[1].title
    option1.innerText = questions[1].options[0]
    option2.innerText = questions[1].options[3]
    option3.innerText = questions[1].options[1]
    option4.innerText = questions[1].options[2]

    option1.addEventListener("click", question3, quizScore--); 
    option2.addEventListener("click", question3, quizScore++); 
    option3.addEventListener("click", question3, quizScore--); 
    option4.addEventListener("click", question3, quizScore--); 

    console.log(quizScore)
}

//Show Question 3
function question3() {
    question.innerText = questions[2].title
    option1.innerText = questions[2].options[3]
    option2.innerText = questions[2].options[0]
    option3.innerText = questions[2].options[1]
    option4.innerText = questions[2].options[2]

    option1.addEventListener("click", question4, quizScore++); 
    option2.addEventListener("click", question4, quizScore--); 
    option3.addEventListener("click", question4, quizScore--); 
    option4.addEventListener("click", question4, quizScore--);

    console.log(quizScore)
}

//Show Question 4
function question4() {
    question.innerText = questions[3].title
    option1.innerText = questions[3].options[0]
    option2.innerText = questions[3].options[1]
    option3.innerText = questions[3].options[3]
    option4.innerText = questions[3].options[2]

    option1.addEventListener("click", question5, quizScore--); 
    option2.addEventListener("click", question5, quizScore--); 
    option3.addEventListener("click", question5, quizScore++); 
    option4.addEventListener("click", question5, quizScore--);

    console.log(quizScore)
}

//Show Question 5
function question5() {
    question.innerText = questions[4].title
    option1.innerText = questions[4].options[3]
    option2.innerText = questions[4].options[0]
    option3.innerText = questions[4].options[1]
    option4.innerText = questions[4].options[2]

    option1.addEventListener("click", enterInitials, quizScore++); 
    option2.addEventListener("click", enterInitials, quizScore--); 
    option3.addEventListener("click", enterInitials, quizScore--); 
    option4.addEventListener("click", enterInitials, quizScore--);

    console.log(quizScore)
}

//Show Score & Enter Initials // STOP COUNTDOWN HERE!!!!!
function enterInitials () {
    questionBox.setAttribute("style", "display: none");
    enterInitialsBox.setAttribute("style", "display: flex");
    scoreEl.textContent = "Your Final Score: " + quizScore + "/10";  
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
    yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore;
}    

//Back Button To Intro Page (keeps score)
backBtn.addEventListener("click", function () {
    yourScoreBox.setAttribute("style", "display: none");
    introBox.setAttribute("style", "display: flex");
});
    
//Clears All Stored Scores
clearBtn.addEventListener("click", clearScores);

function clearScores () {
    yourScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
}





