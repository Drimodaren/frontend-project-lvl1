import readlineSync from 'readline-sync';
import sayHello from './sayHello.js';

const coreGame = (rule, getAnswerByStep) => {
  const userName = sayHello();
  console.log(rule);

  let count = 0;
  while (count !== 3) {
    const touple = getAnswerByStep(userName);
    console.log(touple[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === touple[1]) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${touple[1]}'. Let's try again, ${userName}!`,
      );
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default coreGame;
