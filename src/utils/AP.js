const apArr = [];
const randomFirstNum = Math.floor(Math.random() * 10);
// console.log(randomFirstNum);
apArr.push(randomFirstNum);
const randomApNum = Math.floor(Math.random() * 10);
// console.log(randomApNum);
const randomArrlength = Math.floor(Math.random() * (9 - 5 + 1) + 5);
for (let i = 0; i <= randomArrlength; i++) {
  apArr.push(apArr[i] + randomApNum);
}
// console.log(apArr);
const randomArrNum = Math.floor(Math.random() * apArr.length);
// console.log(randomArrNum);
const rightAnswer = apArr[randomArrNum];
// console.log(rightAnswer);
apArr[randomArrNum] = "..";
// console.log(apArr);
const lastAP = apArr.join(" ");

export { lastAP, rightAnswer };
