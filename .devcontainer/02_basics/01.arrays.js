//array
const myArr = [1,2,34,55,"darshi",true]
//another way to create array
const myArr2 = new Array("shaktiman","hero")

console.log(myArr2);
//array methods
//push method insert element in the last of exisiting array
myArr.push(11)
console.log(myArr);
//pop method is used to remove the last element of element no need to give anything in parenthesis
myArr.pop()
console.log(myArr);
//unshift method insert the value in the starting of array
myArr.unshift("joshi")
console.log(myArr);
//shift method is used to remove first element of array
myArr.shift()
console.log(myArr);
//include method is used to check whether particular element present in array or not
console.log(myArr.includes("darshi"))
//join method convert array into string
const newarr = myArr.join()
console.log(typeof newarr);
//slice and splice method both are used to remove element
//slice method range ko include nhi krrta hai
let nwar1 = myArr.slice(1,3)
console.log(myArr);//slice me elements remove nhi hote hai actual array se
console.log(nwar1);
//splice method range ko krrta hai isske sath ek difference hota hai
let nwar2 = myArr.splice(1,3)
console.log(myArr);//agar me original array ko print karungi toh woh element hi remove ho chuke honge [ 1, 'darshi', true ]
console.log(nwar2);

