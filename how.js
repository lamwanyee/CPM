function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal.active').forEach(modal => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

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
    question: "What percentage of global carbon emissions is attributed to the fashion industry?",
    answers: [
      "2%",
      "10%",
      "15%",
      "25%"
    ],
    correctIndex: 1,
    explanation: "The fashion industry is responsible for about 10% of global carbon emissions, making it a major polluter. The pollution comes from all stages of production, like farming raw materials, making textiles, dyeing, transporting products, and waste from short product life cycles."
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
