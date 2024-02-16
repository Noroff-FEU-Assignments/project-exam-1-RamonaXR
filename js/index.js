
import { useMenu } from "./hamburger/hamburger.js";
import { createBlog } from "./pages/blog.js";
import { createPost } from "./pages/post.js";
import { createHome } from "./pages/home.js";

import { initializeLoveCarousel } from "./carousel/carousel.js";






// Hamburger menu
useMenu();


// Router should have been in it's own file, aware of that. 
// Not taking risks moving it, so keeping it here. 
// Will use keep it in it's own file next time. 

switch (window.location.pathname){
    case "/about/":
        //Code here
        break;
    case "/contact/":
        import("./contact/contact.js"); 
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
        initializeLoveCarousel();
        
}