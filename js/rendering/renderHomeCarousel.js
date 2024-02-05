


// Try desktop 


export function renderHome(posts) {
    const parent = document.querySelector(".carousel-container");
    parent.innerHTML = ''; 
    

    // Create left arrow
    const leftArrow = document.createElement("div");
    leftArrow.classList.add("arrow", "left-arrow");
    leftArrow.innerHTML = "&#9664;";
    parent.append(leftArrow);

    let currentIndex = 0;

    //Decided to do this, based on screen size for a smoother loop of the carousel 
    //So when displaying 3 in the carousel i get 9 posts, when 2 I get 8. Even numbers.
    const screenWidth = window.innerWidth;
    let maxPostsToDisplay = screenWidth >= 1200 ? 9 : 8; 
    maxPostsToDisplay = Math.min(maxPostsToDisplay, posts.length)

    
    for (let i = 0; i < maxPostsToDisplay; i++) {
        const post = posts[i];
        const postElement = createPostElement(post);
        parent.append(postElement);
    }

    // Create right arrow
     const rightArrow = document.createElement("div");
     rightArrow.classList.add("arrow", "right-arrow");
     rightArrow.innerHTML = "&#9654;";
     parent.append(rightArrow);

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

    

   

    // How many posts based on screensize
    function getVisibleItemsCount() {
        if (window.innerWidth >= 1200) {
            return 3; 
        } else if (window.innerWidth >= 900) {
            return 2; 
        }
        return 1; 
    }
   
    
    // Function for displaying one "active" post
    function updateActiveItems() {
        const visibleItemCount = getVisibleItemsCount();
        const items = document.querySelectorAll(".carousel-item");
        items.forEach(item => item.style.display = 'none'); 
    
        let activeWithinVisibleIndex = currentIndex % visibleItemCount; 
        let startIndexOfSet = currentIndex - activeWithinVisibleIndex; 
    
        // Display and mark active for the current set of visible posts
        for (let i = 0; i < visibleItemCount; i++) {
            let index = (startIndexOfSet + i) % items.length;
            items[index].style.display = 'block';
            if (i === activeWithinVisibleIndex) {
                items[index].classList.add("active");
            } else {
                items[index].classList.remove("active");
            }
        }
    }
    
    // Move carousel 
    function moveCarousel(direction) {
        const itemsCount = document.querySelectorAll(".carousel-item").length;
        const visibleItemCount = getVisibleItemsCount();
    
        
        currentIndex += direction;
    
        // Making sure it dosent skip one post, before starting over
        if (currentIndex < 0 || currentIndex >= itemsCount) {
            currentIndex = (currentIndex + itemsCount) % itemsCount; // Loop around 
        }
    
        updateActiveItems();
    }

    // Arrows event
    leftArrow.addEventListener('click', () => moveCarousel(-1));
    rightArrow.addEventListener('click', () => moveCarousel(1));

    // Listen for window resize 
    window.addEventListener('resize', updateActiveItems);

    updateActiveItems();
}


