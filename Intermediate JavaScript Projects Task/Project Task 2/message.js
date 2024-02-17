// import {
//   countCharacter,
//   capitalizeFirstCharacterOfWords,
//   reverseWord,
//   reverseAllWords,
//   replaceFirstOccurrence,
//   replaceAllOccurrences,
//   encode,
//   palindrome,
//   pigLatin,
// } from './messageMixer';

const {
  countCharacter,
  capitalizeFirstCharacterOfWords,
  reverseWord,
  reverseAllWords,
  replaceFirstOccurrence,
  replaceAllOccurrences,
  encode,
  palindrome,
  pigLatin,
} = require('./messageMixer');

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurrence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("hello"));
  console.log(pigLatin("Hello world", "-"));
}

displayMessage();
