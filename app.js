// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         let comments = fetch("http://localhost:3000/comments")
//         .then((response) =>{
//             response.json().then((data) =>{
//                 resolve(data);
//             })
//         })
//         .catch((error)=>{
//             reject(error)
//         })
//         return comments;
//     })
// }
// getComments().then((data) =>{
//     console.log(data);
// });

// let getA = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("A 2s mới xuất hiện");
//     }, 2000)
// });



// let getB = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("B 5s mới xuất hiện");
//     }, 5000)
// });

// let getC = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("C 10s mới xuất hiện");
//     }, 10000)
// });
// console.log(getA.then((data) => console.log(data)));
// console.log(getB.then((data) => console.log(data)));
// console.log(getC.then((data) => console.log(data)));

