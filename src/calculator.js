#!/usr/bin/env node

// Simple Node.js CLI Calculator (wrapper)
// Supported operations delegated to src/lib/calculator.js
// - add, subtract, multiply, divide, modulo, power, squareRoot

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('./lib/calculator')

function printUsage () {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>')
  console.error('Or for unary operations: node src/calculator.js sqrt <num>')
  console.error('Operations: add|+  subtract|-  multiply|*|x  divide|/  mod|%  pow|^  sqrt')
}

const argv = process.argv.slice(2)
if (argv.length < 2 || argv.length > 3) {
  printUsage()
  process.exit(1)
}

let [op, aRaw, bRaw] = argv
op = op.toLowerCase()

let result
try {
  switch (op) {
    case 'add':
    case '+':
      result = add(aRaw, bRaw)
      break
    case 'subtract':
    case '-':
      result = subtract(aRaw, bRaw)
      break
    case 'multiply':
    case '*':
    case 'x':
      result = multiply(aRaw, bRaw)
      break
    case 'divide':
    case '/':
    case '÷':
      result = divide(aRaw, bRaw)
      break
    case 'mod':
    case '%':
      result = modulo(aRaw, bRaw)
      break
    case 'pow':
    case '^':
      result = power(aRaw, bRaw)
      break
    case 'sqrt':
    case 'sqr':
      // unary operation expects a single operand
      result = squareRoot(aRaw)
      break
    default:
      console.error('Error: unknown operation:', op)
      printUsage()
      process.exit(1)
  }
} catch (err) {
  if (err instanceof RangeError) {
    console.error('Error:', err.message)
    process.exit(2)
  }
  console.error('Error:', err.message || String(err))
  process.exit(1)
}

console.log(result)
process.exit(0)
