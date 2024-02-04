

        
// Not deleting this until I know it all works 


/*
export function renderHome(posts) {
    const parent = document.querySelector(".carousel-container");
    
    //Left arrow
    const leftArrow = document.createElement("div");
    leftArrow.classList.add("arrow", "left-arrow");
    leftArrow.innerHTML = "&#9664;"; 
    parent.appendChild(leftArrow);

    let currentIndex = 0; 

    // Rendering and carousel 
    function createPostElement(post, index) {
        const element = document.createElement("article");
        element.classList.add("posts-carousel", "carousel-item");
        element.style.display = index === 0 ? 'block' : 'none'; 

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const title = document.createElement("h2");
        title.textContent = post.acf.blog_title;
        title.classList.add("h2-posts");
        element.append(title);

        const image = document.createElement("img");
        image.src = post.acf.blog_image;
        image.setAttribute("alt", post.acf.alt_text);
        image.classList.add("posts-img");
        imageWrapper.append(image);

        element.append(imageWrapper);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("content-wrapper");

        const heading = document.createElement("h3");
        heading.textContent = post.acf.blog_heading;
        heading.classList.add("h3-posts");
        contentWrapper.append(heading);

        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + post.id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        return element;
    }

    // Append posts as carousel items
    posts.slice(0, 4).forEach((post, index) => {
        const postElement = createPostElement(post, index);
        parent.append(postElement);
    });

    // Right arrow
    const rightArrow = document.createElement("div");
    rightArrow.classList.add("arrow", "right-arrow");
    rightArrow.innerHTML = "&#9654;"; 
    parent.append(rightArrow);

    // Function to move carousel
    
    function moveCarousel(direction) {
        const items = document.querySelectorAll(".carousel-item");
        items[currentIndex].style.display = 'none'; // Hide current 

        currentIndex += direction;
        if (currentIndex < 0) currentIndex = items.length - 1;
        else if (currentIndex >= items.length) currentIndex = 0;

        items[currentIndex].style.display = 'block'; // Show current 
    }

    // Event listeners for arrows
    leftArrow.addEventListener('click', () => moveCarousel(-1));
    rightArrow.addEventListener('click', () => moveCarousel(1));
} */

// Try desktop 


export function renderHome(posts) {
    const parent = document.querySelector(".carousel-container");
    parent.innerHTML = ''; 

    // Create left arrow
    const leftArrow = document.createElement("div");
    leftArrow.classList.add("arrow", "left-arrow");
    leftArrow.innerHTML = "&#9664;";
    parent.appendChild(leftArrow);

    let currentIndex = 0;

    // Function to create and return a post element
    function createPostElement(post) {
        const element = document.createElement("article");
        element.classList.add("posts-carousel", "carousel-item");

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const title = document.createElement("h2");
        title.textContent = post.acf.blog_title;
        title.classList.add("h2-posts");
        element.append(title);

        const image = document.createElement("img");
        image.src = post.acf.blog_image;
        image.setAttribute("alt", post.acf.alt_text);
        image.classList.add("posts-img");
        imageWrapper.append(image);

        element.append(imageWrapper);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("content-wrapper");

        const heading = document.createElement("h3");
        heading.textContent = post.acf.blog_heading;
        heading.classList.add("h3-posts");
        contentWrapper.append(heading);

        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + post.id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        return element;
    }

    // Append all posts to the carousel
    posts.forEach((post, index) => {
        const postElement = createPostElement(post, index);
        parent.appendChild(postElement);
    });

    // Create right arrow
    const rightArrow = document.createElement("div");
    rightArrow.classList.add("arrow", "right-arrow");
    rightArrow.innerHTML = "&#9654;";
    parent.appendChild(rightArrow);

    // How many posts based on screensize
    function getVisibleItemsCount() {
        if (window.innerWidth >= 1200) {
            return 3; 
        } else if (window.innerWidth >= 900) {
            return 2; 
        }
        return 1; 
    }

    // Update active items based on screen width
    function updateActiveItems() {
        const visibleItemCount = getVisibleItemsCount();
        const items = document.querySelectorAll(".carousel-item");
        items.forEach(item => item.style.display = 'none'); 

        for (let i = 0; i < visibleItemCount; i++) {
            const index = (currentIndex + i) % items.length; 
            if (items[index]) {
                items[index].style.display = 'block'; 
            }
        }
    }

    // Adjust carousel position based on direction
    function moveCarousel(direction) {
        const itemsCount = document.querySelectorAll(".carousel-item").length;
        const visibleItemCount = getVisibleItemsCount();

        currentIndex += direction;
        if (currentIndex < 0) currentIndex = itemsCount - visibleItemCount;
        else if (currentIndex + visibleItemCount > itemsCount) currentIndex = 0;

        updateActiveItems();
    }

    
    updateActiveItems();

    // Arrows event
    leftArrow.addEventListener('click', () => moveCarousel(-1));
    rightArrow.addEventListener('click', () => moveCarousel(1));

    // Listen for window resize 
    window.addEventListener('resize', updateActiveItems);
}


