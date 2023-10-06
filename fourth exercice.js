function countStringFrequency(strings) {
    return strings.reduce((frequencyObj, currentString) => {
      frequencyObj[currentString] = (frequencyObj[currentString] || 0) + 1;
      return frequencyObj;
    }, {});
  }
  
  
  const inputArray =  [
    "puzzle", "mystery", "puzzle", "clue", "mystery",
    "puzzle", "riddle", "clue", "solution", "riddle"
  ];
  const frequencyObject = countStringFrequency(inputArray);
  console.log(frequencyObject);
  