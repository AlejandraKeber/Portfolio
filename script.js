
  const hamburger = document.querySelector('.hamburger');
  const modalMenu = document.querySelector('.nav-items');
  hamburger.addEventListener('click', () => {
   // console.log('Hello world')
    modalMenu.style.left = 0;
  });

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
 // console.log('Hello world')
  modalMenu.style.left = '-100%';
});

 modalMenu.forEach((n) =>
   n.addEventListener('click', () => {
     humburger.classList.remove('active');
     nav.classList.remove('active');
   })
 );
}

