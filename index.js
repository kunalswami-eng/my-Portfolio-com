// ------------------------- toggle icon navbar---------------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="#${id}"]`);
            });
        };
    });
    //    ----------------- sticky navbar------------------

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // ------------------------- remove toggle icon and navbar---------------------------------
    
    menuIcon.classList.remove('bi-x');
    navbar.classList.remove('active');
};

//scroll reveal
ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal('.Home-content,Heading',{ origin: 'top' });
 ScrollReveal().reveal('.Home-img,  .service-container, .Portfolio-box, .Contact form', { origin:'button' });
 ScrollReveal().reveal('.Home-content h1, .About-img', { origin:'left' });
 ScrollReveal().reveal('.Home-content p, .About-content', { origin:'right' });

 //typad js
 const typed = new Typed ('.multiple-text', {
    strings: ['Web Developer','Web  Designer'],
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 1000,
    loop:true,
 })