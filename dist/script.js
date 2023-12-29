
// toggle Button
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', function(){
    toggle.classList.toggle('button-active');
});

// scroll navbar
const navBar = document.querySelector('header');
window.onscroll = function (){
    if (window.scrollY > navBar.offsetTop){
        navBar.classList.add('navbar-fixed');
    } else {
        navBar.classList.remove('navbar-fixed');
    }
};