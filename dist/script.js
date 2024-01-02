
// toggle Button
toggle.addEventListener('click', function(){
    const toggle = document.querySelector('#toggle');
    toggle.classList.toggle('button-active');
});

// scroll navbar
window.onscroll = function (){
    const navBar = document.querySelector('header');
    if (window.scrollY > navBar.offsetTop){
        navBar.classList.add('navbar-fixed');
    } else {
        navBar.classList.remove('navbar-fixed');
    }
};

// Klik di mana aja
window.onclick = function (e){
    const toggle = document.querySelector('#toggle');
    if(e.target != toggle){
        toggle.classList.remove('button-active');
    }
}