// Contact form and validation 

import { displayMessage } from "../errorhandling/displayMessage.js";
import { submitContactForm } from "./contactPOST.js";
import { checkIfValid } from "./validate/checkIfValid.js";



const contactForm = document.querySelector(".contact-form")

// Submit event listener
contactForm.addEventListener("submit", function (event){
    event.preventDefault();
    });

validateContactForm();
updateForm();

// Input realtime 
export function updateForm() {
    const elements = document.querySelectorAll("input");
    const textArea = document.querySelector("textarea");

    elements.forEach(input => {
        input.addEventListener("blur", validateContactForm);
        input.addEventListener("change", validateContactForm);
    });

    textArea.addEventListener("blur", validateContactForm);
    textArea.addEventListener("change", validateContactForm);
}



export function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    let isNameValid = false;

    if (nameInput.value.length < 6 && nameInput.value !== "") {
        nameInput.classList.add("invalid");
        nameError.textContent = "Name should be more than 5 characters long.";
        isNameValid = false;
    } else {
        nameInput.classList.remove("invalid");
        nameError.textContent = "";
        isNameValid = true;
    }
    if (nameInput.value === "") {
        isNameValid = false;
    }
    return isNameValid;
}

export function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let isEmailValid = false;
    
    if (!emailRegex.test(emailInput.value) && emailInput.value !== "") {
    emailInput.classList.add("invalid");
    emailError.textContent = "Please enter a valid email address.";
    isEmailValid = false;
    } else {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
    isEmailValid = true;
    }
    if (emailInput.value === "") {
        isEmailValid = false;
    }
return isEmailValid;

}


export function validateSubject() {
    const subjectInput = document.getElementById("subject");
    const subjectError = document.getElementById("subject-error");
    let isSubjectValid = false;

    if (subjectInput.value.length < 15 && subjectInput.value !== "") {
    subjectInput.classList.add("invalid");
    subjectError.textContent =
        "Subject should be more than 15 characters long.";
        isSubjectValid = false;
    } else {
    subjectInput.classList.remove("invalid");
    subjectError.textContent = "";
    isSubjectValid = true;
    }
    if (subjectInput.value === "") {
        isSubjectValid = false;
    }
    return isSubjectValid;


}


export function validateMessage() {
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    let isMessageValid = false;
    
    if (messageInput.value.length < 25 && messageInput.value !== "") {
    messageInput.classList.add("invalid");
    messageError.textContent =
    "Message content should be more than 25 characters long.";
    isMessageValid = false;
    } else {
    messageInput.classList.remove("invalid");
    messageError.textContent = "";
    isMessageValid = true;
    }
    if (messageInput.value === "") {
        isMessageValid = false;
    }
    return isMessageValid;

}

// Async to make contact, before submitting data, or else success message will display even though I forced error with URL.
export async function validateContactForm() {


    let isNameValid = validateName(); 
    let isEmailValid = validateEmail();
    let isSubjectValid = validateSubject();
    let isMessageValid = validateMessage(); 





let isValid = checkIfValid(isNameValid, isEmailValid, isSubjectValid, isMessageValid);


    

    

    const messageContainer = document.querySelector("#messageContainer");

    if (isValid) {
        
        // Need to add the unity tag, because contact 7 was not letting me post with out it. 
    const formData = new FormData(contactForm);
    const unitTagInput = contactForm.querySelector("input[name='_wpcf7_unit_tag']");
    if (!unitTagInput) {
        console.warn("Could not find the _wpcf7_unit_tag in the form.");
        displayMessage("Something went wrong, please try again later!", "error", messageContainer);
        return; // Stop the function if the unit tag is missing
    }
    formData.append('_wpcf7_unit_tag', unitTagInput.value);

        try {
            await submitContactForm(formData); 
            displayMessage("Your message was sent!", "success", messageContainer);
        } catch (error) {
            
            console.error('Submission Error:', error);
            displayMessage("Something went wrong, please try again later!", "error", messageContainer);
        } finally {
            contactForm.reset(); // Reset the form in both success and failure cases
        }
    }
    
};






