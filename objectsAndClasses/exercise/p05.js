function inventory(input) {
    let objects = [];
    for (let index = 0; index <input.length; index++) {
        let line = input[index].split(' / ');
        let name = line[0];
        let level = Number(line[1]);
        let items = line[2].split(', ');
        objects.push({ name, level, items });
    }
   objects.sort((a,b)=> a.level-b.level);
   for (let element of objects) {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items.join(', ')}`);
   }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);