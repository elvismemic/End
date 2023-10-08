let lastname = "Memija";
lastname = "Memic";
let age = 999;
let date = new Date();

let propertyName = 'country';
let propertyValue = 'Bosnia and Herzegovina';

let person = {
    [propertyName]: propertyValue,
    lastname,
    age,
    date: new Date(),
    normalFunction(){
        // ...
    },
    arrowFunction: () => {
        // ...
    }
}

console.log(person.age);
person.normalFunction();
person.arrowFunction();
console.log(person.country);
console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];

console.log(returnValueFromPerson('lastname'));
