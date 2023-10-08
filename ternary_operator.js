const age = 21;
let message;

if (age >= 18){
    message = 'You shell pass';
} else{
    message = 'You shell not pass'
}

console.log(message);

//use ternary operator
let message2 = (age >=18) ? "You shell pass" : "You shell not pass";

console.log(message2);