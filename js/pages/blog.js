
import { posts } from "../data/posts.js";
import { displayMessage } from "../errorhandling/displayMessage.js";
import { renderBlog } from "../rendering/renderBlog.js";

const parent = document.querySelector(".blogposts") 

// Blog page 
export async function createBlog(){
    try {
        parent.innerHTML = "";
        renderBlog(posts); 
    } catch (error) {
        console.log(error); 
        displayMessage(error, parent, "error");
    }
}