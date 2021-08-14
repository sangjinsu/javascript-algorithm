const { stdin, stdout, exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const makePrimes = (n) => {
  const primes = new Array(n + 1).fill(true)
  primes[0] = false
  primes[1] = false

  m = parseInt(Math.sqrt(n))
  for (let i = 2; i < m + 1; i++) {
    if (primes[i]) {
      for (let j = i + i; j < n; j += i) {
        primes[j] = false
      }
    }
  }

  return primes
}

const inputs = []
rl.on('line', (input) => {
  inputs.push(+input)
}).on('close', () => {
  testCases = inputs[0]
  for (let t = 1; t < testCases + 1; t++) {
    num = inputs[t]
    const primes = makePrimes(num)
    let cnt = 0
    for (let i = 2; i <= num / 2; i++) {
      if (primes[i] && primes[num - i]) {
        cnt++
      }
    }
    console.log(cnt)
  }
  exit()
})
