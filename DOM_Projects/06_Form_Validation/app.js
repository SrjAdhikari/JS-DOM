// Select the input fields and the form
const input_Username = document.querySelector('#username');
const input_Email = document.querySelector('#email');
const input_Password = document.querySelector('#password');
const input_ConfirmPassword = document.querySelector('#confirm-password');
const input_Form = document.querySelector('#signup')


//* *****************************************
//* Utility functions
//* *****************************************


// isRequired() function returns true if the input argument is empty
const isRequired = value => value === '' ? false : true;

// isBetween() function returns false if the length argument is not between the min and max argument
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// To check the email is valid
const isEmailValid = (email) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email)
};

// To check if a password is strong, which match a specified pattern
const isPasswordSecure = (password) => {
    const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return pattern.test(password);
};


//* *****************************************
//* Develop functions that show the error / success
//* *****************************************


// showError() function highlights the border of the input field and displays an error message if the input field is invalid
const showError = (input, message) => {
    // Get the parent element of the input field, which is the <div> element
    const formField = input.parentElement;

    // Remove the 'success' class if present, to ensure only the 'error' class is active
    formField.classList.remove('success');

    // Add the 'error' class to the form field to apply error styling
    formField.classList.add('error');

    // Find the <small> element within the form field to display the error message
    const error = formField.querySelector('small');

    // Set the text content of the <small> element to the provided error message
    error.textContent = message;
};


// showSuccess() function shows the success indicator
const showSuccess = (input) => {

    // Get the parent element of the input field, which is the <div> element
    const formField = input.parentElement;

    // Remove the 'error' class if present, to ensure only the 'success' class is active
    formField.classList.remove('error');

    // Add the 'success' class to the form field to apply success styling
    formField.classList.add('success');

    // Find the <small> element within the form field to hide the error message
    const error = formField.querySelector('small');

    // Set the text content of the <small> element to an empty string to hide the error message
    error.textContent = '';
};



//* *****************************************
//* Develop input field validating functions
//* *****************************************


// 1. Validate the username field -> The checkUsername() function returns true if the field passes the checks.
const checkUsername = () => {

    // Initialize a variable to track validity, default to false
    let valid = false;

    // Define the minimum and maximum length for the username
    const min = 3, max = 25;

    // Get the trimmed value of the username input field
    const username = input_Username.value.trim();

    // Check if the username is empty
    if (!isRequired(username)) {
        // Show an error message if the username is blank
        showError(input_Username, 'Username cannot be blank.');
    }
    // Check if the username length is within the specified range
    else if (!isBetween(username.length, min, max)) {
        // Show an error message if the username is not within the range
        showError(input_Username, `Username must be between ${min} and ${max} characters.`);
    }
    // If the username passes both checks, show success and set valid to true
    else {
        showSuccess(input_Username);
        valid = true;
    }

    // Return the validity status
    return valid;
};


// 2. Validate the email field -> The checkEmail() function returns true if the email is provided and valid.
const checkEmail = () => {

    // Initialize a variable to track validity, default to false
    let valid = false;

    // Get the trimmed value of the email input field
    const email = input_Email.value.trim();

    // Check if the email is empty
    if (!isRequired(email)) {
        // Show an error message if the email is blank
        showError(input_Email, 'Email cannot be blank');
    }
    // Check if the email format is valid
    else if (!isEmailValid(email)) {
        // Show an error message if the email format is not valid
        showError(input_Email, 'Email is not valid');
    }
    // If the email passes both checks, show success and set valid to true
    else {
        showSuccess(input_Email);
        valid = true;
    }

    // Return the validity status
    return valid;
};


// 3. Validate the password  field -> The checkPassword() function checks the password field if it is provided and match the required format
const checkPassword = () => {

    // Initialize a variable to track validity, default to false
    let valid = false;

    // Get the trimmed value of the password input field
    const password = input_Password.value.trim();

    // Check if the password is empty
    if (!isRequired(password)) {
        // Show an error message if the password is blank
        showError(input_Password, 'Password cannot be blank.');
    } 
    // Check if the password meets the security requirements
    else if (!isPasswordSecure(password)) {
        // Show an error message if the password does not meet the security requirements
        showError(input_Password, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*).');
    } 
    // If the password passes both checks, show success and set valid to true
    else {
        showSuccess(input_Password);
        valid = true;
    }

    // Return the validity status
    return valid;
};


// 4. Validate the confirm password field -> The checkConfirmPassword() function checks if the confirm password is the same as the password.
const checkConfirmPassword = () => {

    // Initialize a variable to track validity, default to false
    let valid = false;

    // Get the trimmed value of the confirm password input field
    const confirmPassword = input_ConfirmPassword.value.trim();

    // Get the trimmed value of the original password input field
    const password = input_Password.value.trim();

    // Check if the confirm password is empty
    if (!isRequired(confirmPassword)) {
        // Show an error message if the confirm password is blank
        showError(input_ConfirmPassword, 'Please enter the password again.');
    } 
    // Check if the confirm password matches the original password
    else if (password !== confirmPassword) {
        // Show an error message if the passwords do not match
        showError(input_ConfirmPassword, 'Confirm password does not match.');
    } 
    // If the confirm password passes both checks, show success and set valid to true
    else {
        showSuccess(input_ConfirmPassword);
        valid = true;
    }

    // Return the validity status
    return valid;
};



// Attach the "submit" event listener to the form to prevent the form from submitting once the submit button is clicked.
input_Form.addEventListener('submit', (event) => {

    // Prevent the form from submitting to the server
    event.preventDefault();

    // Validate each form field
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    // Determine if the entire form is valid
    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    // Submit the form to the server if all fields are valid
    if (isFormValid) {
        // Add form submission logic here, e.g., using AJAX
    }
});

const debounce = (fn, delay = 500) => {
    // Initialize a variable to store the timeout ID
    let timeoutId;

    // Return a new function that wraps the original function `fn`
    return (...args) => {
        // If there's an existing timeout, clear it to cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set up a new timer that will invoke `fn` after the specified delay
        timeoutId = setTimeout(() => {
            // Call the original function `fn` with the provided arguments
            fn.apply(null, args);
        }, delay);
    };
};


// Add an event listener to the form for the 'input' event, and debounce it
input_Form.addEventListener('input', debounce(function (e) {

    // Switch based on the ID of the input element that triggered the event
    switch (e.target.id) {
        case 'username':
            // Call checkUsername() function to validate the username field
            checkUsername();
            break;
        case 'email':
            // Call checkEmail() function to validate the email field
            checkEmail();
            break;
        case 'password':
            // Call checkPassword() function to validate the password field
            checkPassword();
            break;
        case 'confirm-password':
            // Call checkConfirmPassword() function to validate the confirm password field
            checkConfirmPassword();
            break;
    }
}));