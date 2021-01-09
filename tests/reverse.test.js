const reverse =require('../modules/reverse');

test('takes a string and returns that string reversed', () => {
  expect(reverse('joankii')).toBe('iiknaoj');
})

test('takes a string with spaces and returns that string reversed', () => {
  expect(reverse('The Odin Project')).toBe('tcejorP nidO ehT');
})

test('takes a string with whitespaces and returns that string trimmed and reversed', () => {
  expect(reverse('     trim that     ')).toBe('taht mirt');
})

test('throw an error if the parameter is not a string', () => {
  expect(() => reverse(123)).toThrow('pass a string!');
})