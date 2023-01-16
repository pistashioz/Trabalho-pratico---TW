// Dark Theme
let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "Images/light_mode.png";
        logo.src = "Images/logo-invertido.png";
    } else {
        icon.src = "Images/dark_mode.png";
        logo.src = "Images/logo.png";
    }

}

// Burguer button
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Responsive navbar

const navSlide = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    //const nav1 = document.querySelector('.logo-center')
    menuBtn.addEventListener('click', ()=>{
        //nav1.style.display = "none";
        //toggle nav
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

navSlide();