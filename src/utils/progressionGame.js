import readlineSync from 'readline-sync';
import AP from './AP.js';

const progressionGame = (userName) => {
  const AP1 = AP();
  return [`Question: ${AP1.lastAP}`, AP1.rightAnswer.toString()];
};

export default progressionGame;
