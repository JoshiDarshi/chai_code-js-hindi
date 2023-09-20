let str1 = "dj"
let str2 = "&#128512";
console.log(str1);
console.log(str2);//old way
//new way through which we inject variable with string without concat them i.e. backtick ``
console.log(`Hello Miss ${str1} show me your id ${str2}`);

//in now a days backtick is used so much to write clean code with a good readability

//another way to declare string using new keyword and invoke its constructor
const str = new String("Engineer Darshi Joshi")
console.log(str);
//actually js jo string hoti hai woh object hii hota hai 
console.log(str[0]); //iske output me hume E mil raha hai because 0 is position me jo value hai uski key hai
console.log(str.__proto__);
console.log(str.length);
console.log(str.toUpperCase());//methods of string
console.log(str.charAt(2));
console.log(str.indexOf('D'));
//to extract some char from string
const nstr = str.substring(0,4)
console.log(nstr);
//for negative index extact char we use slice
const nstr2 = str.slice(-16,9)
console.log(nstr2);
//jab hume space hatani ho string se toh hum trim method use krrte hai
const nestr = "   sddsdsds   "
console.log(nestr);
console.log(nestr.trim());
//to update the char in string we use replace method
const url = "hhtps://dtechnostar.com//react20js"
console.log(url.replace('20','-'));
// to check where char is present in string or not
console.log(url.includes('dtechnostar'));
console.log(str.split('*'));