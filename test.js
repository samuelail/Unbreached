const unbreached = require('./index');

//Run the check email function
checkEmail()
checkEmailandPassword()

async function checkEmail() {

    const email = 'example@example.com';

    const isBreached = await unbreached.checkEmail(email)
    console.log(isBreached)   // True or False
    if (isBreached === true) {
        console.log('Email compromized')
        // Prevent them from doing whatever 
    } else {
        console.log('Email not compromized')
        // Allow them to do whatever
    }

}

async function checkEmailandPassword() {

    const email = 'example@example.com';
    const password = 'examplepassword';

    const isBreached = await unbreached.checkEmailPassword(email, password)
    console.log(isBreached)   // True or False
    if (isBreached === true) {
        // Prevent them from doing whatever 
        console.log('credentials compromized')
    } else {
        // Allow them to do whatever
        console.log('Credentials not compromized')
    }

}