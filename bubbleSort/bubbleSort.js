function bubbleSort(compare, elements) {
    if (Array.isArray(elements)) {
      let inOrder;
  
      do {
        inOrder = true; // Assume that the array is in order
  
        for (
          let i = 0, length = elements.length - 1;
          i < length;
          i++
        ) {
          const leftElement = elements[i];
          const rightElement = elements[i + 1];
  
          if (compare(leftElement, rightElement) > 0) {
            elements[i] = rightElement;
            elements[i + 1] = leftElement;
            inOrder = false; // The array wasn't in order, so swap elements and then check it again.
          }
        }
      } while (inOrder === false);
    }
    return elements;
  }
  
  module.exports = bubbleSort;

function compare(left, right) {
    console.log("compare", left, "to", right);
    return left - right;
}

const elements = [4685, 471, 880, 808];
console.log(bubbleSort(compare, elements));