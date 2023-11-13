function calculate(input){
    let odd=0;
    let even=0;
    for (let element of input) {
        if(element%2==0){
            even+=element;
        }
        else{
            odd+=element;
        }
    }
    console.log(Math.abs(odd-even));
}
calculate([1,2,3,4,5,6]);