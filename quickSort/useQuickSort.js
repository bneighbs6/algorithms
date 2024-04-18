const sort = require('./quickSort');

function compare(left, right) {
    console.log("compare", left, right);
    return left - right;
}
// Sort Career Home Runs in first 5 years of Mike Trout. 
console.log(sort(compare, [5, 30, 27, 36, 41]));