
import { posts } from "../data/posts.js";
import { displayMessage } from "../errorhandling/displayMessage.js";
import { renderBlog } from "../rendering/renderBlog.js";
import { initializeBlogFeatures } from "../rendering/blogEnhancements.js";
import { postsPerPage } from "../rendering/blogEnhancements.js";

const parent = document.querySelector(".blogposts") 



export async function createBlog() {
    try {
        parent.innerHTML = "";
        renderBlog(posts.slice(0, postsPerPage)); 
        initializeBlogFeatures(posts); 
    } catch (error) {
        console.log(error);
        displayMessage(error, "error", parent);
    }
}
