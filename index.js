"use strict"
const fetch = require('node-fetch');


/** This function only checks the email accross a database
to see if there is a record of it being breached **/
exports.checkEmail = function(email) {
    return new Promise(resolve => {
        if (!email)
        resolve(false);
        else 
        var urlencoded = new URLSearchParams();
        urlencoded.append("apiKEY", "YEqWsRCHDaw8WcFUsQWKmO"); //API Key from account.verified.ly
        urlencoded.append("email", email);
      

        var requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow'
        };

    fetch("https://api.verified.ly/v1/pwned", requestOptions)
    .then(response => response.text())
    .then((result) => {
        const res = JSON.parse(result)
       // console.log(res.statusCode)
        if (res.statusCode == 0) {
            resolve(false);
        } else {
            resolve(true);
        }
    })
    .catch(error => {
        console.log('error', error)
        resolve(false);
    });
        });

      
},

/** This function only checks both the email and password 
 * accross a database  to see if there is a record of it 
 * being breached **/
exports.checkEmailPassword = function(email, password) {
    return new Promise(resolve => {
        if (!email && !password)
        resolve(false);
        else 
        var urlencoded = new URLSearchParams();
        urlencoded.append("apiKEY", "YEqWsRCHDaw8WcFUsQWKmO"); //API Key from account.verified.ly
        urlencoded.append("email", email);
        urlencoded.append("password", password);

      

        var requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow'
        };

    fetch("https://api.verified.ly/v1/pwned", requestOptions)
    .then(response => response.text())
    .then(result => {
       // console.log(result)
       const res = JSON.parse(result)
        if (res.statusCode == 0) {
            resolve(false);
        } else {
            resolve(true);
        }
    })
    .catch(error => {
        console.log('error', error)
        resolve(false);
    });
    });
}
