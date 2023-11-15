function factorialDivision(num1, num2) {
    function calculateFactorial(number) {
        let factorial = 1;

        for (let index = 1; index <= number; index++) {
            factorial *= index;
        };
        return factorial;
    }
    let result1 = calculateFactorial(num1);
    let result2 = calculateFactorial(num2);
    let division = result1 / result2;
    console.log(division.toFixed(2));
}
factorialDivision(5, 2);