let Calculator = function() {
    this.get = function() {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.operation = prompt('Возможно: +, -, *, /, корень из a, корень из b, корень из суммы');

        this.action();
    }
    this.action = function() {
        switch(this.operation) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            case 'корень из a':
                this.result = Math.sqrt(this.a) ;
            break;
            case 'корень из b':
                this.result = Math.sqrt(this.b);
            break;
            case 'корень из суммы':
                this.result = Math.sqrt(this.a + this.b);
            break;
            default: this.result = 'Такого действия нет(';
        }

        this.show();
    }
    this.show = function() {
        let res;
        if (this.result == this.a + this.b) {
            res = 'сложение';
        } else if (this.result == this.a - this.b) {
            res = 'вычитание';
        } else if (this.result == this.a * this.b) {
            res = 'умножение';
        } else if (this.result == this.a / this.b) {
            res = 'деление';
        } else if (this.result == Math.sqrt(this.a)) {
            res = 'вычисление корня из a';
        } else if (this.result == Math.sqrt(this.b)) {
            res = 'вычисление корня из b';
        } else if (this.result == Math.sqrt(this.a + this.b)) {
            res = 'вычисление корня из суммы';
        } else if (this.result == 'Такого действия нет(') {
            res = '-';
        }
        console.log('Ваше действие: ' + res);
        console.log('Ваши числа: ' + this.a + ' и ' + this.b);
        console.log('Ответ: ' + this.result);
    }
};

let calc = new Calculator();
calc.get();

  