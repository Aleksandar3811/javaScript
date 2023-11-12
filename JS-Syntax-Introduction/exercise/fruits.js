function  calculate(type,grams,pricePerKg){
let gramTokg=grams/1000;
let total=gramTokg*pricePerKg;
console.log(`I need $${total.toFixed(2)} to buy ${gramTokg.toFixed(2)} kilograms ${type}.`);
}
calculate('orange',2500,1.8);