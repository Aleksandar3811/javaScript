function reveal(words, sentence) {
    let wordsArr = words.split(', ');
    let sentenceArr = sentence.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        for (let j = 0; j < sentenceArr.length; j++) {
            let isTrue = sentenceArr[j].length ===wordsArr[i].length  &&
                sentenceArr[j].includes('*');
            if (isTrue) {
                sentenceArr[j] = wordsArr[i];
            }
        }

    }
    console.log(sentenceArr.join(' '));
}
reveal('great, learning', 'softuni is ***** place for ******** new programming languages')
