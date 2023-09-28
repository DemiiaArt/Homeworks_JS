let whatToDo = prompt('Hello! I help you to calculate your numbers =) You can add (ADD), subtract (SUB), multiply (MULT) or divide (DIV).    To continue, enter the appropriate command:' );
// const validCommand = whatToDo.toLowerCase();

const firstNumber = +prompt('Enter first number' );
const secondNumber = +prompt('Enter second number' );


if (whatToDo.toLowerCase() === 'add') {
    const adding = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${adding}`);
} else if (whatToDo.toLowerCase() === 'sub') {
    const subtracting = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${subtracting}`);
} else if (whatToDo.toLowerCase() === 'mult') {
    const multipling = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${multipling}`);
} else  if (whatToDo.toLowerCase() === 'div') {
    if (secondNumber === 0) {
        alert('Division by zero cannot be performed');
    }
        else {
            const dividing = firstNumber / secondNumber;
            alert(`${firstNumber} / ${secondNumber} = ${dividing}`);
    }
} else {
    alert('Something went wrong =(  Try to use valid command: ADD, SUB, MULT, or DIV.');
}

