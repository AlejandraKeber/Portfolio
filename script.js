const hamburger = document.querySelector('.hamburger');
const modalMenu = document.querySelector('.nav-items');
hamburger.addEventListener('click', () => {
  modalMenu.style.left = 0;
});

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closePortfolio = document.querySelector('.Portfolio');
closePortfolio.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closeAbout = document.querySelector('.About');
closeAbout.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closeContact = document.querySelector('.Contact');
closeContact.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const projects = [
  {
    title: 'Tonic',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tec: ['html', 'css', 'javaScript'],
    image: './Images/Works/Snapshoot-Portfolio-Desktop.png',
    link: 'https://www.github.com',
  },
  {
    title: 'Mutli-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/Snapshoot-Portfolio2-Desktop.png',
    link: 'https://www.github.com',
  },
  {
    title: 'Facebook 360',
    details: ['CANOPY', 'Full Stack Dev', '2015'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/Snapshoot-Portfolio3-Desktop.png',
    link: 'https://www.github.com',
  },
  {
    title: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/Snapshoot-Portfolio4-Destop.png',
    link: 'https://www.github.com',
  }
];

for (let i=0; i<projects.length; i++) {
  let cards = document.createElement("div");
  cards.classList.add("cards");

  let projectinfo = document.createElement("div");
  projectinfo.classList.add("projectinfo");
  projectinfo.classList.add("sec1"); 

  let img = document.createElement('img');
  img.src = projects[i].image;
  img.alt = 'project image';

  let projecttitle = document.createElement("h2");
  projecttitle.classList.add("projecttitle");
  projecttitle.textContent = projects[i].title;

  let projectdetail = document.createElement("div");
  projectdetail.classList.add("projectdetail");

  let details = document.createElement("p")
  details.classList.add("details")
  details.textContent = projects[i].details;

  let headlinecont_work = document.createElement("p")
  headlinecont_work.classList.add("headlinecont_work")
  headlinecont_work.textContent = projects[i].description;

  projectinfo.appendChild(projecttitle);
  projectinfo.appendChild(projectdetail);
  projectinfo.appendChild(headlinecont_work);


  document.querySelector(".cards").appendChild(cards);  
}