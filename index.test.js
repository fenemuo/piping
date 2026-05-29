const generateRandomNumber = require('./index')

test('should generate a number between 0 and 99', () => {
  const number = generateRandomNumber()

  expect(number).toBeGreaterThanOrEqual(0)
  expect(number).toBeLessThan(100)
});