const capitalize = (str) => {
  if (typeof str === typeof '') {
    const trimStr = str.trim();
    return trimStr.replace(trimStr[0], trimStr[0].toUpperCase());
  }
  throw new Error('pass a string!');
};

module.exports = capitalize;

