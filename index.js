import { createNewElement } from './js/functions.js'


// ---- Nav ----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});
// navbar.style.backgroundImage = 'linear-gradient(117deg, rgba(238,238,238,1) 0%, rgba(255,255,255,0.3) 85%, rgba(239,0,255,1) 100%)';

// ------------ PROJECTS ---------
// Glide Carousel
document.addEventListener('DOMContentLoaded', function () {

    (async () => {

        const fetchedData = await fetchData()

        fetchedData.projects.forEach((x, i) => {
            const projectTile = createNewElement('li', ['splide__slide'])

            const tileScreenshot = createNewElement('div', ['screenshot'])
            const tileLink = createNewElement('a', [], { href: x.embed_link, target: '_blank' })
            tileLink.appendChild(
                createNewElement('img', [], { src: x.thumbnail, alt: x.title + ': ' })
            )
            const thumbnailTile = projectTile.cloneNode()
            thumbnailTile.appendChild(createNewElement('img', [], { src: x.thumbnail, alt: x.title + ': ' }))
            tileScreenshot.appendChild(tileLink)

            const tileCaption = createNewElement('div', ['caption'])
            tileCaption.append(
                createNewElement('span', ['caption-title'], {}, x.title + ': '), x.caption
            )
            projectTile.append(tileScreenshot, tileCaption)
            document.querySelector('#main-carousel .splide__list').appendChild(projectTile)
            
            document.querySelector('#thumbnail-carousel .splide__list').appendChild(thumbnailTile)

        })

        await initSplide()
    })()

});

function initSplide() {
    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
    });


    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 60,
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
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}

/* Data Loading */
async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null or handle the error as needed
    }
}
