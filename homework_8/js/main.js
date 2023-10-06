/*//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = '';

for (let i = 10; i <= 20; i++) {
    numbers = numbers + i + ', ';
}

console.log(numbers);
*/

/*//2. Вивести квадрати чисел від 10 до 20.
let numbers = '';

for (let i = 10; i <= 20; i++) {
    numbers = numbers + (i ** 2) + ', ';
}

console.log(numbers);
*/

/*//3. Вивести таблицю множення на 7.
let numbers = '';
let text = document.getElementById('table')

for (let i = 1; i <= 10; i++) {
    numbers = numbers + `7 * ${i} = ${7*i}` + '<br>';
    text.innerHTML = numbers;
}
*/

/*//4. Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0

for (let i = 0; i <= 15; i++) {
    sum += i;
}

console.log(sum);
*/

/*//5. Знайти добуток усіх цілих чисел від 15 до 35.

let numbers = 1;

for (let i = 15; i <= 35; i++) {
    numbers *= i;
}

console.log(numbers);
*/

/*//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let numbers = 0;
let lastNumber = 500

for (let i = 1; i <= lastNumber; i++) {
    numbers += i;
}

let arithm = numbers / lastNumber;

console.log(arithm);

*/

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0

for (let i = 30; i <= 80; i += 2) {
    sum += i;
}

console.log(sum);