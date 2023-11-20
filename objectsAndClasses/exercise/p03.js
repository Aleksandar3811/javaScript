function storeProvision(arr1, arr2) {
    function iterate(arr) {
        for (let index = 0; index < arr.length; index += 2) {
            let product = arr[index];
            let quantity = Number(arr[index + 1]);
            if (!stock.hasOwnProperty(product)) {
                stock[product] = quantity;

            } else {
                stock[product] += quantity;
            }

        }
    }
    const stock = {};
    iterate(arr1);
    iterate(arr2);
    for (const key in stock) {
        console.log(`${key} -> ${stock[key]}`);
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);