class Driver {
    constructor (name, age) {
        this._name = name;
        this.age = age;
    };

    showInfo() {
        console.log(`Мене звати ${this._name}, мені ${this.age}`);
    };
}

class Car {
    constructor (label, model, year, color) {
        this.label = label;
        this.mosel = model;
        this.year = year;
        this.color = color;
        this.owner = null;
    };

    carOwner(someDriver) {
        if (someDriver.age > 17) {
            this.owner = someDriver;
        } else {
            console.log(`Власником автомобіля може стати людина, якій є 18+ років`);
        }
    };

    carInfo() {
        console.log(`Автомобіль марки ${this.label}, модель ${this.mosel}, ${this.year} року випуску, колір - ${this.color}`);
        if (this.owner === null) {
            console.log('Цей автомобіль не має власника');
        } else {
            this.owner.showInfo();
        }
    };
}

// створюємо екземпляри класу Driver
const human1 = new Driver('Tania', 25);
const human2 = new Driver('Gala', 15);
const human3 = new Driver('Tolik', 52);
console.log(human1, human2, human3);

// створюємо екземпляри класу Car
const car1 = new Car('Volkswagen', 'Passat', '2001', 'black')
const car2 = new Car('Opel', 'Astra', '1995', 'red')
const car3 = new Car('Audi', 'A6', '2019', 'white')
console.log(car1, car2, car3);


car1.carInfo()//до присвоєння власника
car1.carOwner(human1)
car1.carInfo()//після присвоєння власника

car2.carOwner(human2)//задаємо неповнолітнього власника
car2.carInfo()//власника не присвоєно

