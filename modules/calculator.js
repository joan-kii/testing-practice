const calculator = (a, b) => {
  if (typeof a === typeof 1 && typeof b === typeof 1) {
    const results = {
      add: Number((a + b).toFixed(2)),
      substract: Number((a - b).toFixed(2)),
      divide: Number((a / b).toFixed(2)),
      multiply: Number((a * b).toFixed(2))
    };
    return results;
  }
  throw new Error('pass two numbers!');
};
  
module.exports = calculator;