const capitalize =require('../modules/capitalize');

test('takes a word and returns that word with the first character capitalized', () => {
  expect(capitalize('joankii')).toBe('Joankii');
})

test('takes a phrase and returns that phrase with the first character capitalized', () => {
  expect(capitalize('the Odin Project')).toBe('The Odin Project');
})

test('takes a phrase and returns that phrase with the first character capitalized and remove blanks', () => {
  expect(capitalize('     trim that     ')).toBe('Trim that');
})

test('throw an error if the parameter is not a string', () => {
  expect(() => capitalize(123)).toThrow('pass a string!');
})