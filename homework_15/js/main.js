/*//===1. Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arrayWithoutControl = [11, 'Dan', 755, true, 25, 'Hello', 6];
// arrayWithoutNumbers = ['Kate', 'Nat', 'milk']

const numberCalculeting = function (myArray) {
    let numberFilter = myArray.filter(item => typeof item === 'number')

    if (numberFilter.length === 0) {
        return 'There are no numbers =('
    }

    let numbersSumm = numberFilter.reduce(function(summ, numbersItem) {
        return summ += numbersItem;
    }, 0);

    let numberAverage = numbersSumm / numberFilter.length;

    return Math.floor(numberAverage);
};

console.log('Дано масив: ', arrayWithoutControl);
console.log('Середнє арифметичне лише числових елементів даного масиву: ', numberCalculeting(arrayWithoutControl));
// console.log(numberCalculeting(arrayWithoutNumbers));
*/


/*//===2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
//вказаної в змінній znak.Обидва числа і знак виходять від користувача.


const doMath = function(x, znak, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    if (isNaN(x)) {
        return 'Перше введене значення не є числом';
    };

    if (isNaN(y)) {
        return 'Друге введене значення не є числом';
    };

    switch (znak) {
        case '+':
            return `${x} + ${y} = ${x + y}`;

        case '-':
            return `${x} - ${y} = ${x - y}`;

        case '/':
            if (y === 0) {
                return 'Діленняна нуль неможливе';
            } else {
                return `${x} / ${y} = ${x / y}`;
            };

        case '*':
            return `${x} * ${y} = ${x * y}`;

        case '%':
            return `${x} % ${y} = ${x % y}`;

        case '^':
            return `${x} ^ ${y} = ${x ^ y}`;

        default: 
            return 'Невірний математичний оператор. Використовуйте: +, -, *, /, % або ^';
    }
}


let number1 = prompt('Введіть перше число:')
let number2 = prompt('Введіть друге число:')
let whatToDo = prompt('Яку операцію виконуємо?  Додаваня: введіть знак +, віднімання: знак -, множення: знак *, ділення: знак /, модуль числа: знак %, возведеня у ступінь: знак ^')

console.log(doMath(number1, whatToDo, number2));
*/


/*//===3. Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

function fillArray() {
    const globalArray = [];
    const globalElements = +prompt('Введіть кількість ОСНОВНИХ елементів масиву:');

    if (isNaN(globalElements)) {
        return alert('Введіть ЧИСЛО потрібних основних елементів');
    }

    for (let g = 0; g < globalElements; g++) {
        const innerElements = +prompt(`Введіть кількість ВНУТРІШНІХ елементів для основного елементу ${g + 1}:`);

        if (isNaN(innerElements)) {
            return alert('Введіть ЧИСЛО потрібних внутрішніх елементів');
        }

        const innerArray = [];

        for(let i = 0; i < innerElements; i++) {
            const promptValue = prompt(`Введіть значення для ${i + 1} внутрішнього елементу в ${g + 1} основному елементі`);
            if (isNaN(promptValue)) {
                innerArray.push(promptValue);
            } else {
                innerArray.push(+promptValue);
            };
        }

        globalArray.push(innerArray);
    }

    return globalArray;
};

console.log(fillArray());
*/


/*//===4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.

function deleteLetters(promptString, letters) {
    const clearString = promptString.trim().split('');
    // console.log(clearString);

    const clearLetters = letters.replace(/[$, ' ']/g, '').split('');
    // console.log(clearLetters); 

    function filterLetters (letter) {
        for (i = 0; i < clearLetters.length; i++) {
            if (clearLetters[i] === letter) {
                return false;
            }
        };

        return true;
    }

    const filtredString = clearString.filter(filterLetters).join('');
    // console.log(filtredString);

    return filtredString;
}

const writeString = prompt('Напишіть рядок який потрібно відкорегувати (з малої літери): ')
if (typeof(writeString) != 'string') {
    alert ('Ви не ввели нічого для редагування =(')
} else {
    const writeLetters = prompt('Введіть символи, які треба видалити з рядка: ')
    
    console.log('Рядок до видалення символів: ', writeString);
    console.log('Рядок після видалення символів: ', deleteLetters(writeString, writeLetters));
}
*/