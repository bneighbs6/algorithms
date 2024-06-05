const search = require("./binaryIndexOf"); // Importing search function

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136]; // Define elements

/**
 * @param {*} target = number we're looking for in array
 * @returns the index of target number in the array 
 */

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at i", index);

    if (element === target) {
      return 0;
    }
    if (element < target) {
      return 1;
    }
    if (element > target) {
      return -1;
    }
  };
}

console.log(search(forNumber(274), elements)); // Calling search (binaryIndexOf) function. forNumber() is the compare fx parameter passed from binaryIndexOf(compare, elements).
