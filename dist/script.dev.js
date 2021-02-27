"use strict";

var burger = document.getElementById('burger-menu');
var menu = document.getElementById('main-menu');
var header = document.getElementById('header-nav');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('open');
  header.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);