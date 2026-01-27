function factorial(n) {
    let result = 1;
    if (n < 0) {
        return undefined;
    } else if (n === 0) {
        return 1;
    }
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
module.exports = factorial;

function fibonacci(n) {
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
module.exports = fibonacci;
