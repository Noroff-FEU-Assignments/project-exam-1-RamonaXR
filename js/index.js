
import { toggleMenu } from "./hamburger/hamburger.js";
import { createBlog } from "./pages/blog.js";
import { createPost } from "./pages/post.js";
import { createHome } from "./pages/home.js";




toggleMenu()


switch (window.location.pathname){
    case "/about/":
        // Code
        break;
    case "/contact/":
        // Code
        break; 
    case "/blog/":
        createBlog();
        break;
    case "/post/":
        createPost();
        break; 
    case "/":
    case "/index.html":
        createHome();
        
        
}