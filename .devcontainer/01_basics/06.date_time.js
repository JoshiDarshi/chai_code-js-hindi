//date
const date = new Date()
console.log(date);//complicated output
console.log(date.toString());//it is better than previous
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());
let createdate = new Date(2023,0,23,5,3)
let createdate2 = new Date("2023-01-14")
let createdate3 = new Date("01-14-2023")
console.log(createdate.toLocaleString());
console.log(createdate2.toDateString());
console.log(createdate3.toLocaleString());
//time operations
let time = Date.now()
console.log(time);
let newdate = new Date();
console.log(newdate.getDate());
console.log(newdate.getDay());