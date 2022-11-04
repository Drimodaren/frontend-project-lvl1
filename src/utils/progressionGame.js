import readlineSync from 'readline-sync';
import AP from './AP.js';

const progressionGame = (userName) => {
  const AP1 = AP();
  console.log(`Question: ${AP1.lastAP}`);
  const answer = readlineSync.question('Your answer: ');
  if (AP1.rightAnswer === Number(answer)) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${AP1.rightAnswer}'. Let's try again, ${userName}!`;
};

export default progressionGame;
