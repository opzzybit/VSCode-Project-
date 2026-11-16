const { 
        setPowerBotton,
        gearOneAccelerated,
        gearTwoAccelerated,
        gearThreeAccelerated,
        gearFourAccelerated,
        gearOneDecelerated,
        gearTwoDecelerated,
        gearThreeDecelerated,
        gearFourDecelerated,
        getPowerBotton,
        getAccelerationBotton
    } = require('../src/BikeMethod');

describe('BikePowerBotton', () => {

    test('test that the bike is off', () => {
        expect(getPowerBotton()).toBe('off');
    });

    test('test that the bike is on ', () => {
        expect(getPowerBotton()).toBe('off');

        setPowerBotton('on')

        expect(getPowerBotton()).toBe('on');
    });

});

describe('BikeGearAccelerations', () => {

    test('test that the gear accelerator is zero', () => {
        expect(getAccelerationBotton()).toBe(10);
    });

    test('test that the bike gear one can be accelerated by one', () => {
        expect(getAccelerationBotton()).toBe(10);

        gearOneAccelerated(1)
        expect(getAccelerationBotton()).toBe(11);

        expect(() => gearOneAccelerated(4)).toThrow('the acceleration number should be 1');
    });

    test('test that the bike gear one can be accelerated by two', () => {
        expect(getAccelerationBotton()).toBe(11);

        gearTwoAccelerated(2)
        expect(getAccelerationBotton()).toBe(13);

        expect(() => gearTwoAccelerated(5)).toThrow('the acceleration number should be 2');
    });

    test('test that the bike gear one can be accelerated by Three', () => {
        expect(getAccelerationBotton()).toBe(13);

        gearThreeAccelerated(3)
        expect(getAccelerationBotton()).toBe(16);

        expect(() => gearThreeAccelerated(4)).toThrow('the acceleration number should be 3');
    });

    test('test that the bike gear one can be accelerated by four', () => {
        expect(getAccelerationBotton()).toBe(16);

        gearFourAccelerated(4)
        expect(getAccelerationBotton()).toBe(20);

        expect(() => gearFourAccelerated(8)).toThrow('the acceleration number should be 4');
    });

});

describe('BikeGearDecelerations',() => {
   
    test('test that the bike gear one can be decelerated by one', () => {
        expect(getAccelerationBotton()).toBe(20);

        gearOneDecelerated(1)
        expect(getAccelerationBotton()).toBe(19);

        expect(() => gearOneDecelerated(4)).toThrow('the deceleration number should be 1');
    });

    test('test that the bike gear one can be decelerated by two', () => {
        expect(getAccelerationBotton()).toBe(19);

        gearTwoDecelerated(2)
        expect(getAccelerationBotton()).toBe(17);

        expect(() => gearTwoDecelerated(5)).toThrow('the deceleration number should be 2');
    });

    test('test that the bike gear one can be decelerated by Three', () => {
        expect(getAccelerationBotton()).toBe(17);

        gearThreeDecelerated(3)
        expect(getAccelerationBotton()).toBe(14);

        expect(() => gearThreeDecelerated(4)).toThrow('the deceleration number should be 3');
    });

    test('test that the bike gear one can be decelerated by four', () => {
        expect(getAccelerationBotton()).toBe(14);

        gearFourDecelerated(4)
        expect(getAccelerationBotton()).toBe(10);

        expect(() => gearFourDecelerated(8)).toThrow('the deceleration number should be 4');
    });
})