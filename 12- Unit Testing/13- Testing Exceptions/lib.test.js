const { registerUser } = require('./lib');

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    const args = [null, undefined, NaN, 0, false, ''];
    args.forEach((arg) => expect(() => registerUser(arg)).toThrow());
  });

  it('should return a user object if valid username is passed', () => {
    const result = registerUser('ruizhi');
    expect(result).toMatchObject({ username: 'ruizhi' });
    expect(result.id).toBeGreaterThan(0);
  });
});
