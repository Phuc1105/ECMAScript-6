// bài 1 
const result = {
    success:["max-length", "no-and", "prefer-arrow-functions"],
    failure:["no-var", "var-on-top", "linebreak"],
    skipped:["no-axtra-semi", "no-dup-keys"]
};

let makeList = (array) =>{
    const failureItems =[];
console.log();
    array.forEach(element => {
        failureItems.push(`<li class="text-warning">${element}</li>`);
    });
    return failureItems;
};

const failuresList = makeList(result.failure);

console.log(failuresList.join("\n"));

// bài 2
const source = [1,2,3,4,5,6,7,8,9,10];

let removeFirstTwo = (list) => {
    const [a, b,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source); 
console.log("arr:", arr);
console.log("source:", source);

// bài 3
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];

console.log('arr1:', arr1);
console.log('arr2:', arr2);

// bài 4
let spreadOut = () => {
    let fragment = ['to', 'code'];
    let sentece = ['learning', ...fragment, 'is', 'fun'];
    return sentece;
};
console.log("spreadOut:",spreadOut());