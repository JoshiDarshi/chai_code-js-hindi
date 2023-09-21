//singleton agar constructor se object banega toh hamesha singleton object banega

//object literals
const mySym = Symbol("key1")//symbol declaration
const obj1 = {
    name : "darshi",
    [mySym] : "mykey1",//using symbol as key value
    age : 22,
    city : "Ujjain",
    email : "abc@gmail.com",
    islogin : false,
    "full name" : "darshi joshi" //agar hum yaha key string mtlb double quotes me dete hai toh hum use .(dot) se access nhi krr sakte
} 
console.log(obj1);
console.log(obj1.email);//hum is tarah se particular koi bhi object kii property ko uski key ke through uski value access krr sakte hai
console.log(obj1["city"]);//iss tarike se bhi hum value ko access krr sakte hai but hame key as a string hii deni padegi because internally key hamesha string hii hoti hai js me
console.log(obj1["full name"]);//hamne space dii hai key name me or string me diya hai toh ham square notation se hi usse access krr sakte hai
console.log(obj1[mySym]);//accessing symbol

//update the value of object
obj1.email = "123@gmail.com"//we can update value using . operator and key name
console.log(obj1);
//freeze property if we want that no one can update object property
// Object.freeze(obj1)//freeze property object pe apply hoti hai or uske parameter me hame object ka naam dena hota hai
obj1.name = "chotu"
console.log(obj1); 
//passing function as value in object
obj1.greetings = function () {
    console.log("Hello js users");
}
console.log(obj1.greetings());
obj1.greetings2 = function (){
    console.log(`Hello JS User ${this.name}`);
}
console.log(obj1.greetings2());