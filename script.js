const burger = document.getElementById('burger-menu');
const menu = document.getElementById('main-menu');
const header = document.getElementById('header-nav');

const toggleMenu = () => {
    menu.classList.toggle('open');
    header.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);

/******Images Slide*******/
const img1 = document.getElementById('mb-img1');
const img2 = document.getElementById('mb-img2');
const img3 = document.getElementById('mb-img3');
const imArr = document.querySelectorAll('.img');

const img1Slide = () => {
    imArr.forEach(ims => {
        ims.classList.remove('center');
    });
    img1.classList.toggle('center');
}
const img2Slide = () => {
    imArr.forEach(ims => {
        ims.classList.remove('center');
    });
    img2.classList.toggle('center');
}
const img3Slide = () => {
    imArr.forEach(ims => {
        ims.classList.remove('center');
    });
    img3.classList.toggle('center');
}

img1.addEventListener('click', img1Slide);
img2.addEventListener('click', img2Slide);
img3.addEventListener('click', img3Slide);

