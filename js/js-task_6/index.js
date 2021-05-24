//1 задание
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));


//2 задание
let date = '2025-12-31';

console.log(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));


//3 задание
str = 'Я учу javascript!';

console.log('Метод substring: ' + str.substring(2, 5) + ' ' + str.substring(6, 16));

console.log('Метод substr: ' + str.substr(2, 3) + ' ' + str.substr(6, 15));

console.log('Метод slice: ' + str.slice(2, 5) + ' ' + str.slice(6, 16));


//4 задание
let arr = [4, 2, 5, 19, 13, 0, 10],
sum = 0;


//5 задание
function calcNum(a, b) {
    let c = a - b;
    console.log(Math.abs(c));
}

calcNum(3, 5);
calcNum(6, 1);


//6 задание
let dateNow = new Date,
    hour = dateNow.getHours(),
    minute = dateNow.getMinutes(),
    seconds = dateNow.getSeconds(),
    day = dateNow.getDay(),
    month = dateNow.getMonth();

console.log('Изначальное время: ' + hour + ':' + minute + ':' + seconds + '  ' + day + '.' + month + '.' + dateNow.getFullYear());

function checkDate() {
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (seconds.toString().length == 1) {
        seconds = '0' + seconds;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    } 
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    console.log('Измененное время: ' + hour + ':' + minute + ':' + seconds + '  ' + day + '.' + month + '.' + dateNow.getFullYear());
} 

checkDate();


//7 задание
str = 'aa aba abba abbba abca abea';

console.log('Строка изначально: ' + str);
console.log(str.match(/ab{1,}a/gi));


//8 задание
str = '';
let regexp = /[0-9a-z]@[a-z].[a-z]{2,6}/gi;

function getEmail() {
    let email = prompt('Введите, пожалуйста, свой email');
    if (regexp.test(email) == true) {
        let a = email.search(/@/);
        for (let i = 0; i < a; i++) {
            str += email[i]; 
        }
        console.log(str);
    } else {
        console.log('Адрес электронной почты неверный');
    }
}

getEmail();


//9 задание
regexp = /\+\d{1,3}(\s|-|\(|)\d{2,3}(\s|-|\)|)\d{7}/gi;

function checkTel() {
    let tel = prompt('Введите ваш номер телефона в виде +375291234567');
    if (regexp.test(tel) == true) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

checkTel();


//10 задание
regexp = /^[^0-9]([\w]|\.|-){2,999}@[a-z]+\.[a-z]{2,11}/gi;

function checkEmail() {
    email = prompt('Введите свой email для проверки');
    if (regexp.test(email) == true) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

checkEmail();


