let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-moon');
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};