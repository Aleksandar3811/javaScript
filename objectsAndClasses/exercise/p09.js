function makeADictionary(inputJsn) {
  const input = JSON.parse(inputJsn)
  let dictionary = [];
  for (let index = 0; index < inputJsn.length; index++) {
    let [word, description] = inputJsn[index].split(':');
    if (!dictionary.includes(word)) {
      dictionary.push({ word, description })
    } else {
      dictionary[word] = description;
    }
  }
  Object.entries(dictionary).sort();
  for (let [key, value] of dictionary) {
    console.log(` Term: ${key} => Definition:  ${value}`);
  }
}
makeADictionary([

  '{"Cup":"A small bowl-shaped container for drinking from,typically having a handle"}',

  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',

  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',

  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',

  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '

]);