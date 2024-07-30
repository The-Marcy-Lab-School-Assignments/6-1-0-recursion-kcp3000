const arr1 = [1, 2, 3, 4, 5]


const sum = (arr) => {
  let total = 0
  if (arr.length === 0) {
    return 'what'
  }
  arr.forEach((num) => {
    total += num
    // sum(num)
    return total
  })
}

console.log(sum(arr1))