
// toggle Button
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', function(){
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


// darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

if(localStorage.mode === 'dark'){
    darkToggle.checked = true;
    html.classList.add('dark');
}

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.mode = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.mode = 'light';
    }
});