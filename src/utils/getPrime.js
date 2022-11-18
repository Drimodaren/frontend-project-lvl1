const getPrime = (n) => {
  let resultNum = 0;
  let rightAnswer = '';
  for (let i = 0; i < n; i += 1) {
    if (n % i === 0) resultNum += 1;
  }
  if (resultNum > 1) {
    rightAnswer = 'no';
  } else {
    rightAnswer = 'yes';
  }
  return rightAnswer;
};
export default getPrime;
