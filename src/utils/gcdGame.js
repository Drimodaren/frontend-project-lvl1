import readlineSync from 'readline-sync';
import NOD from './NOD.js';

const gcdGame = (userName) => {
  const randomNum1 = Math.floor(Math.random() * (100 - 1) + 100);
  const randomNum2 = Math.floor(Math.random() * (100 - 1) + 100);
  const nod = NOD(randomNum1, randomNum2);
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');
  if (nod === Number(answer)) {
    return 'Correct!';
  }

  return `'${answer}' is wrong answer ;(. Correct answer was '${nod}'. Let's try again, ${userName}!`;
};

export default gcdGame;
