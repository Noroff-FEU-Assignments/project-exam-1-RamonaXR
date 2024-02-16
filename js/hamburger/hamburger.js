// Show hamburgermenu


const menuButton = document.querySelector(".hamburger-wrap");
    const closingButton = document.querySelector(".closing-btn");
    const navElement = document.querySelector("nav");
    const overlay = document.querySelector(".overlay");


// I have tried to add additional aria attributes for telling when it is expanded and closed
// and other ways to make it more accessible for screen readers. 
//But it was messing a lot with the hamburger menus functionality, so I'm putting it aside for this time. 

export function useMenu() {
    

    menuButton.addEventListener("click", function() {
        
        // Menu 
        navElement.style.display = "flex";
        overlay.classList.remove("visually-hide");
        setTimeout(menuAction, 100);
        menuButton.setAttribute("aria-label", "Close Menu"); 

        
        
    })

}

    closingButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    

function closeMenu() {
    navElement.style.display = "none";
    navElement.style.right = "-150px";
    overlay.classList.add("visually-hide");
    menuButton.setAttribute("aria-label", "Open Menu");
    
    
}

function menuAction() {
    navElement.style.right = "0px";
    navElement.style.transition = "500ms";
}

// Adding eventlistener for window resize
// So that the nav links for desktop appear, after displaying hamburgermenu 
// when resizing the window back and forth in liveserver or inspection
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200) {
        
        navElement.style.display = ''; 
        navElement.style.right = ''; 
        overlay.classList.add('visually-hide'); 

    }
});




