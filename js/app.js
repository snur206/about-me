'use strict';

let answer = 0;

console.log('hello world');

function questionOne() {

  let visitorName = prompt('What is your name?');

  alert(`Hello and welcome to my page ${visitorName}! I Would like for you to answer five yes or no questions.`);

  let questionOneGuess = prompt('Do I drink or enjoy coffee?').toUpperCase();

  if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
    console.log('Incorrect. Even though I am from the city known about coffee.');
    alert('Incorrect. Even though I am from the city known about coffee.');
  } else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
    console.log('Correct.');
    alert('Correct.');
    answer = answer + 1;
  }
}
questionOne();

function questionTwo(){


  let questionTwoGuess = prompt('Do you play sports?').toUpperCase();

  if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y') {
    alert('That is great! I do also.');
    console.log('That is great! I do also.');
  } else if (questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
    console.log('That if fine. Everyone has their own interest.');
    alert('That if fine. Everyone has their own interest.');
    answer = answer + 2;
  }
}
questionTwo();

function questionThree(){

  let questionThreeGuess = prompt('Can I speak more than one language?').toUpperCase();

  if(questionThreeGuess === 'YES' || questionThreeGuess === 'Y') {
    console.log('Correct!');
    alert('Correct! I can speak English and Somali.');
  } else if (questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
    console.log('Incorrect, I can speak English and Somali.');
    alert('Incorrect, I can speak English and Somali.');
    answer = answer + 3;
  }
} 
questionThree();

function questionFour() {

  let questionFourGuess = prompt('Have I had to get any surgeries??').toUpperCase();

  if(questionFourGuess === 'YES' || questionFourGuess === 'Y') {
    console.log('Nope. Thankfully the only injury I sustained was a knee sprain.');
    alert('Nope. Thankfully the only injury I sustained was a knee sprain.');
  } else if (questionFourGuess === 'NO' || questionFourGuess === 'N') {
    console.log('Yes. Lucky enough to not need any type of surgery.');
    alert('Yes. Lucky enough to not need any type of surgery.');
    answer = answer + 4
  }
}
questionFour();

function questionFive(){


  let questionFiveGuess = prompt('Do I have any tattoos?').toUpperCase();

  if(questionFiveGuess === 'YES' || questionFiveGuess === 'Y') {
    console.log('Wrong. It is against my religion.');
    alert('Wrong. It is against my religion.');
  } else if (questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
    console.log('Correct!');
    alert('Correct!');
    answer = answer + 5;
  }
  alert(`Thank you for answering these, ${visitorName}. Thank you for coming to my webpage!!`);
}

questionFive();

function questionSix(){

  let favNum = 7;
  let guesses = 4;
  while (guesses > 0) {
    let questionSix = prompt('What is my favorite number? You have four guesses.');
    if (questionSix === favNum) {
      alert('You got it!');
      score++;
      break;
    } else if (questionSix > favNum) {
      alert(`Too high!. ${guesses - 1} guesses remaining.`);
    } else if (questionSix < favNum) {
      alert(`Too low!. ${guesses - 1} guesses remaining.`);
    }
    guesses--;
  }
  if (guesses === 0) {
    alert(`Ran out of guesses the number was ${favNum}.`);
  }
  answer = answer + 6;
}
questionSix();

function questionSeven(){

  let seattle = ['microsoft', 'boeing', 'amazon', 'starbucks', 'nordstorm', 'costco' ]
  let guesses = 6;
  let isCorrect = false;
  while (guesses > 0) {
    let guess = prompt('What are known companies founded in Seattle?').toLowerCase();
    for (let i = 0; i < seattle.length; i++){
      if (seattle[i] === guess) {
        console.log('These are company founded in Seattle!');
        alert('These are company founded in Seattle!');
        isCorrect = true;
        i = 6;
      }
    }
    if (isCorrect) {
    answer = answer + 7; 
      break;
    }   
    guesses --;
  }
  console.log('Correct answers were ' + seattle);
  alert('Correct answers were ' + seattle);

  
}
questionSeven();

console.log("You got " + answer + " out of 7 questions right!");

  alert("You got " + answer + " out of 7 questions right!");

  alert(`Thank you for visiting, ${visitorName} and thanks for playing!`)