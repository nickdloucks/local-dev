/**
 * This file is my solution to the Udacity modules execise in the Full-Stack Javascript Developer Nanodegree.
 * Prompt: You will see two files already created for you. Your index.js file and a file called sample.js. 
 * The sample.js file contains four javascript functions to work with arrays.
 * Create a utilities folder with two separate files and distribute the functions through these 2 files.
 * Import the functions into the main index and use two different methods for calling those functions.
 * Then call the functions using arrays of your choice and log the result to the console.
 * Make sure to run your index.js file to make certain that all of your modules work.
 */


const mutate = require('./utilities/arrayMutate.js'); // import whole module as an object w/ methods
const {sum, lgNum} = require('./utilities/arrayAnalyze.js'); // destructuring

let arrA = [1, 2, 3, 4, 5, 6, 7]; // dummy data for processing
let arrB = [8, 9, 10];

let arrC = mutate.concat(arrA, arrB); // create new array combining the data above
let strArrC = arrC.toString(); // save a string version for better visibility when printing
console.log(strArrC + ' = concatenated array');

async function analyzeNo3 (arr, func){ // practice async code: use input data and a function to dynamically process
    await mutate.cut3(arr);
    return func(arr);
}
analyzeNo3(arrA, sum).then(console.log); // once data is fully processed, display in console
console.log('was "await" first?');

process.on('beforeExit', () => { // use another function from the library at the end
    console.log(lgNum(arrB));
});