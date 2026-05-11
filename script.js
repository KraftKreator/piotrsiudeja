
// burger service menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-wrapper');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

