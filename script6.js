// Задание по вёрстке

window.addEventListener("DOMContentLoaded",function() {
    document.getElementById("game__item-btn2").addEventListener("click", rand);
});

let a = +prompt('Сколько примеров вы хотите решить?');
function rand(max){
    return Math.floor(Math.random() * Math.floor(max));
    
}

let max = 20;
let b = rand(max);
let c = rand(max);
 
for (i = 0; i < a; i++) {
    if (b < 5 && c < 3) {
        let sum = b + c;
        let d = +prompt("Дайте правильный ответ:" + b + "+" + c + "=");
    } else if (b >= 5 && b < 10 && c >= 3 && c < 6) {
        let sum = b - c;
        let d = +prompt("Дайте правильный ответ:" + b + "-" + c + "=");
    } else if (b >= 10 && b < 15 && c >= 6 && c < 10) {
        let sum = b * c;
        let d = +prompt("Дайте правильный ответ:" + b + "*" + c + "=");
    } else if (b >= 15 && b < 20 && c >= 2 && c < 5) {
        let sum = b / c;
        let d = +prompt("Дайте правильный ответ:" + b + "/" + c + "=");
    }
 
    if (sum === d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Верный ответ - " + sum + "!");
    }
}

  

// Задание 1

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === 10) {
//         break;
//     }
// 
// console.log(arr[i]);
// }

// Задание 2

// const arr = [1, 3, 5, 10, 20];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log(i);
//         break;
//     }
// 
// }

// Задание 3
// 
// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// Задание 4

// const arr = [];
// 
// for (let i = 0; i < 3; i++) {
//     const arr2 = [];
//     for (let i = 0; i < 3; i++) {
//         arr2.push(1);
//     }
//     arr.push(arr2);
// }
// console.log(arr);

// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.splice(5);
// console.log(arr);

// Задание 7

// const arr = [9, 8, 7, 6, 5];
// const userNumber = +prompt('Введите число');
// if (arr.includes(userNumber)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

// Задание 8

// let str = 'abcdef';
// str = str.split('');
// console.log(str);
// str.reverse();
// str = str.join('');
// console.log(str);


// Задание 9 

// const arr = [[1, 2, 3],[4, 5, 6]];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(...arr[i]);
// }
// console.log(arr2);

// Задание 10

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1]) {
//         console.log(arr[i] + arr[i + 1]);
//     }   
// }

// Задание 11

// function square(arr) {
//     return arr.map(item => item ** 2);
// }
// console.log(square([1, 2, 3]));

// Задание 12 

// function getLength(arr) {
//     return arr.map(item => item.length);
// }
// console.log(getLength(['hello', 'world']));

// Задание 13

// function negativeNumber(array) {
//     array.filter(item < 0 => item);
// }
// console.log(negativeNumber([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));

// Задание 14
// 
// function randomNumb() {
//     return Math.floor(Math.random() * 10);
//     
// }
// const arr = [];
// 
// for (let i = 0; i < 10; i++) {
//         arr.push(randomNumb());
// }
// console.log(arr);
// 
// const evenArr = [];
// for (let i = 0; i < array.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }
// console.log(evenArr);

// Задание 15

// function randomNumb() {
//     return Math.floor(Math.random() * 10);
//     
// }
// const arr = [];
// 
// for (let i = 0; i < 10; i++) {
//         arr.push(randomNumb());
// }
// console.log(arr);
// console.log(arr.reduce((a, b) => a + b) / arr.length);

