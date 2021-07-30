import './scss/style.scss'

const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector(".nav");

navToggle.classList.add("nav__toggle--v");
nav.classList.add("nav--closed");

navToggle.addEventListener("click",function(evt){
  evt.preventDefault();
  nav.classList.toggle("nav--closed");
});