function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}

if (theme === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}

lightModeBtn.addEventListener('click', enableLightMode);
darkModeBtn.addEventListener('click', enableDarkMode);
