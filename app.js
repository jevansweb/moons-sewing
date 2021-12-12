/* Drop Menu JS */

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display ='flex';
    mainMenu.style.top = '0';
    mainMenu.style.transition = 'top 1.1s ease';
}

function close(){
    mainMenu.style.top = '-120%';
}


/* Carousel JS */

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);


// When i click left, move slides to the left

// When i click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
})


// When i click the nav indicators, move to that slide