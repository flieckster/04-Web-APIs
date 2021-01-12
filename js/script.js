let highscore = document.getElementById("#highscore");

var questions = [ 
    {
        question: "what is an array used for?\n (a) store multiple values in a single variable\n (b) store images in a single variable\n(c) a guy named ray",
        answer: "a"
    },
    {
        question: "What is bootstrap?\n (a) dockmartin laces\n (b) CSS Framework for developing responsive and mobile-first websites\n (c) css wizardary",
        answer: "b"
    }
];
var score = 0;
function askingQuestions (){
for(var i=0; i<question.length; i++){
    var responce = window.prompt(qeustions[i].prompt);
    if(responce == questions[i].answer){
        score++;
        alert ("Correct");
    }else{
        alert("wrong");
    }
}
}
askingQuestions();
highscore.innerHTML = score;

