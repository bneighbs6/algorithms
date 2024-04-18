// This file is here to show me where I made the mistake with the partition fx in the lesson.
// The top fx has the mistake
// Bottom fx is the correct implementation

// The mistake I had made was I need to wrap (line 20) elements[partitionIndex], elements[upperIndex] in their own array like so:
// [elements[partitionIndex], elements[upperIndex]]

function partition(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex];
    let partitionIndex = lowerIndex;
  
    for (let i = lowerIndex; i < upperIndex; i++) {
      const comparison = compare(pivotValue, elements[i]);
  
      if (comparison > 0) {
        if (partitionIndex !== i) {
          elements[i],
            (elements[partitionIndex] = [elements[partitionIndex], elements[i]]);
        }
        partitionIndex++;
      }
    }
    elements[partitionIndex],
      elements[upperIndex] = [elements[upperIndex], elements[partitionIndex]];
    return partitionIndex;
  }

/*   function partition(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex];
    let partitionIndex = lowerIndex;
  
    for (let index = lowerIndex; index < upperIndex; index++) {
      const comparison = compare(pivotValue, elements[index]);
  
      if (comparison > 0) {
        if (partitionIndex !== index) {
          [elements[index], elements[partitionIndex]] = [
            elements[partitionIndex],
            elements[index],
          ];
        }
        partitionIndex++;
      }
    }
  
    [elements[partitionIndex], elements[upperIndex]] = [
      elements[upperIndex],
      elements[partitionIndex],
    ];
    return partitionIndex;
  } */
  