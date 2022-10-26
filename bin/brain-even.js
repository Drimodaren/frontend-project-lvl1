#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sayHello } from '../src/utils/sayHello.js';

const userName = sayHello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count !== 3) {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    count += 1;
  } else if (randomNum % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${
        answer === 'yes' ? 'no' : 'yes'
      }'. Let's try again, ${userName}!`
    );
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}
