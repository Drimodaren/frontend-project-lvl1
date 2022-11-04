import readlineSync from 'readline-sync';

const evenGame = (userName) => {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0 && answer === 'yes') {
    return 'Correct!';
  }
  if (randomNum % 2 !== 0 && answer === 'no') {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${
    answer === 'yes' ? 'no' : 'yes'
  }'. Let's try again, ${userName}!`;
};

export default evenGame;
