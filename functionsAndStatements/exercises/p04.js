function returnEvenAndOddsSum(number){
    let numToString=number+"";
    let oddSum=0;
    let evenSum=0;
    for (let index = 0; index < numToString.length; index++) {
        let numberFromString=Number.parseInt(numToString.charAt(index));
        if(numberFromString%2===0){
            evenSum+=numberFromString;
        }
        else{
            oddSum+=numberFromString;
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
returnEvenAndOddsSum(1000435);