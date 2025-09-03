// export const validateEmail = (email) => {
//     if(email.trim()){
//         const regex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
//         return regex.test(email);
//     }
//     }
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email);
};
