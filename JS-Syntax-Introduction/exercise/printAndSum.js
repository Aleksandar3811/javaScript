function printAndSum(num1, num2) {
    let sum = 0;
    let numArr = [];
    for (let index = num1; index <= num2; index++) {
        sum += index;
        numArr.push(index);

    }
    console.log(numArr.join(" "));
    console.log(`Sum: ${sum}`)
}
printAndSum(0, 26);