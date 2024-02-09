
// POSTing the contact form



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
}









