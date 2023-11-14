function cooking(numAsString, op1, op2, op3, op4, op5) {
    let operationObj = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80
    }
    let num = Number(numAsString);
    num = operationObj[op1](num);
    console.log(num);
    num = operationObj[op2](num);
    console.log(num);
    num = operationObj[op3](num);
    console.log(num);
    num = operationObj[op4](num);
    console.log(num);
    num = operationObj[op5](num);
    console.log(num);
  
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');