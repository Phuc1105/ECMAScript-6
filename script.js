// -------------bài 1--------------- 
let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);
// kết quả hiển thị số 1 trong hàm alert
/*Vì đối với promise đã nhận resolve(1) rồi nên resolve(2) không có tác dụng,
 vì Promise đã giải quyết với giá trị 1 từ trước đó.*/


// --------------bài 2--------------
const axios = require('axios');
// 1.
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}
// 2.
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function (url) {
            return axios.get(url);
        })
    );
    return results;
};
// đoạn code 1 sử dụng vòng lặp for of, mỗi request tiếp theo sẽ đợi cho đến khi request trước đó hoàn thành.
// đoạn code 2 sử dụng Promise.all , mỗi request sẽ chạy cùng lúc và đợi tất cả hoàn thành trước khi trả về kết quả.

// --------------bài 3-------------
const fs = require('fs').promises;
const axioss = require('axios');

async function fetchData() {
    try {
        const fileData = await fs.readFile('package.json', { encoding: 'utf8' });

        console.log('Data loaded from disk:', fileData);

        const urlResponse = await axioss.get('https://jsonplaceholder.typicode.com/todos/1');

        console.log('Data downloaded from URL:', urlResponse.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
fetchData();