// Calculator library used by CLI and tests
// Supported operations:
// - add(a, b): returns a + b
// - subtract(a, b): returns a - b
// - multiply(a, b): returns a * b
// - divide(a, b): returns a / b, throws on division by zero

function ensureNumber (n, name = 'value') {
  if (typeof n === 'number' && Number.isFinite(n)) return n
  const parsed = Number(n)
  if (!Number.isFinite(parsed)) throw new TypeError(`${name} must be a finite number`)
  return parsed
}

function add (a, b) {
  const x = ensureNumber(a, 'a')
  const y = ensureNumber(b, 'b')
  return x + y
}

function subtract (a, b) {
  const x = ensureNumber(a, 'a')
  const y = ensureNumber(b, 'b')
  return x - y
}

function multiply (a, b) {
  const x = ensureNumber(a, 'a')
  const y = ensureNumber(b, 'b')
  return x * y
}

function divide (a, b) {
  const x = ensureNumber(a, 'a')
  const y = ensureNumber(b, 'b')
  if (y === 0) throw new RangeError('division by zero')
  return x / y
}

function modulo (a, b) {
  const x = ensureNumber(a, 'a')
  const y = ensureNumber(b, 'b')
  if (y === 0) throw new RangeError('modulo by zero')
  return x % y
}

function power (base, exponent) {
  const b = ensureNumber(base, 'base')
  const e = ensureNumber(exponent, 'exponent')
  return Math.pow(b, e)
}

function squareRoot (n) {
  const v = ensureNumber(n, 'n')
  if (v < 0) throw new RangeError('square root of negative number')
  return Math.sqrt(v)
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot }
