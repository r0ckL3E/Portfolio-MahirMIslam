let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Corrected typo: slidesPerVeiw -> slidesPerView
    spaceBetween: 50,
    loop: true,
    grabCursor: true, // Corrected typo: granCursor -> grabCursor
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Corrected typo: nextE1 -> nextEl
        prevEl: ".swiper-button-prev", // Corrected typo: prevE1 -> prevEl
    },
});


function animateFunc() {
    const mouths = document.querySelectorAll('.overlay .mouth');
    mouths.forEach(mouth => {
        mouth.style.animation = 'none'; // Reset animation
        mouth.offsetHeight; // Triggers reflow
        mouth.style.animation = null; // Apply animation with pauses
    });
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading, .profession-container', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .services', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

