#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/utils/sayHello.js';

const userName = sayHello();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let count = 0;
const primeArrNum = [2, 3, 5, 7, 11];
let rightAnswer = '';
while (count !== 3) {
  const randomPrimeNum = Math.floor(Math.random() * 10);
  if (primeArrNum.includes(randomPrimeNum) === true) {
    rightAnswer = 'yes';
  } else if (primeArrNum.includes(randomPrimeNum) === false) {
    rightAnswer = 'no';
  }
  console.log(`Question: ${randomPrimeNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (rightAnswer === answer) {
    console.log('Correct!');
    count += 1;
  } else if (rightAnswer !== answer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`,
    );
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}
