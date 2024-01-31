export function renderPost(post){
    console.log(post);

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
        image.src = post.acf.blog_image;
        image.setAttribute("alt", post.acf.blog_title); // REMEMBER ADDING ALT
        image.classList.add("posts-img");
        element.append(image);

        const heading = document.createElement("h2");
        heading.textContent = post.acf.blog_heading; 
        heading.classList.add("h2-post");
        element.append(heading);

        const paragraph1 = document.createElement('p');
        paragraph1.textContent = post.acf.blog_p1;
        element.append(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph2.textContent = post.acf.blog_p2;
        element.append(paragraph2);

        const paragraph3 = document.createElement('p');
        paragraph3.textContent = post.acf.blog_p3;
        element.append(paragraph3);

        const paragraph4 = document.createElement('p');
        paragraph3.textContent = post.acf.date_of_post;
        element.append(paragraph4);




        parent.append(element);
    }

