
  const hamburger = document.querySelector('.hamburger');
  const modalMenu = document.querySelector('.nav-items');
  hamburger.addEventListener('click', () => {
    console.log('Hello world')
    modalMenu.style.left = 0;
  });


const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
  console.log('Hello world')
  modalMenu.style.display = 'block';
});



/* function myFunction() {
  var x = document.getElementById('.nav-items');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/