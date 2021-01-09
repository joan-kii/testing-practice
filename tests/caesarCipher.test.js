const caesarCipher =require('../modules/caesarCipher');

// Cipher

test('takes a message, a key and an instruction and returns the message ciphered', () => {
  expect(caesarCipher('hello world', 2, 'encipher')).toBe('jgnnq yqtnf');
})

test('takes a message with uppercases, a key and an instruction and returns the message enciphered case insensitive', () => {
  expect(caesarCipher('hElLo wOrLd', 2, 'encipher')).toBe('jgnnq yqtnf');
})

test('takes a message with punctuation, a key and an instruction and returns the message enciphered respecting punctuation', () => {
  expect(caesarCipher('hello, world!', 2, 'encipher')).toBe('jgnnq, yqtnf!');
})

test('takes a message, a key and an instruction and returns the message enciphered (from z to a)', () => {
  expect(caesarCipher('hello world', 5, 'encipher')).toBe('mjqqt btwqi');
})

// Decipher

test('takes a message, a key and an instruction and returns the message deciphered', () => {
  expect(caesarCipher('jgnnq yqtnf', 2, 'decipher')).toBe('hello world');
})

test('takes a message with uppercases, a key and an instruction and returns the message deciphered case insensitive', () => {
  expect(caesarCipher('jGnNq yQtNf', 2, 'decipher')).toBe('hello world');
})

test('takes a message with punctuation, a key and an instruction and returns the message deciphered respecting punctuation', () => {
  expect(caesarCipher('jgnnq, yqtnf!', 2, 'decipher')).toBe('hello, world!');
})

test('takes a message, a key and an instruction and returns the message deciphered (from z to a)', () => {
  expect(caesarCipher('mjqqt btwqi', 5, 'decipher')).toBe('hello world');
})

// Parameter Types

test('throw an error if some parameter is not the required', () => {
  expect(() => caesarCipher('hello, world!', 2, 123)).toThrow('pass a string type message, a number type key and encipher or decipher instruction!');
})

test('throw an error if some parameter is not the required', () => {
  expect(() => caesarCipher('hello, world!', '2', 'encipher')).toThrow('pass a string type message, a number type key and encipher or decipher instruction!');
})

test('throw an error if some parameter is not the required', () => {
  expect(() => caesarCipher(212, 2, 'decipher')).toThrow('pass a string type message, a number type key and encipher or decipher instruction!');
})

// Message characters

test('throw an error if some parameter is not the required', () => {
  expect(() => caesarCipher('hello&world$', 2, 'encipher')).toThrow(`pass a message with letters and one or more of this punctuation marks: , . ? ! ' "`);
})

