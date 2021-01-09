const checkType = (element) => {
  return typeof element === typeof 1;
};

const getAverage = (numbers) => {
  return numbers.reduce((total, value) => total += value);
};

const getMin = (numbers) => {
  return Math.min.apply(null, numbers);
};

const getMax = (numbers) => {
  return Math.max.apply(null, numbers);
};

const arrayAnalysis = (arrayNumbers) => {

  if (typeof arrayNumbers === typeof []) {
  
    if (arrayNumbers.every(checkType)) {
      const properties = {
        average: Number((getAverage(arrayNumbers) / arrayNumbers.length).toFixed(2)),
        min: getMin(arrayNumbers),
        max: getMax(arrayNumbers),
        length: arrayNumbers.length  
      };
      return properties;
    }

    throw new Error('pass an array with just numbers!');
  }
  throw new Error('pass an array with some numbers!');
};
    
module.exports = arrayAnalysis;