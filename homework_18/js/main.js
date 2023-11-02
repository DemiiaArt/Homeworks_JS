console.log({}.prototype === {}.prototype); //true АЛЕ тут порівнюються 2 значення undefined
console.log({}.prototype); //undefined, бо у об'єктів немає .prototype

function sayHello() {};
console.log(sayHello.prototype); //це прототип для об'єктів, які будуть створені за допомогою цієї функції
console.log(sayHello.__proto__); //це прототип самої функції
console.log(sayHello.prototype === sayHello.__proto__); //false 

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); //true бо обидві функції вказуть на однаковий глобальний прототип для функцій Function.prototype
console.log(sayHello.prototype === sayGoodBye.prototype); //false бо ф-ції різні і створені ними об'єкти теж матимуть різні особисті прототипи

let arrowFunc = () => {};
console.log(arrowFunc.prototype) //undefined бо у стрілочних функцій немає prototype
console.log(Object.prototype) // глобальний прототип для об'єктів
console.log(arrowFunc.prototype === Object.prototype); //false 

let age = 22;
console.log(age.prototype === Number.prototype); //false адже методу prototype у чисел немає
console.log(age.__proto__ === Number.prototype); //true бо число створене літералом числа і має доступ до глобаного прототипу Number.prototype

function Test() {}
console.log(Test.__proto__ === Function.prototype); //true бо ф-ція Test при створенні успадкувала __proto__ від  Function.prototype

let num = 77;
console.log(num.__proto__ === Number.prototype) //true бо число створене літералом числа і успадкувало глобальний прототип Number.prototype