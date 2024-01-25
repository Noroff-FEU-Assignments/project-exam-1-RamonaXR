import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";
import { renderBlog } from "../rendering/renderBlog.js";

export async function createBlog(){
    try {
        const posts = await fetchData(url);
        renderBlog(posts); 
    } catch (error) {
        console.log(error); // ADD BETTER ERROR 
    }
}