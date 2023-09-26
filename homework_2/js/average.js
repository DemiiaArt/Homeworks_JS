
const firstNumber = prompt('Now I`ll calculate the average of your numbers. Please, write the first one:' );
const secondNumber = prompt('Second number: ' );
const thirdNumber = prompt('And the last number: ' );

const average = (+firstNumber + +secondNumber + +thirdNumber) / 3;

alert('avarage of: '+firstNumber+'+'+secondNumber+'+'+thirdNumber+' = '+ Math.floor(average));
