module.exports = {
/** This function only checks the email accross a database
to see if there is a record of it being breached **/
checkEmail(email) {
    return new Promise(resolve => {
        if (!email)
        resolve(false);
        else 
        resolve(true);
    });
},

/** This function only checks both the email and password 
 * accross a database  to see if there is a record of it 
 * being breached **/
checkEmailPassword(email, password) {
    return new Promise(resolve => {
        if (!email && !password)
        resolve(false);
        else 
        resolve(true);
    });
}
}