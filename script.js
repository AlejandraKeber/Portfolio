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
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/SnapshootPortfolio4.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/',
    linkUrl: 'https://github.com/AlejandraKeber/Project-setup-and-mobile-main',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const cards = document.createElement('div');
  cards.classList.add('cards');

  const projectcontainer = document.createElement('div');
  projectcontainer.classList.add('projectcontainer');
  cards.appendChild(projectcontainer);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const projectimg = document.createElement('img');
  projectimg.src = projects[i].image;
  projectimg.alt = 'project image';
  projectimg.style.width = '100%';
  projectimg.style.height = 'auto';
  projectcontainer.appendChild(imgContainer);
  imgContainer.appendChild(projectimg);

  const projectdetails = document.createElement('div');
  projectdetails.classList.add('projectdetails');
  projectcontainer.appendChild(projectdetails);

  const projecttitle = document.createElement('h2');
  projecttitle.classList.add('projecttitle');
  projecttitle.textContent = projects[i].title;
  projectdetails.appendChild(projecttitle);

  const projectdet = document.createElement('ul');
  projectdet.classList.add('projectdet');
  for (let count = 0; count < projects[i].details.length; count += 1) {
    const item = document.createElement('li');
    const company = document.createElement('p');
    const text = document.createTextNode(projects[i].details[count]);
    company.appendChild(text);
    item.appendChild(company);
    projectdet.appendChild(item);
  }
  projectdetails.appendChild(projectdet);

  const headlinecontwork = document.createElement('p');
  headlinecontwork.classList.add('headlinecont_work');
  headlinecontwork.textContent = projects[i].description;
  projectdetails.appendChild(headlinecontwork);

  const smallbuttons = document.createElement('ul');
  smallbuttons.classList.add('smallbuttons');
  for (let counter = 0; counter < projects[i].tec.length; counter += 1) {
    const item = document.createElement('li');
    const text = document.createTextNode(projects[i].tec[counter]);
    item.appendChild(text);
    item.classList.add('button_small');
    smallbuttons.appendChild(item);
  }
  projectdetails.appendChild(smallbuttons);

  const buttonbig = document.createElement('button');
  buttonbig.classList.add('button_big');
  buttonbig.setAttribute('type', 'button');
  const butText = document.createTextNode('See Project');
  buttonbig.appendChild(butText);
  projectdetails.appendChild(buttonbig);

  if (i % 2 === 0) {
    projectcontainer.appendChild(imgContainer);
    projectcontainer.appendChild(projectdetails);
  } else {
    projectcontainer.appendChild(projectdetails);
    projectcontainer.appendChild(imgContainer);
  }

  document.querySelector('.cards').appendChild(cards);
}

/* Popup window for project details */
const openPopup = document.querySelectorAll('.button_big');
const modalPopup = document.querySelector('.popupcont');
const closePopup = document.getElementById('closeModal');

for (let index = 0; index < openPopup.length; index += 1) {
  openPopup[index].setAttribute('data-index', index);
  openPopup[index].addEventListener('click', (e) => {
    const p = e.target.getAttribute('data-index');
    modalPopup.querySelector('.poptitle').innerHTML = projects[p].title;
    modalPopup.querySelector('.popimge').src = projects[p].image;
    modalPopup.querySelector('.popdescrip').innerHTML = projects[p].popupdescription;
    modalPopup.querySelector('.live').href = projects[p].linkLive;
    modalPopup.querySelector('.source').href = projects[p].linkUrl;
    modalPopup.style.display = 'block';
  });
}

closePopup.addEventListener('click', () => {
  modalPopup.style.display = 'none';
});

/* Validate email form */
const email = document.getElementById('email');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    document.querySelector('#error').innerHTML = 'Please write the email in lower case';
  }
});
