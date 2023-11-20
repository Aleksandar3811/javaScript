function wordsTracker(input) {
    let lookingWords = input.shift().split(' ');
    let counter = [];
    for (let index = 0; index < lookingWords.length; index++) {
        let count = 0;
        let currentWord = lookingWords[index];
        for (let i = 0; i < input.length; i++) {
            if (currentWord === input[i]) {
                count++;
            }

        }
        counter[currentWord] = count;

    }
     let entries =Object.entries(counter).sort((a,b) => b[1] - a[1]);
   for (let [key,value] of entries) {
    console.log(`${key} - ${value}`);
   }

}

wordsTracker([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence']);