let whatToDo = prompt('Hello! I help you to calculate your numbers =) You can add (ADD), subtract (SUB), multiply (MULT) or divide (DIV).    To continue, enter the appropriate command:');

const firstNumber = prompt('Enter first number', );
const secondNumber = prompt('Enter second number', );

if (whatToDo === 'ADD' || whatToDo === 'add') {
    alert(+firstNumber+'+'+secondNumber+'='+(+firstNumber + +secondNumber));
} else if (whatToDo === 'SUB' || whatToDo === 'sub') {
    alert(+firstNumber+'-'+secondNumber+'='+(firstNumber - secondNumber));
} else if (whatToDo === 'MULT' || whatToDo === 'mult') {
    alert(+firstNumber+'*'+secondNumber+'='+(firstNumber * secondNumber));
} else  if (whatToDo === 'DIV' || whatToDo === 'div') {
    alert(+firstNumber+'/'+secondNumber+'='+(firstNumber / secondNumber));
} else {
    alert('Something went wrong =(  Try one more time');
}

