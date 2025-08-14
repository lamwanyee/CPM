function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
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
