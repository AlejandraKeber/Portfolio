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
    title: 'Conference Page',
    details: ['MICROVERSE', 'Front End Dev', '2022'],
    description: 'This is a capstone project for the first module at Microverse. It is based on an online website for a conference. It contains information about the event and the speakers. It is created using javaScript, html and CSS.',
    popupdescription: 'This is a capstone project for the first module at Microverse. It is based on an online website for a conference. It contains information about the event and the speakers. It is created using javaScript, html and CSS.',
    tec: ['html', 'css', 'javaScript'],
    image: './Images/Works/confpagedesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/Conference-Page/',
    linkUrl: 'https://github.com/AlejandraKeber/Conference-Page',
  },
  {
    title: 'Awesome Books',
    details: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'This is a single-page application to add and remove information about books and store the data at local storage. It is created using JavaScript ES6 language.',
    popupdescription: 'This is a single-page application to add and remove information about books and store the data at local storage. It is created using JavaScript ES6 language.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/awesomebooksdesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/Awesome-Books-ES6/',
    linkUrl: 'https://github.com/AlejandraKeber/Awesome-Books-ES6',
  },
  {
    title: 'To Do List',
    details: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is created using javaScript ES6 language.',
    popupdescription: 'App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is created using javaScript ES6 language.',
    tec: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './Images/Works/todolistdesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/To-Do-List/dist/',
    linkUrl: 'https://github.com/AlejandraKeber/To-Do-List',
  },
  {
    title: 'Budget App',
    details: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'App developed with RoR to manage budget, listing transactions associated with a category',
    popupdescription: 'Budget App is an app created with Ruby on Rails. It is an app where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    tec: ['html', 'Ruby on rails', 'css'],
    image: './Images/Works/budgetrordesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://budget-app-ror-8c0k.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/budget-app-ror',
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
