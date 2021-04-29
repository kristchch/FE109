function basicOp(operation, value1, value2){
    if (operation == '+') return value1 + value2;
    if (operation == '-') return value1 - value2;
    if (operation == '*') return value1 * value2;
    if (operation == '/') return value1 / value2;  
}

function bonusTime(salary, bonus) {
    if (bonus == true) return ('£' + salary * 10);
    if (bonus == false) return ('£' + salary);
}

function getGrade (s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3;
    if (x >= 90 && x <= 100) return 'A';
    if (x >= 80 && x <= 90) return 'B';
    if (x >= 70 && x <= 80) return 'C';
    if (x >= 60 && x <= 70) return 'D';
    if (x >= 0 && x <= 60) return 'F';
}
