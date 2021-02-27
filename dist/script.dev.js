"use strict";

var burger = document.getElementById('burger-menu');
var menu = document.getElementById('main-menu');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);