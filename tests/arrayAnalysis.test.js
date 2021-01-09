const arrayAnalysis =require('../modules/arrayAnalysis');

test('takes an array of numbers and returns the average, min, max and length properties', () => {
  expect(arrayAnalysis([1, 9, 12, 8, 6])).toStrictEqual({average: 7.2, min: 1, max: 12, length: 5});
})

test('takes an array of positive and negative numbers and returns the average, min, max and length properties', () => {
  expect(arrayAnalysis([1, -9, 12, 8, -6])).toStrictEqual({average: 1.2, min: -9, max: 12, length: 5});
})

test('takes an array of numbers with to decimals and returns the average, min, max and length properties', () => {
  expect(arrayAnalysis([1.35, 9.99, 12.74])).toStrictEqual({average: 8.03, min: 1.35, max: 12.74, length: 3});
})

test('throw an error if the parameter is not an array', () => {
  expect(() => arrayAnalysis(123)).toThrow('pass an array with some numbers!');
})

test('throw an error if some element is not a number', () => {
  expect(() => arrayAnalysis([12, 5, 9 , 'oops'])).toThrow('pass an array with just numbers!');
})

