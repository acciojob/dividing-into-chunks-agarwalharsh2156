const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      currentChunk.push(arr[i]);
      currentSum += arr[i];
    } else {
      // Push current chunk and start a new one
      result.push(currentChunk);
      currentChunk = [arr[i]];
      currentSum = arr[i];
    }
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
