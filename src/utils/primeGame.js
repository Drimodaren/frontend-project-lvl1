import readlineSync from 'readline-sync';

const primeGame = (userName) => {
  const primeArrNum = [2, 3, 5, 7, 11];
  let rightAnswer = '';
  const randomPrimeNum = Math.floor(Math.random() * 10);
  if (primeArrNum.includes(randomPrimeNum) === true) {
    rightAnswer = 'yes';
  } else if (primeArrNum.includes(randomPrimeNum) === false) {
    rightAnswer = 'no';
  }
  console.log(`Question: ${randomPrimeNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (rightAnswer === answer) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
};
export default primeGame;
