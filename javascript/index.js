// Default theme

// Nav

const navbar = document.querySelector('.navbar');

function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});
// navbar.style.backgroundImage = 'linear-gradient(117deg, rgba(238,238,238,1) 0%, rgba(255,255,255,0.3) 85%, rgba(239,0,255,1) 100%)';

// import Splide from '@splidejs/splide';
// var main = new Splide('#main-slider', {
//     type: 'fade',
//     rewind: true,
//     pagination: false,
//     arrows: false,
// });

new Splide('#thumbnail-carousel', {
    fixedWidth: 100,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
        600: {
            fixedWidth: 60,
            fixedHeight: 44,
        },
    },
}).mount();