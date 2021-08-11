const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const inputs = []
rl.on('line', (input) => {
  inputs.push(input.trim().split(' '))
}).on('close', () => {
  const [n, s] = inputs[0].map((x) => +x)
  const nums = inputs[1].map((x) => +x)

  let cnt = 0
  for (let i = 1; i < 1 << n; i++) {
    let sum = 0
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sum += nums[j]
      }
    }
    if (sum === +s) {
      cnt++
    }
  }
  console.log(cnt)
  process.exit()
})
