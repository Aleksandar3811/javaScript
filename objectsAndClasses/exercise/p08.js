function piccolo(input) {
    let cars = [];
    for (let index = 0; index < input.length; index++) {
        let [direction, carNumber] = input[index].split(', ');
        if (direction === 'IN'&&!cars.includes(carNumber)) {
            cars.push(carNumber);
        } else if (direction === 'OUT' && cars.includes(carNumber)) {
            let index = cars.indexOf(carNumber);
            cars.splice(index, 1);
        }
    }
    if(cars.length===0){
        console.log("Parking Lot is Empty");
    }else{
        cars.sort().forEach((a)=>{
            console.log(a);
        });
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);