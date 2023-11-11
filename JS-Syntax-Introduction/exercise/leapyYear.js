function leapYear(year){
   let date=new Date(year,2,1);
   date.setDate(date.getDate()-1);
   if(date.getDate()===29){
    console.log("yes");
   }
   else{
    console.log("no");
   }
}
leapYear(1984);
leapYear(2003);
leapYear(2000);
leapYear(1900);