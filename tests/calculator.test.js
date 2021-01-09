const calculator =require('../modules/calculator');

test('takes two numbers and returns add, substract, divide and multiply results', () => {
  expect(calculator(4, 2)).toStrictEqual({add: 6, substract: 2, divide: 2, multiply: 8});
})

test('takes two numbers with decimals and returns add, substract, divide and multiply results rounded two decimals', () => {
  expect(calculator(6.56, 3.53)).toStrictEqual({add: 10.09, substract: 3.03, divide: 1.86, multiply: 23.16});
})

test('takes two negatives numbers and returns add, substract, divide and multiply', () => {
  expect(calculator(-6, -2)).toStrictEqual({add: -8, substract: -4, divide: 3, multiply: 12});
})

test('throw an error if the parameter is not a number', () => {
  expect(() => calculator('oops!')).toThrow('pass two numbers!');
})