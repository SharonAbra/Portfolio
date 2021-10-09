const button = document.querySelector(".take-a-look");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact-button");
const modal = document.querySelector(".modal-dialog");

button.addEventListener('click', () => {
    about.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

// contact.addEventListener('click', ()=> {

// })