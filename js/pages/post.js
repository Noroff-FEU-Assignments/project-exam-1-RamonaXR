import {renderPost} from "../rendering/renderPost.js"
import { getID } from "../data/getID.js";
import { fetchData } from "../data/fetchApi.js"


export async function createPost(){
    try {
        const id = getID();
        const newURL = "exam1.ramonaelise.one/wp-json/wp/v2/posts/" + id + "?acf_format=standard";
        const post = await fetchData(newURL);
        renderPost(post);
    } catch (error) {
        console.log(error); // ADD BETTER ERROR
    }
}