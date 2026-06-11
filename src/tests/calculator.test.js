const { add, subtract, multiply, divide } = require('../lib/calculator')

describe('Calculator operations', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('subtracts 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6)
  })

  test('multiplies 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90)
  })

  test('divides 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4)
  })

  test('supports numeric strings and floats', () => {
    expect(add('1.5', '2.25')).toBeCloseTo(3.75)
    expect(multiply('2', 3.5)).toBeCloseTo(7)
  })

  test('throws on division by zero', () => {
    expect(() => divide(1, 0)).toThrow(/division by zero/)
  })

  test('throws on non-numeric input', () => {
    expect(() => add('foo', 2)).toThrow(/must be a finite number/)
    expect(() => subtract(1, 'bar')).toThrow(/must be a finite number/)
  })
})
