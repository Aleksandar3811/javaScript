function check(word,text){
    let textArr=text.toLowerCase().split(' ');
    let expected='';
    for (let w of  textArr) {
        if(w===word){
           return w;
        }
        else{
            expected=`${word} not found!`;
        }
    }
    console.log(expected);
}
check('javascript',

'JavaScript is the best programming language')