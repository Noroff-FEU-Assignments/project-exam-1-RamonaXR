


export function renderHome(posts){

    const parent = document.querySelector(".carousel-container");
   
   

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    for (let i = 0; i < 4; i++){
        const element = document.createElement("article");
        element.classList.add("posts");
    
        const title = document.createElement("h2");
        title.textContent = posts[i].acf.blog_title; 
        title.classList.add("h2-posts");
        element.append(title);

        const image = document.createElement("img");
        image.src = posts[i].acf.blog_image;
        image.setAttribute("alt", posts[i].acf.blog_title); // REMEMBER ADDING ALT
        image.classList.add("posts-img");
        element.append(image);

        const heading = document.createElement("h3");
        heading.textContent = posts[i].acf.blog_heading; 
        heading.classList.add("h3-posts");
        element.append(heading);

        const btn = document.createElement("a");
        btn.href = "/post/" + "?id=" + posts[i].id;
        btn.classList.add("button");
        btn.textContent = "Read More";
        element.append(btn);


        parent.append(element);
    }
    


    
} 

