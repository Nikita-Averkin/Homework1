//Задание по верстке

//Задание "Переверни текст"
window.addEventListener("DOMContentLoaded",function() {
    document.getElementById("game__item-btn3").addEventListener("click", turnWorld);
});

function turnWorld() {
    let word = [];
    word = prompt("Введите слово ","");
    alert(word.split('').reverse().join(''))
}



// Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2
function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result;
    }
console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
function getRandomNumber() {
    return Math.floor(Math.random() * 10) +1;
}
console.log(getRandomNumber());

//Задание 6
function getRandomNumber(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}
console.log(getRandomNumber(10));

//Задание 7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

//Задание 8
console.log(new Date());

//Задание 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function formatDate(date) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь","Октябрь", "Ноябрь", "Декабрь"];
    
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonths();
    const dayOfWeek = days[date.getDate()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}