let password = 'пароль';
let answer = prompt("Введите пароль");
if (answer === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}


let c = 30;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 7;
let e = 1
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let b = '3';
alert(+a + +b);

let month = prompt("Впишите номер месяца");
let monthNumber = 12;
switch (month) {
    case '12':
        console.log('Зима');
        break;
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('неправильный ввод');
}

