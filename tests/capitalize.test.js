const capitalize =require('../modules/capitalize');

test('takes a string and returns that string with the first character capitalized', () => {
  expect(capitalize('joankii')).toBe('Joankii');
})