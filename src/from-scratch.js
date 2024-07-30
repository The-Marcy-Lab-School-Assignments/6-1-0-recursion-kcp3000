// Recursion Problem Set: Coding Exercises

const { on } = require("nodemon");

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
  // let total = 0
  if (arr.length === 0) return 0

  return arr[0] + sum(arr.slice(1))//.slice is reducing the arr every iteration until there's no numbers left inside the array
}

/* 
another way of doing sum
const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total
  sum(arr, total += arr[idx], idx++)
}

*/

// Reverse string using recursive approach
const reverse = (str, reversedStr = '') => {
  if (str.length === 0) return reversedStr

  return str.slice(-1) + reverse(str.slice(0, -1))
};


// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n < 2) return n
  let oneBack = 1, twoBack = 0
  let cur = 0

  for (let i = 2; i <= n; i++) {
    cur = oneBack + twoBack
    twoBack = oneBack
    oneBack = cur
  }

  return cur
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n < 2) return n
  return fibRec(n - 1) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1

  const mid = Math.floor((start + end) / 2)
  if (arr[mid] === target) return mid

  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end)
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)
};

/*
const binarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] > target) end = mid - 1
        if (arr[mid] < target) start = mid + 1
    }
    return -1
};
*/

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
