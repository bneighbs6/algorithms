/**
 * 
 * @param {*} compare 
 * @param {*} elements 
 * @param {*} lowerIndex 
 * @param {*} upperIndex 
 * @returns 
 */

function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex); // Calls partition() to update the array so the first pivot is in the correct location & it returns the i of the pivot
    // Recursively calls quickSort with indexes above and below the previous pivot index
    // Recursion contiues until the base case is reach
    quickSort(compare, elements, lowerIndex, index - 1);
    quickSort(compare, elements, index + 1, upperIndex);
  }
  return elements; // If lowerIndex >= upperIndex it just returns the array
}

/**
 * 
 * @param {*} compare 
 * @param {*} elements 
 * @param {*} lowerIndex 
 * @param {*} upperIndex 
 * @returns 
 */

function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let i = lowerIndex; i < upperIndex; i++) {
    const comparison = compare(pivotValue, elements[i]);

    if (comparison > 0) {
      if (partitionIndex !== i) {
        [elements[i],
          elements[partitionIndex]] = [elements[partitionIndex], elements[i]];
      }
      partitionIndex++;
    }
  }
  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

module.exports = quickSort;