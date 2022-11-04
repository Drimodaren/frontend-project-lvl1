import sayHello from './sayHello.js';

const coreGame = (rule, getAnswerByStep) => {
  const userName = sayHello();
  console.log(rule);

  let count = 0;
  while (count !== 3) {
    const answer = getAnswerByStep(userName);
    if (answer === 'Correct!') {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(answer);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default coreGame;
