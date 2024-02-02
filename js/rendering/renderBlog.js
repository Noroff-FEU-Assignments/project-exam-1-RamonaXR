

// Rendering all posts

export function renderBlog(posts){

    const parent = document.querySelector(".blogposts");

    

    for (let i = 0; i < posts.length; i++){
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


        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + posts[i].id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        contentWrapper.append(btn);

        element.append(contentWrapper);

        
        parent.append(element);
    }
} 

