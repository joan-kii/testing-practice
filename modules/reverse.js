const reverse = (str) => {
    if (typeof str === typeof '') {
      const arrayStr = str.trim().split('');
      return arrayStr.reverse().join('');
    }
    throw new Error('pass a string!');
  };
  
  module.exports = reverse;