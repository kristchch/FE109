//1 задание
let arr = [1, 2, 3, 4, 5];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]); // выведет 1, 2, 3, 4, 5
}

//2 задание
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > -10 && arr[i] < -3)
        document.write(arr[i] + '</br>');
}


//3 задание
/*for*/
arr = [],
result = 0,
k = 0;

for ( let i = 23; i <= 57; i++) {
    arr.push(i);
    for (; k < i; k++) {

    }
    result += k;
}

console.log(arr);
console.log(`Сумма элементов массива ${result}`)

/*while*/
arr = [],
i = 23;

while (i <= 57) {

    arr.push(i);
    i++;
}
console.log(arr);


//4 задание
arr = ['10', '20', '30', '50', '235', '3000'];

for (i = 0; i < arr.length; i++) {

    if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5')
        console.log(arr[i]);
}


//5 задание
let arrDay = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (i = 0; i < arrDay.length; i++) {
    if (i < 5) {
        document.write(arrDay[i] + '<br />');
    } else {
        document.write('<b> ' + arrDay[i] + '</b>' + '<br />');
    }
}


//6 задание
let arrTop = [1, 22, 5, 877, 1];

arrTop.push('lalalala');

console.log(arrTop[arrTop.length - 1]);


//7 задание
let i = 0,
    arr = [],
    num;

while (true) {
    num = prompt('Введите число для задания 7');
    if (isNaN(num)) {
        alert ('Вы ввели не число');
    } else if (num == 0) {
        break;
    } else {
        arr[i] = +num;
        i++;
        console.log(num);
    }
}