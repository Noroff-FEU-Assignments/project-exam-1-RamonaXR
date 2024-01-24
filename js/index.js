import { toggleMenu } from "./hamburger/hamburger.js";
import { fetchData } from "./data/fetchApi.js";
    
fetchData ()

toggleMenu()


switch (window.location.pathname){
    case "/about":
        // Code
        break;
    case "/contact":
        // Code
        break; 
    case "blog":
        // Code 
        break;
    case "post":
        //Code here
        break; 
    case "index":
        createHome();
}