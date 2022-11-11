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

// arguments and parameters

const speak = function(name = 'Muhaj', time = 'Night'){
    console.log(`Good ${time} ${name} ~`)
};

speak();
speak('Fuad', 'Morning');