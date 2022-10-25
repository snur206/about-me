'use strict';

console.log('hello world');

let visitorName = prompt('What is your name?');

alert(`Hello and welcome to my page ${visitorName}! I Would like for you to answer five yes or no questions.`);

let questionOneGuess = prompt('Do I drink or enjoy coffee?').toUpperCase();

if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
  // console.log('Incorrect. Even though I am from the city known about our coffee.');
    alert('Incorrect. Even though I am from the city known about our coffee.');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  // console.log('Correct.');
    alert('Correct.');
}


let questionTwoGuess = prompt('Do you play sports?').toUpperCase();

if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y') {
  alert('That is great! I do also.');
  // console.log('That is great! I do also.');
} else if (questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
    // console.log('That if fine. Everyone has their own interest.');
  alert('That if fine. Everyone has their own interest.');
}


let questionThreeGuess = prompt('Can I speak more than one language?').toUpperCase();

if(questionThreeGuess === 'YES' || questionThreeGuess === 'Y') {
    // console.log('Correct!');
  alert('Correct! I can speak English and Somali.');
} else if (questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
    // console.log('Incorrect, I can speak English and Somali.');
  alert('Incorrect, I can speak English and Somali.');
}

let questionFourGuess = prompt('Have I had to get any surgeries??').toUpperCase();

if(questionFourGuess === 'YES' || questionFourGuess === 'Y') {
    // console.log('Nope. Thankfully the only injury I sustained was a knee sprain.');
  alert('Nope. Thankfully the only injury I sustained was a knee sprain.');
} else if (questionFourGuess === 'NO' || questionFourGuess === 'N') {
    // console.log('Yes. Lucky enough to not need any type of surgery.');
  alert('Yes. Lucky enough to not need any type of surgery.');
}


let questionFiveGuess = prompt('Do I have any tattoos?').toUpperCase();

if(questionFiveGuess === 'YES' || questionFiveGuess === 'Y') {
    // console.log('Wrong. It is against my religion.');
  alert('Wrong. It is against my religion.');
} else if (questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
    // console.log('Correct!');
  alert('Correct!');
}

alert(`Thank you for answering these, ${visitorName}. Thank you for coming to my webpage!!`);