function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  let theme = localStorage.getItem('theme');

  const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  };

  const enableLightMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  };

  if (theme === 'dark') {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  const quiz = {
    question: "How frequently do fast fashion brands typically release new collections?",
    answers: [
      "Once every six months",
      "Once a month",
      "Weekly or even daily",
      "Once a year"
    ],
    correctIndex: 2,
    explanation: "Fast fashion brands frequently release new collections—sometimes weekly or daily—to keep up with changing trends and encourage more purchases. This rapid turnover leads to overproduction and overconsumption, resulting in significant environmental damage and waste."
  };

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const explanationEl = document.getElementById("explanation");
  const submitBtn = document.getElementById("submit");

  let selectedAnswer = null;

  questionEl.textContent = quiz.question;
  quiz.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => {
      Array.from(answersEl.children).forEach(b => b.classList.remove("selected"));
      
      btn.classList.add("selected");
      selectedAnswer = index;
      submitBtn.disabled = false;
    });
    answersEl.appendChild(btn);
  });

  submitBtn.addEventListener("click", () => {
    Array.from(answersEl.children).forEach((btn, index) => {
      btn.disabled = true; 
      
      if (index === quiz.correctIndex) {
        btn.classList.add("correct");
      }
      
      if (index === selectedAnswer && index !== quiz.correctIndex) {
        btn.classList.add("wrong");
      }
    });
    explanationEl.textContent = quiz.explanation;
    explanationEl.style.display = 'block'; 
    submitBtn.disabled = true;
  });
});
