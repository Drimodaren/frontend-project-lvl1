const prime = (n = 10) => {
  const primeArrNum = [2, 3, 5, 7, 11];
  console.log(primeArrNum.includes(7));
  let randomNum = 0;
  for (let i = 0; i < n; i++) {
    const randomPrimeNum = Math.floor(Math.random() * n);
    if (primeArrNum.includes(randomPrimeNum)) {
      randomNum = randomPrimeNum;
    }
  }
  return randomNum;
};

console.log(prime());
