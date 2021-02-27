const burger = document.getElementById('burger-menu');
const menu = document.getElementById('main-menu');

const toggleMenu = () => {
    menu.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);