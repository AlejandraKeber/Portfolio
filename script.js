const hamburger = document.querySelector('.hamburger');
const modalMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  modalMenu.style.left = modalMenu.style.left === '0' ? '-100%' : 0;
});

modalMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('close')) {
    modalMenu.style.left = '-100%';
  }
});

const projects = [
  {
    title: 'Videogames rental',
    details: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'This is a group project for the final module at Microverse. It is based on a videogames rental app.  The front-end is developed in React and the back-end is developed in Ruby on Rails.',
    popupdescription: 'This app is the implementation of the final capstone group from Microverse. It is an application that let the user rent a videogame. It also let the admins create new video games or delete them. The front end is developed in React and the back end is developed in Ruby on Rails',
    tec: ['React', 'Ruby on Rails', 'CSS'],
    image: './Images/Works/videogamesdesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://videogames-capstone.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/mc_videogames_back',
  },
  {
    title: 'Budget App',
    details: ['MICROVERSE', 'Back End Dev', '2023'],
    description: 'App developed with RoR to manage budget, listing transactions associated with a category',
    popupdescription: 'Budget App is an app created with Ruby on Rails. It is an app where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    tec: ['Ruby on Rails', 'HTML', 'CSS'],
    image: './Images/Works/budgetrordesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://budget-app-ror-8c0k.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/budget-app-ror',
  },
  {
    title: 'Crypto Currency',
    details: ['MICROVERSE', 'Front End Dev', '2023'],
    description: 'App to check a list of metrics for crypto currency. completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is a SPA that fetch currency data from an API and display main information in the home page and more detailed information in the details page.',
    popupdescription: 'This is a mobile web application to check a list of metrics for crypto currency. It is a SPA that fetch currency data from an API and display main information in the home page and more detailed information in the details page. Developed using React, Redux, JavaScript, HTML and CSS.',
    tec: ['React', 'Redux', 'HTML', 'CSS'],
    image: './Images/Works/cryptocurrencydesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber-capstone3-react.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/capstone3-react',
  },
  {
    title: 'To Do List',
    details: ['MICROVERSE', 'Front End Dev', '2022'],
    description: 'App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed.',
    popupdescription: 'App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is created using javaScript ES6 language.',
    tec: ['javaScript', 'HTML', 'CSS'],
    image: './Images/Works/todolistdesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber.github.io/To-Do-List/dist/',
    linkUrl: 'https://github.com/AlejandraKeber/To-Do-List',
  },
];

function createProjectElement({
  title, details, description, popupdescription, tec, image, index, linkLive, linkUrl,
}) {
  const cards = document.createElement('div');
  cards.classList.add('cards');

  const projectcontainer = document.createElement('div');
  projectcontainer.classList.add('projectcontainer');
  cards.appendChild(projectcontainer);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const projectimg = document.createElement('img');
  projectimg.src = image;
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
  projecttitle.textContent = title;
  projectdetails.appendChild(projecttitle);

  const projectdet = document.createElement('ul');
  projectdet.classList.add('projectdet');
  for (let count = 0; count < details.length; count += 1) {
    const item = document.createElement('li');
    const company = document.createElement('p');
    const text = document.createTextNode(details[count]);
    company.appendChild(text);
    item.appendChild(company);
    projectdet.appendChild(item);
  }
  projectdetails.appendChild(projectdet);

  const headlinecontwork = document.createElement('p');
  headlinecontwork.classList.add('headlinecont_work');
  headlinecontwork.textContent = description;
  projectdetails.appendChild(headlinecontwork);

  const smallbuttons = document.createElement('ul');
  smallbuttons.classList.add('smallbuttons');
  for (let counter = 0; counter < tec.length; counter += 1) {
    const item = document.createElement('li');
    const text = document.createTextNode(tec[counter]);
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

  const popdetail = document.createElement('div');
  popdetail.classList.add('popdetail');

  const [companyText, jobDescriptionText, yearText] = details;

  const company = document.createElement('p');
  company.classList.add('company');
  company.textContent = companyText;
  popdetail.appendChild(company);

  const jobdescription = document.createElement('p');
  jobdescription.classList.add('jobdescription');
  jobdescription.textContent = jobDescriptionText;
  popdetail.appendChild(jobdescription);

  const year = document.createElement('p');
  year.classList.add('year');
  year.textContent = yearText;
  popdetail.appendChild(year);

  if (index % 2 === 0) {
    projectcontainer.appendChild(imgContainer);
    projectcontainer.appendChild(projectdetails);
  } else {
    projectcontainer.appendChild(projectdetails);
    projectcontainer.appendChild(imgContainer);
  }

  // Set attibutes to save project data
  buttonbig.setAttribute('data-title', title);
  buttonbig.setAttribute('data-image', image);
  buttonbig.setAttribute('data-popupdescription', popupdescription);
  buttonbig.setAttribute('data-details', details);
  buttonbig.setAttribute('data-link-live', linkLive);
  buttonbig.setAttribute('data-link-url', linkUrl);

  return cards;
}

// Create and add projects to DOM
function createProjectCards() {
  const cardsContainer = document.querySelector('.cards');
  const projectElements = projects.map((project, index) => ({
    ...project,
    index,
  }));
  cardsContainer.append(...projectElements.map((project) => createProjectElement(project)));
}

createProjectCards();

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

    // Destructure the array 'details' to access the elements
    const [companyText, jobDescriptionText, yearText] = projects[p].details;

    // Update popdetail section with the project info
    modalPopup.querySelector('.company').textContent = companyText;
    modalPopup.querySelector('.jobdescription').textContent = jobDescriptionText;
    modalPopup.querySelector('.year').textContent = yearText;

    // Update poptec section with buttons
    const poptec = modalPopup.querySelector('.poptec');
    poptec.innerHTML = '';

    projects[p].tec.forEach((tech) => {
      const button = document.createElement('button');
      button.classList.add('pop-button-small');
      button.setAttribute('type', 'button');
      button.textContent = tech;
      poptec.appendChild(button);
    });

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