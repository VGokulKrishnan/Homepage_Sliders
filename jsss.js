const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slider next button
nextBtn.addEventListener('click', () => {
    // Hide the current slide
    slides[slideNumber].classList.remove('active');

    // Move to the next slide
    slideNumber++;

    // Wrap around to the first slide if necessary
    if (slideNumber >= numberOfSlides) {
        slideNumber = 0;
    }

    // Show the next slide
    slides[slideNumber].classList.add('active');
})

prevBtn.addEventListener('click', () => {
    // Hide the current slide
    slides[slideNumber].classList.remove('active');

    // Move to the next slide
    slideNumber--;

    // Wrap around to the first slide if necessary
    if (slideNumber < 0) {
        slideNumber = numberOfSlides -1;
    }

    // Show the next slide
    slides[slideNumber].classList.add('active');
})