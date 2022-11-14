import { getRandomNumber } from './getRandomNum.js';

const AP = () => {
  const apArr = [];
  const randomFirstNum = getRandomNumber(10);
  apArr.push(randomFirstNum);
  const randomApNum = getRandomNumber(10, 1);
  const randomArrlength = getRandomNumber(9, 5);
  for (let i = 0; i <= randomArrlength; i += 1) {
    apArr.push(apArr[i] + randomApNum);
  }
  const randomArrNum = Math.floor(Math.random() * apArr.length);
  const rightAnswer = apArr[randomArrNum];
  apArr[randomArrNum] = '..';
  const lastAP = apArr.join(' ');
  return {
    lastAP,
    rightAnswer,
  };
};
export default AP;
