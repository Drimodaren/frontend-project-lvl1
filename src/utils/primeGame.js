import { getRandomNumber } from './getRandomNum.js';

const primeGame = (userName) => {
  const primeArrNum = [2, 3, 5, 7, 11];
  let rightAnswer = '';
  const randomPrimeNum = getRandomNumber(10);
  if (primeArrNum.includes(randomPrimeNum) === true) {
    rightAnswer = 'yes';
  } else if (primeArrNum.includes(randomPrimeNum) === false) {
    rightAnswer = 'no';
  }
  return [`Question: ${randomPrimeNum}`, rightAnswer];
};
export default primeGame;
