// // function declaration
// function greet(){
//     console.log('hello there');
// }

// // function expression
// const speak = function(){
//     console.log('Good day')
// };

// // calling
// greet();

// speak();

// // arguments and parameters

// const speak = function(name = 'Muhaj', time = 'Night'){
//     console.log(`Good ${time} ${name} ~`)
// };

// speak();
// speak('Fuad', 'Morning');

// returning values

// const speak = function(name = 'Muhaj', time = 'Night'){
//     console.log(`Good ${time} ${name} ~`)
// };

// const calcArea = function(radius){
//     let area = 3.142 * radius**2;
//     return area;
// };

// const area = calcArea(5);
// console.log(area);

// regular function

// const calcArea = function(radius){
//     return 3.142 * radius**2;
// };

// // arrow function
// const calcArea = (radius) => {
//     return 3.142 * radius**2;
// };

const calcArea = (radius) => 3.142 * radius**2;

const area = calcArea(5);
console.log(`the area is, ${area}`);

