const {sum,subtract} = require('../src/Calculator');

describe('Calculator' , () => {

test('test the addition of two numbers', () =>  {
    expect(sum(2,3)).toBe(5);
});

test('test addition of two negative numbers', () => {
    expect(sum(-2,-3)).toBe(-5);
});

test('test that if one of the argument is a string it throws an error', () => {
    expect(() => sum('2',3)).toThrow('Both argument must be numbers or else');
});

test('test the subtraction of two numbers', () => {
    expect(subtract(10,4)).toBe(6);
});




});