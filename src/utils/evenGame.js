import { getRandomNumber } from './getRandomNum.js';

const evenGame = (userName) => {
  const randomNum = getRandomNumber(10);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [`Question: ${randomNum}`, rightAnswer];
};

export default evenGame;
