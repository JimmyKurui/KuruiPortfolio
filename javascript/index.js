// import Glide from '@glidejs/glide';
const Glide = window.Glide;

document.addEventListener('DOMContentLoaded', function() {
    console.log(Glide);
    const glide = new Glide('.glide', {
        type: 'carousel'
    });
    glide.mount();
});

const loader = document.querySelector('.loading');