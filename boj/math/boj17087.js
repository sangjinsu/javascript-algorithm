const { stdin, stdout, exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const gcd = (a, b) => {
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

const inputs = []
rl.on('line', (input) => {
  inputs.push(
    input
      .trim()
      .split(' ')
      .map((x) => +x)
  )
}).on('close', () => {
  const [n, s] = inputs[0]
  const nums = inputs[1].map((x) => Math.abs(x - s))

  if (n === 1) {
    console.log(nums[0])
  } else {
    result = gcd(nums[0], nums[1])

    numsLen = nums.length
    for (let i = 2; i < numsLen; i++) {
      result = gcd(result, nums[i])
    }

    console.log(result)
  }

  exit()
})
