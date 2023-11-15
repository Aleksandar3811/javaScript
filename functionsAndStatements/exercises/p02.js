function addAndSubstract(num1,num2,num3){
    function sum(one,two){
        return one+two;
    }
    function substract(first,second){
        return first-second;
    }
    let firstNum=sum(num1,num2);
    let result=substract(firstNum,num3);
    // let sum=(one,two)=>{
    //     return one+two;
    // }
    // let result=(first,second)=>{
    //     return first-second;
    // }
    console.log(result);
}
addAndSubstract(23,6,10);