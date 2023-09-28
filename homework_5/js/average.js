
const firstNumber = +prompt('Now I`ll calculate the average of your numbers. Please, write the first one:' );
const secondNumber = +prompt('Second number: ' );
const thirdNumber = +prompt('And the last number: ' );

// if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(secondNumber)) {
//     alert('Please, write only numbers')
// } else {
//     const average = (firstNumber + secondNumber + thirdNumber) / 3;
//     alert(`avarage of ${firstNumber}, ${secondNumber} and ${thirdNumber} is ${Math.floor(average)}`);
// }

if(isNaN(firstNumber)) {
    alert('First position is incorrect. Please, write only numbers');
} else if(isNaN(secondNumber)) {
    alert('Second position is incorrect. Please, write only numbers');
} else if(isNaN(thirdNumber)) {
    alert('Third position is incorrect. Please, write only numbers');
} else {
    const average = (firstNumber + secondNumber + thirdNumber) / 3;
    alert(`avarage of ${firstNumber}, ${secondNumber} and ${thirdNumber} is ${Math.floor(average)}`);
}
