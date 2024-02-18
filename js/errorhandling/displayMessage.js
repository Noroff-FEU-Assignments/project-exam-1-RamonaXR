
export function displayMessage(message, state, parent) {
    
    
    parent.innerHTML = ''; 

    const messageWrap = document.createElement("div");

    if (state === "success") {
        messageWrap.classList.add("successMessage");
    } else {
        messageWrap.classList.add("errorMessage");
    }
    
    
    const paragraphMessage = document.createElement("p");
    paragraphMessage.textContent = message;

    messageWrap.append(paragraphMessage);

    parent.append(messageWrap);
    
    
}