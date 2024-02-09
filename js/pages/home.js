import { posts } from "../data/posts.js";
import { renderHome } from "../rendering/renderHomeCarousel.js";



// Create homepage


const parent = document.querySelector(".carousel-container") 

export async function createHome(){
    try {
        
        parent.innerHTML = "";
        renderHome(posts);
    } catch (error) {
        console.log(error); // Add error! 
        
    }
}

