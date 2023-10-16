
/*//=====1.Знайти суму та кількість позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0);
console.log('Позитивні елементи:', positivElements);

console.log('Кількість позитивних елементів:', positivElements.length);

let positivElementsSumm = positivElements.reduce( function(elementsSumm, item) {
    return elementsSumm + item;
}, 0);

console.log('Сума позитивних елементів:',positivElementsSumm);
*/


//=====2.Знайти мінімальний елемент масиву та його порядковий номер.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

//=====> Варіант 1 знаходження мінімального значення =======> через функцію
// const elements = function(myArray) {
//     let minElement = myArray[0];

//     for (const element of myArray) {
//         if(minElement > element) {
//             minElement = element;
//         };
//     };

//     return minElement
// };

// const minElement = elements(myArray);
// console.log('мінімальний елемент масиву: ', minElement);


// =====> Варіант 2 знаходження мінімального значення =======> через Math.min
// const minElement = Math.min(...myArray);
// console.log('мінімальний елемент масиву: ', minElement);

// =====> Варіант 3 знаходження мінімального значення =======> через сортування масиву
// const sortedArray = myArray.toSorted(function(a, b) {
//     return a - b;
// });

// const minElement = sortedArray[0];
// console.log('Мінімальний елемент масиву: ', minElement);

// =====> Варіант 4 знаходження мінімального значення =======> через псевдомасив arguments

function findMin() {
    if(arguments.length === 0) {
        return undefined;
    }

    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}
const minElement = findMin(...myArray);

console.log('Мінімальний елемент масиву: ', minElement);


const minElementIndex = myArray.indexOf(minElement);
console.log('Порядковий номер мінімального елементу масиву: ', minElementIndex + 1);



/*//=====3.Знайти максимальний елемент масиву та його порядковий номер.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

myArray.forEach(function(element, index) {
    if (element === Math.max(...myArray)) {
        console.log('Максимальний елемент масиву: ', element);
        console.log('Порядковий номер максимального елементу масиву: ', index + 1);
    };
});
*/


/*//=====4.Визначити кількість негативних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let negativeElements = myArray.filter(item => item < 0);
console.log(negativeElements);

console.log('Кількість негативних елементів:', negativeElements.length);

*/


/*//=====5.Знайти кількість непарних позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0 && item % 2 !== 0);
console.log('Непарні позитивні елементи:', positivElements);

console.log('Кількість непарних позитивних елементів:', positivElements.length);
*/


/*//=====6.Знайти кількість парних позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0 && item % 2 === 0);
console.log('Парні позитивні елементи:', positivElements);

console.log('Кількість парних позитивних елементів:', positivElements.length);
*/


/*//=====7.Знайти суму парних позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0 && item % 2 === 0);
console.log('Парні позитивні елементи:', positivElements);

const positivElementsSumm = positivElements.reduce(function(summary, item) {
    return summary + item;
}, 0)
console.log('Сума парних позитивних елементів:', positivElementsSumm);
*/


/*//=====8.Знайти суму непарних позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0 && item % 2 !== 0);
console.log('Непарні позитивні елементи:', positivElements);

const positivElementsSumm = positivElements.reduce(function(summary, item) {
    return summary + item;
}, 0)
console.log('Сума непарних позитивних елементів:', positivElementsSumm);
*/


/*//=====9.Знайти добуток позитивних елементів.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let positivElements = myArray.filter(item => item > 0);
console.log('Позитивні елементи:', positivElements);


let positivElementsMult = positivElements.reduce( function(elementsSumm, item) {
    return elementsSumm * item;
}, 1);

console.log('Добуток позитивних елементів:', BigInt(positivElementsMult));
*/


/*//=====10.Знайти найбільший серед елементів масиву, ост альні обнулити.=====
const myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 
    27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Дано масив:', myArray);

let maxElement = Math.max(...myArray);

let myNewArray = myArray.map(function(element) {
    if (element !== maxElement) {
        element = 0;
    } else {
        element = maxElement;
    }

    return element;
});

console.log('Новий масив:', myNewArray);
*/