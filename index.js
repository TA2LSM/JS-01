// Comment Line

// Object Literal
let person = {
  name: 'Semih',
  age: 39,
  //   address,         // undefined olduğu için hata verir
};

// person.name = 'John';        // dot notation
// person['name'] = 'John';     // bracket notation

// let selection = 'name';      // user's selection
// person[selection] = 'John';

console.log(person);
//-----------------------------------------------------

let selectedColors = ['red', 'blue'];
console.log(`Index 0 of the array is`, selectedColors[0]);

selectedColors.push('green'); // ya da selectedColors[2] = 'green' yazılabilir.
// console.log(selectedColors);
// selectedColors[2] = 23;
// console.log(selectedColors);

console.log(`Array's lenght is`, selectedColors.length);
console.log(`Index of 'blue' is`, selectedColors.indexOf('blue'));

// Performing a task
function greet(name, lastName) {
  console.log('Welcome ' + name + ' ' + lastName + '!');
}

// Calculating a value
function add(a, b) {
  return a + b;
}

greet('Semih', 'SENOL');

selectedColors[2] = add(5, 8);
console.log(selectedColors);
//-----------------------------------------------------

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
//-----------------------------------------------------

// let userColor = 'red';
let userColor = ''; // ya da undefined dersek çıktı blue olur. yukardaki gibi tanımlarsak red olur.
let selectedColor = 'blue';
let currentColor = userColor || selectedColor;
console.log(selectedColor);
//-----------------------------------------------------
