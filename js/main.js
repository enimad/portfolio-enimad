//**************************** HEADER SECTION ****************************//
// To open nav mobile menu
const navMobile = document.querySelector(".nav-mobile");

nav.addEventListener("click", () => {
    nav.classList.toggle("is-active");
    navMobile.classList.toggle("active");
})

// To close nav mobile menu in case of a click on the links
const links = document.querySelectorAll(".nav-mobile li");

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("is-active");
        navMobile.classList.remove("active");
    })
})

// To close nav mobile menu in case of a click on the website logo
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    nav.classList.remove("is-active");
    navMobile.classList.remove("active");
})

//**************************** PROJECTS SECTION ****************************// 
// Adding projects data

const projectsData = [
    {
        image: {
            src: "./assets/images/projects/screenshot-kasa.png",
            alt: "Kasa website screenshot"
        },
        title: "Kasa",
        content: "Il s'agit d'un projet OpenClassrooms ayant pour but de <span>développer un site avec le framework React</span>. Il s'agit d'un site présentant une page d'<span>accueil</span>, une page par <span>logement</span>, une page <span>à propos</span>, ainsi qu'une page <span>erreur</span> si l'URL n'existe pas. Cette application React a été codée en <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> et <span>JSX</span>",
        codeHref: "https://github.com/enimad/Kasa",
        liveHref: "https://enimad.github.io/Kasa"
    },
    {
        image: {
            src: "./assets/images/projects/screenshot-ohmyfood.png",
            alt: "Ohmyfood website screenshot"
        },
        title: "Ohmyfood",
        content: "Il s'agit d'un projet OpenClassrooms ayant pour but de <span>développer un site “mobile first”</span> qui répertorie les menus de restaurants gastronomiques, en respectant les animations et comportements présentés sur la maquette Figma. Ce site a été codé en <span>HTML</span>, <span>CSS</span>, et <span>SCSS</span> en utilisant le <span>préprocesseur Sass</span>.",
        codeHref: "https://github.com/enimad/Ohmyfood",
        liveHref: "https://enimad.github.io/Ohmyfood/"
    },
    {
        image: {
            src: "./assets/images/projects/screenshot-booki.png",
            alt: "Booki website screenshot"
        },
        title: "Booki",
        content: "Il s'agit d'un projet OpenClassrooms ayant pour but d'<span>intégrer la maquette d'une page d'accueil</span> d'un site similaire à Airbnb. Ce site a été codé en <span>HTML</span> et <span>CSS</span>.",
        codeHref: "https://github.com/enimad/Booki",
        liveHref: "https://enimad.github.io/Booki/"
    }
]

projectsData.forEach((projectData) => {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    const projectImgContainer = document.createElement('div');
    projectImgContainer.className = 'project-img-container';

    const projectImage = document.createElement('img');
    projectImage.src = projectData.image.src;
    projectImage.alt = projectData.image.alt;

    projectImgContainer.appendChild(projectImage);

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = projectData.title;

    const projectDescription = document.createElement('p');
    projectDescription.innerHTML = projectData.content;

    const projectLinks = document.createElement('div');
    projectLinks.className = 'project-links';

    const githubLink = document.createElement('a');
    githubLink.href = projectData.codeHref;
    githubLink.target = "_blank";
    githubLink.textContent = 'Code';
    const githubIcon = document.createElement('img');
    githubIcon.src = './assets/images/icons/icon-github.png';
    githubIcon.alt = 'Icône GitHub';
    githubLink.appendChild(githubIcon);

    const liveLink = document.createElement('a');
    liveLink.href = projectData.liveHref;
    liveLink.target = "_blank";
    liveLink.textContent = 'Live';
    const liveIcon = document.createElement('img');
    liveIcon.src = './assets/images/icons/icon-external-link.png';
    liveIcon.alt = 'Icône de lien externe';
    liveLink.appendChild(liveIcon);

    projectLinks.appendChild(githubLink);
    projectLinks.appendChild(liveLink);

    projectContainer.appendChild(projectImgContainer);
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectLinks);

    projects.appendChild(projectContainer);
});

// To allow the scroll on click of the project picture
const imgProject = document.querySelectorAll(".project-img-container img");

for (let i = 0; i < imgProject.length; i++) {
    imgProject[i].addEventListener("click", () => {
        imgProject[i].classList.toggle("active");
    })
}