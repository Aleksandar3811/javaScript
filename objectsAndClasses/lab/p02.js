function cityInfo(city){
    let entries=Object.entries(city);
    for (let [key,value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
cityInfo({name: "Sofia", area: 492,population: 1238438, coutry:"Bulgaria", postCode: "1000" });