function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;
  let result = document.getElementById("result");
  let sentence = [];

  text = text.split(' ');
  if (convention === 'Camel Case') {

    sentence.push(text[0]);

    for (let index = 1; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }
    result.textContent = sentence.join('');
  
  }
  else if (convention === "Pascal Case") {
    for (let index = 0; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }
    result.textContent = sentence.join('');
  }
  else {
    result.textContent ="Error!"
  }
 
}