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
let h1 = document.getElementById('title');
let text = document.getElementById('table')

h1.innerHTML = `Таблиця множення на 7`;

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

/*//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0

for (let i = 30; i <= 80; i += 2) {
    sum += i;
}

console.log(sum);
*/

/*//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let numbers = 100

while (numbers <= 200) {
    if (numbers % 3 === 0) {
        console.log(numbers);
    }
numbers++;
}

*/

/*//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let N = +prompt('Введіть ціле число: ');
let h1 = document.getElementById('title');
let text = document.getElementById('table');

h1.innerHTML = `Введене число: ${N}`;
text.innerHTML = `Дільники:  <br>`;

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        text.innerHTML += ` ${i},  `;
    }
}
*/

/*//10. Визначити кількість його парних дільників.

let N = +prompt('Введіть ціле число: ');
let h1 = document.getElementById('title');
let text = document.getElementById('table');
let numbers = [];

h1.innerHTML = `Введене число: ${N}`;
text.innerHTML = `Парні дільники:  <br>`;

for (let i = 1; i <= N; i++) {
    if (N % i === 0 && i % 2 === 0) {
        numbers.push(i);
        text.innerHTML += ` ${i},  `;
    }
}

text.innerHTML = `${text.innerHTML} <br> А їх кількість = ${numbers.length} шт.`;
*/

/*//11. Знайти суму його парних дільників.

let N = +prompt('Введіть ціле число: ');
let h1 = document.getElementById('title');
let text = document.getElementById('table');
let sum = 0;

h1.innerHTML = `Введене число: ${N}`;
text.innerHTML = `Парні дільники:  <br>`;

for (let i = 1; i <= N; i++) {
    if (N % i === 0 && i % 2 === 0) {
        text.innerHTML += ` ${i},  `;
        sum += i;
    }
}

text.innerHTML = `${text.innerHTML} <br> А їх сума = ${sum}`;

*/

/*//12. Надрукувати повну таблицю множення від 1 до 10.

let numbers = '';
let h1 = document.getElementById('title');
let text = document.getElementById('table')

h1.innerHTML = `Таблиця множення`;

for ( let x = 1; x <= 10; x++) {
    for (i = 1; i <= 10; i++) {
        numbers += `${x} * ${i} = ${x * i}` + '<br>';
    }
    numbers += '<hr>'
}
text.innerHTML = numbers;
*/

