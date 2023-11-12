function check( num){
    let numAsString=String(num);
    let sum=0;
    let isEqual=false;
    for (let index = 1; index < numAsString.length; index++) {
        let currentNum=numAsString.charAt(index-1);
        sum+=parseInt(numAsString.charAt(index));
        if(currentNum===numAsString.charAt(index)){
            isEqual=true;
        }
        else{
            isEqual=false;
        }
        
        
    }
    sum+=parseInt(numAsString.charAt(0));
    console.log(isEqual);
    console.log(sum);
}
check(2222222);
check(1234);