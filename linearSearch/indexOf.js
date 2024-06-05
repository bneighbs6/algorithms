// indexOf will find first matching element in an array

function indexOf(isMatch, elements) {
  // Verifying elements is an array
  if (Array.isArray(elements)) {
    // Loop thru
    for (let index = 0, length = elements.length; index < length; index++) {
      // Conditional Statement
      // if isMatch()(callback fx)....
      if (isMatch(elements[index], index, elements)) {
        return index;
      }
    }
  }
  // Return -1 if no element matches
  return -1;
}

module.exports = indexOf;
