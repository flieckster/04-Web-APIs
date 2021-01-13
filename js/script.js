let highscore = document.getElementById("#highscore");
let multipleChoiceButtons = document.getElementById("#multipleChoiceButtons");
let askQuestionsDisplay = document.getElementById("#questions");
let CountDownTimer = document.getElementById("#timer");
let instructions = document.getElementById("#instructions");
let startButton = document.getElementById("#start");
let buttonA = document.getElementById("#a");
let buttonB = document.getElementById("#b");
let buttonC = document.getElementById("#c");
var secondsLeft = 90;
// var score = '';
var currentQuestion = 0;


startButton.addEventListener("click", startQuiz);

function startQuiz () {
setTime();
askingQuestions();
};



function setTime() {
    // Sets interval in variable
    // hide the instructions portion of quiz
    instructions.style.visibility = "hidden";

    var timerInterval = setInterval(function() {
      secondsLeft--;
      CountDownTimer.textContent = "time remaining: " + secondsLeft;
  
      if(currentQuestion === questionsToAsk.length) {
        clearInterval(timerInterval);
      }else{

      }
  
    }, 1000);
  }

  function askingQuestions () {
    if (currentQuestion === questionsToAsk.length){
        // askQuestionsDisplay.style.visibility = "hidden";

    }
askQuestionsDisplay.textContent = questionsToAsk[currentQuestion].question;
buttonA.textContent = questionsToAsk[currentQuestion].multipleChoice[0];
buttonB.textContent = questionsToAsk[currentQuestion].multipleChoice[1];
buttonC.textContent = questionsToAsk[currentQuestion].multipleChoice[2];

};

multipleChoiceButtons.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (event.target.textContent === questionsToAsk[currentQuestion].answer) {
            currentQuestion++;

        } else {
            currentQuestion++;
            secondsLeft = secondsLeft - 10;

        }
        askingQuestions();
    }
});


