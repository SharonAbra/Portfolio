const takeALook = document.querySelector(".take-a-look");
const about = document.querySelector(".about");
const seeMore = document.querySelector(".see-more-button");
const moreProjects = document.querySelector(".more-projects");

takeALook.addEventListener('click', () => {
    about.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

seeMore.addEventListener('click', () => {
    if (moreProjects.classList.contains("hide")) {
        moreProjects.classList.remove("hide");
        seeMore.innerHTML = "See Less";
    } else {
        moreProjects.classList.add("hide");
        seeMore.innerHTML = "See More";
    }
})
