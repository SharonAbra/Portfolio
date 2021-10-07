const button = document.querySelector(".take-a-look");
const about = document.querySelector(".about");

button.addEventListener('click', () => {
    about.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

// const slideShow = document.querySelector('.carousel-fade');
// const hidden = document.querySelectorAll('.hide');
// slideShow.addEventListener('scroll', function () {
//     hidden.map(item => {
//         item.classList.remove('hide');
//     })
// });

// const hidden = document.querySelectorAll('.hide');
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//     hidden.map(item => {
//         item.classList.remove('hide');
//     })
//   }
// }