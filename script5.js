// Задание 1
// function min(a, b) {
//    if (a < b) {
//        return a;        
//    } else {
//        return b;
//    }
// }
// console.log(min(8, 4));
// console.log(min(6, 6));


// Задание 2
// const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Числе нечетное';
// console.log(isOdd(2));
// console.log(isOdd(3));


// Задание 3
// function square(number) {
// console.log(number ** 2);
// }
// const up = (n) => (n ** 2);
// square(5);
// console.log(up(5));


// Задание 3
// function age() {
//     let age = +prompt('Укажите Ваш возраст');
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert('Добро пожаловать!');
//     } else {
//         alert('Вы ввели неправильное значение');
//     }
// }
// age();


// Задание 4
// function calc(a, b) {
//     console.log(isNaN(a));
//     console.log(isNaN(b));
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются чилом';
//     } else {
//         return a * b;
//     }
// }
// console.log(calc('5', 2));


// Задание 5
// function getNumber() {
//     let number = prompt('Введите число');
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубе равняется ${Math.pow(number, 3)}`;
//     }
// }
// console.log(getNumber());


// Задание 6
// function getArea() {
//     return Math.PI * this.radius ** 2;
// }
// function getPerimeter() {
//     return Math.PI * this.radius ** 2;
// }
// 
// const circle1 = {
//     radius: 10,
//     methodgetArea: getArea,
//     methodgetPerimeter: getPerimeter,
// }
// 
// const circle2 = {
//     radius: 20,
//     methodgetArea: getArea,
//     methodgetPerimeter: getPerimeter,
// }
// 
// console.log(circle1.methodgetArea());
// console.log(circle2.methodgetArea());

// Задание по вёрстке

function guessNumber() {
    let number = +prompt('Угадай число');
    if (number < 0) {
        alert('Это совсем не то');
    } else if (number === 30) {
        alert('Ура, ты угадал');
    } else if (number >= 0 && number <= 29) {
        alert('Холодно, бери больше');
    } 
    else if (number >= 31 && number <= 100) {
        alert('Холодно, должно быть меньше');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
number();