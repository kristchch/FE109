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
    document.write(i + '<br />');
    i--;
}


//3 задание
i, sum = 0;

for (i = 0; i <= 100; i++) {
    sum += i
}

console.log(+sum);


//4 задание
sum = 0;

for (i = 1; i <= 5; i++) {
    sum += i;
    console.log(sum);
}


//5 задание
for (i = 8; i <= 56; i++) {
    if (i % 2 == 0);
    console.log(i);
}

i = 8;

while (i <= 56) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}


//6 задание
for (i = 2; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + (i * j));
    }
}


//7 задание
let n = 1000,
    num = 0;

while (true) {
    if (n >= 50) {
        n = n / 2;
        num++;
    } else {
        break;
    }
}
console.log(n, num);

//8 задание
num,
sum = 0,
i =0;
let agNum = 0;

while (true) {
    num = +prompt('Введите число для задания 8');
    if (num == 0) {
        break;
    }
    sum += num;
    i++;
    console.log(num + ' ' + sum + ' ' + i);
}
console.log('Сумма ' + sum + 'Среднее ' + sum / i);


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
let str = prompt('Введите число для задания 10');

sum = 0;
arrStr = str.split('');

for (i = 0; i < arrStr.length; i++) {
    sum += +arrStr[i];
}
console.log('Число: ' + str);
rev = arrStr.reverse().join("");
console.log('Цифр в числе : ' + arrStr.length + ' ' + 'Сумма чисел массива: ' + sum + ' ' + 'Обратный порядок: ' + rev);

