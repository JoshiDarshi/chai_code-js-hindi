const ranger = ["red","pink","blue"]
const heros = ["superman","batman","shaktiman"]
//  ranger.push(heros)//push existing array me hi ek aur array include krr raha hai [ 'red', 'pink', 'blue', [ 'superman', 'batman', 'shaktiman' ] ]
// console.log(ranger);
// //concat method
// const a1 =ranger.concat(heros) //concat method 2 arrays ko concat krrke ek naya array banayega  [
// //     'red',
//     'pink',
//     'blue',
//     [ 'superman', 'batman', 'shaktiman' ],
//     'superman',
//     'batman',
//     'shaktiman'
//   ]
// console.log(a1);

//issi task or efficient or new way me krne ka tarika hai spread operator dono array ko ek naye variable me spread krr diya spread operator(...)ne

const a2 = [...ranger,...heros]
console.log(a2);

//flat method hame aisi situation me use krrenge jab inner array ka concept ho mtlb ek array ander dursara array ho
let arr1 = [1,2,[3,4],5,6,[7,8,[9,10]]]
console.log(arr1);
let arr2 = arr1.flat(Infinity)
console.log(arr2);
//isarray check krrta hai kya array hai
console.log(Array.isArray("darshi"));
//from ek array create krr dega
console.log(Array.from("darshi"));
//varibales ko bhi hum array me convert krr sakte hai
let m1 =110
let m2 = 202
let m3 = 90
console.log(Array.of(m1,m2,m3));
