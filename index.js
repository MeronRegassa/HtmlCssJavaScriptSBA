// Load environment variables from .env file
// require("dotenv").config();

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    
    // validateInputes();

    // Mock login (replace with real authentication in production)
    if (username === "morinaga" && email === "morinaga.mg@gmail.com" && password === "123456") {
        alert('Login successful!');
      
        window.location.assign("members.html");
        
    } else {
        alert('Invalid credentials, please try again.');
        
    }
    // isValidEmail()

});
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
//     // window.location.assign("members.html");
// }

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')

//     errorDisplay.innerText = message;
//     inputControl.classList.add('.error');
//     inputControl.classList.remove('success')
// }



// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// const validateInputes = () => {
//     const usernameValue = username.value.trim();
//     const passwordValue = password.value.trim();
//     const emailValue = email.value.trim();

//     if(usernameValue  === ''  ){
//         setError(username, "Username is required");
//     }else{
//         setSuccess(username);
//     }
    
//     if(emailValue === ''){
//         setError(password, 'Email is required!');
//     }else{
//         setSuccess(email);
//     }

//     if(passwordValue === ''){
//         setError(password, 'Password is required')
//     }else if (passwordValue.length < 8) {
//         setError(password, "Password must be at least 8 character.")
//     }else {
//         setSuccess(password);
//     }


// }



