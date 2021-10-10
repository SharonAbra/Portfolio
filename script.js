const button = document.querySelector(".take-a-look");
const about = document.querySelector(".about");

button.addEventListener('click', () => {
    about.scrollIntoView({ 
        behavior: 'smooth' 
    });
})
