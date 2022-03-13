/**
 * this module written by Udacity for a modules practice exercise
 */

// Find the largest number in an array
const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if (x > largest) {
        largest = x;
      }
    });
    return largest;
  };
  
  // Add numbers in an array
  const sum = (arr) => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total;
  };
  
module.exports = {lgNum, sum};