// Add Dark-mode
document.addEventListener('DOMContentLoaded', () => {
const btnDarkMode= document.getElementById('btn-dark-mode');
const iconDark= document.getElementById('icon-dark');
const iconLight= document.getElementById('icon-light');

let stateToggleDarkMode = false;
btnDarkMode.addEventListener('click', () => {
if(stateToggleDarkMode){
    document.body.classList.add('dark-mode');
    iconDark.style.display='block';
    iconLight.style.display='none';
    document.body.classList.add('transition-translate-bg');
} else {
    document.body.classList.remove('dark-mode')
    iconLight.style.display='block';
    iconDark.style.display='none';
}
stateToggleDarkMode = !stateToggleDarkMode;
});
});
