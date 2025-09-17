const lib = require('./lib');
const db = require('./db');
const mail = require('./mail');

describe('notifyCustomer', () => {
  it('should send an email to the customer', () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    expect(mail.send).toHaveBeenCalled();
    expect(mail.send).toHaveBeenCalledWith( 'a', 'Your order was placed successfully.');
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
