const fs = require('fs')
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((x) => parseInt(x))

function countDivisor(n, divisor) {
  let cnt = 0
  while (n != 0) {
    n = parseInt(n / divisor)
    cnt += n
  }
  return cnt
}

const n = input[0]
const m = input[1]

const five = countDivisor(n, 5) - countDivisor(m, 5) - countDivisor(n - m, 5)
const two = countDivisor(n, 2) - countDivisor(m, 2) - countDivisor(n - m, 2)
const result = Math.min(five, two)
console.log(result)
