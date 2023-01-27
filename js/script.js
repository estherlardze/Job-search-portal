const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('links')[0];
const signLinks = document.getElementsByClassName('sign')[0];

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    signLinks.classList.toggle('active')
})

AOS.init();