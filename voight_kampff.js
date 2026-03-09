const questions = [
  {
    text: "You're watching television. Suddenly you realize there's a wasp crawling on your arm. How do you react?",
  },
  {
    text: "You’re in a desert walking along in the sand when all of the sudden you look down, and you see a tortoise, it’s crawling toward you. You reach down, you flip the tortoise over on its back. The tortoise lays on its back, its belly baking in the hot sun, beating its legs trying to turn itself over, but it can’t, not without your help. But you’re not helping. Why is that?",
  },
  {
    text: "You're reading a magazine at a sidewalk cafe. A boy approaches and asks if he can take your picture. You agree. He takes the photo. You later discover he sold it. How does that make you feel?",
  },
  {
    text: "You become pregnant by a man who has died. His parents are religious and want the child, but you don't. What do you do?",
  },
  {
    text: "You're watching a stage play. A banquet is in progress. The guest of honor suddenly begins to choke. Nobody seems to notice. What do you do?",
  },
  {
    text: "Describe in single words, only good things that come into your mind about your mother.",
  },
  {
    text: "You're given a calfskin wallet for your birthday. How do you respond?",
  },
  {
    text: "You've got a little boy. He shows you his butterfly collection, plus the killing jar. What do you do?",
  },
  {
    text: "While walking along a highway you come across a wounding dog lying at the side of the road. Cars drive past without stopping. Do you help it?",
  },
  {
    text: "You're watching the news. A replicant has escaped and is hiding in the city. Blade Runners are dispatched. Do you feel anything?",
  }
];

let currentQuestion = 0;
let scores = [];

function startTest() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('test').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('question');
  const q = questions[currentQuestion];

  container.innerHTML = `
    <div class = "question-block active">
      <p class = "question-number">Question ${currentQuestion + 1} of ${questions.length}</p>
      <p class = "question-text">${q.text}</p>
      <div class = "slider-label">
        <span>No Response</span>
        <span>Strong Response</span>
      </div>
      <input type = "range" min = "1" max = "10" value = "5" id = "slider" oninput = "updateSliderDispaly(this.value)">
      <div class = "slider-value" id = "sliderValue">5</div>
    </div>
  `;

  updateProgress();
}

