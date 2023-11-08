//**************************** SECTION HEADER ****************************//
// Fonction pour ouvrir le menu de nav mobile
const navMobile = document.querySelector(".nav-mobile");

nav.addEventListener("click", () => {
    nav.classList.toggle("is-active");
    navMobile.classList.toggle("active");
})

// Fonction qui assure la fermeture du menu de nav mobile en cas de clic sur les liens
const links = document.querySelectorAll(".nav-mobile li");

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("is-active");
        navMobile.classList.remove("active");
    })
})

// Fonction qui assure la fermeture du menu de nav mobile en cas de clic sur le logo du site
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    nav.classList.remove("is-active");
    navMobile.classList.remove("active");
})

//**************************** SECTION PROJECTS ****************************// 
// Ajout dynamique des projets

fetch("../assets/data/projects.json")
    .then(res => res.json())
    .then(data => {
        data.forEach((projectData) => {
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
            githubLink.textContent = 'Code';
            const githubIcon = document.createElement('img');
            githubIcon.src = './assets/images/icons/icon-github.png';
            githubIcon.alt = 'Icône GitHub';
            githubLink.appendChild(githubIcon);

            const liveLink = document.createElement('a');
            liveLink.href = projectData.liveHref;
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

        // Fonction pour faire défiler l'image du projet
        let imgProjectContainer = document.querySelectorAll(".project-img-container");
        const imgProject = document.querySelectorAll(".project-img-container img");


        for (let i = 0; i < imgProjectContainer.length; i++) {
            imgProjectContainer[i].addEventListener("click", () => {
                imgProject[i].classList.toggle("active");
            })
        }
    })
    .catch(e => {
        console.log(e);
    })