import { renderHome } from "../rendering/renderHome.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";

export async function createHome(){
    try {
        const posts = await fetchData(url);
        renderHome(posts);
    } catch (error) {
        console.log(error);
        
    }
}