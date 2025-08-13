function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}


function showSidebar() {
  document.querySelector('.sidebar').style.display = 'flex';
}
function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

const lightModeBtn = document.querySelector('.lightmode img');
const darkModeBtn = document.querySelector('.darkmode img');

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

function updateSelectedBorder(mode) {
  if (mode === 'dark') {
    darkModeBtn.classList.add('selected');
    lightModeBtn.classList.remove('selected');
  } else {
    lightModeBtn.classList.add('selected');
    darkModeBtn.classList.remove('selected');
  }
}


if (theme === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}

lightModeBtn.addEventListener('click', enableLightMode);
darkModeBtn.addEventListener('click', enableDarkMode);
