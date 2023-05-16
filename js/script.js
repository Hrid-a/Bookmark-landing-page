const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector("header");
const iconContainer = document.querySelector("[data-icon]");
const linksContainer = document.querySelector(".links-container");
const svgLogo = document.querySelector(".logo img");
const socialIcon = document.querySelector(".social-icon");
const featuresContent = document.querySelector(".features__content");
const feature = document.querySelectorAll(".feature");
const btns = document.querySelectorAll(".tab-btn");
const qusetionContent = document.querySelector(".faq__content");

let opened = true;
navToggle.addEventListener("click", ()=> {
    header.classList.toggle("show-nav");
    linksContainer.classList.toggle("show");
    
    if(opened){
        svgLogo.src = "images/logo-bookmark copy.svg"
        iconContainer.src = "images/icon-close.svg";
        socialIcon.style.display = "flex";
        opened =false;
    }else {
        svgLogo.src = "images/logo-bookmark.svg"
        iconContainer.src = "images/icon-hamburger.svg";
        socialIcon.style.display = "none";
        opened = true;
    }
})

featuresContent.addEventListener("click", (e)=> {
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(btn=> {
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
    
        feature.forEach(article => {
            article.classList.remove("active");
        })
    
        const activeArticle = document.getElementById(id);
        activeArticle.classList.add("active");
    }
})

qusetionContent.addEventListener("click", (e)=> {
    const element = e.target.parentElement;
    if(element) {
        element.nextElementSibling.classList.toggle("active");
    }
})