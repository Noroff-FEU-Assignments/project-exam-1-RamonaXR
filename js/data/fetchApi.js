import { errorAPI } from "../errorhandling/errors.js";


export async function fetchData(url){
    const response = await fetch(url);
    const result = await response.json(); 
    if (!response.ok) {
        throw errorAPI;
    }
    return result; 
    
}


