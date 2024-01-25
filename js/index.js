
import { toggleMenu } from "./hamburger/hamburger.js";
import { createBlog } from "./pages/blog.js";
import { createPost } from "./pages/post.js";


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
        break;
    case "/post/":
        createPost();
        break; 
    case "/index/":
        createHome();
}