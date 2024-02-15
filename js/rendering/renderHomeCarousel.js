

// Rendering content &
// Carousel at homepage

// I am aware that this code could have been split in smaller chucks and functions
// and having the carousel in its own file 
// I didn't want to risk ruining functioning code, so i'll keep it like this 
// and rather keep it in mind from start next time


export function renderHome(posts) {
    const parent = document.querySelector(".carousel-container");
    parent.setAttribute("role", "list");
    parent.setAttribute("aria-roledescription", "carousel");
    
    let currentIndex = 0;

    // Create left and right arrows outside populateCarousel to maintain their event listeners
    const leftArrow = document.createElement("button");
    const iconLeft = document.createElement("i")
    leftArrow.classList.add("arrow", "left-arrow");
    iconLeft.className = "fa-solid fa-arrow-left";
    leftArrow.setAttribute("aria-label", "Previous slide");

    leftArrow.append(iconLeft);

    const rightArrow = document.createElement("button");
    const iconRight = document.createElement("i")
    rightArrow.classList.add("arrow", "right-arrow");
    rightArrow.setAttribute("aria-label", "Next slide");
    
    iconRight.className = "fa-solid fa-arrow-right";
    rightArrow.append(iconRight);

    function populateCarousel() {
        // Clear existing content except arrows
        parent.innerHTML = ''; 
        parent.append(leftArrow);
        
    
        //Decided to do this, based on screen size for a smoother loop of the carousel 
    //So when displaying 3 in the carousel i get 9 posts, when 2 I get 8. Even numbers.
        const screenWidth = window.innerWidth;
        let maxPostsToDisplay = screenWidth >= 1200 ? 9 : 8;
        maxPostsToDisplay = Math.min(maxPostsToDisplay, posts.length);

        for (let i = 0; i < maxPostsToDisplay; i++) {
            const postElement = createPostElement(posts[i]);
            parent.append(postElement);
        }

        parent.append(rightArrow);
        updateActiveItems();
    }

    
    

    // Rendering content 
    function createPostElement(post) {
        const element = document.createElement("article");
        element.classList.add("posts-carousel", "carousel-item");
        element.setAttribute("role", "listitem");
        

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const titleLink = document.createElement("a");
        titleLink.href = "/post/?id=" + post.id; 
        titleLink.classList.add("post-title-link");

        const title = document.createElement("h2");
        title.textContent = post.acf.blog_title;
        title.classList.add("h2-posts");
        
        
        titleLink.append(title);
        element.append(titleLink);

        

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

        const paragraph4 = document.createElement('p');
        paragraph4.textContent = post.acf.date_of_post;
        paragraph4.classList.add("date-post");
        element.append(paragraph4);

        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + post.id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        return element;
    } 


    // Tried adding som aria attributes here
    //but I would have to refactor all my code. 
    //Nest time I will keep it in mind from start. 

    function updateActiveItems() {
        const visibleItemCount = getVisibleItemsCount();
        const items = document.querySelectorAll(".carousel-item");
        
        items.forEach(item => item.style.display = "none");
        

        
        let activeWithinVisibleIndex = currentIndex % visibleItemCount; 
        let startIndexOfSet = currentIndex - activeWithinVisibleIndex;

        for (let i = 0; i < visibleItemCount; i++) {
            let index = (startIndexOfSet + i) % items.length;
            items[index].style.display = 'block';
            items[index].classList.toggle("active", i === activeWithinVisibleIndex);
        }
    }

    function moveCarousel(direction) {
        const itemsCount = document.querySelectorAll(".carousel-item").length;
        currentIndex = (currentIndex + direction + itemsCount) % itemsCount;
        updateActiveItems();
    }
    
    // How many posts side by side based on screen width 
    function getVisibleItemsCount() {
        if (window.innerWidth >= 1200) {
            return 3; 
        } else if (window.innerWidth >= 900) {
            return 2; 
        }
        return 1; 
    }

    // Event listeners
    
    function attachEventListeners() {
        leftArrow.addEventListener('click', () => moveCarousel(-1));
        rightArrow.addEventListener('click', () => moveCarousel(1));
    
        //Had to add extra function for it to give me the amount of posts I want
        //when resizing the window in responsive tool 
        //First it only worked when the width was set, but not when resizing the window
        //in responsive mode. Should work now. 
        window.addEventListener('resize', function() {
            populateCarousel(); 
        });
    }

    populateCarousel(); 
    attachEventListeners(); 


}

