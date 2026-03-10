// The array of questions similar to those on the Voight-Kampff
const questions = [
  "You see a tortoise lying on its back in the hot sun. Do you help it?",
  "A child shows you their insect collection, including their kill box. Do you feel uncomfortable?",
  "You find a wallet full of cash of the street. Do you turn it in?",
  "A stray dog is injured on the side of the road. Do you stop to help it?",
  "You see someone sitting alone crying. Do you feel the urge to comfort them?"
];

// To keep track of which question we're on and what the score is
let currentQuestion = 0;
let score = 0;

// Function that loads the question to the page
function loadQuestion() {
  document.getElementById("question-text").textContent = questions[currentQuestion];
  document.getElementById("question-number").textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
}

// Function that'll run when the user clicks on yes or no
function answer(isYes) {
  // Yes counts towards empathy
  if (isYes) {
    score++;
  }

  currentQuestion++;
  // Move on to next question unless there isn't any then show the results
  if (currentQuestion < questions.length) {
    loadQuestion();
  }
  else {
    showResult();
  }
}

// Function to show the final results
function showResults() {
  document.getElementById("test-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  // Determines the users fate depending on their answers
  let verdict;
  let detail;

  if (score == 5) {
    verdict = "HUMAN";
    detail = "Full empathic responses. You are cleared.";
  }
  else if (score >= 3) {
    verdict = "INCONCLUSIVE";
    detail = "Only partial empathic responses. Further testing is needed.";
  }
  else {
    verdict = "REPLICANT";
    detail = "Lack of empathic responses. A Blade Runner will be dispatched.";
  }

  document.getElementById("verdict").textContent = verdict;
  document.getElementById("result-detail").textContent = detail;
  document.getElementById("final-score").textContent = "Empathy Score: " + score + " / " + questions.length;

  // Function to reset everything
  function restartTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("test-section").style.display = "block";
    document.getElementById("result-section")style.display = "none";
    loadQuestion();
  }
  
  // Loads up the first question when the page starts
  loadQuestion();





  

