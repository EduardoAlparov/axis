(function menuNavigation() {
  const menuLinks = document.querySelectorAll('.menu__link');
  const sections = document.querySelectorAll('.section-outer');
  const arrowUp = document.querySelector('.arrow-link');
  const arrowBlock = document.querySelector('.arrow-fixed-block');

  // навигация по меню
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
      e.preventDefault();
  
      const idByhref = e.target.getAttribute('href').replace('#', '');
      const sectionById = document.getElementById(idByhref);

      sectionById.scrollIntoView({block: 'start', behavior: 'smooth'});
    })
  })

  // стролочка вверх с анимацией, невидима на первой странице
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > (sections[0].offsetHeight / 2) && document.body.clientWidth > 768) {
      arrowBlock.style.visibility = 'visible';

      arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.scrollIntoView({block: 'start', behavior: 'smooth'});
      })
    } else {
      arrowBlock.style.visibility = 'hidden';
    }
  })
})()