function oddOcurrances(input) {
    let inputArr = input.toLowerCase().split(' ');
    let finalArr = [];
    for (let index = 0; index < inputArr.length; index++) {
        let currentWord = inputArr[index];
        let count = 0;
        for (let i = 0; i < inputArr.length; i++) {
            let isEqual = currentWord === inputArr[i];
            if (isEqual) {
                count++;
            }

        }
        if (count % 2 !== 0 && !finalArr.includes(currentWord)) {
            finalArr.push(currentWord);
        }

    }
    console.log(finalArr.join(' '));
}
oddOcurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');