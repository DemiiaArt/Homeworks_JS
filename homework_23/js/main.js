class SuperMath {
    constructor () {
        this.x;
        this.y;
        this.z;
        this.operation;
    };

    calculete() {
        switch (this.z) {
            case '+': return `${this.x} + ${this.y} = ${this.x + this.y}`;
            case '-': return `${this.x} - ${this.y} = ${this.x - this.y}`;
            case '*': return `${this.x} * ${this.y} = ${this.x * this.y}`;
            case '/': return (this.y !== 0) ? (`${this.x} / ${this.y} = ${this.x / this.y}`) : 'Ділення на нуль неможливе';
            case '%': return `${this.x} % ${this.y} = ${this.x % this.y}`;
            default: return 'Операція не розпізнана';
        }
    };

    input() {
        let x = prompt('Введіть нові значення. Перше число:');
        isNaN(x)? console.log('Введіть числове значення для операції') : this.x = +x;

        let y = prompt('Введіть друге число:');
        isNaN(y)? console.log('Введіть числове значення для операції') : this.y = +y;

        let z = prompt('Введіть знак для операції ( + , - , * , / , % ):');
        this.znakChecking(z);
    };

    znakChecking(znakCheck) {
        switch(znakCheck) {
            case '+': 
                this.z = znakCheck, 
                this.operation = 'додати';
                break;
            case '-':
                this.z = znakCheck,
                this.operation = 'відняти';
                break;
            case '/':
                this.z = znakCheck,
                this.operation = 'поділити';
                break;
            case '*':
                this.z = znakCheck,
                this.operation = 'помножити';
                break;
            case '%':
                this.z = znakCheck,
                this.operation = 'добути модуль';
                break;
            default:
                console.log('Введіть коректний знак математичної дії');
                return;
        }
    };

    checkResult() {
        let checking = prompt(`Чи хочете ви ${this.operation} числа ${this.x} і ${ this.y}?    Yes/No`);

        switch(checking.toLowerCase()) {
            case 'yes': 
                let result = this.calculete()
                return console.log(result);
            case 'no': 
                this.input();
                this.checkResult();
                break;
            default: 
                console.log('Введіть коректне значення: yes/no');
        }
    };

    check(obj) {
        let {
            X: x,
            Y: y,
            znak: z,
        } = obj;

        this.x = x;
        this.y = y;

        this.znakChecking(z);
        this.checkResult();
    };
}

const p = new SuperMath();
let obj = {X:12, Y:3, znak: "/"}
p.check(obj)