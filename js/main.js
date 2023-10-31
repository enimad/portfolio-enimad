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
// Fonction pour faire défiler l'image du projet
let imgProjectContainer = document.querySelectorAll(".project-img-container");
const imgProject = document.querySelectorAll(".project-img-container img");

for (let i = 0; i < imgProjectContainer.length; i++) {
    imgProjectContainer[i].addEventListener("click", () => {
        imgProject[i].classList.toggle("active");
    })
}

