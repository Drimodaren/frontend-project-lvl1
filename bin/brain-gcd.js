#!/usr/bin/env node
import readlineSync from "readline-sync";
import { sayHello } from "../src/utils/sayHello.js";
import { NOD } from "../src/utils/NOD.js";

const userName = sayHello();
console.log("What is the result of the expression?");
let count = 0;
while (count !== 3) {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const nod = NOD(randomNum1, randomNum2);
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const answer = readlineSync.question("Your answer: ");
  if (nod === eval(answer)) {
    console.log("Correct!");
    count++;
  } else if (nod !== answer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${nod}'. Let's try again, ${userName}!`
    );
    count = 0;
  }
}
console.log(`Congratulations, ${userName}!`);
