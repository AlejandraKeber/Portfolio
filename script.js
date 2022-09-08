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
    image: './Images/Works/SnapshootPortfolio1.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/',
    linkUrl: 'https://github.com/AlejandraKeber/Project-setup-and-mobile-main',
  },
  {
    title: 'Mutli-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/SnapshootPortfolio2.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/',
    linkUrl: 'https://github.com/AlejandraKeber/Project-setup-and-mobile-main',
  },
  {
    title: 'Facebook 360',
    details: ['CANOPY', 'Full Stack Dev', '2015'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/SnapshootPortfolio3.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/',
    linkUrl: 'https://github.com/AlejandraKeber/Project-setup-and-mobile-main',
  },
  {
    title: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/SnapshootPortfolio4.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/',
    linkUrl: 'https://github.com/AlejandraKeber/Project-setup-and-mobile-main',
  }
];

for (let i=0; i<projects.length; i += 1) {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  const projectcontainer = document.createElement("div");
  projectcontainer.classList.add("projectcontainer");
  cards.appendChild(projectcontainer);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const projectimg = document.createElement("img");
  projectimg.src = projects[i].image;
  projectimg.alt = 'project image';
  projectimg.style.width = '100%';
  projectimg.style.height = 'auto';
  projectcontainer.appendChild(imgContainer);
  imgContainer.appendChild(projectimg);

  const projectdetails = document.createElement("div");
  projectdetails.classList.add("projectdetails");
  projectcontainer.appendChild(projectdetails);

  const projecttitle = document.createElement("h2");
  projecttitle.classList.add("projecttitle");
  projecttitle.textContent = projects[i].title;
  projectdetails.appendChild(projecttitle);

  const projectdet = document.createElement("ul");
  projectdet.classList.add("projectdet");
  for (let count = 0; count < projects[i].details.length; count++) {
    const item = document.createElement("li");
    const company = document.createElement("p");
    const text = document.createTextNode(projects[i].details[count]);
    company.appendChild(text);
    item.appendChild(company);
    projectdet.appendChild(item);
  }
  projectdetails.appendChild(projectdet);

  const headlinecont_work = document.createElement("p");
  headlinecont_work.classList.add("headlinecont_work");
  headlinecont_work.textContent = projects[i].description;
  projectdetails.appendChild(headlinecont_work);

  const smallbuttons = document.createElement("ul");
  smallbuttons.classList.add("smallbuttons");
  for (let counter = 0; counter < projects[i].tec.length; counter++) {
    const item = document.createElement("li");
    const text = document.createTextNode(projects[i].tec[counter]);
    item.appendChild(text);
    item.classList.add("button_small");
    smallbuttons.appendChild(item);
  }
  projectdetails.appendChild(smallbuttons);

  const button_big = document.createElement("button");
  button_big.classList.add("button_big")
  button_big.setAttribute('type', 'button');
  const butText = document.createTextNode('See Project');
  button_big.appendChild(butText);
  projectdetails.appendChild(button_big);

  if (i % 2 === 0) {
    projectcontainer.appendChild(imgContainer);
    projectcontainer.appendChild(projectdetails);
  } else {
    projectcontainer.appendChild(projectdetails);
    projectcontainer.appendChild(imgContainer);
  }

  document.querySelector(".cards").appendChild(cards);
}

const openPopup = document.querySelector('.button_big');
const modalPopup = document.querySelector('.popupcont');
const closePopup = document.querySelector('.popclose');

openPopup.addEventListener('click', () => {
  modalPopup.classList.add('show');
}); 

closePopup.addEventListener('click', () => {
  modalPopup.classList.remove('show');
}); 
