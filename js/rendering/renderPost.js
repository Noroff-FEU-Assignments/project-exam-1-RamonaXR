export function renderPost(post){

    const parent = document.querySelector(".post");

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    

        const element = document.createElement("article");
        element.classList.add("post");
    
        const title = document.createElement("h1");
        title.textContent = post.acf.blog_title; 
        title.classList.add("h1-post");
        element.append(title);

        const image = document.createElement("img");
        image.src = post[i].acf.blog_image;
        image.setAttribute("alt", post.acf.blog_title); // REMEMBER ADDING ALT
        image.classList.add("posts-img");
        element.append(image);

        const heading = document.createElement("h2");
        heading.textContent = post.acf.blog_heading; 
        heading.classList.add("h2-post");
        element.append(heading);

        const paragraph1 = document.createElement('p');
        paragraph1.textContent = post.acf.blog_p1;
        element.appendChild(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph1.textContent = post.acf.blog_p2;
        element.appendChild(paragraph2);

        const paragraph3 = document.createElement('p');
        paragraph1.textContent = post.acf.blog_p3;
        element.appendChild(paragraph3);




        parent.append(element);
    }

