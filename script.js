
// burger service menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-wrapper');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

