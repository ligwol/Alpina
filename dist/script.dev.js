"use strict";

var burger = document.getElementById('burger-menu');
var menu = document.getElementsByClassName('header-nav');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('open');
  console.log(menu.classList);
};

burger.addEventListener('click', toggleMenu);