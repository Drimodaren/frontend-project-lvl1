export const AP = () => {
  const apArr = [];
  const randomFirstNum = Math.floor(Math.random() * 10);
  apArr.push(randomFirstNum);
  const randomApNum = Math.floor(Math.random() * 10 + 1);
  const randomArrlength = Math.floor(Math.random() * (9 - 5 + 1) + 5);
  for (let i = 0; i <= randomArrlength; i++) {
    apArr.push(apArr[i] + randomApNum);
  }
  const randomArrNum = Math.floor(Math.random() * apArr.length);
  const rightAnswer = apArr[randomArrNum];
  apArr[randomArrNum] = "..";
  const lastAP = apArr.join(" ");
  return {
    lastAP,
    rightAnswer,
  };
};
