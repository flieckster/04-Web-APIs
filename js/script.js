let highscore = document.getElementById("#highscore");
let endGame = document.getElementById("endQuizGreeting");
let multipleChoiceButtons = document.getElementById("#multipleChoiceButtons");
let askQuestionsDisplay = document.getElementById("#questions");
let CountDownTimer = document.getElementById("#timer");
let instructions = document.getElementById("#instructions");
let startButton = document.getElementById("#start");

let buttonA = document.getElementById("#a");
let buttonB = document.getElementById("#b");
let buttonC = document.getElementById("#c");

let highScoresArchive = document.getElementById("UserHighScoreArchive");
let username = document.getElementById("userName");
let userNameScore = document.getElementById("userNameScore");

var secondsLeft = 90;
let score = 0;
//using this later for display of the 
var highscoreUser = localStorage.getItem("score");
var currentQuestion = 0;
//make question area larger text!
askQuestionsDisplay.style.fontSize = "30px";
endGame.style.display = "none";
highScoresArchive.style.display = "none";

startButton.addEventListener("click", startQuiz);

//start quiz 
function startQuiz() {
  setTime();
  askingQuestions();
};



function setTime() {
  // Sets interval in variable
  // hide the instructions portion of quiz
  instructions.style.display = "none";

  var timerInterval = setInterval(function () {
    secondsLeft--;
    CountDownTimer.textContent = "time remaining: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);

    }

  }, 1000);
}

function askingQuestions() {
  if (currentQuestion === questionsToAsk.length) {


  }
  askQuestionsDisplay.textContent = questionsToAsk[currentQuestion].question;
  buttonA.textContent = questionsToAsk[currentQuestion].multipleChoice[0];
  buttonB.textContent = questionsToAsk[currentQuestion].multipleChoice[1];
  buttonC.textContent = questionsToAsk[currentQuestion].multipleChoice[2];

};




//multiple choice section
multipleChoiceButtons.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    if (event.target.textContent === questionsToAsk[currentQuestion].answer) {
      currentQuestion++;
      score++;
      highscore.textContent = "View Highscores: " + score;
      console.log(score);


    } else {
      currentQuestion++;
      secondsLeft = secondsLeft - 10;

    }
    askingQuestions();
  
    
  }
});


highscore.addEventListener("click", function (event) {
  if (endQuizGreeting.style.display === "none") {
    endQuizGreeting.style.display = "block";
    UserHighScoreArchive.style.display = "block";
      // storePlayerInfo();
  } else {
    endQuizGreeting.style.display = "none";
    UserHighScoreArchive.style.display = "none";

  }
})
//keep score secton
// function scoreKeeper() {
//   if (score > 0) {

//     // localStorage.setItem("highscore", score);
//   }
// }

  function endOfGame() {
    endQuizGreeting.style.display = "block";
    UserHighScoreArchive.style.display = "block";

  }