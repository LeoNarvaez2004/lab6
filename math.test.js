const fact = require('./math');
const fibo = require('./math');
test('Factorial de 5 debe ser 120', () => {
    expect(fact(5)).toBe(120);
});

test('Factorial de 0 debe ser 1', () => {
    expect(fact(0)).toBe(1);
});

test('Factorial de -1 debe ser undefined', () => {
    expect(fact(-1)).toBe(undefined);
});

test('Fibonacci de 5 debe ser 5', () => {
    expect(fibo(5)).toBe(5);
});

test('Fibonacci de 0 debe ser 0', () => {
    expect(fibo(0)).toBe(0);
});

test('Fibonacci de -1 debe ser undefined', () => {
    expect(fibo(-1)).toBe(undefined);
});

