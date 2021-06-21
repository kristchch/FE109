let date = new Date();

class User {
    constructor(name, surname, status) {
        this.name = name;
        this.surname = surname;
        this.status = status;
    }
    getFullName() {
        return alert(' Фамилия Имя: ' + this.surname + ' ' + this.name);
    }
}

class Student extends User {
    constructor(name, surname, status, year) {
        super(name, surname, status) 
        this.year = year;
    }
    getCourse() {
        return alert(' Поступил(а) в ' + this.year + ', сейчас на ' + (date.getFullYear() - this.year) + ' курсе');
    }
}

class Teacher extends User {
    constructor(name, surname, status, salary, ...items) {
        super(name, surname, status)
        this.salary = salary;
        this.items = items;
    }
    getCourse() {
        return alert('Предметы этого преподавателя: ' + this.items);
    }
}  

let maria = new Student('Мария', 'Маринина', 'студентка', '2018');
// console.log(maria);
// console.log(maria.getCourse());

let filip = new Teacher('Филипп', 'Филиппин', 'преподователь', '230$', 'Математика', 'Физика');
// console.log(filip);
// console.log(filip.getCourse());