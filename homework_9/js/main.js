/*//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = '';

for (let i = 20; i <= 30; i += 0.5) {
    numbers += i + ' ';
}

console.log(numbers);
*/

/*//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let $ = '';
let cost = 27;
let h1 = document.getElementById('title');
let text = document.getElementById('table')

h1.innerHTML = `Курс долара на сьогодні: 1$ = 27UAH `;

for (let i = 10; i <= 100; i += 10) {
    $ += `${i} $ = ${i * cost} UAH  <br>`;
    text.innerHTML = $;
}
*/


/*//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let n = +prompt('Введіть ціле число: ');
let N = parseInt(n);
let text = document.getElementById('table');


for (let i = 1; i <= 100; i++) {
    if ((i ** 2) < N) {
        text.innerHTML += ` ${i},  `;
    }
}
*/


/*//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let n = +prompt('Введіть ціле число: ');
let N = parseInt(n);
let h1 = document.getElementById('title');
let text = document.getElementById('table');
let isTrue = true;

h1.innerHTML = `Введене ціле число: ${N}`;

for (let i = 2; i < N; i++) {
    if (N % i === 0) {
        isTrue = false;
    };
}

if (isTrue) {
    text.innerHTML = `${N} є простим числом`;
} else {
    text.innerHTML = `${N} не є простим числом`;
}
*/

//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let n = +prompt('Введіть ціле число: ');
let N = parseInt(n);
let text = document.getElementById('table');
let isTrue = false;
let number = '';


for (let i = 1;; i++) {
    if (3 ** i === N) {
        isTrue = true;
        number = i;
        break;
    };
}

if (isTrue) {
    text.innerHTML = `Введене число ${N} можна отримати возвівши число 3 у ${number} ступінь`;
} else {
    text.innerHTML = `Введене число ${N} не можна отримати возвівши число 3 у ступінь`;
}












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

