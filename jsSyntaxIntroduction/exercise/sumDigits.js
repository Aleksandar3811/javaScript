function sum(num){
    let numAsStrinig=String(num);
    let sum=0;
    for (let index = 0; index < numAsStrinig.length; index++) {
        // let stringAsNum=Number(numAsStrinig[index]);
        let stringAsNum=Number(numAsStrinig.charAt(index));
        sum+=stringAsNum;
        
    }
    console.log(sum);
}
sum(245678);