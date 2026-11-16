const {
        getAirCondition,
        getTemperature,
        setActiveAirCondition,
        increaseTemperature,
        decreaseTemperature
    } = require('../src/AirCondition');

test('test that the air condition is off ', () => {
    expect(getAirCondition()).toBe("off");
});

test('test that you can actually turn the air condition on', () => {
    expect(getAirCondition()).toBe("off");

    setActiveAirCondition('on');

    expect(getAirCondition()).toBe('on')
});

test('test that the AC is at it default temperature', () => {
    expect(getTemperature()).toBe(24)
});

test('test that AC temperature can be increased', () => {
    expect(getTemperature()).toBe(24);
    
    increaseTemperature(4);

    expect(getTemperature()).toBe(28);
});

test('test that AC  temperature can be increased', () => {
    expect(getTemperature()).toBe(28);

    decreaseTemperature(10);

    expect(getTemperature()).toBe(18);
});

test('test that AC temperature can not be increased more than 30 degree celcius', () => {
    expect(getTemperature()).toBe(18);

    increaseTemperature(6);
    expect(getTemperature()).toBe(24);

    increaseTemperature(9);
    expect(getTemperature()).toBe(24);
});

test('test that AC temperature can not be decreased more than 16 degree celcius', () => {
    expect(getTemperature()).toBe(24);

    decreaseTemperature(4);
    expect(getTemperature()).toBe(20);

    decreaseTemperature(6);
    expect(getTemperature()).toBe(20);
});

