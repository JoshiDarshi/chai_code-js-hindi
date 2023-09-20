//Primitive datatype  --> Number, Null, String ,Symbol, Boolean , Bigint , Undefined

//Reference datatype or Non Primitive datatype --> array , object , functions
//js is dynamically typed language hame usse ye nhi batana pdata ki ye int num = 100 ham directly let num = 100 likh sakte hai

//Symbol syntax
let id1 = Symbol("123")
let id2 = Symbol("123")
console.log(id1==id2);
console.log(id1===id2);

/****************Memory **********************/


//primitive type uses Stack Memory
//ex:-
let video = "youtube"
let v2 = video
v2 = "insta"
console.log(video);
console.log(v2); 

//Reference type uses Heap Memory
//ex
let obj1 = {
    name : 'abc',
    age : 200
}
let obj2 = obj1
obj2.age=20
console.log(obj2);