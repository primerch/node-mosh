const { applyDiscount } = require('./lib');
let { getCustomerSync } = require('./db');

describe('applyDiscount', () => {
  it('shoudl apply 10% discount if customer has more than 10 points', () => {
    getCustomerSync = (customerId) => {
      console.log('Fake reading customer..');
      return { id: customerId, point: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
