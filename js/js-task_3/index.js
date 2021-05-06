//1 задание
let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}

i = 38;

while (i >= 8) {
    console.log(i);
    i--;
}


//2 задание
i = 89;

while (i >= 11) {
    document.write(i + '</br>');
    i--;
}


//3 задание
a = 100;
let sum = 0;

for (i = 0; i <= a; i++) {

    sum = 0;

    for (let j = 0; j <= i; j++) {
        sum += j;
    }
}

console.log('Сумма ' + ' = ' + sum);


//4 задание
a = 5;
sum = 0;

for (i = 0; i <= a; i++) {

    sum = 0;

    for (j = 0; j <= i; j++) {
        sum += j;

    }
    console.log('Сумма ' + i + ' = ' + sum);
}


//5 задание
for (i = 8; i <= 56; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
}


//6 задание
a = 10;
sum = 0;

for (i = 2; i <= a; i++) {

    sum = 0;

    for (j = 1; j <= a; j++) {
        sum = i * j;
        console.log(i + ' * ' + j + ' = ' + sum);
    }
}


//7 задание
let n = 1000,
    num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log('Итераций' + num);
console.log('Остаток' + n);


//8 задание
num,
sum = 0,
i = 0;

while (true) {
    num = +prompt('Введите число');
    if (isNaN(num)) {
        alert('Введите число!');
    } else if (num == 0) {
        break;
    } else {
        sum += num;
        i++;
    }
}

console.log('Сумма = ' + sum);
console.log('Среднее = ' + sum / i);


//9 задание
let arrNum = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arrStr = arrNum.split(' ');
let max = arrStr[0],
    min = arrStr[0];

for (i = 0; i < arrStr.length; i++) {
    if (arrStr[i] > max) {
        max = arrStr[i]
    }
    if (arrStr[i] < min) {
        min = arrStr[i]
    }
}

console.log(`Максимальное ${max}, Минимальное ${min}`);


//10 задание
n = prompt('Введите число');
sum = 0;

for (let digit of n) {
    sum += +digit;
}

console.log(`Цифр в числе = ${n.length}`);
console.log(`По числам = ` + ('' + n).split('').join(' '));
console.log(`Обратный порядок = ` + ('' + n).split('').reverse().join(''));
console.log(`Сумма числа = ${sum}`);
 