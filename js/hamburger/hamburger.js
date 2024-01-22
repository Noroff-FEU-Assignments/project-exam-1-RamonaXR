/* Show hamburgermenu*/

export function toggleMenu() {
    const menu = document.querySelector('.nav-head');
    menu.classList.toggle('show');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);