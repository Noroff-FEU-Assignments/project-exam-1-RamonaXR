/*export async function fetchData(url){
    const response = await fetch(url);
    const result = await response.json(); 
    return result; 
    
}*/

export async function fetchData(url) {
    try {
        const response = await fetch(url);

        // Log to check the response status
        console.log("Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        // Log to check the fetched data
        console.log("Fetched Data:", result);

        return result;
    } catch (error) {
        console.error("Fetch error:", error.message);
        return null; // or re-throw the error
    }
}
