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


// Current Menu Class

const currentLocation = location.href;
const menuItems = document.querySelectorAll('a');
const menuLength = menuItems.length;

for (i = 0; i<menuLength; i++) {
    if (menuItems[i].href === currentLocation){
        menuItems[i].className = "current";
    }

    else {
        menuItems[i].className.remove = "current";
    }
}





/* Carousel JS */

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

console.log(slides)

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    track.style.transition = 'transform 0.8s ease';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

    
}


// When i click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// When i click right, move slides to the right
 nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
 
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


// When i click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

if (!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot, targetDot);
hideShowArrows(slides, prevButton, nextButton, targetIndex);


    
})

// UPDATE LIVE TITLE

const homeHeader = document.querySelector('.homeTitle h1')
const liveHeader = document.querySelector('.currentTitle')


window.addEventListener('DOMContentLoaded', function() {
    liveHeader.innerHTML = homeHeader.innerHTML
 });


// ON SUBMIT UPDATE CURRENT TITLE ON PAGE


const submitButton = document.querySelector('.titleSubmit')

submitButton.addEventListener('click', function() {
    const titleInputText = document.querySelector('.newTitleInput').value;
    
    homeHeader.innerHTML = titleInputText;

    console.log(homeHeader)
})