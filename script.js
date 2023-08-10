// Toggle menu
const hamburger = document.querySelector('.hamburger');
const modalMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  modalMenu.style.left = modalMenu.style.left === '0' ? '-100%' : 0;
});

modalMenu.addEventListener('click', (event) => {
  if (event.target.closest('.close')) {
    modalMenu.style.left = '-100%';
  }
});

// Project data
const projects = [
  {
    title: 'Videogames rental',
    details: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'A Full-Stack project created with React, Ruby on Rails, Postgresql and Redux that offers videogames for rent. The user can create a new account and log in with email and password.  Admin user can create and delete videogames',
    popupdescription: 'This app is the implementation of the final capstone group from Microverse. It is Full-Stack project created with React, Ruby on Rails, Postgresql and Redux that offers videogames for rent. The user can create a new account and log in with email and password. It also let the admins create new video games or delete them.',
    tec: ['React', 'Ruby on Rails', 'CSS'],
    image: './Images/Works/videogamesdesk.png',
    link: 'https://www.github.com',
    linkLive: 'https://videogames-capstone.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/mc_videogames_back',
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
    title: 'Space Travelers Hub',
    details: ['MICROVERSE', 'Front End Dev', '2023'],
    description: 'Web app for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    popupdescription: 'Web app for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. It is created using the real live data from the SpaceX API. Developed using React, Redux, JavaScript, HTML and CSS.',
    tec: ['React', 'Redux', 'HTML', 'CSS'],
    image: './Images/Works/spacetravelers.png',
    link: 'https://www.github.com',
    linkLive: 'https://alejandrakeber-space-travelers-hub.onrender.com/',
    linkUrl: 'https://github.com/AlejandraKeber/space-travelers-hub',
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

// Create project element
function createProjectElement(project) {
  const {
    title,
    details,
    description,
    popupdescription,
    tec,
    image,
    linkLive,
    linkUrl,
  } = project;

  return `
    <div class="cards">
      <div class="projectcontainer">
        <div class="img-container">
          <img src="${image}" alt="project image" style="width: 100%; height: auto;">
        </div>
        <div class="projectdetails">
          <h2 class="projecttitle">${title}</h2>
          <ul class="projectdet">
            ${details.map((detail) => `<li><p>${detail}</p></li>`).join('')}
          </ul>
          <p class="headlinecont_work">${description}</p>
          <ul class="smallbuttons">
            ${tec.map((tech) => `<li class="button_small">${tech}</li>`).join('')}
          </ul>
          <button class="button_big" type="button" 
            data-title="${title}" 
            data-image="${image}" 
            data-popupdescription="${popupdescription}"
            data-details="${details}"
            data-link-live="${linkLive}"
            data-link-url="${linkUrl}">See Project</button>
        </div>
      </div>
    </div>`;
}

// Create and add projects to DOM
function createProjectCards() {
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = projects.map(createProjectElement).join('');
}

createProjectCards();

// Popup window for project details
const modalPopup = document.querySelector('.popupcont');
const closePopup = document.getElementById('closeModal');
const popTech = modalPopup.querySelector('.poptec');

document.querySelectorAll('.button_big').forEach((button, index) => {
  button.setAttribute('data-index', index);
  button.addEventListener('click', (e) => {
    const p = e.target.getAttribute('data-index');
    const project = projects[p];
    modalPopup.querySelector('.poptitle').innerHTML = project.title;
    modalPopup.querySelector('.popimge').src = project.image;
    modalPopup.querySelector('.popdescrip').innerHTML = project.popupdescription;
    modalPopup.querySelector('.live').href = project.linkLive;
    modalPopup.querySelector('.source').href = project.linkUrl;

    const [companyText, jobDescriptionText, yearText] = project.details;
    modalPopup.querySelector('.company').textContent = companyText;
    modalPopup.querySelector('.jobdescription').textContent = jobDescriptionText;
    modalPopup.querySelector('.year').textContent = yearText;

    popTech.innerHTML = project.tec.map((tech) => `<button class="pop-button-small" type="button">${tech}</button>`).join('');

    modalPopup.style.display = 'block';
  });
});

closePopup.addEventListener('click', () => {
  modalPopup.style.display = 'none';
});

// Validate email form
const email = document.getElementById('email');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    document.querySelector('#error').innerHTML = 'Please write the email in lower case';
  }
});