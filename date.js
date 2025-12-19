let date1 = new Date();
date1 = new Date("2002-12-19");
// month is 0 indexed so 0 - jan , 1-feb,11-dec and last three arguments represent time
date1 = new Date(2002,11,19,11,23,0);
date1 = new Date(2002,11,19);
console.log(date1.getDate());
console.log(date1.getMinutes());
console.log(date1.getFullYear());
date1.setFullYear(2003);
date1.setDate(7);
console.log(date1);
console.log(date1.getUTCDate());
console.log(typeof(date1));
console.log(date1.toISOString());
console.log(date1.toUTCString());
const date2 = new Date();
date2.setFullYear(2020);
console.log(date2);

const date3 = new Date(10000000);
console.log(date3);

const date6 = new Date("2025 JAN 12");
console.log(date6);
console.log(date6.toLocaleDateString());
console.log(date6.toDateString());

 console.log(Date.parse("25 dec 1990"));
 let date7 = new Date(662063400000);
 console.log(date7.toDateString())
 console.log(typeof(date7))
