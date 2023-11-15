function prinTMatrix(number){
    function printRow(num){
        return (num.toString()+' ').repeat(num);
    }
    for (let index = 1; index <=number; index++) {
        console.log(printRow(number));
        
    }
}
prinTMatrix(3);