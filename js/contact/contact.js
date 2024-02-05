// Contact form

export function validateContactForm() {
const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector(".successMessage");
const closeButton = document.querySelector(".close-button");

// Real-time validation for Name
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");

nameInput.addEventListener("input", function () {
    if (nameInput.value.length < 5) {
        nameInput.classList.add("invalid");
        nameError.textContent = "Name should be more than 5 characters long.";
    } else {
        nameInput.classList.remove("invalid");
        nameError.textContent = "";
    }
});

// Real-time validation for Email
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    emailInput.addEventListener("input", function () {
    if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    emailError.textContent = "Please enter a valid email address.";
    } else {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
    }
});

// Real-time validation for Subject
const subjectInput = document.getElementById("subject");
const subjectError = document.getElementById("subject-error");
subjectInput.addEventListener("input", function () {
    if (subjectInput.value.length < 15) {
    subjectInput.classList.add("invalid");
    subjectError.textContent =
        "Subject should be more than 15 characters long.";
    } else {
    subjectInput.classList.remove("invalid");
    subjectError.textContent = "";
    }
});

// Real-time validation for Message
const messageInput = document.getElementById("message");
const messageError = document.getElementById("message-error");
    messageInput.addEventListener("input", function () {
    if (messageInput.value.length < 25) {
    messageInput.classList.add("invalid");
    messageError.textContent =
    "Message content should be more than 25 characters long.";
    } else {
    messageInput.classList.remove("invalid");
    messageError.textContent = "";
    }
});

// Submit event listener
contactForm.addEventListener("submit", function (event) {
event.preventDefault();

let isValid =
    !nameInput.classList.contains("invalid") &&
    !emailInput.classList.contains("invalid") &&
    !subjectInput.classList.contains("invalid") &&
    !messageInput.classList.contains("invalid");

    if (isValid) {
    successMessage.style.display = "block";
    contactForm.reset();
    }
});

// Close button event listener
closeButton.addEventListener("click", function () {
successMessage.style.display = "none";
});
}
