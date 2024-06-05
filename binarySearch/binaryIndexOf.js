function binaryIndexOf(compare, sortedElements) {
  // if array is an array
  if (Array.isArray(sortedElements)) {
    // define lowerIndex
    let lowerIndex = 0;
    // define upperIndex
    let upperIndex = sortedElements.length - 1;
    // While statement that says defines what to do while lowerIndex is less than or equal to upperIndex
    while (lowerIndex <= upperIndex) {
      // Defines the index that splits the array in half
      const index = Math.floor((upperIndex + lowerIndex) / 2);
      // Define comparison that uses compare() fx; But where is compare defined? 
      const comparison = compare(sortedElements[index], index, sortedElements);

      if (comparison > 0) {
        lowerIndex = index + 1;
      }

      if (comparison === 0) {
        return index;
      }

      if (comparison < 0) {
        upperIndex = index - 1;
      }
    }
  }
  return -1;
}

module.exports = binaryIndexOf;
