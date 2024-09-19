let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let b = 7;
while (b <= 25) {
    console.log(b);
    b++;
}

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400.
}
for (let key in obj) {
    console.log (key, obj[key]);
}

let n = 1000; f = 0;
do { n = n / 2; f++ }
while (n > 50) {
 console.log ("num:" + n + "Iterators:" +f);
}

let dayFriday = 6;
let allDay = 31;
for (let i = dayFriday; i < allDay; i +=7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
