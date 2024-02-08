// Rendering single posts 


export function renderPost(post){
    

    const parent = document.querySelector(".post");
    parent.innerHTML = "";
     // Modal setup
     const modal = document.createElement("div");
     modal.classList.add("modal");
 
     const modalContent = document.createElement("img");
     modalContent.classList.add("modal-content");
     modal.append(modalContent);
 
     const closeModal = document.createElement("span");
     closeModal.classList.add("close-modal");
     closeModal.textContent = "×";
     modal.append(closeModal);
 
     document.body.append(modal); // Append modal to body 
 
     // Close modal 
     closeModal.onclick = function() {
         modal.style.display = "none";
     }
 

        const element = document.createElement("article");
        element.classList.add("post");
    
        const title = document.createElement("h1");
        title.textContent = post.acf.blog_title; 
        title.classList.add("h1-post");
        element.append(title);
        

        
        const image = document.createElement("img");
        image.src = post.acf.blog_image;
        image.setAttribute("alt", post.acf.alt_text);
        image.classList.add("posts-img");
        

        // Image click event to open modal
        image.onclick = function() {
            modal.style.display = "flex";
            modalContent.src = this.src; 
        }

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
        paragraph4.textContent = post.acf.date_of_post;
        paragraph4.classList.add("date-post");
        element.append(paragraph4);




        parent.append(element);

    // Close modal on outside click
    // Had to add touchstart- because tap outside did not work on mobile.
    window.addEventListener('touchstart', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }, false);

    window.addEventListener('click',  function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }, false);
    }

