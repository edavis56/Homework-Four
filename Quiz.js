
//This creates an object called introElement. 
const introduction = document.querySelector("#intro");
console.log(intro);
const startButton = document.querySelector("#startQuiz");

const quizA = document.querySelector("#quiz");
const question = document.querySelector("#questions");
console.log(questions)
const answers = document.querySelector("#answer");
const scoreSpan = document.querySelector("#score");
const submitScore = document.querySelector("#submitInitials");
const initialInput = document.querySelector("#initials");
const highScoreDiv = document.querySelector("#scores");
const scoreInputDiv = document.querySelector("#scoreInput");
const highScoresDiv = document.querySelector("#highScores");


//This creates an event attached to the click on the startButton const mentioned above. When clicked the button will have th following functions happen. This function is completed with several Methods.

startButton.addEventListener("click", function () {
    hide(introduction);
    show(quizA);
    startTimer();
    makeQuestion();
});
console.log(startButton);

//This is where the score submit saves the values to the local storage in a key value 
submitScore.addEventListener("click", function() {
console.log(score)
console.log(initialInput.value)
localStorage.setItem(initialInput.value, score)


hide(scoreInputDiv)
show(highScoresDiv)
var items = {...localStorage}
console.log(items)
var initials = Object.keys(items)//This created an array of the keys in the key value pair
console.log(initials)
for (i=0; i < initials.length; i++){
    var h2Element = document.createElement("h2")
    h2Element.textContent = initials[i] + ", " + items[initials[i]]
    highScoreDiv.append(h2Element)
}
})

// Below defines the Methods above via a function. All of these methods are tied to the click of the start button 
function hide(element) {
   element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

function startTimer() {    
    timer.textContent = time;//This setups up the start time, that being 75 seconds
    interval = setInterval(function(){
        seconds++;
        timer.textContent = time - seconds;//This updates the displayed text content 
        if (seconds >= time){ //The if statement is setting up a seconds counter that is then subtracted from the start time of 75 seconds. 
            currentQuestion = quizQuestions.length;
            nextQuestion();
        }
    }, 1000);
}

//These variables allow the above function to call upon them. These have been setup as variables to make changes to them simple. Not, only the timer is a constant. This will keep it from being overwritten/changed
const timer = document.querySelector("#timer");
var time = 75;
var seconds = 0;
var interval;
var currentQuestion = 0;
var score = 0;
var highScore;

//The below function is pull the questions and options
    function makeQuestion() {
   question.textContent = quizQuestions[currentQuestion].q;
    for (i = 0; i < answers.children.length; i++) {
        console.log(answers.children[i].children[0])
        answers.children[i].children[0].textContent = `${(i + 1)}: ${quizQuestions[currentQuestion].options[i]}`;
    }
}


function nextQuestion (){
    currentQuestion++;
    if (currentQuestion < quizQuestions.length)//THis is setting up an argument that the current question array number is less then the questions array length. This is why the questions were setup in an array within the questions JavaScript file. 
    {
        makeQuestion ();
    } else {
        stopTimer();
        if ((time - seconds) > 0)
        score += (time - seconds);
        scoreSpan.textContent = score;
    hide(quizA);
    show(scoreInput);
    timer.textContent = 0;
    }
}

answer.addEventListener("click", function (selection) {
    if (selection.target.matches("button")) {
        checkAnswer(selection.target);
        nextQuestion();
    }
});

function checkAnswer(a) {
    if (quizQuestions[currentQuestion].a == quizQuestions[currentQuestion].options[a.id]) {
        score += 5;
    }
    else {
        seconds += 10;
    }
}

function stopTimer (){
    clearInterval(interval)
}


