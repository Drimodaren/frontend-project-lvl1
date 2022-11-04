import readlineSync from 'readline-sync';

const calcGame = (userName) => {
  const arrUnar = ['+', '-', '*'];
  let randomItem = '';

  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  for (let i = 0; i < arrUnar.length; i += 1) {
    const item = arrUnar[Math.floor(Math.random() * 3)];
    randomItem = item;
  }
  const oper = randomItem;
  let rightAnswer = 0;
  console.log(`Question: ${randomNum1} ${oper} ${randomNum2}`);
  if (oper === '+') {
    rightAnswer = randomNum1 + randomNum2;
  } else if (oper === '-') {
    rightAnswer = randomNum1 - randomNum2;
  } else if (oper === '*') {
    rightAnswer = randomNum1 * randomNum2;
  }
  const answer = readlineSync.question('Your answer: ');
  if (rightAnswer === Number(answer)) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
};

export default calcGame;
