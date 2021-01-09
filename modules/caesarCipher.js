const encipherMessage = (message, key, letterRegex, alphabet, initialCharCode) => {
  let newCharCode;
  let newMessage = '';
  for(let i = 0; i < message.length; i++) {
    if(letterRegex.test(message.charAt(i))) {
      newCharCode = (message.charCodeAt(i) - initialCharCode + key) % alphabet + initialCharCode;
      newMessage += String.fromCharCode(newCharCode);
    } else {
      newMessage += message.charAt(i);
    }
  }
  return newMessage;
};

const decipherMessage = (message, key, letterRegex, alphabet, initialCharCode) => {
  let newCharCode;
  let newMessage = '';
  for(let i = 0; i < message.length; i++) {
    if(letterRegex.test(message.charAt(i))) {
      newCharCode = (message.charCodeAt(i) - initialCharCode + alphabet - key) % alphabet + initialCharCode;
      newMessage += String.fromCharCode(newCharCode);
    } else {
      newMessage += message.charAt(i);
    }
  }
  return newMessage;
};

const caesarCipher = (message, key, instruction) => {

  const messageRegex = /[^a-z .,!?'"]/;
  const letterRegex = /[a-z]/;
  const alphabet = 26;
  const initialCharCode = 97;

  if (typeof message === typeof '' && 
    typeof key === typeof 1 && 
    (instruction === 'encipher' || instruction === 'decipher')) {

    const lowerMessage = message.toLowerCase();
    
    if (!messageRegex.test(lowerMessage)) {
      const processedMessage = 
      instruction === 'encipher' ? 
      encipherMessage(lowerMessage, key, letterRegex, alphabet, initialCharCode) : 
      decipherMessage(lowerMessage, key, letterRegex, alphabet, initialCharCode);

      return processedMessage;
    }
    throw new Error(`pass a message with letters and one or more of this punctuation marks: , . ? ! ' "`);
  }
  throw new Error('pass a string type message, a number type key and encipher or decipher instruction!');
};
  
module.exports = caesarCipher;
