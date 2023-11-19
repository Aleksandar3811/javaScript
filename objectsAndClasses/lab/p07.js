function sortAddressBook(input) {
    let addressBook = {};
    for (let line of input) {
        let [name, address] = line.split(":");
        addressBook[name] = address;
    }
    addressBook = Object.entries(addressBook).sort();
    for (let key of addressBook) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
sortAddressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);