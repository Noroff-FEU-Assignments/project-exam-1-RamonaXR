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

        const newTransformValue = `translateX(-${currentSlide * 100}%)`;
        document.querySelector('.love-carousel-slide').style.transform = newTransformValue;
    }

    moveSlide(0); 
}