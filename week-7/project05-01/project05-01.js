"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Exenreco Bell
      Date:   08/27/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
const questionList = document.querySelectorAll("div#quiz input");

// start quiz event listener
startQuiz.addEventListener("click", () => {
  // display the quiz
  overlay.className = "showquiz";

  // start countdown
  timeID = setInterval(countdown, 1000);
});

// Function that controls count down timer
function countdown() {
  if (timeLeft === 0) {
    // stop count down and revile answers
    // stop count down
    clearInterval(timeID);
    // store correct answers
    let totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      // all correct: alert score 100%
      window.alert("Congrats, you scored a 100%!");
    } else {
      // not all correct
      window.alert(
        `You scored a total of: ${totalCorrect} correct out ${correctAnswers.length}!`
      );

      // reset timer
      timeLeft = quizTime;
      quizClock.value = quizTime;

      // hide questions
      overlay.className = "hidequiz";
    }
  } else {
    // reduce time left
    timeLeft--;
    quizClock.value = timeLeft;
  }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}
