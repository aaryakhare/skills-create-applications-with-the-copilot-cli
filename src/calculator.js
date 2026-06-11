#!/usr/bin/env node

// Simple Node.js CLI Calculator
// Supported operations:
// - Addition (add or +)         : a + b
// - Subtraction (subtract or -)  : a - b
// - Multiplication (multiply or * or x) : a * b
// - Division (divide or /)       : a / b
//
// Usage examples:
//   node src/calculator.js add 2 3
//   node src/calculator.js multiply 4 5
//   node src/calculator.js 4 + 5
//
// Exit codes:
//   0 = success
//   1 = usage / invalid arguments
//   2 = runtime error (e.g., division by zero)

function printUsage () {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>')
  console.error('Operations: add|+  subtract|-  multiply|*|x  divide|/')
}

function parseNumber (s) {
  const n = Number(s)
  return Number.isFinite(n) ? n : NaN
}

const argv = process.argv.slice(2)
if (argv.length !== 3) {
  printUsage()
  process.exit(1)
}

let [op, aRaw, bRaw] = argv
op = op.toLowerCase()
const a = parseNumber(aRaw)
const b = parseNumber(bRaw)
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers')
  process.exit(1)
}

let result
switch (op) {
  case 'add':
  case '+':
    result = a + b
    break
  case 'subtract':
  case '-':
    result = a - b
    break
  case 'multiply':
  case '*':
  case 'x':
    result = a * b
    break
  case 'divide':
  case '/':
  case '÷':
    if (b === 0) {
      console.error('Error: division by zero')
      process.exit(2)
    }
    result = a / b
    break
  default:
    console.error('Error: unknown operation:', op)
    printUsage()
    process.exit(1)
}

// Print numeric result to stdout
console.log(result)
process.exit(0)
