import { renderHome } from "../rendering/renderHomeCarousel.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";


// Create homepage


const parent = document.querySelector(".carousel-container") 

export async function createHome(){
    try {
        const posts = await fetchData(url);
        parent.innerHTML = "";
        renderHome(posts);
    } catch (error) {
        console.log(error); // Add error! 
        
    }
}

