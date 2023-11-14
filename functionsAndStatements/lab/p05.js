function calculate(num1, num2, operator) {
    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };

console.log(operations[operator](num1,num2));
}
calculate(5,5,'multiply');
calculate(40,8,'divide');
