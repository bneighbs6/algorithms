// indexOf will find first matching element in an array

function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) { // Verifying elements is an array
      for (let index = 0, length = elements.length; index < length; index++) { // Loop thru 
        if (isMatch(elements[index], index, elements)) {
          return index;
        }
      }
    }
    return -1;
  }
  
  module.exports = indexOf;