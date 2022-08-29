#!/usr/bin/env node
import readlineSync from "readline-sync";
import { sayHello } from "../src/utils/sayHello.js";
import { lastAP, rightAnswer } from "../src/utils/AP.js";

const userName = sayHello();
console.log("What is the result of the expression?");
let count = 0;
while (count !== 3) {
  console.log(`Question: ${lastAP}`);
  const answer = readlineSync.question("Your answer: ");
  if (rightAnswer === eval(answer)) {
    console.log("Correct!");
    count++;
  } else if (rightAnswer !== answer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`
    );
    count = 0;
  }
}
console.log(`Congratulations, ${userName}!`);
