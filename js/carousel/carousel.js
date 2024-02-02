
let currentIndex = 0; // Tracks the current index of the visible post

export function moveCarousel(direction) {
    const items = document.querySelectorAll(".posts");
    currentIndex += direction;

    if (currentIndex >= items.length) {
        currentIndex = 0; // Wrap to the first item
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1; // Wrap to the last item
    }
    showCurrentItem(items);
}

function expandCircle(index) {
    currentIndex = index;
    const items = document.querySelectorAll(".posts");
    showCurrentItem(items);
}

function showCurrentItem(items) {
    // Hide all items
    items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Initialize carousel functionality after the posts are rendered
function initializeCarousel() {
    // Show the first item on page load
    const items = document.querySelectorAll(".posts");
    if (items.length) showCurrentItem(items);

    // Attach event listeners to arrows
    document.querySelector(".left-arrow").addEventListener('click', () => moveCarousel(-1));
    document.querySelector(".right-arrow").addEventListener('click', () => moveCarousel(1));

    // Attach event listeners to circles
    document.querySelectorAll(".posts").forEach((circle, index) => {
        circle.addEventListener('click', () => expandCircle(index));
    });
}



