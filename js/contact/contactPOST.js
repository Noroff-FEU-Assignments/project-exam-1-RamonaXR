
// POSTing the contact form

import { contactURL } from "../data/constants.js";

/*

export function submitContactForm(formData) {
    const url = "https://exam1.ramonaelise.one/wp-json/contact-form-7/v1/contact-forms/91/feedback"; 

    fetch(url, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {throw err;});
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle success
    })
    .catch((error) => {
        console.error('Submission Error:', error);
        // Handle errors
    });
} */



export async function submitContactForm(formData) {
    const url = contactURL;

    try {
        const response = await fetch(contactURL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            
            const err = await response.json(); 
            throw new Error(err.message || `Failed to submit form, server responded with status: ${response.status}`);
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Submission Error:', error);
        throw error; 
    }
}









