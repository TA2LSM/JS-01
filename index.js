//****************************************************/
// 2-3. BÖLÜM
//****************************************************/
// // Object Literal
// let person = {
//   name: 'Semih',
//   age: 39,
//   //   address,         // undefined olduğu için hata verir
// };

// // person.name = 'John';        // dot notation
// // person['name'] = 'John';     // bracket notation

// // yukarıdaki erişim tipi, dinamik olarak gelen query için gerekli.
// // name olarak değil de aşağıdaki gibi kullanıcı seçimi olan durumlar için

// // let selection = 'name';      // user's selection
// // person[selection] = 'John';

// console.log(person);
// //-----------------------------------------------------

// let selectedColors = ['red', 'blue'];
// console.log(`Index 0 of the array is`, selectedColors[0]);

// selectedColors.push('green'); // ya da selectedColors[2] = 'green' yazılabilir.
// // console.log(selectedColors);
// // selectedColors[2] = 23;
// // console.log(selectedColors);

// console.log(`Array's lenght is`, selectedColors.length);
// console.log(`Index of 'blue' is`, selectedColors.indexOf('blue'));

// // Performing a task
// function greet(name, lastName) {
//   console.log('Welcome ' + name + ' ' + lastName + '!');
// }

// // Calculating a value
// function add(a, b) {
//   return a + b;
// }

// greet('Semih', 'SENOL');

// selectedColors[2] = add(5, 8);
// console.log(selectedColors);
// //-----------------------------------------------------

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);
// //-----------------------------------------------------

// // let userColor = 'red';
// let userColor = ''; // ya da undefined dersek çıktı blue olur. yukardaki gibi tanımlarsak red olur.
// let selectedColor = 'blue';
// let currentColor = userColor || selectedColor;
// console.log(selectedColor);
// //-----------------------------------------------------

//****************************************************/
// 4. BÖLÜM
//****************************************************/
// Example 1
// // Get current hour and check
// // If hour is between 6am and 12pm >> Good morning!
// // If it is between 12pm and 6am >> Good afternoon!
// // Otherwise >> Good evening!

// // const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const date = new Date(Date.now());
// const hour = date.getHours();

// if (hour >= 6 && hour < 12) console.log('Good morning!');
// else if (hour >= 12 && hour < 18) console.log('Good afternoon!');
// else console.log('Good evening!');

//-----------------------------------------------------

// Example 2
// Switch-case
// let role;
// // role = 'moderator';
// switch (role) {
//   case 'guest':
//     console.log(`You're a guest`);
//     break;
//   case 'moderator':
//     console.log(`You're a moderator`);
//     break;
//   default:
//     console.log(`Unknown user!`);
//     break;
// }

//-----------------------------------------------------

// Example 3
// For Loop (i > index'in kısaltması olduğu için genelde kullanılan bu)

// Burada tanımlı i aşağıdakinden farklı. Sadece for içinde tanımlı bir yerel değişken
// for (let i = 0; i < 6; ++i) {
//   if (i % 2 !== 0) console.log('Odd number: ', i);
//   // console.log('i =', i);
// }

// // while Loop
// let i = 0;
// while (i < 6) {
//   if (i % 2 !== 0) console.log('Odd number: ', i);
//   // console.log('i =', i);
//   ++i;
// }

// // do-while Loop
// let i = 0; // i = 9 olsa da 1 kere aşağıdaki kısım çalışacaktır.
// do {
//   if (i % 2 !== 0) console.log('Odd number: ', i);
//   ++i;
// } while (i < 6);

// Infinite Loops
// while(true);
//------------------
// let i = 0;
// while (i < 6) {console.log('Hello);}

// // for-in Loop (objct ya da array elemanları kadar tekrar eden loop)
// const person = {
//   name: 'Semih',
//   age: 39,
// };

// for (let key in person) console.log(key, ':', person[key]);

// const colors = ['red', 'green', 'blue'];
// for (let index in colors) console.log(index, colors[index]);

// // for-of Loop
// const colors = ['red', 'green', 'blue'];
// for (let color of colors) console.log(color);

// // Continue, Break
// for (let i = 0; i < 11; ++i) {
//   // Get odd values
//   // if (i % 2 === 0) continue; // jump to next iteration

//   // Stop the loop
//   // if (i === 5) break;  // jump out of the loop

//   console.log(i);
// }

//-----------------------------------------------------
// // Exercise 2
// function max(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// console.log(max(7, 7));

//-----------------------------------------------------
// Exercise 3
// function isLandscape(width, height) {
//   return width > height;
// }

