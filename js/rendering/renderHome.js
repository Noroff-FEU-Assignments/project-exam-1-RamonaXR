
// Rendering posts for homepage

/*
export function renderHome(posts){

    const parent = document.querySelector(".carousel-container");
   
   



    for (let i = 0; i < 4; i++){
        
        const element = document.createElement("article");
        element.classList.add("posts");

        const imageWrapper = document.createElement("div"); 
        imageWrapper.classList.add("image-wrapper");
    
        const title = document.createElement("h2");
        title.textContent = posts[i].acf.blog_title; 
        title.classList.add("h2-posts");
        element.append(title);
        

        const image = document.createElement("img");
        image.src = posts[i].acf.blog_image;
        image.setAttribute("alt", posts[i].acf.alt_text); // REMEMBER ADDING ALT
        image.classList.add("posts-img");
        imageWrapper.append(image); 

        element.append(imageWrapper);
        
        
        const contentWrapper = document.createElement("div"); 
        contentWrapper.classList.add("content-wrapper");

        const heading = document.createElement("h3");
        heading.textContent = posts[i].acf.blog_heading; 
        heading.classList.add("h3-posts");
        contentWrapper.append(heading);

        /*const paragraph1 = document.createElement('p');
        paragraph1.textContent = posts[i].acf.blog_p1;
        element.append(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph2.textContent = posts[i].acf.blog_p2;
        element.append(paragraph2);

        const paragraph3 = document.createElement('p');
        paragraph3.textContent = posts[i].acf.blog_p3;
        element.append(paragraph3); */

/*
        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + posts[i].id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        
        parent.append(element);

    }
}

*/
        
        
// Start here

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
}

