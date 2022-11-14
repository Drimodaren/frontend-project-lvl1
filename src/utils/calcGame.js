import getRandomNumber from './getRandomNum.js';

const calcGame = () => {
  const arrUnar = ['+', '-', '*'];
  let randomItem = '';

  const randomNum1 = getRandomNumber(10);
  const randomNum2 = getRandomNumber(10);
  for (let i = 0; i < arrUnar.length; i += 1) {
    const item = arrUnar[getRandomNumber(3)];
    randomItem = item;
  }
  const oper = randomItem;
  let rightAnswer = 0;
  if (oper === '+') {
    rightAnswer = randomNum1 + randomNum2;
  } else if (oper === '-') {
    rightAnswer = randomNum1 - randomNum2;
  } else if (oper === '*') {
    rightAnswer = randomNum1 * randomNum2;
  }
  return [`Question: ${randomNum1} ${oper} ${randomNum2}`, rightAnswer.toString()];
};

export default calcGame;
