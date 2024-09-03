export const CheckValidData = (email, password) =>{
    const validateEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
.test(email);
    const validatepassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!validateEmail && !validatepassword) return "Invalid Email or password";
    if(!validateEmail) return "Enter valid email";
    if(!validatepassword) return "Enter valid password";
    else return null;
}