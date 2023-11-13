function sortNum(arr) {
    let resultArr = [];
    let sortedArr = arr.sort((a, b) => a - b);
    let arrLength = arr.length;
    for (let index = 0; index < arrLength; index++) {
        if (index % 2 === 0) {
            resultArr.push(sortedArr.shift());
        }
        else {
            resultArr.push(sortedArr.pop());
        }

    }
    return resultArr;
}
sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);