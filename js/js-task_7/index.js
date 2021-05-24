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
        console.log('Ваше действие: ' + this.operation);
        console.log('Ваши числа: ' + this.a + ' и ' + this.b);
        console.log('Ответ: ' + this.result);
    }
};

let calc = new Calculator();
calc.get();

  