function print(stringArr,num){
    let newArr=[];
    for (let index = 0; index < stringArr.length; index+=num) {
       newArr.push(stringArr[index]);
        
    }
    return newArr;
}
print(['5','20','31','4','20'],2);