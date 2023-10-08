// example 1

const numbers = [1,2,3,4,5];
const squares = numbers.map(value => value*value);

console.log(squares); // [ 1, 4, 9, 16, 25 ]


// example 2

const people = [
    {id: 1, name: 'Elvis', country: 'BiH'},
    {id: 2, name: 'Tom', country: 'USA'},
    {id: 3, name: 'Ahmed', country: 'Egypt'},
]

const ids = people.map(person => person.id);
console.log(ids); // [ 1, 2, 3 ]

// example 3

const divs = numbers.map(number => `<div>${number}</div>`);
console.log(divs); 
/*
[
  '<div>1</div>',
  '<div>2</div>',
  '<div>3</div>',
  '<div>4</div>',
  '<div>5</div>'
]
*/



