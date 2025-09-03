export const validateEmail = (email) => {
    if(email.trim()){
        const regex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }
    }