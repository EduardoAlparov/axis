const btnMenu = document.querySelector('.hamburger-menu');
const fixedMenu = document.querySelector('.fixed-menu');
const bodyOverflow = document.querySelector('body');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('hamburger-menu--active');
    fixedMenu.classList.toggle('fixed-menu--active');
    bodyOverflow.classList.toggle('fixed-menu-open');
})
