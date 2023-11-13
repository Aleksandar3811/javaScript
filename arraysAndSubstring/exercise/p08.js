function split( input){
    let regex=/[A-Z][a-z]*/gm;
    let inputArr=input.match(regex);
    console.log(inputArr.join(', '));
}
split('HoldTheDoor');