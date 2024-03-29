import { errorParent } from "../errorhandling/errors.js";




export function renderBlog(posts, append = false) {
    const parent = document.querySelector(".blogposts");
    if (!parent) {
        throw errorParent;
    }
    if (!append) {
        parent.innerHTML = ""; // Clear existing posts if not appending
    }



    // Loop for all posts
    for (let i = 0; i < posts.length; i++) {
        const element = document.createElement("article");
        element.classList.add("posts");

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const titleLink = document.createElement("a");
        titleLink.href = "/post/?id=" + posts[i].id; 
        titleLink.classList.add("post-title-link");

        const title = document.createElement("h2");
        title.textContent = posts[i].acf.blog_title;
        title.classList.add("h2-posts");
        
        
        titleLink.append(title);
        element.append(titleLink);

        

        const image = document.createElement("img");
        image.src = posts[i].acf.blog_image;
        image.setAttribute("alt", posts[i].acf.alt_text);
        image.classList.add("posts-img");
        

        

        imageWrapper.append(image);
        element.append(imageWrapper);

        // Need a wrapper here too for styling
        const contentWrapper = document.createElement("div"); 
        contentWrapper.classList.add("content-wrapper");

        const heading = document.createElement("h3");
        heading.textContent = posts[i].acf.blog_heading; 
        heading.classList.add("h3-posts");
        contentWrapper.append(heading);

        const paragraph4 = document.createElement('p');
        paragraph4.textContent = posts[i].acf.date_of_post;
        paragraph4.classList.add("date-post");
        contentWrapper.append(paragraph4);


        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + posts[i].id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        

        parent.append(element);
    }       
}           




    



