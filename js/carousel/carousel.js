
// Another carousel also on homepage 



export function initializeLoveCarousel() {
    let currentSlide = 0;

    const prevButton = document.querySelector('.love-container .prev');
    const nextButton = document.querySelector('.love-container .next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            moveSlide(-1);
        });

        nextButton.addEventListener('click', () => {
            moveSlide(1);
        });
    }

    function moveSlide(step) {
        const slides = document.querySelectorAll('.love-carousel-item');
        const totalSlides = slides.length;
        currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Ensure the index loops correctly

        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== currentSlide); // Aria attribute 
        });

        const newTransformValue = `translateX(-${currentSlide * 100}%)`;
        document.querySelector('.love-carousel-slide').style.transform = newTransformValue;
    }


    // Aria labels 
    function updateButtonAriaLabels() {
        const totalSlides = document.querySelectorAll('.love-carousel-item').length;
        prevButton.setAttribute('aria-label', `Go to previous slide, currently on slide ${currentSlide + 1} of ${totalSlides}`);
        nextButton.setAttribute('aria-label', `Go to next slide, currently on slide ${currentSlide + 1} of ${totalSlides}`);
    }
    
    updateButtonAriaLabels();
    moveSlide(0); 
}