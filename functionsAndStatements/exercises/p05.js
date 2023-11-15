function palindrome(arr) {
    function isPalindrome(num){
        let numAsString=num+'';
        let reversedNum=numAsString.split('').reverse().join('');
        return numAsString===reversedNum;
    }
    for (let index = 0; index < arr.length; index++) {
        let currentElement=arr[index];
        console.log(isPalindrome(currentElement));


    };
}
palindrome([123,323,421,121]); 