function check(num1,num2,num3){
    const result=num1*num2*num3;
    let isPositive=true;
    if(result<0){
        isPositive=false;
    }
    console.log(isPositive?'Positive': 'Negative');
}