function rotate(arr,num){
    for (let index = 0; index <num; index++) {
       let firstElement=arr.shift();
       arr.push(firstElement);
        
    }
    console.log(arr.join(' '));
}
rotate([51, 47, 32, 61, 21], 2);