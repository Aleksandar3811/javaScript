function vacation(num, type, day) {
    let total=0;
    let discount=0;
    switch (type) {
        case "Students":
            if(num>=30){
                discount=0.15;
            }
            if (day === "Friday") {
                total = 8.45;
            }
            else if (day === 'Saturday') {
                total = 9.8;
            }
            else if (day === 'Sunday') {
                total = 10.46;
            }
            break;
        case "Business":
            if(num>=100){
                discount=0.1;
            }
            if (day === 'Friday') {
                total = 10.9;
            }
            else if (day === 'Saturday') {
                total = 15.6;
            }
            else if (day === 'Sunday') {
                total = 16;
            }
            break;
        case "Regular":
            if(num>=10&&num<=20){
                discount=0.05;
            }
            if (day === 'Friday') {
                total = 15;
            }
            else if (day === 'Saturday') {
                total = 20;
            }
            else if (day === 'Sunday') {
                total = 22.5;
            }
            break;
    }
    let pricewithotDiscount=total*num;
    let totaldiscount=(total*num)*discount;
    let result=pricewithotDiscount-totaldiscount;
    console.log(`Total price: ${result.toFixed(2)}`);
}
vacation(30,"Students","Sunday");