

/*export async function renderBlog() {
    const postsContainer = document.querySelector('main');
    const posts = await fetchData(url);

    // Clear existing content
    while (postsContainer.firstChild) {
        postsContainer.removeChild(postsContainer.firstChild);
    }

    posts.forEach(post => {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.src = post.acf.blog_image;
        img.alt = post.acf.blog_title;
        article.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = post.acf.blog_title;
        article.appendChild(title);

        const heading = document.createElement('h3');
        heading.textContent = post.acf.blog_heading;
        article.appendChild(heading);

        const paragraph1 = document.createElement('p');
        paragraph1.textContent = post.acf.blog_p1;
        article.appendChild(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph2.textContent = post.acf.blog_p2;
        article.appendChild(paragraph2);

        const paragraph3 = document.createElement('p');
        paragraph3.textContent = post.acf.blog_p3;
        article.appendChild(paragraph3);

        const date = document.createElement('p');
        date.textContent = `Posted on: ${post.acf.date_of_post}`;
        article.appendChild(date);

        postsContainer.appendChild(article);
    });
}*/



export function renderBlog(posts){
    console.log(posts);
    const parent = document.querySelector(".blogposts");
    parent.innerHTML = ""; 

    for (let i = 0; i < posts.length; i++){
        const element = document.createElement("article");
        element.classList.add("posts");
    
        const heading = document.createElement("h2");
        heading.textContent = posts[i].acf.title; 
        heading.classList.add("h2-posts");
        element.append(heading);

        const image = document.createElement("img");
        image.src = posts[i].acf.blog_image;
        image.setAttribute("alt", posts[i].acf.blog_title); // REMEMBER ADDING ALT
        image.classList.add("posts-img");
        element.append(image);

        const paragraph1 = document.createElement('p');
        paragraph1.textContent = posts[i].acf.blog_p1;
        element.appendChild(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph1.textContent = posts[i].acf.blog_p2;
        element.appendChild(paragraph2);

        const paragraph3 = document.createElement('p');
        paragraph1.textContent = posts[i].acf.blog_p3;
        element.appendChild(paragraph3);


    

        parent.append(element);
    }
} 

