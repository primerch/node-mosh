const { fizzBuzz } = require('./exercise1');

describe('fizzBuzz', () => {
  it('should throw if input is not number', () => {
    expect(() => fizzBuzz('a')).toThrow();
    expect(() => fizzBuzz(null)).toThrow();
    expect(() => fizzBuzz(undefined)).toThrow();
    expect(() => fizzBuzz({})).toThrow();
  });

  it('should return FizzBuzz if input is both be divided by 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return Fizz if only can be divided by 3', () => {
    const result = fizzBuzz(9);
    expect(result).toBe('Fizz');
  });

  it('should return Buzz if only can be divided by 5', () => {
    const result = fizzBuzz(10);
    expect(result).toBe('Buzz');
  });

  it('should return itself if cannot be divided by either 3 or 5', () => {
    const result = fizzBuzz(8);
    expect(result).toBe(8);
  });
});
