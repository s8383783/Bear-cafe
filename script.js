'use strict'

let name = prompt('What is your name?');
document.write('Welcome ' + name + '     '+ ',');
    let email = prompt('Please enter your email. ');
    let confirmation = prompt(' Is this your email? ' +' ' + email);
    if (confirmation === 'yes') {
        document.write('thank you for confirming your email');
    };
    if (confirmation === 'no') {
        document.write(' Please refresh page. ');
}

let rating = prompt('what is your rating for this restaurant?');
for (let i = 0; i < rating; i++) {
    document.write('<img id= "stars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png">');
      } 
let bears = prompt('Do you like bears?')
while (bears != 'yes') {
   bears = prompt('TRY AGAIN. DO YOU LIKE BEARS?') 
}