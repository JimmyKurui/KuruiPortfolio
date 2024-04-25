import axios from "axios"
import {createNewElement} from './functions.js'

// import data from './js/dataCopy.js'

// ---- HEADER ----
window.onload = (event) => {

setTimeout(() => {
    alert("This is a beta site version. Check it out on desktop for the best experience!")
}, 200)
};

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
document.addEventListener('DOMContentLoaded', function() {
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
});

/* Add caption 
// carouselSlide = document.querySelector('#main-carousel li.splide__slide');
// carouselCaption = document.createElement('p').textContent = "123";
// carouselSlide.appendChild(carouselCaption);
*/
/* Data Loading */
const fetchData = async () => {
let res = await axios('../data.json')
return res.then(data => data).catch(error => {
    return null
})
}

console.log(fetchData())

fetchedData.projects.forEach((x,i) => {
const projectTile = createNewElement('li', ['splide__slide'])

const tileScreenshot =createNewElement('div', ['screenshot'])
const tileLink = createNewElement('a', [], {href : x.embed_link})
tileLink.appendChild(
    createNewElement('img', [], {src: x.thumbnail, alt: x.title+': '})
)
tileScreenshot.appendChild(tileLink)

const tileCaption = createNewElement('div', ['caption'])
tileCaption.append(
    createNewElement('span', ['caption-title'], {}, x.title+': '), x.caption
)
console.log(tileCaption)
projectTile.append(tileScreenshot, tileCaption)
document.querySelector('.projects-tile #main-carousel .splide__list').appendChild(projectTile)
})


function trackForm(event) {
    event.preventDefault();
    var new_contact = {
      "First name": $('#name').val(), 
      "Last name": '', 
      "Email": $('#email').val(), 
      "Alternate contact number": $('#phone').val(), 
    };
    var identifier = $('#email').val();
    try {
      fwcrm.identify(identifier, new_contact);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      $('#form').submit();
    }
}

console.log('index still working..')
