const {
        getBalance,
        setDeposit,
        setWithdraw,
        getTransactionPin,
        setTransactionPin,
        transactionPinNotSetErrorMessage,
        changeTransactionPin,resetAccount
    } = require('../src/BankAccount');

describe('BankTransactionPin', () => {

test('test that it throws an error when pin is not set', () => {
    expect(() => transactionPinNotSetErrorMessage()).toThrow('Transaction pin not set yet');
});

test('test that transaction pin is zero', () => {
    expect(getTransactionPin()).toBe(0);
});

test('test that transaction pin has been set', () => {
    expect(getTransactionPin()).toBe(0);

    setTransactionPin(2008);

    expect(getTransactionPin()).toBe(2008);
});

});


describe('BankAccount', () => {

test('test that accountBalnce is zero', () =>{ 
    expect(getBalance()).toBe(0);
});

test('test that 10k can be added to the account', () => {
    expect(getBalance()).toBe(0);

    setDeposit(10_000);

    expect(getBalance()).toBe(10_000);
});

test('test that 5k can be removed form the account', () => {
    expect(getBalance()).toBe(10_000);

    setWithdraw(5_000);

    expect(getBalance()).toBe(5_000);

});

test('test that negative amount can not be deposited', () => {
    expect(getBalance()).toBe(5_000); 

    expect(() => setDeposit(-2000)).toThrow('Negative number is not accepted')

    setDeposit(1_000);

    expect(getBalance()).toBe(6_000);
});

test('test that negative amount can not be withdrawn', () => {
    expect(getBalance()).toBe(6_000); 

    expect(() => setWithdraw(-2000)).toThrow('Negative number is not accepted')

    setWithdraw(3_000);

    expect(getBalance()).toBe(3_000);
});

test('test that the old pin can be changed', () => {
    expect(getTransactionPin()).toBe(2008);

    changeTransactionPin(2027);

    expect(getTransactionPin()).toBe(2027);
});

test('test that account can be reset', () => {
    expect(getBalance()).toBe(3_000);
    expect(getTransactionPin()).toBe(2027);

    resetAccount('reset');

    expect(getBalance()).toBe(0);
    expect(getTransactionPin()).toBe(0);

});


});