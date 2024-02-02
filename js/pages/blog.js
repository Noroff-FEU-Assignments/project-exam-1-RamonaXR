import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";
import { renderBlog } from "../rendering/renderBlog.js";

const parent = document.querySelector(".blogposts") 

export async function createBlog(){
    try {
        const posts = await fetchData(url);
        parent.innerHTML = "";
        renderBlog(posts); 
    } catch (error) {
        console.log(error); // ADD BETTER ERROR 
    }
}