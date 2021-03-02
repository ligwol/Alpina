"use strict";

var burger = document.getElementById('burger-menu');
var menu = document.getElementById('main-menu');
var header = document.getElementById('header-nav');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('open');
  header.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);
/******Images Slide*******/

var img1 = document.getElementById('mb-img1');
var img2 = document.getElementById('mb-img2');
var img3 = document.getElementById('mb-img3');
var imArr = document.querySelectorAll('.img');

var img1Slide = function img1Slide() {
  imArr.forEach(function (ims) {
    ims.classList.remove('center');
  });
  img1.classList.toggle('center');
};

var img2Slide = function img2Slide() {
  imArr.forEach(function (ims) {
    ims.classList.remove('center');
  });
  img2.classList.toggle('center');
};

var img3Slide = function img3Slide() {
  imArr.forEach(function (ims) {
    ims.classList.remove('center');
  });
  img3.classList.toggle('center');
};

img1.addEventListener('click', img1Slide);
img2.addEventListener('click', img2Slide);
img3.addEventListener('click', img3Slide);