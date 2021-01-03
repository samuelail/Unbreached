# What is Unbreached?

Unbreached is a small package to check if your users are signing up for your service with compromized credentials ( email and password)

# Installation

`npm i unbreached --save`

# Usage

```
const unbreached = require('unbreached');

/** This only checks the email address to see if has been breached.
Note : Not sending an email will automatically result in false **/
async function checkEmail() {

    const email = 'example@example.com';

    const isBreached = await unbreached.checkEmailPassword(email)
    console.log(isBreached)   // True or False
    if (isBreached === true) {
        // Prevent them from doing whatever 
    } else {
        // Allow them to do whatever
    }

}

/** This checks both the email and password. If no matching pair is found,
* It will result in false . Note: Not sending both an email and password will automatically result in false **/
async function checkEmailandPassword() {

    const email = 'example@example.com';
    const password = 'examplepassword';

    const isBreached = await unbreached.checkEmailPassword(email, password)
    console.log(isBreached)   // True or False
    if (isBreached === true) {
        // Prevent them from doing whatever 
    } else {
        // Allow them to do whatever
    }

}

```