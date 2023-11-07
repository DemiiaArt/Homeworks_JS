class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    residents = [];

    addResident(residentNum) {
        this.residents.push(residentNum);
    };
}

class House {
    flats = [];

    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    };

    addFlat(currentFlat) {
        if(this.maxFlats > this.flats.length) {
            this.flats.push(currentFlat);
        } else {
            console.log(`Квартира не може бути додана. Перевищена максимальна кількіть квартир у будинку`);
        };
    }
}

//створюємо екземпляри класу Human
const resident1 = new Human('Kate', 'female');
const resident2 = new Human('Stas', 'male');
const resident3 = new Human('Nick', 'male');
const resident4 = new Human('Olha', 'female');
console.log(resident1, resident2, resident3, resident4);

//Створюємо екзепляри класу Flat та додаємо людей 
const flat1 = new Flat()
flat1.addResident(resident1)

const flat2 = new Flat()
flat2.addResident(resident2)
flat2.addResident(resident3)

const flat3 = new Flat()
flat3.addResident(resident4)

console.log(flat1, flat2, flat3);

// Екземпляр класу House з максимальною кількістю квартир = 2
const house1 = new House(2)
house1.addFlat(flat1)
console.log(house1);
house1.addFlat(flat2)
console.log(house1);
house1.addFlat(flat3)//ця кварира вже не вміщується і отримуємо повідомлення про це