// const imageType = isLandscape(600, 500) ? 'horizontal' : 'vertical';
// console.log('Image Type:', imageType);

//-----------------------------------------------------
// Exercise 4
// const fizzBuzzOutput = fizzBuzz(22);
// console.log(fizzBuzzOutput);

// function fizzBuzz(input) {
//   if (typeof input !== 'number') return 'Your input is NaN';
//   //return NaN; da denilebilir. NaN'ın tipi "number"dır.

//   // if (isNaN(input)) return 'Your input is NaN'; // bu da olur

//   if (input % 15 === 0) return 'FizzBuzz';
//   // 3 ve 5, 15'in asal çarpanları olduğundan yukardaki
//   // ifade kullanılabilir. Yoksa tek tek 3 ve 5'e bölünüor mu
//   // bakmak gerekirdi.
//   else if (input % 3 === 0) return 'Fizz';
//   else if (input % 5 === 0) return 'Buzz';
//   else return `Input value(${input}) is not suitable`;
// }

//-----------------------------------------------------
// Exercise 4
// Speed Limit 70Km/h
// Every 5Km/h above get 1 point
// More than 12 points >> License suspended
// console.log(checkSpeed(90));

// // My solution
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const penaltyPointLimit = 5;
//   const licenseSuspendLimitPoints = 12;

//   if (speed <= 70) return 'Your speed is ok';

//   const aboveSpeed = speed - speedLimit;
//   if (aboveSpeed % 5 !== 0) return 'Your speed is above the limit but it is still ok';

//   const points = Math.floor(aboveSpeed / penaltyPointLimit);
//   // const points = (aboveSpeed / penaltyPointLimit);

//   if (points > licenseSuspendLimitPoints) return 'Your license suspended!';
//   return `Your speed is above the limit! Penalty Points: ${points}`;
// }

//-----------------------------------------------------
// Exercise 5
// showNumbers(10);

// function showNumbers(limit) {
//   if (isNaN(limit)) return;

//   let text;
//   for (let i = 0; i <= 10; ++i) {
//     text = i.toString();

//     if (i % 2 === 0) text += ` "EVEN"`;
//     else text += ` "ODD"`;

//     console.log(text);
//   }
// }

//-----------------------------------------------------
// Exercise 6
// const array = [0, 1, 2, 3, null, '', undefined];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let result = 0;
//   for (value of array) if (value) ++result;

//   return result;
// }

//-----------------------------------------------------
// Exercise 7
// const movie = {
//   title: 'Kuyruk Acısı',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'Mr. Semih',
// };

// showProperties(movie);

// // for (value of obj) KULLANILAMAZ! "obj not iterable" hatası alınır.
// function showProperties(obj) {
//   for (key in obj) if (typeof obj[key] === 'string') console.log(key, ': ', obj[key]);
// }

//-----------------------------------------------------
// Exercise 8
// console.log(sum(10));

// function sum(limit) {
//   let result = 0;
//   for (let i = 0; i < 11; ++i) {
//     if (i % 3 === 0 || i % 5 === 0) result += i;
//   }

//   return result;
// }

//-----------------------------------------------------
// Exercise 9
// const marks = [80, 80, 50];
// // 1-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A

// console.log(calculateGrade(marks));

// function calculteAverage(array) {
//   let average = 0;

//   for (value of array) average += value;
//   average = Math.floor(average / marks.length);

//   return average;
// }

// function calculateGrade(marks) {
//   const average = calculteAverage(marks);
//   let message = `Average is (${average}). Grade is `;

//   if (average > 89) message += 'A';
//   else if (average > 79) message += 'B';
//   else if (average > 69) message += 'C';
//   else if (average > 59) message += 'D';
//   else message += 'F';

//   return message;
// }

//-----------------------------------------------------
// Exercise 10
// showStars(5);

// function showStars(rows) {
//   if (rows === 0) return;

//   let text = '';
//   for (let row = 0; row < rows; ++row) {
//     text += '*';
//     console.log(text);
//   }
// }

//-----------------------------------------------------
// Exercise 11
console.log(showPrimes(20));

// Sadece 1 ve kendisine bölünen sayılara asal sayı
// denir. (Prime numbers)

function isPrime(number) {
  let result = true;

  for (let divider = 2; divider < number; ++divider) {
    if (number % divider === 0) {
      result = false;
      break;
    }
  }

  return result;
}

function showPrimes(limit) {
  let resultArray = [];

  for (let num = 2; num <= limit; ++num) {
    if (isPrime(num)) resultArray.push(num);
  }

  return resultArray;
}
