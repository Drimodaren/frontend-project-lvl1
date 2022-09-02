#!/usr/bin/env node
import readlineSync from "readline-sync";
import { sayHello } from "../src/utils/sayHello.js";

const userName = sayHello();
console.log("What is the result of the expression?");
let count = 0;
while (count !== 3) {
  const apArr = [];
  const randomFirstNum = Math.floor(Math.random() * 10);
  apArr.push(randomFirstNum);
  const randomApNum = Math.floor(Math.random() * 10);
  const randomArrlength = Math.floor(Math.random() * (9 - 5 + 1) + 5);
  for (let i = 0; i <= randomArrlength; i++) {
    apArr.push(apArr[i] + randomApNum);
  }
  const randomArrNum = Math.floor(Math.random() * apArr.length);
  const rightAnswer = apArr[randomArrNum];
  apArr[randomArrNum] = "..";
  const lastAP = apArr.join(" ");
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
