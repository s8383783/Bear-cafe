'use strict'
function getName() 
{let name = prompt('What is your name?');
document.write('Welcome ' + name + '     '+ ',');
};

function getEmail(){
    let email = prompt('Please enter your email. ');
    let confirmation = prompt(' Is this your email? ' +' ' + email);
    if (confirmation === 'Y') {
        document.write('thank you for confirming your email');
    };
    if (confirmation === 'N') {
        document.write(' Please refresh page. ');
}


}

document.write(getName)
document.write(getEmail)