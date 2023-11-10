class Hamburger {
    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(topping) {
        this.topping.push(topping);
    }

    calculate () {
        let calories = 0;

        switch (this.size) {
            case 'SIZE_SMALL': calories += 20;
                break;
            case 'SIZE_BIG': calories += 40;
                break;
            default: 'Choose size of you hamburger'
        };

        switch (this.stuffing) {
            case 'STUFFING_CHEESE': calories += 20;
                break;
            case 'STUFFING_SALAD': calories += 5;
                break;
            case 'STUFFING_POTATO': calories += 10;
                break;
            default: 'Choose stuffing'
        };

        if (this.topping.length !== 0) {
            for(let i = 0; i < this.topping.length; i++) {
                switch(this.topping[i]) {
                    case 'TOPPING_MAYO': calories += 5;
                        break;
                    case 'TOPPING_SAUCE': calories += 0;
                        break;
                    default: 'You don`t add any topping';
                }
            }
        } 

        return calories;
    }



calculatePrice() {
        let price = 0;

        switch (this.size) {
            case 'SIZE_SMALL': price += 50;
                break;
            case 'SIZE_BIG': price += 100;
                break;
            default: 'Choose size of you hamburger'
        };

        switch (this.stuffing) {
            case 'STUFFING_CHEESE': price += 10;
                break;
            case 'STUFFING_SALAD': price += 20;
                break;
            case 'STUFFING_POTATO': price += 15;
                break;
            default: 'Choose stuffing'
        };

        if (this.topping.length !== 0) {
            for(let i = 0; i < this.topping.length; i++) {
                switch(this.topping[i]) {
                    case 'TOPPING_MAYO': price += 20;
                        break;
                    case 'TOPPING_SAUCE': price += 15;
                        break;
                    default: 'You don`t add any topping';
                }
            }
        };

        return price;
    }
}

const hamb1 = new Hamburger ('SIZE_SMALL', 'STUFFING_CHEESE')
hamb1.addTopping('TOPPING_MAYO')
hamb1.addTopping('TOPPING_SAUCE')
console.log(hamb1);
console.log(hamb1.calculate());
console.log(hamb1.calculatePrice());
hamb1.addTopping('TOPPING_SAUCE');
console.log(hamb1.calculatePrice());