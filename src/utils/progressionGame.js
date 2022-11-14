import AP from './AP.js';

const progressionGame = () => {
  const AP1 = AP();
  return [`Question: ${AP1.lastAP}`, AP1.rightAnswer.toString()];
};

export default progressionGame;
