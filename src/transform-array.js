function findControlSequence(source, sequences) { // finds control sequence in array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < sequences.length; j++) {
      if (source[i] === sequences[j]) {
        return sequences[j];
      }
    }
  }
  return false;
}

function processArray(arr, controls) { // processes array recursively
  if (!findControlSequence(arr, controls)) { // base case
    return arr;
  }
  const controlSequence = findControlSequence(arr, controls); // current control sequence initialization
  const controlSequenceIndex = arr.indexOf(controlSequence);
  const arrLeft = arr.slice(0, controlSequenceIndex); // part of an array without control sequences
  const arrRight = arr.slice(controlSequenceIndex + 1, arr.length);

  // Control sequence behavior rules 
  if (controlSequence === controls[0] && arrRight.length !== 0) {
    arrRight.shift();
  } else if (controlSequence === controls[1] && arrLeft.length !== 0) {
    arrLeft.pop();
  } else if (controlSequence === controls[2] && arrRight.length !== 0) {
    arrRight.unshift(arrRight[0]);
  } else if (controlSequence === controls[3] && arrLeft.length !== 0) {
    arrLeft.push(arrLeft[arrLeft.length - 1]);
  }

  return arrLeft.concat(processArray(arrRight, controls)); // recursive case
}

module.exports = function transform(arr) {
  const controls = [ // control sequences initialization
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  if (Array.isArray(arr)) { // input validation
    if (arr.length === 0 ||
        arr.length === 1 ||
        findControlSequence(arr, controls) === false) {
        return arr;
    }
  } else {
    throw new Error('Not an array');
  }
  return processArray(arr, controls);
};
