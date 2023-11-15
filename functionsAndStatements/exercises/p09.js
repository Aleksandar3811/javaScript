function createLoadingBar(num){
    if(num===100){
        console.log("100% Complete!");
    }
    else{
        let percentageCount='%'.repeat(num/10);
        let dotCount='.'.repeat(10-percentageCount.length);
          console.log(`${num}% [${percentageCount}${dotCount}]`);
        console.log("Still loading...");
    }

}
createLoadingBar(30);