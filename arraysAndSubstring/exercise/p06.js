function find(sentence) {
    let regex = /#[A-z,a-z]+/gm;
    let matches = sentence.match(regex);
    for (let word of matches) {
        word = word.replace('#', '');
        console.log(word);
    }
}
find('Nowadays everyone uses # to tag a #special word in #socialMedia');