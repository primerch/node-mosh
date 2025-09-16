const { getProduct } = require('./lib');

describe('getProduct', () => {
  it('should return the product with given id', () => {
    const result = getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
  });
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  expect(data).toMatchObject({ one: 1 });
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toMatchObject({ one: 1 });
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toHaveProperty('one', 1);
});
