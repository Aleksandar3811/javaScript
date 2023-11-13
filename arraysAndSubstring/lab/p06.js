function split(input,searchedWord){
    let wordsArr=input.split(' ');
    let count=0;
   for (let word of wordsArr) {
    if(searchedWord===word){
        count++;
    }
   }
   console.log(count);
}

split('This is a word and it also is a sentence','is');