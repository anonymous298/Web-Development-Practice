// const square = (arr) => {
//     let square_arr = [];
//     for (let i of arr) {
//         square_arr.push(i ** 2);
//     }

//     return square_arr;
// }

// function myFunc(arr, func) {
//     return func(arr);
// }

// result = myFunc([1,2,3,4,5,6,7,8,9,10], square);
// console.log(result);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((val) => {
//     console.log(val ** 2);
// })

// console.log(arr);

// ForEach method
// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((val) => {
//     console.log(val ** 2);
// })

// map method
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let new_arr = arr.map((val) => {
//     return val ** 2;
// })

// console.log(arr);
// console.log(new_arr);

// //filter method
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let new_arr = arr.filter((val) => {
//     if (val % 2 === 0) {
//         return true;
//     }

//     else {
//         return false;
//     }
// });

// let new_arr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(new_arr);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let result = arr.reduce((res, curr_val) => {
//     return res + curr_val;
// })

// console.log(`The average of the list ${arr} is ${result / arr.length}`);

// Practice

// let marks = [29, 30, 48, 20, 50, 63, 29, 69, 20, 12, 32, 53, 23, 53, 63, 23];

// let filtered_marks = marks.filter((val) => {
//     return val > 40;
// });

// console.log(filtered_marks);

// let n = 10;
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }

// console.log(arr);

// let sum_arr = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(sum_arr);

// let product_arr = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log(product_arr);