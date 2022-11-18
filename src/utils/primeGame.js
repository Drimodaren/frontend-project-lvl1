import getRandomNumber from './getRandomNum.js';
import getPrime from './getPrime.js';

const primeGame = () => {
  const randomPrimeNum = getRandomNumber(100, 2);
  const rightAnswer = getPrime(randomPrimeNum);

  return [`Question: ${randomPrimeNum}`, rightAnswer];
};
export default primeGame;
