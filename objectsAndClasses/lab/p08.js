function cat(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ');
        cats.push(new Cat(catData[0], catData[1]));
    }
    for (let cat of cats) {
        cat.meow();
    }
}
cat(['Mellow 2', 'Tom 5']);