// bài 1 
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 3));

let toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(toCelsius(33));

let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros(9999, 6));

let power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= exponent;
    }
    return result;
}
console.log(power(2, 2));

let greet = (who) => "hello" + who;
console.log(greet(" Phan Văn Phúc"));

// bài 2
let sumArray = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}
let mang = [1, 5, 9, 10];
console.log(sumArray(mang));

// bài 3 
class Entity {
    constructor(name, delay) {
        this.name = name;
        this.delay = delay;
    }
    greet = () => {
        setTimeout(() => {
            console.log('Xin chào, tên tôi là ', this.name);
        }, this.delay);
    }
}

let java = new Entity('Java', 5000);
let cpp = new Entity('C++', 30);

java.greet();
cpp.greet();


// bài 4
let convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        return (temperature * 9 / 5) + 32;
    } else if (unit === "F") {
        return (temperature - 32) * 5 / 9;
    } else {
        console.log("Vui lòng nhập 'C' hoặc 'F' bạn nhé!!!!!");
        return "";
    }
};
let celsius = prompt("Nhập vào temperature bạn nhé");
let fahrenheit = prompt("Nhập vào fahrenheit bạn nhé")
let temperature = convertTemperature(celsius, fahrenheit);
alert(`${celsius}°C là ${temperature}°F`);