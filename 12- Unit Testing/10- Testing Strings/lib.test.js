const { greet } = require('./lib');

describe('greet', () => {
  it('should return the greeting message', () => {
    const  result = greet('ruizhi')
    expect(result).toMatch(/ruizhi/);
  });
});
