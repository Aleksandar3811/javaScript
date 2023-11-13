function reverseArr(num,inputArr){
    let fixedArr=inputArr.slice(0,num);
    let reversed=fixedArr.reverse();
    console.log(reversed.join(" "));
}
reverseArr(3, [10, 20, 30, 40, 50]);