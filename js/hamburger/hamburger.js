// Show hamburgermenu


const menuButton = document.querySelector(".hamburger-wrap");
    const closingButton = document.querySelector(".closing-btn");
    const navElement = document.querySelector("nav");
    const overlay = document.querySelector(".overlay");

export function toggleMenu() {
    

    menuButton.addEventListener("click", function() {
        navElement.style.display = "flex";
        overlay.classList.remove("hide");
        setTimeout(menuAction, 100);
    })

}

    closingButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);


export function closeMenu() {
    navElement.style.display = "none";
    navElement.style.right = "-150px";
    overlay.classList.add("hide");
}

export function menuAction() {
    navElement.style.right = "0px";
    navElement.style.transition = "500ms";
}