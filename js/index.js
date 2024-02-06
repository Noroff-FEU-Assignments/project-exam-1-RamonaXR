
import { toggleMenu } from "./hamburger/hamburger.js";
import { createBlog } from "./pages/blog.js";
import { createPost } from "./pages/post.js";
import { createHome } from "./pages/home.js";
import { validateContactForm } from "./contact/contact.js";
import { initializeLoveCarousel } from "./carousel/carousel.js";







toggleMenu();

switch (window.location.pathname){
    case "/about/":
        // Code
        break;
    case "/contact/":
        validateContactForm();
        toggleMenu();
        break; 
    case "/blog/":
        createBlog();
        toggleMenu();
        break;
    case "/post/":
        createPost();
        toggleMenu();
        break; 
    case "/":
    case "/index.html":
        createHome();
        toggleMenu();
        initializeLoveCarousel();
        
}