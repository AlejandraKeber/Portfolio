
  const hamburger = document.querySelector('.hamburger');
  const modalMenu = document.querySelector('.nav-items');
  hamburger.addEventListener('click', () => {
    modalMenu.style.left = 0;
  });

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

/* const closePortfolio = document.querySelector('#Portfolio');
closePortfolio.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
}); */

  modalMenu.forEach((n) =>
   n.addEventListener('click', () => {
     hamburger.classList.remove('active');
     nav.classList.remove('active');
   }));

