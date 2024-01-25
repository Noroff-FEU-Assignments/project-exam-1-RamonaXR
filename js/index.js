
import { toggleMenu } from "./hamburger/hamburger.js";
import { createBlog } from "./pages/blog.js";
import { renderBlog } from "./rendering/renderBlog.js";

toggleMenu()


switch (window.location.pathname){
    case "/about":
        // Code
        break;
    case "/contact":
        // Code
        break; 
    case "/blog/":
        createBlog();
        renderBlog();
        toggleMenu();
        break;
    case "/post/":
        //Code here
        break; 
    case "/index/":
        createHome();
}