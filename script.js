const burger = document.getElementById('burger-menu');
const menu = document.getElementsByClassName('header-nav');

const toggleMenu = () => {
    menu.classList.toggle('open');
    console.log(menu.classList);
}
burger.addEventListener('click', toggleMenu);