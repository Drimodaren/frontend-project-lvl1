#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/utils/sayHello.js';
import AP from '../src/utils/AP.js';

const userName = sayHello();
console.log('What number is missing in the progression?');
let count = 0;
while (count !== 3) {
  const AP1 = AP();
  console.log(`Question: ${AP1.lastAP}`);
  const answer = readlineSync.question('Your answer: ');
  if (AP1.rightAnswer === Number(answer)) {
    console.log('Correct!');
    count += 1;
  } else if (AP1.rightAnswer !== answer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${AP1.rightAnswer}'. Let's try again, ${userName}!`,
    );
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}
