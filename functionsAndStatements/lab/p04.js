function calculateTotalPrice(product, count) {
    const drinkPrice = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };
    const price=drinkPrice[product];
    const total=price*count;
    console.log(total.toFixed(2));
}
calculateTotalPrice('water',5);