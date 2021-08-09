const { stdin, stdout, exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const gcd = (m, n) => {
  while (n !== 0) {
    ;[m, n] = [n, m % n]
  }
  return m
}

const makeCombinations = (nums) => {
  let combinations = []
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      combinations.push([nums[i], nums[j]])
    }
  }

  return combinations
}

let input = []
rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const n = input[0]
  for (let i = 1; i <= n; i++) {
    const nums = input[i]
      .trim()
      .split(' ')
      .slice(1)
      .map((num) => parseInt(num))
    const combinations = makeCombinations(nums.sort((a, b) => a - b))
    let total = 0
    combinations.forEach((combination) => {
      total += gcd(combination[1], combination[0])
    })
    console.log(total)
  }

  exit()
})
