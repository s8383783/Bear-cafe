'use strict'

let name = prompt('What is your name?');
document.write('Welcome ' + name + '     '+ ',');
    let email = prompt('Please enter your email. ');
    let confirmation = prompt(' Is this your email? ' +' ' + email);
    if (confirmation === 'Y') {
        document.write('thank you for confirming your email');
    };
    if (confirmation === 'N') {
        document.write(' Please refresh page. ');
}




