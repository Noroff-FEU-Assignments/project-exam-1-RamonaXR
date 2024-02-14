export function checkIfValid(name, email, subject, message) {
    if (name && email && subject && message) {
        return true; 
        
    } else {
        return false;
    }
}