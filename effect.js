function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}



let theme = localStorage.getItem('theme');

const enableDarkMode = () => {
  document.body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
  updateSelectedBorder('dark');
};

const enableLightMode = () => {
  document.body.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light');
  updateSelectedBorder('light');
};

if (theme === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}



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
});
