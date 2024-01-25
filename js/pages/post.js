import {renderPost} from "../rendering/renderPost.js"
import { getID } from "../data/getID.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js"

export async function createPost(){
    try {
        const id = getID();
        const newURL = url + "/" + id;
        const post = await fetchData(newURL);
        renderPost(post);
    } catch (error) {
        console.log(error); // ADD BETTER ERROR
    }
}