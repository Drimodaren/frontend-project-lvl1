import NOD from './NOD.js';
import { getRandomNumber } from './getRandomNum.js';

const gcdGame = (userName) => {
  const randomNum1 = getRandomNumber(100, 1);
  const randomNum2 = getRandomNumber(100, 1);
  const nod = NOD(randomNum1, randomNum2);
  return [`Question: ${randomNum1} ${randomNum2}`, nod.toString()];
};

export default gcdGame;
