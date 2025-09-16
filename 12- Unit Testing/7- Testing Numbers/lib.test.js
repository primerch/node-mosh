const { absolute } = require('./lib');
test('absolute - should return a positive number if input is positive', () => {
  const result = absolute(1);
  expect(result).toBe(1);
});

test('absolute - should return a positive number if input is negative', () => {
  const value = absolute(-1);
  expect(value).toBe(1);
});

test('absolute - should return 0 if input is 0', () => {
  const value = absolute(0);
  expect(value).toBe(1);
});
