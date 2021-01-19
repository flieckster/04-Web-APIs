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



let correctorwrong = document.getElementById("correctorWrong");
let userfeedback = document.getElementById("userfeedback");
let questionsleft = document.getElementById("questionsleft");


let highScoresArchive = document.getElementById("UserHighScoreArchive");
let username = document.getElementById("userName");
let userNameScore = document.getElementById("userNameScore");
let submitButton = document.getElementById("submitBtn");

var secondsLeft = 90;
let score = 0;
var highscoreUser = localStorage.getItem("score");
//using this later for display of the 

var currentQuestion = 0;


//make question area larger text!
askQuestionsDisplay.style.fontSize = "30px";
userfeedback.style.fontSize = "30px";
endGame.style.display = "none";
highScoresArchive.style.display = "none";
multipleChoiceButtons.style.display = "none";

startButton.addEventListener("click", startQuiz);

//start quiz 
function startQuiz() {
  setTime();
  askingQuestions();
  multipleChoiceButtons.style.display = "block";
};


function setTime() {
  instructions.style.display = "none";

  var timerInterval = setInterval(function () {
    secondsLeft--;
      CountDownTimer.textContent = "time remaining: " + secondsLeft;

      if ((currentQuestion === questionsToAsk.length)) {
          clearInterval(timerInterval);
          var usersTime = secondsLeft;
          correctorWrong.style.display = "none";
          userfeedback.textContent = "You completed the quiz with " + secondsLeft + " seconds left!";

          endOfGame();
      }

      if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          correctorWrong.style.display = "none";
          userfeedback.textContent = "You completed the quiz with " + secondsLeft + " seconds left!";
          endOfGame();
      }
  }, 1000);
}


//question asking 
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
      correctorWrong.textContent = "correct!";

    } else {
      currentQuestion++;
      secondsLeft = secondsLeft - 10;
      correctorWrong.textContent = "wrong!";
    }
    askingQuestions();
  
    
  }
});

//make high score section a clickable section
highscore.addEventListener("click", function (event) {
  if (endQuizGreeting.style.display === "none") {
    endQuizGreeting.style.display = "block";
    UserHighScoreArchive.style.display = "block";
      storePlayerInfo();
  } else {
    endQuizGreeting.style.display = "none";
    UserHighScoreArchive.style.display = "none";

  }
})

submitButton.addEventListener("click", function (event) {

  event.preventDefault();
  let finalScoresDisplayed = [];
  var usersTime = secondsLeft;
  var usersInitials = initialsInput.value;
 


  finalScoresDisplayed.push({"user": usersInitials, "time": usersTime});
  // finalScoresDisplayed.push(usersTime);
  localStorage.setItem("score", JSON.stringify(finalScoresDisplayed));
  storePlayerInfo();
  endOfGame();


})

function storePlayerInfo() {
  const finalScoresDisplayed = localStorage.getItem("score");
  personName = JSON.parse({"score":user});
  personNametime = JSON.parse({"score":time});
console.log(JSON.parse({"score":time}));
 username.innerHTML = personName.user;
 userNameScore.innerHTML = personNametime.time;
}

  function endOfGame() {
    askQuestionsDisplay.style.display = "none";
    multipleChoiceButtons.style.display = "none";
    endQuizGreeting.style.display = "block";
    UserHighScoreArchive.style.display = "block";

  }