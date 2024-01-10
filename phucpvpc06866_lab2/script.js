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

// bài 5
function generateTableHeader(headerTitles){
    if(!headerTitles || headerTitles.lenght === 0){
        return "";
    }
    const headerHtml = headerTitles.map((title) => `<th>${title}</th>`)
    return `<thead><tr>${headerHtml}</tr></thead>`;
}

function generateTableRowStudents(data){
    return `<tr>
        <td>${data.id}</td>
        <td><img src="${data.avatar}"></td>
        <td>${data.name}</td>
        <td>${data.createdAt}</td>
    </tr>`;
}

function generateTable(headers, data){
    if(!headers || !data || headers.lenght === 0 || data.lenght === 0){
        return "";
    }
    let html = ``;

    let headerRow = generateTableHeader(headers);
    data.forEach(element => {
        html += generateTableRowStudents(element);
    });
    return `<table>${headerRow} <tbody>${html}</tbody></table>`
}

let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/";

fetch(API_URL+'students')
.then(function (response){
    response.json().then(function(data){
    console.log(data);
       let headers = [
        'ID',
        'Ảnh đại diện',
        'Họ và tên',
        'Ngày tạo'
       ]
       let app = document.getElementById('app');
       app.innerHTML = generateTable(headers, data);
    })
})
.catch(function (response){
    console.log("Error: \n" +response);
})

