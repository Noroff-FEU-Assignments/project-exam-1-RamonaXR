import {renderPost} from "../rendering/renderPost.js"
import { getID } from "../data/getID.js";
import { fetchData } from "../data/fetchApi.js"
import { displayMessage } from "../errorhandling/displayMessage.js";

const parent = document.querySelector(".post");

// Get ID for post 
export async function createPost(){
    try {
        const id = getID();
        const newURL = "https://exam1.ramonaelise.one/wp-json/wp/v2/posts/" + id + "?acf_format=standard";
        const post = await fetchData(newURL);
        
        renderPost(post);
        // Title in tab
        document.title = "Beauty by Ramona |"+ " " + post.acf.blog_title;
    } catch (error) {
        console.log(error); 
        displayMessage(error, "error", parent);
    }
}