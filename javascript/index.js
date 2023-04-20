// Default theme

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