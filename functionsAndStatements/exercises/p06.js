function passwordValidation(password) {
    function isValidLength(text) {
        return text.length >= 6 && text.length <= 10;
    }
    function isAlphaNumeric(text) {
        let regex = /^[a-zA-Z0-9]+$/gm;
        let isCorrect = regex.test(text);
        return isCorrect;
    }
    function chechDigits(text) {
        let digitsCounter = 0;
        for (const digit of text) {
            if (!isNaN(digit)) {
                digitsCounter++
            }
        }
        return digitsCounter >= 2;
    }
    let validLength=isValidLength(password);
    let validNumeric=isAlphaNumeric(password);
    let validDigitsCount=chechDigits(password);
    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validNumeric) {
        console.log("Password must consist only of letters and digits");
    }
    if (!validDigitsCount) {
        console.log("Password must have at least 2 digits");
    }
    if(validLength&&validNumeric&&validDigitsCount){
        console.log('Password is valid');
    }

}
passwordValidation('Pa$s$s');