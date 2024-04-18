/* function factorial(number) {
    console.log("Forward phase", number);

// Base Case
if (number <= 1) {
    console.log("base case", number);
    return 1; 
}

// Recursive case
const numberMinusOneFactorial = factorial(number - 1);

console.log("Backward phase", number, "*", numberMinusOneFactorial);
return number * numberMinusOneFactorial;
} */

function factorial(number) {
    // Base case
    if (number <= 1) {
      return 1;
    }
  
    // Penultimate means second to the last in a series.
    let penultimate = 1;
    let total = 0;
  
    // Calculate the factorial from 1 to `number`
    for (let ultimate = 1; ultimate <= number; ultimate++) {
      console.log(ultimate, "*", penultimate);
      total = ultimate * penultimate;
      penultimate = total;
    }
    return total;
  }

console.log(factorial(50000));