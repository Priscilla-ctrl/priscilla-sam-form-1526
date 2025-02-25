// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let fname = document.getElementById('full-name');
let email = document.getElementById('email-input');
let msg = document.getElementById('message');
let btn = document.getElementById('submit');

// Declare variable that will 
// store regular expression for email
let correctEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
btn.onclick = function () {
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let data ={};
    let errors = [];

    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    if (fname.value) {
        data.fullname = fname.value;
       // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    } else {
        errors.push('Full name is missing');
    }
    // End your conditional here.

    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    if (email.value) {
        if (correctEmail.test(email.value)) {
            data.email = email.value;
        }

       // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
        else {
            errors.push('Please enter a valid email');
        }
       // End your nested conditional here.

       // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    } else {
        errors.push('Email is missing');
    }
    // End your outer conditional here.

    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    if (msg.value) {
        data.msg = msg.value;
        
        // Otherwise:
        // Create a corresponding error-message
        // and add it to your array "errors"
    } else {
        errors.push('Message is missing');
    }
    // End your conditional here.
        
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields

    if (errors.length > 0) {
        console.log(errors);

    } else {
        console.log(data);
        fname.value = '';
        email.value = '';
        msg.value = '';
        errors = [];
        // End your conditional here.
    }
        
    // Close your function here
}