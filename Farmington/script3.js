// Get references to slide elements
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

// Function to show the current slide and hide the others
function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

// Function to switch to the next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Display the first slide initially
showSlide(currentSlideIndex);

// Automatically switch to the next slide every few seconds
setInterval(nextSlide, 5000); // Change slide every 5 seconds
