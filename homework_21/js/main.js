class Student {
    constructor(firstName, lastName, age, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
        this.marks = marks;
        this.attendance = new Array(25);
    };

    get age () {
        return this._age;
    };

    get averageMark () {
        return Math.floor(this.marks.reduce(((acum, mark) => acum += mark), 0) / this.marks.length);
    }

    present() {
        let emptyPlace = this.attendance.findIndex((i) => i === undefined);
    
        if (emptyPlace >= 0) {
            this.attendance[emptyPlace] = 'true';
        } else {
            console.log(`Кількість відвідувань не може перевищувати кількість занять`);
        }
    };

    absent() {
        let emptyPlace = this.attendance.findIndex((i) => i === undefined);
    
        if (emptyPlace >= 0) {
            this.attendance[emptyPlace] = 'false';
        } else {
            console.log(`Кількість пропусків не може перевищувати кількість занять`);
        }
    };

    summary() {
        let countAttend = this.attendance.filter(attend => attend === 'true').length;
        
        let averageAttend = countAttend / this.attendance.length;
        
        if (this.averageMark > 90 && averageAttend > 0.9) {
            console.log('Молодець!');
        } else if (this.averageMark > 90 || averageAttend > 0.9) {
            console.log('Добре, але можна краще');
        } else {
            console.log('Редиска!');
        }
    };
}

//Створюємо першого студента:
let student1Marks = [95, 100, 90, 100, 100, 100, 100] //його оцінки
const student1 = new Student ('Fred', 'Tomson', 25, student1Marks) //екземпляр класу Student
console.log('Вік студента:', student1.age); //маємо можливість отримати вік студента
console.log('Середня оцінка студента:', student1.averageMark); // маємо можливість отримати його середній бал
//відмічаємо його відвідуваність
student1.absent()
student1.absent()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()//Кількість відвідувань не може перевищувати кількість занять
console.log(student1);
student1.summary()//Молодець!


let student2Marks = [90, 75, 85, 60, 80, 100, 70];
const student2 = new Student ('Tania', 'Billins', 21, student2Marks);
console.log('Вік студента:', student2.age);
console.log('Середня оцінка студента:', student2.averageMark);
student2.absent()
student2.absent()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
console.log(student2);
student2.summary()//Добре, але можна краще


let student3Marks = [85, 100, 65, 60, 70, 60, 80];
const student3 = new Student ('Vlad', 'Mols', 31, student3Marks);
console.log('Вік студента:', student3.age);
console.log('Середня оцінка студента:', student3.averageMark);
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
console.log(student3);
student3.summary()//Редиска!