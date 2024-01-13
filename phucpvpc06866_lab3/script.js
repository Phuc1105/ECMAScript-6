// bài 1 
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(2,3));

let toCelsius = (fahrenheit) => (5/9) * (fahrenheit - 32);
console.log(toCelsius(33));

let padZeros = (num, totalLen) =>{
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros(9999,6));

let power = (base, exponent) =>{
    let result = 1;
    for (let i = 0; i < exponent; i++){
        result *= exponent;
    }
    return result;
}
console.log(power(2,2));

let greet = (who) => "hello" + who;
console.log(greet(" Phan Văn Phúc"));

// bài 2
let sumArray = (arr) =>{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
   });
     
    return sum;
}
let mang = [1, 5, 9, 10];
console.log(sumArray(mang));

// bài 3 
const Entity = (name, delay) => {
    this.name = name;
    this.delay = delay;
};

Entity.prototype.greet = () => {
    setTimeout(() => {
        console.log("Xin chào, tên tôi là", this.name);
    }, this.delay);
};

let java = new Entity('Java', 5000);
let cpp = new Entity('C++', 30);

java.greet();
cpp.greet();



//
// let minus_v1 = (a,b) => {
//     let xuly = {
//         name: a,
//         age: b
//     }
//     return xuly;
// }
// console.log(minus_v1("JavaScript 1", 1));

// let minus_v2 = (a,b) => ({name: a, age:b});
// console.log(minus_v2("JavaScript 2", 2));

// var sum = (num1, num2) => ({name: num1 , age: num2 });
// console.log(sum("JavaScript 3",3));

// let myConcat = (arr1, arr2) =>{
//     "use strict";
//     return [...arr1,...arr2];
// };
// console.log(myConcat([1],[2]));

// let dog = {
//     name: "JavaScript",
//     age: 3,
//     sua: function(name){
//         console.log("Con chó" +" "+ this.name + "Gau gau gau" +name);
//     }
// }
// console.log(dog.sua("Ông thầy tèo"));