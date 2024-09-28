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
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let rightOffset = 0; // Initialize rightOffset

function checkOverlap() {
    const professionContainer = document.querySelector('.profession-container');
    const frame = document.querySelector('.illustration');

    const professionRect = professionContainer.getBoundingClientRect();
    const frameRect = frame.getBoundingClientRect();

    // Check for overlap
    if (
        professionRect.left < frameRect.right &&
        professionRect.right > frameRect.left &&
        professionRect.top < frameRect.bottom &&
        professionRect.bottom > frameRect.top
    ) {
        // Add the body_color animation to the base-color elements
        const baseColors = document.querySelectorAll('.base-color');
        baseColors.forEach(element => {
            element.style.animation = 'body_color 2s';
            element.style.webkitAnimation = 'body_color 2s';
        });

        // Reset the overlay position and rightOffset after the animation
        setTimeout(() => {
            baseColors.forEach(element => {
                element.style.animation = '';
                element.style.webkitAnimation = '';
            });

            const overlay = document.querySelector('.overlay');
            overlay.style.right = '0px'; // Reset to original position

            rightOffset = 0; // Reset rightOffset to 0
            professionContainer.style.right = `${rightOffset}px`; // Reset professionContainer position
        }, 2000); // Duration of the animation (4s) + delay (1s)
    }
}

function animateFunc() {
    const mouths = document.querySelectorAll('.overlay .mouth');
    mouths.forEach(mouth => {
        mouth.style.animation = 'none';
        mouth.offsetHeight;
        mouth.style.animation = null;
    });

    const professionContainer = document.querySelector('.profession-container');
    rightOffset += 50; // Adjust the value as needed
    professionContainer.style.right = `${rightOffset}px`;

    // Code to toggle animations on illustration and baseColor
    const illustration = document.querySelector('.illustration');
    const baseColor = document.querySelector('.base-color');

    // Remove the animate class if it exists to restart the animation
    illustration.classList.remove('animate');
    baseColor.classList.remove('animate');

    // Trigger reflow to restart the animation
    void illustration.offsetWidth;
    void baseColor.offsetWidth;

    // Add the animate class to start the animation
    illustration.classList.add('animate');
    baseColor.classList.add('animate');

    // Check for overlap after the animation
    setTimeout(checkOverlap, 1000); // Adjust the timeout duration as needed
}

document.addEventListener('DOMContentLoaded', function() {
    const animateButton = document.getElementById('animateButton');
    animateButton.addEventListener('click', animateFunc);
});


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

