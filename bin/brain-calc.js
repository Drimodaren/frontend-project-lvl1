#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/utils/sayHello.js';

const userName = sayHello();
const arrUnar = ['+', '-', '*'];
let randomItem = '';

console.log('What is the result of the expression?');
let count = 0;
while (count !== 3) {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  for (let i = 0; i < arrUnar.length; i += 1) {
    const item = arrUnar[Math.floor(Math.random() * 3)];
    randomItem = item;
  }
  const oper = randomItem;
  let rightAnswer = 0;
  console.log(`Question: ${randomNum1} ${oper} ${randomNum2}`);
  if (oper === '+') {
    rightAnswer = randomNum1 + randomNum2;
  } else if (oper === '-') {
    rightAnswer = randomNum1 - randomNum2;
  } else if (oper === '*') {
    rightAnswer = randomNum1 * randomNum2;
  }
  const answer = readlineSync.question('Your answer: ');
  if (rightAnswer === Number(answer)) {
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
