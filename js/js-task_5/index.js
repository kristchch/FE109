//1 задание
function num(a, b, c) {
    return (a - b) / c;
}

var result = num(17, 23, 3); //-2
console.log(result);



//2 задание
function num2(a) {
    return (Math.pow(a, 3) + ' ' + Math.pow(a, 2));
}

console.log(num2(3)); //27, 9



//3 задание
function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(19, 2)); // 2

function max(a, b) {
    if (a > b) return a;
    else return b;
}

console.log(max(19, 2)); // 19 



//4 задание
function getArr(length) {
    let arr1 = [];
    length = +prompt('Сколько нужно чисел?');
    for (var i = 1; i <= length; i++) {
        arr1.push(i);
    }
    return arr1;
}
console.log(getArr());



//5 задание
function isEven(a) {
    if (Number.isInteger(a) == true) {
        if (a % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return (a + ' - ' + 'не целое число') ;
    }
}
console.log(isEven(-10));
console.log(isEven(5));
console.log(isEven(5.2));



//6 задание
function getArray(m) {
    m = Array.from(arguments);
    var result = m.filter(isEven);
    return console.log(result);
}

getArray(1, 2, 8, 7, -10, 14, 0, 22, 23, 47);
getArray(-30, 4, 20, 17, 10, 0);



//7 задание
function createPyramide(r, symbol) {
    for (var i = 1; i <= r; i++) {
        for (var j = 1; j <= i; j++) {
            if (symbol == undefined || symbol == false) {
                document.write(i);
            } else {
                document.write(symbol);
            }
        }
        document.write('<br>');
    }
}
createPyramide(5);
createPyramide(9, '    ');
createPyramide(3, '/');



//8 задание
function printArray(array) {
    console.log(array[i]);
    i++;

    if (i < array.length) printArray(array);
}

var i = 0;

printArray([3, -47, 16, 0, 91]);



//9 задание
var hour = (new Date()).getHours();

function getHello(name) {
    name = prompt('Как вас зовут?');
    if (hour >= 0 && hour < 6) {
        return alert('Доброй ночи, ' + name);
    } else if (hour >= 6 && hour < 12) {
        return alert('Доброго утра, ' + name);
    } else if (hour >= 12 && hour < 19) {
        return alert('Доброго дня, ' + name);
    } else {
        return alert('Доброго вечера, ' + name);
    }
}

getHello();