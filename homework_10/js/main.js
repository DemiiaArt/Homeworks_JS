let text = document.getElementById('text');
const userPrompt = prompt('Напишіть від 5-ти довільних чисел цифрами: ');
console.log(userPrompt);


userArraySplit = userPrompt.trim().split(' ');
console.log('Масив введених чисел:', userArraySplit);
console.log('Довжина створеного масиву:', userArraySplit.length + ' значень');
text.innerHTML = `Введені числа: ${userArraySplit.join(', ')} <br>`;
text.innerHTML += `Довжина створеного масиву: ${userArraySplit.length} значень <hr>`;



userArraySort = userArraySplit.sort(function compare (a, b) { return a - b; });
console.log('Сортований масив введених значень за зростанням:', userArraySort);
text.innerHTML += `Сортований масив введених значень за зростанням: ${userArraySort.join(', ')} <hr>`;


userArrayRedact = userArraySort.splice(1, 3);
console.log('Видалені елементи з 2 по 4 (включно):', userArrayRedact);
text.innerHTML += `Видалені елементи з 2 по 4 (включно): ${userArrayRedact.join(', ')} <br>`;

console.log('Масив після змін:', userArraySort);
text.innerHTML += `Масив після змін: ${userArraySort.join(', ')} <hr>`;
