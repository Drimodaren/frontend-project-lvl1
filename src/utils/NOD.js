export function NOD(a, b) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
      arr1.push(i);
    }
  }
  for (let i = 0; i <= b; i++) {
    if (b % i === 0) {
      arr2.push(i);
    }
  }
  const result = [];
  let result2 = [];

  for (let i = 0; i < 10; i++) {
    if (arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
    result2 = result.filter((item, index) => result.indexOf(item) === index);
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  return getMaxOfArray(result2);
}
