/**
 * this module written by Udacity for a modules practice exercise
 */

// Remove the 3rd item from an array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
  };
  
  // Concatenate two arrays
  const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
  };
  
module.exports = {cut3, concat};