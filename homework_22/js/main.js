
class Hamburger {
    constructor (size, stuffing) {
        switch (size) {
            case 'SIZE_SMALL': this.size = {price: 50, calories: 20};
                break;
            case 'SIZE_BIG': this.size = {price: 100, calories: 40};
                break;
            default: console.log('Choose size of you hamburger');
        };

        switch (stuffing) {
            case 'STUFFING_CHEESE': this.stuffing = {price: 10, calories: 20};
                break;
            case 'STUFFING_SALAD': this.stuffing = {price: 20, calories: 5};
                break;
            case 'STUFFING_POTATO': this.stuffing = {price: 15, calories: 10};
                break;
            default: console.log('Choose stuffing');
        };

        this.topping = {price: 0, calories: 0};
    };

    addTopping(topping) {
        switch (topping) {
            case 'TOPPING_MAYO': this.topping.price += 20;
                this.topping.calories += 5;
                break;
            case 'TOPPING_SAUCE': this.topping.price += 15;
                this.topping.calories += 0;
                break;
            default: console.log('You don`t add any topping');
        }
    }

    calculate () {
        let totalCalories = this.size.calories + this.stuffing.calories + this.topping.calories;
        return totalCalories;
    }

    calculatePrice () {
        let totalPrice = this.size.price + this.stuffing.price + this.topping.price;
        return totalPrice;
    }
}

const hamb1 = new Hamburger ('SIZE_SMALL', 'STUFFING_CHEESE')
hamb1.addTopping('TOPPING_MAYO')
hamb1.addTopping('TOPPING_SAUCE')
console.log(hamb1);
console.log(`Calories: ${hamb1.calculate()} kkal`);
console.log(`Price:  ${hamb1.calculatePrice()} tugrykiv`);
hamb1.addTopping('TOPPING_SAUCE');
console.log(`Price:  ${hamb1.calculatePrice()} tugrykiv`);
