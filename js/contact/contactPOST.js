
// POSTing the contact form

import { contactURL } from "../data/constants.js";



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









