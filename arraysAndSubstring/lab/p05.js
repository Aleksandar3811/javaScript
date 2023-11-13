function replace( input,word){
    let countRepeating=word.length;
    while(input.includes(word)){
        input=input.replace(word,'*'.repeat(countRepeating));
    }
    console.log(input);
}
replace('Find the hidden word', 'hidden');